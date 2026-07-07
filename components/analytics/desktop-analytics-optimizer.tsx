'use client';

import { useEffect } from 'react';

/**
 * Desktop GTM loader component
 * Loads Google Tag Manager on desktop after a short delay
 * Skipped entirely on mobile (MobileAnalyticsOptimizer handles mobile GTM with longer delay)
 */
export default function DesktopAnalyticsOptimizer() {
  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      // Mobile: MobileAnalyticsOptimizer will handle GTM loading after 20s
      // Skip here to avoid double-loading
      return;
    }

    // Desktop: Load GTM after 2 seconds
    // This ensures page is visually complete before GTM loads
    const timeoutId = setTimeout(() => {
      if ((window as any).dataLayer && (window as any).gtag) {
        // GTM already loaded via Script component
        return;
      }

      // If for some reason GTM didn't load via Script, load it now
      const gtmScript = document.querySelector(
        'script[src*="googletagmanager.com/gtag/js"]'
      );

      if (!gtmScript && !(window as any).dataLayer) {
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-YP3G096BGK';
        script.onload = () => {
          if ((window as any).gtag) {
            (window as any).gtag('js', new Date());
            (window as any).gtag('config', 'G-YP3G096BGK', { send_page_view: false });
          }
        };
        document.head.appendChild(script);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return null;
}
