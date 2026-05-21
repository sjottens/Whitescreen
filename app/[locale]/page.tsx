// app/[locale]/page.tsx - Locale-aware homepage with dynamic metadata and hreflang

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap, Smartphone, Shield, Cpu } from 'lucide-react';
import { generateMultilingualMetadata, faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { COLOR_TOOLS, TEST_TOOLS, FAQ_ITEMS } from '@/lib/constants';
import { t } from '@/lib/translations';
import { LinkButton } from '@/components/ui/button';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'Screenglow - Free Screen Testing & Display Tools',
    description:
      'Elite free screen testing and display tools for photographers, videographers, gamers, and professionals. Test dead pixels, monitor colors, and more.',
    path: '/',
    keywords: [
      'white screen',
      'screen test',
      'dead pixel test',
      'monitor test',
      'free screen tools',
      'display test',
    ],
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
    { name: 'Home', path: '/' },
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
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              {translate('hero_title')} <span className="text-cyan-600">Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              {translate('hero_subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <LinkButton href={`/${locale !== 'en' ? locale : ''}${locale !== 'en' ? '/' : ''}white-screen`.replace(/\/+/g, '/')} size="lg" variant="primary" className="sm:w-auto">
                {translate('btn_start_testing')} <ArrowRight className="w-5 h-5 ml-2" />
              </LinkButton>
              <LinkButton href={`/${locale !== 'en' ? locale : ''}${locale !== 'en' ? '/' : ''}tools`.replace(/\/+/g, '/')} size="lg" variant="outline" className="sm:w-auto">
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
                href={`/${locale !== 'en' ? locale : ''}${locale !== 'en' ? '/' : ''}${tool.path}`.replace(/\/+/g, '/')}
                className="group relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: tool.color }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{tool.name}</h3>
                  <p className="text-white/80 text-sm">{tool.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <LinkButton href={`/${locale !== 'en' ? locale : ''}${locale !== 'en' ? '/' : ''}tools`.replace(/\/+/g, '/')} variant="outline" size="lg">
              Browse All {COLOR_TOOLS.length + TEST_TOOLS.length}+ Tools
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Use Cases</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Display Testing',
                description: 'Check for dead pixels, uniformity, and color accuracy on any monitor or TV.',
                tools: ['Dead Pixel Test', 'Color Accuracy Test', 'Screen Uniformity Test'],
              },
              {
                title: 'Photography Lighting',
                description: 'Use your monitor as a professional fill light for product and studio photography.',
                tools: ['White Screen', 'Color Screen Tools', 'Zoom Lighting'],
              },
              {
                title: 'Video Production',
                description: 'Green and blue screens for chroma key effects in your productions.',
                tools: ['Green Screen', 'Blue Screen', 'Brightness Test'],
              },
              {
                title: 'Gaming & Streaming',
                description: 'Optimize display settings and test performance metrics.',
                tools: ['Color Test', 'Brightness Test', 'Contrast Test'],
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

      {/* CTA Section */}
      <section className="section-alt">
        <div className="container max-w-3xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Test Your Display?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Choose from our collection of professional-grade tools. No sign-up required.
            </p>
            <LinkButton href={`/${locale !== 'en' ? locale : ''}${locale !== 'en' ? '/' : ''}white-screen`.replace(/\/+/g, '/')} size="lg" variant="primary">
              Start Testing Now
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
