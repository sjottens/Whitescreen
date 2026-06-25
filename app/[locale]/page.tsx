// app/[locale]/page.tsx - Locale-aware homepage with modern design

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Smartphone, Shield, Monitor, Gamepad2, Sparkles } from 'lucide-react';
import { generateMultilingualMetadata, faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { COLOR_TOOLS, TEST_TOOLS, FAQ_ITEMS } from '@/lib/constants';
import { t } from '@/lib/translations';
import { LinkButton } from '@/components/ui/button';
import { getLocalizedPath } from '@/lib/link-utils';
import ModernHeroBackground from '@/components/ui/modern-hero-background';

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

      {/* Hero Section - Modern Design */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <ModernHeroBackground />
        
        {/* Gradient overlays for depth - positioned below particles */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-slate-950 pointer-events-none -z-20" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#00DC82]/10 border border-[#00DC82]/30 mb-8 animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-[#00DC82]" />
              <span className="text-sm font-semibold text-[#00DC82]">Modern • Award-Worthy • Next Generation</span>
            </div>

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
                href={getLocalizedPath(locale, '/white-screen')} 
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

      {/* Featured Tools Grid - Modern Cards */}
      <section className="section bg-gradient-to-b from-slate-950 to-slate-900">
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
              {translate('browse_all_tools').replace('{count}', String(COLOR_TOOLS.length + TEST_TOOLS.length))}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Dead Pixel Fixer Banner - Premium CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950">
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
                <span className="text-xs font-bold text-[#00DC82] uppercase tracking-wider">New Tool</span>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="block text-white mb-2">Fix Your Screen</span>
                  <span className="block bg-gradient-to-r from-[#00DC82] to-emerald-400 bg-clip-text text-transparent">Dead Pixel Fixer</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                  Repair stuck pixels with our free online tool. Using advanced color stimulation and multiple repair modes, our Dead Pixel Fixer helps revive stuck pixels on LCD, LED, and OLED displays. Success rate: 10-40% for stuck pixels.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 py-6 border-t border-[#00DC82]/20">
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-[#00DC82] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Multiple Modes</p>
                    <p className="text-sm text-slate-400">RGB, RGB+White+Black, Random</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-[#00DC82] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Fullscreen Support</p>
                    <p className="text-sm text-slate-400">Optimal coverage & immersion</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Check className="w-5 h-5 text-[#00DC82] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Real-time Stats</p>
                    <p className="text-sm text-slate-400">FPS & elapsed time tracking</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                  href={getLocalizedPath(locale, '/dead-pixel-fixer')}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00DC82] to-emerald-500 text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,220,130,0.4)] transition-all duration-300 hover:scale-105 group"
                >
                  <span>Launch Dead Pixel Fixer</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-slate-400 whitespace-nowrap">100% Free • No Registration</p>
              </div>
            </div>
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

      {/* How to Fix Dead Pixels Section */}
      <section className="section bg-gradient-to-r from-slate-900 to-slate-950">
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
                key={index}
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
