// components/tools/backlight-bleed-display.tsx - Purpose-built backlight
// bleed / IPS glow test display. Deliberately not the generic ScreenDisplay
// component: this test benefits from a corner-guide overlay and an
// unobtrusive head-tilt reminder that a plain solid-color screen doesn't need.

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, Grid3x3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t, type Locale } from '@/lib/translations';

interface BacklightBleedDisplayProps {
  locale?: Locale;
}

export default function BacklightBleedDisplay({ locale = 'en' }: BacklightBleedDisplayProps) {
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const [showGuides, setShowGuides] = useState(true);
  const [hintDismissed, setHintDismissed] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  const translate = t(locale);

  const handleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement && screenRef.current) {
      try {
        await screenRef.current.requestFullscreen();
      } catch (err) {
        console.error('Failed to enter fullscreen:', err);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleFullscreenChange = () => setIsFullscreenActive(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      if (e.key === 'g' || e.key === 'G') {
        setShowGuides((v) => !v);
      }
      if ((e.key === 'f' || e.key === 'F' || e.code === 'Space') && !document.fullscreenElement) {
        e.preventDefault();
        handleFullscreen();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleFullscreen]);

  const cornerGuide = (position: string) => (
    <div
      className={`absolute w-16 h-16 md:w-24 md:h-24 border-white/20 pointer-events-none ${position}`}
      aria-hidden="true"
    />
  );

  return (
    <div className="bg-slate-50 p-6">
      <div
        ref={screenRef}
        style={{ backgroundColor: '#000000' }}
        className={`w-full cursor-pointer transition-shadow relative ${
          isFullscreenActive
            ? 'fixed inset-0 m-0 rounded-none border-0 p-0 shadow-none'
            : 'aspect-video mb-6 rounded-lg border-4 border-slate-200 shadow-inner hover:shadow-lg'
        }`}
        onClick={!isFullscreenActive ? handleFullscreen : undefined}
        role="button"
        tabIndex={0}
        aria-label="Backlight bleed test - pure black fullscreen area"
      >
        {/* Corner guides - help the eye know where to actually look */}
        {showGuides && (
          <>
            {cornerGuide('top-4 left-4 border-t-2 border-l-2')}
            {cornerGuide('top-4 right-4 border-t-2 border-r-2')}
            {cornerGuide('bottom-4 left-4 border-b-2 border-l-2')}
            {cornerGuide('bottom-4 right-4 border-b-2 border-r-2')}
          </>
        )}

        {!isFullscreenActive && (
          <div className="w-full h-full flex items-center justify-center pointer-events-none">
            <div className="text-center text-white/40">
              <Maximize2 className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-medium">Click for fullscreen - dim your room first</p>
            </div>
          </div>
        )}

        {isFullscreenActive && (
          <>
            <div className="absolute bottom-8 left-8 right-8 flex gap-4 flex-wrap" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="secondary"
                onClick={() => document.fullscreenElement && document.exitFullscreen().catch(() => {})}
              >
                {translate('screen_display_exit_fullscreen_hint')}
              </Button>
              <Button variant="outline" onClick={() => setShowGuides((v) => !v)}>
                <Grid3x3 className="w-4 h-4 mr-2" />
                {showGuides ? 'Hide corner guides' : 'Show corner guides'}
              </Button>
            </div>

            {/* Unobtrusive, dismissible reminder for the head-tilt test that
                distinguishes bleed from IPS glow - the one thing a plain
                black screen can't tell you on its own. */}
            {!hintDismissed && (
              <div
                className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur px-4 py-2 rounded-full flex items-center gap-3 text-xs text-white/70"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Move your head side to side - light that shifts is glow, light that stays put is bleed</span>
                <button
                  onClick={() => setHintDismissed(true)}
                  aria-label="Dismiss hint"
                  className="text-white/50 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button onClick={handleFullscreen} variant="primary" size="lg">
            <Maximize2 className="w-5 h-5 mr-2" />
            {translate('screen_display_fullscreen_btn')}
          </Button>
          <Button variant={showGuides ? 'secondary' : 'outline'} size="lg" onClick={() => setShowGuides((v) => !v)}>
            <Grid3x3 className="w-5 h-5 mr-2" />
            {showGuides ? 'Corner guides on' : 'Corner guides off'}
          </Button>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
          <p className="text-sm text-slate-700">
            <strong>{translate('keyboard_shortcuts')}:</strong> F to enter fullscreen, G to toggle corner guides, Esc to exit.
          </p>
        </div>
      </div>
    </div>
  );
}
