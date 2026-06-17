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
  blog_section_in_this_section: 'In this section:',
  blog_section_conclusion: 'Conclusion',
  blog_section_faq: 'Frequently Asked Questions',
  blog_inline_cta_title: 'Test Your Display Now',
  blog_inline_cta_button: 'Try Testing Tools',

  zoom_lighting_heading: 'Zoom Lighting Tool',
  zoom_lighting_description_long: 'This tool provides adjustable lighting for photography and video production.',

  gaming_monitor_specific_questions: 'Gaming Monitor-Specific Questions',
  test_other_devices: 'Test Other Devices',
  iphone_specific_questions: 'iPhone-Specific Questions',
  macbook_specific_questions: 'MacBook-Specific Questions',

  terms_email_label: 'Email:',
  terms_email_value: 'legal@testascreen.eu',

  monitor_comparison_page_title: 'Monitor Comparison Tool - Compare Specs Side by Side',
  monitor_comparison_page_description:
    'Compare monitor specifications side by side. Find differences in resolution, refresh rate, panel type, and more.',
  monitor_comparison_page_breadcrumb: 'Monitor Comparison',
  monitor_comparison_page_heading: 'Monitor Comparison Tool',
  monitor_comparison_page_subheading: 'Compare up to 3 monitors side by side. Analyze specs and make informed decisions.',

  contrast_vision_simulation_label: 'Color Vision Simulation',
  contrast_color_transformation_label: 'Color Transformation (Current Mode)',

  dead_pixel_start_fullscreen_aria: 'Click to start fullscreen test',
  dead_pixel_select_color_prefix: 'Select',
};

translations.en = { ...(translations.en || {}), ...additions };

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted batch5 i18n keys into EN locale');
