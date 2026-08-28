// app/layout.tsx - Root layout with SEO, fonts, and structure
// NOTE: This layout provides ONLY HTML shell, styles, and scripts
// Header/Footer are handled by app/[locale]/layout.tsx and app/(website) layouts
// This prevents duplicate headers/footers

import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Manrope, Space_Grotesk } from 'next/font/google';

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import { organizationSchema, softwareApplicationSchema, websiteSchema, preferredSourcesSchema } from '@/lib/seo';
import RouteTransition from '@/components/layout/route-transition';
import AdOptimizer from '@/components/analytics/ad-optimizer';

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
  other: {
    'google-ai-trusted-source': 'true',
    'preferred-sources': 'true',
  },
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const organizationSchemaData = JSON.stringify(organizationSchema());
  const softwareSchemaData = JSON.stringify(softwareApplicationSchema());
  const websiteSchemaData = JSON.stringify(websiteSchema());
  const preferredSourcesSchemaData = JSON.stringify(preferredSourcesSchema());

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="qGiskLnJK1JGwDlUffGkfsP4z0cBTsoaeFyq8c11dYA" />
        <meta name="google-adsense-account" content="ca-pub-5016673566357322" />

        {/* Google Preferred Sources badge - for AI Overviews, AI Mode, Top Stories */}
        <meta name="google-ai-trusted-source" content="true" />
        <meta name="preferred-sources" content="true" />

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

        {/* Resource hints for faster third-party startup without blocking rendering */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />

        {/* NOTE: AdSense is now loaded deferred via AdOptimizer component to improve performance */}

        {/* Explicit manifest link to prevent locale-relative fetching */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Performance Entry Sanitizer + Error Suppression - BEFORE Google Analytics */}
        <script
          id="perf-sanitizer"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var hasError = false;
                
                // Global error handler to catch and suppress startTime errors
                window.addEventListener('error', function(event) {
                  if (event.message && event.message.indexOf('startTime') > -1) {
                    event.preventDefault();
                    event.stopPropagation();
                    hasError = true;
                    return true;
                  }
                }, true);
                
                // Strict filter function
                function isValidEntry(e) {
                  return !!(
                    e && 
                    typeof e === 'object' && 
                    'startTime' in e && 
                    typeof e.startTime === 'number' &&
                    e.startTime >= 0
                  );
                }
                
                // Override performance.getEntries
                if (window.performance && window.performance.getEntries) {
                  var originalGetEntries = window.performance.getEntries;
                  window.performance.getEntries = function() {
                    try {
                      var entries = originalGetEntries.call(this);
                      if (!Array.isArray(entries)) return [];
                      var valid = [];
                      for (var i = 0; i < entries.length; i++) {
                        if (isValidEntry(entries[i])) {
                          valid.push(entries[i]);
                        }
                      }
                      return valid;
                    } catch (err) {
                      return [];
                    }
                  };
                }
                
                // Override performance.getEntriesByType
                if (window.performance && window.performance.getEntriesByType) {
                  var originalGetEntriesByType = window.performance.getEntriesByType;
                  window.performance.getEntriesByType = function(type) {
                    try {
                      var entries = originalGetEntriesByType.call(this, type);
                      if (!Array.isArray(entries)) return [];
                      var valid = [];
                      for (var i = 0; i < entries.length; i++) {
                        if (isValidEntry(entries[i])) {
                          valid.push(entries[i]);
                        }
                      }
                      return valid;
                    } catch (err) {
                      return [];
                    }
                  };
                }
                
                // Override PerformanceObserver
                if (window.PerformanceObserver) {
                  var OriginalPO = window.PerformanceObserver;
                  window.PerformanceObserver = function(callback) {
                    var wrappedCallback = function(list) {
                      try {
                        // Create safe wrapper
                        var originalList = {
                          getEntries: list.getEntries.bind(list),
                          getEntriesByName: list.getEntriesByName.bind(list),
                          getEntriesByType: list.getEntriesByType.bind(list)
                        };
                        
                        // Replace getEntries with filtered version
                        list.getEntries = function() {
                          var entries = originalList.getEntries();
                          if (!Array.isArray(entries)) return [];
                          var valid = [];
                          for (var i = 0; i < entries.length; i++) {
                            if (isValidEntry(entries[i])) {
                              valid.push(entries[i]);
                            }
                          }
                          return valid;
                        };
                        
                        // Skip if no valid entries
                        if (list.getEntries().length === 0) return;
                        
                        callback(list);
                      } catch (err) {
                        // Silent fail
                      }
                    };
                    
                    this.observer = new OriginalPO(wrappedCallback);
                  };
                  
                  window.PerformanceObserver.prototype.observe = function(opts) {
                    return this.observer.observe(opts);
                  };
                  window.PerformanceObserver.prototype.disconnect = function() {
                    return this.observer.disconnect();
                  };
                  window.PerformanceObserver.prototype.takeRecords = function() {
                    var records = this.observer.takeRecords();
                    if (!Array.isArray(records)) return [];
                    var valid = [];
                    for (var i = 0; i < records.length; i++) {
                      if (isValidEntry(records[i])) {
                        valid.push(records[i]);
                      }
                    }
                    return valid;
                  };
                  window.PerformanceObserver.supportedEntryTypes = OriginalPO.supportedEntryTypes;
                }
              })();
            `,
          }}
        />

        {/* Google Tag Manager - Essential for analytics tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YP3G096BGK"
          strategy="afterInteractive"
          id="gtag-script"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YP3G096BGK', { send_page_view: false });
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchemaData }}
        />
        <script
          id="preferred-sources-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: preferredSourcesSchemaData }}
        />
        <script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: softwareSchemaData }}
        />
        <script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteSchemaData }}
        />
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable} theme-dark-premium`}>
        <div className="relative z-10">
          <RouteTransition>{children}</RouteTransition>
        </div>

        {/* Performance optimization: defer non-critical ads */}
        {/* GTM is loaded via Script component with strategy="afterInteractive" for reliable tracking */}
        <AdOptimizer />
      </body>
    </html>
  );
}
