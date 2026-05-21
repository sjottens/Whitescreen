// lib/i18n.ts - Internationalization utilities for multilingual SEO

import { Metadata } from 'next';
import { SITE_URL } from './constants';

export type Locale = 'en' | 'nl' | 'es';

export const LOCALES: Locale[] = ['en', 'nl', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

// Language metadata
export const LOCALE_METADATA: Record<Locale, { name: string; nativeName: string; hreflang: string }> = {
  en: { name: 'English', nativeName: 'English', hreflang: 'en' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl' },
  es: { name: 'Spanish', nativeName: 'Español', hreflang: 'es' },
};

/**
 * Get the base URL for a given locale
 * English: https://example.com
 * Dutch: https://example.com/nl
 */
export function getLocaleUrl(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (locale === DEFAULT_LOCALE) {
    return `${SITE_URL}${cleanPath}`;
  }
  
  return `${SITE_URL}/${locale}${cleanPath}`;
}

/**
 * Generate hreflang alternates for all locales
 * Used in metadata.alternates.languages
 */
export function generateHrefLangAlternates(path: string) {
  const alternates: Record<string, string> = {};

  LOCALES.forEach((locale) => {
    alternates[LOCALE_METADATA[locale].hreflang] = getLocaleUrl(locale, path);
  });

  // Add x-default pointing to English
  alternates['x-default'] = getLocaleUrl(DEFAULT_LOCALE, path);

  return alternates;
}

/**
 * Get canonical URL for a locale and path
 */
export function getCanonicalUrl(locale: Locale, path: string): string {
  return getLocaleUrl(locale, path);
}

/**
 * Validate if a locale is supported
 */
export function isValidLocale(locale: unknown): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

/**
 * Convert locale code to Next.js OpenGraph locale
 */
export function getOpenGraphLocale(locale: Locale): string {
  const ogLocaleMap: Record<Locale, string> = {
    en: 'en_US',
    nl: 'nl_NL',
    es: 'es_ES',
  };
  return ogLocaleMap[locale];
}

/**
 * Get locale from params (handles Promise in Next.js 15)
 */
export async function getLocaleFromParams(params: Promise<{ locale?: string }>): Promise<Locale> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  if (isValidLocale(locale)) {
    return locale;
  }
  
  return DEFAULT_LOCALE;
}

/**
 * Generate locale metadata for dynamic routes
 * Pass this to the metadata export in your pages
 */
export function generateLocaleMetadata(
  locale: Locale,
  path: string,
  metadata: Metadata
): Metadata {
  const canonicalUrl = getCanonicalUrl(locale, path);
  const alternateLanguages = generateHrefLangAlternates(path);

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical: canonicalUrl,
      languages: alternateLanguages,
    },
    openGraph: {
      ...metadata.openGraph,
      locale: getOpenGraphLocale(locale),
      url: canonicalUrl,
    },
  };
}
