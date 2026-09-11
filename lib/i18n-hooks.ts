// lib/i18n-hooks.ts - Client-side i18n hooks

'use client';

import { usePathname } from 'next/navigation';
import { Locale, DEFAULT_LOCALE, LOCALES, isValidLocale } from './i18n';

/**
 * Hook to get the current locale from the URL path
 * Works in client components only
 */
export function useLocale(): Locale {
  const pathname = usePathname();
  
  // Extract locale from pathname
  // Paths look like: /en/page, /nl/page, or /page (for default locale)
  const segments = pathname.split('/').filter(Boolean);
  
  if (segments.length > 0 && isValidLocale(segments[0])) {
    return segments[0] as Locale;
  }
  
  return DEFAULT_LOCALE;
}
