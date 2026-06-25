'use client';

import { useState, useEffect } from 'react';
import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface PixelDensityResult {
  ppi: number;
  dpi: number;
  category: string;
  quality: string;
}

interface PixelDensityCalculatorProps {
  locale?: Locale;
}

export default function PixelDensityCalculator({ locale = 'en' }: PixelDensityCalculatorProps) {
  const translate = t(locale);
  const [horizontalPixels, setHorizontalPixels] = useState<number>(2560);
  const [verticalPixels, setVerticalPixels] = useState<number>(1440);
  const [diagonalInches, setDiagonalInches] = useState<number>(27);
  const [result, setResult] = useState<PixelDensityResult | null>(null);

  useEffect(() => {
    if (!horizontalPixels || !verticalPixels || !diagonalInches) return;

    // Calculate pixels per inch using Pythagorean theorem
    const pixelDiagonal = Math.sqrt(
      horizontalPixels * horizontalPixels + verticalPixels * verticalPixels
    );
    const ppi = Math.round((pixelDiagonal / diagonalInches) * 10) / 10;
    const dpi = Math.round(ppi * 1.25); // Approximate DPI conversion

    let category = '';
    let quality = '';

    if (ppi < 100) {
      category = translate('pixel_density_category_low' as any);
      quality = translate('pixel_density_quality_low' as any);
    } else if (ppi < 130) {
      category = translate('pixel_density_category_standard' as any);
      quality = translate('pixel_density_quality_standard' as any);
    } else if (ppi < 170) {
      category = translate('pixel_density_category_high' as any);
      quality = translate('pixel_density_quality_high' as any);
    } else if (ppi < 220) {
      category = translate('pixel_density_category_very_high' as any);
      quality = translate('pixel_density_quality_very_high' as any);
    } else {
      category = translate('pixel_density_category_ultra' as any);
      quality = translate('pixel_density_quality_ultra' as any);
    }

    setResult({
      ppi: ppi,
      dpi: dpi,
      category,
      quality,
    });
  }, [horizontalPixels, verticalPixels, diagonalInches]);

  const presets = [
    { name: '24" 1080p', h: 1920, v: 1080, d: 24 },
    { name: '24" 1440p', h: 2560, v: 1440, d: 24 },
    { name: '27" 1080p', h: 1920, v: 1080, d: 27 },
    { name: '27" 1440p', h: 2560, v: 1440, d: 27 },
    { name: '27" 4K', h: 3840, v: 2160, d: 27 },
    { name: '32" 1440p', h: 2560, v: 1440, d: 32 },
    { name: '32" 4K', h: 3840, v: 2160, d: 32 },
    { name: '34" Ultrawide', h: 3440, v: 1440, d: 34 },
    { name: 'MacBook Pro 16"', h: 3456, v: 2234, d: 16 },
    { name: 'iPad Pro 12.9"', h: 2732, v: 2048, d: 12.9 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      {/* Presets */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-slate-900 mb-3">{translate('pixel_density_quick_presets' as any)}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {presets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => {
                setHorizontalPixels(preset.h);
                setVerticalPixels(preset.v);
                setDiagonalInches(preset.d);
              }}
              className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded text-xs font-medium transition-colors"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Manual Input */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Horizontal Resolution */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            {translate('pixel_density_horizontal_resolution_label' as any)}
          </label>
          <input
            type="number"
            value={horizontalPixels}
            onChange={(e) => setHorizontalPixels(Number(e.target.value))}
            className="w-full px-4 py-3 bg-white text-black border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translate('pixel_density_placeholder_horizontal' as any)}
          />
        </div>

        {/* Vertical Resolution */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            {translate('pixel_density_vertical_resolution_label' as any)}
          </label>
          <input
            type="number"
            value={verticalPixels}
            onChange={(e) => setVerticalPixels(Number(e.target.value))}
            className="w-full px-4 py-3 bg-white text-black border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translate('pixel_density_placeholder_vertical' as any)}
          />
        </div>

        {/* Screen Size */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            {translate('pixel_density_screen_size_label' as any)}
          </label>
          <input
            type="number"
            step="0.1"
            value={diagonalInches}
            onChange={(e) => setDiagonalInches(Number(e.target.value))}
            className="w-full px-4 py-3 bg-white text-black border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder={translate('pixel_density_placeholder_size' as any)}
          />
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-lg border-2 border-emerald-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-slate-600 mb-2">{translate('pixel_density_ppi_label' as any)}</p>
              <p className="text-5xl font-bold text-emerald-800">{result.ppi}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-2">{translate('pixel_density_dpi_label' as any)}</p>
              <p className="text-5xl font-bold text-blue-600">{result.dpi}</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-2">{translate('pixel_density_display_quality_label' as any)}</p>
            <p className="text-lg font-semibold text-slate-900 mb-2">{result.category}</p>
            <p className="text-slate-700">{result.quality}</p>
          </div>

          {/* Quality Indicators */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm font-semibold text-slate-900 mb-4">{translate('pixel_density_quality_indicators_label' as any)}</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">{translate('pixel_density_sharpness_label' as any)}</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-green-500"
                    style={{ width: `${Math.min((result.ppi / 220) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">{translate('pixel_density_text_clarity_label' as any)}</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-green-500"
                    style={{ width: `${Math.min((result.ppi / 170) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-700">{translate('pixel_density_professional_use_label' as any)}</span>
                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-green-500"
                    style={{ width: `${Math.min((result.ppi / 220) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reference Guide */}
      <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h3 className="font-semibold text-slate-900 mb-3">📊 {translate('pixel_density_reference_guide_title' as any)}</h3>
        <div className="text-sm space-y-2 text-slate-700">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-red-500 rounded"></span>
            <span>{translate('pixel_density_reference_low' as any)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-yellow-500 rounded"></span>
            <span>{translate('pixel_density_reference_standard' as any)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded"></span>
            <span>{translate('pixel_density_reference_high' as any)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-emerald-600 rounded"></span>
            <span>{translate('pixel_density_reference_ultra' as any)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
