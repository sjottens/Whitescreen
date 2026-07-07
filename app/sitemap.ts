// app/sitemap.ts - Dynamic multilingual sitemap generation for SEO

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { generateHrefLangAlternates, LOCALES, DEFAULT_LOCALE, getCanonicalUrl } from '@/lib/i18n';
import { getMonitorBrandSlugs } from '@/lib/monitor-brands';
import { getComparisonSlugs } from '@/lib/comparisons';
import { COLOR_TOOLS, SCREEN_VARIANTS } from '@/lib/constants';

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
    // Device-specific tests
    'iphone-screen-test',
    'ipad-screen-test',
    'macbook-screen-test',
    'android-screen-test',
    // Resolution-specific tests
    '1080p-screen-test',
    '2k-screen-test',
    '4k-screen-test',
    '8k-screen-test',
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

  // Add dynamic monitor brand pages
  const monitorBrands = getMonitorBrandSlugs();

  monitorBrands.forEach((brand) => {
    const brandPath = `/monitor-test/${brand}`;

    // Add default locale entry
    sitemapEntries.push({
      url: getCanonicalUrl(DEFAULT_LOCALE, brandPath),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: generateHrefLangAlternates(brandPath),
      },
    });

    // Add non-default locale entries
    LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
      sitemapEntries.push({
        url: getCanonicalUrl(locale, brandPath),
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
        alternates: {
          languages: generateHrefLangAlternates(brandPath),
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

  // Add screen color overview pages (/screen/[color])
  const colors = COLOR_TOOLS.map((t) => t.id);

  colors.forEach((color) => {
    const colorPath = `/screen/${color}`;

    // Add default locale entry
    sitemapEntries.push({
      url: getCanonicalUrl(DEFAULT_LOCALE, colorPath),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
      alternates: {
        languages: generateHrefLangAlternates(colorPath),
      },
    });

    // Add non-default locale entries
    LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
      sitemapEntries.push({
        url: getCanonicalUrl(locale, colorPath),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.75,
        alternates: {
          languages: generateHrefLangAlternates(colorPath),
        },
      });
    });
  });

  // Add screen variant pages (/screen/[color]/[variant])
  const variants = Object.keys(SCREEN_VARIANTS);

  colors.forEach((color) => {
    variants.forEach((variant) => {
      const variantPath = `/screen/${color}/${variant}`;

      // Add default locale entry
      sitemapEntries.push({
        url: getCanonicalUrl(DEFAULT_LOCALE, variantPath),
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
        alternates: {
          languages: generateHrefLangAlternates(variantPath),
        },
      });

      // Add non-default locale entries
      LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).forEach((locale) => {
        sitemapEntries.push({
          url: getCanonicalUrl(locale, variantPath),
          lastModified: now,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
          alternates: {
            languages: generateHrefLangAlternates(variantPath),
          },
        });
      });
    });
  });

  return sitemapEntries;
}
