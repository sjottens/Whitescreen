'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type TestMode = 'desktop' | 'mobile';
type AspectRatio = '16:9' | '18:9' | '19.5:9' | '20:9' | '21:9' | '4:3';

interface Color {
  name: string;
  hex: string;
  rgb: string;
}

const TEST_COLORS: Color[] = [
  { name: 'Black', hex: '#000000', rgb: '0, 0, 0' },
  { name: 'White', hex: '#FFFFFF', rgb: '255, 255, 255' },
  { name: 'Red', hex: '#FF0000', rgb: '255, 0, 0' },
  { name: 'Green', hex: '#00FF00', rgb: '0, 255, 0' },
  { name: 'Blue', hex: '#0000FF', rgb: '0, 0, 255' },
  { name: 'Cyan', hex: '#00FFFF', rgb: '0, 255, 255' },
  { name: 'Magenta', hex: '#FF00FF', rgb: '255, 0, 255' },
  { name: 'Yellow', hex: '#FFFF00', rgb: '255, 255, 0' },
  { name: 'Gray', hex: '#808080', rgb: '128, 128, 128' },
];

const ASPECT_RATIOS: { ratio: AspectRatio; label: string }[] = [
  { ratio: '16:9', label: 'Older Phones' },
  { ratio: '18:9', label: 'Galaxy S8/S9' },
  { ratio: '19.5:9', label: 'iPhone X-14' },
  { ratio: '20:9', label: 'Modern Android' },
  { ratio: '21:9', label: 'Ultra-wide' },
  { ratio: '4:3', label: 'iPad/Tablets' },
];

export default function DeadPixelTest() {
  const [testMode, setTestMode] = useState<TestMode>('desktop');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(false);
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>('19.5:9');
  const screenRef = useRef<HTMLDivElement>(null);
  const autoCycleRef = useRef<NodeJS.Timeout>();

  const currentColor = TEST_COLORS[currentColorIndex];

  // Handle fullscreen request
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

  // Handle fullscreen exit
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

  // Auto-cycling
  useEffect(() => {
    if (isAutoCycling && isFullscreen) {
      autoCycleRef.current = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % TEST_COLORS.length);
      }, 3000);
    } else {
      if (autoCycleRef.current) {
        clearInterval(autoCycleRef.current);
      }
    }
    
    return () => {
      if (autoCycleRef.current) {
        clearInterval(autoCycleRef.current);
      }
    };
  }, [isAutoCycling, isFullscreen]);

  // Keyboard shortcuts
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'f':
        case 'F':
          event.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          event.preventDefault();
          if (isFullscreen) {
            exitFullscreen();
          }
          break;
        case 'ArrowLeft':
          if (isFullscreen) {
            event.preventDefault();
            setCurrentColorIndex((prev) => (prev - 1 + TEST_COLORS.length) % TEST_COLORS.length);
            setIsAutoCycling(false);
          }
          break;
        case 'ArrowRight':
          if (isFullscreen) {
            event.preventDefault();
            setCurrentColorIndex((prev) => (prev + 1) % TEST_COLORS.length);
            setIsAutoCycling(false);
          }
          break;
        case ' ':
          if (isFullscreen) {
            event.preventDefault();
            setIsAutoCycling((prev) => !prev);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, toggleFullscreen, exitFullscreen]);

  // Get aspect ratio
  const getAspectRatioDimensions = (ratio: AspectRatio) => {
    const ratios: { [key in AspectRatio]: { w: number; h: number } } = {
      '16:9': { w: 16, h: 9 },
      '18:9': { w: 18, h: 9 },
      '19.5:9': { w: 19.5, h: 9 },
      '20:9': { w: 20, h: 9 },
      '21:9': { w: 21, h: 9 },
      '4:3': { w: 4, h: 3 },
    };
    return ratios[ratio];
  };

  const aspectDimensions = getAspectRatioDimensions(selectedRatio);
  const mobileAspectRatio = (aspectDimensions.w / aspectDimensions.h) * 100;

  return (
    <>
      {/* Main screen container - works for both fullscreen and normal view */}
      <div
        ref={screenRef}
        onClick={() => !isFullscreen && toggleFullscreen()}
        style={{
          backgroundColor: currentColor.hex,
          aspectRatio: !isFullscreen && testMode === 'mobile' ? `${mobileAspectRatio}%` : undefined,
          maxWidth: !isFullscreen && testMode === 'mobile' ? '400px' : undefined,
        }}
        className={`
          ${isFullscreen 
            ? 'fixed inset-0 w-screen h-screen z-[9999] border-0 rounded-none m-0 p-0' 
            : 'w-full rounded-lg shadow-inner border-4 border-slate-200 cursor-pointer hover:shadow-lg transition-shadow mb-6'}
          flex flex-col items-center justify-center
        `}
        role="button"
        tabIndex={0}
        aria-label="Click to start fullscreen test"
        onKeyDown={(e) => {
          if (!isFullscreen && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            toggleFullscreen();
          }
        }}
      >
        {/* Fullscreen color info */}
        {isFullscreen && (
          <div className="absolute top-8 left-8 right-8 text-center pointer-events-none">
            <p className="text-4xl font-bold text-white drop-shadow-lg">{currentColor.name}</p>
            <p className="text-2xl text-white drop-shadow-lg mt-2">{currentColor.hex}</p>
          </div>
        )}

        {/* Normal view preview content */}
        {!isFullscreen && (
          <div className="pointer-events-none">
            <Maximize2 className="w-12 h-12 opacity-40 text-slate-400 mx-auto" />
            <p className="text-slate-600 font-medium text-center mt-4">
              <strong>{currentColor.name}</strong><br />
              Click or press F for fullscreen
            </p>
          </div>
        )}

        {/* Fullscreen controls */}
        {isFullscreen && (
          <div className="absolute bottom-8 left-8 right-8 flex flex-col gap-4 pointer-events-auto">
            <div className="flex gap-4 flex-wrap justify-center">
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentColorIndex((prev) => (prev - 1 + TEST_COLORS.length) % TEST_COLORS.length);
                  setIsAutoCycling(false);
                }}
              >
                ← Previous
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentColorIndex((prev) => (prev + 1) % TEST_COLORS.length);
                  setIsAutoCycling(false);
                }}
              >
                Next →
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsAutoCycling(!isAutoCycling);
                }}
              >
                {isAutoCycling ? 'Stop' : 'Start'} Auto-cycle
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
              >
                Exit (ESC)
              </Button>
            </div>
            <p className="text-center text-white drop-shadow-lg text-sm">
              ← → arrows: Change color | Space: Auto-cycle | ESC/F: Exit
            </p>
          </div>
        )}
      </div>

      {/* Normal view controls - only show when not fullscreen */}
      {!isFullscreen && (
        <div className="bg-slate-50 p-6">
          {/* Mode buttons */}
          <div className="mb-6 flex gap-3 flex-wrap">
            <Button
              variant={testMode === 'desktop' ? 'primary' : 'outline'}
              onClick={() => setTestMode('desktop')}
              size="lg"
            >
              Desktop Test
            </Button>
            <Button
              variant={testMode === 'mobile' ? 'primary' : 'outline'}
              onClick={() => setTestMode('mobile')}
              size="lg"
            >
              Mobile Test
            </Button>
          </div>

          {/* Aspect ratio selector */}
          {testMode === 'mobile' && (
            <div className="mb-6 p-4 bg-white border border-slate-200 rounded-lg">
              <p className="text-sm font-medium text-slate-700 mb-3">Select Device Aspect Ratio</p>
              <div className="flex flex-wrap gap-2">
                {ASPECT_RATIOS.map((item) => (
                  <Button
                    key={item.ratio}
                    variant={selectedRatio === item.ratio ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedRatio(item.ratio)}
                  >
                    {item.ratio} ({item.label})
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="space-y-6">
            {/* Start button */}
            <div className="flex gap-3 flex-wrap">
              <Button onClick={() => toggleFullscreen()} variant="primary" size="lg">
                <Maximize2 className="w-5 h-5 mr-2" />
                Start Dead Pixel Test
              </Button>
            </div>

            {/* Color display */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <p className="text-sm font-medium text-slate-600 mb-3">Current Test Color</p>
              <div className="flex items-center gap-6">
                <div
                  style={{ backgroundColor: currentColor.hex }}
                  className="w-24 h-24 rounded-lg border-2 border-slate-200 shadow-sm flex-shrink-0"
                />
                <div>
                  <p className="text-3xl font-bold text-slate-900">{currentColor.name}</p>
                  <p className="text-lg text-slate-600 font-mono mt-2">{currentColor.hex}</p>
                  <p className="text-sm text-slate-500 font-mono">RGB: {currentColor.rgb}</p>
                </div>
              </div>
            </div>

            {/* Color palette */}
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <p className="text-sm font-medium text-slate-600 mb-4">Test Colors</p>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {TEST_COLORS.map((color, i) => (
                  <button
                    key={color.hex}
                    onClick={() => setCurrentColorIndex(i)}
                    className={`aspect-square rounded-lg border-2 transition-all ${
                      currentColorIndex === i ? 'border-cyan-600 ring-2 ring-cyan-400' : 'border-slate-200 hover:border-slate-300'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  >
                    {currentColorIndex === i && (
                      <span className={`text-sm font-bold flex items-center justify-center h-full ${
                        color.name === 'Black' ? 'text-white' : color.name === 'White' ? 'text-black' : 'text-transparent'
                      }`}>
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={() => setCurrentColorIndex((prev) => (prev - 1 + TEST_COLORS.length) % TEST_COLORS.length)}
                variant="outline"
                size="lg"
              >
                ← Previous Color
              </Button>
              <Button
                onClick={() => setCurrentColorIndex((prev) => (prev + 1) % TEST_COLORS.length)}
                variant="outline"
                size="lg"
              >
                Next Color →
              </Button>
            </div>

            {/* Instructions */}
            <div className="bg-cyan-50 rounded-lg p-4 border border-cyan-200">
              <p className="text-sm text-slate-700">
                <strong>How to test:</strong> Click "Start Dead Pixel Test" or press <kbd className="bg-white px-2 py-1 rounded mx-1 text-xs">F</kbd> to enter fullscreen mode. Use arrow keys to cycle through test colors. Look carefully for any pixels that don't change with the color. Press <kbd className="bg-white px-2 py-1 rounded mx-1 text-xs">ESC</kbd> to exit.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
