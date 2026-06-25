'use client';

import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

interface ColorCustomizerProps {
  colorId: string;
  defaultColor: string;
  onColorChange: (color: string) => void;
  locale?: Locale;
}

export function ColorCustomizer({
  colorId,
  defaultColor,
  onColorChange,
  locale = 'en',
}: ColorCustomizerProps) {
  const translate = t(locale);
  const [baseColor, setBaseColor] = useState(defaultColor);
  const [customColor, setCustomColor] = useState(defaultColor);
  const [hexInput, setHexInput] = useState(defaultColor);
  const [tone, setTone] = useState(50);
  const [isOpen, setIsOpen] = useState(false);

  // Load saved color from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // For primary color screens, always reset to default and don't load from localStorage
    const primaryColors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500'];
    const isDefaultColor = primaryColors.includes(defaultColor.toUpperCase());
    
    if (isDefaultColor) {
      // Always use default for primary colors, clear any saved customization
      localStorage.removeItem(`color-${colorId}`);
      setBaseColor(defaultColor);
      setCustomColor(defaultColor);
      setHexInput(defaultColor);
      setTone(50);
      onColorChange(defaultColor);
    } else {
      // For custom colors, load from localStorage if available
      const saved = localStorage.getItem(`color-${colorId}`);
      if (saved) {
        setBaseColor(saved);
        setCustomColor(saved);
        setHexInput(saved);
        setTone(50);
        onColorChange(saved);
      }
    }
  }, [colorId, onColorChange, defaultColor]);

  // Parse hex color and calculate tone
  const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return '#' + [r, g, b].map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('').toUpperCase();
  };

  // Convert RGB to HSL
  const rgbToHsl = (hex: string): { h: number; s: number; l: number } | null => {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;

    let { r, g, b } = rgb;
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
          break;
        case g:
          h = ((b - r) / d + 2) / 6;
          break;
        case b:
          h = ((r - g) / d + 4) / 6;
          break;
      }
    }

    return { h, s, l };
  };

  // Convert HSL to RGB
  const hslToRgb = (h: number, s: number, l: number): string => {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return rgbToHex(
      Math.round(r * 255),
      Math.round(g * 255),
      Math.round(b * 255)
    );
  };

  const adjustTone = (hex: string, toneValue: number): string => {
    const hsl = rgbToHsl(hex);
    if (!hsl) return hex;

    // Tone 50 = original color
    // Tone 0 = very dark (L * 0.2)
    // Tone 100 = very light (1 - (1 - L) * 0.2)
    if (toneValue === 50) {
      return hslToRgb(hsl.h, hsl.s, hsl.l);
    } else if (toneValue < 50) {
      // Darken: scale from 0.2*L down to L
      const darkFactor = toneValue / 50; // 0 to 1
      const newL = hsl.l * (0.2 + darkFactor * 0.8); // From 20% to original
      return hslToRgb(hsl.h, hsl.s, newL);
    } else {
      // Lighten: scale from L up to (1 - 0.2*(1-L))
      const lightFactor = (toneValue - 50) / 50; // 0 to 1
      const newL = hsl.l + (1 - hsl.l) * lightFactor * 0.8; // From original to 80% of way to white
      return hslToRgb(hsl.h, hsl.s, newL);
    }
  };

  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setBaseColor(newColor);
    setCustomColor(newColor);
    setHexInput(newColor.toUpperCase());
    setTone(50);
    localStorage.setItem(`color-${colorId}`, newColor);
    onColorChange(newColor);
  };

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    if (!value.startsWith('#')) value = '#' + value;
    setHexInput(value);

    // Validate hex
    if (/^#[0-9A-F]{6}$/.test(value)) {
      setBaseColor(value);
      setCustomColor(value);
      setTone(50);
      localStorage.setItem(`color-${colorId}`, value);
      onColorChange(value);
    }
  };

  const handleRgbChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    channel: 'r' | 'g' | 'b'
  ) => {
    const value = parseInt(e.target.value) || 0;
    const clamped = Math.max(0, Math.min(255, value));

    const rgb = hexToRgb(baseColor) || { r: 0, g: 0, b: 0 };
    const newRgb = { ...rgb, [channel]: clamped };
    const newHex = rgbToHex(newRgb.r, newRgb.g, newRgb.b);

    setBaseColor(newHex);
    setCustomColor(newHex);
    setHexInput(newHex);
    setTone(50);
    localStorage.setItem(`color-${colorId}`, newHex);
    onColorChange(newHex);
  };

  const handleToneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const toneValue = parseInt(e.target.value);
    setTone(toneValue);

    const adjustedColor = adjustTone(baseColor, toneValue);
    setCustomColor(adjustedColor);
    setHexInput(adjustedColor);
    localStorage.setItem(`color-${colorId}`, adjustedColor);
    onColorChange(adjustedColor);
  };

  const handleReset = () => {
    setBaseColor(defaultColor);
    setCustomColor(defaultColor);
    setHexInput(defaultColor);
    setTone(50);
    localStorage.removeItem(`color-${colorId}`);
    onColorChange(defaultColor);
  };

  const rgb = hexToRgb(customColor) || { r: 0, g: 0, b: 0 };

  return (
    <div className="w-full">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 px-4 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 border border-slate-300 rounded-lg font-semibold text-slate-800 transition-all text-center"
      >
        {isOpen ? `▼ ${translate('color_customizer_toggle' as any)}` : `▶ ${translate('color_customizer_toggle' as any)}`}
      </button>

      {/* Customizer panel */}
      {isOpen && (
        <div className="mt-4 p-6 bg-white border border-slate-200 rounded-lg space-y-6">
          {/* Tone slider */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              {translate('color_customizer_tone_label' as any)}
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={tone}
                onChange={handleToneChange}
                className="w-full h-2 bg-gradient-to-r from-black to-white rounded-lg appearance-none cursor-pointer accent-cyan-600"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>{translate('color_customizer_darker' as any)}</span>
                <span className="font-semibold text-slate-700">{tone}%</span>
                <span>{translate('color_customizer_lighter' as any)}</span>
              </div>
            </div>
          </div>

          {/* Color picker */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              {translate('color_customizer_picker_label' as any)}
            </label>
            <input
              type="color"
              value={customColor}
              onChange={handleColorPickerChange}
              className="w-full h-16 rounded-lg border-2 border-slate-200 cursor-pointer"
            />
          </div>

          {/* Hex code */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {translate('color_customizer_hex_label' as any)}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={hexInput}
                onChange={handleHexInputChange}
                maxLength={7}
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg font-mono text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="#000000"
              />
              <div
                className="w-12 h-10 rounded-lg border-2 border-slate-300 flex-shrink-0"
                style={{ backgroundColor: customColor }}
              />
            </div>
          </div>

          {/* RGB values */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              {translate('color_customizer_rgb_label' as any)}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['r', 'g', 'b'] as const).map((channel) => (
                <div key={channel}>
                  <label className="block text-xs font-medium text-slate-600 mb-1">
                    {channel.toUpperCase()}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="255"
                    value={rgb[channel]}
                    onChange={(e) => handleRgbChange(e, channel)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg text-center font-mono text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Reset button */}
          <Button
            onClick={handleReset}
            variant="outline"
            size="lg"
            className="w-full"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            {translate('color_customizer_reset_button' as any)}
          </Button>
        </div>
      )}
    </div>
  );
}
