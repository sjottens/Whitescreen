// app/[locale]/(website)/screen-color-test/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual, faqSchema } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import { SITE_URL } from '@/lib/constants';

export async function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({ locale }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('screen_color_test_title' as any),
    description: translate('screen_color_test_description' as any),
    path: '/screen-color-test',
    keywords: [
      'screen color test',
      'monitor color test',
      'color accuracy test',
      'display color check',
      'color screen test online',
      'RGB screen test',
      'color uniformity test',
    ],
  });
}

export default async function ScreenColorTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('screen_color_test' as any), path: '/screen-color-test' },
    ],
    locale
  );

  const faqItems = [
    { question: translate('screen_color_test_faq_1_q' as any), answer: translate('screen_color_test_faq_1_a' as any) },
    { question: translate('screen_color_test_faq_2_q' as any), answer: translate('screen_color_test_faq_2_a' as any) },
    { question: translate('screen_color_test_faq_3_q' as any), answer: translate('screen_color_test_faq_3_a' as any) },
    { question: translate('screen_color_test_faq_4_q' as any), answer: translate('screen_color_test_faq_4_a' as any) },
  ];

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: translate('screen_color_test' as any),
    description: translate('screen_color_test_description' as any),
    url: `${SITE_URL}/screen-color-test`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} suppressHydrationWarning />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('tools'), path: getLocalizedPath(locale, '/tools') },
          { name: translate('screen_color_test' as any) },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="container max-w-4xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 mb-4 bg-green-100 px-3 py-1 rounded-full">
            {translate('screen_color_test_badge' as any)}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('screen_color_test_title' as any)}
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {translate('screen_color_test_intro' as any)}
          </p>
        </div>
      </section>

      {/* Color test grid */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            {translate('color_screens')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
            {COLOR_TOOLS.map((tool) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="card p-4 hover:shadow-lg transition-all group text-center"
              >
                <div
                  className="w-full aspect-video rounded-lg mb-3 border border-slate-200"
                  style={{ backgroundColor: tool.color }}
                />
                <h3 className="font-bold text-sm group-hover:text-green-700 transition-colors">
                  {translate(tool.nameKey as any)}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {translate(tool.descriptionKey as any)}
                </p>
              </Link>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Click any color to launch fullscreen test. Press F or Space to enter fullscreen.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('screen_color_test_what_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {translate('screen_color_test_what_desc' as any)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="w-8 h-8 rounded bg-red-500 mb-3" />
              <h3 className="font-bold mb-2">Red Channel Test</h3>
              <p className="text-sm text-slate-600">Reveals defects in the red subpixel layer. Look for pink tinting, dead red pixels, and red uniformity.</p>
            </div>
            <div className="card">
              <div className="w-8 h-8 rounded bg-green-500 mb-3" />
              <h3 className="font-bold mb-2">Green Channel Test</h3>
              <p className="text-sm text-slate-600">Tests green subpixel accuracy. Green defects are highly visible due to eye sensitivity to green wavelengths.</p>
            </div>
            <div className="card">
              <div className="w-8 h-8 rounded bg-blue-500 mb-3" />
              <h3 className="font-bold mb-2">Blue Channel Test</h3>
              <p className="text-sm text-slate-600">Checks blue subpixel consistency. Blue channel issues cause purple or yellow tinting in displayed images.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to run */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            {translate('screen_color_test_how_title' as any)}
          </h2>
          <div className="space-y-6">
            {([
              { step: 1, text: translate('screen_color_test_how_step1' as any) },
              { step: 2, text: translate('screen_color_test_how_step2' as any) },
              { step: 3, text: translate('screen_color_test_how_step3' as any) },
            ] as const).map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center text-lg">
                  {step}
                </div>
                <p className="text-lg text-slate-700 pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('screen_color_test_when_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {translate('screen_color_test_when_desc' as any)}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            {translate('dead_pixel_faq_title' as any)}
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                  {item.question}
                  <span className="ml-4 flex-shrink-0 group-open:rotate-180 transition-transform text-slate-400">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related tools */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('stuck_pixel_fix_related_tools' as any)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { path: '/dead-pixel-test', icon: '🔍', label: translate('dead_pixel_test' as any) },
              { path: '/brightness-test', icon: '☀️', label: translate('brightness_test' as any) },
              { path: '/contrast-test', icon: '⬛', label: translate('contrast_test' as any) },
              { path: '/monitor-test-tool', icon: '🖥️', label: translate('monitor_test_tool' as any) },
              { path: '/backlight-bleed-test', icon: '💡', label: translate('backlight_bleed_test' as any) },
              { path: '/stuck-pixel-fix', icon: '🔧', label: translate('stuck_pixel_fix' as any) },
            ].map((tool) => (
              <Link
                key={tool.path}
                href={getLocalizedPath(locale, tool.path)}
                className="card p-4 hover:shadow-md transition-all group flex items-center gap-3"
              >
                <span className="text-2xl">{tool.icon}</span>
                <span className="font-semibold group-hover:text-green-700 transition-colors">{tool.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
