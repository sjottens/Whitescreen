// app/page.tsx - Root redirect to default locale with metadata

import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Screenglow - Free Screen Testing & Display Tools | ${SITE_NAME}`,
  description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  openGraph: {
    title: `Screenglow - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
    url: SITE_URL,
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Screenglow - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  },
};

export default function RootPage() {
  // Redirect to English version
  redirect('/en');
}
