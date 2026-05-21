// lib/constants.ts - Core data and keywords

export const SITE_NAME = 'Screenglow';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://screenglow.eu';
export const SITE_DESCRIPTION = 'Elite screen testing and display tools for photographers, videographers, gamers, and professionals';

// All available tools - Color screens, special tools, and test tools
export const COLOR_TOOLS = [
  {
    id: 'white-screen',
    name: 'White Screen',
    path: '/white-screen',
    description: 'Pure white full screen for display testing and screen cleaning',
    color: '#FFFFFF',
    hex: 'FFFFFF',
    rgb: '255, 255, 255',
    keywords: ['white screen', 'white screen tool', 'display test white'],
    useCases: ['display_testing', 'screen_cleaning', 'photography_lighting'],
    searchVolume: 18100,
  },
  {
    id: 'black-screen',
    name: 'Black Screen',
    path: '/black-screen',
    description: 'Pure black full screen for testing dark areas and contrast',
    color: '#000000',
    hex: '000000',
    rgb: '0, 0, 0',
    keywords: ['black screen', 'black screen tool', 'monitor test black'],
    useCases: ['dead_pixel_detection', 'contrast_testing', 'screen_uniformity'],
    searchVolume: 12400,
  },
  {
    id: 'red-screen',
    name: 'Red Screen',
    path: '/red-screen',
    description: 'Pure red full screen for color accuracy testing and lighting effects',
    color: '#FF0000',
    hex: 'FF0000',
    rgb: '255, 0, 0',
    keywords: ['red screen', 'red light screen', 'color test red'],
    useCases: ['color_accuracy', 'photography_lighting', 'video_effects'],
    searchVolume: 2800,
  },
  {
    id: 'blue-screen',
    name: 'Blue Screen',
    path: '/blue-screen',
    description: 'Blue screen for chroma key effects and professional video work',
    color: '#0000FF',
    hex: '0000FF',
    rgb: '0, 0, 255',
    keywords: ['blue screen', 'chroma key blue', 'blue background'],
    useCases: ['chroma_key', 'video_production', 'video_effects'],
    searchVolume: 4100,
  },
  {
    id: 'green-screen',
    name: 'Green Screen',
    path: '/green-screen',
    description: 'Green screen for chroma key video production and streaming',
    color: '#00FF00',
    hex: '00FF00',
    rgb: '0, 255, 0',
    keywords: ['green screen', 'chroma key', 'green screen online'],
    useCases: ['video_production', 'streaming', 'chroma_key'],
    searchVolume: 5200,
  },
  {
    id: 'pink-screen',
    name: 'Pink Screen',
    path: '/pink-screen',
    description: 'Pink screen for aesthetic lighting and creative projects',
    color: '#FF1493',
    hex: 'FF1493',
    rgb: '255, 20, 147',
    keywords: ['pink screen', 'pink light screen', 'aesthetic lighting'],
    useCases: ['photography_lighting', 'video_effects', 'creative_lighting'],
    searchVolume: 1800,
  },
  {
    id: 'purple-screen',
    name: 'Purple Screen',
    path: '/purple-screen',
    description: 'Purple screen for creative lighting and display testing',
    color: '#800080',
    hex: '800080',
    rgb: '128, 0, 128',
    keywords: ['purple screen', 'purple light', 'purple background'],
    useCases: ['creative_lighting', 'photography_lighting', 'contrast_testing'],
    searchVolume: 1600,
  },
  {
    id: 'orange-screen',
    name: 'Orange Screen',
    path: '/orange-screen',
    description: 'Orange screen for warm lighting effects and display testing',
    color: '#FFA500',
    hex: 'FFA500',
    rgb: '255, 165, 0',
    keywords: ['orange screen', 'orange light', 'warm lighting'],
    useCases: ['photography_lighting', 'photography_lighting', 'video_production'],
    searchVolume: 1400,
  },
  {
    id: 'yellow-screen',
    name: 'Yellow Screen',
    path: '/yellow-screen',
    description: 'Bright yellow screen for color testing and bright lighting effects',
    color: '#FFFF00',
    hex: 'FFFF00',
    rgb: '255, 255, 0',
    keywords: ['yellow screen', 'bright screen', 'yellow light'],
    useCases: ['photography_lighting', 'contrast_testing', 'display_testing'],
    searchVolume: 1200,
  },
];

// Special purpose tools
export const SPECIAL_TOOLS = [
  {
    id: 'zoom-lighting',
    name: 'Zoom Lighting',
    path: '/zoom-lighting',
    description: 'Professional lighting solutions for video calls and streaming',
    keywords: ['zoom lighting', 'video call lighting', 'streaming lighting'],
    useCases: ['video_call_lighting', 'streaming', 'professional_meetings'],
    searchVolume: 3200,
  },
  {
    id: 'tip-screen',
    name: 'Tip Screen',
    path: '/tip-screen',
    description: 'POS tipping screen for restaurants, cafes, and retail',
    keywords: ['tip screen', 'tipping screen', 'pos screen'],
    useCases: ['Point of Sale', 'Retail', 'Restaurants'],
    searchVolume: 1500,
  },
  {
    id: 'dvd-screensaver',
    name: 'DVD Screensaver',
    path: '/dvd-screensaver',
    description: 'Classic DVD screensaver animation nostalgic experience',
    keywords: ['dvd screensaver', 'dvd logo screensaver', 'nostalgia'],
    useCases: ['Fun', 'Nostalgia', 'Screensaver'],
    searchVolume: 2800,
  },
  {
    id: 'broken-screen',
    name: 'Broken Screen',
    path: '/broken-screen',
    description: 'Prank broken screen effect with sound and animation',
    keywords: ['broken screen', 'broken screen prank', 'screen prank'],
    useCases: ['Prank', 'Entertainment', 'Fun'],
    searchVolume: 3500,
  },
];

// Test tools with SEO metadata
export const TEST_TOOLS = [
  {
    id: 'dead-pixel-test',
    name: 'Dead Pixel Test',
    path: '/dead-pixel-test',
    description: 'Comprehensive dead pixel detection tool for monitors and displays',
    keywords: ['dead pixel test', 'how to check dead pixels', 'pixel test'],
    searchVolume: 6700,
    difficulty: 28,
  },
  {
    id: 'brightness-test',
    name: 'Brightness Test',
    path: '/brightness-test',
    description: 'Test monitor brightness levels, gamma response, and display uniformity with precision tools',
    keywords: ['brightness test', 'monitor brightness test', 'gamma test', 'monitor calibration'],
    useCases: ['monitor_calibration', 'brightness_testing', 'gamma_verification'],
    searchVolume: 680,
    difficulty: 24,
  },
  {
    id: 'contrast-test',
    name: 'Contrast Test',
    path: '/contrast-test',
    description: 'Test monitor contrast ratio and WCAG accessibility compliance with color vision deficiency simulation',
    keywords: [
      'contrast test',
      'monitor contrast test',
      'WCAG compliance',
      'contrast ratio calculator',
      'accessibility test',
      'color blindness simulator',
    ],
    useCases: ['accessibility_testing', 'wcag_compliance', 'color_vision_deficiency'],
    searchVolume: 540,
    difficulty: 26,
  },
];

// Long-tail keyword opportunities
export const LONG_TAIL_KEYWORDS = [
  { keyword: 'how to check dead pixels on monitor', volume: 890, difficulty: 32 },
  { keyword: 'free screen test online', volume: 620, difficulty: 25 },
  { keyword: 'monitor test colors', volume: 540, difficulty: 28 },
  { keyword: 'how to find dead pixels', volume: 480, difficulty: 26 },
  { keyword: 'screen uniformity test online', volume: 420, difficulty: 24 },
  { keyword: 'test my monitor online', volume: 380, difficulty: 22 },
  { keyword: 'green screen online free', volume: 850, difficulty: 31 },
  { keyword: 'white screen tool online', volume: 720, difficulty: 24 },
  { keyword: 'zoom background lighting', volume: 680, difficulty: 28 },
];

// Blog topic ideas
export const BLOG_TOPICS = [
  {
    title: 'The Complete Guide to Monitor Testing',
    slug: 'complete-guide-to-monitor-testing',
    keywords: ['monitor testing', 'how to test monitor'],
    readTime: 12,
  },
  {
    title: 'Dead Pixels Explained: Causes, Detection & Solutions',
    slug: 'dead-pixels-explained',
    keywords: ['dead pixels', 'what are dead pixels'],
    readTime: 8,
  },
  {
    title: 'How to Calibrate Your Monitor for Photography',
    slug: 'monitor-calibration-photography',
    keywords: ['monitor calibration', 'color calibration'],
    readTime: 10,
  },
  {
    title: 'Gaming Monitor Settings: The Competitive Advantage',
    slug: 'gaming-monitor-settings',
    keywords: ['gaming monitor settings', 'monitor settings for gaming'],
    readTime: 9,
  },
  {
    title: 'Display Technology Comparison: LCD vs LED vs OLED',
    slug: 'display-technology-comparison',
    keywords: ['LCD vs LED', 'OLED vs LCD'],
    readTime: 11,
  },
  {
    title: 'Professional Screen Lighting: Filmmaker\'s Guide',
    slug: 'screen-lighting-filmmakers',
    keywords: ['screen lighting', 'monitor lighting'],
    readTime: 10,
  },
  {
    title: 'Monitor Color Accuracy: Essential for Creative Work',
    slug: 'monitor-color-accuracy',
    keywords: ['color accuracy', 'monitor color accuracy'],
    readTime: 9,
  },
  {
    title: 'Refresh Rate Myths: 60Hz vs 144Hz vs 240Hz',
    slug: 'refresh-rate-guide',
    keywords: ['refresh rate', '144hz vs 60hz'],
    readTime: 8,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'What is a dead pixel and how do I detect it?',
    answer:
      'A dead pixel is a pixel that remains black or stays stuck on one color. Use our Dead Pixel Test tool to detect them by cycling through full-screen colors.',
  },
  {
    question: 'How do I use the color screen tools?',
    answer:
      'Choose your desired color, press F or Space to enter fullscreen mode. Use ESC to exit. Perfect for display testing and photography lighting.',
  },
  {
    question: 'Can I download the screens as images?',
    answer:
      'Yes! Each tool has a download option to save screens as high-quality PNG images in any resolution.',
  },
  {
    question: 'Are these tools compatible with phones and tablets?',
    answer:
      'Absolutely! All tools work on mobile devices, including responsive fullscreen modes.',
  },
  {
    question: 'What is chroma key and why use a green screen?',
    answer:
      'Chroma key is a video technique that makes a color transparent. Green and blue screens are used in video production and streaming for backgrounds.',
  },
  {
    question: 'How do I test my monitor refresh rate?',
    answer:
      'Use our Refresh Rate Test tool which displays moving elements. You can also check your display settings for the listed refresh rate.',
  },
  {
    question: 'Is this site free to use?',
    answer: '100% free! No registration, login, or paid features required.',
  },
  {
    question: 'Can I use these tools for professional photography?',
    answer:
      'Yes! Many professionals use fullscreen colors as fill lights for photography, product shots, and video production.',
  },
];
