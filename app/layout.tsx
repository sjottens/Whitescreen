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
              try {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-YP3G096BGK', { send_page_view: false });
              } catch (error) {
                console.debug('[GTM] Init error:', error);
              }
            `,
          }}
        />

        {/* Global error handler for third-party scripts (Google Analytics, ads, etc.) */}
        <script
          id="error-handler"
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('error', function(e) {
                if (e.message && e.message.includes('startTime')) {
                  console.debug('[Error Handler] Suppressed performance timing error');
                  return true;
                }
              }, true);
              
              if (window.addEventListener) {
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && (e.reason.message || '').includes('startTime')) {
                    console.debug('[Error Handler] Suppressed async performance error');
                    e.preventDefault();
                  }
                });
              }
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
