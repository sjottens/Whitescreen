// lib/tool-directory.ts - Every tool and guide with a one-line blurb, grouped
// for /tools and the footer, plus which pages each tool links to under
// "Related tests". Names come from lib/breadcrumbs.ts so they match everywhere.

import { CRUMBS } from './breadcrumbs';

export interface DirectoryEntry {
  path: string;
  name: string;
  blurb: string;
}

const entry = (path: string, blurb: string): DirectoryEntry => ({ path, name: CRUMBS[path].label, blurb });

export const TOOL_GROUPS: Array<{ id: string; title: string; entries: DirectoryEntry[] }> = [
  {
    id: 'screen-tests',
    title: 'Screen tests',
    entries: [
      entry('/dead-pixel-test', 'Cycle full-screen colors to find dead, stuck and hot pixels.'),
      entry('/dead-pixel-fixer', 'Flash rapidly changing colors over a stuck pixel to try to free it.'),
      entry('/white-screen', 'Pure white full screen for dead pixels, dust and brightness evenness.'),
      entry('/black-screen', 'Pure black full screen for stuck pixels, bleed and black level.'),
      entry('/color-screen', 'Red, green, blue or any custom color to check every subpixel.'),
      entry('/backlight-bleed-test', 'Near-black screen with corner markers to judge bleed and IPS glow.'),
      entry('/monitor-response-time-test', 'A moving pattern to spot ghosting, overshoot and motion blur.'),
      entry('/brightness-test', 'Gray ladders and gradients to set brightness, contrast and gamma.'),
      entry('/contrast-test', 'Text contrast against WCAG and a color blindness preview.'),
      entry('/zoom-lighting', 'Use a spare screen as a soft fill light for video calls.'),
    ],
  },
  {
    id: 'hardware-tests',
    title: 'Hardware tests',
    entries: [
      entry('/mic-test', 'See your input level and record a clip to hear how you sound.'),
      entry('/keyboard-test', "Press every key to find ones that don't work or type twice."),
      entry('/webcam-test', 'Check the picture, real resolution and frame rate of your camera.'),
      entry('/click-speed-test', 'Measure clicks per second and catch a mouse that double clicks.'),
      entry('/used-laptop-check', 'Check a second-hand laptop step by step before you buy it.'),
    ],
  },
  {
    id: 'guides',
    title: 'Guides & calculators',
    entries: [
      entry('/monitor-test', 'Every monitor check in the right order, from pixels to ghosting.'),
      entry('/how-to-test-a-monitor-before-returning', 'What to check, and document, before your return window closes.'),
      entry('/monitor-buying-guide', 'Panel types, resolution, refresh rate and HDR explained.'),
      entry('/tools/pixel-density-calculator', 'Work out PPI and how sharp a screen looks from your seat.'),
    ],
  },
];

const BY_PATH = new Map(TOOL_GROUPS.flatMap((group) => group.entries).map((e) => [e.path, e]));

// Chosen by hand: the next thing someone on this page is likely to need.
const RELATED: Record<string, string[]> = {
  '/dead-pixel-test': ['/dead-pixel-fixer', '/color-screen', '/backlight-bleed-test'],
  '/dead-pixel-fixer': ['/dead-pixel-test', '/black-screen', '/color-screen'],
  '/white-screen': ['/black-screen', '/color-screen', '/dead-pixel-test'],
  '/black-screen': ['/backlight-bleed-test', '/white-screen', '/dead-pixel-fixer'],
  '/color-screen': ['/dead-pixel-test', '/white-screen', '/dead-pixel-fixer'],
  '/backlight-bleed-test': ['/black-screen', '/brightness-test', '/how-to-test-a-monitor-before-returning'],
  '/monitor-response-time-test': ['/brightness-test', '/monitor-test', '/monitor-buying-guide'],
  '/brightness-test': ['/contrast-test', '/backlight-bleed-test', '/white-screen'],
  '/contrast-test': ['/brightness-test', '/color-screen', '/tools/pixel-density-calculator'],
  '/zoom-lighting': ['/webcam-test', '/mic-test', '/white-screen'],
  '/mic-test': ['/webcam-test', '/used-laptop-check', '/keyboard-test'],
  '/keyboard-test': ['/click-speed-test', '/used-laptop-check', '/mic-test'],
  '/webcam-test': ['/mic-test', '/zoom-lighting', '/used-laptop-check'],
  '/click-speed-test': ['/keyboard-test', '/used-laptop-check', '/monitor-response-time-test'],
  '/used-laptop-check': ['/dead-pixel-test', '/keyboard-test', '/webcam-test', '/mic-test'],
};

export function relatedTo(path: string): DirectoryEntry[] {
  return (RELATED[path] ?? []).map((p) => {
    const found = BY_PATH.get(p);
    if (!found) throw new Error(`No directory entry for ${p}`);
    return found;
  });
}
