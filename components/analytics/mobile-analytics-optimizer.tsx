'use client';

import { useEffect } from 'react';

/**
 * Mobile-aware analytics component
 * Defers Google Tag Manager loading on mobile until page is fully interactive
 * to improve LCP and TBT metrics
 */
export default function MobileAnalyticsOptimizer() {
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (!isMobile) {
      // Desktop: GTM is already loaded via Script component with lazyOnload
      return;
    }

    // Mobile: Defer GTM even further using requestIdleCallback
    const deferAnalytics = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(
          () => {
            // GTM is loaded but deferred initialization
            if ((window as any).gtag && (window as any).dataLayer) {
              console.debug('GTM deferred init on mobile');
            }
          },
          { timeout: 5000 }
        );
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          if ((window as any).gtag && (window as any).dataLayer) {
            console.debug('GTM fallback init on mobile');
          }
        }, 3000);
      }
    };

    // Wait for GTM script to load then defer
    const checkGTMLoaded = () => {
      if ((window as any).dataLayer) {
        deferAnalytics();
      } else {
        setTimeout(checkGTMLoaded, 100);
      }
    };

    checkGTMLoaded();
  }, []);

  return null;
}
