// app/[locale]/(website)/monitor-test/page.tsx - Monitor Test Browser Landing Page

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Monitor } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { LinkButton } from '@/components/ui/button';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { getMonitorBrandsSorted } from '@/lib/monitor-brands';

export async function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: 'Test Your Monitor - 50+ Brands',
    description: 'Find your monitor brand and access specialized test pages optimized for your display.',
    path: '/monitor-test',
    keywords: ['monitor test', 'brand test', 'display test'],
  });
}

interface MonitorTestPageProps {
  params: Promise<{ locale: string }>;
}

export default async function MonitorTestPage({ params }: MonitorTestPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const brands = getMonitorBrandsSorted();

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: 'Monitor Test Brands', path: '/monitor-test' },
    ],
    locale
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('tools'), path: getLocalizedPath(locale, '/tools') },
          { name: 'Monitor Brands' },
        ]}
      />

      {/* Sticky Back to Tools Bar */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-blue-200 backdrop-blur-sm">
        <div className="container px-4 py-4 flex items-center justify-between">
          <LinkButton 
            href={getLocalizedPath(locale, '/tools')} 
            variant="secondary"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {translate('back_to_tools')}
          </LinkButton>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Test Your Monitor</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">50+ Monitor Brands</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            Select your monitor brand below to access specialized test pages optimized for your specific display model and specifications.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="section">
        <div className="container">
          <div className="mb-8">
            <p className="text-slate-600">
              Browse all {brands.length} supported monitor brands, from gaming-focused manufacturers to professional display makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={getLocalizedPath(locale, `/monitor-test/${brand.id}`)}
                className="group card p-4 hover:shadow-lg transition-all hover:border-blue-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {translate(brand.nameKey as any)}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{translate(brand.descriptionKey as any)}</p>
                  </div>
                  <div className="text-blue-400 group-hover:text-blue-600 transition-colors">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't see your brand?</h2>
          <p className="text-slate-600 mb-6">
            All monitor tests work with any brand. Use our general display tests for comprehensive monitor evaluation.
          </p>
          <LinkButton 
            href={getLocalizedPath(locale, '/tools')}
            variant="primary"
            size="lg"
          >
            Back to All Tools
          </LinkButton>
        </div>
      </section>
    </>
  );
}
