// components/analytics/analytics-loader.tsx - Google Analytics, loaded only
// once the visitor has allowed analytics cookies in the consent banner.
//
// Until then nothing from googletagmanager.com is requested and no _ga
// cookies are set. The library loads in idle time so it never competes with
// the page itself; page views on client-side navigation are picked up by
// GA4's enhanced measurement (history changes).

'use client';

import { useEffect } from 'react';
import { useConsent } from '@/components/providers/consent-provider';

const GA_ID = 'G-YP3G096BGK';
const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AnalyticsLoader() {
  const { consent } = useConsent();

  useEffect(() => {
    if (!consent.analytics || document.querySelector(`script[src="${GA_SRC}"]`)) return;

    const load = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // gtag.js expects the arguments object itself, not an array.
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer!.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', GA_ID);

      const script = document.createElement('script');
      script.async = true;
      script.src = GA_SRC;
      document.head.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(load, 2000);
    return () => clearTimeout(id);
  }, [consent.analytics]);

  return null;
}
