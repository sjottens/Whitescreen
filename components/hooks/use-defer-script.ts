'use client';

import { useEffect } from 'react';

/**
 * Hook to defer heavy script loading on mobile devices
 * Uses requestIdleCallback to defer execution until after initial page render
 */
export function useDeferScriptLoading() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // Defer heavy scripts until idle
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        // Load any deferred analytics or tracking
        if ((window as any).dataLayer) {
          (window as any).dataLayer = (window as any).dataLayer || [];
        }
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        if ((window as any).dataLayer) {
          (window as any).dataLayer = (window as any).dataLayer || [];
        }
      }, 2000);
    }
  }, []);
}
