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
    <Link
      href={`${baseUrl}/${slug}`}
      className="group block h-full no-underline text-inherit hover:no-underline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded-lg"
    >
      <div
        className={`h-full p-6 border rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer ${
          featured ? 'md:col-span-2 bg-blue-50 border-blue-200' : 'bg-white'
        }`}
      >
        {/* Category Badge */}
        <div className="inline-block mb-3">
          <span
            className={`text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${
              featured
                ? 'bg-[rgb(191_219_254)] text-[rgb(15_23_42)]'
                : 'bg-[rgb(203_213_225)] text-[rgb(15_23_42)]'
            }`}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`${
            featured ? 'text-2xl' : 'text-lg'
          } font-bold mb-3 text-slate-900 group-hover:text-cyan-300 transition-colors line-clamp-3`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-7">
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
