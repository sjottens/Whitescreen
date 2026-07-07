'use client';

import { Suspense, lazy } from 'react';

// Lazy-load the heavy Three.js component to reduce initial main-thread parsing
const ModernHeroBackground = lazy(() => import('./modern-hero-background'));

/**
 * Lazy-loaded wrapper for ModernHeroBackground
 * This defers Three.js parsing until the component actually renders
 * Saves ~50-100ms of initial JS parsing on page load
 */
export default function ModernHeroBackgroundLazy({ className = '' }: { className?: string }) {
  return (
    <Suspense fallback={<div className={`${className} bg-gradient-to-b from-slate-950 to-slate-900`} />}>
      <ModernHeroBackground className={className} />
    </Suspense>
  );
}
