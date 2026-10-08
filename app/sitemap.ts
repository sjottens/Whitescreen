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
  '/color-screen',
  '/dead-pixel-test',
  '/dead-pixel-fixer',
  '/backlight-bleed-test',
  '/monitor-response-time-test',
  '/brightness-test',
  '/contrast-test',
  '/zoom-lighting',
];

const CALCULATORS = ['/tools/pixel-density-calculator'];

const HARDWARE_TESTS = ['/mic-test', '/keyboard-test', '/webcam-test', '/click-speed-test'];

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified only where we know the real date (blog articles). Stamping
  // every page with the build date tells Google nothing and gets ignored.
  const entry = (path: string, changeFrequency: Frequency, priority: number, lastModified?: string) => ({
    url: `${SITE_URL}${path}`,
    ...(lastModified && { lastModified }),
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
        article.updatedAt || article.publishedAt
      )
    ),
  ];
}
