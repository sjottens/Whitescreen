// app/[locale]/(website)/tools/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'All Screen Testing Tools',
    description: 'Browse our complete collection of free screen testing and display calibration tools.',
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
          <h2 className="text-3xl font-bold mb-8">{translate('color_screens')}</h2>
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
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-slate-600 text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Test Tools */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">{translate('testing_tools')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEST_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="card group hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{tool.description}</p>
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
    </>
  );
}
