// app/layout.tsx - Root layout with SEO, fonts, and structure
// NOTE: This layout provides ONLY HTML shell, styles, and scripts
// Header/Footer are handled by app/[locale]/layout.tsx and app/(website) layouts
// This prevents duplicate headers/footers

import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Manrope, Space_Grotesk } from 'next/font/google';

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import { organizationSchema, softwareApplicationSchema, websiteSchema } from '@/lib/seo';
import RouteTransition from '@/components/layout/route-transition';
import MobileAnalyticsOptimizer from '@/components/analytics/mobile-analytics-optimizer';
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
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const organizationSchemaData = JSON.stringify(organizationSchema());
  const softwareSchemaData = JSON.stringify(softwareApplicationSchema());
  const websiteSchemaData = JSON.stringify(websiteSchema());

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="qGiskLnJK1JGwDlUffGkfsP4z0cBTsoaeFyq8c11dYA" />
        <meta name="google-adsense-account" content="ca-pub-5016673566357322" />

        {/* Mobile-first performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
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

        {/* JSON-LD Structured Data */}
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationSchemaData }}
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

        {/* Google Analytics - Tracking setup (deferred to improve performance) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YP3G096BGK"
          strategy="lazyOnload"
          async
        />
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YP3G096BGK', {send_page_view: false});
            `,
          }}
        />

        {/* Performance optimization: defer GTM and ads based on device and page load state */}
        <MobileAnalyticsOptimizer />
        <AdOptimizer />
      </body>
    </html>
  );
}
