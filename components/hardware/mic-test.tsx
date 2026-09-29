// components/hardware/mic-test.tsx - Microphone test: live level meter,
// waveform, input picker and a 5-second local recording.
//
// Nothing leaves the browser: audio goes microphone -> Web Audio analyser,
// and the recording is a blob URL that's revoked when it's replaced or the
// component unmounts.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { MIC_ERRORS } from '@/lib/media-errors';
import { useMediaStream } from './use-media-stream';

const RECORD_SECONDS = 5;
// Meter range: -60 dBFS (silence) to 0 dBFS (clipping). Normal speech at arm's
// length sits around -30 to -20 dBFS, i.e. the middle of the bar.
const MIN_DB = -60;

// Raw input: echo cancellation, noise suppression and auto gain would hide
// exactly the hiss and level problems this test is meant to reveal.
const audioConstraints = (deviceId?: string): MediaTrackConstraints => ({
  deviceId: deviceId ? { exact: deviceId } : undefined,
  echoCancellation: false,
  noiseSuppression: false,
  autoGainControl: false,
});

export default function MicTest() {
  const { stream, devices, deviceId, error, starting, start, stop } = useMediaStream('audio', audioConstraints);

  const [recording, setRecording] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(RECORD_SECONDS);
  const [clipUrl, setClipUrl] = useState<string | null>(null);
  const [canRecord, setCanRecord] = useState(true);

  const coverRef = useRef<HTMLDivElement>(null);
  const meterRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCanRecord(typeof MediaRecorder !== 'undefined');
  }, []);

  // Level meter + waveform, rebuilt whenever the stream (device) changes.
  useEffect(() => {
    const cover = coverRef.current;
    const meter = meterRef.current;
    const canvas = canvasRef.current;
    const setLevel = (level: number) => {
      if (cover) cover.style.width = `${(1 - level) * 100}%`;
      meter?.setAttribute('aria-valuenow', String(Math.round(level * 100)));
    };

    if (!stream || !canvas) {
      setLevel(0);
      canvas?.getContext('2d')?.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    // Created after an await, so Safari may hand it over suspended.
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const source = ctx.createMediaStreamSource(stream);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    const samples = new Float32Array(analyser.fftSize);
    const draw = canvas.getContext('2d');
    let level = 0;
    let raf = 0;

    const frame = () => {
      analyser.getFloatTimeDomainData(samples);
      let sum = 0;
      for (let i = 0; i < samples.length; i++) sum += samples[i] * samples[i];
      const rms = Math.sqrt(sum / samples.length);
      const db = rms > 0 ? 20 * Math.log10(rms) : MIN_DB;
      const target = Math.min(1, Math.max(0, (db - MIN_DB) / -MIN_DB));
      // Fast attack, slow release, like a hardware meter.
      level = target > level ? target : level * 0.92 + target * 0.08;
      setLevel(level);

      if (draw) {
        const dpr = window.devicePixelRatio || 1;
        const w = Math.round(canvas.clientWidth * dpr);
        const h = Math.round(canvas.clientHeight * dpr);
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
        draw.clearRect(0, 0, w, h);
        draw.lineWidth = 2 * dpr;
        draw.strokeStyle = '#00DC82';
        draw.beginPath();
        const step = samples.length / w;
        for (let x = 0; x < w; x++) {
          const y = h / 2 - samples[Math.floor(x * step)] * (h / 2);
          if (x === 0) draw.moveTo(x, y);
          else draw.lineTo(x, y);
        }
        draw.stroke();
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      source.disconnect();
      ctx.close().catch(() => {});
      setLevel(0);
    };
  }, [stream]);

  const stopRecording = useCallback(() => {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = null;
    if (recorderRef.current && recorderRef.current.state !== 'inactive') recorderRef.current.stop();
  }, []);

  // A device switch or Stop ends any recording in progress.
  useEffect(() => stopRecording, [stream, stopRecording]);

  // Free the previous clip whenever it's replaced, and on unmount.
  useEffect(() => {
    if (!clipUrl) return;
    audioRef.current?.play().catch(() => {
      // Autoplay refused: the controls are there to press play.
    });
    return () => URL.revokeObjectURL(clipUrl);
  }, [clipUrl]);

  const record = () => {
    if (!stream || recording) return;
    let recorder: MediaRecorder;
    try {
      recorder = new MediaRecorder(stream);
    } catch {
      setCanRecord(false);
      return;
    }
    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };
    recorder.onstop = () => {
      setRecording(false);
      if (chunks.length > 0) {
        setClipUrl(URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType || 'audio/webm' })));
      }
    };
    recorderRef.current = recorder;
    setClipUrl(null);
    setRecording(true);
    setSecondsLeft(RECORD_SECONDS);
    recorder.start();

    let left = RECORD_SECONDS;
    tickRef.current = setInterval(() => {
      left -= 1;
      setSecondsLeft(left);
      if (left <= 0) stopRecording();
    }, 1000);
  };

  const handleStop = () => {
    stopRecording();
    stop();
  };

  const live = !!stream;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 md:p-5">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {live ? (
          <button type="button" onClick={handleStop} className="btn btn-secondary focus-ring">
            Stop
          </button>
        ) : (
          <button type="button" onClick={() => start()} disabled={starting} className="btn btn-primary hover:scale-100 focus-ring">
            {starting ? 'Waiting for permission…' : 'Start microphone test'}
          </button>
        )}
        <label className="flex min-w-0 flex-1 items-center gap-2 text-sm text-slate-300">
          <span className="whitespace-nowrap">Microphone</span>
          <select
            value={deviceId}
            onChange={(e) => start(e.target.value)}
            disabled={!live || devices.length === 0}
            className="min-w-0 flex-1 truncate rounded-lg border border-slate-600 bg-slate-950 px-2 py-2 text-sm text-slate-100 disabled:opacity-50 focus-ring"
          >
            {devices.length === 0 && <option value="">Available after you click Start</option>}
            {devices.map((d, i) => (
              <option key={d.deviceId || i} value={d.deviceId}>
                {d.label || `Microphone ${i + 1}`}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && (
        <p role="alert" className="mb-4 rounded-lg border border-red-500/50 bg-red-950/60 p-3 text-sm text-red-100">
          {MIC_ERRORS[error]}
        </p>
      )}

      <p id="mic-level-label" className="mb-1 text-sm text-slate-400">
        Input level
      </p>
      <div
        ref={meterRef}
        role="meter"
        aria-labelledby="mic-level-label"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        className="relative h-5 overflow-hidden rounded-md"
        style={{ background: 'linear-gradient(90deg, #16a34a 0%, #22c55e 60%, #eab308 60%, #eab308 85%, #dc2626 85%)' }}
      >
        <div ref={coverRef} className="absolute inset-y-0 right-0 bg-slate-800/90" style={{ width: '100%' }} />
      </div>
      <div className="mt-1 flex justify-between text-xs text-slate-400" aria-hidden="true">
        <span>Quiet</span>
        <span>Good</span>
        <span>Too loud</span>
      </div>

      <canvas
        ref={canvasRef}
        className="mt-4 block h-24 w-full rounded-lg bg-slate-950/60"
        aria-label="Live waveform of your microphone input"
        role="img"
      />

      <div className="mt-4 flex min-h-[3.5rem] flex-wrap items-center gap-3">
        {canRecord ? (
          <>
            <button
              type="button"
              onClick={record}
              disabled={!live || recording}
              className="btn btn-secondary disabled:opacity-50 focus-ring"
            >
              {recording ? `Recording… ${secondsLeft}s` : 'Record 5 seconds'}
            </button>
            {clipUrl && (
              // eslint-disable-next-line jsx-a11y/media-has-caption -- a recording of the visitor's own voice
              <audio ref={audioRef} src={clipUrl} controls className="h-10 max-w-full" />
            )}
          </>
        ) : (
          <p className="mb-0 text-sm text-slate-400">
            Your browser can&apos;t record audio. The meter above still shows whether your mic works.
          </p>
        )}
      </div>
    </div>
  );
}
