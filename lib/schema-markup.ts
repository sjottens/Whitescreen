// lib/schema-markup.ts - Comprehensive schema markup generation for SEO

import { SITE_NAME, SITE_URL } from './constants';
import { Locale } from './i18n';

/**
 * FAQ Schema for tool pages
 * Generates structured data for FAQs to enable rich snippets
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[], canonicalUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': canonicalUrl,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * WebPage Schema with enhanced properties
 * Includes depth for topical authority
 */
export interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  locale: string;
  isPartOf?: string;
  breadcrumbs?: { name: string; url: string }[];
  keywords?: string[];
}

export function generateWebPageSchema(props: WebPageSchemaProps) {
  const {
    title,
    description,
    url,
    image,
    locale,
    isPartOf,
    breadcrumbs,
    keywords
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: title,
    description,
    inLanguage: locale,
    isPartOf: isPartOf ? { '@id': isPartOf } : undefined,
    image: image ? {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630
    } : undefined,
    keywords: keywords?.join(', '),
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
}

/**
 * BreadcrumbList Schema
 * For improved navigation and site structure understanding
 */
export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function generateBreadcrumbSchema(
  breadcrumbs: BreadcrumbItem[],
  locale: Locale
) {
  const baseUrl = locale === 'en' ? SITE_URL : `${SITE_URL}/${locale}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`
    }))
  };
}

/**
 * SoftwareApplication Schema
 * For tool/application pages
 */
export interface SoftwareApplicationProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  applicationCategory: string; // e.g., "Utility"
  operatingSystem: string[]; // e.g., ["Windows", "macOS", "Linux", "iOS", "Android"]
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export function generateSoftwareApplicationSchema(props: SoftwareApplicationProps) {
  const {
    name,
    description,
    url,
    image,
    applicationCategory,
    operatingSystem,
    offers
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': url,
    name,
    description,
    url,
    image,
    applicationCategory: `DesktopApplication|${applicationCategory}`,
    operatingSystem,
    offers: offers ? {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: 'https://schema.org/InStock'
    } : {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };
}

/**
 * Organization Schema
 * For homepage and brand authority
 */
export function generateOrganizationSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Elite screen testing and display tools for professionals',
    sameAs: [
      // Add social media URLs as they become available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@testascreen.eu',
      availableLanguage: ['en', 'nl', 'es', 'de', 'fr', 'it', 'pt', 'ja']
    }
  };
}

/**
 * Article Schema (for future blog content)
 */
export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  author: string;
  datePublished: string;
  dateModified: string;
  content: string;
}

export function generateArticleSchema(props: ArticleSchemaProps) {
  const {
    title,
    description,
    url,
    image,
    author,
    datePublished,
    dateModified,
    content
  } = props;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    url,
    headline: title,
    description,
    image,
    author: {
      '@type': 'Person',
      name: author
    },
    datePublished,
    dateModified,
    articleBody: content
  };
}

/**
 * Combine multiple schemas into JSON-LD format
 */
export function combineSchemas(...schemas: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas
  };
}

/**
 * Schema.org markup formatter for Next.js metadata
 */
export function schemaToJsonLD(schema: any): string {
  return JSON.stringify(schema);
}

/**
 * Common schema properties for tools
 */
export const TOOL_CATEGORIES = {
  COLOR_TEST: 'Color Testing',
  PIXEL_TEST: 'Pixel Testing',
  CONTRAST_TEST: 'Contrast & Accessibility',
  BRIGHTNESS_TEST: 'Brightness Testing',
  GAMING: 'Gaming Display',
  DEVICE_TEST: 'Device-Specific Testing',
  PROFESSIONAL: 'Professional Use'
} as const;

/**
 * Generate FAQ for common tool questions
 * This can be customized per tool
 */
export function generateToolFAQs(toolName: string, useCase: string): FAQItem[] {
  return [
    {
      question: `What is the ${toolName}?`,
      answer: `The ${toolName} is a professional tool for ${useCase}. It runs entirely in your browser with no installation required.`
    },
    {
      question: `Do I need special software to use the ${toolName}?`,
      answer: 'No, all our tools run directly in your web browser. No downloads, installations, or plugins are required.'
    },
    {
      question: `Is the ${toolName} accurate?`,
      answer: 'Yes, our tools are professional-grade and used by photographers, videographers, and IT professionals worldwide.'
    },
    {
      question: `Can I use ${toolName} on mobile?`,
      answer: 'Absolutely. All our tools work on any device with a modern web browser - phones, tablets, desktops, and more.'
    },
    {
      question: `How much does ${toolName} cost?`,
      answer: '100% free. We believe professional tools should be accessible to everyone.'
    },
    {
      question: `Is my data safe when using ${toolName}?`,
      answer: 'Yes. All tests run on your device. No data is sent to our servers or any third party.'
    },
    {
      question: `Can I embed the ${toolName} on my website?`,
      answer: 'Yes, contact us for embedding options and integration support.'
    }
  ];
}
