'use client';

// components/tools/video-call-light.tsx - Turns the screen into a soft fill
// light for video calls: color-temperature presets, a brightness slider and
// fullscreen. This page used to promise a tool and render only a paragraph.

import { useCallback, useEffect, useRef, useState } from 'react';
import { Maximize2 } from 'lucide-react';

const PRESETS = [
  { label: 'Warm', hint: '~2700K', color: '#FFD6A5' },
  { label: 'Soft white', hint: '~4000K', color: '#FFEBD1' },
  { label: 'Daylight', hint: '~5500K', color: '#FFF9F2' },
  { label: 'Cool', hint: '~6500K', color: '#F2F6FF' },
];

export default function VideoCallLight() {
  const [color, setColor] = useState(PRESETS[1].color);
  const [brightness, setBrightness] = useState(100);
  const panelRef = useRef<HTMLDivElement>(null);

  const goFullscreen = useCallback(async () => {
    if (!document.fullscreenElement && panelRef.current) {
      try {
        await panelRef.current.requestFullscreen();
      } catch (err) {
        console.error('Failed to enter fullscreen:', err);
      }
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      if (e.key === 'f' || e.key === 'F' || e.code === 'Space') {
        e.preventDefault();
        goFullscreen();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goFullscreen]);

  return (
    <div>
      <div
        ref={panelRef}
        onClick={goFullscreen}
        className="w-full aspect-video cursor-pointer flex items-end justify-center bg-black"
      >
        {/* Dimming is done with opacity over black so it works on any screen. */}
        <div className="w-full h-full" style={{ backgroundColor: color, opacity: brightness / 100 }} />
      </div>

      <div className="p-6 bg-white space-y-5">
        <div className="flex flex-wrap gap-3">
          {PRESETS.map((p) => (
            <button
              key={p.color}
              type="button"
              onClick={() => setColor(p.color)}
              className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 text-sm font-semibold ${
                color === p.color ? 'border-cyan-600' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="w-5 h-5 rounded-full border border-slate-300" style={{ backgroundColor: p.color }} />
              {p.label} <span className="font-normal text-slate-500">{p.hint}</span>
            </button>
          ))}
        </div>

        <label className="block text-sm font-semibold text-slate-700">
          Brightness: {brightness}%
          <input
            type="range"
            min={20}
            max={100}
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="block w-full mt-2"
          />
        </label>

        <button
          type="button"
          onClick={goFullscreen}
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 font-semibold text-white hover:bg-cyan-700"
        >
          <Maximize2 className="w-4 h-4" /> Fullscreen (F)
        </button>
      </div>
    </div>
  );
}
