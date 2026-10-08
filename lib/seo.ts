// lib/seo.ts - SEO utilities for metadata and structured data

import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  keywords?: string[];
}

// A plain description.slice(0, 160) cuts mid-word whenever the description
// runs past the limit (e.g. "...refresh rates, and optim"), which is what
// was happening on every page using this helper - broken-looking text in
// search snippets and social previews. This trims back to the last whole
// word instead.
function truncateDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description;
  const cut = description.slice(0, maxLength);
  const lastSpace = cut.lastIndexOf(' ');
  let trimmed = (lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd();
  while (trimmed.length > 0 && ',;:.'.includes(trimmed[trimmed.length - 1])) {
    trimmed = trimmed.slice(0, -1).trimEnd();
  }
  return trimmed + '...';
}

// Google shows roughly the first 60-65 characters of a title. The site name is
// only appended when the whole title still fits; otherwise it is dropped so
// the descriptive part isn't cut off in search results.
const MAX_TITLE_LENGTH = 65;

/** Full title as it appears in search results and social previews. */
export function fullTitle(title: string): string {
  const branded = `${title} | ${SITE_NAME}`;
  return branded.length <= MAX_TITLE_LENGTH ? branded : title;
}

/**
 * Value for Next's `title` field. The root layout's template adds
 * " | TestaScreen", so a title that would get too long opts out with `absolute`.
 */
export function titleField(title: string): Metadata['title'] {
  return fullTitle(title) === title ? { absolute: title } : title;
}

/**
 * Metadata for a page: title, description, canonical, Open Graph and Twitter.
 * The site is English-only, so there are no hreflang alternates.
 */
export function pageMetadata(params: MetadataParams): Metadata {
  const { title, description, path, ogImage, noindex, keywords } = params;
  const canonicalUrl = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const trimmedDescription = truncateDescription(description);

  return {
    // Unsuffixed: the root layout's `title.template` ("%s | TestaScreen")
    // applies the site name exactly once, unless the title is too long for it.
    title: titleField(title),
    description: trimmedDescription,
    keywords: keywords?.join(', '),
    openGraph: {
      // Open Graph/Twitter titles are not covered by the title template.
      title: fullTitle(title),
      description: trimmedDescription,
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_NAME,
      locale: 'en_US',
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: title,
              type: 'image/png',
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle(title),
      description: trimmedDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export interface SchemaConfig {
  '@context': string;
  '@type': string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Generate Organization Schema
 */
export function organizationSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: SITE_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: `${SITE_URL}/contact`,
    },
  };
}

/**
 * Generate WebSite Schema
 */
export function websiteSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'en',
  };
}

/**
 * Generate SoftwareApplication Schema
 */
export function softwareApplicationSchema(): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    // NOTE: aggregateRating was removed here (and from every other schema
    // helper in this codebase) - it was a hardcoded 4.8/2500 with no real
    // review-collection feature behind it anywhere in the product, which is
    // exactly what Google's structured-data guidelines treat as spam. Only
    // add this back once a genuine review system exists to source it from.
  };
}

/**
 * Generate FAQ Schema
 */
export function faqSchema(items: Array<{ question: string; answer: string }>): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate Breadcrumb Schema
 */
export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Generate Product/Tool Schema
 */
export function toolSchema(params: {
  name: string;
  description: string;
  url: string;
  image: string;
}): SchemaConfig {
  const { name, description, url, image } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    image,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

/**
 * Generate WebPage Schema
 */
export function webPageSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  isPartOf?: string;
}): SchemaConfig {
  const { title, description, url, image, isPartOf } = params;

  const schema: SchemaConfig = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: isPartOf
      ? {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
        }
      : undefined,
  };

  if (image) {
    schema.image = {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    };
  }

  return schema;
}

/**
 * Format schema.org JSON-LD
 */
export function schemaToJsonLd(schema: SchemaConfig): string {
  return JSON.stringify(schema, null, 2);
}

/**
 * Generate sitemap entry
 */
export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemapXml(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;
  return xml;
}

/**
 * SEO best practices validation
 */
export function validateSEO(params: {
  title: string;
  description: string;
  h1: string;
  url: string;
}): { valid: boolean; warnings: string[] } {
  const warnings: string[] = [];

  // Title validation
  if (params.title.length < 30) warnings.push('Title too short (< 30 chars)');
  if (params.title.length > 60) warnings.push('Title too long (> 60 chars)');

  // Description validation
  if (params.description.length < 120) warnings.push('Description too short (< 120 chars)');
  if (params.description.length > 160) warnings.push('Description too long (> 160 chars)');

  // H1 validation
  if (!params.h1) warnings.push('Missing H1 tag');
  if (params.h1.length > 60) warnings.push('H1 too long (> 60 chars)');

  // URL validation
  if (!params.url.startsWith('/') && !params.url.startsWith('http')) {
    warnings.push('Invalid URL format');
  }

  return {
    valid: warnings.length === 0,
    warnings,
  };
}

/**
 * E-E-A-T Enhancement Metadata Object
 * Provides consistent E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals
 * Optimized for LLM crawlers (Claude, ChatGPT, Google AI, Perplexity, etc.)
 */
export interface EEATMetadata {
  expertise: string[];
  expertiseLevel: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  authorCredentials?: string[];
  authorBio?: string;
  datePublished: string;
  dateModified: string;
  factChecked: boolean;
  factCheckDate?: string;
  sources?: string[];
  citations?: string[];
  transparency: string;
  disclaimers?: string[];
}

/**
 * Generate E-E-A-T metadata for pages
 * Returns structured metadata that helps AI crawlers understand content credibility
 */
export function generateEEATMetadata(
  overrides?: Partial<EEATMetadata>
): EEATMetadata {
  const today = new Date().toISOString().split('T')[0];

  return {
    expertise: [
      'Display Technology',
      'Screen Testing',
      'Monitor Quality',
      'Color Accuracy',
      'Professional Imaging',
    ],
    // NOTE: previously hardcoded 'Expert' plus invented credentials
    // ("Display Technology Specialists", "10+ years of combined expertise")
    // that aren't backed by any named, verifiable person or team bio on the
    // site. Left unset here rather than asserted - populate authorCredentials
    // and authorBio from real, sourced information when this is wired up.
    expertiseLevel: 'Intermediate',
    datePublished: today,
    dateModified: today,
    factChecked: true,
    factCheckDate: today,
    sources: [
      'Official manufacturer specifications',
      'VESA (Video Electronics Standards Association) standards',
      'IEC 61966-2-1 (Color Measurement Standard)',
      'Industry technical documentation',
      'Peer-reviewed research',
    ],
    citations: [
      'VESA Display Monitor Timing Standard',
      'IEC Color Space Definitions (sRGB, Adobe RGB)',
      'SMPTE (Society of Motion Picture & Television Engineers)',
      'Professional Photography Standards (ISO 12646)',
    ],
    transparency:
      'Free access, no affiliate links, no hidden revenue streams, open methodology. Our goal is education, not profit.',
    disclaimers: [
      'Success rates stated are based on real-world testing and user reports',
      'Software repair methods are not guaranteed to fix dead pixels',
      'Always test displays at point of purchase if possible',
    ],
    ...overrides,
  };
}

