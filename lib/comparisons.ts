// lib/comparisons.ts - Comparison page data and utilities
// Scalable system for 100+ monitor/spec comparisons

export interface ComparisonItem {
  id: string;
  type: 'monitor' | 'specification' | 'device';
  searchVolume: number;
  keywords: string[];
}

export interface ComparisonData {
  id: string;
  item1: ComparisonItem;
  item2: ComparisonItem;
  item3?: ComparisonItem; // For 3-way comparisons (IPS vs VA vs TN)
  titleKey: string;
  descriptionKey: string;
  contentKey: string;
  searchVolume: number;
}

/**
 * Centralized comparison database
 * All comparison pages that should be generated
 * Format: "item1-vs-item2" or "item1-vs-item2-vs-item3"
 */
export const COMPARISONS: Record<string, ComparisonData> = {
  // MONITOR BRAND COMPARISONS (High commercial intent)
  'asus-vs-lg': {
    id: 'asus-vs-lg',
    item1: { id: 'asus', type: 'monitor', searchVolume: 890, keywords: ['ASUS'] },
    item2: { id: 'lg', type: 'monitor', searchVolume: 720, keywords: ['LG'] },
    titleKey: 'compare_asus_vs_lg_title',
    descriptionKey: 'compare_asus_vs_lg_description',
    contentKey: 'compare_asus_vs_lg_content',
    searchVolume: 320,
  },
  'asus-vs-dell': {
    id: 'asus-vs-dell',
    item1: { id: 'asus', type: 'monitor', searchVolume: 890, keywords: ['ASUS'] },
    item2: { id: 'dell', type: 'monitor', searchVolume: 520, keywords: ['Dell'] },
    titleKey: 'compare_asus_vs_dell_title',
    descriptionKey: 'compare_asus_vs_dell_description',
    contentKey: 'compare_asus_vs_dell_content',
    searchVolume: 280,
  },
  'asus-vs-samsung': {
    id: 'asus-vs-samsung',
    item1: { id: 'asus', type: 'monitor', searchVolume: 890, keywords: ['ASUS'] },
    item2: { id: 'samsung', type: 'monitor', searchVolume: 680, keywords: ['Samsung'] },
    titleKey: 'compare_asus_vs_samsung_title',
    descriptionKey: 'compare_asus_vs_samsung_description',
    contentKey: 'compare_asus_vs_samsung_content',
    searchVolume: 240,
  },
  'lg-vs-samsung': {
    id: 'lg-vs-samsung',
    item1: { id: 'lg', type: 'monitor', searchVolume: 720, keywords: ['LG'] },
    item2: { id: 'samsung', type: 'monitor', searchVolume: 680, keywords: ['Samsung'] },
    titleKey: 'compare_lg_vs_samsung_title',
    descriptionKey: 'compare_lg_vs_samsung_description',
    contentKey: 'compare_lg_vs_samsung_content',
    searchVolume: 210,
  },
  'benq-vs-asus': {
    id: 'benq-vs-asus',
    item1: { id: 'benq', type: 'monitor', searchVolume: 380, keywords: ['BenQ'] },
    item2: { id: 'asus', type: 'monitor', searchVolume: 890, keywords: ['ASUS'] },
    titleKey: 'compare_benq_vs_asus_title',
    descriptionKey: 'compare_benq_vs_asus_description',
    contentKey: 'compare_benq_vs_asus_content',
    searchVolume: 180,
  },
  'alienware-vs-asus-rog': {
    id: 'alienware-vs-asus-rog',
    item1: { id: 'alienware', type: 'monitor', searchVolume: 220, keywords: ['Alienware'] },
    item2: { id: 'rog_asus', type: 'monitor', searchVolume: 420, keywords: ['ASUS ROG'] },
    titleKey: 'compare_alienware_vs_asus_rog_title',
    descriptionKey: 'compare_alienware_vs_asus_rog_description',
    contentKey: 'compare_alienware_vs_asus_rog_content',
    searchVolume: 240,
  },

  // SPECIFICATION COMPARISONS (High educational intent, featured snippets)
  'curved-vs-flat': {
    id: 'curved-vs-flat',
    item1: { id: 'curved', type: 'specification', searchVolume: 590, keywords: ['Curved'] },
    item2: { id: 'flat', type: 'specification', searchVolume: 890, keywords: ['Flat'] },
    titleKey: 'compare_curved_vs_flat_title',
    descriptionKey: 'compare_curved_vs_flat_description',
    contentKey: 'compare_curved_vs_flat_content',
    searchVolume: 580,
  },
  'ips-vs-va-vs-tn': {
    id: 'ips-vs-va-vs-tn',
    item1: { id: 'ips', type: 'specification', searchVolume: 1200, keywords: ['IPS'] },
    item2: { id: 'va', type: 'specification', searchVolume: 980, keywords: ['VA'] },
    item3: { id: 'tn', type: 'specification', searchVolume: 750, keywords: ['TN'] },
    titleKey: 'compare_ips_vs_va_vs_tn_title',
    descriptionKey: 'compare_ips_vs_va_vs_tn_description',
    contentKey: 'compare_ips_vs_va_vs_tn_content',
    searchVolume: 1100,
  },
  '144hz-vs-240hz': {
    id: '144hz-vs-240hz',
    item1: { id: '144hz', type: 'specification', searchVolume: 740, keywords: ['144Hz'] },
    item2: { id: '240hz', type: 'specification', searchVolume: 510, keywords: ['240Hz'] },
    titleKey: 'compare_144hz_vs_240hz_title',
    descriptionKey: 'compare_144hz_vs_240hz_description',
    contentKey: 'compare_144hz_vs_240hz_content',
    searchVolume: 920,
  },
  '1440p-vs-4k': {
    id: '1440p-vs-4k',
    item1: { id: '1440p', type: 'specification', searchVolume: 650, keywords: ['1440p'] },
    item2: { id: '4k', type: 'specification', searchVolume: 890, keywords: ['4K'] },
    titleKey: 'compare_1440p_vs_4k_title',
    descriptionKey: 'compare_1440p_vs_4k_description',
    contentKey: 'compare_1440p_vs_4k_content',
    searchVolume: 780,
  },
  'glossy-vs-matte': {
    id: 'glossy-vs-matte',
    item1: { id: 'glossy', type: 'specification', searchVolume: 420, keywords: ['Glossy'] },
    item2: { id: 'matte', type: 'specification', searchVolume: 380, keywords: ['Matte'] },
    titleKey: 'compare_glossy_vs_matte_title',
    descriptionKey: 'compare_glossy_vs_matte_description',
    contentKey: 'compare_glossy_vs_matte_content',
    searchVolume: 340,
  },

  // DEVICE COMPARISONS (Viral, gaming focused)
  'ps5-vs-xbox-series-x': {
    id: 'ps5-vs-xbox-series-x',
    item1: { id: 'ps5', type: 'device', searchVolume: 650, keywords: ['PS5'] },
    item2: { id: 'xbox-series-x', type: 'device', searchVolume: 410, keywords: ['Xbox Series X'] },
    titleKey: 'compare_ps5_vs_xbox_series_x_title',
    descriptionKey: 'compare_ps5_vs_xbox_series_x_description',
    contentKey: 'compare_ps5_vs_xbox_series_x_content',
    searchVolume: 280,
  },

  // PROFESSIONAL USE CASE COMPARISONS
  'ultrawide-vs-dual-monitor': {
    id: 'ultrawide-vs-dual-monitor',
    item1: { id: 'ultrawide', type: 'specification', searchVolume: 480, keywords: ['Ultrawide'] },
    item2: { id: 'dual-monitor', type: 'specification', searchVolume: 390, keywords: ['Dual Monitor'] },
    titleKey: 'compare_ultrawide_vs_dual_monitor_title',
    descriptionKey: 'compare_ultrawide_vs_dual_monitor_description',
    contentKey: 'compare_ultrawide_vs_dual_monitor_content',
    searchVolume: 450,
  },
};

/**
 * Get all comparison slugs
 */
export function getComparisonSlugs(): string[] {
  return Object.keys(COMPARISONS);
}

/**
 * Get comparison data by slug
 */
export function getComparisonData(slug: string): ComparisonData | null {
  return COMPARISONS[slug] || null;
}

/**
 * Get all comparisons sorted by search volume
 */
export function getComparisonsSorted(): ComparisonData[] {
  return Object.values(COMPARISONS).sort((a, b) => b.searchVolume - a.searchVolume);
}

/**
 * Get related comparisons for a specific item
 * Useful for internal linking
 */
export function getRelatedComparisons(itemId: string): ComparisonData[] {
  return Object.values(COMPARISONS).filter(
    (comp) => comp.item1.id === itemId || comp.item2.id === itemId || comp.item3?.id === itemId
  );
}
