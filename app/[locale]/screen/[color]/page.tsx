// app/[locale]/screen/[color]/page.tsx
// Color-specific landing page - Shows all variants for a selected color with direct links

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, SCREEN_VARIANTS } from '@/lib/constants';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/link-utils';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/button';

interface PageParams {
  locale: string;
  color: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

/**
 * Generate static params for all non-default locales
 * English pages serve at root (/screen/{color}), other locales at /{locale}/screen/{color}
 */
export async function generateStaticParams() {
  const colors = COLOR_TOOLS.map((t) => t.id);
  const locales = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

  const params: PageParams[] = [];
  for (const locale of locales) {
    for (const color of colors) {
      params.push({ locale, color });
    }
  }
  return params;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale, color } = await props.params;

  // Validate color exists
  const colorTool = COLOR_TOOLS.find((t) => t.id === color);
  if (!colorTool) {
    return { title: 'Not Found' };
  }

  const translate = t(locale as any);

  return generateMultilingualMetadata({
    locale: locale as any,
    title: `${translate(colorTool.nameKey as any)} - ${translate('all_variants')}`,
    description: `Test ${translate(colorTool.nameKey as any).toLowerCase()} with ${Object.keys(SCREEN_VARIANTS).length} variants. Choose from 4K, OLED, or Fullscreen display tests.`,
    path: `/screen/${color}`,
    keywords: [...(colorTool.keywords || []), 'variants', 'display test', 'screen test'],
  });
}

export default async function ColorVariantsPage({ params }: PageProps) {
  const { locale, color } = await params;

  // Validate color exists
  const colorTool = COLOR_TOOLS.find((t) => t.id === color);
  if (!colorTool) {
    return (
      <div className="section">
        <div className="container">
          <h1 className="text-3xl font-bold">Color not found</h1>
        </div>
      </div>
    );
  }

  const translate = t(locale as any);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('screen_tests'), path: '/screen' },
      { name: translate(colorTool.nameKey as any), path: `/screen/${color}` },
    ],
    locale as any
  );

  const variants = Object.entries(SCREEN_VARIANTS).map(([key, data]) => ({
    id: key,
    name: data.titleSuffix,
    desc: data.descSuffix,
    keywords: data.keywords,
  }));

  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale as any, '/') },
          { name: translate('screen_tests'), path: getLocalizedPath(locale as any, '/screen') },
          { name: translate(colorTool.nameKey as any) },
        ]}
      />

      {/* Back Navigation */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-blue-200 backdrop-blur-sm">
        <div className="container px-4 py-4 flex items-center justify-between">
          <LinkButton
            href={getLocalizedPath(locale as any, '/screen')}
            variant="secondary"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {translate('back_to_screen_tests')}
          </LinkButton>
        </div>
      </div>

      {/* Main Section */}
      <section className="section">
        <div className="container max-w-6xl">
          {/* Color Header */}
          <div className="mb-12 flex items-start gap-6">
            {/* Color Preview */}
            <div
              className="w-32 h-32 rounded-lg shadow-lg flex-shrink-0 border-4 border-slate-200"
              style={{ backgroundColor: colorTool.color }}
            />
            {/* Text */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-2 text-slate-900">
                {translate(colorTool.nameKey as any)}
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-4">
                {translate(colorTool.descriptionKey as any)}
              </p>
              {/* Specs */}
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                  <strong>Hex:</strong> {colorTool.hex}
                </div>
                <div className="bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                  <strong>RGB:</strong> {colorTool.rgb}
                </div>
              </div>
            </div>
          </div>

          {/* Variants Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">{translate('choose_variant')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {variants.map((variant) => (
                <Link
                  key={variant.id}
                  href={getLocalizedPath(locale as any, `/screen/${color}/${variant.id}`)}
                  className="group card p-6 hover:shadow-xl transition-all hover:border-cyan-500 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {variant.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{variant.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {variant.keywords.slice(0, 2).map((keyword) => (
                      <span key={keyword} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-slate-50 rounded-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">{translate('about')} {translate(colorTool.nameKey as any).toLowerCase()}</h2>
            <div className="prose prose-sm max-w-none text-slate-700">
              <p>
                The {translate(colorTool.nameKey as any).toLowerCase()} test is essential for evaluating your display's color accuracy and uniformity. This color can be used to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {colorTool.useCases?.map((useCase) => (
                  <li key={useCase}>{translate(useCase as any)}</li>
                )) || <li>Test display quality</li>}
              </ul>
            </div>
          </div>

          {/* Other Colors */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">{translate('other_colors')}</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {COLOR_TOOLS.filter((c) => c.id !== color).map((c) => (
                <Link
                  key={c.id}
                  href={getLocalizedPath(locale as any, `/screen/${c.id}`)}
                  className="group relative overflow-hidden rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-all hover:shadow-md"
                  title={translate(c.nameKey as any)}
                >
                  <div
                    className="h-16 w-full transition-transform group-hover:scale-110"
                    style={{ backgroundColor: c.color }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                    <span className="text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity text-center px-1">
                      {translate(c.nameKey as any)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
