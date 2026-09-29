// app/(site)/tools/monitor-comparison/page.tsx
// Compare monitor specifications side by side

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import MonitorComparisonTool from '@/components/tools/monitor-comparison-tool';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {

  return pageMetadata({
    title: translate('monitor_comparison_page_title' as any),
    description: translate('monitor_comparison_page_description' as any),
    path: '/tools/monitor-comparison',
    keywords: ['monitor comparison', 'compare monitors', 'monitor specs', 'monitor vs monitor'],
  });
}

export default async function MonitorComparisonPage() {

  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('monitor_comparison_page_breadcrumb' as any), path: '/tools/monitor-comparison' },
    ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: '/' },
          { name: translate('resources'), path: '/tools' },
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
          <MonitorComparisonTool strings={getClientStrings('monitorComparisonTool')} />
        </div>
      </section>
    </>
  );
}
