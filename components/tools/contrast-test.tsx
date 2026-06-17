'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Maximize2, RotateCcw, Copy, Check } from 'lucide-react';
import { t } from '@/lib/translations';

type TestMode = 'wcag-ladder' | 'text-readability' | 'pattern' | 'custom-pair';
type VisionMode = 'normal' | 'deuteranopia' | 'protanopia' | 'tritanopia' | 'achromatopsia';

interface ContrastPair {
  foreground: string;
  background: string;
  ratio: number;
  wcagAA: boolean;
  wcagAAA: boolean;
}

// Calculate luminance using WCAG formula
const getLuminance = (r: number, g: number, b: number): number => {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

// Parse hex to RGB
const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : [0, 0, 0];
};

// Calculate contrast ratio
const getContrastRatio = (color1: string, color2: string): number => {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  const l1 = getLuminance(r1, g1, b1);
  const l2 = getLuminance(r2, g2, b2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
};

// WCAG contrast pairs for testing - including colorful pairs to test color vision
const WCAG_CONTRAST_PAIRS: ContrastPair[] = [
  { foreground: '#000000', background: '#FFFFFF', ratio: 21, wcagAA: true, wcagAAA: true },
  { foreground: '#FFFFFF', background: '#000000', ratio: 21, wcagAA: true, wcagAAA: true },
  { foreground: '#000000', background: '#CCCCCC', ratio: 12.6, wcagAA: true, wcagAAA: true },
  { foreground: '#000000', background: '#999999', ratio: 7, wcagAA: true, wcagAAA: true },
  { foreground: '#000000', background: '#777777', ratio: 4.48, wcagAA: true, wcagAAA: false },
  { foreground: '#000000', background: '#666666', ratio: 3.87, wcagAA: true, wcagAAA: false },
  { foreground: '#FF0000', background: '#000000', ratio: 5.25, wcagAA: true, wcagAAA: false }, // Red on Black
  { foreground: '#00FF00', background: '#000000', ratio: 7.16, wcagAA: true, wcagAAA: true }, // Green on Black
  { foreground: '#0000FF', background: '#FFFFFF', ratio: 8.59, wcagAA: true, wcagAAA: true }, // Blue on White
  { foreground: '#FF0000', background: '#FFFF00', ratio: 1.24, wcagAA: false, wcagAAA: false }, // Red on Yellow - problematic for color blindness
  { foreground: '#00FF00', background: '#FF0000', ratio: 2.14, wcagAA: false, wcagAAA: false }, // Green on Red - problematic for color blindness
];

// Color vision deficiency transformation functions using Brettel matrices
// More accurate simulation of how people with color vision deficiency see colors
const applyVisionFilter = (r: number, g: number, b: number, mode: VisionMode): [number, number, number] => {
  // Normalize to 0-1
  let R = r / 255;
  let G = g / 255;
  let B = b / 255;

  // Apply gamma correction
  R = R > 0.04045 ? Math.pow((R + 0.055) / 1.055, 2.4) : R / 12.92;
  G = G > 0.04045 ? Math.pow((G + 0.055) / 1.055, 2.4) : G / 12.92;
  B = B > 0.04045 ? Math.pow((B + 0.055) / 1.055, 2.4) : B / 12.92;

  let nR, nG, nB;

  switch (mode) {
    case 'deuteranopia':
      // Red-Green color blindness (Green cone missing)
      nR = 0.625 * R + 0.375 * G;
      nG = 0.7 * R + 0.3 * G;
      nB = 0.0 * R + 0.0 * G + B;
      break;
    case 'protanopia':
      // Red-Green color blindness (Red cone missing)
      nR = 0.567 * R + 0.433 * G;
      nG = 0.558 * R + 0.442 * G;
      nB = 0.0 * R + 0.0 * G + B;
      break;
    case 'tritanopia':
      // Blue-Yellow color blindness (Blue cone missing)
      nR = 0.95 * R + 0.05 * G;
      nG = 0.0 * R + G;
      nB = 0.433 * R + 0.567 * G;
      break;
    case 'achromatopsia':
      // Complete color blindness (no color cones)
      const gray = 0.299 * R + 0.587 * G + 0.114 * B;
      nR = gray;
      nG = gray;
      nB = gray;
      break;
    default:
      nR = R;
      nG = G;
      nB = B;
  }

  // Remove gamma correction (inverse)
  nR = nR > 0.0031308 ? 1.055 * Math.pow(nR, 1.0 / 2.4) - 0.055 : 12.92 * nR;
  nG = nG > 0.0031308 ? 1.055 * Math.pow(nG, 1.0 / 2.4) - 0.055 : 12.92 * nG;
  nB = nB > 0.0031308 ? 1.055 * Math.pow(nB, 1.0 / 2.4) - 0.055 : 12.92 * nB;

  // Convert back to 0-255
  return [
    Math.round(Math.max(0, Math.min(255, nR * 255))),
    Math.round(Math.max(0, Math.min(255, nG * 255))),
    Math.round(Math.max(0, Math.min(255, nB * 255))),
  ];
};

// Convert RGB back to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map((x) => Math.min(255, Math.max(0, x)).toString(16).padStart(2, '0')).join('');
};

// Apply vision filter to color
const transformColor = (hexColor: string, visionMode: VisionMode): string => {
  if (visionMode === 'normal') return hexColor;
  const [r, g, b] = hexToRgb(hexColor);
  const [tr, tg, tb] = applyVisionFilter(r, g, b, visionMode);
  return rgbToHex(tr, tg, tb);
};

const VISION_FILTERS: Record<VisionMode, { name: string }> = {
  normal: { name: 'Normal Vision' },
  deuteranopia: { name: 'Deuteranopia (Red-Green)' },
  protanopia: { name: 'Protanopia (Red-Green)' },
  tritanopia: { name: 'Tritanopia (Blue-Yellow)' },
  achromatopsia: { name: 'Achromatopsia (Monochrome)' },
};

export default function ContrastTest() {
  const translate = t('en');
  const [testMode, setTestMode] = useState<TestMode>('wcag-ladder');
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [visionMode, setVisionMode] = useState<VisionMode>('normal');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [customFG, setCustomFG] = useState('#000000');
  const [customBG, setCustomBG] = useState('#FFFFFF');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  const currentPair = WCAG_CONTRAST_PAIRS[currentPairIndex];
  const customRatio = getContrastRatio(customFG, customBG);
  const customWCAGAA = customRatio >= 4.5;
  const customWCAGAAA = customRatio >= 7;

  // Request fullscreen
  const requestFullscreen = useCallback(async () => {
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

  const exitFullscreen = useCallback(async () => {
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

  const toggleFullscreen = useCallback(async () => {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await requestFullscreen();
    }
  }, [isFullscreen, exitFullscreen, requestFullscreen]);

  // Monitor fullscreen changes
  useEffect(() => {
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

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'ArrowRight') {
        if (testMode === 'wcag-ladder') {
          setCurrentPairIndex((prev) => (prev + 1) % WCAG_CONTRAST_PAIRS.length);
        }
      } else if (e.key === 'ArrowLeft') {
        if (testMode === 'wcag-ladder') {
          setCurrentPairIndex((prev) => (prev - 1 + WCAG_CONTRAST_PAIRS.length) % WCAG_CONTRAST_PAIRS.length);
        }
      } else if (e.key === 'r' || e.key === 'R') {
        setCurrentPairIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFullscreen, testMode]);

  // Copy to clipboard helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Render WCAG ladder
  const renderWCAGLadder = () => {
    return (
      <div className="w-full h-full flex flex-col">
        {WCAG_CONTRAST_PAIRS.map((pair, index) => {
          const transformedFG = transformColor(pair.foreground, visionMode);
          const transformedBG = transformColor(pair.background, visionMode);
          return (
            <div
              key={index}
              className={`flex-1 flex items-center justify-center p-8 transition-all ${
                index === currentPairIndex ? 'ring-4 ring-yellow-400' : ''
              }`}
              style={{
                backgroundColor: transformedBG,
              }}
            >
              <div className="text-center max-w-2xl">
                <p className="text-4xl font-bold mb-4" style={{ color: transformedFG }}>
                  {translate('contrast_test_title' as any)}
                </p>
                <p className="text-2xl mb-2" style={{ color: transformedFG }}>
                  Ratio: {pair.ratio.toFixed(2)}:1
                </p>
                <div className="flex gap-3 justify-center flex-wrap text-lg" style={{ color: transformedFG }}>
                  <span className={pair.wcagAA ? 'bg-green-500 text-white px-3 py-1 rounded' : 'bg-red-500 text-white px-3 py-1 rounded'}>
                    {pair.wcagAA ? '✓' : '✗'} WCAG AA
                  </span>
                  <span className={pair.wcagAAA ? 'bg-green-500 text-white px-3 py-1 rounded' : 'bg-red-500 text-white px-3 py-1 rounded'}>
                    {pair.wcagAAA ? '✓' : '✗'} WCAG AAA
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render text readability
  const renderTextReadability = () => {
    const fgColor = currentPair.foreground;
    const bgColor = currentPair.background;
    const transformedFG = transformColor(fgColor, visionMode);
    const transformedBG = transformColor(bgColor, visionMode);

    return (
      <div
        className="w-full h-full flex items-center justify-center p-12"
        style={{
          backgroundColor: transformedBG,
        }}
      >
        <div className="max-w-4xl space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4" style={{ color: transformedFG }}>
              {translate('contrast_readability_test_title' as any)}
            </h1>
            <p className="text-2xl leading-relaxed" style={{ color: transformedFG }}>
              {translate('contrast_readability_text' as any)} <strong>{currentPair.ratio.toFixed(2)}:1</strong>.
            </p>
            <p className="text-lg mt-6" style={{ color: transformedFG }}>
              {translate('contrast_readability_small_text_hint' as any)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className={currentPair.wcagAA ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'} style={{ padding: '1rem', borderRadius: '0.5rem' }}>
              <p className="text-sm font-bold" style={{ color: transformedFG }}>
                {currentPair.wcagAA ? '✓ WCAG AA' : '✗ Below AA'}
              </p>
            </div>
            <div className={currentPair.wcagAAA ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500'} style={{ padding: '1rem', borderRadius: '0.5rem' }}>
              <p className="text-sm font-bold" style={{ color: transformedFG }}>
                {currentPair.wcagAAA ? '✓ WCAG AAA' : '✗ Below AAA'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render pattern test
  const renderPatternTest = () => {
    const transformedFG = transformColor(currentPair.foreground, visionMode);
    const transformedBG = transformColor(currentPair.background, visionMode);
    
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundColor: transformedBG,
        }}
      >
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* Checkerboard pattern */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-64 h-64 grid grid-cols-8 gap-0">
              {Array.from({ length: 64 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: i % 2 === 0 ? transformedFG : transformedBG,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Fine lines pattern */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="w-64 h-64 flex flex-col">
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: '50%',
                    backgroundColor: i % 2 === 0 ? transformedFG : transformedBG,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <p className="text-3xl font-bold mb-4" style={{ color: transformedFG }}>
                {translate('contrast_pattern_title' as any)}
              </p>
              <p className="text-xl mb-4" style={{ color: transformedFG }}>
                Ratio: {currentPair.ratio.toFixed(2)}:1
              </p>
              <p className="text-sm" style={{ color: transformedFG }}>
                {translate('contrast_pattern_hint' as any)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render custom pair tester
  const renderCustomPair = () => {
    const transformedCustomFG = transformColor(customFG, visionMode);
    const transformedCustomBG = transformColor(customBG, visionMode);
    
    return (
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Split screen preview */}
        <div className="flex-1 flex" style={{ backgroundColor: transformedCustomBG }}>
          <div className="w-full flex items-center justify-center p-8">
            <div
              className="text-center max-w-xl"
              style={{
                color: transformedCustomFG,
              }}
            >
              <h2 className="text-4xl font-bold mb-4">{translate('contrast_custom_pair_title' as any)}</h2>
              <p className="text-2xl mb-6">{translate('contrast_custom_pair_text' as any)}</p>
              <p className="text-lg">{translate('contrast_ratio_label' as any)}: {customRatio.toFixed(2)}:1</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex-1 bg-slate-100 p-8 flex flex-col justify-center space-y-6 overflow-auto max-h-screen">
          <div>
            <label className="block font-bold mb-2">{translate('contrast_foreground_label' as any)}</label>
            <div className="flex gap-3 items-center">
              <input
                type="color"
                value={customFG}
                onChange={(e) => setCustomFG(e.target.value)}
                className="w-20 h-20 cursor-pointer"
              />
              <div className="flex-1">
                <p className="font-mono text-sm">{customFG.toUpperCase()}</p>
                <button
                  onClick={() => copyToClipboard(customFG, 'FG')}
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                  {copiedText === 'FG' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />} {translate('contrast_copy_button' as any)}
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-bold mb-2">{translate('contrast_background_label' as any)}</label>
            <div className="flex gap-3 items-center">
              <input
                type="color"
                value={customBG}
                onChange={(e) => setCustomBG(e.target.value)}
                className="w-20 h-20 cursor-pointer"
              />
              <div className="flex-1">
                <p className="font-mono text-sm">{customBG.toUpperCase()}</p>
                <button
                  onClick={() => copyToClipboard(customBG, 'BG')}
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                  {copiedText === 'BG' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />} {translate('contrast_copy_button' as any)}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg space-y-2">
            <p className="font-bold">{translate('contrast_ratio_label' as any)}: {customRatio.toFixed(2)}:1</p>
            <div className="space-y-2 text-sm">
              <p className={customWCAGAA ? 'text-green-700' : 'text-red-700'}>
                {customWCAGAA ? '✓' : '✗'} WCAG AA (4.5:1)
              </p>
              <p className={customWCAGAAA ? 'text-green-700' : 'text-red-700'}>
                {customWCAGAAA ? '✓' : '✗'} WCAG AAA (7:1)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render appropriate mode
  const renderDisplay = () => {
    switch (testMode) {
      case 'wcag-ladder':
        return renderWCAGLadder();
      case 'text-readability':
        return renderTextReadability();
      case 'pattern':
        return renderPatternTest();
      case 'custom-pair':
        return renderCustomPair();
      default:
        return renderWCAGLadder();
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-slate-100">
      {/* Test Display */}
      <div ref={screenRef} className="flex-1 overflow-hidden bg-black">
        {renderDisplay()}
      </div>

      {/* Control Panel */}
      <div className="bg-white border-t border-slate-200 p-6 space-y-6">
        {/* Test Mode Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <button
            onClick={() => {
              setTestMode('wcag-ladder');
              setCurrentPairIndex(0);
            }}
            className={`p-3 rounded-lg font-medium transition-all text-sm ${
              testMode === 'wcag-ladder' ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('contrast_mode_wcag_ladder' as any)}
          </button>
          <button
            onClick={() => setTestMode('text-readability')}
            className={`p-3 rounded-lg font-medium transition-all text-sm ${
              testMode === 'text-readability' ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('contrast_mode_readability' as any)}
          </button>
          <button
            onClick={() => setTestMode('pattern')}
            className={`p-3 rounded-lg font-medium transition-all text-sm ${
              testMode === 'pattern' ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('contrast_mode_patterns' as any)}
          </button>
          <button
            onClick={() => setTestMode('custom-pair')}
            className={`p-3 rounded-lg font-medium transition-all text-sm ${
              testMode === 'custom-pair' ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {translate('contrast_mode_custom_pair' as any)}
          </button>
        </div>

        {/* Vision Mode Selection */}
        <div className="space-y-2">
          <label className="font-semibold text-slate-700 text-sm">{translate('contrast_vision_simulation_label' as any)}</label>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
            {Object.entries(VISION_FILTERS).map(([key, filter]) => (
              <button
                key={key}
                onClick={() => setVisionMode(key as VisionMode)}
                className={`p-2 rounded-lg font-medium transition-all text-xs ${
                  visionMode === key ? 'bg-cyan-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-600">
            💡 {translate('contrast_vision_hint' as any)}
          </p>
        </div>

        {/* Debug: Show color transformation */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-2">
          <p className="font-semibold text-slate-700 text-xs">{translate('contrast_color_transformation_label' as any)}</p>
          <div className="space-y-2">
            {testMode === 'custom-pair' ? (
              <>
                <div className="flex gap-2 items-center text-xs">
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: customFG }}
                    title={customFG}
                  />
                  <span className="text-slate-600">→</span>
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: transformColor(customFG, visionMode) }}
                    title={transformColor(customFG, visionMode)}
                  />
                  <span className="text-slate-500 text-xs">{customFG} → {transformColor(customFG, visionMode)}</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: customBG }}
                    title={customBG}
                  />
                  <span className="text-slate-600">→</span>
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: transformColor(customBG, visionMode) }}
                    title={transformColor(customBG, visionMode)}
                  />
                  <span className="text-slate-500 text-xs">{customBG} → {transformColor(customBG, visionMode)}</span>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-2 items-center text-xs">
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: currentPair.foreground }}
                    title={currentPair.foreground}
                  />
                  <span className="text-slate-600">→</span>
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: transformColor(currentPair.foreground, visionMode) }}
                    title={transformColor(currentPair.foreground, visionMode)}
                  />
                  <span className="text-slate-500 text-xs">{currentPair.foreground} → {transformColor(currentPair.foreground, visionMode)}</span>
                </div>
                <div className="flex gap-2 items-center text-xs">
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: currentPair.background }}
                    title={currentPair.background}
                  />
                  <span className="text-slate-600">→</span>
                  <div
                    className="w-8 h-8 rounded border border-slate-300"
                    style={{ backgroundColor: transformColor(currentPair.background, visionMode) }}
                    title={transformColor(currentPair.background, visionMode)}
                  />
                  <span className="text-slate-500 text-xs">{currentPair.background} → {transformColor(currentPair.background, visionMode)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Navigation for WCAG ladder */}
        {(testMode === 'wcag-ladder' || testMode === 'text-readability' || testMode === 'pattern') && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-semibold text-slate-700 text-sm">{translate('contrast_pair_label' as any)}</label>
              <span className="text-xs text-slate-600">
                {currentPairIndex + 1} / {WCAG_CONTRAST_PAIRS.length}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={WCAG_CONTRAST_PAIRS.length - 1}
              value={currentPairIndex}
              onChange={(e) => setCurrentPairIndex(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-slate-600">
              {WCAG_CONTRAST_PAIRS[currentPairIndex].foreground} on {WCAG_CONTRAST_PAIRS[currentPairIndex].background}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          <button
            onClick={() => {
              setCurrentPairIndex(0);
              setTestMode('wcag-ladder');
              setVisionMode('normal');
            }}
            className="p-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium transition-all text-sm flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" /> {translate('contrast_reset_button' as any)}
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-3 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium transition-all text-sm flex items-center justify-center gap-2"
          >
            <Maximize2 className="w-4 h-4" /> {translate('contrast_fullscreen_button' as any)}
          </button>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <p className="font-semibold text-slate-700 mb-2 text-sm">{translate('contrast_shortcuts_label' as any)}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-slate-600">
            <div>
              <kbd className="bg-white px-1.5 py-0.5 rounded border">F</kbd> - Fullscreen
            </div>
            <div>
              <kbd className="bg-white px-1.5 py-0.5 rounded border">←/→</kbd> - Navigate
            </div>
            <div>
              <kbd className="bg-white px-1.5 py-0.5 rounded border">R</kbd> - Reset
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
