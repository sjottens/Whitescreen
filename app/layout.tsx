// app/layout.tsx - Root layout with SEO, fonts, and structure
// NOTE: This layout provides ONLY HTML shell, styles, and scripts
// Header/Footer are handled by app/(site)/layout.tsx
// This prevents duplicate headers/footers

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import RouteTransition from '@/components/layout/route-transition';
import AdOptimizer from '@/components/analytics/ad-optimizer';
import AnalyticsLoader from '@/components/analytics/analytics-loader';
import { ConsentProvider } from '@/components/providers/consent-provider';
import ConsentBanner from '@/components/legal/consent-banner';
import { getConsentStrings } from '@/lib/ui-strings';

import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['screen test', 'dead pixel test', 'monitor test', 'display tools'],
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* CRITICAL: PerformanceObserver Defensifier - Prevent GA4 crashes without mutating data */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Only process if PerformanceObserver exists
                if (!window.PerformanceObserver) return;
                
                var OriginalPO = window.PerformanceObserver;
                var DEBUG = false; // Set to true for troubleshooting
                
                // Create a wrapper that filters entries at point-of-use
                // This prevents GA4 from accessing entries with undefined/invalid startTime
                // WITHOUT mutating performance entries (which are read-only anyway)
                window.PerformanceObserver = function(userCallback) {
                  var wrappedCallback = function(list, observer) {
                    // Intercept the getEntries() call that GA4 makes
                    var origGetEntries = list.getEntries.bind(list);
                    
                    // Override getEntries to filter out bad entries before GA4 processes them
                    list.getEntries = function() {
                      var entries = origGetEntries();
                      if (!Array.isArray(entries)) return [];
                      
                      // Check for bad entries before filtering
                      var badEntries = [];
                      var filteredEntries = [];
                      
                      for (var i = 0; i < entries.length; i++) {
                        var entry = entries[i];
                        if (entry && typeof entry.startTime === 'number') {
                          filteredEntries.push(entry);
                        } else {
                          badEntries.push({
                            type: entry ? entry.entryType : 'unknown',
                            startTime: entry ? entry.startTime : null
                          });
                        }
                      }
                      
                      if (DEBUG && badEntries.length > 0) {
                        console.log('[GA4-Defensifier] Filtered out bad entries:', badEntries);
                      }
                      
                      return filteredEntries;
                    };
                    
                    // Call the original GA4 callback with the safe list
                    try {
                      userCallback(list, observer);
                    } catch (err) {
                      // Log errors for debugging
                      if (DEBUG) {
                        console.log('[GA4-Defensifier] Callback error:', err.message);
                      }
                    }
                  };
                  
                  if (DEBUG) {
                    console.log('[GA4-Defensifier] Wrapping PerformanceObserver for GA4');
                  }
                  
                  // Return an observer that uses our wrapped callback
                  return new OriginalPO(wrappedCallback);
                };
                
                // Preserve static properties
                window.PerformanceObserver.supportedEntryTypes = OriginalPO.supportedEntryTypes;
              })();
            `,
          }}
        />

        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="qGiskLnJK1JGwDlUffGkfsP4z0cBTsoaeFyq8c11dYA" />
        <meta name="google-adsense-account" content="ca-pub-5016673566357322" />

        {/* Content Last Verified */}
        <meta name="last-modified" content="2026-09-11" />

        {/* Mobile-first performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Critical CSS inline for LCP improvement */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@media (max-width: 767px) {
              h1, h2, h3 { font-family: var(--font-space-grotesk, system-ui); }
              body { font-family: var(--font-manrope, system-ui); }
            }`,
          }}
        />

        {/* Resource hints for third-party startup without competing for connections
            during the critical rendering path. `preconnect` opens a full DNS+TCP+TLS
            handshake immediately and Lighthouse's own insight warns against using more
            than a handful at once - each one steals a connection slot from resources
            the page actually needs right away. Measured against production: NONE of
            fonts.googleapis.com/fonts.gstatic.com are ever requested (next/font
            self-hosts the Manrope/Space Grotesk files at build time, so these were
            pure dead weight), and GTM/AdSense/doubleclick are all deliberately
            deferred (GTM loads on idle, ads load 5-20s after page load - see
            AdOptimizer), so preconnecting to them upfront bought nothing. `dns-prefetch`
            is cheap (DNS only, no handshake) and still gives those deferred loads a
            head start, so it's kept for the origins that do get used eventually. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* NOTE: AdSense is now loaded deferred via AdOptimizer component to improve performance */}

        {/* Explicit manifest link */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Analytics loads only after consent: see AnalyticsLoader in <body>. */}

      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} theme-dark-premium`}>
        <ConsentProvider>
          <div className="relative z-10">
            <RouteTransition>{children}</RouteTransition>
          </div>

          {/* Ads and analytics load only after the matching consent. */}
          <AdOptimizer />
          <AnalyticsLoader />

          {/* GDPR-compliant cookie consent banner */}
          <ConsentBanner strings={getConsentStrings()} />
        </ConsentProvider>

        {/* Vercel Web Analytics - cookieless, so it runs outside the consent gate */}
        <Analytics />
      </body>
    </html>
  );
}
