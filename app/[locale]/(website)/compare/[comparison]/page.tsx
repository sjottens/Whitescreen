// app/[locale]/(website)/compare/[comparison]/page.tsx
// Dynamic comparison pages for monitors, specs, and devices

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COMPARISONS, getComparisonSlugs, getRelatedComparisons } from '@/lib/comparisons';

/**
 * Generate static params for all comparison pages
 * English pages are served at root (e.g., /compare/asus-vs-lg), not /en/compare/asus-vs-lg
 */
export async function generateStaticParams() {
  const comparisonSlugs = getComparisonSlugs();
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).flatMap((locale) =>
    comparisonSlugs.map((comparison) => ({
      locale,
      comparison,
    }))
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; comparison: string }>;
}): Promise<Metadata> {
  const { locale, comparison } = await props.params;
  const translate = t(locale as any);
  const comparisonData = COMPARISONS[comparison];

  if (!comparisonData) {
    return { title: 'Not Found' };
  }

  return generateMultilingualMetadata({
    locale: locale as any,
    title: translate(comparisonData.titleKey as any),
    description: translate(comparisonData.descriptionKey as any),
    path: `/compare/${comparison}`,
    keywords: [
      ...comparisonData.item1.keywords,
      ...comparisonData.item2.keywords,
      ...(comparisonData.item3?.keywords || []),
      'comparison',
      'vs',
      'guide',
    ],
  });
}

interface ComparisonPageProps {
  params: Promise<{ locale: string; comparison: string }>;
}

export default async function ComparisonPage({ params }: ComparisonPageProps) {
  const { locale, comparison } = await params;
  const translate = t(locale as any);
  const comparisonData = COMPARISONS[comparison];

  if (!comparisonData) {
    return (
      <div className="container max-w-4xl py-12">
        <h1 className="text-3xl font-bold mb-4">{translate('compare_not_found_title' as any)}</h1>
        <Link
          href={getLocalizedPath(locale as any, '/tools')}
          className="text-blue-600 hover:text-blue-800"
        >
          ← {translate('back_to_tools')}
        </Link>
      </div>
    );
  }

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(comparisonData.titleKey as any), path: `/compare/${comparison}` },
    ],
    locale as any
  );

  const relatedComparisons = getRelatedComparisons(comparisonData.item1.id).filter(
    (c) => c.id !== comparisonData.id
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
          { name: translate('home'), path: getLocalizedPath(locale as any, '/') },
          { name: translate('resources'), path: getLocalizedPath(locale as any, '/tools') },
          { name: translate(comparisonData.titleKey as any) },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate(comparisonData.titleKey as any)}
          </h1>
          <p className="text-xl text-slate-700">
            {translate(comparisonData.descriptionKey as any)}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {/* Comparison Introduction */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed">
              {translate(comparisonData.contentKey as any)}
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-3 text-left font-semibold text-slate-900">
                    {translate('compare_feature_col_label' as any)}
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-blue-600">
                    {comparisonData.item1.keywords[0]}
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-blue-600">
                    {comparisonData.item2.keywords[0]}
                  </th>
                  {comparisonData.item3 && (
                    <th className="px-6 py-3 text-left font-semibold text-blue-600">
                      {comparisonData.item3.keywords[0]}
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">{translate('compare_type_label' as any)}</td>
                  <td className="px-6 py-4 text-slate-700">{comparisonData.item1.type}</td>
                  <td className="px-6 py-4 text-slate-700">{comparisonData.item2.type}</td>
                  {comparisonData.item3 && (
                    <td className="px-6 py-4 text-slate-700">{comparisonData.item3.type}</td>
                  )}
                </tr>
                <tr className="border-b border-slate-200 hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    {translate('compare_popularity_label' as any)}
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    {comparisonData.item1.searchVolume} {translate('compare_monthly_searches_label' as any)}
                  </td>
                  <td className="px-6 py-4 text-slate-700">
                    {comparisonData.item2.searchVolume} {translate('compare_monthly_searches_label' as any)}
                  </td>
                  {comparisonData.item3 && (
                    <td className="px-6 py-4 text-slate-700">
                      {comparisonData.item3.searchVolume} {translate('compare_monthly_searches_label' as any)}
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">{translate('compare_detail_cta_title' as any)}</h2>
            <p className="text-slate-700 mb-6">
              {translate('compare_detail_cta_desc' as any)}
            </p>
            <Link
              href={getLocalizedPath(locale as any, '/white-screen')}
              className="btn btn-primary"
            >
              {translate('btn_start_testing')} →
            </Link>
          </div>

          {/* Related Comparisons */}
          {relatedComparisons.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">
                {translate('compare_related_title' as any)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {relatedComparisons.slice(0, 4).map((related) => (
                  <Link
                    key={related.id}
                    href={getLocalizedPath(locale as any, `/compare/${related.id}`)}
                    className="card p-4 hover:shadow-lg transition-all group"
                  >
                    <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {translate(related.titleKey as any)}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {translate(related.descriptionKey as any)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
