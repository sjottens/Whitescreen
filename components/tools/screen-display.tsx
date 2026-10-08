// components/tools/screen-display.tsx - Interactive screen display component

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ColorCustomizer } from '@/components/ui/color-customizer';
import type { ClientStrings } from '@/lib/client-strings';

export interface ScreenSwatch {
  /** Used in the ?color= query string, e.g. "red". */
  id: string;
  name: string;
  hex: string;
}

interface ScreenDisplayProps {
  color: string;
  colorId?: string;
  title?: string;
  strings: ClientStrings<'screenDisplay'>;
  /** Preset colors to switch between. A ?color=<id> query picks the starting one. */
  swatches?: ScreenSwatch[];
}

export default function ScreenDisplay({ color, colorId, title, strings, swatches }: ScreenDisplayProps) {
  const [displayColor, setDisplayColor] = useState(color);
  const [customWidth, setCustomWidth] = useState('1920');
  const [customHeight, setCustomHeight] = useState('1080');
  const [copied, setCopied] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

  const translate = (key: keyof ClientStrings<'screenDisplay'>) => strings[key];

  // Presets for common resolutions
  const resolutionPresets = [
    { label: '720p', width: 1280, height: 720 },
    { label: '1080p', width: 1920, height: 1080 },
    { label: '1440p', width: 2560, height: 1440 },
    { label: '4K', width: 3840, height: 2160 },
    { label: '8K', width: 7680, height: 4320 },
  ];

  // Handle fullscreen
  const handleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement && screenRef.current) {
      try {
        await screenRef.current.requestFullscreen();
      } catch (err) {
        console.error('Failed to enter fullscreen:', err);
      }
    }
  }, []);

  // Download as PNG
  const handleDownload = useCallback(async () => {
    const width = Math.min(7680, Math.max(1, parseInt(customWidth) || 1920));
    const height = Math.min(4320, Math.max(1, parseInt(customHeight) || 1080));

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = displayColor;
      ctx.fillRect(0, 0, width, height);

      // Download
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${title || 'screen'}-${width}x${height}.png`;
      link.click();
    }
  }, [customWidth, customHeight, displayColor, title]);

  // Start on the swatch named in ?color= (old /red-screen style URLs redirect here with it).
  useEffect(() => {
    if (!swatches) return;
    const requested = new URLSearchParams(window.location.search).get('color');
    const swatch = swatches.find((s) => s.id === requested);
    if (swatch) setDisplayColor(swatch.hex);
  }, [swatches]);

  // Handle fullscreen exit
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const handleFullscreenChange = () => {
      setIsFullscreenActive(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle fullscreen keydown events
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const handleFullscreenKeydown = (e: KeyboardEvent) => {
      if (document.fullscreenElement) {
        if (e.key === 'Escape') {
          document.exitFullscreen().catch(() => {});
        }
      }
    };

    document.addEventListener('keydown', handleFullscreenKeydown);
    return () => document.removeEventListener('keydown', handleFullscreenKeydown);
  }, []);

  // Keyboard shortcuts for non-fullscreen context
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only handle shortcuts if not already in fullscreen
      if (!document.fullscreenElement) {
        if (e.key === 'f' || e.key === 'F' || e.code === 'Space') {
          e.preventDefault();
          handleFullscreen();
        }
        if (e.ctrlKey && e.key === 's') {
          e.preventDefault();
          handleDownload();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleFullscreen, handleDownload]);

  // Copy color code
  const handleCopyColor = () => {
    navigator.clipboard.writeText(displayColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-50 p-6">
      {/* Screen Display - Can go fullscreen */}
      <div
        ref={screenRef}
        style={{ backgroundColor: displayColor }}
        className={`screen-display-fullscreen-target w-full cursor-pointer transition-shadow ${
          isFullscreenActive
            ? 'fixed inset-0 m-0 rounded-none border-0 p-0 shadow-none'
            : 'aspect-video mb-6 rounded-lg border-4 border-slate-200 shadow-inner hover:shadow-lg'
        }`}
        onClick={handleFullscreen}
        role="button"
        tabIndex={0}
        aria-label={translate('screen_display_fullscreen_aria')}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Fullscreen exit button - only show when in fullscreen */}
          {isFullscreenActive && (
            <div
              className="absolute bottom-8 left-8 right-8 flex gap-4 flex-wrap"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="secondary"
                onClick={() => {
                  if (document.fullscreenElement) {
                    document.exitFullscreen().catch(() => {});
                  }
                }}
              >
                {translate('screen_display_exit_fullscreen_hint')}
              </Button>
            </div>
          )}

          {/* Instructions - only show when not in fullscreen */}
          {!isFullscreenActive && (
            <div className="text-center text-slate-400 pointer-events-none">
              <Maximize2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">{translate('screen_display_click_to_fullscreen')}</p>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        {swatches && (
          <div role="group" aria-label={translate('screen_display_pick_color')}>
            <p className="mb-3 text-sm font-medium text-slate-300">{translate('screen_display_pick_color')}</p>
            <div className="flex flex-wrap items-center gap-2">
              {swatches.map((swatch) => {
                const active = displayColor.toUpperCase() === swatch.hex.toUpperCase();
                return (
                  <button
                    key={swatch.id}
                    type="button"
                    onClick={() => setDisplayColor(swatch.hex)}
                    aria-pressed={active}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium text-slate-100 transition-colors focus-ring ${
                      active ? 'border-[#00DC82] bg-slate-900' : 'border-slate-600 bg-slate-800 hover:border-slate-400'
                    }`}
                  >
                    <span className="h-5 w-5 rounded-full border border-slate-500" style={{ backgroundColor: swatch.hex }} aria-hidden="true" />
                    {swatch.name}
                  </button>
                );
              })}
              <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100 hover:border-slate-400">
                <input
                  type="color"
                  value={/^#[0-9a-f]{6}$/i.test(displayColor) ? displayColor : '#000000'}
                  onChange={(e) => setDisplayColor(e.target.value.toUpperCase())}
                  className="h-5 w-5 cursor-pointer rounded border-0 bg-transparent p-0"
                />
                {translate('screen_display_custom_color')}
              </label>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleFullscreen} variant="primary" size="lg">
            <Maximize2 className="w-5 h-5 mr-2" />
            {translate('screen_display_fullscreen_btn')}
          </Button>
          <Button onClick={handleDownload} variant="secondary" size="lg">
            <Download className="w-5 h-5 mr-2" />
            {translate('screen_display_download_btn')}
          </Button>
          <Button onClick={handleCopyColor} variant="outline" size="lg">
            <Copy className="w-5 h-5 mr-2" />
            {copied ? translate('screen_display_copied_hint') : displayColor}
          </Button>
        </div>

        {/* Color Customizer */}
        {colorId && (
          <ColorCustomizer
            strings={strings}
            colorId={colorId}
            defaultColor={color}
            onColorChange={setDisplayColor}
          />
        )}

        {/* Resolution Settings */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">{translate('screen_display_title')}</h3>

          {/* Preset Buttons */}
          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-3">{translate('screen_display_presets')}</p>
            <div className="flex flex-wrap gap-2">
              {resolutionPresets.map((preset) => (
                <Button
                  key={preset.label}
                  variant={customWidth === String(preset.width) && customHeight === String(preset.height) ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setCustomWidth(preset.width.toString());
                    setCustomHeight(preset.height.toString());
                  }}
                >
                  {preset.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Resolution */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{translate('screen_display_width_label')}</label>
              <input
                type="number"
                min="320"
                max="7680"
                value={customWidth}
                onChange={(e) => {
                  setCustomWidth(e.target.value);
                }}
                className="w-full px-3 py-2 bg-white text-black border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">{translate('screen_display_height_label')}</label>
              <input
                type="number"
                min="240"
                max="4320"
                value={customHeight}
                onChange={(e) => {
                  setCustomHeight(e.target.value);
                }}
                className="w-full px-3 py-2 bg-white text-black border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
          <p className="text-sm text-slate-700">
            <strong>{translate('keyboard_shortcuts')}:</strong> {translate('screen_display_keyboard_hint')}
          </p>
        </div>
      </div>
    </div>
  );
}
