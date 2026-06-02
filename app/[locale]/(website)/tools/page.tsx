// app/[locale]/(website)/tools/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Monitor, Smartphone, Gamepad2, ArrowRight } from 'lucide-react';
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
                  className="w-full h-32 rounded-lg mb-4"
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
            Test your display with brand-specific test pages optimized for 50+ monitor manufacturers. Find your brand and optimize your setup.
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
              <strong>We support 50+ monitor brands!</strong> From ASUS ROG to BenQ, Alienware to EIZO, and many more.
            </p>
            <p className="text-sm text-slate-600 mb-6">
              Try typing your brand name in the URL: <code className="bg-white px-2 py-1 rounded">/monitor-test/benq</code>, 
              <code className="bg-white px-2 py-1 rounded ml-2">/monitor-test/alienware</code>, etc.
            </p>
            <LinkButton
              href={getLocalizedPath(locale, '/monitor-test/benq')}
              variant="primary"
              size="lg"
            >
              Browse More Brands <ArrowRight className="w-5 h-5 ml-2" />
            </LinkButton>
          </div>
        </div>
      </section>

      {/* Device-Specific Tests */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{translate('device_tests_title')}</h2>
          <p className="text-slate-600 text-lg mb-8">
            Specialized test pages designed for specific devices and display types.
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8">📊 Calculator & Utility Tools</h2>
          <p className="text-slate-600 text-lg mb-8">
            Interactive tools to help you find the perfect monitor setup and understand display specifications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href={getLocalizedPath(locale, '/tools/refresh-rate-calculator')}
              className="card group hover:shadow-lg transition-all border-l-4 border-purple-500"
            >
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Refresh Rate Calculator</h3>
              <p className="text-slate-600 text-sm mb-4">
                Find the optimal refresh rate for your GPU and CPU. Get personalized recommendations for gaming and professional use.
              </p>
              <span className="text-purple-600 font-semibold text-sm">Explore →</span>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/tools/pixel-density-calculator')}
              className="card group hover:shadow-lg transition-all border-l-4 border-emerald-500"
            >
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-xl font-bold mb-2">Pixel Density Calculator</h3>
              <p className="text-slate-600 text-sm mb-4">
                Calculate PPI and DPI for any monitor. Quick presets for common resolutions and screen sizes.
              </p>
              <span className="text-emerald-600 font-semibold text-sm">Calculate →</span>
            </Link>

            <Link
              href={getLocalizedPath(locale, '/tools/monitor-comparison')}
              className="card group hover:shadow-lg transition-all border-l-4 border-orange-500"
            >
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="text-xl font-bold mb-2">Monitor Comparison Tool</h3>
              <p className="text-slate-600 text-sm mb-4">
                Compare up to 3 monitors side-by-side. Analyze specs, differences, and find your perfect match.
              </p>
              <span className="text-orange-600 font-semibold text-sm">Compare →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Guides */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">🔄 Monitor & Spec Comparisons</h2>
          <p className="text-slate-600 text-lg mb-8">
            In-depth guides comparing popular monitor brands, specifications, and gaming setups to help you make informed decisions.
          </p>
          
          {/* Brand Comparisons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Brand vs Brand</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href={getLocalizedPath(locale, '/compare/asus-vs-lg')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-blue-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">ASUS vs LG</h4>
                <p className="text-sm text-slate-600">Compare two gaming monitor giants</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/asus-vs-dell')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-blue-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">ASUS vs Dell</h4>
                <p className="text-sm text-slate-600">Gaming vs Professional displays</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/lg-vs-samsung')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-blue-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">LG vs Samsung</h4>
                <p className="text-sm text-slate-600">Two industry leaders compared</p>
              </Link>
            </div>
          </div>

          {/* Spec Comparisons */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Specification Comparisons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href={getLocalizedPath(locale, '/compare/ips-vs-va-vs-tn')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-green-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">IPS vs VA vs TN</h4>
                <p className="text-sm text-slate-600">Panel types explained and compared</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/144hz-vs-240hz')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-green-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">144Hz vs 240Hz</h4>
                <p className="text-sm text-slate-600">Refresh rate impact on gaming</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/curved-vs-flat')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-green-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">Curved vs Flat</h4>
                <p className="text-sm text-slate-600">Which panel design is better?</p>
              </Link>
            </div>
          </div>

          {/* Device Comparisons */}
          <div>
            <h3 className="text-xl font-bold mb-6">Device Comparisons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href={getLocalizedPath(locale, '/compare/ps5-vs-xbox-series-x')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-orange-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">PS5 vs Xbox Series X</h4>
                <p className="text-sm text-slate-600">Gaming console display requirements</p>
              </Link>
              <Link
                href={getLocalizedPath(locale, '/compare/ultrawide-vs-dual-monitor')}
                className="card hover:shadow-lg transition-all p-4 border-l-4 border-orange-500"
              >
                <h4 className="font-semibold text-slate-900 mb-2">Ultrawide vs Dual Monitor</h4>
                <p className="text-sm text-slate-600">Workspace setup options compared</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
