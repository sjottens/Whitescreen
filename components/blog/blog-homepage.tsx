// components/blog/blog-homepage.tsx - Homepage for blog section
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ChevronRight, X } from 'lucide-react';
import { BlogArticleCard } from './blog-article-card';
import { t } from '@/lib/translations';

interface BlogArticlePreview {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTimeMinutes: number;
  cluster: string;
  featured: boolean;
}

interface BlogHomepageProps {
  title: string;
  subtitle: string;
  featuredArticles: BlogArticlePreview[];
  latestArticles: BlogArticlePreview[];
  categories: Array<{
    id: string;
    name: string;
    description: string;
    articleCount: number;
  }>;
  locale?: string;
}

const CATEGORY_COLORS: Record<string, { icon: string }> = {
  'pixel-problems': {
    icon: '🔴',
  },
  'screen-testing': {
    icon: '🧪',
  },
  'color-quality': {
    icon: '🎨',
  },
  troubleshooting: {
    icon: '⚙️',
  },
  'buying-guides': {
    icon: '🛒',
  },
  educational: {
    icon: '📚',
  },
};

export function BlogHomepage({
  title,
  subtitle,
  featuredArticles,
  latestArticles,
  categories,
  locale = 'en',
}: BlogHomepageProps) {
  const translate = t(locale as 'en' | 'nl' | 'es' | 'de');
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Read category from URL on mount
  useEffect(() => {
    setMounted(true);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const baseUrl = locale === 'en' ? '/blog' : `/${locale}/blog`;

  // Filter articles based on search query and selected category
  const filteredLatestArticles = latestArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || article.cluster === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Also filter featured articles if category is selected
  const displayedFeaturedArticles = selectedCategory
    ? featuredArticles.filter((article) => article.cluster === selectedCategory)
    : featuredArticles;

  const selectedCategoryName = selectedCategory
    ? categories.find((category) => category.id === selectedCategory)?.name
    : null;

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 mb-8">{subtitle}</p>

          {/* Search Box */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder={translate('blog_search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Active Filter Display */}
      {selectedCategory && (
        <section className="bg-blue-50 px-4 py-4 border-b border-blue-200">
          <div className="container">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">
                {translate('blog_filtering_by')}
              </span>
              <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-300">
                <span className="text-sm font-medium text-gray-800">
                  {selectedCategoryName}
                </span>
                <Link href={baseUrl}>
                  <X size={16} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Featured Articles - Only shown if no filter or articles match category */}
      {displayedFeaturedArticles.length > 0 && (
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory ? translate('blog_featured_in_category') : translate('blog_featured_articles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedFeaturedArticles.map((article) => (
              <BlogArticleCard
                key={article.slug}
                {...article}
                category={article.cluster}
                featured={article.featured}
                locale={locale}
              />
            ))}
          </div>
        </section>
      )}

      {/* Categories Section - Hidden when filter is active */}
      {!selectedCategory && (
        <section className="bg-gray-50 px-4 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{translate('blog_browse_by_category')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => {
                const colors =
                  CATEGORY_COLORS[cat.id] || CATEGORY_COLORS['educational'];
                return (
                  <Link
                    key={cat.id}
                    href={`${baseUrl}?category=${cat.id}`}
                    className="block no-underline text-inherit hover:no-underline"
                  >
                    <div
                      className="h-full p-6 rounded-lg border border-slate-200 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="text-4xl mb-3">{colors.icon}</div>
                      <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-cyan-300 transition-colors">{cat.name}</h3>
                      <p className="text-sm text-slate-600 mb-4 leading-6">
                        {cat.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-500">
                          {cat.articleCount} {translate('blog_articles_count_label')}
                        </span>
                        <ChevronRight
                          size={20}
                          className="text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles or Filtered Results */}
      {filteredLatestArticles.length > 0 && (
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8">
            {selectedCategory
              ? `${translate('blog_articles_in')} ${selectedCategoryName}`
              : translate('blog_latest_articles')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLatestArticles.map((article) => (
              <BlogArticleCard
                key={article.slug}
                {...article}
                category={article.cluster}
                locale={locale}
              />
            ))}
          </div>
        </section>
      )}

      {/* No Results Message */}
      {selectedCategory && filteredLatestArticles.length === 0 && displayedFeaturedArticles.length === 0 && (
        <section className="container py-16 text-center">
          <p className="text-xl text-gray-600 mb-4">
            {translate('blog_no_articles_category')}
          </p>
          <Link href={baseUrl} className="text-blue-600 hover:text-blue-800 font-semibold">
            {translate('blog_view_all_articles')}
          </Link>
        </section>
      )}

      {/* FAQ Section */}
      <section className="bg-blue-50 px-4 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {translate('blog_faq_title')}
          </h2>
          <div className="space-y-4">
            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                {translate('blog_faq_1_q')}
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                {translate('blog_faq_1_a')}
              </p>
            </details>

            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                {translate('blog_faq_2_q')}
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                {translate('blog_faq_2_a')}
              </p>
            </details>

            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                {translate('blog_faq_3_q')}
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                {translate('blog_faq_3_a')}
              </p>
            </details>

            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                {translate('blog_faq_4_q')}
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                {translate('blog_faq_4_a')}
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{translate('blog_cta_title')}</h2>
          <p className="text-lg text-blue-100 mb-8">
            {translate('blog_cta_desc')}
          </p>
          <Link
            href="/tools"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors no-underline hover:no-underline"
          >
            {translate('blog_cta_button')}
          </Link>
        </div>
      </section>
    </div>
  );
}
