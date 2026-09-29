// components/hardware/ad-slot.tsx - One manual AdSense unit with reserved height.
//
// Renders nothing without a slot ID. With one, the box keeps a fixed
// min-height from the first paint, so the ad filling in later can't shift
// the page. The adsbygoogle.js script itself is loaded site-wide by
// AdOptimizer; pushing onto the queue before it arrives is fine.

'use client';

import { useEffect } from 'react';
import { ADSENSE_CLIENT } from '@/lib/hardware-tools';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface AdSlotProps {
  slot: string;
  className?: string;
}

export default function AdSlot({ slot, className = '' }: AdSlotProps) {
  useEffect(() => {
    if (!slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ad blockers and duplicate pushes throw here; the page works without ads.
    }
  }, [slot]);

  if (!slot) return null;

  return (
    <aside aria-label="Advertisement" className={`container-sm ${className}`}>
      <p className="mb-1 text-center text-xs uppercase tracking-wide text-slate-400">Advertisement</p>
      <div className="min-h-[280px]">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </aside>
  );
}
