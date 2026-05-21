// app/page.tsx - Root redirect handled by middleware, metadata for SEO
// Note: Middleware redirects / → /en automatically
// This page is technically unreachable but provides SEO metadata fallback

import { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Screenglow - Free Screen Testing & Display Tools | ${SITE_NAME}`,
  description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/en`,
  },
  openGraph: {
    title: `Screenglow - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
    url: `${SITE_URL}/en`,
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Screenglow - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  },
};

// This page never renders - middleware redirects / → /en
// But Next.js needs this export for metadata
export default function RootPage() {
  return null;
}
