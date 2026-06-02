// app/[locale]/tools/monitor-comparison/page.tsx
// Compare monitor specifications side by side

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import MonitorComparisonTool from '@/components/tools/monitor-comparison-tool';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  return generateMultilingualMetadata({
    locale: 'en',
    title: 'Monitor Comparison Tool - Compare Specs Side by Side',
    description:
      'Compare monitor specifications side by side. Find differences in resolution, refresh rate, panel type, and more.',
    path: '/tools/monitor-comparison',
    keywords: ['monitor comparison', 'compare monitors', 'monitor specs', 'monitor vs monitor'],
  });
}

export default function MonitorComparisonPage() {
  const translate = t('en');

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: 'Monitor Comparison', path: '/tools/monitor-comparison' },
    ],
    'en'
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
          { name: translate('home'), path: getLocalizedPath('en', '/') },
          { name: translate('tools'), path: getLocalizedPath('en', '/tools') },
          { name: 'Monitor Comparison' },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Monitor Comparison Tool
          </h1>
          <p className="text-xl text-slate-700">
            Compare up to 3 monitors side by side. Analyze specs and make informed decisions.
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
