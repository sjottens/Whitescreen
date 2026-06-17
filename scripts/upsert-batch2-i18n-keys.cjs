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
  blog_layout_by_label: 'By',
  blog_layout_published_label: 'Published',
  blog_layout_updated_label: 'Updated',
  blog_layout_min_read_suffix: 'min read',
  blog_layout_toc_title: 'Table of Contents',
  blog_layout_related_title: 'Related Articles',
  blog_layout_explore_tools_cta: 'Explore Testing Tools',
  blog_layout_scroll_top_aria: 'Scroll to top',

  dead_pixel_previous_color_button: 'Previous Color',
  dead_pixel_next_color_button: 'Next Color',
  dead_pixel_how_to_test_label: 'How to test',
  dead_pixel_how_to_test_text:
    'Click "Start Dead Pixel Test" or press F to enter fullscreen mode. Use arrow keys to cycle through test colors. Look for any pixels that do not change with the selected color. Press ESC to exit.',

  device_tests_meta_description:
    'Specialized display tests designed for iPhones, MacBooks, gaming monitors, and OLED TVs.',
  device_tests_keyword_1: 'device test',
  device_tests_keyword_2: 'iPhone test',
  device_tests_keyword_3: 'MacBook test',
  device_tests_keyword_4: 'gaming monitor test',
  device_tests_keyword_5: 'OLED TV test',
  device_tests_badge: 'Device-Specific',
  device_tests_intro:
    'Specialized test pages designed for specific devices and display types. Each test is optimized for device characteristics and common resolutions.',
  device_tests_not_listed_title: 'Not on this list?',
  device_tests_not_listed_desc:
    'Our general display tests work with any device. Visit the tools page to run color screens, brightness tests, and more.',

  screen_variant_not_found_desc: 'The requested screen configuration does not exist.',
  breadcrumbs_aria_label: 'Breadcrumb',
  screen_variant_other_variants_title: 'Other Variants',
  screen_variant_related_tests_title: 'Related Screen Tests',

  pixel_density_page_title: 'Pixel Density Calculator - Calculate Monitor DPI & PPI',
  pixel_density_page_description:
    'Calculate pixel density, DPI, and PPI for any monitor. Enter resolution and screen size to estimate display sharpness.',
  pixel_density_keyword_1: 'pixel density calculator',
  pixel_density_keyword_2: 'dpi calculator',
  pixel_density_keyword_3: 'ppi calculator',
  pixel_density_keyword_4: 'monitor sharpness',
  pixel_density_page_header_desc:
    'Calculate DPI, PPI, and pixel density for any monitor and estimate perceived display sharpness.',
  pixel_density_understanding_title: 'Understanding Pixel Density',
  pixel_density_understanding_desc:
    'Pixel density, measured in PPI or DPI, determines how sharp and crisp text and graphics appear on your display.',
  pixel_density_standards_title: 'Pixel Density Standards',
  pixel_density_standard_1_title: 'Below 100 PPI',
  pixel_density_standard_1_desc: 'Lower density; pixelation may be visible at normal viewing distance.',
  pixel_density_standard_2_title: '100-150 PPI',
  pixel_density_standard_2_desc: 'Standard desktop quality and comfortable everyday viewing.',
  pixel_density_standard_3_title: '150-200 PPI',
  pixel_density_standard_3_desc: 'High quality with sharp text and clear details.',
  pixel_density_standard_4_title: '200+ PPI',
  pixel_density_standard_4_desc: 'Retina-level sharpness approaching print-like quality.',
  pixel_density_common_table_title: 'Common Resolutions & Sizes',
  pixel_density_table_monitor_size: 'Monitor Size',
};

translations.en = { ...(translations.en || {}), ...additions };

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted batch2 i18n keys into EN locale');
