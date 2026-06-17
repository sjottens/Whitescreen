// app/[locale]/tools/monitor-comparison/page.tsx
// Compare monitor specifications side by side

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import MonitorComparisonTool from '@/components/tools/monitor-comparison-tool';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('monitor_comparison_page_title' as any),
    description: translate('monitor_comparison_page_description' as any),
    path: '/tools/monitor-comparison',
    keywords: ['monitor comparison', 'compare monitors', 'monitor specs', 'monitor vs monitor'],
  });
}

export default async function MonitorComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('monitor_comparison_page_breadcrumb' as any), path: '/tools/monitor-comparison' },
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
          { name: translate('monitor_comparison_page_breadcrumb' as any) },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('monitor_comparison_page_heading' as any)}
          </h1>
          <p className="text-xl text-slate-700">
            {translate('monitor_comparison_page_subheading' as any)}
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="section">
        <div className="container max-w-6xl">
          <MonitorComparisonTool />
        </div>
      </section>
    </>
  );
}
