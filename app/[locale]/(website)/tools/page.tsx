// app/[locale]/(website)/tools/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Monitor, Smartphone, Gamepad2 } from 'lucide-react';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';

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
            Test your display with monitor brand-specific test pages optimized for different manufacturers.
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
    </>
  );
}
