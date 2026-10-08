// app/(site)/tools/pixel-density-calculator/page.tsx
// Calculate pixel density and DPI for any screen

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import PixelDensityCalculator from '@/components/tools/pixel-density-calculator';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { PAGE_COPY } from '@/lib/page-copy';

export async function generateMetadata(): Promise<Metadata> {

  return pageMetadata({
    ...PAGE_COPY['/tools/pixel-density-calculator'],
    path: '/tools/pixel-density-calculator',
    keywords: [
      translate('pixel_density_keyword_1' as any),
      translate('pixel_density_keyword_2' as any),
      translate('pixel_density_keyword_3' as any),
      translate('pixel_density_keyword_4' as any),
    ],
  });
}

export default async function PixelDensityCalculatorPage() {

  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('pixel_density_calculator'), path: '/tools/pixel-density-calculator' },
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
          <PixelDensityCalculator strings={getClientStrings('pixelDensityCalculator')} />

          {/* Info Section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">How pixel density is calculated</h2>
            <p>
              Pixel density is the number of pixels along one inch of the screen, measured diagonally. The calculator
              takes the diagonal resolution in pixels, which is the square root of width&sup2; + height&sup2;, and
              divides it by the diagonal size in inches. A 27-inch 2560 x 1440 monitor has a diagonal of about 2,937
              pixels, so it lands at 2,937 / 27 &asymp; 109 PPI.
            </p>
            <p>
              PPI (pixels per inch) and DPI (dots per inch) are often used as if they mean the same thing. Strictly,
              DPI belongs to printers and mice, while PPI describes a screen. For monitors the number is identical.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Common sizes and resolutions</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border p-3 text-left">Monitor size</th>
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

            <h3 className="text-xl font-bold mt-8 mb-3">Viewing distance matters as much as PPI</h3>
            <p>
              Whether you can see individual pixels depends on how far away you sit. With normal (20/20) vision the eye
              resolves roughly one arcminute, which works out to this rule of thumb: the distance in inches beyond which
              pixels blend together is about 3,438 divided by the PPI.
            </p>
            <ul>
              <li><strong>92 PPI</strong> (24&quot; 1080p): pixels blend from about 37 inches / 95 cm. At a typical desk distance of 60 to 70 cm, text looks slightly soft.</li>
              <li><strong>109 PPI</strong> (27&quot; 1440p): about 32 inches / 80 cm. Close to the sweet spot for a desk monitor.</li>
              <li><strong>163 PPI</strong> (27&quot; 4K): about 21 inches / 54 cm. Pixels are invisible at normal distance, which is why text looks print-sharp.</li>
              <li><strong>Phones</strong> at 400+ PPI are held at 25 to 30 cm, so they need far more density than a monitor to look equally sharp.</li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">Pixel density and display scaling</h3>
            <p>
              Higher density only helps if text stays a comfortable size. Windows and macOS do that with display scaling,
              and the right scaling level follows almost directly from the PPI:
            </p>
            <ul>
              <li><strong>Around 90 to 110 PPI:</strong> 100% scaling. Everything is drawn at its native size.</li>
              <li><strong>Around 120 to 140 PPI:</strong> 125% scaling on Windows. On macOS this range can look small, because macOS is designed around 1x or 2x scaling.</li>
              <li><strong>Around 160 to 185 PPI:</strong> 150% to 175% on Windows, or a &quot;looks like 2560 x 1440&quot; setting on macOS. You get the workspace of a 1440p screen with much sharper text.</li>
              <li><strong>Around 220 PPI and up:</strong> 200% scaling. This is where Apple&apos;s Retina displays sit, and where macOS text looks its best.</li>
            </ul>
            <p>
              Fractional scaling such as 125% or 150% works well in modern apps, but some older Windows programs still look
              blurry at those levels. If you use a lot of legacy software, a monitor that suits 100% scaling may be the less
              frustrating choice.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Which density should you pick?</h3>
            <ul>
              <li><strong>Gaming:</strong> 27&quot; 1440p (109 PPI) is the usual balance. Higher density means more pixels for the graphics card to render every frame, which costs frame rate.</li>
              <li><strong>Text, code and office work:</strong> 140 PPI or more makes long reading sessions noticeably easier on the eyes. 27&quot; 4K is a popular choice.</li>
              <li><strong>Photo editing:</strong> high density helps you judge sharpness at 100% zoom, but color accuracy matters more than PPI.</li>
              <li><strong>Large or ultrawide screens:</strong> a 34&quot; 3440 x 1440 ultrawide sits at about 110 PPI, the same density as a 27&quot; 1440p monitor, just wider.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
