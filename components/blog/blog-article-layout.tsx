// components/blog/blog-article-layout.tsx - Layout component for blog posts
'use client';

import React, { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronUp } from 'lucide-react';

interface BlogArticleLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  author?: string;
  breadcrumbs?: Array<{ label: string; href: string }>;
  tableOfContents?: Array<{ id: string; label: string; level: number }>;
  children: ReactNode;
  relatedArticles?: Array<{
    title: string;
    slug: string;
    excerpt: string;
    readingTime: number;
  }>;
  locale?: string;
}

export function BlogArticleLayout({
  title,
  h1,
  publishedAt,
  updatedAt,
  readingTimeMinutes,
  author = 'TestAScreen Team',
  breadcrumbs,
  tableOfContents,
  children,
  relatedArticles,
  locale = 'en',
}: BlogArticleLayoutProps) {
  const [showTOC, setShowTOC] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        typeof window !== 'undefined' ? window.innerHeight : 0;
      const documentHeight =
        typeof document !== 'undefined'
          ? document.documentElement.scrollHeight
          : 0;
      const scrolled =
        typeof window !== 'undefined' ? window.scrollY : 0;

      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrolled / totalScroll) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));
      setShowScrollTop(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 transition-all duration-300 z-50"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <nav className="bg-gray-50 px-4 py-3 border-b">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                {index > 0 && <span className="text-gray-400">/</span>}
                <Link href={crumb.href} className="text-blue-600 hover:underline">
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white px-4 py-12 border-b">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {h1}
          </h1>

          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm">By</span>
              <span className="font-semibold">{author}</span>
            </div>
            <div className="text-sm">
              Published: <time>{formatDate(publishedAt)}</time>
            </div>
            {updatedAt !== publishedAt && (
              <div className="text-sm">
                Updated: <time>{formatDate(updatedAt)}</time>
              </div>
            )}
            <div className="text-sm">{readingTimeMinutes} min read</div>
          </div>

          {/* Article Stats */}
          <div className="flex gap-4 text-sm text-gray-500">
            <span>📖 {readingTimeMinutes} minute read</span>
            <span>⏱️ Updated {formatDate(updatedAt)}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-8 max-w-6xl mx-auto px-4 py-12">
        {/* Sidebar with TOC */}
        {tableOfContents && tableOfContents.length > 0 && (
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20 bg-gray-50 rounded-lg p-6">
              <h2 className="font-bold text-lg mb-4 text-gray-900">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm hover:text-blue-600 transition-colors ${
                      item.level === 2
                        ? 'text-gray-700 font-medium'
                        : 'text-gray-600 ml-4'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 max-w-4xl">
          <div className="prose prose-lg max-w-none">{children}</div>

          {/* Related Articles */}
          {relatedArticles && relatedArticles.length > 0 && (
            <section className="mt-16 pt-16 border-t">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-lg mb-2 hover:text-blue-600">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    <span className="text-xs text-gray-500">
                      {article.readingTime} min read
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="mt-16 p-8 bg-blue-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Test Your Display?</h2>
            <p className="text-gray-700 mb-6">
              Use our free online screen testing tools to check for dead pixels,
              color accuracy, brightness, contrast, and more.
            </p>
            <Link
              href="/tools"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Testing Tools
            </Link>
          </section>
        </main>

        {/* Mobile TOC Toggle */}
        <div className="fixed bottom-6 right-6 lg:hidden">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="mb-2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ChevronUp size={24} />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
