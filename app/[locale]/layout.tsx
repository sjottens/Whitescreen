// app/[locale]/layout.tsx - Locale-aware root layout with dynamic metadata and hreflang

import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants';
import { organizationSchema, softwareApplicationSchema } from '@/lib/seo';
import { getLocaleFromParams, isValidLocale, DEFAULT_LOCALE, getOpenGraphLocale, generateHrefLangAlternates, getCanonicalUrl } from '@/lib/i18n';

import '../globals.css';

// Font optimization with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const canonicalUrl = getCanonicalUrl(locale, '/');
  const alternateLanguages = generateHrefLangAlternates('/');

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: `%s | ${SITE_NAME}`,
      default: `${SITE_NAME} - Free Screen Testing & Display Tools`,
    },
    description: SITE_DESCRIPTION,
    keywords: [
      'white screen',
      'black screen',
      'screen test',
      'dead pixel test',
      'monitor test',
      'color screen',
      'green screen',
      'blue screen',
      'screen testing tool',
      'display test',
      'free screen tools',
    ],
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    openGraph: {
      type: 'website',
      locale: getOpenGraphLocale(locale),
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: `${SITE_NAME} - Free Screen Testing & Display Tools`,
      description: SITE_DESCRIPTION,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SITE_NAME} - Free Screen Testing & Display Tools`,
      description: SITE_DESCRIPTION,
      images: [`${SITE_URL}/og-image.png`],
      creator: '@screenglow_eu',
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
  };
}

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = await getLocaleFromParams(params);

  // JSON-LD structured data
  const organizationSchemaData = organizationSchema();
  const softwareSchemaData = softwareApplicationSchema();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaData) }}
          suppressHydrationWarning
        />
        <Script
          id="software-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchemaData) }}
          suppressHydrationWarning
        />

        {/* Google Site Verification */}
        {/* <meta name="google-site-verification" content="your-verification-code" /> */}

        {/* Analytics and Tracking */}
        {/* Add your analytics scripts here */}
      </head>

      <body className={inter.variable}>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
