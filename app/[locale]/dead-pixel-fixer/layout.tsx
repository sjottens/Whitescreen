// app/[locale]/dead-pixel-fixer/layout.tsx - Per-locale metadata for the Dead Pixel Fixer page
//
// page.tsx in this route is a Client Component ('use client' - it drives an
// interactive canvas animation), and Client Components cannot export `metadata`
// in the App Router. Without this layout the page silently fell back to the
// root layout's generic site-wide title/description ("TestaScreen" / a
// homepage blurb), even though a hand-written, keyword-optimized metadata.ts
// existed in this same folder - it was just never imported anywhere, so none
// of it ever reached the actual <head>. Confirmed live: the deployed page's
// <title> was "TestaScreen", not anything mentioning "dead pixel fixer".
//
// This is a Server Component whose only job is to supply generateMetadata,
// using the same generateMultilingualMetadata helper (canonical + hreflang +
// OG/Twitter) every other tool page already uses.

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { generateMultilingualMetadata } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';

// Hand-optimized English copy (the content of the previously-orphaned
// metadata.ts) targets the exact "dead pixel fixer" phrase this page needs
// to rank for. Other locales fall back to the page's own translated H1/
// description strings, which are still a real, page-specific title/
// description instead of the generic site-wide fallback.
const SEO_TITLE_EN = 'Dead Pixel Fixer (Online) – Free Stuck Pixel Repair Tool';
const SEO_DESCRIPTION_EN =
  'Fix stuck pixels online with our free dead pixel fixer. Flash rapidly changing colors in fullscreen mode to help revive stuck LCD, LED, OLED and laptop screen pixels.';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  const title = locale === 'en' ? SEO_TITLE_EN : translate('dead_pixel_fixer_main_title' as any);
  const description =
    locale === 'en' ? SEO_DESCRIPTION_EN : translate('dead_pixel_fixer_desc' as any);

  return generateMultilingualMetadata({
    locale,
    title,
    description,
    path: '/dead-pixel-fixer',
    keywords: [
      'dead pixel fixer',
      'stuck pixel fixer',
      'pixel repair tool',
      'fix dead pixel online',
      'stuck pixel repair',
      'dead pixel test',
      'LCD pixel repair',
      'OLED pixel repair',
    ],
  });
}

export default function DeadPixelFixerLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
