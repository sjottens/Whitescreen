// lib/breadcrumbs.ts - Breadcrumb label and parent for every page.
//
// Kept apart from lib/page-copy.ts because the breadcrumb component is a
// client component (it reads the current path), and this map is all it needs.

export interface Crumb {
  label: string;
  /** Parent page path; pages without one hang directly under Home. */
  parent?: string;
}

const TOOLS = '/tools';

export const CRUMBS: Record<string, Crumb> = {
  '/tools': { label: 'All Tools' },
  '/dead-pixel-test': { label: 'Dead Pixel Test', parent: TOOLS },
  '/dead-pixel-fixer': { label: 'Dead Pixel Fixer', parent: TOOLS },
  '/white-screen': { label: 'White Screen', parent: TOOLS },
  '/black-screen': { label: 'Black Screen', parent: TOOLS },
  '/color-screen': { label: 'Color Screen', parent: TOOLS },
  '/backlight-bleed-test': { label: 'Backlight Bleed Test', parent: TOOLS },
  '/monitor-response-time-test': { label: 'Response Time Test', parent: TOOLS },
  '/brightness-test': { label: 'Brightness Test', parent: TOOLS },
  '/contrast-test': { label: 'Contrast Test', parent: TOOLS },
  '/zoom-lighting': { label: 'Video Call Light', parent: TOOLS },
  '/mic-test': { label: 'Mic Test', parent: TOOLS },
  '/keyboard-test': { label: 'Keyboard Test', parent: TOOLS },
  '/webcam-test': { label: 'Webcam Test', parent: TOOLS },
  '/click-speed-test': { label: 'Click Speed Test', parent: TOOLS },
  '/used-laptop-check': { label: 'Used Laptop Check', parent: TOOLS },
  '/tools/pixel-density-calculator': { label: 'Pixel Density Calculator', parent: TOOLS },
  '/monitor-test': { label: 'Monitor Test' },
  '/monitor-buying-guide': { label: 'Monitor Buying Guide' },
  '/how-to-test-a-monitor-before-returning': { label: 'Test Before Returning', parent: '/monitor-test' },
  '/about': { label: 'About' },
  '/contact': { label: 'Contact' },
  '/faq': { label: 'FAQ' },
  '/privacy': { label: 'Privacy Policy' },
  '/cookies': { label: 'Cookie Policy' },
  '/terms': { label: 'Terms of Use' },
};

/** Home first, current page last. Empty for the homepage and unknown paths. */
export function breadcrumbTrail(path: string): Array<{ label: string; path: string }> {
  const trail: Array<{ label: string; path: string }> = [];
  let current: string | undefined = path;
  while (current && CRUMBS[current]) {
    trail.unshift({ label: CRUMBS[current].label, path: current });
    current = CRUMBS[current].parent;
  }
  return trail.length ? [{ label: 'Home', path: '/' }, ...trail] : [];
}
