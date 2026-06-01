// app/[locale]/screen/[color]/[variant]/page.tsx
// Dynamic screen variant pages: /[locale]/screen/[color]/[variant]
// Example: /nl/screen/red/4k, /es/screen/blue/oled, etc.
// Generates 9 colors × 3 variants × 7 non-default languages = 189 unique pages

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, SCREEN_VARIANTS } from '@/lib/constants';
import { 
  generateScreenVariantContent, 
  VariantContent 
} from '@/lib/seo-content-generator';
import {
  generateMultilingualMetadata,
  breadcrumbSchemaMultilingual,
} from '@/lib/seo';
import { getLocalizedPath } from '@/lib/link-utils';
import ScreenDisplay from '@/components/tools/screen-display';
import Link from 'next/link';

interface PageParams {
  locale: string;
  color: string;
  variant: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

/**
 * Generate static params for all combinations across non-default locales
 * English pages are served at root (e.g., /screen/red/4k), not /en/screen/red/4k
 * This prevents duplicate content issues with canonical tags
 */
export async function generateStaticParams() {
  const colors = COLOR_TOOLS.map(t => t.id);
  const variants = Object.keys(SCREEN_VARIANTS);
  const locales = LOCALES.filter((locale) => locale !== DEFAULT_LOCALE);

  const params: PageParams[] = [];
  for (const locale of locales) {
    for (const color of colors) {
      for (const variant of variants) {
        params.push({ locale, color, variant });
      }
    }
  }
  return params;
}

// Generate metadata for each variant
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale, color, variant } = await props.params;
  
  // Validate inputs
  const colorTool = COLOR_TOOLS.find(t => t.id === color);
  const variantData = SCREEN_VARIANTS[variant as keyof typeof SCREEN_VARIANTS];
  
  if (!colorTool || !variantData) {
    return { title: 'Not Found' };
  }

  const translate = t(locale as any);
  const content = generateScreenVariantContent(
    locale as any,
    color,
    colorTool.hex || '#FFFFFF',
    variant,
    translate(colorTool.nameKey as any),
    colorTool.keywords || [],
    translate
  );

  return generateMultilingualMetadata({
    locale: locale as any,
    title: content.title,
    description: content.metaDescription,
    path: `/screen/${color}/${variant}`,
    keywords: [...(colorTool.keywords || []), ...(variantData.keywords || [])],
  });
}

export default async function ScreenVariantPage(props: PageProps) {
  const { locale, color, variant } = await props.params;
  
  const colorTool = COLOR_TOOLS.find(t => t.id === color);
  const variantData = SCREEN_VARIANTS[variant as keyof typeof SCREEN_VARIANTS];
  
  // Validate that both color and variant exist
  if (!colorTool || !variantData) {
    return (
      <div className="container py-20">
        <h1 className="text-4xl font-bold mb-4">Not Found</h1>
        <p className="text-slate-600 mb-6">The requested screen configuration does not exist.</p>
        <Link href="/" className="text-blue-600 hover:underline">Return to home</Link>
      </div>
    );
  }
  
  const translate = t(locale as any);
  
  const content = generateScreenVariantContent(
    locale as any,
    color,
    colorTool.hex || '#FFFFFF',
    variant,
    translate(colorTool.nameKey as any),
    colorTool.keywords || []
  );

  // Breadcrumb schema
  const breadcrumbs = [
    { name: translate('home'), path: getLocalizedPath(locale as any, '/') },
    { name: translate('tools'), path: getLocalizedPath(locale as any, '/tools') },
    { name: translate(colorTool.nameKey as any), path: getLocalizedPath(locale as any, `/screen/${color}`) },
    { name: variantData.titleSuffix, path: getLocalizedPath(locale as any, `/screen/${color}/${variant}`) },
  ];

  // Related variants (other variants of same color)
  const relatedVariants = Object.entries(SCREEN_VARIANTS)
    .filter(([v]) => v !== variant)
    .map(([v, data]) => ({
      title: `${translate(colorTool.nameKey as any)} - ${data.titleSuffix}`,
      url: getLocalizedPath(locale as any, `/screen/${color}/${v}`),
      description: data.descSuffix,
    }));

  // Related colors (other colors with same variant)
  const relatedColors = COLOR_TOOLS
    .filter(t => t.id !== color)
    .slice(0, 3)
    .map(t => ({
      title: `${translate(t.nameKey as any)} - ${variantData.titleSuffix}`,
      url: getLocalizedPath(locale as any, `/screen/${t.id}/${variant}`),
      description: translate(t.descriptionKey as any),
    }));

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchemaMultilingual(breadcrumbs, locale as any)),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-200 py-3 px-4 md:px-8">
        <ol className="flex flex-wrap gap-2 max-w-6xl mx-auto text-sm">
          {breadcrumbs.map((crumb, i) => (
            <li key={i} className="flex items-center">
              {i > 0 && <span className="text-slate-400 mx-2">/</span>}
              <a 
                href={crumb.path} 
                className="text-blue-600 hover:underline"
              >
                {crumb.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {content.metaDescription}
          </p>
        </header>

        {/* Intro Text */}
        <section className="mb-12 p-6 bg-white rounded-lg shadow-sm border border-slate-200">
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {content.introText}
          </p>
        </section>

        {/* Display Test Area */}
        <section className="mb-12">
          <ScreenDisplay 
            color={colorTool.color || '#FFFFFF'}
            colorId={colorTool.id}
            title={translate(colorTool.nameKey as any)}
            locale={locale as any}
          />
        </section>

        {/* Features Grid */}
        {content.features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {translate('features')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
                  <span className="text-blue-600 text-lg mt-1">✓</span>
                  <p className="text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Use Cases */}
        {content.useCases.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {translate('common')} {translate('use_cases') || 'Use Cases'}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {content.useCases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-slate-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* FAQs */}
        {content.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {translate('faq_title') || 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                <details 
                  key={i} 
                  className="p-4 bg-white rounded-lg border border-slate-200 cursor-pointer group"
                >
                  <summary className="font-semibold text-slate-900 flex items-center justify-between hover:text-blue-600">
                    <span>{faq.question}</span>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-slate-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Related Variants */}
        {relatedVariants.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Other Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedVariants.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Related Colors */}
        {relatedColors.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Related Screen Tests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedColors.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  className="p-4 bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Back to Tools */}
        <div className="mt-16 text-center">
          <a
            href={getLocalizedPath(locale as any, '/tools')}
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {translate('back_to_tools') || 'Back to Tools'}
          </a>
        </div>
      </div>
    </main>
  );
}
