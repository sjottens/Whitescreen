// app/[locale]/page.tsx - Locale-aware homepage with modern design & LLM optimization

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Smartphone, Shield, Monitor, Gamepad2, Sparkles } from 'lucide-react';
import { generateMultilingualMetadata, faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import {
  llmOptimizedWebsiteSchema,
  llmOptimizedToolSchema,
  schemaToJsonLd,
} from '@/lib/seo-llm-optimization';
import { getLocaleFromParams } from '@/lib/i18n';
import { COLOR_TOOLS, TEST_TOOLS, FAQ_ITEMS, SITE_URL } from '@/lib/constants';
import { t } from '@/lib/translations';
import { LinkButton } from '@/components/ui/button';
import { getLocalizedPath } from '@/lib/link-utils';
import { LatestBlogBanner } from '@/components/blog/latest-blog-banner';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('home_title'),
    description: translate('home_description'),
    path: '/',
  });
}

interface HomePageProps {
  readonly params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  // Schema data
  const breadcrumbs = breadcrumbSchemaMultilingual([
    { name: translate('home'), path: '/' },
  ], locale);

  // LLM-Optimized Schemas for better AI crawler indexing
  const llmWebsiteSchema = llmOptimizedWebsiteSchema();
  // NOTE: a llmOptimizedReviewSchema() call previously lived here, injecting
  // a hardcoded 4.8-star / 2,500-review AggregateRating with no real
  // review-collection feature anywhere in the product. Removed - see
  // lib/seo-llm-optimization.ts for the full note. Re-add once real reviews
  // exist to source it from.

  // Featured tool schema for LLM context
  const featuredToolSchema = llmOptimizedToolSchema({
    name: 'Dead Pixel Fixer',
    description: 'Free browser tool that flashes rapidly changing colors over a stuck pixel to try to unstick it',
    url: `${SITE_URL}/dead-pixel-fixer`,
    image: `${SITE_URL}/logo.svg`,
    applicationCategory: 'UtilityApplication',
    features: [
      'RGB, RGB + white/black and random flashing modes',
      'Fullscreen mode',
      'Adjustable flashing speed',
    ],
    useCases: [
      'Trying to unstick a stuck pixel before a warranty claim',
    ],
    // aggregateRating intentionally omitted - see note above.
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      {/* LLM Optimization Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(llmWebsiteSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(featuredToolSchema) }}
        suppressHydrationWarning
      />

      {/* Hero Section - Modern Design. Previously rendered a Three.js/GSAP
          particle canvas (<ModernHeroBackground>) here - removed for speed.
          It was lazy-loaded but still cost real main-thread time to init
          and run once it mounted, which was directly delaying Largest
          Contentful Paint (the h1/p in this section) on mobile in
          production. The gradient background + CSS-only glowing orbs
          below give the same visual mood for zero JS/WebGL cost. */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950 pointer-events-none -z-20" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="hero-title text-[2rem] md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block text-white">{translate('hero_title')}</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {translate('hero_subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <LinkButton 
                href={getLocalizedPath(locale, '/dead-pixel-test')} 
                size="lg" 
                variant="primary" 
                className="sm:w-auto group"
              >
                {translate('btn_start_testing')} 
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </LinkButton>
              <LinkButton 
                href={getLocalizedPath(locale, '/tools')} 
                size="lg" 
                variant="outline" 
                className="sm:w-auto"
              >
                {translate('btn_view_tools')}
              </LinkButton>
            </div>

            {/* Trust Badges */}
            <div className="glass glass-dark inline-flex flex-wrap gap-6 px-6 py-4 rounded-full">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#00DC82]" />
                <span className="text-sm text-slate-300">{translate('trust_free')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#00DC82]" />
                <span className="text-sm text-slate-300">{translate('trust_no_registration')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-[#00DC82]" />
                <span className="text-sm text-slate-300">{translate('trust_open_source')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00DC82]/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse-glow opacity-10 pointer-events-none" />
      </section>

      {/* Latest Blog Article Banner - Compact Top Section */}
      <LatestBlogBanner locale={locale} />

      {/* Featured Tools Grid - Modern Cards */}
      <section className="section bg-gradient-to-b from-slate-950 to-slate-900 content-auto">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {translate('color_screens')}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {translate('features_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {COLOR_TOOLS.slice(0, 4).map((tool, idx) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="group card neon-glow overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden mb-4">
                  <div
                    className="absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: tool.color }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="relative">
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-[#00DC82] transition-colors">
                    {translate(tool.nameKey as any)}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2">
                    {translate(tool.descriptionKey as any)}
                  </p>
                  <div className="mt-4 flex items-center text-[#00DC82] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold mr-2">Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <LinkButton 
              href={getLocalizedPath(locale, '/tools')} 
              variant="outline" 
              size="lg"
              className="group"
            >
              {translate('browse_all_resources').replace('{count}', String(COLOR_TOOLS.length + TEST_TOOLS.length))}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Monitor Test Pillar Banner - routes homepage traffic to the full
          testing hub, not just the two individual tools featured above */}
      <section className="py-10 bg-slate-950 border-y border-slate-800/60">
        <div className="container">
          <Link
            href={getLocalizedPath(locale, '/monitor-test')}
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-5 hover:border-[#00DC82]/50 transition-colors"
          >
            <div>
              <p className="text-sm font-semibold text-[#00DC82] uppercase tracking-wide mb-1">
                {translate('monitor_test_hub_tests_title' as any)}
              </p>
              <p className="text-slate-300">{translate('monitor_test_hub_intro' as any)}</p>
            </div>
            <span className="flex items-center gap-2 text-white font-semibold whitespace-nowrap">
              {translate('monitor_test_badge' as any)}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* Dead Pixel Fixer Banner - Premium CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 content-auto">
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00DC82] rounded-full mix-blend-screen filter blur-3xl animate-float opacity-20" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse-glow opacity-20" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#00DC82]/20 to-cyan-500/20 border border-[#00DC82]/40 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:border-[#00DC82]/60 transition-all duration-300">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00DC82]/10 border border-[#00DC82]/50 mb-6">
                <Sparkles className="w-4 h-4 text-[#00DC82]" />
                <span className="text-xs font-bold text-[#00DC82] uppercase tracking-wider">{translate('featured_tool_badge')}</span>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="block text-white mb-2">{translate('featured_tool_subtitle')}</span>
                  <span className="block bg-gradient-to-r from-[#00DC82] to-emerald-400 bg-clip-text text-transparent">{translate('featured_tool_title')}</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  {translate('featured_tool_desc')}
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 py-6 border-t border-[#00DC82]/20">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-[#00DC82] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{translate('featured_tool_feature1_title')}</p>
                    <p className="text-sm text-slate-400">{translate('featured_tool_feature1_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-[#00DC82] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{translate('featured_tool_feature2_title')}</p>
                    <p className="text-sm text-slate-400">{translate('featured_tool_feature2_desc')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-[#00DC82] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{translate('featured_tool_feature3_title')}</p>
                    <p className="text-sm text-slate-400">{translate('featured_tool_feature3_desc')}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                  href={getLocalizedPath(locale, '/dead-pixel-fixer')}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00DC82] to-emerald-500 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,220,130,0.4)] transition-all duration-300 hover:scale-105 group"
                >
                  <span>{translate('featured_tool_cta')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-slate-400 whitespace-nowrap">{translate('featured_tool_info')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monitor & Device Tests Section */}
      <section className="section-alt content-auto">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{translate('monitor_tests')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {translate('home_monitor_device_intro' as any)}
            </p>
          </div>

          <div className="text-center">
            <LinkButton href={getLocalizedPath(locale, '/monitor-test')} variant="primary" size="lg">
              {translate('monitor_tests')} <ArrowRight className="w-5 h-5 ml-2" />
            </LinkButton>
          </div>

        </div>
      </section>
      {/* How to Fix Dead Pixels Section */}
      <section className="section bg-gradient-to-r from-slate-900 to-slate-950 content-auto">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00DC82] to-[#1CED8F] bg-clip-text text-transparent">
              {translate('dead_pixel_fix_title' as any)}
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              {translate('dead_pixel_fix_intro' as any)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: translate('dead_pixel_fix_method1_title' as any),
                description: translate('dead_pixel_fix_method1_desc' as any),
              },
              {
                title: translate('dead_pixel_fix_method2_title' as any),
                description: translate('dead_pixel_fix_method2_desc' as any),
              },
              {
                title: translate('dead_pixel_fix_method3_title' as any),
                description: translate('dead_pixel_fix_method3_desc' as any),
              },
              {
                title: translate('dead_pixel_fix_method4_title' as any),
                description: translate('dead_pixel_fix_method4_desc' as any),
              },
            ].map((method, index) => (
              <div
                key={method.title}
                className="glass glass-dark rounded-xl p-6 border border-slate-700/50 hover:border-[#00DC82]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-[#00DC82] min-w-fit">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-[#00DC82]/30 bg-[#00DC82]/5 p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-[#00DC82]" />
              {translate('dead_pixel_fix_success_title' as any)}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-[#00DC82] mt-1 flex-shrink-0" />
                <span>{translate('dead_pixel_fix_success_note1' as any)}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-[#00DC82] mt-1 flex-shrink-0" />
                <span>{translate('dead_pixel_fix_success_note2' as any)}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="w-5 h-5 text-[#00DC82] mt-1 flex-shrink-0" />
                <span>{translate('dead_pixel_fix_success_note3' as any)}</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <LinkButton 
              href={getLocalizedPath(locale, '/dead-pixel-test')} 
              variant="primary" 
              size="lg"
              className="group"
            >
              {translate('dead_pixel_fix_cta' as any)}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* New Tools & Resources Section */}
      <section className="section content-auto">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🛠️ {translate('home_tools_resources_title' as any)}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {translate('home_tools_resources_desc' as any)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Refresh Rate Calculator */}
            <Link
              href={getLocalizedPath(locale, '/tools/refresh-rate-calculator')}
              className="group card hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{translate('refresh_rate_calculator')}</h3>
              <p className="text-slate-600 mb-4">
                {translate('resources_refresh_calculator_desc')}
              </p>
              <span className="text-purple-600 font-semibold inline-flex items-center">
                {translate('resources_calculate_cta' as any)}
              </span>
            </Link>

            {/* Pixel Density Calculator */}
            <Link
              href={getLocalizedPath(locale, '/tools/pixel-density-calculator')}
              className="group card hover:shadow-xl transition-all duration-300 border-t-4 border-emerald-700"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{translate('pixel_density_calculator')}</h3>
              <p className="text-slate-600 mb-4">
                {translate('resources_pixel_calculator_desc')}
              </p>
              <span className="text-emerald-700 font-semibold inline-flex items-center">
                {translate('resources_calculate_cta' as any)}
              </span>
            </Link>

            {/* Monitor Comparisons */}
            <Link
              href={getLocalizedPath(locale, '/tools/monitor-comparison')}
              className="group card hover:shadow-xl transition-all duration-300 border-t-4 border-orange-700"
            >
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{translate('monitor_comparison_tool')}</h3>
              <p className="text-slate-600 mb-4">
                {translate('resources_monitor_comparison_desc')}
              </p>
              <span className="text-orange-700 font-semibold inline-flex items-center">
                {translate('resources_compare_cta' as any)}
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt content-auto">
        <div className="container max-w-3xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{translate('cta_ready_title')}</h2>
            <p className="text-lg text-slate-600 mb-8">
              {translate('cta_ready_desc')}
            </p>
            <LinkButton href={`/${locale !== 'en' ? locale : ''}${locale !== 'en' ? '/' : ''}white-screen`.replace(/\/+/g, '/')} size="lg" variant="primary">
              {translate('cta_start_testing')}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
