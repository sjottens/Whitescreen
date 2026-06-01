// app/page.tsx - Root page served in English (default locale)
// Middleware routes non-prefixed paths here for English users
// Canonical points to root (/) to avoid /en/ duplicates

import { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `TestaScreen - Free Screen Testing & Display Tools | ${SITE_NAME}`,
  description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: `TestaScreen - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
    url: `${SITE_URL}`,
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `TestaScreen - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  },
};

// This page renders English content on root path
// But Next.js needs this export for metadata
export default function RootPage() {
  return null;
}

