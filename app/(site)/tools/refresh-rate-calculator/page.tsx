// app/(site)/tools/refresh-rate-calculator/page.tsx
// Interactive tool to calculate optimal refresh rate for gaming

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import RefreshRateCalculator from '@/components/tools/refresh-rate-calculator';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {

  return pageMetadata({
    title: translate('refresh_rate_page_title' as any),
    description: translate('refresh_rate_page_description' as any),
    path: '/tools/refresh-rate-calculator',
    keywords: [
      translate('refresh_rate_keyword_1' as any),
      translate('refresh_rate_keyword_2' as any),
      translate('refresh_rate_keyword_3' as any),
      translate('refresh_rate_keyword_4' as any),
    ],
  });
}

export default async function RefreshRateCalculatorPage() {

  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('refresh_rate_calculator'), path: '/tools/refresh-rate-calculator' },
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
          { name: translate('refresh_rate_calculator') },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('refresh_rate_calculator')}
          </h1>
          <p className="text-xl text-slate-700">
            {translate('refresh_rate_page_header_desc' as any)}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="container max-w-4xl">
          <RefreshRateCalculator strings={getClientStrings('refreshRateCalculator')} />

          {/* Info Section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">{translate('refresh_rate_understanding_title' as any)}</h2>
            <p>
              {translate('refresh_rate_understanding_desc' as any)}
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">{translate('refresh_rate_guidelines_title' as any)}</h3>
            <ul>
              <li>
                <strong>60Hz</strong> - {translate('refresh_rate_guideline_60' as any)}
              </li>
              <li>
                <strong>144Hz</strong> - {translate('refresh_rate_guideline_144' as any)}
              </li>
              <li>
                <strong>240Hz</strong> - {translate('refresh_rate_guideline_240' as any)}
              </li>
              <li>
                <strong>360Hz</strong> - {translate('refresh_rate_guideline_360' as any)}
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">{translate('refresh_rate_fps_vs_hz_title' as any)}</h3>
            <p>
              {translate('refresh_rate_fps_vs_hz_desc' as any)}
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
