'use client';

import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { ClientStrings } from '@/lib/client-strings';

interface RelatedReadingItem {
  title: string;
  slug: string;
  description: string;
  intent: 'informational' | 'guide' | 'troubleshooting';
}

interface RelatedReadingProps {
  toolId: string;
  strings: ClientStrings<'relatedReading'>;
  items?: RelatedReadingItem[];
  customTitle?: string;
}

/**
 * Tool-to-Blog linking guide
 * Maps tools to their most relevant blog articles
 */
const toolBlogMapping: Record<string, RelatedReadingItem[]> = {
  'dead-pixel-test': [
    {
      title: 'What Are Dead Pixels? A Complete Guide',
      slug: 'what-are-dead-pixels',
      description: 'Understand dead pixels, stuck pixels, and broken pixels. Learn the differences and what they mean for your display.',
      intent: 'informational',
    },
    {
      title: 'Dead Pixel vs Stuck Pixel: Complete Comparison',
      slug: 'dead-pixel-vs-stuck-pixel',
      description: 'Learn the key differences between dead pixels and stuck pixels, and which is more fixable.',
      intent: 'guide',
    },
    {
      title: 'Can Dead Pixels Be Fixed? Solutions & Prevention',
      slug: 'can-dead-pixels-be-fixed',
      description: 'Explore methods to fix stuck pixels and protect your display from dead pixel formation.',
      intent: 'troubleshooting',
    },
  ],
  'brightness-test': [
    {
      title: 'Why Monitor Calibration Matters',
      slug: 'monitor-calibration-why-matters',
      description: 'How brightness, gamma and white point drift over time, and when calibrating your monitor is worth it.',
      intent: 'informational',
    },
    {
      title: 'What Is a Screen Uniformity Test? Complete Guide',
      slug: 'what-is-screen-uniformity-test',
      description: 'Detect and understand uneven brightness and backlight bleed on LCD monitors.',
      intent: 'guide',
    },
  ],
  'contrast-test': [
    {
      title: 'Monitor Color Accuracy for Professionals: A Practical Guide',
      slug: 'monitor-color-accuracy-for-professionals',
      description: 'Understand color accuracy, contrast ratios, and how to test your monitor for color critical work.',
      intent: 'informational',
    },
    {
      title: 'IPS vs VA Panels: Complete Technical Comparison',
      slug: 'ips-vs-va-panel-comparison-comprehensive',
      description: 'Why VA panels reach much higher contrast ratios than IPS, and what you give up for it.',
      intent: 'guide',
    },
  ],
  'white-screen': [
    {
      title: 'What Are Dead Pixels? A Complete Guide',
      slug: 'what-are-dead-pixels',
      description: 'Use white screens to detect dead pixels. Learn what to look for and when results are normal.',
      intent: 'guide',
    },
    {
      title: 'Best Ways to Test a New Monitor: A Professional Checklist',
      slug: 'best-ways-to-test-a-new-monitor',
      description: 'A complete testing checklist using white, black and color screens plus the other diagnostic tools.',
      intent: 'guide',
    },
  ],
  'black-screen': [
    {
      title: 'What Are Dead Pixels? A Complete Guide',
      slug: 'what-are-dead-pixels',
      description: 'Black screens reveal dead pixels clearly. Learn to identify and interpret results.',
      intent: 'guide',
    },
    {
      title: 'What Is a Screen Uniformity Test? Complete Guide',
      slug: 'what-is-screen-uniformity-test',
      description: 'Test screen uniformity with color screens to find brightness and color inconsistencies.',
      intent: 'guide',
    },
  ],
  'backlight-bleed-test': [
    {
      title: 'What Is a Screen Uniformity Test? Complete Guide',
      slug: 'what-is-screen-uniformity-test',
      description: 'Understand screen uniformity testing and how it relates to backlight consistency across the panel.',
      intent: 'guide',
    },
    {
      title: 'Best Ways to Test a New Monitor: Complete Checklist',
      slug: 'best-ways-to-test-a-new-monitor',
      description: 'The full checklist for testing a new monitor, including when to return it, not just backlight bleed.',
      intent: 'guide',
    },
  ],
  'response-time-test': [
    {
      title: 'Gaming Monitor Buying Guide 2026: What Actually Matters',
      slug: 'gaming-monitor-buying-guide-2026',
      description: 'Refresh rate, response time and overdrive explained - the specs that actually affect ghosting.',
      intent: 'guide',
    },
    {
      title: 'Best Ways to Test a New Monitor: Complete Checklist',
      slug: 'best-ways-to-test-a-new-monitor',
      description: 'The full checklist for testing a new monitor, including a fast-object ghosting check.',
      intent: 'guide',
    },
  ],
};

export default function RelatedReading({ toolId, items, customTitle, strings }: RelatedReadingProps) {
  const translate = (key: keyof ClientStrings<'relatedReading'>) => strings[key];

  // Use provided items or look up from mapping
  const articles = items || toolBlogMapping[toolId] || [];

  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-16 md:py-20 border-t border-slate-800">
      <div className="container">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-[#00DC82]" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {customTitle || 'Related Reading'}
            </h2>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Deepen your understanding with these educational guides and explanations. Each article provides context on what this test measures and how to interpret results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 backdrop-blur p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1"
            >
              {/* Intent badge */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                  article.intent === 'informational' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : article.intent === 'guide'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {article.intent}
                </span>
              </div>

              <h3 className="font-bold text-lg text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-4 line-clamp-2 text-sm">
                {article.description}
              </p>

              <div className="flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                {translate('read_article')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-slate-900/50 border border-slate-700 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-2">Need More Resources?</h3>
          <p className="text-slate-300 mb-4">
            Browse our complete blog for in-depth guides on monitor testing, display technologies, buying guides, and troubleshooting.
          </p>
          <Link
            href={'/blog'}
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
          >
            Explore Full Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
