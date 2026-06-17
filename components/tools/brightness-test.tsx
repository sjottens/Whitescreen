'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, RotateCcw, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t } from '@/lib/translations';

type TestMode = 'desktop' | 'mobile';
type DisplayMode = 'gradient' | 'ladder' | 'bars' | 'flicker';

interface GrayLevel {
  name: string;
  percentage: number;
  hex: string;
  rgb: string;
}

const GRAY_LEVELS: GrayLevel[] = [
  { name: '0% (Black)', percentage: 0, hex: '#000000', rgb: '0, 0, 0' },
  { name: '10%', percentage: 10, hex: '#1A1A1A', rgb: '26, 26, 26' },
  { name: '20%', percentage: 20, hex: '#333333', rgb: '51, 51, 51' },
  { name: '30%', percentage: 30, hex: '#4D4D4D', rgb: '77, 77, 77' },
  { name: '40%', percentage: 40, hex: '#666666', rgb: '102, 102, 102' },
  { name: '50%', percentage: 50, hex: '#808080', rgb: '128, 128, 128' },
  { name: '60%', percentage: 60, hex: '#999999', rgb: '153, 153, 153' },
  { name: '70%', percentage: 70, hex: '#B3B3B3', rgb: '179, 179, 179' },
  { name: '80%', percentage: 80, hex: '#CCCCCC', rgb: '204, 204, 204' },
  { name: '90%', percentage: 90, hex: '#E6E6E6', rgb: '230, 230, 230' },
  { name: '100% (White)', percentage: 100, hex: '#FFFFFF', rgb: '255, 255, 255' },
];

export default function BrightnessTest() {
  const translate = t('en');
  const [testMode, setTestMode] = useState<TestMode>('desktop');
  const [displayMode, setDisplayMode] = useState<DisplayMode>('ladder');
  const [currentLevelIndex, setCurrentLevelIndex] = useState(5); // Start at 50%
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(false);
  const [customBrightness, setCustomBrightness] = useState(100);
  const [flickerSpeed, setFlickerSpeed] = useState(60);
  const [showBlack, setShowBlack] = useState(true);
  const screenRef = useRef<HTMLDivElement>(null);
  const autoCycleRef = useRef<NodeJS.Timeout>();
  const flickerRef = useRef<NodeJS.Timeout>();

  const currentLevel = GRAY_LEVELS[currentLevelIndex];

  // Calculate RGB for gradient
  const getRgbForPercentage = (percentage: number) => {
    const value = Math.round((percentage / 100) * 255);
    return `rgb(${value}, ${value}, ${value})`;
  };

  // Request fullscreen
  const requestFullscreen = useCallback(async () => {
    if (typeof document === 'undefined') return;

    const element = screenRef.current;
    if (!element) return;

    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        await (element as any).webkitRequestFullscreen();
      }
    } catch (error) {
      console.error('Failed to enter fullscreen:', error);
    }
  }, []);

  // Exit fullscreen
  const exitFullscreen = useCallback(async () => {
    if (typeof document === 'undefined') return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if ((document as any).webkitFullscreenElement) {
        await (document as any).webkitExitFullscreen();
      }
    } catch (error) {
      console.error('Failed to exit fullscreen:', error);
    }
  }, []);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(async () => {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await requestFullscreen();
    }
  }, [isFullscreen, exitFullscreen, requestFullscreen]);

  // Monitor fullscreen changes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const handleFullscreenChange = () => {
      const inFullscreen = !!(document.fullscreenElement || (document as any).webkitFullscreenElement);
      setIsFullscreen(inFullscreen);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Auto-cycling for gray levels
  useEffect(() => {
    if (!isAutoCycling || displayMode !== 'ladder') {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
      return;
    }

    autoCycleRef.current = setInterval(() => {
      setCurrentLevelIndex((prev) => (prev + 1) % GRAY_LEVELS.length);
    }, 2000);

    return () => {
      if (autoCycleRef.current) clearInterval(autoCycleRef.current);
    };
  }, [isAutoCycling, displayMode]);

  // Flicker effect - runs only when displayMode is 'flicker'
  useEffect(() => {
    if (displayMode !== 'flicker') {
      if (flickerRef.current) clearInterval(flickerRef.current);
      return;
    }

    flickerRef.current = setInterval(() => {
      setShowBlack((prev) => !prev);
    }, 1000 / flickerSpeed);

    return () => {
      if (flickerRef.current) clearInterval(flickerRef.current);
    };
  }, [displayMode, flickerSpeed]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoCycling(!isAutoCycling);
      } else if (e.key === 'ArrowRight') {
        setCurrentLevelIndex((prev) => (prev + 1) % GRAY_LEVELS.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentLevelIndex((prev) => (prev - 1 + GRAY_LEVELS.length) % GRAY_LEVELS.length);
      } else if (e.key === 'r' || e.key === 'R') {
        setCurrentLevelIndex(5);
        setIsAutoCycling(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFullscreen, isAutoCycling]);

  // Render gradient display
  const renderGradient = () => {
    return (
      <div className="w-full h-full bg-gradient-to-r from-black to-white flex flex-col items-center justify-center">
        <div className="text-white text-center drop-shadow-lg">
          <p className="text-2xl font-bold mb-2">{translate('brightness_gradient_test_title' as any)}</p>
          <p className="text-lg">{translate('brightness_gradient_test_subtitle' as any)}</p>
          <p className="text-sm mt-4 opacity-80">{translate('brightness_gradient_test_hint' as any)}</p>
        </div>
      </div>
    );
  };

  // Render gray level ladder
  const renderLadder = () => {
    return (
      <div className="w-full h-full flex flex-col">
        {GRAY_LEVELS.map((level, index) => (
          <div
            key={index}
            className={`flex-1 flex items-center justify-center text-center transition-opacity duration-300 ${
              index === currentLevelIndex ? 'ring-4 ring-yellow-400' : ''
            }`}
            style={{ backgroundColor: level.hex }}
          >
            <div className={`${index < 5 ? 'text-white' : 'text-black'} drop-shadow-lg`}>
              <p className="text-xl font-bold">{level.name}</p>
              <p className="text-sm opacity-80">{level.hex}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render bar pattern for contrast
  const renderBars = () => {
    return (
      <div className="w-full h-full flex">
        {GRAY_LEVELS.map((level, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-center"
            style={{ backgroundColor: level.hex }}
          >
            <div className={`text-center drop-shadow-lg ${index < 5 ? 'text-white' : 'text-black'}`}>
              <p className="font-bold">{level.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render flicker pattern for monitor flicker detection
  const renderFlicker = () => {
    return (
      <div
        className="w-full h-full flex flex-col items-center justify-center transition-colors duration-75"
        style={{ backgroundColor: showBlack ? '#000000' : '#FFFFFF' }}
      >
        <div className={`text-center drop-shadow-lg ${showBlack ? 'text-white' : 'text-black'}`}>
          <p className="text-2xl font-bold mb-2">{translate('brightness_flicker_test_title' as any)}</p>
          <p className="text-lg mb-4">{flickerSpeed} Hz</p>
          <p className="text-sm opacity-80">
            {showBlack ? translate('brightness_black_label' as any) : translate('brightness_white_label' as any)} - {translate('brightness_flicker_test_hint' as any)}
          </p>
        </div>
      </div>
    );
  };

  // Render appropriate display
  const renderDisplay = () => {
    switch (displayMode) {
      case 'gradient':
        return renderGradient();
      case 'ladder':
        return renderLadder();
      case 'bars':
        return renderBars();
      case 'flicker':
        return renderFlicker();
      default:
        return renderLadder();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-100">
      {/* Test Display */}
      <div
        ref={screenRef}
        className="flex-1 overflow-hidden bg-black"
        style={{
          aspectRatio: testMode === 'mobile' ? '9/19.5' : 'auto',
          opacity: customBrightness / 100,
        }}
      >
        {renderDisplay()}
      </div>

      {/* Control Panel */}
      <div className="bg-white border-t border-slate-200 p-6 space-y-6">
        {/* Mode Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setDisplayMode('ladder')}
            className={`p-3 rounded-lg font-medium transition-all ${
              displayMode === 'ladder'
                ? 'bg-cyan-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('brightness_mode_ladder' as any)}
          </button>
          <button
            onClick={() => setDisplayMode('gradient')}
            className={`p-3 rounded-lg font-medium transition-all ${
              displayMode === 'gradient'
                ? 'bg-cyan-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('brightness_mode_gradient' as any)}
          </button>
          <button
            onClick={() => setDisplayMode('bars')}
            className={`p-3 rounded-lg font-medium transition-all ${
              displayMode === 'bars'
                ? 'bg-cyan-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('brightness_mode_bars' as any)}
          </button>
          <button
            onClick={() => setDisplayMode('flicker')}
            className={`p-3 rounded-lg font-medium transition-all ${
              displayMode === 'flicker'
                ? 'bg-cyan-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('brightness_mode_flicker' as any)}
          </button>
        </div>

        {/* Gray Level Navigation (for ladder mode) */}
        {displayMode === 'ladder' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-slate-700">{translate('brightness_gray_navigation_label' as any)}</label>
              <span className="text-sm text-slate-600">
                {currentLevelIndex + 1} / {GRAY_LEVELS.length}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {GRAY_LEVELS.map((level, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLevelIndex(index)}
                  className={`px-3 py-2 rounded-lg font-medium transition-all ${
                    index === currentLevelIndex
                      ? 'ring-2 ring-cyan-500 bg-cyan-100'
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                  style={{
                    borderLeft: `4px solid ${level.hex}`,
                  }}
                >
                  {level.percentage}%
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Brightness Control */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <label htmlFor="brightness" className="font-semibold text-slate-700">
              {translate('brightness_display_opacity_label' as any)}
            </label>
            <span className="text-sm font-mono text-slate-600">{customBrightness}%</span>
          </div>
          <input
            id="brightness"
            type="range"
            min="10"
            max="100"
            value={customBrightness}
            onChange={(e) => setCustomBrightness(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs text-slate-500">{translate('brightness_display_opacity_hint' as any)}</p>
        </div>

        {/* Flicker Speed Control (for flicker mode) */}
        {displayMode === 'flicker' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label htmlFor="flicker" className="font-semibold text-slate-700">
                {translate('brightness_flicker_frequency_label' as any)}
              </label>
              <span className="text-sm font-mono text-slate-600">{flickerSpeed} Hz</span>
            </div>
            <input
              id="flicker"
              type="range"
              min="30"
              max="120"
              step="5"
              value={flickerSpeed}
              onChange={(e) => setFlickerSpeed(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-slate-500">{translate('brightness_flicker_frequency_hint' as any)}</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {displayMode === 'ladder' && (
            <Button
              onClick={() => setIsAutoCycling(!isAutoCycling)}
              variant="outline"
              className="gap-2"
            >
              {isAutoCycling ? (
                <>
                  <Pause className="w-4 h-4" /> {translate('brightness_pause_button' as any)}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" /> {translate('brightness_auto_cycle_button' as any)}
                </>
              )}
            </Button>
          )}

          <Button
            onClick={() => {
              setCurrentLevelIndex(5);
              setIsAutoCycling(false);
              setCustomBrightness(100);
              setFlickerSpeed(60);
            }}
            variant="outline"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" /> {translate('brightness_reset_button' as any)}
          </Button>

          <Button onClick={toggleFullscreen} variant="outline" className="gap-2">
            <Maximize2 className="w-4 h-4" /> {translate('brightness_fullscreen_button' as any)}
          </Button>

          <div className="flex gap-2 col-span-2 md:col-span-1">
            <button
              onClick={() => setTestMode('desktop')}
              className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all ${
                testMode === 'desktop'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {translate('brightness_desktop_button' as any)}
            </button>
            <button
              onClick={() => setTestMode('mobile')}
              className={`flex-1 px-3 py-2 rounded-lg font-medium transition-all ${
                testMode === 'mobile'
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {translate('brightness_mobile_button' as any)}
            </button>
          </div>
        </div>

        {/* Keyboard Shortcuts Info */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-700 mb-2">{translate('keyboard_shortcuts')}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-slate-600">
            <div>
              <kbd className="bg-white px-2 py-1 rounded border">F</kbd> - {translate('brightness_fullscreen_button' as any)}
            </div>
            <div>
              <kbd className="bg-white px-2 py-1 rounded border">{translate('tool_layout_space_key' as any)}</kbd> - {translate('brightness_auto_cycle_button' as any)}
            </div>
            <div>
              <kbd className="bg-white px-2 py-1 rounded border">←/→</kbd> - {translate('brightness_navigate_label' as any)}
            </div>
            <div>
              <kbd className="bg-white px-2 py-1 rounded border">R</kbd> - {translate('brightness_reset_button' as any)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
