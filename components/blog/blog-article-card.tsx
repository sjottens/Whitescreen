// components/blog/blog-article-card.tsx - Card component for blog post previews
import React from 'react';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';

interface BlogArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTimeMinutes: number;
  category: string;
  featured?: boolean;
  locale?: string;
}

export function BlogArticleCard({
  slug,
  title,
  excerpt,
  publishedAt,
  readingTimeMinutes,
  category,
  featured = false,
  locale = 'en',
}: BlogArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'nl' ? 'nl-NL' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const baseUrl = locale === 'en' ? '/blog' : `/${locale}/blog`;

  return (
    <Link href={`${baseUrl}/${slug}`}>
      <div
        className={`group h-full p-6 border rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer ${
          featured ? 'md:col-span-2 bg-blue-50 border-blue-200' : 'bg-white'
        }`}
      >
        {/* Category Badge */}
        <div className="inline-block mb-3">
          <span
            className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
              featured
                ? 'bg-blue-200 text-blue-800'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`${
            featured ? 'text-2xl' : 'text-lg'
          } font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-3`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
          {excerpt}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 pt-4 border-t">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <time>{formatDate(publishedAt)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{readingTimeMinutes} min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
