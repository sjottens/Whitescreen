// lib/link-utils.ts - Utilities for generating locale-aware links

import { Locale, DEFAULT_LOCALE } from './i18n';

/**
 * Generate a locale-aware URL
 * @param locale Current locale
 * @param path Path without locale prefix (e.g., '/about', '/white-screen')
 * @returns Full URL with locale prefix where needed
 * 
 * Examples:
 * - locale: 'en', path: '/about' → '/about'
 * - locale: 'nl', path: '/about' → '/nl/about'
 * - locale: 'en', path: '/white-screen' → '/white-screen'
 * - locale: 'nl', path: '/white-screen' → '/nl/white-screen'
 */
export function getLocalizedPath(locale: Locale, path: string): string {
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // English (default) serves at root level without prefix
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }

  // Other locales get prefix
  return `/${locale}${cleanPath}`;
}

/**
 * Parse locale from URL path
 * @param pathname URL pathname
 * @returns [locale, path] tuple
 * 
 * Examples:
 * - '/about' → ['en', '/about']
 * - '/nl/about' → ['nl', '/about']
 * - '/' → ['en', '/']
 * - '/nl/' → ['nl', '/']
 */
export function parseLocalePath(pathname: string): [Locale, string] {
  // Remove trailing slash for comparison (but preserve for root)
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  // Check if path starts with a locale prefix
  if (cleanPath.startsWith('/nl/') || cleanPath === '/nl') {
    const path = cleanPath === '/nl' ? '/' : cleanPath.replace(/^\/nl/, '');
    return ['nl', path];
  }

  // Default to English
  return [DEFAULT_LOCALE, cleanPath];
}

/**
 * Get relative path from current locale to another locale
 * Useful for language switcher links
 * @param currentLocale Current locale
 * @param targetLocale Target locale to switch to
 * @param currentPath Current path without locale
 * @returns URL to navigate to
 * 
 * Examples:
 * - currentLocale: 'en', targetLocale: 'nl', path: '/about' → '/nl/about'
 * - currentLocale: 'nl', targetLocale: 'en', path: '/about' → '/about'
 */
export function getLocaleAlternativePath(currentLocale: Locale, targetLocale: Locale, currentPath: string): string {
  return getLocalizedPath(targetLocale, currentPath);
}
