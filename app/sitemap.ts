// app/sitemap.ts - sitemap.xml for every indexable page (English-only site)

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { allBlogArticles } from '@/lib/blog-content';

type Frequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

const PAGES: Array<[path: string, changeFrequency: Frequency, priority: number]> = [
  ['/', 'weekly', 1],
  ['/tools', 'weekly', 0.9],
  ['/about', 'monthly', 0.7],
  ['/contact', 'monthly', 0.7],
  ['/privacy', 'yearly', 0.5],
  ['/cookies', 'yearly', 0.5],
  ['/terms', 'yearly', 0.5],
  ['/faq', 'monthly', 0.8],
  ['/blog', 'weekly', 0.85],
  ['/monitor-test', 'weekly', 0.9],
  ['/monitor-buying-guide', 'monthly', 0.85],
  ['/how-to-test-a-monitor-before-returning', 'monthly', 0.85],
];

// Colour screens and screen tests
const SCREEN_TOOLS = [
  '/white-screen',
  '/black-screen',
  '/red-screen',
  '/blue-screen',
  '/green-screen',
  '/pink-screen',
  '/purple-screen',
  '/orange-screen',
  '/yellow-screen',
  '/dead-pixel-test',
  '/dead-pixel-fixer',
  '/backlight-bleed-test',
  '/monitor-response-time-test',
  '/brightness-test',
  '/contrast-test',
  '/zoom-lighting',
];

const CALCULATORS = ['/tools/refresh-rate-calculator', '/tools/pixel-density-calculator', '/tools/monitor-comparison'];

const HARDWARE_TESTS = ['/mic-test', '/keyboard-test', '/webcam-test', '/click-speed-test'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const entry = (path: string, changeFrequency: Frequency, priority: number, lastModified = now) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    ...PAGES.map(([path, frequency, priority]) => entry(path, frequency, priority)),
    ...SCREEN_TOOLS.map((path) => entry(path, 'weekly', 0.8)),
    ...CALCULATORS.map((path) => entry(path, 'monthly', 0.85)),
    ...HARDWARE_TESTS.map((path) => entry(path, 'monthly', 0.8)),
    ...allBlogArticles.map((article) =>
      entry(
        `/blog/${article.slug}`,
        'monthly',
        article.featured ? 0.75 : 0.65,
        article.updatedAt || article.publishedAt || now
      )
    ),
  ];
}
