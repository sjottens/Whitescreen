// components/hardware/used-laptop-check.tsx - Step-by-step checklist for
// inspecting a second-hand laptop. A few checks run right here (screen colors,
// left/right speakers, battery, what the browser can tell about the hardware);
// keyboard, webcam and mic link to their full tests. The results can be
// emailed to the visitor from above or below the list.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { STEPS, type StepStatus as Status } from '@/lib/used-laptop-steps';
import EmailResultsForm from './email-results-form';

const SCREEN_COLORS = ['#FFFFFF', '#000000', '#FF0000', '#00FF00', '#0000FF'];

interface BatteryInfo {
  level: number;
  charging: boolean;
}

interface SystemInfo {
  cores: number | null;
  memory: number | null;
  resolution: string;
  touch: boolean;
}

export default function UsedLaptopCheck() {
  const [status, setStatus] = useState<Record<string, Status | undefined>>({});
  const [colorIndex, setColorIndex] = useState<number | null>(null);
  const [battery, setBattery] = useState<BatteryInfo | null | 'unsupported'>(null);
  const [system, setSystem] = useState<SystemInfo | null>(null);
  // Which "Email me the results" button opened the form, so it appears next to it.
  const [emailFormAt, setEmailFormAt] = useState<'top' | 'bottom' | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<AudioContext | null>(null);

  // What the browser can tell about the hardware. Read on mount, so the server
  // render and the first client render match.
  useEffect(() => {
    const nav = navigator as Navigator & { deviceMemory?: number };
    setSystem({
      cores: nav.hardwareConcurrency || null,
      memory: nav.deviceMemory ?? null,
      resolution: `${Math.round(screen.width * devicePixelRatio)} x ${Math.round(screen.height * devicePixelRatio)}`,
      touch: navigator.maxTouchPoints > 0,
    });

    const getBattery = (navigator as Navigator & { getBattery?: () => Promise<{ level: number; charging: boolean; addEventListener: (t: string, f: () => void) => void }> }).getBattery;
    if (!getBattery) {
      setBattery('unsupported');
      return;
    }
    getBattery.call(navigator).then((b) => {
      const update = () => setBattery({ level: Math.round(b.level * 100), charging: b.charging });
      update();
      b.addEventListener('levelchange', update);
      b.addEventListener('chargingchange', update);
    }).catch(() => setBattery('unsupported'));
  }, []);

  const startScreenTest = async () => {
    setColorIndex(0);
    try {
      await screenRef.current?.requestFullscreen();
    } catch {
      // Not allowed (e.g. iPhone): the colors still fill the box.
    }
  };

  const nextColor = useCallback(() => {
    setColorIndex((i) => {
      if (i === null) return i;
      if (i + 1 < SCREEN_COLORS.length) return i + 1;
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      return null;
    });
  }, []);

  useEffect(() => {
    const onChange = () => {
      if (!document.fullscreenElement) setColorIndex(null);
    };
    // Where full screen isn't available the colors are a fixed overlay; Esc closes that too.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setColorIndex(null);
    };
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const playTone = (pan: -1 | 0 | 1) => {
    const ctx = audioRef.current ?? new AudioContext();
    audioRef.current = ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const panner = ctx.createStereoPanner();
    osc.frequency.value = 440;
    panner.pan.value = pan;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
    osc.connect(gain).connect(panner).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.05);
  };

  const done = STEPS.filter((s) => status[s.id]).length;
  const problems = STEPS.filter((s) => status[s.id] === 'problem');

  const emailButton = (at: 'top' | 'bottom') => (
    <button
      type="button"
      aria-expanded={emailFormAt === at}
      onClick={() => setEmailFormAt(emailFormAt === at ? null : at)}
      className="btn btn-primary btn-sm focus-ring"
    >
      Email me the results
    </button>
  );

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 md:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-300" aria-live="polite">
          {done} of {STEPS.length} checked
          {problems.length > 0 && <span className="text-red-300"> · {problems.length} problem{problems.length > 1 ? 's' : ''}</span>}
        </p>
        {emailButton('top')}
      </div>
      {emailFormAt === 'top' && (
        <div className="mb-4">
          <EmailResultsForm results={status} system={system} />
        </div>
      )}

      <ol className="list-none space-y-3 pl-0">
        {STEPS.map((step, index) => (
          <li key={step.id} className="mb-0 rounded-lg border border-slate-700 bg-slate-950/40 p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="mb-1 text-base font-semibold text-slate-100 md:text-lg">
                  {index + 1}. {step.title}
                </h2>
                <p className="text-sm text-slate-300">{step.hint}</p>
              </div>
              <div className="flex gap-2" role="group" aria-label={`${step.title} result`}>
                {(['ok', 'problem'] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={status[step.id] === value}
                    onClick={() => setStatus((s) => ({ ...s, [step.id]: s[step.id] === value ? undefined : value }))}
                    className={`rounded-lg border px-3 py-1.5 text-sm font-medium focus-ring ${
                      status[step.id] === value
                        ? value === 'ok'
                          ? 'border-[#00DC82] bg-[#00DC82]/15 text-[#00DC82]'
                          : 'border-red-400 bg-red-500/15 text-red-300'
                        : 'border-slate-600 text-slate-300 hover:border-slate-400'
                    }`}
                  >
                    {value === 'ok' ? 'OK' : 'Problem'}
                  </button>
                ))}
              </div>
            </div>

            {step.link && (
              <Link href={step.link.href} target="_blank" className="mt-2 inline-block text-sm text-cyan-300 hover:underline">
                {step.link.label} (opens in a new tab)
              </Link>
            )}

            {step.id === 'screen' && (
              <div className="mt-3">
                <div
                  ref={screenRef}
                  onClick={nextColor}
                  // Collapsed rather than display:none, so it can be asked to go full screen.
                  className={colorIndex === null ? 'h-0 overflow-hidden' : 'fixed inset-0 z-50 cursor-pointer'}
                  style={{ backgroundColor: colorIndex === null ? undefined : SCREEN_COLORS[colorIndex] }}
                  aria-hidden={colorIndex === null}
                >
                  {colorIndex !== null && (
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded bg-black/60 px-3 py-1 text-sm text-white">
                      Color {colorIndex + 1} of {SCREEN_COLORS.length} · click or tap for the next one · Esc to stop
                    </p>
                  )}
                </div>
                <button type="button" onClick={startScreenTest} className="btn btn-primary btn-sm focus-ring">
                  Show test colors
                </button>
              </div>
            )}

            {step.id === 'speakers' && (
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" onClick={() => playTone(-1)} className="btn btn-secondary btn-sm focus-ring">
                  Left speaker
                </button>
                <button type="button" onClick={() => playTone(1)} className="btn btn-secondary btn-sm focus-ring">
                  Right speaker
                </button>
                <button type="button" onClick={() => playTone(0)} className="btn btn-secondary btn-sm focus-ring">
                  Both
                </button>
              </div>
            )}

            {step.id === 'battery' && (
              <p className="mt-3 text-sm text-slate-400">
                {battery === null && 'Reading battery status...'}
                {battery === 'unsupported' &&
                  "This browser doesn't share battery status. Check the battery icon in the taskbar or menu bar instead."}
                {battery !== null && battery !== 'unsupported' && (
                  <>
                    Battery now: <strong className="text-slate-200">{battery.level}%</strong>,{' '}
                    {battery.charging ? 'charging' : 'not charging'}. Battery health (wear) is not visible to a browser;
                    see &quot;Check the battery health&quot; below the checklist.
                  </>
                )}
              </p>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-300">Done? Get the results in your inbox to keep or send to the seller.</p>
        {emailButton('bottom')}
      </div>
      {emailFormAt === 'bottom' && (
        <div className="mt-4">
          <EmailResultsForm results={status} system={system} />
        </div>
      )}

      {system && (
        <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950/40 p-4 text-sm text-slate-300">
          <h2 className="mb-2 text-base font-semibold text-slate-100 md:text-base">What this browser can see</h2>
          <ul className="list-none space-y-1 pl-0">
            <li className="mb-0">Screen resolution: {system.resolution}</li>
            {system.cores && <li className="mb-0">Processor threads: {system.cores}</li>}
            {system.memory && <li className="mb-0">Memory: {system.memory >= 8 ? '8 GB or more' : `about ${system.memory} GB`}</li>}
            <li className="mb-0">Touchscreen: {system.touch ? 'yes' : 'no'}</li>
          </ul>
          <p className="mt-2 text-slate-400">
            Browsers round these numbers on purpose. Compare the exact processor, memory and storage with the
            advert in the laptop&apos;s own system settings.
          </p>
        </div>
      )}
    </div>
  );
}
