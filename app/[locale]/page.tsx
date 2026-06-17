// app/[locale]/page.tsx - Locale-aware homepage

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Smartphone, Shield, Monitor, Gamepad2 } from 'lucide-react';
import { generateMultilingualMetadata, faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { COLOR_TOOLS, TEST_TOOLS, FAQ_ITEMS } from '@/lib/constants';
import { t } from '@/lib/translations';
import { LinkButton } from '@/components/ui/button';
import { getLocalizedPath } from '@/lib/link-utils';
import HeroThreeBackground from '@/components/ui/hero-three-background';

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
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  // Schema data
  const faqData = faqSchema(FAQ_ITEMS);
  const breadcrumbs = breadcrumbSchemaMultilingual([
    { name: translate('home'), path: '/' },
  ], locale);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <HeroThreeBackground />
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {translate('hero_title')} <span className="text-cyan-600">{translate('tools')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              {translate('hero_subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <LinkButton href={getLocalizedPath(locale, '/white-screen')} size="lg" variant="primary" className="sm:w-auto">
                {translate('btn_start_testing')} <ArrowRight className="w-5 h-5 ml-2" />
              </LinkButton>
              <LinkButton href={getLocalizedPath(locale, '/tools')} size="lg" variant="outline" className="sm:w-auto">
                {translate('btn_view_tools')}
              </LinkButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{translate('trust_free')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{translate('trust_no_registration')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{translate('trust_open_source')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>{translate('trust_users')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{translate('color_screens')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {translate('features_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COLOR_TOOLS.slice(0, 4).map((tool) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="group relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: tool.color }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{translate(tool.nameKey as any)}</h3>
                  <p className="text-white/80 text-sm">{translate(tool.descriptionKey as any)}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <LinkButton href={getLocalizedPath(locale, '/tools')} variant="outline" size="lg">
              {translate('browse_all_tools').replace('{count}', String(COLOR_TOOLS.length + TEST_TOOLS.length))}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Monitor & Device Tests Section */}
      <section className="section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{translate('monitor_tests')}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {translate('home_monitor_device_intro' as any)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Monitor Brand Tests */}
            <Link
              href={getLocalizedPath(locale, '/monitor-test/asus')}
              className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
            >
              <Monitor className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_asus')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_asus_description')}</p>
              <div className="flex items-center text-blue-600 font-semibold text-sm">
                {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/monitor-test/lg')}
              className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-red-500"
            >
              <Monitor className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_lg')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_lg_description')}</p>
              <div className="flex items-center text-red-600 font-semibold text-sm">
                {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/monitor-test/samsung')}
              className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-cyan-500"
            >
              <Monitor className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_samsung')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_samsung_description')}</p>
              <div className="flex items-center text-cyan-600 font-semibold text-sm">
                {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/monitor-test/dell')}
              className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500"
            >
              <Monitor className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_dell')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_dell_description')}</p>
              <div className="flex items-center text-purple-600 font-semibold text-sm">
                {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </div>

          {/* Device Tests Grid */}
          <div className="mt-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{translate('device_tests_title')}</h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {translate('home_device_tests_intro' as any)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href={getLocalizedPath(locale, '/iphone-screen-test')}
                className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-gray-500"
              >
                <Smartphone className="w-8 h-8 text-gray-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('iphone_test')}</h3>
                <p className="text-slate-600 text-sm mb-4">{translate('iphone_test_description')}</p>
                <div className="flex items-center text-gray-600 font-semibold text-sm">
                  {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href={getLocalizedPath(locale, '/macbook-screen-test')}
                className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-slate-500"
              >
                <Smartphone className="w-8 h-8 text-slate-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('macbook_test')}</h3>
                <p className="text-slate-600 text-sm mb-4">{translate('macbook_test_description')}</p>
                <div className="flex items-center text-slate-600 font-semibold text-sm">
                  {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href={getLocalizedPath(locale, '/gaming-monitor-test')}
                className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500"
              >
                <Gamepad2 className="w-8 h-8 text-orange-700 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('gaming_monitor_test')}</h3>
                <p className="text-slate-600 text-sm mb-4">{translate('gaming_monitor_test_description')}</p>
                <div className="flex items-center text-orange-700 font-semibold text-sm">
                  {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link
                href={getLocalizedPath(locale, '/oled-tv-test')}
                className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500"
              >
                <Monitor className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('oled_tv_test')}</h3>
                <p className="text-slate-600 text-sm mb-4">{translate('oled_tv_test_description')}</p>
                <div className="flex items-center text-indigo-600 font-semibold text-sm">
                  {translate('test_now')} <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-alt">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{translate('features_title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: translate('feature_instant'),
                description: translate('feature_instant_desc'),
              },
              {
                icon: Smartphone,
                title: translate('feature_comprehensive'),
                description: translate('feature_comprehensive_desc'),
              },
              {
                icon: Shield,
                title: translate('feature_professional'),
                description: translate('feature_professional_desc'),
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card">
                  <Icon className="w-8 h-8 text-cyan-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{translate('use_cases_title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: translate('display_testing_title'),
                description: translate('display_testing_desc'),
                tools: [translate('dead_pixel_test'), translate('color_accuracy_test'), translate('screen_uniformity_test')],
              },
              {
                title: translate('photography_lighting_title'),
                description: translate('photography_lighting_desc'),
                tools: [translate('white_screen'), translate('color_screens'), translate('zoom_lighting')],
              },
              {
                title: translate('video_production_title'),
                description: translate('video_production_desc'),
                tools: [translate('green_screen'), translate('blue_screen'), translate('brightness_test')],
              },
              {
                title: translate('gaming_streaming_title'),
                description: translate('gaming_streaming_desc'),
                tools: [translate('color_test'), translate('brightness_test'), translate('contrast_test')],
              },
            ].map((useCase, index) => (
              <div key={index} className="card">
                <h3 className="text-2xl font-bold mb-3 text-cyan-600">{useCase.title}</h3>
                <p className="text-slate-700 mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Tools & Resources Section */}
      <section className="section">
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
                {translate('tools_refresh_calculator_desc')}
              </p>
              <span className="text-purple-600 font-semibold inline-flex items-center">
                {translate('tools_calculate_cta' as any)}
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
                {translate('tools_pixel_calculator_desc')}
              </p>
              <span className="text-emerald-700 font-semibold inline-flex items-center">
                {translate('tools_calculate_cta' as any)}
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
                {translate('tools_monitor_comparison_desc')}
              </p>
              <span className="text-orange-700 font-semibold inline-flex items-center">
                {translate('tools_compare_cta' as any)}
              </span>
            </Link>
          </div>

          {/* Comparisons Callout */}
          <div className="mt-12 rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-8 shadow-2xl shadow-cyan-950/40">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-3 text-slate-100">📊 {translate('compare_page_title')}</h3>
              <p className="text-slate-300 mb-6">
                {translate('home_compare_callout_desc' as any)}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href={getLocalizedPath(locale, '/compare/ips-vs-va-vs-tn')}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-center transition-all hover:border-cyan-400 hover:bg-slate-800"
              >
                <p className="font-semibold text-cyan-300">IPS vs VA vs TN</p>
                <p className="text-xs text-slate-300">{translate('home_compare_panel_types' as any)}</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/144hz-vs-240hz')}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-center transition-all hover:border-cyan-400 hover:bg-slate-800"
              >
                <p className="font-semibold text-cyan-300">144Hz vs 240Hz</p>
                <p className="text-xs text-slate-300">{translate('home_compare_refresh_rates' as any)}</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/asus-vs-lg')}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-center transition-all hover:border-cyan-400 hover:bg-slate-800"
              >
                <p className="font-semibold text-cyan-300">ASUS vs LG</p>
                <p className="text-xs text-slate-300">{translate('home_compare_brands' as any)}</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/tools')}
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-center transition-all hover:border-cyan-400 hover:bg-slate-800"
              >
                <p className="font-semibold text-cyan-300">{translate('home_compare_see_all' as any)}</p>
                <p className="text-xs text-slate-300">{translate('home_compare_count_label' as any)}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt">
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
