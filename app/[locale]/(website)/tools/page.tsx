// app/[locale]/(website)/tools/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Monitor, ArrowRight } from 'lucide-react';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';
import { LinkButton } from '@/components/ui/button';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('resources_title'),
    description: translate('resources_description'),
    path: '/tools',
  });
}

interface ToolsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
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
          { name: translate('resources') },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('resources_title')}</h1>
          <p className="text-xl text-slate-700">
            {translate('resources_description')}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Monitor Tests */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{translate('monitor_tests')}</h2>
          <Link
            href={getLocalizedPath(locale, '/monitor-test')}
            className="card group hover:shadow-lg transition-all border-l-4 border-blue-500 flex items-center gap-4"
          >
            <Monitor className="w-8 h-8 text-blue-600 shrink-0" />
            <span className="text-xl font-bold flex-1">{translate('monitor_tests')}</span>
            <ArrowRight className="w-5 h-5 text-blue-600" />
          </Link>
        </div>
      </section>

      {/* Calculator & Utility Tools */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">📊 {translate('resources_calculators_title')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            {translate('resources_calculators_intro')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href={getLocalizedPath(locale, '/tools/refresh-rate-calculator')}
              className="card group hover:shadow-lg transition-all border-l-4 border-purple-500"
            >
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">{translate('refresh_rate_calculator')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {translate('resources_refresh_calculator_desc')}
              </p>
              <span className="text-purple-600 font-semibold text-sm">{translate('resources_explore_cta' as any)}</span>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/tools/pixel-density-calculator')}
              className="card group hover:shadow-lg transition-all border-l-4 border-emerald-500"
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-2">{translate('pixel_density_calculator')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {translate('resources_pixel_calculator_desc')}
              </p>
              <span className="text-emerald-600 font-semibold text-sm">{translate('resources_calculate_cta' as any)}</span>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/tools/monitor-comparison')}
              className="card group hover:shadow-lg transition-all border-l-4 border-orange-500"
            >
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold mb-2">{translate('monitor_comparison_tool')}</h3>
              <p className="text-slate-600 text-sm mb-4">
                {translate('resources_monitor_comparison_desc')}
              </p>
              <span className="text-orange-600 font-semibold text-sm">{translate('resources_compare_cta' as any)}</span>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
