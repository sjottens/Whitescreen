// app/[locale]/tools/pixel-density-calculator/page.tsx
// Calculate pixel density and DPI for any screen

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import PixelDensityCalculator from '@/components/tools/pixel-density-calculator';
import InformationalContent from '@/components/tools/informational-content';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { getLocaleFromParams } from '@/lib/i18n';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('pixel_density_page_title' as any),
    description: translate('pixel_density_page_description' as any),
    path: '/tools/pixel-density-calculator',
    keywords: [
      translate('pixel_density_keyword_1' as any),
      translate('pixel_density_keyword_2' as any),
      translate('pixel_density_keyword_3' as any),
      translate('pixel_density_keyword_4' as any),
    ],
  });
}

interface PixelDensityCalculatorPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PixelDensityCalculatorPage({ params }: PixelDensityCalculatorPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('pixel_density_calculator'), path: '/tools/pixel-density-calculator' },
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
          { name: translate('pixel_density_calculator') },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('pixel_density_calculator')}
          </h1>
          <p className="text-xl text-slate-700">
            {translate('pixel_density_page_header_desc' as any)}
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="container max-w-4xl">
          <PixelDensityCalculator />

          {/* Info Section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">{translate('pixel_density_understanding_title' as any)}</h2>
            <p>
              {translate('pixel_density_understanding_desc' as any)}
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">{translate('pixel_density_standards_title' as any)}</h3>
            <ul>
              <li>
                <strong>{translate('pixel_density_standard_1_title' as any)}</strong> - {translate('pixel_density_standard_1_desc' as any)}
              </li>
              <li>
                <strong>{translate('pixel_density_standard_2_title' as any)}</strong> - {translate('pixel_density_standard_2_desc' as any)}
              </li>
              <li>
                <strong>{translate('pixel_density_standard_3_title' as any)}</strong> - {translate('pixel_density_standard_3_desc' as any)}
              </li>
              <li>
                <strong>{translate('pixel_density_standard_4_title' as any)}</strong> - {translate('pixel_density_standard_4_desc' as any)}
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">{translate('pixel_density_common_table_title' as any)}</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">{translate('pixel_density_table_monitor_size' as any)}</th>
                  <th className="border p-3 text-left">1080p</th>
                  <th className="border p-3 text-left">1440p</th>
                  <th className="border p-3 text-left">4K</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">24&quot;</td>
                  <td className="border p-3">92 PPI</td>
                  <td className="border p-3">122 PPI</td>
                  <td className="border p-3">184 PPI</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border p-3">27&quot;</td>
                  <td className="border p-3">82 PPI</td>
                  <td className="border p-3">109 PPI</td>
                  <td className="border p-3">163 PPI</td>
                </tr>
                <tr>
                  <td className="border p-3">32&quot;</td>
                  <td className="border p-3">69 PPI</td>
                  <td className="border p-3">92 PPI</td>
                  <td className="border p-3">138 PPI</td>
                </tr>
              </tbody>
            </table>
          </div>

          <InformationalContent locale={locale} topic="pixel-density" />
        </div>
      </section>
    </>
  );
}
