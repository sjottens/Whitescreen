// lib/page-copy.ts - Search result title and description for every indexable page.
//
// Kept in one place so they can be reviewed side by side. Titles lead with the
// search term and stay under ~60 characters (the site name is appended only
// when it still fits, see fullTitle in lib/seo.ts). Descriptions stay under
// 160 characters so Google shows them whole.

export interface PageCopy {
  title: string;
  description: string;
}

export const PAGE_COPY = {
  '/': {
    title: 'Free Screen Test & Dead Pixel Checker Online',
    description:
      'Check any screen for dead pixels, backlight bleed and color problems in your browser, plus free mic, keyboard, webcam and click speed tests. No sign-up.',
  },
  '/about': {
    title: 'About TestaScreen',
    description:
      "TestaScreen is built by R. Ottens, a front-end developer for 24 years. How the screen and hardware tests work, and what a browser test can't measure.",
  },
  '/backlight-bleed-test': {
    title: 'Backlight Bleed Test – Check IPS Glow and Light Leaks',
    description:
      'Spot backlight bleed and IPS glow on a near-black full screen, learn how to tell them apart, and decide whether your monitor is worth returning.',
  },
  '/black-screen': {
    title: 'Black Screen – Full Screen Black for Pixel & Bleed Tests',
    description:
      "Open a pure black full screen to spot stuck or lit pixels, check for backlight bleed and IPS glow, and see how deep your display's blacks really are.",
  },
  '/brightness-test': {
    title: 'Monitor Brightness Test – Gamma, Black & White Levels',
    description:
      "Check your display's brightness steps, shadow detail and flicker with full-screen gray ladders, gradients and bar patterns. Free, in your browser.",
  },
  '/click-speed-test': {
    title: 'Click Speed Test (CPS Test) – How Fast Can You Click?',
    description:
      'Test your clicks per second in 1, 5, 10 or 30 seconds. Track your best score, learn clicking techniques and find out if your mouse is double clicking.',
  },
  '/color-screen': {
    title: 'Color Screen – Red, Green, Blue & Custom Full Screen',
    description:
      'Switch your screen to pure red, green, blue or any custom color to find stuck subpixels, check tint and uniformity, or download the color as a PNG.',
  },
  '/contact': {
    title: 'Contact TestaScreen',
    description:
      "Report a test that doesn't work on your device, a mistake on the site or an idea for a new tool. Messages go straight to the person who builds the site.",
  },
  '/contrast-test': {
    title: 'Contrast Test – Monitor Contrast & WCAG Text Readability',
    description:
      'Check text readability with WCAG contrast ladders, test patterns and a color blindness simulator, and see how much detail your monitor shows.',
  },
  '/cookies': {
    title: 'Cookie Policy',
    description:
      'Which cookies TestaScreen uses, what they are for, and how to change or withdraw your consent for analytics and advertising cookies at any time.',
  },
  '/dead-pixel-fixer': {
    title: 'Dead Pixel Fixer (Online) – Free Stuck Pixel Repair Tool',
    description:
      'Fix stuck pixels online with our free dead pixel fixer. Flash rapidly changing colors full screen to help revive stuck LCD, LED, OLED and laptop pixels.',
  },
  '/dead-pixel-test': {
    title: 'Dead Pixel Test – Check Your Screen for Dead Pixels',
    description:
      'Find dead, stuck and hot pixels on any screen. Cycle through full-screen test colors in your browser. Free, nothing to install, works on any device.',
  },
  '/faq': {
    title: 'Screen Test FAQ – Dead Pixels, Bleed and Display Issues',
    description:
      'Short answers about dead and stuck pixels, backlight bleed, refresh rates and panel types, plus how the tests on TestaScreen work and what they show.',
  },
  '/how-to-test-a-monitor-before-returning': {
    title: 'How to Test a New Monitor Before Returning It',
    description:
      'Most monitor defects only show up if you know where to look. Run this checklist before your return window closes: dead pixels, bleed, uniformity, ghosting.',
  },
  '/keyboard-test': {
    title: 'Keyboard Test – Check Every Key Online',
    description:
      'Press every key and see which ones work. Find dead keys, double presses and ghosting in seconds. Works with laptop, mechanical and Mac keyboards.',
  },
  '/mic-test': {
    title: 'Mic Test – Check Your Microphone Online (Free & Private)',
    description:
      'Test your microphone in seconds. See live input levels, record a short clip and hear yourself back. Nothing is uploaded, it all runs in your browser.',
  },
  '/monitor-buying-guide': {
    title: 'Monitor Buying Guide – Panels, Resolution & Refresh Rate',
    description:
      'Choose the right monitor for gaming, office work or photo editing. Panel types, resolution, refresh rate and HDR explained without the marketing speak.',
  },
  '/monitor-response-time-test': {
    title: 'Monitor Response Time Test – Ghosting & Overdrive Check',
    description:
      'Check your monitor for ghosting, overshoot and motion blur with a moving test pattern, and find the overdrive setting that looks cleanest on your screen.',
  },
  '/monitor-test': {
    title: 'Monitor Test – Check Dead Pixels, Color & Brightness',
    description:
      'Run a complete monitor test in your browser, step by step: dead pixels, color, brightness, contrast, backlight bleed and ghosting. Free, nothing to install.',
  },
  '/privacy': {
    title: 'Privacy Policy',
    description:
      'How TestaScreen handles your data: which cookies we use, why the mic, webcam and keyboard tests never leave your device, and your privacy rights.',
  },
  '/terms': {
    title: 'Terms of Use',
    description:
      "The terms for using TestaScreen's free screen and hardware tests, including what the tests can and cannot tell you about your device.",
  },
  '/tools': {
    title: 'All Free Screen and Hardware Tests',
    description:
      'Every free test on TestaScreen in one place: dead pixel and color screens, backlight bleed, response time, mic, keyboard, webcam and click speed tests.',
  },
  '/tools/pixel-density-calculator': {
    title: 'Pixel Density Calculator – PPI for Any Monitor Size',
    description:
      'Enter a resolution and screen size to get the PPI, see how sharp text will look from your seat, and find the display scaling that suits it.',
  },
  '/used-laptop-check': {
    title: 'Used Laptop Check – Test a Second-Hand Laptop',
    description:
      'Check a used laptop before you buy it: screen, keyboard, speakers, webcam, mic, battery and ports, step by step in the browser, plus the red flags to watch.',
  },
  '/webcam-test': {
    title: 'Webcam Test – Check Your Camera Online (Free & Private)',
    description:
      'Check your webcam in seconds. See the live picture plus the real resolution and frame rate your camera delivers. Nothing is uploaded or recorded.',
  },
  '/white-screen': {
    title: 'White Screen – Full Screen White for Pixel Tests & Cleaning',
    description:
      'Open a pure white full screen in your browser to spot dead pixels, check backlight evenness or clean your display. Download it as a PNG image too.',
  },
  '/zoom-lighting': {
    title: 'Video Call Light – Use Your Screen as a Soft Fill Light',
    description:
      'Turn your screen into a soft light for Zoom, Teams and Meet calls. Pick warm or cool white, set the brightness, and look less washed out on camera.',
  },
} satisfies Record<string, PageCopy>;

export type CopyPath = keyof typeof PAGE_COPY;
