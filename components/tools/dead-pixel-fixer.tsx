'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Play, Pause, Maximize2, RotateCcw, Info } from 'lucide-react';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/link-utils';
import { LOCALES, type Locale } from '@/lib/i18n';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import type { ClientStrings } from '@/lib/client-strings';
import PhotosensitivityWarning from '@/components/tools/photosensitivity-warning';

type RepairMode = 'rgb' | 'rgbwb' | 'random';

interface ToolStats {
  fps: number;
  elapsedSeconds: number;
}

const COLORS = {
  rgb: ['#FF0000', '#00FF00', '#0000FF'],
  rgbwb: ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000'],
  random: () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
};

// Interactive part of /dead-pixel-fixer. The page (app/[locale]/dead-pixel-fixer/page.tsx)
// is a server component that passes the locale and its translated strings.
export default function DeadPixelFixer({ locale, strings }: { locale: Locale; strings: ClientStrings<'deadPixelFixer'> }) {
  const translate = (key: keyof ClientStrings<'deadPixelFixer'>) => strings[key];
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mode, setMode] = useState<RepairMode>('rgb');
  const [speed, setSpeed] = useState(50);
  const [stats, setStats] = useState<ToolStats>({ fps: 0, elapsedSeconds: 0 });
  
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const frameCountRef = useRef(0);
  const fpsUpdateRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const lastFpsTimeRef = useRef(Date.now());
  const colorIndexRef = useRef(0);

  // Calculate flash speed (1-100 maps to frame intervals)
  const getFrameInterval = () => {
    return Math.max(1, Math.floor(100 / (speed || 1)));
  };

  // Get next color based on mode
  const getNextColor = useCallback(() => {
    let colorArray: string[];
    
    if (mode === 'random') {
      return (COLORS.random as () => string)();
    } else if (mode === 'rgbwb') {
      colorArray = COLORS.rgbwb;
    } else {
      colorArray = COLORS.rgb;
    }
    
    const color = colorArray[colorIndexRef.current % colorArray.length];
    colorIndexRef.current++;
    return color;
  }, [mode]);

  // Animation loop
  const animate = useCallback(() => {
    frameCountRef.current++;
    fpsUpdateRef.current++;

    // Update FPS every second
    const now = Date.now();
    if (now - lastFpsTimeRef.current >= 1000) {
      setStats(prev => ({
        ...prev,
        fps: fpsUpdateRef.current,
      }));
      fpsUpdateRef.current = 0;
      lastFpsTimeRef.current = now;
    }

    // Update elapsed time
    if (startTimeRef.current) {
      const elapsed = Math.floor((now - startTimeRef.current) / 1000);
      setStats(prev => ({
        ...prev,
        elapsedSeconds: elapsed,
      }));
    }

    // Flash color at specified speed
    if (frameCountRef.current % getFrameInterval() === 0) {
      if (canvasRef.current) {
        canvasRef.current.style.backgroundColor = getNextColor();
      }
    }

    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isRunning, getFrameInterval, getNextColor]);

  // Handle start/stop
  const handleStart = useCallback(() => {
    if (!isRunning) {
      startTimeRef.current = Date.now();
      setIsRunning(true);
      setStats({ fps: 0, elapsedSeconds: 0 });
      frameCountRef.current = 0;
      fpsUpdateRef.current = 0;
      colorIndexRef.current = 0;
    }
  }, [isRunning]);

  const handleStop = useCallback(() => {
    setIsRunning(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const handleReset = useCallback(() => {
    handleStop();
    setStats({ fps: 0, elapsedSeconds: 0 });
    frameCountRef.current = 0;
    fpsUpdateRef.current = 0;
    colorIndexRef.current = 0;
    if (canvasRef.current) {
      canvasRef.current.style.backgroundColor = '#000000';
    }
  }, [handleStop]);

  const handleFullscreen = useCallback(async () => {
    if (canvasRef.current) {
      try {
        if (!document.fullscreenElement) {
          await canvasRef.current.requestFullscreen();
          setIsFullscreen(true);
        } else {
          await document.exitFullscreen();
          setIsFullscreen(false);
        }
      } catch (error) {
        console.error('Fullscreen request failed:', error);
      }
    }
  }, []);

  // Start animation when isRunning changes
  useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, animate]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleStop();
        if (document.fullscreenElement) {
          document.exitFullscreen();
          setIsFullscreen(false);
        }
      }
      if (e.key === 'f' || e.key === 'F') {
        handleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleStop, handleFullscreen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Dead Pixel Fixer',
            description: 'Free online tool to fix stuck pixels with rapidly flashing colors',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            // aggregateRating intentionally omitted - there is no review-
            // collection feature behind this tool, so a star rating here
            // would be fabricated structured data.
          }),
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale as any, '/') },
          { name: translate('resources'), path: getLocalizedPath(locale as any, '/tools') },
          { name: translate('dead_pixel_fixer') },
        ]}
      />

      {/* Page Container */}
      <div className="container py-8 md:py-12">
        {/* Hero Section - AT TOP */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            {translate('dead_pixel_fixer_main_title')}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            {translate('dead_pixel_fixer_intro')}
          </p>
        </div>

        {/* Canvas Area */}
        <div className="mb-8">
          <div
            ref={canvasRef}
            className="w-full rounded-lg bg-black transition-colors duration-100"
            style={{
              aspectRatio: isFullscreen ? 'auto' : '16/9',
              height: isFullscreen ? '100vh' : 'auto',
            }}
            role="region"
            aria-label="Dead pixel fixer display area"
          />
        </div>

        {/* Control Panel */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-700/50 p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Mode Selector */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  {translate('flash_mode')}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'rgb' as const, label: 'RGB' },
                    { id: 'rgbwb' as const, label: 'RGB+WB' },
                    { id: 'random' as const, label: 'Random' },
                  ].map(m => (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      disabled={isRunning}
                      className={`py-2 px-3 rounded-lg font-semibold transition-all ${
                        mode === m.id
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                      aria-pressed={mode === m.id}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Speed Slider */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-3">
                  {translate('flash_speed')}: {speed}
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={speed}
                  onChange={e => setSpeed(Number(e.target.value))}
                  disabled={isRunning}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 disabled:opacity-50"
                  aria-label="Flash speed control"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>{translate('flash_speed_slow')}</span>
                  <span>{translate('flash_speed_fast')}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center bg-slate-800/50 rounded-lg p-4">
                <div>
                  <p className="text-xs text-slate-400">{translate('stats_fps')}</p>
                  <p className="text-2xl font-bold text-cyan-400">{stats.fps}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">{translate('stats_elapsed')}</p>
                  <p className="text-2xl font-bold text-cyan-400">{formatTime(stats.elapsedSeconds)}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400">{translate('stats_mode')}</p>
                  <p className="text-lg font-bold text-cyan-400 uppercase">{mode}</p>
                </div>
              </div>
            </div>

            {/* Right Column - Controls */}
            <div className="flex flex-col justify-between">
              <div className="space-y-3">
                <PhotosensitivityWarning locale={locale} />
                <button
                  onClick={handleStart}
                  disabled={isRunning}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  aria-label="Start pixel repair"
                >
                  <Play className="w-5 h-5" />
                  {translate('btn_start_repair')}
                </button>
                <button
                  onClick={handleStop}
                  disabled={!isRunning}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  aria-label="Stop pixel repair"
                >
                  <Pause className="w-5 h-5" />
                  {translate('btn_stop')}
                </button>
                <button
                  onClick={handleReset}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  aria-label="Reset repair session"
                >
                  <RotateCcw className="w-5 h-5" />
                  {translate('btn_reset')}
                </button>
                <button
                  onClick={handleFullscreen}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  aria-label="Toggle fullscreen mode"
                >
                  <Maximize2 className="w-5 h-5" />
                  {translate('btn_fullscreen')}
                </button>
              </div>

              {/* Keyboard Hints */}
              <div className="bg-slate-800/30 rounded-lg p-4 text-xs text-slate-400 space-y-1">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-cyan-400 min-w-fit">ESC</span>
                  <span>{translate('hint_esc')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-cyan-400 min-w-fit">F</span>
                  <span>{translate('hint_f')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
            <div className="text-sm text-cyan-300">
              <strong>{translate('dead_pixel_fixer_pro_tip')}</strong>
            </div>
          </div>
        </div>

        {/* Quick Start Guide - moved below the tool so the tool itself is
            the first thing users interact with, matching the same
            above-the-fold-tool pattern used on /dead-pixel-test. */}
        <div className="mb-16 p-8 bg-gradient-to-r from-[#00DC82]/10 to-cyan-500/10 border border-[#00DC82]/30 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-white">{translate('dead_pixel_fixer_how_to_title')}</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            {translate('dead_pixel_fixer_how_to_intro')}
          </p>
          <ol className="list-decimal list-inside space-y-4 text-slate-300 mb-8">
            <li className="text-base">
              {translate('dead_pixel_fixer_step1')}
            </li>
            <li className="text-base">
              {translate('dead_pixel_fixer_step2')}
            </li>
            <li className="text-base">
              {translate('dead_pixel_fixer_step3')}
            </li>
            <li className="text-base">
              {translate('dead_pixel_fixer_step4')}
            </li>
            <li className="text-base">
              {translate('dead_pixel_fixer_step5')}
            </li>
            <li className="text-base">
              {translate('dead_pixel_fixer_step6')}
            </li>
          </ol>
          <p className="text-slate-300 italic">
            💡 <strong>{translate('dead_pixel_fixer_pro_tip')}</strong>
          </p>
        </div>

        {/* SEO Content Section */}
        <section className="prose prose-invert max-w-none mb-16">

          {/* Why it Works Section */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{translate('dead_pixel_fixer_why_works_title')}</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            {translate('dead_pixel_fixer_why_works_desc')}
          </p>

          {/* What Is a Dead Pixel */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{translate('what_is_dead_pixel_title')}</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('what_is_dead_pixel_p1')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('what_is_dead_pixel_p2')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            {translate('what_is_dead_pixel_p3')}
          </p>

          {/* What Is a Stuck Pixel */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{translate('what_is_stuck_pixel_title')}</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('what_is_stuck_pixel_p1')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('what_is_stuck_pixel_p2')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            {translate('what_is_stuck_pixel_p3')}
          </p>

          {/* Can Stuck Pixels Be Fixed */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{translate('can_stuck_pixels_be_fixed_title')}</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('can_stuck_pixels_be_fixed_p1')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('can_stuck_pixels_be_fixed_p2')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            {translate('can_stuck_pixels_be_fixed_p3')}
          </p>

          {/* LCD vs OLED */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{translate('lcd_vs_oled_title')}</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('lcd_vs_oled_intro')}
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-slate-200">{translate('lcd_displays_title')}</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('lcd_displays_p1')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            {translate('lcd_displays_p2')}
          </p>
          <h3 className="text-2xl font-semibold mt-8 mb-4 text-slate-200">{translate('oled_displays_title')}</h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            {translate('oled_displays_p1')}
          </p>
          <p className="text-slate-300 leading-relaxed mb-6">
            {translate('oled_displays_p2')}
          </p>

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold mt-12 mb-6 text-white">{translate('dead_pixel_faq_title')}</h2>
        </section>

        {/* FAQ Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              q: translate('dead_pixel_faq_q1'),
              a: translate('dead_pixel_faq_a1'),
            },
            {
              q: translate('dead_pixel_faq_q2'),
              a: translate('dead_pixel_faq_a2'),
            },
            {
              q: translate('dead_pixel_faq_q3'),
              a: translate('dead_pixel_faq_a3'),
            },
            {
              q: translate('dead_pixel_faq_q4'),
              a: translate('dead_pixel_faq_a4'),
            },
            {
              q: translate('dead_pixel_faq_q5'),
              a: translate('dead_pixel_faq_a5'),
            },
            {
              q: translate('dead_pixel_faq_q6'),
              a: translate('dead_pixel_faq_a6'),
            },
            {
              q: translate('dead_pixel_faq_q7'),
              a: translate('dead_pixel_faq_a7'),
            },
            {
              q: translate('dead_pixel_faq_q8'),
              a: translate('dead_pixel_faq_a8'),
            },
            {
              q: translate('dead_pixel_faq_q9'),
              a: translate('dead_pixel_faq_a9'),
            },
            {
              q: translate('dead_pixel_faq_q10'),
              a: translate('dead_pixel_faq_a10'),
            },
            {
              q: translate('dead_pixel_faq_q11'),
              a: translate('dead_pixel_faq_a11'),
            },
            {
              q: translate('dead_pixel_faq_q12'),
              a: translate('dead_pixel_faq_a12'),
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:border-slate-600/50 transition-colors">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">{faq.q}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Internal Linking Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 rounded-xl border border-slate-700/50 p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">{translate('explore_guides_title')}</h2>
          <p className="text-slate-300 mb-8">
            {translate('explore_guides_desc')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: translate('explore_guides_dead_pixel_test'), path: '/dead-pixel-test', description: translate('explore_guides_dead_pixel_test_desc') },
              { title: translate('explore_guides_brightness'), path: '/brightness-test', description: translate('explore_guides_brightness_desc') },
              { title: translate('explore_guides_contrast'), path: '/contrast-test', description: translate('explore_guides_contrast_desc') },
              { title: translate('explore_guides_color_screen'), path: '/white-screen', description: translate('explore_guides_color_screen_desc') },
            ].map((tool, idx) => {
              const validLocale: any = LOCALES.includes(locale as any) ? locale : 'en';
              return (
                <Link
                  key={idx}
                  href={getLocalizedPath(validLocale, tool.path)}
                  className="bg-slate-800 hover:bg-slate-700 transition-colors rounded-lg p-4 border border-slate-700/50 hover:border-cyan-500/50 group"
                >
                  <h3 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{tool.title}</h3>
                  <p className="text-sm text-slate-400">{tool.description}</p>
                  <div className="flex items-center text-cyan-400 text-sm mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* JSON-LD FAQ Schema */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Can a dead pixel be repaired?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Dead pixels cannot be repaired with software tools. Stuck pixels (showing color) sometimes respond to pixel fixer tools, though results vary by pixel and panel type and are not guaranteed.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long should I run a dead pixel fixer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Run the tool for 10-30 minutes per session. Fresh stuck pixels respond best.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is a stuck pixel permanent?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Not necessarily. Stuck pixels can sometimes be repaired, and tend to respond best when treated soon after they appear, but a fix is not guaranteed.',
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </>
  );
}
