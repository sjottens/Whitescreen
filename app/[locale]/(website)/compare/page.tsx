// app/[locale]/(website)/compare/page.tsx - Monitor Comparisons Landing Page

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BarChart3 } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { LinkButton } from '@/components/ui/button';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { getComparisonSlugs, getComparisonData } from '@/lib/comparisons';

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
    title: translate('compare_page_title'),
    description: translate('compare_page_description'),
    path: '/compare',
    keywords: [translate('compare_keyword_1'), translate('compare_keyword_2'), translate('compare_keyword_3'), translate('compare_keyword_4')],
  });
}

interface ComparePageProps {
  params: Promise<{ locale: string }>;
}

export default async function ComparePage({ params }: ComparePageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const comparisons = getComparisonSlugs();

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('compare_page_title'), path: '/compare' },
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
          { name: translate('resources'), path: getLocalizedPath(locale, '/tools') },
          { name: translate('compare_nav_label') },
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
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{translate('compare_badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('compare_page_title')}</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {translate('compare_page_description')}
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="section">
        <div className="container">
          <div className="mb-8">
            <p className="text-slate-600">
              {translate('compare_browse_intro')} {comparisons.length}+ {translate('compare_browse_suffix')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparisons
              .map((slug) => ({
                slug,
                comparison: getComparisonData(slug),
              }))
              .filter((item) => item.comparison !== null)
              .map(({ slug, comparison }) => (
                <Link
                  key={slug}
                  href={getLocalizedPath(locale, `/compare/${slug}`)}
                  className="group card p-4 hover:shadow-lg transition-all hover:border-blue-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {translate(comparison!.titleKey as any)}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2">{translate(comparison!.descriptionKey as any)}</p>
                    </div>
                    <div className="text-blue-400 group-hover:text-blue-600 transition-colors text-xl">→</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-alt">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{translate('compare_why_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{translate('compare_feature_1_title')}</h3>
              <p className="text-slate-600">
                {translate('compare_feature_1_desc')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{translate('compare_feature_2_title')}</h3>
              <p className="text-slate-600">
                {translate('compare_feature_2_desc')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{translate('compare_feature_3_title')}</h3>
              <p className="text-slate-600">
                {translate('compare_feature_3_desc')}
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{translate('compare_feature_4_title')}</h3>
              <p className="text-slate-600">
                {translate('compare_feature_4_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{translate('compare_cta_title')}</h2>
          <p className="text-slate-600 mb-6">
            {translate('compare_cta_desc')}
          </p>
          <LinkButton 
            href={getLocalizedPath(locale, '/tools')}
            variant="primary"
            size="lg"
          >
            {translate('compare_cta_button')}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
