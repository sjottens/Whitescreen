'use client';

import { Palette } from 'lucide-react';
import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface ColorScreenIntroProps {
  locale: Locale;
  colorName: string;
  colorHex: string;
  colorLabel: string;
  useCases?: Array<{ text?: string; en?: string; fr?: string }>;
}

export default function ColorScreenIntro({ locale, colorName, colorHex, colorLabel }: ColorScreenIntroProps) {
  const translate = t(locale);

  // Fallback color descriptions for colors not in the translation system
  const colorDescriptions: { [key: string]: string } = {
    white: `${translate('white_screen_long' as any)}`,
    black: `${translate('black_screen_long' as any)}`,
    red: `${translate('red_screen_long' as any)}`,
    green: `${translate('green_screen_long' as any)}`,
    blue: `${translate('blue_screen_long' as any)}`,
    yellow: `${translate('yellow_screen_long' as any)}`,
    orange: `${translate('orange_screen_long' as any)}`,
    pink: `${translate('pink_screen_long' as any)}`,
    purple: `${translate('purple_screen_long' as any)}`,
  };

  const description = colorDescriptions[colorName.toLowerCase()] || 
    `${translate('white_screen_long' as any)}`;

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {colorLabel} {translate('color_test')}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {description}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">{translate('color_accuracy_test')}</div>
              <p className="text-slate-300 text-sm">{colorHex}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">{translate('display_testing_title')}</div>
              <p className="text-slate-300 text-sm">{translate('feature_instant')}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">{translate('feature_instant')}</div>
              <p className="text-slate-300 text-sm">{translate('feature_instant_desc' as any)}</p>
            </div>
          </div>
        </div>

        {/* What You Can Test */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Palette className="w-8 h-8 text-purple-400" />
            {translate('features_title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">{translate('display_testing_title')}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ {translate('color_accuracy_test')}</li>
                <li>✓ {translate('screen_uniformity_test')}</li>
                <li>✓ {translate('contrast_test')}</li>
                <li>✓ {translate('dead_pixel_test')}</li>
                <li>✓ {translate('brightness_test' as any)}</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">{translate('use_cases_title')}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ {translate('photography_lighting_title')}</li>
                <li>✓ {translate('video_production_title')}</li>
                <li>✓ {translate('gaming_streaming_title')}</li>
                <li>✓ {translate('display_testing_title')}</li>
                <li>✓ {translate('zoom_lighting' as any)}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Info */}
        <div className="bg-purple-950/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">🎨 {translate('features_title')}</h2>
          <p className="text-slate-300 mb-3">
            {translate('feature_professional_desc')}
          </p>
          <p className="text-slate-300 text-sm">
            {translate('white_screen')}: <strong>{colorHex}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
