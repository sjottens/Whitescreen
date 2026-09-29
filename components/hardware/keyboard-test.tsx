// components/hardware/keyboard-test.tsx - Visual keyboard tester.
//
// Keys are matched on KeyboardEvent.code (the physical key), so the board
// lines up on AZERTY, QWERTZ etc. The test only listens while the board has
// focus: clicking outside pauses it. While active, default actions (scroll,
// Tab focus moves, Backspace, quick find on "/") are suppressed. Keyboard
// users can leave with Esc pressed three times in a row.

'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import {
  LAYOUTS,
  NUMPAD,
  BOARD_WIDTH,
  BOARD_HEIGHT,
  NUMPAD_WIDTH,
  NUMPAD_HEIGHT,
  type KeyDef,
  type LayoutName,
} from '@/lib/keyboard-layouts';

const ESC_EXIT_COUNT = 3;
const ESC_EXIT_WINDOW_MS = 1500;

interface LastKey {
  key: string;
  code: string;
}

function keyStyle(k: KeyDef, boardW: number, boardH: number): CSSProperties {
  return {
    left: `${(k.x / boardW) * 100}%`,
    top: `${(k.y / boardH) * 100}%`,
    width: `${((k.w ?? 1) / boardW) * 100}%`,
    height: `${((k.h ?? 1) / boardH) * 100}%`,
  };
}

// ISO Enter is 1.5u wide on top and 1.25u on the lower row.
const ISO_ENTER_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 16.67% 100%, 16.67% 50%, 0 50%)';

function Board({
  keys,
  width,
  height,
  pressed,
  tested,
  labelFor,
}: {
  keys: KeyDef[];
  width: number;
  height: number;
  pressed: Set<string>;
  tested: Map<string, number>;
  labelFor: (k: KeyDef) => string;
}) {
  return (
    <div className="relative w-full" style={{ aspectRatio: `${width} / ${height}` }}>
      {keys.map((k) => {
        const state = pressed.has(k.code) ? 'pressed' : tested.has(k.code) ? 'tested' : 'idle';
        return (
          <div key={k.code} className="absolute p-[2px] sm:p-[3px]" style={keyStyle(k, width, height)}>
            <div
              className={`flex h-full w-full items-center justify-center overflow-hidden rounded-[3px] text-[8px] font-semibold leading-none sm:rounded-md sm:text-[11px] md:text-xs ${
                state === 'pressed'
                  ? 'bg-cyan-300 text-slate-950'
                  : state === 'tested'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-slate-800 text-slate-200'
              }`}
              style={k.isoEnter ? { clipPath: ISO_ENTER_CLIP, alignItems: 'flex-start', paddingTop: '8%' } : undefined}
            >
              {labelFor(k)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function KeyboardTest() {
  const [layout, setLayout] = useState<LayoutName>('ansi');
  const [active, setActive] = useState(false);
  const [started, setStarted] = useState(false);
  const [pressed, setPressed] = useState<Set<string>>(() => new Set());
  const [tested, setTested] = useState<Map<string, number>>(() => new Map());
  const [last, setLast] = useState<LastKey | null>(null);
  const [numpadOpen, setNumpadOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  const boardRef = useRef<HTMLDivElement>(null);
  const resetRef = useRef<HTMLButtonElement>(null);
  const escTimesRef = useRef<number[]>([]);
  const pressedRef = useRef<Set<string>>(new Set());

  const updatePressed = useCallback((next: Set<string>) => {
    pressedRef.current = next;
    setPressed(next);
  }, []);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent));
  }, []);

  const labelFor = useCallback(
    (k: KeyDef) => {
      if (!isMac) return k.label;
      if (k.code.startsWith('Meta')) return 'Cmd';
      if (k.code.startsWith('Alt')) return 'Opt';
      return k.label;
    },
    [isMac]
  );

  const keys = LAYOUTS[layout];
  const boardCodes = useMemo(() => new Set(keys.map((k) => k.code)), [keys]);
  const testedOnBoard = useMemo(
    () => [...tested.keys()].filter((code) => boardCodes.has(code)).length,
    [tested, boardCodes]
  );
  const numpadTested = NUMPAD.filter((k) => tested.has(k.code)).length;

  const record = useCallback((e: KeyboardEvent) => {
    setLast({ key: e.key === ' ' ? 'Space' : e.key, code: e.code || '(none)' });
    if (!e.code) return;
    setTested((prev) => {
      const next = new Map(prev);
      next.set(e.code, (next.get(e.code) ?? 0) + 1);
      return next;
    });
  }, []);

  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.code === 'Escape' && !e.repeat) {
        const now = performance.now();
        escTimesRef.current = [...escTimesRef.current, now].filter((t) => now - t < ESC_EXIT_WINDOW_MS);
        if (escTimesRef.current.length >= ESC_EXIT_COUNT) {
          escTimesRef.current = [];
          resetRef.current?.focus();
          return;
        }
      }

      if (e.repeat) return;
      updatePressed(new Set(pressedRef.current).add(e.code));
      record(e);
    };

    const onKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      // PrintScreen (and a few media keys) only ever fire keyup on Windows.
      if (!pressedRef.current.has(e.code)) record(e);
      const next = new Set(pressedRef.current);
      next.delete(e.code);
      // macOS swallows keyup for anything released while Cmd is held.
      if (e.key === 'Meta') next.clear();
      updatePressed(next);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [active, record, updatePressed]);

  const activate = () => {
    boardRef.current?.focus({ preventScroll: true });
  };

  const reset = () => {
    setTested(new Map());
    updatePressed(new Set());
    setLast(null);
  };

  const count = last ? (tested.get(last.code) ?? 0) : 0;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 md:p-5">
      <p className="mb-3 hidden text-sm text-slate-300 [@media(pointer:coarse)]:block">
        This test is made for physical keyboards. If you have one connected to your phone or tablet, go ahead.
        Otherwise, open this page on a computer.
      </p>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <fieldset className="flex items-center gap-2">
          <legend className="sr-only">Keyboard layout</legend>
          {(['ansi', 'iso'] as const).map((name) => (
            <label key={name} className="cursor-pointer">
              <input
                type="radio"
                name="kb-layout"
                value={name}
                checked={layout === name}
                onChange={() => setLayout(name)}
                className="peer sr-only"
              />
              <span className="block rounded-lg border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-200 peer-checked:border-[#00DC82] peer-checked:bg-[#00DC82] peer-checked:text-slate-950 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cyan-500">
                {name === 'ansi' ? 'ANSI (US)' : 'ISO (EU)'}
              </span>
            </label>
          ))}
        </fieldset>
        <div className="flex items-center gap-3">
          <p className="mb-0 text-sm text-slate-300" aria-live="polite">
            <span className="font-mono font-semibold tabular-nums text-slate-100">{testedOnBoard}</span> of{' '}
            {keys.length} keys tested
          </p>
          <button
            ref={resetRef}
            type="button"
            onClick={reset}
            className="rounded-lg border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-200 hover:border-[#00DC82] focus-ring"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-start">
        <div
          ref={boardRef}
          tabIndex={0}
          role="application"
          aria-label="Keyboard test area. Press any key. Press Esc three times to leave."
          onFocus={() => {
            setActive(true);
            setStarted(true);
          }}
          onBlur={() => {
            setActive(false);
            updatePressed(new Set());
          }}
          onMouseDown={(e) => {
            // Keep focus on the board (not the overlay button) and avoid text selection.
            e.preventDefault();
            activate();
          }}
          className="relative flex-1 cursor-pointer rounded-lg bg-slate-950/50 p-1 outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <Board keys={keys} width={BOARD_WIDTH} height={BOARD_HEIGHT} pressed={pressed} tested={tested} labelFor={labelFor} />
          {!active && (
            <button
              type="button"
              onClick={activate}
              className="absolute inset-0 flex items-center justify-center rounded-lg bg-slate-950/80 px-4 text-center text-base font-semibold text-slate-100 md:text-lg focus-ring"
            >
              {started ? 'Click the keyboard to continue testing' : 'Click the keyboard to start testing'}
            </button>
          )}
        </div>

        <div className="lg:w-[18%]">
          <button
            type="button"
            onClick={() => setNumpadOpen((open) => !open)}
            aria-expanded={numpadOpen}
            aria-controls="kb-numpad"
            className="mb-2 rounded-lg border border-slate-600 px-3 py-1.5 text-sm font-semibold text-slate-200 hover:border-[#00DC82] focus-ring lg:hidden"
          >
            {numpadOpen ? 'Hide numpad' : 'Show numpad'}
          </button>
          <div id="kb-numpad" className={`${numpadOpen ? 'block' : 'hidden'} max-w-[200px] lg:block lg:max-w-none`}>
            <p className="mb-1 text-xs text-slate-400">
              Numpad: {numpadTested} of {NUMPAD.length}
            </p>
            <div
              className="cursor-pointer rounded-lg bg-slate-950/50 p-1"
              onMouseDown={(e) => {
                e.preventDefault();
                activate();
              }}
            >
              <Board keys={NUMPAD} width={NUMPAD_WIDTH} height={NUMPAD_HEIGHT} pressed={pressed} tested={tested} labelFor={labelFor} />
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <div>
          <dt className="text-slate-400">event.key</dt>
          <dd className="truncate font-mono text-base font-semibold text-slate-100">{last ? last.key : '–'}</dd>
        </div>
        <div>
          <dt className="text-slate-400">event.code</dt>
          <dd className="truncate font-mono text-base font-semibold text-slate-100">{last ? last.code : '–'}</dd>
        </div>
        <div>
          <dt className="text-slate-400">Times pressed</dt>
          <dd className="font-mono text-base font-semibold tabular-nums text-slate-100">{last ? count : '–'}</dd>
        </div>
      </dl>

      <ul className="mt-3 flex list-none flex-wrap gap-4 pl-0 text-xs text-slate-300" aria-label="Legend">
        <li className="mb-0 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-cyan-300" aria-hidden="true" /> Pressed
        </li>
        <li className="mb-0 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-emerald-700" aria-hidden="true" /> Tested
        </li>
        <li className="mb-0 flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-slate-800 ring-1 ring-slate-600" aria-hidden="true" /> Not tested
        </li>
      </ul>
    </div>
  );
}
