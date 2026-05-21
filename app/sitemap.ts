// app/sitemap.ts - Dynamic multilingual sitemap generation for SEO

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateHrefLangAlternates, LOCALES, DEFAULT_LOCALE, getCanonicalUrl } from '@/lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  // Define all site pages (paths without locale prefix)
  const pages = [
    { path: '/', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/tools', changeFrequency: 'weekly' as const, priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly' as const, priority: 0.5 },
    { path: '/faq', changeFrequency: 'monthly' as const, priority: 0.8 },
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
    'brightness-test',
    'contrast-test',
    'zoom-lighting',
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

  return sitemapEntries;
}
