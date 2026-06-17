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
      className="group block h-full no-underline text-inherit hover:no-underline focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2 rounded-xl"
    >
      <div
        className={`h-full p-6 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 ${
          featured 
            ? 'md:col-span-2 bg-gradient-to-br from-slate-900/80 to-slate-800/80 border-2 border-cyan-500/50 hover:border-cyan-400' 
            : 'bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-cyan-500/30 hover:border-cyan-400/70'
        }`}
      >
        {/* Category Badge */}
        <div className="inline-block mb-3">
          <span
            className={`text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/50`}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`${
            featured ? 'text-2xl' : 'text-lg'
          } font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors line-clamp-3`}
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-slate-300 mb-4 line-clamp-3 text-sm leading-7">
          {excerpt}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 text-xs text-slate-400 pt-4 border-t border-slate-700">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <time>{formatDate(publishedAt)}</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{readingTimeMinutes} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
