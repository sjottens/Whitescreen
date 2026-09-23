// app/sitemap.ts - Dynamic multilingual sitemap generation for SEO

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateHrefLangAlternates, LOCALES, DEFAULT_LOCALE, getCanonicalUrl } from '@/lib/i18n';
import { getComparisonSlugs } from '@/lib/comparisons';
import { allBlogArticles } from '@/lib/blog-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Define all site pages (paths without locale prefix)
  const pages = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/tools', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/cookies', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/terms', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly' as const, priority: 0.85 },
    // These five pages existed and were linked from navigation/other pages
    // but were missing from this generator entirely, so they were never
    // being told to Google as pages to crawl.
    { path: '/monitor-test', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/monitor-buying-guide', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/how-to-test-a-monitor-before-returning', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/gaming-monitor-test', changeFrequency: 'monthly' as const, priority: 0.85 },
    { path: '/oled-tv-test', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/device-tests', changeFrequency: 'monthly' as const, priority: 0.75 },
  ];

  // Generate sitemap entries for each page across all locales
  const sitemapEntries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    // For the default locale (English), add an entry at the root path
    sitemapEntries.push({
      url: getCanonicalUrl(DEFAULT_LOCALE, page.path),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: generateHrefLangAlternates(page.path),
      },
    });

    // For non-default locales, add entries under /locale/ prefix
    LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
      sitemapEntries.push({
        url: getCanonicalUrl(locale, page.path),
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: generateHrefLangAlternates(page.path),
        },
      });
    });
  });

  // Add tool pages (color screens and test tools)
  const tools = [
    // Color screens
    'white-screen',
    'black-screen',
    'red-screen',
    'blue-screen',
    'green-screen',
    'pink-screen',
    'purple-screen',
    'orange-screen',
    'yellow-screen',
    // Test tools
    'dead-pixel-test',
    'dead-pixel-fixer',
    'backlight-bleed-test',
    'monitor-response-time-test',
    'brightness-test',
    'contrast-test',
    'zoom-lighting',
    // Device-specific tests
    'iphone-screen-test',
    'macbook-screen-test',
  ];

  tools.forEach((toolId) => {
    const toolPath = `/${toolId}`;

    // Add default locale entry
    sitemapEntries.push({
      url: getCanonicalUrl(DEFAULT_LOCALE, toolPath),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: generateHrefLangAlternates(toolPath),
      },
    });

    // Add non-default locale entries
    LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
      sitemapEntries.push({
        url: getCanonicalUrl(locale, toolPath),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
        alternates: {
          languages: generateHrefLangAlternates(toolPath),
        },
      });
    });
  });

  // Add calculator tool pages
  const calculatorTools = [
    'tools/refresh-rate-calculator',
    'tools/pixel-density-calculator',
    'tools/monitor-comparison',
  ];

  calculatorTools.forEach((toolPath) => {
    const path = `/${toolPath}`;

    // Add default locale entry
    sitemapEntries.push({
      url: getCanonicalUrl(DEFAULT_LOCALE, path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
      alternates: {
        languages: generateHrefLangAlternates(path),
      },
    });

    // Add non-default locale entries
    LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
      sitemapEntries.push({
        url: getCanonicalUrl(locale, path),
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
        alternates: {
          languages: generateHrefLangAlternates(path),
        },
      });
    });
  });

  // Add dynamic comparison pages
  const comparisons = getComparisonSlugs();

  comparisons.forEach((comparison) => {
    const comparisonPath = `/compare/${comparison}`;

    // Add default locale entry
    sitemapEntries.push({
      url: getCanonicalUrl(DEFAULT_LOCALE, comparisonPath),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: generateHrefLangAlternates(comparisonPath),
      },
    });

    // Add non-default locale entries
    LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
      sitemapEntries.push({
        url: getCanonicalUrl(locale, comparisonPath),
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: generateHrefLangAlternates(comparisonPath),
        },
      });
    });
  });

  // Add blog articles (served at the root /blog/[slug] path, English only)
  allBlogArticles.forEach((article) => {
    sitemapEntries.push({
      url: `${SITE_URL}/blog/${article.slug}`,
      lastModified: article.updatedAt || article.publishedAt || now,
      changeFrequency: 'monthly' as const,
      priority: article.featured ? 0.75 : 0.65,
    });
  });

  return sitemapEntries;
}
