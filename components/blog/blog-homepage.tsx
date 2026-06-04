// components/blog/blog-homepage.tsx - Homepage for blog section
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import { BlogArticleCard } from './blog-article-card';

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

const CATEGORY_COLORS: Record<string, { bg: string; text: string; icon: string }> = {
  'pixel-problems': {
    bg: 'bg-red-50',
    text: 'text-red-700',
    icon: '🔴',
  },
  'screen-testing': {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    icon: '🧪',
  },
  'color-quality': {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    icon: '🎨',
  },
  troubleshooting: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-700',
    icon: '⚙️',
  },
  'buying-guides': {
    bg: 'bg-green-50',
    text: 'text-green-700',
    icon: '🛒',
  },
  educational: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-700',
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const baseUrl = locale === 'en' ? '/blog' : `/${locale}/blog`;

  const categoryColor =
    CATEGORY_COLORS[selectedCategory || ''] || CATEGORY_COLORS['educational'];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-blue-100 mb-8">{subtitle}</p>

          {/* Search Box */}
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search articles..."
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
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

      {/* Categories Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const colors =
                CATEGORY_COLORS[cat.id] || CATEGORY_COLORS['educational'];
              return (
                <Link key={cat.id} href={`${baseUrl}?category=${cat.id}`}>
                  <div
                    className={`p-6 rounded-lg border-2 border-gray-200 hover:border-blue-400 transition-all cursor-pointer group ${colors.bg}`}
                  >
                    <div className="text-4xl mb-3">{colors.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{cat.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">
                        {cat.articleCount} articles
                      </span>
                      <ChevronRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <BlogArticleCard
              key={article.slug}
              {...article}
              category={article.cluster}
              locale={locale}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-blue-50 px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                What types of screen issues can I test for?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                You can test for dead pixels, stuck pixels, color accuracy,
                brightness, contrast, gradient uniformity, and much more. We
                offer specialized tools for monitors, laptops, tablets, and
                smartphones.
              </p>
            </details>

            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                Are all tests completely free?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, all our screen testing tools are 100% free. No registration
                or software installation required. Access them directly from
                your browser.
              </p>
            </details>

            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                Can I fix dead pixels if I find them?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Dead pixels cannot be repaired, but they may be covered under
                warranty if your monitor is new. Check your warranty terms and
                contact the manufacturer. Read our article on fixing dead pixels
                for more details.
              </p>
            </details>

            <details className="p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <summary className="font-bold cursor-pointer flex items-center justify-between">
                How often should I test my display?
                <span className="text-blue-600">+</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Test new monitors immediately upon purchase to verify their
                quality. For existing displays, periodic testing (monthly or
                quarterly) helps track pixel health and identify emerging issues
                early.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Test Your Screen?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Access our complete collection of professional display testing tools
            right now.
          </p>
          <Link
            href="/tools"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Explore All Testing Tools
          </Link>
        </div>
      </section>
    </div>
  );
}
