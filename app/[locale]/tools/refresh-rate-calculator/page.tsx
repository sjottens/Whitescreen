// app/[locale]/tools/refresh-rate-calculator/page.tsx
// Interactive tool to calculate optimal refresh rate for gaming

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import RefreshRateCalculator from '@/components/tools/refresh-rate-calculator';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  return generateMultilingualMetadata({
    locale: 'en',
    title: 'Refresh Rate Calculator - Find Your Optimal Gaming Hz',
    description:
      'Calculate the perfect refresh rate for your gaming setup. Input your GPU and CPU to get recommendations for 60Hz, 144Hz, 240Hz, or 360Hz.',
    path: '/tools/refresh-rate-calculator',
    keywords: [
      'refresh rate calculator',
      'gaming monitor Hz',
      '144Hz vs 240Hz',
      'GPU FPS calculator',
    ],
  });
}

export default function RefreshRateCalculatorPage() {
  const translate = t('en');

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: 'Refresh Rate Calculator', path: '/tools/refresh-rate-calculator' },
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
          { name: 'Refresh Rate Calculator' },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Refresh Rate Calculator
          </h1>
          <p className="text-xl text-slate-700">
            Calculate the optimal refresh rate for your gaming setup based on your GPU and CPU
            performance
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section">
        <div className="container max-w-4xl">
          <RefreshRateCalculator />

          {/* Info Section */}
          <div className="mt-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Understanding Refresh Rate</h2>
            <p>
              Your monitor's refresh rate (measured in Hz) determines how many times per second
              your display updates. A higher refresh rate provides smoother gameplay, but you need
              sufficient GPU power to maintain high FPS (frames per second).
            </p>

            <h3 className="text-xl font-bold mt-8 mb-3">Refresh Rate Guidelines</h3>
            <ul>
              <li>
                <strong>60Hz</strong> - Good for casual gaming and office work. Most entry-level
                GPUs can handle this.
              </li>
              <li>
                <strong>144Hz</strong> - Recommended for serious gamers. Requires GTX 1660 Ti or
                better.
              </li>
              <li>
                <strong>240Hz</strong> - For competitive esports players. Needs RTX 3070 or
                equivalent.
              </li>
              <li>
                <strong>360Hz</strong> - For professional esports. Requires high-end RTX 4090 or
                better.
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-8 mb-3">FPS vs Refresh Rate</h3>
            <p>
              For smooth gameplay, your GPU should maintain FPS slightly above your monitor's
              refresh rate. For example, for a 144Hz monitor, aim for 150-160 FPS. This prevents
              frame tearing and stuttering.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
