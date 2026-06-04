// app/layout.tsx - Root layout with SEO, fonts, and structure
// NOTE: This layout provides ONLY HTML shell, styles, and scripts
// Header/Footer are handled by app/[locale]/layout.tsx and app/(website) layouts
// This prevents duplicate headers/footers

import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import { organizationSchema, softwareApplicationSchema } from '@/lib/seo';

import './globals.css';

// Font optimization with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
  const organizationSchemaData = organizationSchema();
  const softwareSchemaData = softwareApplicationSchema();

  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to external resources - FIRST for performance optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* Font imports */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap" />

        {/* Meta tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="google-site-verification" content="qGiskLnJK1JGwDlUffGkfsP4z0cBTsoaeFyq8c11dYA" />
        <meta name="google-adsense-account" content="ca-pub-5016673566357322" />

        {/* Explicit manifest link to prevent locale-relative fetching */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaData) }}
          suppressHydrationWarning
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchemaData) }}
          suppressHydrationWarning
        />
      </head>
      <body className={inter.variable}>
        {children}

        {/* Google AdSense - Script loading without data-nscript attribute */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5016673566357322"></script>

        {/* Google Analytics - Tracking setup */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YP3G096BGK"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YP3G096BGK');
            `,
          }}
        />
      </body>
    </html>
  );
}
