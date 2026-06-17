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
  monitor_brand_not_found: 'Monitor brand not found',
  monitor_test_suffix: 'Monitor Test',
  oled_tv_specific_questions: 'OLED TV-Specific Questions',
  screen_color_rgb_label: 'RGB',

  language_selector_aria: 'Select language',
  navigation_toggle_menu_aria: 'Toggle menu',
  skip_to_main_content: 'Skip to main content',

  dead_pixel_rgb_label: 'RGB',
  screen_display_fullscreen_aria: 'Click to fullscreen',
  logo_aria_label: 'TestaScreen logo',

  pixel_density_category_low: 'Low Density',
  pixel_density_quality_low: 'pixelation visible at normal viewing distance',
  pixel_density_category_standard: 'Standard Density',
  pixel_density_quality_standard: 'typical desktop monitor, comfortable for everyday use',
  pixel_density_category_high: 'High Density',
  pixel_density_quality_high: 'sharp and clear, excellent for productivity and gaming',
  pixel_density_category_very_high: 'Very High Density',
  pixel_density_quality_very_high: 'very sharp display, approaching professional standards',
  pixel_density_category_ultra: 'Ultra Density (Retina)',
  pixel_density_quality_ultra: 'extremely sharp, near print quality',

  pixel_density_reference_low: '<100 PPI: Low quality, visible pixels',
  pixel_density_reference_standard: '100-130 PPI: Standard quality for desktop',
  pixel_density_reference_high: '130-170 PPI: High quality, very sharp',
  pixel_density_reference_ultra: '170+ PPI: Ultra sharp, professional grade',
};

translations.en = { ...(translations.en || {}), ...additions };

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted batch6 i18n keys into EN locale');
