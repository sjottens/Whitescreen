// components/tools/screen-display.tsx - Interactive screen display component

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ColorCustomizer } from '@/components/ui/color-customizer';

interface ScreenDisplayProps {
  color: string;
  colorId?: string;
  title?: string;
}

export default function ScreenDisplay({ color, colorId, title }: ScreenDisplayProps) {
  const [displayColor, setDisplayColor] = useState(color);
  const [resolution, setResolution] = useState<'native' | 'custom'>('native');
  const [customWidth, setCustomWidth] = useState('1920');
  const [customHeight, setCustomHeight] = useState('1080');
  const [copied, setCopied] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);

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
    const width = resolution === 'custom' ? parseInt(customWidth) : 1920;
    const height = resolution === 'custom' ? parseInt(customHeight) : 1080;

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
  }, [resolution, customWidth, customHeight, displayColor, title]);

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
        className={`w-full rounded-lg shadow-inner border-4 border-slate-200 cursor-pointer hover:shadow-lg transition-shadow ${
          isFullscreenActive ? 'fixed inset-0 border-0 rounded-none m-0 p-0' : 'aspect-video mb-6'
        }`}
        onClick={handleFullscreen}
        role="button"
        tabIndex={0}
        aria-label="Click to fullscreen"
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
                Exit Fullscreen (ESC)
              </Button>
            </div>
          )}

          {/* Instructions - only show when not in fullscreen */}
          {!isFullscreenActive && (
            <div className="text-center text-slate-400 pointer-events-none">
              <Maximize2 className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p className="text-sm font-medium">Click to fullscreen or press F/Space</p>
            </div>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleFullscreen} variant="primary" size="lg">
            <Maximize2 className="w-5 h-5 mr-2" />
            Fullscreen
          </Button>
          <Button onClick={handleDownload} variant="secondary" size="lg">
            <Download className="w-5 h-5 mr-2" />
            Download
          </Button>
          <Button onClick={handleCopyColor} variant="outline" size="lg">
            <Copy className="w-5 h-5 mr-2" />
            {copied ? 'Copied!' : displayColor}
          </Button>
        </div>

        {/* Color Customizer */}
        {colorId && (
          <ColorCustomizer
            colorId={colorId}
            defaultColor={color}
            onColorChange={setDisplayColor}
          />
        )}

        {/* Resolution Settings */}
        <div className="bg-white rounded-lg p-6 border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4">Resolution Settings</h3>

          {/* Preset Buttons */}
          <div className="mb-6">
            <p className="text-sm text-slate-600 mb-3">Presets</p>
            <div className="flex flex-wrap gap-2">
              {resolutionPresets.map((preset) => (
                <Button
                  key={preset.label}
                  variant={resolution === 'native' ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setResolution('native');
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
              <label className="block text-sm font-medium text-slate-700 mb-2">Width (px)</label>
              <input
                type="number"
                min="320"
                max="7680"
                value={customWidth}
                onChange={(e) => {
                  setCustomWidth(e.target.value);
                  setResolution('custom');
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Height (px)</label>
              <input
                type="number"
                min="240"
                max="4320"
                value={customHeight}
                onChange={(e) => {
                  setCustomHeight(e.target.value);
                  setResolution('custom');
                }}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
          <p className="text-sm text-slate-700">
            <strong>Keyboard Shortcuts:</strong> Press <kbd className="bg-white px-2 py-1 rounded">F</kbd> or{' '}
            <kbd className="bg-white px-2 py-1 rounded">Space</kbd> for fullscreen, <kbd className="bg-white px-2 py-1 rounded">ESC</kbd> to exit
          </p>
        </div>
      </div>
    </div>
  );
}
