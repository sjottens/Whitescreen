// lib/ui-strings.ts - Pulls the few strings that site-wide client components
// need out of lib/translations.ts on the server.
//
// Only import this from server components. Importing lib/translations.ts in
// a client component would ship the entire dictionary to the browser on
// every page.

import { translate } from './translations';

export interface HeaderLabels {
  blog: string;
  about: string;
  contact: string;
  menuAria: string;
}

export function getHeaderLabels(): HeaderLabels {
  return {
    blog: translate('blog'),
    about: translate('about'),
    contact: translate('contact'),
    menuAria: translate('navigation_toggle_menu_aria' as never),
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
export type ConsentStrings = Record<ConsentKey, string>;

export function getConsentStrings(): ConsentStrings {
  return Object.fromEntries(CONSENT_KEYS.map((key) => [key, translate(key as never)])) as ConsentStrings;
}
