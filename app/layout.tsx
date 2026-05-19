// app/layout.tsx - Root layout with SEO, fonts, and structure

import { ReactNode } from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
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
    locale: 'en_US',
    url: SITE_URL,
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
    canonical: SITE_URL,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  // JSON-LD structured data
  const organizationSchemaData = organizationSchema();
  const softwareSchemaData = softwareApplicationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchemaData) }}
          suppressHydrationWarning
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchemaData) }}
          suppressHydrationWarning
        />

        {/* Google Analytics (if needed) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || ''}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${process.env.NEXT_PUBLIC_GA_ID ? `gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');` : ''}
            `,
          }}
        />

        {/* Preconnect to external fonts */}
        <link rel="preconnect" href="https://rsms.me" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-slate-900" suppressHydrationWarning>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>

        {/* Header */}
        <Header />

        {/* Main content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Web Vitals monitoring (development only) */}
        {process.env.NODE_ENV === 'development' && (
          <Script id="web-vitals" strategy="afterInteractive">
            {`
              window.addEventListener('web-vital', (vitals) => {
                console.log('Web Vital:', vitals);
              });
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
