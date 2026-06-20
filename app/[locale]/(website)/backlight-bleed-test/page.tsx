// app/[locale]/(website)/backlight-bleed-test/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual, faqSchema } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
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
    title: translate('backlight_bleed_test_title' as any),
    description: translate('backlight_bleed_test_description' as any),
    path: '/backlight-bleed-test',
    keywords: [
      'backlight bleed test',
      'backlight bleed check',
      'IPS glow test',
      'monitor backlight bleed',
      'LCD bleed test online',
      'backlight uniformity test',
      'monitor light bleed',
    ],
  });
}

export default async function BacklightBleedTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('backlight_bleed_test' as any), path: '/backlight-bleed-test' },
    ],
    locale
  );

  const faqItems = [
    { question: translate('backlight_bleed_test_faq_1_q' as any), answer: translate('backlight_bleed_test_faq_1_a' as any) },
    { question: translate('backlight_bleed_test_faq_2_q' as any), answer: translate('backlight_bleed_test_faq_2_a' as any) },
    { question: translate('backlight_bleed_test_faq_3_q' as any), answer: translate('backlight_bleed_test_faq_3_a' as any) },
    { question: translate('backlight_bleed_test_faq_4_q' as any), answer: translate('backlight_bleed_test_faq_4_a' as any) },
  ];

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: translate('backlight_bleed_test' as any),
    description: translate('backlight_bleed_test_description' as any),
    url: `${SITE_URL}/backlight-bleed-test`,
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
          { name: translate('backlight_bleed_test' as any) },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container max-w-4xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4 bg-blue-900/50 px-3 py-1 rounded-full">
            {translate('backlight_bleed_test_badge' as any)}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            {translate('backlight_bleed_test_title' as any)}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            {translate('backlight_bleed_test_intro' as any)}
          </p>
          <Link
            href={getLocalizedPath(locale, '/black-screen')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors"
          >
            ⬛ {translate('black_screen')} — {translate('btn_start_testing')}
          </Link>
        </div>
      </section>

      {/* What is backlight bleed */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('backlight_bleed_test_what_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {translate('backlight_bleed_test_what_desc' as any)}
          </p>
        </div>
      </section>

      {/* Types of backlight issues */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            {translate('backlight_bleed_test_types_title' as any)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card border-l-4 border-yellow-500">
              <h3 className="font-bold text-lg mb-2">{translate('backlight_bleed_test_type_1_title' as any)}</h3>
              <p className="text-sm text-slate-600">{translate('backlight_bleed_test_type_1_desc' as any)}</p>
            </div>
            <div className="card border-l-4 border-blue-400">
              <h3 className="font-bold text-lg mb-2">{translate('backlight_bleed_test_type_2_title' as any)}</h3>
              <p className="text-sm text-slate-600">{translate('backlight_bleed_test_type_2_desc' as any)}</p>
            </div>
            <div className="card border-l-4 border-slate-500">
              <h3 className="font-bold text-lg mb-2">{translate('backlight_bleed_test_type_3_title' as any)}</h3>
              <p className="text-sm text-slate-600">{translate('backlight_bleed_test_type_3_desc' as any)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to test */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            {translate('backlight_bleed_test_how_title' as any)}
          </h2>
          <div className="space-y-6">
            {([
              { step: 1, text: translate('backlight_bleed_test_how_step1' as any) },
              { step: 2, text: translate('backlight_bleed_test_how_step2' as any) },
              { step: 3, text: translate('backlight_bleed_test_how_step3' as any) },
            ] as const).map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center text-lg">
                  {step}
                </div>
                <p className="text-lg text-slate-700 pt-1">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-slate-100 border border-slate-200 rounded-xl">
            <p className="font-bold mb-2">💡 Tip: Best conditions for testing</p>
            <ul className="space-y-1 text-slate-700 text-sm">
              <li>• Completely darken the room — even slight ambient light masks bleed</li>
              <li>• Allow the screen to warm up for 10 minutes before testing</li>
              <li>• Set brightness to 50–100% for the most representative test</li>
              <li>• Check from your normal viewing position, not up close</li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('backlight_bleed_test_when_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {translate('backlight_bleed_test_when_desc' as any)}
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
              { path: '/black-screen', icon: '⬛', label: translate('black_screen' as any), desc: 'Best screen for bleed detection' },
              { path: '/dead-pixel-test', icon: '🔍', label: translate('dead_pixel_test' as any), desc: 'Detect dead & stuck pixels' },
              { path: '/brightness-test', icon: '☀️', label: translate('brightness_test' as any), desc: 'Check brightness uniformity' },
              { path: '/monitor-test-tool', icon: '🖥️', label: translate('monitor_test_tool' as any), desc: 'Full monitor test hub' },
              { path: '/stuck-pixel-fix', icon: '🔧', label: translate('stuck_pixel_fix' as any), desc: 'Repair stuck pixels' },
              { path: '/screen-color-test', icon: '🎨', label: translate('screen_color_test' as any), desc: 'Color accuracy check' },
            ].map((tool) => (
              <Link
                key={tool.path}
                href={getLocalizedPath(locale, tool.path)}
                className="card p-4 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl">{tool.icon}</span>
                  <span className="font-semibold group-hover:text-blue-600 transition-colors">{tool.label}</span>
                </div>
                <p className="text-xs text-slate-500">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
