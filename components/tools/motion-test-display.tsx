// components/tools/motion-test-display.tsx - Response time / ghosting test.
// Moves a striped block back and forth across the screen so trailing edges
// (ghosting) or leading halos (overshoot) become visible. This is a visual
// check, not a measurement - it can't report milliseconds, and doesn't try to.

'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { t, type Locale } from '@/lib/translations';

type Speed = 'slow' | 'medium' | 'fast';
type Background = 'black' | 'white' | 'gray';

// Pixels per animation frame at each speed preset. Deliberately labeled by
// name, not by a fake millisecond figure - this tool can't measure ms.
const SPEED_PX: Record<Speed, number> = { slow: 4, medium: 9, fast: 16 };
const BG_COLOR: Record<Background, string> = { black: '#000000', white: '#FFFFFF', gray: '#4b5563' };

interface MotionTestDisplayProps {
  locale?: Locale;
}

export default function MotionTestDisplay({ locale = 'en' }: MotionTestDisplayProps) {
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const [isRunning, setIsRunning] = useState(true);
  const [speed, setSpeed] = useState<Speed>('medium');
  const [background, setBackground] = useState<Background>('black');

  const screenRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const directionRef = useRef(1);
  const animationRef = useRef<number | null>(null);
  const speedRef = useRef<Speed>('medium');

  const translate = t(locale);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const animate = useCallback(() => {
    const track = screenRef.current;
    const block = blockRef.current;
    if (track && block) {
      const trackWidth = track.clientWidth;
      const blockWidth = block.clientWidth;
      const step = SPEED_PX[speedRef.current];

      positionRef.current += step * directionRef.current;

      if (positionRef.current >= trackWidth - blockWidth) {
        positionRef.current = trackWidth - blockWidth;
        directionRef.current = -1;
      } else if (positionRef.current <= 0) {
        positionRef.current = 0;
        directionRef.current = 1;
      }

      block.style.transform = `translateX(${positionRef.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isRunning) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isRunning, animate]);

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
      if (e.code === 'Space') {
        e.preventDefault();
        setIsRunning((v) => !v);
      }
      if (e.key === '1') setSpeed('slow');
      if (e.key === '2') setSpeed('medium');
      if (e.key === '3') setSpeed('fast');
      if ((e.key === 'f' || e.key === 'F') && !document.fullscreenElement) {
        handleFullscreen();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleFullscreen]);

  return (
    <div className="bg-slate-50 p-6">
      <div
        ref={screenRef}
        style={{ backgroundColor: BG_COLOR[background] }}
        className={`w-full relative overflow-hidden ${
          isFullscreenActive
            ? 'fixed inset-0 m-0 rounded-none border-0 p-0 shadow-none'
            : 'aspect-video mb-6 rounded-lg border-4 border-slate-200 shadow-inner'
        }`}
      >
        {/* The moving test block - striped pattern makes trailing/leading
            edges much easier to spot than a plain solid block would. */}
        <div
          ref={blockRef}
          className="absolute top-1/2 -translate-y-1/2 h-24 md:h-32 w-24 md:w-32 will-change-transform"
          style={{
            background:
              'repeating-linear-gradient(90deg, #f8fafc 0px, #f8fafc 8px, #64748b 8px, #64748b 16px, #0f172a 16px, #0f172a 24px)',
            boxShadow: '0 0 0 2px rgba(255,255,255,0.4)',
          }}
          aria-hidden="true"
        />

        {isFullscreenActive && (
          <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => setIsRunning((v) => !v)}>
              {isRunning ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isRunning ? 'Pause' : 'Resume'}
            </Button>
            {(['slow', 'medium', 'fast'] as Speed[]).map((s) => (
              <Button key={s} variant={speed === s ? 'secondary' : 'outline'} onClick={() => setSpeed(s)}>
                {s === 'slow' ? 'Slow' : s === 'medium' ? 'Medium' : 'Fast'}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => document.fullscreenElement && document.exitFullscreen().catch(() => {})}
            >
              {translate('screen_display_exit_fullscreen_hint')}
            </Button>
          </div>
        )}
      </div>

      {/* Controls (also available outside fullscreen) */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setIsRunning((v) => !v)} variant="secondary" size="lg">
            {isRunning ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
            {isRunning ? 'Pause' : 'Resume'}
          </Button>
          <Button onClick={handleFullscreen} variant="primary" size="lg">
            <Maximize2 className="w-5 h-5 mr-2" />
            {translate('screen_display_fullscreen_btn')}
          </Button>
        </div>

        <div className="flex flex-wrap gap-6">
          <div>
            <p className="text-sm font-medium text-slate-700 mb-2">Speed</p>
            <div className="flex gap-2">
              {(['slow', 'medium', 'fast'] as Speed[]).map((s) => (
                <Button key={s} variant={speed === s ? 'secondary' : 'outline'} size="sm" onClick={() => setSpeed(s)}>
                  {s === 'slow' ? 'Slow' : s === 'medium' ? 'Medium' : 'Fast'}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700 mb-2">Background</p>
            <div className="flex gap-2">
              {(['black', 'white', 'gray'] as Background[]).map((b) => (
                <Button
                  key={b}
                  variant={background === b ? 'secondary' : 'outline'}
                  size="sm"
                  onClick={() => setBackground(b)}
                >
                  {b === 'black' ? 'Black' : b === 'white' ? 'White' : 'Gray'}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
          <p className="text-sm text-slate-700">
            <strong>{translate('keyboard_shortcuts')}:</strong> Space to pause/resume, 1/2/3 for speed, F for fullscreen.
          </p>
        </div>
      </div>
    </div>
  );
}
