// app/[locale]/(website)/tools/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Monitor, Smartphone, Gamepad2, ArrowRight } from 'lucide-react';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';
import { getComparisonData } from '@/lib/comparisons';
import { LinkButton } from '@/components/ui/button';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('tools_title'),
    description: translate('tools_description'),
    path: '/tools',
  });
}

interface ToolsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const brandComparisonSlugs = ['asus-vs-lg', 'asus-vs-dell', 'lg-vs-samsung'];
  const specComparisonSlugs = ['ips-vs-va-vs-tn', '144hz-vs-240hz', 'curved-vs-flat'];
  const deviceComparisonSlugs = ['ps5-vs-xbox-series-x', 'ultrawide-vs-dual-monitor'];

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
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
          { name: translate('tools') },
        ]}
      />

      {/* Sticky Back to Home Bar */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-blue-200 backdrop-blur-sm">
        <div className="container px-4 py-4 flex items-center justify-between">
          <LinkButton 
            href={getLocalizedPath(locale, '/')} 
            variant="secondary"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {translate('back_to_home')}
          </LinkButton>
        </div>
      </div>

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('tools_title')}</h1>
          <p className="text-xl text-slate-700">
            {translate('tools_description')}
          </p>
        </div>
      </section>

      {/* Color Tools */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{translate('color_screens')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLOR_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="card group hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-full h-32 rounded-lg mb-4 border border-slate-200"
                  style={{ backgroundColor: tool.color }}
                />
                <h3 className="text-xl font-bold mb-2">{translate(tool.nameKey as any)}</h3>
                <p className="text-slate-600 text-sm">{translate(tool.descriptionKey as any)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Test Tools */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{translate('testing_tools')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEST_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="card group hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{translate(tool.nameKey as any)}</h3>
                <p className="text-slate-600 text-sm mb-4">{translate(tool.descriptionKey as any)}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.keywords.slice(0, 2).map((keyword) => (
                    <span key={keyword} className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded text-xs">
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Monitor Brand Tests */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{translate('monitor_tests')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {translate('tools_monitor_intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href={getLocalizedPath(locale, '/monitor-test/asus')}
              className="card group hover:shadow-lg transition-all border-l-4 border-blue-500"
            >
              <Monitor className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_asus')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_asus_description')}</p>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/monitor-test/lg')}
              className="card group hover:shadow-lg transition-all border-l-4 border-red-500"
            >
              <Monitor className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_lg')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_lg_description')}</p>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/monitor-test/samsung')}
              className="card group hover:shadow-lg transition-all border-l-4 border-cyan-500"
            >
              <Monitor className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_samsung')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_samsung_description')}</p>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/monitor-test/dell')}
              className="card group hover:shadow-lg transition-all border-l-4 border-purple-500"
            >
              <Monitor className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_dell')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_dell_description')}</p>
            </Link>
          </div>

          {/* CTA for more brands */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 text-center">
            <p className="text-slate-700 mb-4">
              <strong>{translate('tools_monitor_support_title')}</strong> {translate('tools_monitor_support_desc')}
            </p>
            <p className="text-sm text-slate-600 mb-6">
              {translate('tools_monitor_url_hint')} <code className="bg-white px-2 py-1 rounded">/monitor-test/benq</code>, 
              <code className="bg-white px-2 py-1 rounded ml-2">/monitor-test/alienware</code>.
            </p>
            <LinkButton
              href={getLocalizedPath(locale, '/monitor-test/benq')}
              variant="primary"
              size="lg"
            >
              {translate('tools_browse_more_brands')} <ArrowRight className="w-5 h-5 ml-2" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Device-Specific Tests */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{translate('device_tests_title')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {translate('tools_device_intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href={getLocalizedPath(locale, '/iphone-screen-test')}
              className="card group hover:shadow-lg transition-all border-l-4 border-gray-500"
            >
              <Smartphone className="w-8 h-8 text-gray-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('iphone_test')}</h3>
              <p className="text-slate-600 text-sm">{translate('iphone_test_description')}</p>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/macbook-screen-test')}
              className="card group hover:shadow-lg transition-all border-l-4 border-slate-500"
            >
              <Smartphone className="w-8 h-8 text-slate-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('macbook_test')}</h3>
              <p className="text-slate-600 text-sm">{translate('macbook_test_description')}</p>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/gaming-monitor-test')}
              className="card group hover:shadow-lg transition-all border-l-4 border-orange-500"
            >
              <Gamepad2 className="w-8 h-8 text-orange-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('gaming_monitor_test')}</h3>
              <p className="text-slate-600 text-sm">{translate('gaming_monitor_test_description')}</p>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/oled-tv-test')}
              className="card group hover:shadow-lg transition-all border-l-4 border-indigo-500"
            >
              <Monitor className="w-8 h-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('oled_tv_test')}</h3>
              <p className="text-slate-600 text-sm">{translate('oled_tv_test_description')}</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Calculator & Utility Tools */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">📊 {translate('tools_calculators_title')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {translate('tools_calculators_intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href={getLocalizedPath(locale, '/tools/refresh-rate-calculator')}
              className="card group hover:shadow-lg transition-all border-l-4 border-purple-500"
            >
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">{translate('refresh_rate_calculator')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {translate('tools_refresh_calculator_desc')}
              </p>
              <span className="text-purple-600 font-semibold text-sm">{translate('tools_explore_cta' as any)}</span>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/tools/pixel-density-calculator')}
              className="card group hover:shadow-lg transition-all border-l-4 border-emerald-500"
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-2">{translate('pixel_density_calculator')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {translate('tools_pixel_calculator_desc')}
              </p>
              <span className="text-emerald-600 font-semibold text-sm">{translate('tools_calculate_cta' as any)}</span>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/tools/monitor-comparison')}
              className="card group hover:shadow-lg transition-all border-l-4 border-orange-500"
            >
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold mb-2">{translate('monitor_comparison_tool')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {translate('tools_monitor_comparison_desc')}
              </p>
              <span className="text-orange-600 font-semibold text-sm">{translate('tools_compare_cta' as any)}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Guides */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">🔄 {translate('compare_page_title')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {translate('compare_page_description')}
          </p>
          
          {/* Brand Comparisons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">{translate('compare_brand_section_title' as any)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandComparisonSlugs.map((slug) => {
                const comparison = getComparisonData(slug);
                if (!comparison) return null;
                return (
                  <Link
                    key={slug}
                    href={getLocalizedPath(locale, `/compare/${slug}`)}
                    className="card hover:shadow-lg transition-all p-4 border-l-4 border-blue-500"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2">{translate(comparison.titleKey as any)}</h4>
                    <p className="text-sm text-slate-600">{translate(comparison.descriptionKey as any)}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Spec Comparisons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">{translate('compare_spec_section_title' as any)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specComparisonSlugs.map((slug) => {
                const comparison = getComparisonData(slug);
                if (!comparison) return null;
                return (
                  <Link
                    key={slug}
                    href={getLocalizedPath(locale, `/compare/${slug}`)}
                    className="card hover:shadow-lg transition-all p-4 border-l-4 border-green-500"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2">{translate(comparison.titleKey as any)}</h4>
                    <p className="text-sm text-slate-600">{translate(comparison.descriptionKey as any)}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Device Comparisons */}
          <div>
            <h3 className="text-xl font-bold mb-6">{translate('compare_device_section_title' as any)}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deviceComparisonSlugs.map((slug) => {
                const comparison = getComparisonData(slug);
                if (!comparison) return null;
                return (
                  <Link
                    key={slug}
                    href={getLocalizedPath(locale, `/compare/${slug}`)}
                    className="card hover:shadow-lg transition-all p-4 border-l-4 border-orange-500"
                  >
                    <h4 className="font-semibold text-slate-900 mb-2">{translate(comparison.titleKey as any)}</h4>
                    <p className="text-sm text-slate-600">{translate(comparison.descriptionKey as any)}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
