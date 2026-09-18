// lib/monitor-brand-content/index.ts - Unique, brand/line-specific content
// for /monitor-test/[brand] pages, in all 4 site locales.
//
// This exists because the old page template rendered the exact same FAQ,
// test grid, and related-tests block on all 40+ brand/category pages, with
// only a ~40-word formulaic intro differing per page - in every locale,
// not just English. That's a real thin/duplicate-content risk. Each locale
// file here adds genuinely differentiated panel-technology, common-issues,
// and warranty content plus 3 unique FAQs per page, translated (not just
// copied) so nl/es/de carry the same uniqueness guarantee as English.
//
// Factual accuracy note: panel technology descriptions (IPS/VA/OLED, which
// lines use which panels) reflect well-established, publicly documented
// product positioning for these brands. Specific numeric warranty
// thresholds are NOT asserted per-brand, because exact dead-pixel policies
// vary by SKU, region, and change over time - instead the `warranty` field
// explains the general ISO 13406-2 class convention the industry commonly
// references and tells the reader to verify the number against their
// specific model. This applies identically across all 4 locale files.

import { MONITOR_BRAND_CONTENT_EN } from './en';
import { MONITOR_BRAND_CONTENT_NL } from './nl';
import { MONITOR_BRAND_CONTENT_ES } from './es';
import { MONITOR_BRAND_CONTENT_DE } from './de';

export interface MonitorBrandContent {
  panelTech: string;
  commonIssues: string;
  warranty: string;
  faqs: { q: string; a: string }[];
}

const CONTENT_BY_LOCALE: Record<string, Record<string, MonitorBrandContent>> = {
  en: MONITOR_BRAND_CONTENT_EN,
  nl: MONITOR_BRAND_CONTENT_NL,
  es: MONITOR_BRAND_CONTENT_ES,
  de: MONITOR_BRAND_CONTENT_DE,
};

/**
 * Get unique brand/category content for a given locale + slug.
 * Falls back to English if the locale is unrecognized or the specific
 * slug is missing a translation, so a page never regresses to fully
 * empty content - it just temporarily shows English prose instead of a
 * blank section while a translation gap gets filled in.
 */
export function getMonitorBrandContent(locale: string, slug: string): MonitorBrandContent | null {
  const localeMap = CONTENT_BY_LOCALE[locale] || CONTENT_BY_LOCALE.en;
  return localeMap[slug] || MONITOR_BRAND_CONTENT_EN[slug] || null;
}
