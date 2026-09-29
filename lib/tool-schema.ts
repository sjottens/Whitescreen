// lib/tool-schema.ts - Metadata and JSON-LD for the hardware test pages.
// These pages are English-only, so no hreflang alternates.

import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

export interface Faq {
  question: string;
  answer: string;
}

interface ToolMeta {
  title: string;
  description: string;
  path: string;
}

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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
