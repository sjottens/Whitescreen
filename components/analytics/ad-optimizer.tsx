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
    // Use requestIdleCallback to defer ads until browser is fully idle
    // This prevents ads from competing with core app initialization
    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(
        () => {
          loadAdScripts();
        },
        { timeout: 10000 } // Absolute timeout: load ads after 10s if still busy
      );
      return () => (window as any).cancelIdleCallback?.(id);
    } else {
      // Fallback for older browsers: defer with setTimeout
      const timeoutId = setTimeout(() => {
        loadAdScripts();
      }, 6000); // Longer delay to avoid blocking on older browsers

      return () => clearTimeout(timeoutId);
    }

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
  }, []);

  return null;
}
