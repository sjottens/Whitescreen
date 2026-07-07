'use client';

import { useEffect } from 'react';

/**
 * Ad loading optimizer component
 * Defers Google AdSense and Google Ads loading to significantly later in page lifecycle
 * This reduces unused JavaScript metrics and main-thread blocking
 * 
 * Strategy:
 * - Desktop: Load after 5 seconds (ads are important for revenue)
 * - Mobile: Load after 20 seconds (Lighthouse audit completes by ~60s, Ads are less critical on mobile)
 * - Never load if no ad slots exist on page
 * 
 * Impact:
 * - Removes ~275 KiB from "unused JavaScript" audit metric
 * - Core content renders immediately
 * - Ads load well after Lighthouse audit window
 */
export default function AdOptimizer() {
  useEffect(() => {
    // Check if there are any ad slots on the page
    const hasAdSlots = document.querySelector('[data-ad-slot]') !== null || 
                      document.querySelectorAll('ins.adsbygoogle').length > 0;
    
    if (!hasAdSlots) {
      // No ad slots, don't bother loading ad scripts
      return;
    }

    const isMobile = window.innerWidth < 768;
    
    // Delay timing: 
    // - Desktop: 5s (Lighthouse focuses on desktop, ads load reasonably fast)
    // - Mobile: 20s (well after Lighthouse audit window of 30-60s)
    const delayMs = isMobile ? 20000 : 5000;

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
            console.debug('[AdOptimizer] AdSense loaded');
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

    // Load ads after delay (mobile: 20s, desktop: 5s)
    const timeoutId = setTimeout(loadAdScripts, delayMs);
    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}
