// lib/hardware-tools.ts - The five hardware tests, shared by the navigation,
// homepage "All tests" section, 404 page and each tool's "Other tests" block.

export type HardwareToolId =
  | 'screen-test'
  | 'mic-test'
  | 'keyboard-test'
  | 'webcam-test'
  | 'click-speed-test';

export interface HardwareTool {
  id: HardwareToolId;
  name: string;
  path: string;
  blurb: string;
}

export const HARDWARE_TOOLS: HardwareTool[] = [
  {
    id: 'screen-test',
    name: 'Screen Test',
    path: '/dead-pixel-test',
    blurb: 'Find dead pixels, stuck pixels and backlight bleed on any screen.',
  },
  {
    id: 'mic-test',
    name: 'Mic Test',
    path: '/mic-test',
    blurb: 'See if your microphone picks you up, and hear how you actually sound.',
  },
  {
    id: 'keyboard-test',
    name: 'Keyboard Test',
    path: '/keyboard-test',
    blurb: "Press every key and spot the ones that don't work or type twice.",
  },
  {
    id: 'webcam-test',
    name: 'Webcam Test',
    path: '/webcam-test',
    blurb: "Check your camera's picture, resolution and real frame rate.",
  },
  {
    id: 'click-speed-test',
    name: 'Click Speed Test',
    path: '/click-speed-test',
    blurb: 'Measure your clicks per second and see if your mouse double clicks.',
  },
];

// The four new tests exist in English only: no locale redirect, no language switcher.
export const ENGLISH_ONLY_PATHS: ReadonlySet<string> = new Set(
  HARDWARE_TOOLS.filter((tool) => tool.id !== 'screen-test').map((tool) => tool.path)
);

// AdSense ad-unit IDs for the manual slots on the tool pages. Leave a slot
// empty and nothing is rendered there. Auto ads must be excluded for these
// four URLs in the AdSense dashboard, otherwise Google can still drop an ad
// next to the tool (the Click Speed Test needs 150px clearance).
export const AD_SLOTS: Record<Exclude<HardwareToolId, 'screen-test'>, { top: string; bottom: string }> = {
  'mic-test': { top: '', bottom: '' },
  'keyboard-test': { top: '', bottom: '' },
  'webcam-test': { top: '', bottom: '' },
  'click-speed-test': { top: '', bottom: '' },
};

export const ADSENSE_CLIENT = 'ca-pub-5016673566357322';
