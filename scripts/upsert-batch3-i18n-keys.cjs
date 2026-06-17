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
  color_customizer_toggle: 'Customize Color',
  color_customizer_tone_label: 'Tone (Lightness)',
  color_customizer_darker: 'Darker',
  color_customizer_lighter: 'Lighter',
  color_customizer_picker_label: 'Color Picker',
  color_customizer_hex_label: 'Hex Code',
  color_customizer_rgb_label: 'RGB Values',
  color_customizer_reset_button: 'Reset to Default',

  monitor_test_page_title: 'Test Your Monitor - 50+ Brands',
  monitor_test_page_description:
    'Find your monitor brand and access specialized test pages optimized for your display.',
  monitor_test_keyword_1: 'monitor test',
  monitor_test_keyword_2: 'brand test',
  monitor_test_keyword_3: 'display test',
  monitor_test_breadcrumb_title: 'Monitor Brands',
  monitor_test_badge: 'Test Your Monitor',
  monitor_test_heading: '50+ Monitor Brands',
  monitor_test_intro:
    'Select your monitor brand below to access specialized test pages optimized for your display model and specifications.',
  monitor_test_browse_prefix: 'Browse all',
  monitor_test_browse_suffix:
    'supported monitor brands, from gaming-focused manufacturers to professional display makers.',
  monitor_test_not_found_brand_title: 'Do not see your brand?',
  monitor_test_not_found_brand_desc:
    'All monitor tests work with any brand. Use our general display tests for comprehensive monitor evaluation.',
  monitor_test_back_all_tools: 'Back to All Tools',

  privacy_legal_email_label: 'Email',
  privacy_legal_email: 'legal@testascreen.eu',
  privacy_contact_email_label: 'Email',
  privacy_contact_email: 'privacy@testascreen.eu',
  privacy_dpo_label: 'Data Protection Officer',
  privacy_dpo_email: 'dpo@testascreen.eu',

  guide_how_to_use_title: 'How to Use This Tool',
  guide_what_is_test_title: 'What is this Test?',
  guide_testing_tips_title: 'Testing Tips',
  guide_pro_tip_label: 'Pro Tip',

  screen_color_not_found_title: 'Color not found',
  screen_color_hex_label: 'Hex',
  screen_color_about_intro_prefix: 'The',
  screen_color_about_intro_suffix:
    'test is essential for evaluating display color accuracy and uniformity. This color can be used to:',
  screen_color_default_use_case: 'Test display quality',
};

translations.en = { ...(translations.en || {}), ...additions };

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted batch3 i18n keys into EN locale');
