// app/page.tsx - English homepage (root /)

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Smartphone, Shield, Monitor, Gamepad2 } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { COLOR_TOOLS, TEST_TOOLS, FAQ_ITEMS } from '@/lib/constants';
import { t } from '@/lib/translations';
import { LinkButton } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: `TestaScreen - Free Screen Testing & Display Tools | ${SITE_NAME}`,
  description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: `TestaScreen - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
    url: `${SITE_URL}`,
    type: 'website',
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `TestaScreen - Free Screen Testing & Display Tools | ${SITE_NAME}`,
    description: 'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
  },
};

export default function RootPage() {
  const locale = 'en';
  const translate = t(locale);

  const faqData = faqSchema(FAQ_ITEMS);
  const breadcrumbs = breadcrumbSchemaMultilingual([
    { name: 'Home', path: '/' },
  ], locale);

  return (
    <>
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

      <Header locale="en" />
      <main id="main-content" className="flex-1 w-full">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {translate('hero_title')} <span className="text-cyan-600">Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              {translate('hero_subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <LinkButton href="/white-screen" size="lg" variant="primary" className="sm:w-auto">
                {translate('btn_start_testing')} <ArrowRight className="w-5 h-5 ml-2" />
              </LinkButton>
              <LinkButton href="/tools" size="lg" variant="outline" className="sm:w-auto">
                {translate('btn_view_tools')}
              </LinkButton>
            </div>

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
                href={tool.path}
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <LinkButton href="/tools" variant="outline" size="lg">
              {translate('browse_all_tools').replace('{count}', String(COLOR_TOOLS.length + TEST_TOOLS.length))}
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Monitor Tests */}
      <section className="section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{translate('monitor_tests')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/monitor-test/asus" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <Monitor className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_asus')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_asus_description')}</p>
            </Link>

            <Link href="/monitor-test/lg" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-red-500">
              <Monitor className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_lg')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_lg_description')}</p>
            </Link>

            <Link href="/monitor-test/samsung" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-cyan-500">
              <Monitor className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_samsung')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_samsung_description')}</p>
            </Link>

            <Link href="/monitor-test/dell" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
              <Monitor className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold mb-2">{translate('monitor_dell')}</h3>
              <p className="text-slate-600 text-sm mb-4">{translate('monitor_dell_description')}</p>
            </Link>
          </div>

          <div className="mt-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{translate('device_tests_title')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/iphone-screen-test" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-gray-500">
                <Smartphone className="w-8 h-8 text-gray-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('iphone_test')}</h3>
              </Link>

              <Link href="/macbook-screen-test" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-slate-500">
                <Smartphone className="w-8 h-8 text-slate-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('macbook_test')}</h3>
              </Link>

              <Link href="/gaming-monitor-test" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-orange-500">
                <Gamepad2 className="w-8 h-8 text-orange-700 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('gaming_monitor_test')}</h3>
              </Link>

              <Link href="/oled-tv-test" className="group card hover:shadow-lg transition-all duration-300 border-l-4 border-indigo-500">
                <Monitor className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{translate('oled_tv_test')}</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{translate('features_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: translate('feature_instant'), description: translate('feature_instant_desc') },
              { icon: Smartphone, title: translate('feature_comprehensive'), description: translate('feature_comprehensive_desc') },
              { icon: Shield, title: translate('feature_professional'), description: translate('feature_professional_desc') },
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

      {/* CTA */}
      <section className="section-alt">
        <div className="container max-w-3xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">{translate('cta_ready_title')}</h2>
            <p className="text-lg text-slate-600 mb-8">{translate('cta_ready_desc')}</p>
            <LinkButton href="/white-screen" size="lg" variant="primary">
              {translate('cta_start_testing')}
            </LinkButton>
          </div>
        </div>
      </section>

      </main>
      <Footer locale="en" />
    </>
  );
}


