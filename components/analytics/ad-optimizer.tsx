'use client';

import { useEffect } from 'react';

/**
 * Ad loading optimizer component
 * Defers Google AdSense and Google Ads loading until page is fully interactive
 * This reduces main-thread blocking and improves FCP/LCP metrics
 * 
 * Without this:
 * - AdSense loads immediately (165 KiB)
 * - Google Ads loads via AdSense (219 KiB)
 * - Total: ~384 KiB of JS blocking main thread
 * 
 * With this optimization:
 * - Core content renders first
 * - Ads load only after page is interactive
 * - Users can interact with site while ads load
 */
export default function AdOptimizer() {
  useEffect(() => {
    // Defer ad loading to after page is interactive
    const loadAdsAfterInteractive = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(
          () => {
            loadAdScripts();
          },
          { timeout: 8000 } // Timeout after 8s, load ads anyway
        );
      } else {
        // Fallback: load after a delay on older browsers
        setTimeout(() => {
          loadAdScripts();
        }, 5000);
      }
    };

    const loadAdScripts = () => {
      try {
        // Load AdSense if not already loaded
        const adsenseScript = document.querySelector(
          'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
        );
        
        if (!adsenseScript && !(window as any).adsbygoogle) {
          const script = document.createElement('script');
          script.async = true;
          script.crossOrigin = 'anonymous';
          script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016673566357322';
          script.onload = () => {
            console.debug('[AdOptimizer] AdSense loaded and ready');
            // Push any queued ads
            try {
              if ((window as any).adsbygoogle) {
                (window as any).adsbygoogle.push({});
              }
            } catch (e) {
              console.debug('[AdOptimizer] AdSense push (expected):', (e as Error).message);
            }
          };
          script.onerror = () => {
            console.warn('[AdOptimizer] Failed to load AdSense');
          };
          document.head.appendChild(script);
        }
      } catch (error) {
        console.warn('[AdOptimizer] Error loading ads:', error);
      }
    };

    // Start deferral after a small delay to ensure page has initial render
    // This gives the browser a chance to paint first contentful paint
    const timeoutId = setTimeout(loadAdsAfterInteractive, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}
