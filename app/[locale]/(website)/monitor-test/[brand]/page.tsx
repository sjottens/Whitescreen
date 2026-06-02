// app/[locale]/(website)/monitor-test/[brand]/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import { MONITOR_BRANDS, getMonitorBrandSlugs } from '@/lib/monitor-brands';

/**
 * Generate static params for all monitor brands across all non-default locales
 * English pages are served at root (e.g., /monitor-test/samsung), not /en/monitor-test/samsung
 * This prevents duplicate content issues with canonical tags
 * Now dynamically generates 50+ monitor brand pages from centralized database
 */
export async function generateStaticParams() {
  const brandSlugs = getMonitorBrandSlugs();
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).flatMap((locale) =>
    brandSlugs.map((brand) => ({
      locale,
      brand,
    }))
  );
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string; brand: string }>;
}): Promise<Metadata> {
  const { locale, brand } = await props.params;
  const translate = t(locale as any);
  const brandData = MONITOR_BRANDS[brand];

  if (!brandData) {
    return { title: 'Not Found' };
  }

  return generateMultilingualMetadata({
    locale: locale as any,
    title: translate(brandData.titleKey as any),
    description: translate(brandData.descriptionKey as any),
    path: `/monitor-test/${brand}`,
    keywords: [...brandData.keywords, 'monitor test', 'display test', 'screen quality'],
  });
}

interface MonitorTestPageProps {
  params: Promise<{ locale: string; brand: string }>;
}

export default async function MonitorTestPage({ params }: MonitorTestPageProps) {
  const { locale, brand } = await params;
  const translate = t(locale as any);
  const brandData = MONITOR_BRANDS[brand];

  if (!brandData) {
    return <div>Monitor brand not found</div>;
  }

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate(brandData.nameKey as any), path: `/monitor-test/${brand}` },
    ],
    locale as any
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
          { name: translate('tools'), path: getLocalizedPath(locale as any, '/tools') },
          { name: translate(brandData.nameKey as any) },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate(brandData.titleKey as any)}
          </h1>
          <p className="text-xl text-slate-700">
            {translate(brandData.descriptionKey as any)}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed">
                {translate(brandData.introKey as any)}
              </p>
            </div>
          </div>

          {/* Monitor Tests Grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('monitor_tests')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/screen/red-screen/4k', title: 'Red 4K', icon: '🔴' },
                { path: '/screen/blue-screen/4k', title: 'Blue 4K', icon: '🔵' },
                { path: '/screen/green-screen/4k', title: 'Green 4K', icon: '🟢' },
                { path: '/screen/white-screen/fullscreen', title: 'White Full Screen', icon: '⚪' },
                { path: '/screen/black-screen/fullscreen', title: 'Black Full Screen', icon: '⚫' },
                { path: '/brightness-test', title: 'Brightness Test', icon: '☀️' },
              ].map((test) => (
                <Link
                  key={test.path}
                  href={getLocalizedPath(locale as any, test.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <div className="text-4xl mb-3">{test.icon}</div>
                  <h3 className="font-bold text-lg group-hover:text-cyan-600">{test.title}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('faq')}</h2>
            <div className="space-y-4">
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('monitor_faq_1_q' as any)}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('monitor_faq_1_a' as any)}
                </p>
              </details>
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('monitor_faq_2_q' as any)}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('monitor_faq_2_a' as any)}
                </p>
              </details>
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('monitor_faq_3_q' as any)}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('monitor_faq_3_a' as any)}
                </p>
              </details>
            </div>
          </div>

          {/* Related Monitor Tests */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('related_monitor_tests')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(MONITOR_BRANDS)
                .filter(([b]) => b !== brand)
                .map(([b, data]) => (
                  <Link
                    key={b}
                    href={getLocalizedPath(locale as any, `/monitor-test/${b}`)}
                    className="card p-6 hover:shadow-lg transition-all group"
                  >
                    <h3 className="font-bold text-lg group-hover:text-cyan-600">
                      {translate(data.nameKey as any)} Monitor Test
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {translate(data.descriptionKey as any)}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
