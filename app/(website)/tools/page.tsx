// app/(website)/tools/page.tsx - English-only tools page

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { Monitor } from 'lucide-react';
import { generateMetadata as generateBaseMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const translate = t('en');

  return generateBaseMetadata({
    title: translate('tools_title'),
    description: translate('tools_description'),
    path: '/tools',
  });
}

export default function ToolsPage() {
  const locale = 'en';
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
          { name: translate('home'), path: '/' },
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
                href={tool.path}
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
                href={tool.path}
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
              href="/monitor-test/asus"
              className="card group hover:shadow-lg transition-all border-l-4 border-blue-500"
            >
              <Monitor className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_asus')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_asus_description')}</p>
            </Link>

            <Link
              href="/monitor-test/lg"
              className="card group hover:shadow-lg transition-all border-l-4 border-red-500"
            >
              <Monitor className="w-8 h-8 text-red-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_lg')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_lg_description')}</p>
            </Link>

            <Link
              href="/monitor-test/samsung"
              className="card group hover:shadow-lg transition-all border-l-4 border-cyan-500"
            >
              <Monitor className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_samsung')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_samsung_description')}</p>
            </Link>

            <Link
              href="/monitor-test/dell"
              className="card group hover:shadow-lg transition-all border-l-4 border-green-500"
            >
              <Monitor className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">{translate('monitor_dell')}</h3>
              <p className="text-slate-600 text-sm">{translate('monitor_dell_description')}</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
