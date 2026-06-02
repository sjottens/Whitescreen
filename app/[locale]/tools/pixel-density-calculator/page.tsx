// app/[locale]/tools/pixel-density-calculator/page.tsx
// Calculate pixel density and DPI for any screen

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import PixelDensityCalculator from '@/components/tools/pixel-density-calculator';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  return generateMultilingualMetadata({
    locale: 'en',
    title: 'Pixel Density Calculator - Calculate Monitor DPI & PPI',
    description:
      'Calculate pixel density, DPI, and PPI for any monitor. Enter resolution and screen size to find out display sharpness.',
    path: '/tools/pixel-density-calculator',
    keywords: ['pixel density calculator', 'DPI calculator', 'PPI calculator', 'monitor sharpness'],
  });
}

export default function PixelDensityCalculatorPage() {
  const translate = t('en');

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: 'Pixel Density Calculator', path: '/tools/pixel-density-calculator' },
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
          { name: 'Pixel Density Calculator' },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Pixel Density Calculator
          </h1>
          <p className="text-xl text-slate-700">
            Calculate DPI, PPI, and pixel density for any monitor. Determine display sharpness and
            clarity.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="container max-w-4xl">
          <PixelDensityCalculator />

          {/* Info Section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Understanding Pixel Density</h2>
            <p>
              Pixel density (measured in PPI - Pixels Per Inch or DPI - Dots Per Inch) determines
              how sharp and crisp your display appears. Higher PPI means sharper text and images.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Pixel Density Standards</h3>
            <ul>
              <li>
                <strong>Below 100 PPI</strong> - Lower density, may see pixelation at normal viewing
                distance
              </li>
              <li>
                <strong>100-150 PPI</strong> - Standard quality for desktop monitors, comfortable
                viewing
              </li>
              <li>
                <strong>150-200 PPI</strong> - High quality, very sharp text and images
              </li>
              <li>
                <strong>200+ PPI</strong> - Retina-level sharpness, approaching print quality
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">Common Resolutions & Sizes</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">Monitor Size</th>
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
        </div>
      </section>
    </>
  );
}
