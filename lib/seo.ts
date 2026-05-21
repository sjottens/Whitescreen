// lib/seo.ts - SEO utilities for metadata and structured data

import { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants';
import { Locale, generateHrefLangAlternates, getCanonicalUrl, getOpenGraphLocale } from './i18n';

interface MetadataParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
  keywords?: string[];
}

export function generateMetadata(params: MetadataParams): Metadata {
  const { title, description, path, ogImage, canonical, noindex, keywords } = params;
  const url = `${SITE_URL}${path}`;

  return {
    title: `${title} | ${SITE_NAME}`,
    description: description.slice(0, 160),
    keywords: keywords?.join(', '),
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: description.slice(0, 160),
      url,
      type: 'website',
      siteName: SITE_NAME,
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
      title: `${title} | ${SITE_NAME}`,
      description: description.slice(0, 160),
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonical || url,
    },
  };
}

/**
 * Generate multilingual metadata with hreflang support
 * Use this for locale-aware pages
 */
interface MultilingualMetadataParams extends MetadataParams {
  locale: Locale;
}

export function generateMultilingualMetadata(params: MultilingualMetadataParams): Metadata {
  const { title, description, path, ogImage, noindex, keywords, locale } = params;
  const canonicalUrl = getCanonicalUrl(locale, path);
  const alternateLanguages = generateHrefLangAlternates(path);

  return {
    title: `${title} | ${SITE_NAME}`,
    description: description.slice(0, 160),
    keywords: keywords?.join(', '),
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description: description.slice(0, 160),
      url: canonicalUrl,
      type: 'website',
      siteName: SITE_NAME,
      locale: getOpenGraphLocale(locale),
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
      title: `${title} | ${SITE_NAME}`,
      description: description.slice(0, 160),
      images: ogImage ? [ogImage] : undefined,
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonicalUrl,
      languages: alternateLanguages,
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
    sameAs: [
      'https://twitter.com/whitescreen_ai',
      'https://www.youtube.com/c/whitescreen',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@screenglow.eu',
      url: `${SITE_URL}/contact`,
    },
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
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
 * Generate Breadcrumb Schema for multilingual pages
 */
export function breadcrumbSchemaMultilingual(
  items: Array<{ name: string; path: string }>,
  locale: Locale
): SchemaConfig {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(locale, item.path),
    })),
  };
}

/**
 * Generate BlogPosting Schema
 */
export function blogPostingSchema(params: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  slug: string;
}): SchemaConfig {
  const { title, description, image, datePublished, dateModified, author, slug } = params;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
        width: 64,
        height: 64,
      },
    },
    url: `${SITE_URL}/blog/${slug}`,
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
 * Generate sitemap entry with multilingual hreflang support
 */
export interface MultilingualSitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Generate sitemap XML with multilingual hreflang support
 * Each URL entry includes links to alternate language versions
 */
export function generateMultilingualSitemapXml(entries: MultilingualSitemapEntry[]): string {
  const xmlEntries = entries
    .map((entry) => {
      const alternates = generateHrefLangAlternates(entry.path);
      const locales = Object.keys(alternates);

      return `  <url>
    <loc>${alternates['en']}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority !== undefined ? `<priority>${entry.priority}</priority>` : ''}
    ${locales.map((locale) => `<xhtml:link rel="alternate" hreflang="${locale}" href="${alternates[locale]}" />`).join('\n    ')}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${xmlEntries}
</urlset>`;

  return xml;
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
