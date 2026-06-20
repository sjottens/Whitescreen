// app/[locale]/(website)/stuck-pixel-fix/page.tsx

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
    title: translate('stuck_pixel_fix_title' as any),
    description: translate('stuck_pixel_fix_description' as any),
    path: '/stuck-pixel-fix',
    keywords: [
      'stuck pixel fix',
      'stuck pixel repair',
      'how to fix stuck pixels',
      'stuck pixel tool',
      'pixel repair online',
      'fix dead pixel',
      'pixel fixer free',
    ],
  });
}

export default async function StuckPixelFixPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('stuck_pixel_fix' as any), path: '/stuck-pixel-fix' },
    ],
    locale
  );

  const faqItems = [
    { question: translate('stuck_pixel_fix_faq_1_q' as any), answer: translate('stuck_pixel_fix_faq_1_a' as any) },
    { question: translate('stuck_pixel_fix_faq_2_q' as any), answer: translate('stuck_pixel_fix_faq_2_a' as any) },
    { question: translate('stuck_pixel_fix_faq_3_q' as any), answer: translate('stuck_pixel_fix_faq_3_a' as any) },
    { question: translate('stuck_pixel_fix_faq_4_q' as any), answer: translate('stuck_pixel_fix_faq_4_a' as any) },
  ];

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: translate('stuck_pixel_fix' as any),
    description: translate('stuck_pixel_fix_description' as any),
    url: `${SITE_URL}/stuck-pixel-fix`,
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
          { name: translate('stuck_pixel_fix' as any) },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-4 bg-cyan-100 px-3 py-1 rounded-full">
            {translate('stuck_pixel_fix_badge' as any)}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('stuck_pixel_fix_title' as any)}
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed mb-8">
            {translate('stuck_pixel_fix_intro' as any)}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={getLocalizedPath(locale, '/dead-pixel-fixer')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              🔧 {translate('dead_pixel_fixer' as any)}
            </Link>
            <Link
              href={getLocalizedPath(locale, '/dead-pixel-test')}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-lg hover:border-cyan-400 transition-colors"
            >
              🔍 {translate('dead_pixel_test' as any)}
            </Link>
          </div>
        </div>
      </section>

      {/* What is a stuck pixel */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('stuck_pixel_fix_what_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {translate('stuck_pixel_fix_what_desc' as any)}
          </p>

          {/* Pixel types comparison */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card border-l-4 border-red-500">
              <div className="w-8 h-8 bg-red-500 rounded-full mb-3"></div>
              <h3 className="font-bold text-lg mb-2">Stuck Pixel</h3>
              <p className="text-sm text-slate-600">Shows a fixed color (red, green, blue, or white). Still receives power. Can sometimes be repaired.</p>
            </div>
            <div className="card border-l-4 border-slate-800">
              <div className="w-8 h-8 bg-slate-900 rounded-full mb-3 border border-slate-300"></div>
              <h3 className="font-bold text-lg mb-2">Dead Pixel</h3>
              <p className="text-sm text-slate-600">Permanently dark. No power. Cannot be repaired with software.</p>
            </div>
            <div className="card border-l-4 border-yellow-500">
              <div className="w-8 h-8 bg-white rounded-full mb-3 border-2 border-yellow-400"></div>
              <h3 className="font-bold text-lg mb-2">Hot Pixel</h3>
              <p className="text-sm text-slate-600">Always bright white. Receives maximum power. A type of stuck pixel — often repairable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to fix */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            {translate('stuck_pixel_fix_how_title' as any)}
          </h2>
          <div className="space-y-6">
            {([
              { step: 1, text: translate('stuck_pixel_fix_how_step1' as any) },
              { step: 2, text: translate('stuck_pixel_fix_how_step2' as any) },
              { step: 3, text: translate('stuck_pixel_fix_how_step3' as any) },
            ] as const).map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-600 text-white font-bold flex items-center justify-center text-lg">
                  {step}
                </div>
                <p className="text-lg text-slate-700 pt-1">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-cyan-50 border border-cyan-200 rounded-xl">
            <h3 className="font-bold text-lg mb-2 text-cyan-800">💡 Pro Tip</h3>
            <p className="text-slate-700">
              Run the Dead Pixel Fixer for at least 20 minutes per session. Stuck pixels that appeared within the last 48 hours have the highest success rate.
            </p>
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('stuck_pixel_fix_when_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {translate('stuck_pixel_fix_when_desc' as any)}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
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
      <section className="section bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
            {translate('stuck_pixel_fix_related_tools' as any)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { path: '/dead-pixel-test', label: translate('dead_pixel_test' as any), desc: 'Detect dead and stuck pixels', icon: '🔍' },
              { path: '/dead-pixel-fixer', label: translate('dead_pixel_fixer' as any), desc: 'Repair stuck pixels with color flash', icon: '🔧' },
              { path: '/monitor-test-tool', label: translate('monitor_test_tool' as any), desc: 'Full monitor test hub', icon: '🖥️' },
              { path: '/black-screen', label: translate('black_screen' as any), desc: 'Dark test to spot bright stuck pixels', icon: '⬛' },
              { path: '/brightness-test', label: translate('brightness_test' as any), desc: 'Test brightness and uniformity', icon: '☀️' },
              { path: '/backlight-bleed-test', label: translate('backlight_bleed_test' as any), desc: 'Check for backlight bleed', icon: '💡' },
            ].map((tool) => (
              <Link
                key={tool.path}
                href={getLocalizedPath(locale, tool.path)}
                className="card p-4 hover:shadow-lg transition-all group"
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="font-bold group-hover:text-cyan-600 transition-colors">{tool.label}</h3>
                <p className="text-sm text-slate-600 mt-1">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
