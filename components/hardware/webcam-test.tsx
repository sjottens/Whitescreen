// components/hardware/webcam-test.tsx - Webcam test: live (mirrored) preview,
// camera picker, the resolution and frame rate the camera really delivers,
// and a PNG snapshot kept on the visitor's device.

'use client';

import { useEffect, useRef, useState } from 'react';
import { CAMERA_ERRORS } from '@/lib/media-errors';
import { useMediaStream } from './use-media-stream';

// Ask for up to 1080p; the camera answers with the closest it can do.
const videoConstraints = (deviceId?: string): MediaTrackConstraints => ({
  deviceId: deviceId ? { exact: deviceId } : undefined,
  width: { ideal: 1920 },
  height: { ideal: 1080 },
});

interface VideoInfo {
  width: number;
  height: number;
  reportedFps: number | null;
}

type FrameCallbackVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: (now: number, meta: { presentedFrames: number }) => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

export default function WebcamTest() {
  const { stream, devices, deviceId, error, starting, start, stop } = useMediaStream('video', videoConstraints);

  const [mirror, setMirror] = useState(true);
  const [info, setInfo] = useState<VideoInfo | null>(null);
  const [measuredFps, setMeasuredFps] = useState<number | null>(null);
  const [canMeasure, setCanMeasure] = useState(true);
  const [snapshot, setSnapshot] = useState<string | null>(null);

  const videoRef = useRef<FrameCallbackVideo>(null);

  // Attach the stream and read what the camera actually delivers.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.srcObject = stream;
    setInfo(null);
    setMeasuredFps(null);
    if (!stream) return;

    const track = stream.getVideoTracks()[0];
    const update = () => {
      const settings = track?.getSettings() ?? {};
      setInfo({
        width: video.videoWidth || settings.width || 0,
        height: video.videoHeight || settings.height || 0,
        reportedFps: settings.frameRate ? Math.round(settings.frameRate * 10) / 10 : null,
      });
    };
    video.addEventListener('loadedmetadata', update);
    // Some cameras renegotiate the size after the first frames.
    video.addEventListener('resize', update);
    video.play().catch(() => {});
    return () => {
      video.removeEventListener('loadedmetadata', update);
      video.removeEventListener('resize', update);
    };
  }, [stream]);

  // Measure the real frame rate from presented frames, once per second.
  useEffect(() => {
    const video = videoRef.current;
    if (!stream || !video) return;
    if (!video.requestVideoFrameCallback) {
      setCanMeasure(false);
      return;
    }
    let handle = 0;
    let windowStart = 0;
    let framesAtStart = 0;
    const onFrame = (now: number, meta: { presentedFrames: number }) => {
      if (!windowStart) {
        windowStart = now;
        framesAtStart = meta.presentedFrames;
      } else if (now - windowStart >= 1000) {
        setMeasuredFps(((meta.presentedFrames - framesAtStart) * 1000) / (now - windowStart));
        windowStart = now;
        framesAtStart = meta.presentedFrames;
      }
      handle = video.requestVideoFrameCallback!(onFrame);
    };
    handle = video.requestVideoFrameCallback(onFrame);
    return () => video.cancelVideoFrameCallback?.(handle);
  }, [stream]);

  // Free the previous snapshot when it's replaced, and on unmount.
  useEffect(() => {
    if (!snapshot) return;
    return () => URL.revokeObjectURL(snapshot);
  }, [snapshot]);

  const takeSnapshot = () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    // Save what you see: mirrored when the preview is mirrored.
    if (mirror) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) setSnapshot(URL.createObjectURL(blob));
    }, 'image/png');
  };

  const live = !!stream;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 md:p-5">
      <div className="mb-4 flex flex-wrap items-center gap-3">
        {live ? (
          <button type="button" onClick={stop} className="btn btn-secondary focus-ring">
            Stop
          </button>
        ) : (
          <button type="button" onClick={() => start()} disabled={starting} className="btn btn-primary hover:scale-100 focus-ring">
            {starting ? 'Waiting for permission…' : 'Start webcam test'}
          </button>
        )}
        <label className="flex min-w-0 flex-1 items-center gap-2 text-sm text-slate-300">
          <span className="whitespace-nowrap">Camera</span>
          <select
            value={deviceId}
            onChange={(e) => start(e.target.value)}
            disabled={!live || devices.length === 0}
            className="min-w-0 flex-1 truncate rounded-lg border border-slate-600 bg-slate-950 px-2 py-2 text-sm text-slate-100 disabled:opacity-50 focus-ring"
          >
            {devices.length === 0 && <option value="">Available after you click Start</option>}
            {devices.map((d, i) => (
              <option key={d.deviceId || i} value={d.deviceId}>
                {d.label || `Camera ${i + 1}`}
              </option>
            ))}
          </select>
        </label>
      </div>

      {error && (
        <p role="alert" className="mb-4 rounded-lg border border-red-500/50 bg-red-950/60 p-3 text-sm text-red-100">
          {CAMERA_ERRORS[error]}
        </p>
      )}

      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          aria-label="Live webcam preview"
          className="h-full w-full object-contain"
          style={mirror ? { transform: 'scaleX(-1)' } : undefined}
        />
        {!live && (
          <p className="absolute inset-0 m-0 flex items-center justify-center px-4 text-center text-sm text-slate-400">
            {starting ? 'Allow camera access in the pop-up from your browser.' : 'Your camera picture appears here.'}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-200">
          <input
            type="checkbox"
            checked={mirror}
            onChange={(e) => setMirror(e.target.checked)}
            className="h-4 w-4 accent-[#00DC82] focus-ring"
          />
          Mirror preview
        </label>
        <button type="button" onClick={takeSnapshot} disabled={!live} className="btn btn-secondary disabled:opacity-50 focus-ring">
          Take a snapshot
        </button>
      </div>

      <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
        <div>
          <dt className="text-slate-400">Resolution</dt>
          <dd className="font-mono text-base font-semibold tabular-nums text-slate-100">
            {info && info.width ? `${info.width} × ${info.height}` : '–'}
          </dd>
        </div>
        <div>
          <dt className="text-slate-400">Frame rate (camera reports)</dt>
          <dd className="font-mono text-base font-semibold tabular-nums text-slate-100">
            {info?.reportedFps ? `${info.reportedFps} fps` : '–'}
          </dd>
        </div>
        <div>
          <dt className="text-slate-400">Frame rate (measured live)</dt>
          <dd className="font-mono text-base font-semibold tabular-nums text-slate-100">
            {!canMeasure ? 'Not available in this browser' : measuredFps !== null ? `${measuredFps.toFixed(1)} fps` : '–'}
          </dd>
        </div>
      </dl>

      {snapshot && (
        <div className="mt-4 flex flex-wrap items-center gap-4 rounded-lg border border-slate-700 p-3">
          <img src={snapshot} alt="Your snapshot" className="h-20 w-auto rounded" />
          <a href={snapshot} download="webcam-snapshot.png" className="btn btn-outline focus-ring">
            Save snapshot (PNG)
          </a>
        </div>
      )}
    </div>
  );
}
