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
  tools_explore_cta: 'Explore ->',
  tools_calculate_cta: 'Calculate ->',
  tools_compare_cta: 'Compare ->',
  compare_brand_section_title: 'Brand vs Brand',
  compare_spec_section_title: 'Specification Comparisons',
  compare_device_section_title: 'Device Comparisons',

  home_monitor_device_intro: 'Test your display with monitor-specific and device-specific pages designed for different screen types and use cases.',
  home_device_tests_intro: 'Specialized test pages for different devices and display types.',
  home_tools_resources_title: 'Powerful Calculator Tools & Comparisons',
  home_tools_resources_desc: 'Discover our interactive tools to optimize your monitor setup and compare specifications with confidence.',
  home_compare_callout_desc: 'In-depth guides comparing monitor brands, panel types, and gaming setups to help you make informed decisions.',
  home_compare_panel_types: 'Panel types',
  home_compare_refresh_rates: 'Refresh rates',
  home_compare_brands: 'Brands',
  home_compare_see_all: 'See All',
  home_compare_count_label: '15+ comparisons',

  compare_not_found_title: 'Comparison not found',
  compare_feature_col_label: 'Feature',
  compare_type_label: 'Type',
  compare_popularity_label: 'Popularity',
  compare_monthly_searches_label: 'monthly searches',
  compare_detail_cta_title: 'Ready to Test Your Display?',
  compare_detail_cta_desc: 'Use our professional display testing tools to optimize your monitor setup.',
  compare_related_title: 'Related Comparisons',

  brightness_gradient_test_title: 'Brightness Gradient Test',
  brightness_gradient_test_subtitle: 'Left: Black (0%) -> Right: White (100%)',
  brightness_gradient_test_hint: 'Look for banding or color shifts',
  brightness_flicker_test_title: 'Flicker Detection Test',
  brightness_black_label: 'BLACK',
  brightness_white_label: 'WHITE',
  brightness_flicker_test_hint: 'Look for screen flickering',
  brightness_mode_ladder: 'Gray Ladder',
  brightness_mode_gradient: 'Gradient',
  brightness_mode_bars: 'Bars',
  brightness_mode_flicker: 'Flicker',
  brightness_gray_navigation_label: 'Gray Level Navigation',
  brightness_display_opacity_label: 'Display Opacity',
  brightness_display_opacity_hint: 'Adjust to test monitor brightness response',
  brightness_flicker_frequency_label: 'Flicker Frequency',
  brightness_flicker_frequency_hint: 'Test for screen flickering at different refresh rates',
  brightness_pause_button: 'Pause',
  brightness_auto_cycle_button: 'Auto-cycle',
  brightness_reset_button: 'Reset',
  brightness_fullscreen_button: 'Fullscreen',
  brightness_desktop_button: 'Desktop',
  brightness_mobile_button: 'Mobile',
  brightness_navigate_label: 'Navigate',

  dead_pixel_click_fullscreen_hint: 'Click or press F for fullscreen',
  dead_pixel_previous_button: 'Previous',
  dead_pixel_next_button: 'Next',
  dead_pixel_stop_button: 'Stop',
  dead_pixel_start_button: 'Start',
  dead_pixel_auto_cycle_label: 'Auto-cycle',
  dead_pixel_exit_button: 'Exit',
  dead_pixel_keyboard_hint: '<- -> arrows: Change color | Space: Auto-cycle | ESC/F: Exit',
  dead_pixel_desktop_test_button: 'Desktop Test',
  dead_pixel_mobile_test_button: 'Mobile Test',
  dead_pixel_aspect_ratio_label: 'Select Device Aspect Ratio',
  dead_pixel_start_test_button: 'Start Dead Pixel Test',
  dead_pixel_current_color_label: 'Current Test Color',
  dead_pixel_test_colors_label: 'Test Colors',

  pixel_density_quick_presets: 'Quick Presets:',
  pixel_density_horizontal_resolution_label: 'Horizontal Resolution (pixels)',
  pixel_density_vertical_resolution_label: 'Vertical Resolution (pixels)',
  pixel_density_screen_size_label: 'Screen Size (diagonal inches)',
  pixel_density_ppi_label: 'Pixels Per Inch (PPI)',
  pixel_density_dpi_label: 'Dots Per Inch (DPI)',
  pixel_density_display_quality_label: 'Display Quality',
  pixel_density_quality_indicators_label: 'Quality Indicators',
  pixel_density_sharpness_label: 'Sharpness',
  pixel_density_text_clarity_label: 'Text Clarity',
  pixel_density_professional_use_label: 'Professional Use',
  pixel_density_reference_guide_title: 'Reference Guide',

  refresh_rate_gpu_label: 'Select Your Graphics Card (GPU)',
  refresh_rate_gpu_placeholder: 'Select GPU...',
  refresh_rate_cpu_label: 'Select Your Processor (CPU)',
  refresh_rate_cpu_placeholder: 'Select CPU...',
  refresh_rate_recommended_label: 'Recommended Refresh Rate',
  refresh_rate_monitor_recommendations_label: 'Monitor Recommendations:',
  refresh_rate_tips_title: 'Tips for Best Performance',

  monitor_compare_monitor_1_label: 'Monitor 1',
  monitor_compare_monitor_2_label: 'Monitor 2',
  monitor_compare_monitor_3_label: 'Monitor 3 (Optional)',
  monitor_compare_select_monitor_placeholder: 'Select Monitor...',
  monitor_compare_skip_option: 'Skip',
  monitor_compare_spec_col_label: 'Spec',
  monitor_compare_summary_title: 'Comparison Summary',
  monitor_compare_minimum_hint: 'Select at least 2 monitors to compare',

  contrast_test_title: 'Contrast Test',
  contrast_readability_test_title: 'Readability Test',
  contrast_readability_text: 'This is a paragraph with contrast ratio',
  contrast_readability_small_text_hint: 'Smaller text requires higher contrast for accessibility. Make sure all text is easy to read.',
  contrast_pattern_title: 'Pattern Contrast',
  contrast_pattern_hint: 'Can you clearly distinguish the patterns above?',
  contrast_custom_pair_title: 'Custom Pair Test',
  contrast_custom_pair_text: 'This text uses your custom colors',
  contrast_ratio_label: 'Contrast Ratio',
  contrast_foreground_label: 'Foreground Color',
  contrast_background_label: 'Background Color',
  contrast_copy_button: 'Copy',
  contrast_mode_wcag_ladder: 'WCAG Ladder',
  contrast_mode_readability: 'Readability',
  contrast_mode_patterns: 'Patterns',
  contrast_mode_custom_pair: 'Custom Pair',
  contrast_vision_hint: 'Try contrast pairs 6-10 (colored pairs) to see the biggest differences',
  contrast_pair_label: 'Contrast Pair',
  contrast_reset_button: 'Reset',
  contrast_fullscreen_button: 'Fullscreen',
  contrast_shortcuts_label: 'Shortcuts',
};

translations.en = { ...(translations.en || {}), ...additions };

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted top10 i18n keys into EN locale');
