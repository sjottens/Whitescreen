// lib/monitor-brands.ts - Comprehensive monitor brands database
// Scalable solution for 50+ monitor brands with SEO metadata

export interface MonitorBrandData {
  id: string;
  nameKey: string;
  titleKey: string;
  descriptionKey: string;
  introKey: string;
  searchVolume: number;
  keywords: string[];
}

export const MONITOR_BRANDS: Record<string, MonitorBrandData> = {
  // EXISTING BRANDS (Keep as-is)
  asus: {
    id: 'asus',
    nameKey: 'monitor_asus',
    titleKey: 'monitor_asus_title',
    descriptionKey: 'monitor_asus_description',
    introKey: 'monitor_asus_intro',
    searchVolume: 890,
    keywords: ['ASUS monitor', 'ASUS ROG', 'ASUS gaming monitor'],
  },
  lg: {
    id: 'lg',
    nameKey: 'monitor_lg',
    titleKey: 'monitor_lg_title',
    descriptionKey: 'monitor_lg_description',
    introKey: 'monitor_lg_intro',
    searchVolume: 720,
    keywords: ['LG monitor', 'LG UltraGear', 'LG gaming monitor'],
  },
  samsung: {
    id: 'samsung',
    nameKey: 'monitor_samsung',
    titleKey: 'monitor_samsung_title',
    descriptionKey: 'monitor_samsung_description',
    introKey: 'monitor_samsung_intro',
    searchVolume: 680,
    keywords: ['Samsung monitor', 'Samsung gaming', 'Samsung display'],
  },
  dell: {
    id: 'dell',
    nameKey: 'monitor_dell',
    titleKey: 'monitor_dell_title',
    descriptionKey: 'monitor_dell_description',
    introKey: 'monitor_dell_intro',
    searchVolume: 520,
    keywords: ['Dell monitor', 'Dell gaming', 'Dell professional'],
  },

  // NEW HIGH-VOLUME BRANDS (Top priority)
  benq: {
    id: 'benq',
    nameKey: 'monitor_benq',
    titleKey: 'monitor_benq_title',
    descriptionKey: 'monitor_benq_description',
    introKey: 'monitor_benq_intro',
    searchVolume: 380,
    keywords: ['BenQ monitor', 'BenQ gaming', 'BenQ professional'],
  },
  alienware: {
    id: 'alienware',
    nameKey: 'monitor_alienware',
    titleKey: 'monitor_alienware_title',
    descriptionKey: 'monitor_alienware_description',
    introKey: 'monitor_alienware_intro',
    searchVolume: 220,
    keywords: ['Alienware monitor', 'Alienware gaming', 'Alienware AW3423'],
  },
  msi: {
    id: 'msi',
    nameKey: 'monitor_msi',
    titleKey: 'monitor_msi_title',
    descriptionKey: 'monitor_msi_description',
    introKey: 'monitor_msi_intro',
    searchVolume: 140,
    keywords: ['MSI monitor', 'MSI gaming monitor', 'MSI curved'],
  },
  acer: {
    id: 'acer',
    nameKey: 'monitor_acer',
    titleKey: 'monitor_acer_title',
    descriptionKey: 'monitor_acer_description',
    introKey: 'monitor_acer_intro',
    searchVolume: 180,
    keywords: ['Acer monitor', 'Acer Nitro', 'Acer gaming'],
  },
  corsair: {
    id: 'corsair',
    nameKey: 'monitor_corsair',
    titleKey: 'monitor_corsair_title',
    descriptionKey: 'monitor_corsair_description',
    introKey: 'monitor_corsair_intro',
    searchVolume: 310,
    keywords: ['Corsair monitor', 'Corsair gaming', 'Corsair RGB'],
  },
  eizo: {
    id: 'eizo',
    nameKey: 'monitor_eizo',
    titleKey: 'monitor_eizo_title',
    descriptionKey: 'monitor_eizo_description',
    introKey: 'monitor_eizo_intro',
    searchVolume: 140,
    keywords: ['EIZO monitor', 'EIZO professional', 'EIZO color'],
  },
  hp: {
    id: 'hp',
    nameKey: 'monitor_hp',
    titleKey: 'monitor_hp_title',
    descriptionKey: 'monitor_hp_description',
    introKey: 'monitor_hp_intro',
    searchVolume: 290,
    keywords: ['HP monitor', 'HP gaming', 'HP office monitor'],
  },
  iiyama: {
    id: 'iiyama',
    nameKey: 'monitor_iiyama',
    titleKey: 'monitor_iiyama_title',
    descriptionKey: 'monitor_iiyama_description',
    introKey: 'monitor_iiyama_intro',
    searchVolume: 85,
    keywords: ['IIYAMA monitor', 'IIYAMA gaming', 'IIYAMA professional'],
  },
  lenovo: {
    id: 'lenovo',
    nameKey: 'monitor_lenovo',
    titleKey: 'monitor_lenovo_title',
    descriptionKey: 'monitor_lenovo_description',
    introKey: 'monitor_lenovo_intro',
    searchVolume: 240,
    keywords: ['Lenovo monitor', 'Lenovo gaming', 'Lenovo office'],
  },
  nec: {
    id: 'nec',
    nameKey: 'monitor_nec',
    titleKey: 'monitor_nec_title',
    descriptionKey: 'monitor_nec_description',
    introKey: 'monitor_nec_intro',
    searchVolume: 120,
    keywords: ['NEC monitor', 'NEC professional', 'NEC color accurate'],
  },
  rog_asus: {
    id: 'rog-asus',
    nameKey: 'monitor_rog_asus',
    titleKey: 'monitor_rog_asus_title',
    descriptionKey: 'monitor_rog_asus_description',
    introKey: 'monitor_rog_asus_intro',
    searchVolume: 420,
    keywords: ['ASUS ROG monitor', 'ASUS ROG Swift', 'ROG gaming monitor'],
  },
  acer_nitro: {
    id: 'acer-nitro',
    nameKey: 'monitor_acer_nitro',
    titleKey: 'monitor_acer_nitro_title',
    descriptionKey: 'monitor_acer_nitro_description',
    introKey: 'monitor_acer_nitro_intro',
    searchVolume: 210,
    keywords: ['Acer Nitro monitor', 'Nitro gaming', 'Acer curved monitor'],
  },
  viewsonic: {
    id: 'viewsonic',
    nameKey: 'monitor_viewsonic',
    titleKey: 'monitor_viewsonic_title',
    descriptionKey: 'monitor_viewsonic_description',
    introKey: 'monitor_viewsonic_intro',
    searchVolume: 95,
    keywords: ['ViewSonic monitor', 'ViewSonic gaming', 'ViewSonic professional'],
  },
  dell_ips: {
    id: 'dell-ips',
    nameKey: 'monitor_dell_ips',
    titleKey: 'monitor_dell_ips_title',
    descriptionKey: 'monitor_dell_ips_description',
    introKey: 'monitor_dell_ips_intro',
    searchVolume: 180,
    keywords: ['Dell IPS monitor', 'Dell P-series', 'Dell professional color'],
  },
  lg_ultrawide: {
    id: 'lg-ultrawide',
    nameKey: 'monitor_lg_ultrawide',
    titleKey: 'monitor_lg_ultrawide_title',
    descriptionKey: 'monitor_lg_ultrawide_description',
    introKey: 'monitor_lg_ultrawide_intro',
    searchVolume: 290,
    keywords: ['LG ultrawide monitor', 'LG curved ultrawide', 'LG 34-inch'],
  },
  samsung_curved: {
    id: 'samsung-curved',
    nameKey: 'monitor_samsung_curved',
    titleKey: 'monitor_samsung_curved_title',
    descriptionKey: 'monitor_samsung_curved_description',
    introKey: 'monitor_samsung_curved_intro',
    searchVolume: 210,
    keywords: ['Samsung curved monitor', 'Samsung odyssey', 'Samsung gaming curved'],
  },
  asus_tuf: {
    id: 'asus-tuf',
    nameKey: 'monitor_asus_tuf',
    titleKey: 'monitor_asus_tuf_title',
    descriptionKey: 'monitor_asus_tuf_description',
    introKey: 'monitor_asus_tuf_intro',
    searchVolume: 165,
    keywords: ['ASUS TUF monitor', 'TUF gaming', 'ASUS TUF competitive'],
  },
  lg_gaming: {
    id: 'lg-gaming',
    nameKey: 'monitor_lg_gaming',
    titleKey: 'monitor_lg_gaming_title',
    descriptionKey: 'monitor_lg_gaming_description',
    introKey: 'monitor_lg_gaming_intro',
    searchVolume: 240,
    keywords: ['LG gaming monitor', 'LG 144Hz', 'LG competitive gaming'],
  },
  dell_gaming: {
    id: 'dell-gaming',
    nameKey: 'monitor_dell_gaming',
    titleKey: 'monitor_dell_gaming_title',
    descriptionKey: 'monitor_dell_gaming_description',
    introKey: 'monitor_dell_gaming_intro',
    searchVolume: 155,
    keywords: ['Dell gaming monitor', 'Dell Alienware', 'Dell AW series'],
  },
  benq_gaming: {
    id: 'benq-gaming',
    nameKey: 'monitor_benq_gaming',
    titleKey: 'monitor_benq_gaming_title',
    descriptionKey: 'monitor_benq_gaming_description',
    introKey: 'monitor_benq_gaming_intro',
    searchVolume: 190,
    keywords: ['BenQ gaming monitor', 'BenQ EX', 'BenQ esports'],
  },
  msi_curved: {
    id: 'msi-curved',
    nameKey: 'monitor_msi_curved',
    titleKey: 'monitor_msi_curved_title',
    descriptionKey: 'monitor_msi_curved_description',
    introKey: 'monitor_msi_curved_intro',
    searchVolume: 125,
    keywords: ['MSI curved monitor', 'MSI gaming curved', 'MSI 165Hz curved'],
  },
  corsair_gaming: {
    id: 'corsair-gaming',
    nameKey: 'monitor_corsair_gaming',
    titleKey: 'monitor_corsair_gaming_title',
    descriptionKey: 'monitor_corsair_gaming_description',
    introKey: 'monitor_corsair_gaming_intro',
    searchVolume: 140,
    keywords: ['Corsair gaming monitor', 'Corsair XENEON', 'Corsair 240Hz'],
  },
  asus_4k: {
    id: 'asus-4k',
    nameKey: 'monitor_asus_4k',
    titleKey: 'monitor_asus_4k_title',
    descriptionKey: 'monitor_asus_4k_description',
    introKey: 'monitor_asus_4k_intro',
    searchVolume: 170,
    keywords: ['ASUS 4K monitor', 'ASUS ProArt', 'ASUS 4K professional'],
  },
  lg_4k: {
    id: 'lg-4k',
    nameKey: 'monitor_lg_4k',
    titleKey: 'monitor_lg_4k_title',
    descriptionKey: 'monitor_lg_4k_description',
    introKey: 'monitor_lg_4k_intro',
    searchVolume: 220,
    keywords: ['LG 4K monitor', 'LG 4K gaming', 'LG ultrafine 4K'],
  },
  dell_4k: {
    id: 'dell-4k',
    nameKey: 'monitor_dell_4k',
    titleKey: 'monitor_dell_4k_title',
    descriptionKey: 'monitor_dell_4k_description',
    introKey: 'monitor_dell_4k_intro',
    searchVolume: 180,
    keywords: ['Dell 4K monitor', 'Dell U-series 4K', 'Dell 4K professional'],
  },
  benq_4k: {
    id: 'benq-4k',
    nameKey: 'monitor_benq_4k',
    titleKey: 'monitor_benq_4k_title',
    descriptionKey: 'monitor_benq_4k_description',
    introKey: 'monitor_benq_4k_intro',
    searchVolume: 145,
    keywords: ['BenQ 4K monitor', 'BenQ SW 4K', 'BenQ professional 4K'],
  },
  samsung_4k: {
    id: 'samsung-4k',
    nameKey: 'monitor_samsung_4k',
    titleKey: 'monitor_samsung_4k_title',
    descriptionKey: 'monitor_samsung_4k_description',
    introKey: 'monitor_samsung_4k_intro',
    searchVolume: 135,
    keywords: ['Samsung 4K monitor', 'Samsung 4K gaming', 'Samsung LU28E590DS'],
  },
  portable_monitor: {
    id: 'portable-monitor',
    nameKey: 'monitor_portable',
    titleKey: 'monitor_portable_title',
    descriptionKey: 'monitor_portable_description',
    introKey: 'monitor_portable_intro',
    searchVolume: 210,
    keywords: ['portable monitor', 'mobile monitor', 'USB-C monitor'],
  },
  touchscreen_monitor: {
    id: 'touchscreen-monitor',
    nameKey: 'monitor_touchscreen',
    titleKey: 'monitor_touchscreen_title',
    descriptionKey: 'monitor_touchscreen_description',
    introKey: 'monitor_touchscreen_intro',
    searchVolume: 340,
    keywords: ['touchscreen monitor', 'touch display', 'interactive monitor'],
  },
  curved_monitor: {
    id: 'curved-monitor',
    nameKey: 'monitor_curved',
    titleKey: 'monitor_curved_title',
    descriptionKey: 'monitor_curved_description',
    introKey: 'monitor_curved_intro',
    searchVolume: 590,
    keywords: ['curved monitor', 'curved gaming monitor', 'ultrawide curved'],
  },
  ultrawide_monitor: {
    id: 'ultrawide-monitor',
    nameKey: 'monitor_ultrawide',
    titleKey: 'monitor_ultrawide_title',
    descriptionKey: 'monitor_ultrawide_description',
    introKey: 'monitor_ultrawide_intro',
    searchVolume: 480,
    keywords: ['ultrawide monitor', 'ultrawide gaming', '34-inch ultrawide'],
  },
  gaming_144hz: {
    id: 'gaming-144hz',
    nameKey: 'monitor_gaming_144hz',
    titleKey: 'monitor_gaming_144hz_title',
    descriptionKey: 'monitor_gaming_144hz_description',
    introKey: 'monitor_gaming_144hz_intro',
    searchVolume: 740,
    keywords: ['144Hz gaming monitor', '144Hz monitor', '144Hz refresh rate'],
  },
  gaming_240hz: {
    id: 'gaming-240hz',
    nameKey: 'monitor_gaming_240hz',
    titleKey: 'monitor_gaming_240hz_title',
    descriptionKey: 'monitor_gaming_240hz_description',
    introKey: 'monitor_gaming_240hz_intro',
    searchVolume: 510,
    keywords: ['240Hz gaming monitor', '240Hz monitor', '240Hz esports'],
  },
  gaming_360hz: {
    id: 'gaming-360hz',
    nameKey: 'monitor_gaming_360hz',
    titleKey: 'monitor_gaming_360hz_title',
    descriptionKey: 'monitor_gaming_360hz_description',
    introKey: 'monitor_gaming_360hz_intro',
    searchVolume: 180,
    keywords: ['360Hz gaming monitor', '360Hz esports', '360Hz competitive'],
  },
  professional_monitor: {
    id: 'professional-monitor',
    nameKey: 'monitor_professional',
    titleKey: 'monitor_professional_title',
    descriptionKey: 'monitor_professional_description',
    introKey: 'monitor_professional_intro',
    searchVolume: 420,
    keywords: ['professional monitor', 'color-accurate monitor', 'reference monitor'],
  },
  photo_editing_monitor: {
    id: 'photo-editing-monitor',
    nameKey: 'monitor_photo_editing',
    titleKey: 'monitor_photo_editing_title',
    descriptionKey: 'monitor_photo_editing_description',
    introKey: 'monitor_photo_editing_intro',
    searchVolume: 280,
    keywords: ['photo editing monitor', 'photography monitor', 'color accurate monitor'],
  },
  video_editing_monitor: {
    id: 'video-editing-monitor',
    nameKey: 'monitor_video_editing',
    titleKey: 'monitor_video_editing_title',
    descriptionKey: 'monitor_video_editing_description',
    introKey: 'monitor_video_editing_intro',
    searchVolume: 310,
    keywords: ['video editing monitor', '4K editing monitor', 'color-grading monitor'],
  },
};

/**
 * Get all valid brand slugs
 * Useful for generateStaticParams() in dynamic routes
 */
export function getMonitorBrandSlugs(): string[] {
  return Object.keys(MONITOR_BRANDS);
}

/**
 * Get brand data by slug
 * Returns null if brand not found
 */
export function getMonitorBrandData(slug: string): MonitorBrandData | null {
  return MONITOR_BRANDS[slug] || null;
}

/**
 * Get all brands sorted by search volume (highest first)
 * Useful for sitemaps and dynamic content prioritization
 */
export function getMonitorBrandsSorted(): MonitorBrandData[] {
  return Object.values(MONITOR_BRANDS).sort((a, b) => b.searchVolume - a.searchVolume);
}
