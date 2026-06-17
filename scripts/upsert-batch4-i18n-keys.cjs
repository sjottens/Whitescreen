const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'lib', 'translations.ts');
const source = fs.readFileSync(filePath, 'utf8');
const start = source.indexOf('export const translations =');
const end = source.indexOf('} as const;');
if (start === -1 || end === -1) throw new Error('translations block not found');
const objStart = source.indexOf('{', start);
const objLiteral = source.slice(objStart, end + 1);
// eslint-disable-next-line no-new-func
const translations = new Function(`return (${objLiteral});`)();

const additions = {
  not_found_title: 'Page Not Found',
  not_found_description: 'The page you are looking for does not exist or has been moved.',
  go_home_button: 'Go Home',

  refresh_rate_page_title: 'Refresh Rate Calculator - Find Your Optimal Gaming Hz',
  refresh_rate_page_description:
    'Calculate the ideal refresh rate for your setup using GPU and CPU recommendations.',
  refresh_rate_keyword_1: 'refresh rate calculator',
  refresh_rate_keyword_2: 'gaming monitor hz',
  refresh_rate_keyword_3: '144hz vs 240hz',
  refresh_rate_keyword_4: 'gpu fps calculator',
  refresh_rate_page_header_desc:
    'Calculate the optimal refresh rate for your gaming setup based on GPU and CPU performance.',
  refresh_rate_understanding_title: 'Understanding Refresh Rate',
  refresh_rate_understanding_desc:
    'Refresh rate in Hz determines how many times per second your display updates. Higher refresh rates can feel smoother when FPS is sufficient.',
  refresh_rate_guidelines_title: 'Refresh Rate Guidelines',
  refresh_rate_guideline_60: 'Good for casual gaming and office work. Most entry-level GPUs can handle this.',
  refresh_rate_guideline_144: 'Recommended for serious gamers. Requires at least a mid-range GPU.',
  refresh_rate_guideline_240: 'Ideal for competitive play. Needs strong GPU performance.',
  refresh_rate_guideline_360: 'Designed for professional esports and top-tier systems.',
  refresh_rate_fps_vs_hz_title: 'FPS vs Refresh Rate',
  refresh_rate_fps_vs_hz_desc:
    'For smooth gameplay, aim for FPS slightly above monitor refresh rate to reduce tearing and stutter.',

  footer_brand_description: 'Elite screen testing and display tools for professionals and enthusiasts.',
  footer_sitemap_label: 'Sitemap',
  footer_robots_label: 'Robots',

  refresh_rate_tip_1: 'Maintain FPS 10-20% above your refresh rate to avoid stuttering (for example, around 160 FPS for 144Hz).',
  refresh_rate_tip_2: 'Use G-Sync (NVIDIA) or FreeSync (AMD) to reduce tearing.',
  refresh_rate_tip_3: 'Higher resolutions (1440p and 4K) require more GPU power and can lower effective Hz targets.',
  refresh_rate_tip_4: 'Verify game-specific requirements with current benchmarks.',

  tool_layout_space_key: 'Space',
  tool_layout_ctrl_s_key: 'Ctrl + S',
  tool_layout_explore_more_title: 'Explore More Tools',
  tool_layout_view_all_prefix: 'View All',

  common_loading: 'Loading...',
  blog_page_title: 'Screen Testing Blog',
  blog_page_subtitle: 'Expert guides for display diagnostics, dead pixels, monitor testing, and more',
};

translations.en = { ...(translations.en || {}), ...additions };

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted batch4 i18n keys into EN locale');
