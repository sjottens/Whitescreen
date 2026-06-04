// app/[locale]/screen/page.tsx
// Screen tests landing page - Lists all available colors and variants for screen testing

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, SCREEN_VARIANTS } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/link-utils';

export async function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);
  
  return generateMultilingualMetadata({
    locale,
    title: `${translate('screen_tests' as any)} - ${translate('all_colors_variants' as any)}`,
    description: `${translate('screen_tests_desc' as any)} - Test your display with ${Object.keys(SCREEN_VARIANTS).length} variants across ${COLOR_TOOLS.length} colors.`,
    path: '/screen',
    keywords: ['screen test', 'display test', 'color test', 'monitor test', 'screen variants'],
  });
}

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ScreenTestsPage({ params }: PageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('screen_tests' as any), path: '/screen' },
    ],
    locale
  );

  const variants = Object.entries(SCREEN_VARIANTS).map(([key, data]) => ({
    id: key,
    name: data.titleSuffix,
    desc: data.descSuffix,
  }));

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale as any, '/') },
          { name: translate('screen_tests' as any) },
        ]}
      />

      {/* Main Section */}
      <section className="section">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-slate-900">
              {translate('screen_tests' as any)}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              {translate('screen_tests_full_desc' as any)}
            </p>
          </div>

          {/* Colors Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">{translate('select_color' as any)}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {COLOR_TOOLS.map((color) => (
                <Link
                  key={color.id}
                  href={getLocalizedPath(locale as any, `/screen/${color.id}`)}
                  className="group relative overflow-hidden rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-all hover:shadow-lg"
                >
                  {/* Color Preview */}
                  <div
                    className="h-24 w-full transition-transform group-hover:scale-105"
                    style={{ backgroundColor: color.color }}
                  />
                  {/* Label */}
                  <div className="p-3 bg-white">
                    <p className="font-semibold text-sm text-slate-900 text-center">
                      {translate(color.nameKey as any)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Variants Info */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">{translate('available_variants' as any)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {variants.map((variant) => (
                <div key={variant.id} className="bg-white p-4 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{variant.name}</h3>
                  <p className="text-slate-600 text-sm">{variant.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-16 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">{translate('how_to_use' as any)}</h2>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <span className="text-slate-700">{translate('choose_color_step' as any)}</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <span className="text-slate-700">{translate('select_variant_step' as any)}</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <span className="text-slate-700">{translate('test_your_screen_step' as any)}</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
