// app/(website)/blog/page.tsx - English blog homepage
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { BlogHomepage } from '@/components/blog/blog-homepage';
import { getFeaturedArticles, getBlogArticlesByCluster, allBlogArticles } from '@/lib/blog-content';
import { generateHrefLangAlternates } from '@/lib/i18n';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Screen Testing Blog | Free Display Testing Guides',
  description:
    'Learn about screen testing, dead pixels, color accuracy, monitor diagnostics, and display troubleshooting. Expert guides for monitor buyers and IT professionals.',
  keywords: [
    'screen testing blog',
    'monitor testing guide',
    'dead pixel guide',
    'display diagnostics',
    'color accuracy testing',
  ],
  openGraph: {
    title: 'Screen Testing Blog | Free Display Testing Guides',
    description:
      'Learn about screen testing, dead pixels, color accuracy, monitor diagnostics, and display troubleshooting. Expert guides and tutorials.',
    type: 'website',
    url: `${SITE_URL}/blog`,
    locale: 'en_US',
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
    languages: generateHrefLangAlternates('/blog'),
  },
};

export default function BlogPage() {
  const featured = getFeaturedArticles();
  
  // Get latest articles (not featured)
  const latest = allBlogArticles
    .filter((a) => !a.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

  // Define categories with counts
  const categories = [
    {
      id: 'pixel-problems',
      name: 'Pixel Problems',
      description: 'Dead pixels, stuck pixels, and broken pixel solutions',
      articleCount: getBlogArticlesByCluster('pixel-problems').length,
    },
    {
      id: 'screen-testing',
      name: 'Screen Testing',
      description: 'Complete monitor testing and diagnostics guides',
      articleCount: getBlogArticlesByCluster('screen-testing').length,
    },
    {
      id: 'color-quality',
      name: 'Color & Image Quality',
      description: 'Color accuracy, gradients, contrast, and brightness testing',
      articleCount: getBlogArticlesByCluster('color-quality').length,
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      description: 'Fix flickering, ghosting, burn-in, and other display issues',
      articleCount: getBlogArticlesByCluster('troubleshooting').length,
    },
    {
      id: 'buying-guides',
      name: 'Buying Guides',
      description: 'Monitor selection, OLED vs LCD, gaming monitors',
      articleCount: getBlogArticlesByCluster('buying-guides').length,
    },
    {
      id: 'educational',
      name: 'Educational',
      description: 'How displays work, display technologies, pixel science',
      articleCount: getBlogArticlesByCluster('educational').length,
    },
  ];

  const featuredPreview = featured.map((a) => ({
    slug: a.slug,
    title: a.translations.en.title,
    excerpt: a.content.introduction.substring(0, 150) + '...',
    publishedAt: a.publishedAt,
    readingTimeMinutes: a.readingTimeMinutes,
    cluster: a.cluster,
    featured: a.featured,
  }));

  const latestPreview = latest.map((a) => ({
    slug: a.slug,
    title: a.translations.en.title,
    excerpt: a.content.introduction.substring(0, 150) + '...',
    publishedAt: a.publishedAt,
    readingTimeMinutes: a.readingTimeMinutes,
    cluster: a.cluster,
    featured: a.featured,
  }));

  return (
    <Suspense fallback={<div className="w-full py-20 text-center">Loading...</div>}>
      <BlogHomepage
        title="Screen Testing Blog"
        subtitle="Expert guides for display diagnostics, dead pixels, monitor testing, and more"
        featuredArticles={featuredPreview}
        latestArticles={latestPreview}
        categories={categories}
        locale="en"
      />
    </Suspense>
  );
}
