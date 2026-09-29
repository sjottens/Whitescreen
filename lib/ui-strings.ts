// lib/ui-strings.ts - Pulls the few strings that site-wide client components
// need out of lib/translations.ts on the server.
//
// Only import this from server components. Importing lib/translations.ts in
// a client component ships the entire dictionary (all four languages,
// ~130 kB gzipped) to the browser on every page.

import { LOCALES, type Locale } from './i18n';
import { t } from './translations';

export interface HeaderLabels {
  blog: string;
  about: string;
  contact: string;
  menuAria: string;
  languageAria: string;
  languageHint: string;
}

export function getHeaderLabels(locale: Locale): HeaderLabels {
  const translate = t(locale);
  const languageAria = translate('language_selector_aria' as never);
  return {
    blog: translate('blog'),
    about: translate('about'),
    contact: translate('contact'),
    menuAria: translate('navigation_toggle_menu_aria' as never),
    languageAria,
    languageHint: translate('language_selector_hint' as never) || languageAria,
  };
}

const CONSENT_KEYS = [
  'consent_title',
  'consent_description',
  'consent_simple_desc',
  'consent_necessary',
  'consent_necessary_desc',
  'consent_analytics',
  'consent_analytics_desc',
  'consent_marketing',
  'consent_marketing_desc',
  'consent_marketing_note',
  'consent_preferences',
  'consent_preferences_desc',
  'consent_accept',
  'consent_reject',
  'consent_save',
  'cookie_policy',
  'privacy_title',
  'show_less',
  'show_more',
] as const;

export type ConsentKey = (typeof CONSENT_KEYS)[number];
export type ConsentStrings = Record<Locale, Record<ConsentKey, string>>;

/** The consent banner sits in the root layout and picks its language from the URL, so it gets all four. */
export function getConsentStrings(): ConsentStrings {
  return Object.fromEntries(
    LOCALES.map((locale) => {
      const translate = t(locale);
      return [locale, Object.fromEntries(CONSENT_KEYS.map((key) => [key, translate(key as never)]))];
    })
  ) as ConsentStrings;
}
