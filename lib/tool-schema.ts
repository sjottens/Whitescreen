// lib/tool-schema.ts - Metadata and JSON-LD for the hardware test pages.
// These pages are English-only, so no hreflang alternates.

import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';
import { PAGE_UPDATED } from './page-dates';

export interface Faq {
  question: string;
  answer: string;
}

interface ToolMeta {
  title: string;
  description: string;
  path: string;
}

// Pages with their own openGraph lose the file-based app/opengraph-image.
const OG_IMAGE = `${SITE_URL}/opengraph-image`;

export function toolMetadata({ title, description, path }: ToolMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    // absolute: the page titles are final copy, so skip the "| TestaScreen" template
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function webApplicationSchema({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url: `${SITE_URL}${path}`,
    ...(PAGE_UPDATED[path] && { dateModified: PAGE_UPDATED[path] }),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function faqPageSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
