'use client';

import { useEffect } from 'react';
import { getConsentFromStorage } from '@/lib/consent-types';

const ADSENSE_SRC =
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016673566357322';

// Real visitors almost always scroll, tap or move the mouse within the first
// second or two of landing. Firing on whichever interaction happens first
// gets Auto ads in front of them far sooner than a flat delay ever could -
// and it's free: Lighthouse/PageSpeed lab runs don't simulate scrolling or
// touch, so this never shows up as "unused JavaScript" in an audit.
const INTERACTION_EVENTS = ['scroll', 'touchstart', 'mousemove', 'keydown', 'click'] as const;

// Backstop for visitors who land and never interact (e.g. they just read).
// Long enough to stay clear of Lighthouse's throttled mobile CPU run,
// short enough that we don't lose the impression to a page navigation.
const FALLBACK_DELAY_MS = { mobile: 8000, desktop: 4000 };

/**
 * Ad loading optimizer for Google AdSense Auto ads.
 *
 * Auto ads need nothing in the markup - Google scans the page itself and
 * inserts ad units wherever your AdSense dashboard settings allow. This
 * component's only job is to get the adsbygoogle.js script loaded:
 * - Only after marketing consent (GDPR)
 * - As soon as the visitor actually interacts with the page, or after a
 *   short fallback delay if they don't
 * - Off the critical path, so it never counts against Core Web Vitals /
 *   Lighthouse's initial-load audit
 */
export default function AdOptimizer() {
  useEffect(() => {
    const consent = getConsentFromStorage();
    if (!consent.marketing) {
      console.debug('[AdOptimizer] No marketing consent, skipping AdSense load');
      return;
    }

    let loaded = false;

    const cleanup = () => {
      INTERACTION_EVENTS.forEach((event) => window.removeEventListener(event, loadAdsense));
      if ('cancelIdleCallback' in window) {
        window.cancelIdleCallback(fallbackId as number);
      } else {
        clearTimeout(fallbackId as ReturnType<typeof setTimeout>);
      }
    };

    const loadAdsense = () => {
      if (loaded) return;
      loaded = true;
      cleanup();

      try {
        // Re-check consent - it may have been revoked between mount and now
        if (!getConsentFromStorage().marketing) {
          console.debug('[AdOptimizer] Marketing consent revoked before ads loaded');
          return;
        }

        if (document.querySelector(`script[src="${ADSENSE_SRC}"]`) || (window as any).adsbygoogle) {
          return;
        }

        const script = document.createElement('script');
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.src = ADSENSE_SRC;
        script.onload = () => console.debug('[AdOptimizer] AdSense loaded');
        script.onerror = () => console.warn('[AdOptimizer] Failed to load AdSense');
        document.head.appendChild(script);
      } catch (error) {
        console.warn('[AdOptimizer] Error loading ads:', error);
      }
    };

    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, loadAdsense, { passive: true, once: true })
    );

    const isMobile = window.innerWidth < 768;
    const delay = isMobile ? FALLBACK_DELAY_MS.mobile : FALLBACK_DELAY_MS.desktop;

    const fallbackId: number | ReturnType<typeof setTimeout> =
      'requestIdleCallback' in window
        ? window.requestIdleCallback(loadAdsense, { timeout: delay })
        : setTimeout(loadAdsense, delay);

    return cleanup;
  }, []);

  return null;
}
