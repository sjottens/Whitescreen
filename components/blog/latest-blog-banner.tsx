// components/blog/latest-blog-banner.tsx - Latest blog article banner with creative design

import Link from 'next/link';
import { ArrowRight, BookOpen, Zap } from 'lucide-react';
import { allBlogArticles } from '@/lib/blog-content';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

interface LatestBlogBannerProps {
  locale: Locale;
}

export function LatestBlogBanner({ locale }: LatestBlogBannerProps) {
  const translate = t(locale);
  
  // Get the latest blog article (most recent by publishedAt)
  const latestArticle = [...allBlogArticles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )[0];

  if (!latestArticle) return null;

  // Get translation for the current locale
  const articleTranslation = latestArticle.translations[locale] || latestArticle.translations.en;
  const title = articleTranslation.title;
  const description = articleTranslation.metaDescription;
  
  // Determine creative background based on article topic/cluster
  const getBackgroundStyle = () => {
    const cluster = latestArticle.cluster;
    
    if (latestArticle.id.includes('epilepsy') || latestArticle.id.includes('flicker')) {
      // Health/safety articles - calming blue-purple gradient with pulse effect
      return {
        background: 'linear-gradient(135deg, #1e3a8a 0%, #4f46e5 50%, #7c3aed 100%)',
        accentColor: 'from-blue-600 to-purple-600',
        accentLight: 'bg-blue-500/20',
        borderColor: 'border-blue-400/30',
        icon: '⚠️'
      };
    } else if (latestArticle.id.includes('screen-ratio') || latestArticle.id.includes('aspect')) {
      // Technical/ratio articles - cool teal gradient
      return {
        background: 'linear-gradient(135deg, #0f766e 0%, #0891b2 50%, #06b6d4 100%)',
        accentColor: 'from-teal-600 to-cyan-600',
        accentLight: 'bg-teal-500/20',
        borderColor: 'border-teal-400/30',
        icon: '📐'
      };
    } else if (latestArticle.id.includes('protection')) {
      // Protection articles - warm amber gradient
      return {
        background: 'linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)',
        accentColor: 'from-amber-600 to-orange-600',
        accentLight: 'bg-amber-500/20',
        borderColor: 'border-amber-400/30',
        icon: '🛡️'
      };
    } else {
      // Default - emerald gradient
      return {
        background: 'linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)',
        accentColor: 'from-emerald-600 to-green-600',
        accentLight: 'bg-emerald-500/20',
        borderColor: 'border-emerald-400/30',
        icon: '🔍'
      };
    }
  };

  const style = getBackgroundStyle();

  return (
    <section className="relative py-8 md:py-12 overflow-hidden content-auto">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: style.background }}
      />
      
      {/* Animated overlay effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full mix-blend-screen filter blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse-glow" />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Card Container */}
          <div className={`border ${style.borderColor} rounded-xl backdrop-blur-xl bg-white/5 overflow-hidden hover:border-opacity-50 transition-all duration-300 group`}>
            <Link 
              href={getLocalizedPath(locale, `/blog/${latestArticle.slug}`)}
              className="block p-4 md:p-6 text-decoration-none"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 items-center">
                {/* Icon Side - Compact */}
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-lg bg-gradient-to-br ${style.accentColor} p-1`}>
                    {/* Inner glow effect */}
                    <div className={`absolute inset-0 ${style.accentLight} rounded-lg blur-lg`} />
                    
                    {/* Card content */}
                    <div className="relative w-full h-full rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-3">
                      {/* Emoji/icon */}
                      <div className="text-4xl md:text-5xl drop-shadow-lg">
                        {style.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-3">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 border border-white/20 mb-2 group-hover:bg-white/15 transition-all">
                    <BookOpen className="w-3 h-3 text-white" />
                    <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Latest</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform line-clamp-2">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-white/80 mb-3 leading-snug line-clamp-2">
                    {description}
                  </p>

                  {/* Reading time and meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>{latestArticle.readingTimeMinutes} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-white/40">•</span>
                      <time dateTime={latestArticle.publishedAt}>
                        {new Date(latestArticle.publishedAt).toLocaleDateString(locale === 'nl' ? 'nl-NL' : locale === 'es' ? 'es-ES' : locale === 'de' ? 'de-DE' : 'en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-3 flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all w-fit">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
