// lib/constants.ts - Core data and keywords

export const SITE_NAME = 'TestaScreen';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://testascreen.eu';
export const SITE_DESCRIPTION = 'Elite screen testing and display tools for photographers, videographers, gamers, and professionals';

// All available tools - Color screens, special tools, and test tools
// Note: nameKey and descriptionKey reference translation keys in lib/translations.ts
export const COLOR_TOOLS = [
  {
    id: 'white-screen',
    nameKey: 'white_screen',
    path: '/white-screen',
    descriptionKey: 'white_screen_desc',
    color: '#FFFFFF',
    hex: 'FFFFFF',
    rgb: '255, 255, 255',
    keywords: ['white screen', 'white screen tool', 'display test white'],
    useCases: ['display_testing', 'screen_cleaning', 'photography_lighting'],
    searchVolume: 18100,
  },
  {
    id: 'black-screen',
    nameKey: 'black_screen',
    path: '/black-screen',
    descriptionKey: 'black_screen_desc',
    color: '#000000',
    hex: '000000',
    rgb: '0, 0, 0',
    keywords: ['black screen', 'black screen tool', 'monitor test black'],
    useCases: ['dead_pixel_detection', 'contrast_testing', 'screen_uniformity'],
    searchVolume: 12400,
  },
  {
    id: 'red-screen',
    nameKey: 'red_screen',
    path: '/red-screen',
    descriptionKey: 'red_screen_desc',
    color: '#FF0000',
    hex: 'FF0000',
    rgb: '255, 0, 0',
    keywords: ['red screen', 'red light screen', 'color test red'],
    useCases: ['color_accuracy', 'photography_lighting', 'video_effects'],
    searchVolume: 2800,
  },
  {
    id: 'blue-screen',
    nameKey: 'blue_screen',
    path: '/blue-screen',
    descriptionKey: 'blue_screen_desc',
    color: '#0000FF',
    hex: '0000FF',
    rgb: '0, 0, 255',
    keywords: ['blue screen', 'chroma key blue', 'blue background'],
    useCases: ['chroma_key', 'video_production', 'video_effects'],
    searchVolume: 4100,
  },
  {
    id: 'green-screen',
    nameKey: 'green_screen',
    path: '/green-screen',
    descriptionKey: 'green_screen_desc',
    color: '#00FF00',
    hex: '00FF00',
    rgb: '0, 255, 0',
    keywords: ['green screen', 'chroma key', 'green screen online'],
    useCases: ['video_production', 'streaming', 'chroma_key'],
    searchVolume: 5200,
  },
  {
    id: 'pink-screen',
    nameKey: 'pink_screen',
    path: '/pink-screen',
    descriptionKey: 'pink_screen_desc',
    color: '#FF1493',
    hex: 'FF1493',
    rgb: '255, 20, 147',
    keywords: ['pink screen', 'pink light screen', 'aesthetic lighting'],
    useCases: ['photography_lighting', 'video_effects', 'creative_lighting'],
    searchVolume: 1800,
  },
  {
    id: 'purple-screen',
    nameKey: 'purple_screen',
    path: '/purple-screen',
    descriptionKey: 'purple_screen_desc',
    color: '#800080',
    hex: '800080',
    rgb: '128, 0, 128',
    keywords: ['purple screen', 'purple light', 'purple background'],
    useCases: ['creative_lighting', 'photography_lighting', 'contrast_testing'],
    searchVolume: 1600,
  },
  {
    id: 'orange-screen',
    nameKey: 'orange_screen',
    path: '/orange-screen',
    descriptionKey: 'orange_screen_desc',
    color: '#FFA500',
    hex: 'FFA500',
    rgb: '255, 165, 0',
    keywords: ['orange screen', 'orange light', 'warm lighting'],
    useCases: ['photography_lighting', 'photography_lighting', 'video_production'],
    searchVolume: 1400,
  },
  {
    id: 'yellow-screen',
    nameKey: 'yellow_screen',
    path: '/yellow-screen',
    descriptionKey: 'yellow_screen_desc',
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
    nameKey: 'zoom_lighting',
    path: '/zoom-lighting',
    descriptionKey: 'zoom_lighting_desc',
    keywords: ['zoom lighting', 'video call lighting', 'streaming lighting'],
    useCases: ['video_call_lighting', 'streaming', 'professional_meetings'],
    searchVolume: 3200,
  },
  {
    id: 'tip-screen',
    nameKey: 'tip_screen',
    path: '/tip-screen',
    descriptionKey: 'tip_screen_desc',
    keywords: ['tip screen', 'tipping screen', 'pos screen'],
    useCases: ['Point of Sale', 'Retail', 'Restaurants'],
    searchVolume: 1500,
  },
  {
    id: 'dvd-screensaver',
    nameKey: 'dvd_screensaver',
    path: '/dvd-screensaver',
    descriptionKey: 'dvd_screensaver_desc',
    keywords: ['dvd screensaver', 'dvd logo screensaver', 'nostalgia'],
    useCases: ['Fun', 'Nostalgia', 'Screensaver'],
    searchVolume: 2800,
  },
  {
    id: 'broken-screen',
    nameKey: 'broken_screen',
    path: '/broken-screen',
    descriptionKey: 'broken_screen_desc',
    keywords: ['broken screen', 'broken screen prank', 'screen prank'],
    useCases: ['Prank', 'Entertainment', 'Fun'],
    searchVolume: 3500,
  },
];

// Test tools with SEO metadata
export const TEST_TOOLS = [
  {
    id: 'dead-pixel-test',
    nameKey: 'dead_pixel_test',
    path: '/dead-pixel-test',
    descriptionKey: 'dead_pixel_test_desc',
    keywords: ['dead pixel test', 'how to check dead pixels', 'pixel test'],
    searchVolume: 6700,
    difficulty: 28,
  },
  {
    id: 'brightness-test',
    nameKey: 'brightness_test',
    path: '/brightness-test',
    descriptionKey: 'brightness_test_desc',
    keywords: ['brightness test', 'monitor brightness test', 'gamma test', 'monitor calibration'],
    useCases: ['monitor_calibration', 'brightness_testing', 'gamma_verification'],
    searchVolume: 680,
    difficulty: 24,
  },
  {
    id: 'contrast-test',
    nameKey: 'contrast_test',
    path: '/contrast-test',
    descriptionKey: 'contrast_test_desc',
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

// Screen variants for programmatic SEO (Phase 1)
// Each screen × 3 variants = 9 colors × 3 variants = 27 pages per language
export const SCREEN_VARIANTS = {
  '4k': {
    id: '4k',
    slug: '4k',
    titleSuffix: '4K Resolution',
    descSuffix: 'High-resolution 4K display testing',
    keywords: ['4K screen', '4K test', '4K resolution display', '4K monitor test', 'UHD display'],
    searchVolume: 12400,
    difficulty: 32,
  },
  'oled': {
    id: 'oled',
    slug: 'oled',
    titleSuffix: 'OLED Display',
    descSuffix: 'OLED panel testing and color accuracy',
    keywords: ['OLED screen', 'OLED test', 'OLED display', 'OLED monitor', 'organic LED test'],
    searchVolume: 8200,
    difficulty: 28,
  },
  'fullscreen': {
    id: 'fullscreen',
    slug: 'fullscreen',
    titleSuffix: 'Full Screen Mode',
    descSuffix: 'Full screen display without distractions',
    keywords: ['fullscreen display', 'full screen test', 'fullscreen mode', 'no UI test'],
    searchVolume: 5600,
    difficulty: 22,
  },
};

// Monitor brands and models for programmatic SEO (Phase 2)
export const MONITOR_BRANDS = {
  'asus': {
    id: 'asus',
    name: 'ASUS',
    slug: 'asus',
    models: [
      { id: 'rog-swift-pg279qm', name: 'ROG Swift PG279QM', slug: 'rog-swift-pg279qm', specs: '27" 1440p 240Hz IPS' },
      { id: 'rog-swift-pg32uqx', name: 'ROG Swift PG32UQX', slug: 'rog-swift-pg32uqx', specs: '32" 4K 144Hz Mini-LED' },
      { id: 'asus-pa248qv', name: 'ASUS PA248QV', slug: 'asus-pa248qv', specs: '24" 1920x1200 24-bit color' },
    ],
    keywords: ['ASUS monitor test', 'ROG monitor test', 'gaming monitor test'],
  },
  'lg': {
    id: 'lg',
    name: 'LG',
    slug: 'lg',
    models: [
      { id: 'lg-27gn950', name: 'LG 27GN950', slug: 'lg-27gn950', specs: '27" 1440p 240Hz Nano IPS' },
      { id: 'lg-34gp83a', name: 'LG 34GP83A-B', slug: 'lg-34gp83a', specs: '34" Ultrawide 1440p 144Hz' },
      { id: 'lg-27uk850', name: 'LG 27UK850', slug: 'lg-27uk850', specs: '27" 4K 60Hz IPS' },
    ],
    keywords: ['LG monitor test', 'LG display test', 'ultrawide monitor test'],
  },
  'samsung': {
    id: 'samsung',
    name: 'Samsung',
    slug: 'samsung',
    models: [
      { id: 'samsung-odyssey-g7', name: 'Samsung Odyssey G7', slug: 'samsung-odyssey-g7', specs: '32" 1440p 240Hz VA Curved' },
      { id: 'samsung-m7', name: 'Samsung M7', slug: 'samsung-m7', specs: '43" 4K Smart Monitor' },
      { id: 'samsung-crf24', name: 'Samsung CRF24', slug: 'samsung-crf24', specs: '24" 1920x1080 Curved' },
    ],
    keywords: ['Samsung monitor test', 'Samsung gaming monitor', 'curved monitor test'],
  },
  'dell': {
    id: 'dell',
    name: 'Dell',
    slug: 'dell',
    models: [
      { id: 'dell-s2721dqf', name: 'Dell S2721DQF', slug: 'dell-s2721dqf', specs: '27" 1440p 165Hz IPS' },
      { id: 'dell-u2723de', name: 'Dell U2723DE', slug: 'dell-u2723de', specs: '27" 2560x1440 USB-C' },
      { id: 'dell-u3821dw', name: 'Dell U3821DW', slug: 'dell-u3821dw', specs: '38" Ultrawide 3840x1600' },
    ],
    keywords: ['Dell monitor test', 'Dell productivity monitor', 'ultrawide monitor'],
  },
};

// Device-specific screen tests (Phase 3)
export const DEVICE_SCREEN_TESTS = [
  {
    id: 'iphone-screen-test',
    slug: 'iphone-screen-test',
    name: 'iPhone Screen Test',
    description: 'Test iPhone display quality, colors, brightness, and pixel density',
    keywords: ['iPhone screen test', 'Apple display test', 'smartphone screen test', 'iPhone display quality'],
    searchVolume: 4200,
    difficulty: 24,
  },
  {
    id: 'macbook-screen-test',
    slug: 'macbook-screen-test',
    name: 'MacBook Screen Test',
    description: 'Test MacBook Pro/Air Retina display for color accuracy and uniformity',
    keywords: ['MacBook screen test', 'Retina display test', 'laptop display test', 'Mac monitor test'],
    searchVolume: 3100,
    difficulty: 22,
  },
  {
    id: 'oled-tv-test',
    slug: 'oled-tv-test',
    name: 'OLED TV Test',
    description: 'Test OLED TV panel quality, color accuracy, and pixel performance',
    keywords: ['OLED TV test', 'television screen test', 'TV display test', 'LG OLED test'],
    searchVolume: 5400,
    difficulty: 26,
  },
  {
    id: 'gaming-monitor-test',
    slug: 'gaming-monitor-test',
    name: 'Gaming Monitor Test',
    description: 'Test gaming monitor performance, response time, and color accuracy',
    keywords: ['gaming monitor test', '144Hz monitor test', 'gaming display test', '240Hz test'],
    searchVolume: 6800,
    difficulty: 28,
  },
  {
    id: 'ipad-screen-test',
    slug: 'ipad-screen-test',
    name: 'iPad Screen Test',
    description: 'Test iPad Pro and iPad Air display quality and color reproduction',
    keywords: ['iPad screen test', 'iPad display test', 'tablet screen test', 'Retina display'],
    searchVolume: 2800,
    difficulty: 20,
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
