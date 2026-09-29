// components/hardware/click-speed-test.tsx - Clicks-per-second test.
//
// Counts pointerdown (not click) so fast clicking and touch taps aren't
// merged or delayed. The timer starts on the first press; after the run the
// area is locked for 1.5s so a late click doesn't start a new test.

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const DURATIONS = [1, 5, 10, 30] as const;
type Duration = (typeof DURATIONS)[number];

const LOCK_MS = 1500;
const STORAGE_KEY = 'testascreen_cps_best';

type Phase = 'idle' | 'running' | 'locked' | 'done';

function rating(cps: number): string {
  if (cps < 5) return "Warming up. Try again, you've got more in you.";
  if (cps < 8) return 'Right around average. Solid.';
  if (cps < 11) return 'Faster than most people. Nice.';
  if (cps < 14) return "That's seriously quick.";
  return "Either you've got a technique, or your mouse is double clicking. Read on below.";
}

function readBest(): Partial<Record<Duration, number>> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeBest(best: Partial<Record<Duration, number>>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(best));
  } catch {
    // Storage full or blocked (private mode): the test still works, the best score just isn't kept.
  }
}

export default function ClickSpeedTest() {
  const [duration, setDuration] = useState<Duration>(5);
  const [phase, setPhase] = useState<Phase>('idle');
  const [clicks, setClicks] = useState(0);
  const [remaining, setRemaining] = useState<number>(5);
  const [result, setResult] = useState<{ cps: number; clicks: number; newBest: boolean } | null>(null);
  const [best, setBest] = useState<Partial<Record<Duration, number>>>({});

  const startRef = useRef(0);
  const clicksRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lockRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const durationRef = useRef<Duration>(duration);

  useEffect(() => {
    setBest(readBest());
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (lockRef.current !== null) clearTimeout(lockRef.current);
    };
  }, []);

  const finish = useCallback(() => {
    const d = durationRef.current;
    const total = clicksRef.current;
    const cps = total / d;
    const stored = readBest();
    const newBest = total > 0 && cps > (stored[d] ?? 0);
    if (newBest) {
      stored[d] = cps;
      writeBest(stored);
    }
    setBest(stored);
    setResult({ cps, clicks: total, newBest });
    setRemaining(0);
    setPhase('locked');
    lockRef.current = setTimeout(() => setPhase('done'), LOCK_MS);
  }, []);

  const tick = useCallback(() => {
    const elapsed = (performance.now() - startRef.current) / 1000;
    const left = durationRef.current - elapsed;
    if (left <= 0) {
      rafRef.current = null;
      finish();
      return;
    }
    setRemaining(left);
    rafRef.current = requestAnimationFrame(tick);
  }, [finish]);

  const registerClick = useCallback(() => {
    if (phase === 'locked') return;
    if (phase === 'running') {
      // Presses that land after time is up (before the frame that ends the run) don't count.
      if (performance.now() - startRef.current >= durationRef.current * 1000) return;
      clicksRef.current += 1;
      setClicks(clicksRef.current);
      return;
    }
    // idle or done: this press starts a new run and counts as the first click
    durationRef.current = duration;
    startRef.current = performance.now();
    clicksRef.current = 1;
    setClicks(1);
    setResult(null);
    setRemaining(duration);
    setPhase('running');
    rafRef.current = requestAnimationFrame(tick);
  }, [phase, duration, tick]);

  const selectDuration = (d: Duration) => {
    if (phase === 'running') return;
    setDuration(d);
    setRemaining(d);
    setClicks(0);
    setResult(null);
    if (phase === 'done') setPhase('idle');
  };

  const running = phase === 'running';
  const areaLabel =
    phase === 'running'
      ? `${clicks} clicks`
      : phase === 'locked'
        ? 'Time is up'
        : 'Click here to start';

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4 md:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <fieldset className="flex items-center gap-2" disabled={running}>
          <legend className="sr-only">Test duration</legend>
          {DURATIONS.map((d) => (
            <label key={d} className="cursor-pointer">
              <input
                type="radio"
                name="cps-duration"
                value={d}
                checked={duration === d}
                onChange={() => selectDuration(d)}
                className="peer sr-only"
              />
              <span className="block rounded-lg border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-200 peer-checked:border-[#00DC82] peer-checked:bg-[#00DC82] peer-checked:text-slate-950 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-500 peer-disabled:opacity-50">
                {d}s
              </span>
            </label>
          ))}
        </fieldset>
        <dl className="flex gap-5 text-sm">
          <div>
            <dt className="text-slate-400">Clicks</dt>
            <dd className="font-mono text-lg font-semibold tabular-nums text-slate-100">{clicks}</dd>
          </div>
          <div>
            <dt className="text-slate-400">Time left</dt>
            <dd className="font-mono text-lg font-semibold tabular-nums text-slate-100">
              {remaining.toFixed(1)}s
            </dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          registerClick();
        }}
        onKeyDown={(e) => {
          if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
            e.preventDefault();
            registerClick();
          }
        }}
        onClick={(e) => e.preventDefault()}
        aria-disabled={phase === 'locked'}
        aria-label={areaLabel}
        className={`flex h-56 w-full touch-manipulation select-none items-center justify-center rounded-xl border-2 text-xl font-semibold md:h-64 md:text-2xl focus-ring ${
          phase === 'locked'
            ? 'cursor-not-allowed border-slate-700 bg-slate-800 text-slate-400'
            : running
              ? 'border-[#00DC82] bg-[#00DC82]/15 text-slate-100'
              : 'border-dashed border-slate-500 bg-slate-950/40 text-slate-100 hover:border-[#00DC82]'
        }`}
      >
        {running ? <span className="font-mono text-5xl tabular-nums">{clicks}</span> : areaLabel}
      </button>

      <div className="mt-4 min-h-[5.5rem]" aria-live="polite">
        {result ? (
          <div>
            <p className="mb-1 text-slate-100">
              <span className="font-mono text-3xl font-bold tabular-nums text-[#00DC82]">{result.cps.toFixed(2)}</span>{' '}
              CPS <span className="text-slate-400">·</span> {result.clicks} clicks in {durationRef.current}s
              {result.newBest && <span className="ml-2 text-sm font-semibold text-[#00DC82]">New best</span>}
            </p>
            <p className="mb-0 text-slate-300">{rating(result.cps)}</p>
          </div>
        ) : (
          <p className="mb-0 text-sm text-slate-400">
            {best[duration] !== undefined
              ? `Your best on ${duration}s: ${best[duration]!.toFixed(2)} CPS`
              : 'Your best score for each duration is kept on this device.'}
          </p>
        )}
      </div>
    </div>
  );
}
