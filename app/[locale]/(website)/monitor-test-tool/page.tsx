// app/[locale]/(website)/monitor-test-tool/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import {
  generateMultilingualMetadata,
  breadcrumbSchemaMultilingual,
  faqSchema,
  softwareApplicationSchema,
} from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { COLOR_TOOLS, TEST_TOOLS } from '@/lib/constants';

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
    title: translate('monitor_test_tool_title' as any),
    description: translate('monitor_test_tool_description' as any),
    path: '/monitor-test-tool',
    keywords: [
      'online monitor test tool',
      'monitor test',
      'display test online',
      'free monitor test',
      'monitor quality test',
      'test monitor online',
      'display checker',
    ],
  });
}

const CORE_TESTS = [
  { path: '/dead-pixel-test', icon: '🔍', labelKey: 'dead_pixel_test', descKey: 'dead_pixel_test_desc', color: 'border-red-500' },
  { path: '/brightness-test', icon: '☀️', labelKey: 'brightness_test', descKey: 'brightness_test_desc', color: 'border-yellow-500' },
  { path: '/contrast-test', icon: '⬛', labelKey: 'contrast_test', descKey: 'contrast_test_desc', color: 'border-slate-700' },
  { path: '/stuck-pixel-fix', icon: '🔧', labelKey: 'stuck_pixel_fix', descKey: 'stuck_pixel_fix_intro', color: 'border-cyan-500' },
  { path: '/backlight-bleed-test', icon: '💡', labelKey: 'backlight_bleed_test', descKey: 'backlight_bleed_test_intro', color: 'border-blue-500' },
  { path: '/screen-color-test', icon: '🎨', labelKey: 'screen_color_test', descKey: 'screen_color_test_intro', color: 'border-green-500' },
];

export default async function MonitorTestToolPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('monitor_test_tool' as any), path: '/monitor-test-tool' },
    ],
    locale
  );

  const faqItems = [
    { question: translate('monitor_test_tool_faq_1_q' as any), answer: translate('monitor_test_tool_faq_1_a' as any) },
    { question: translate('monitor_test_tool_faq_2_q' as any), answer: translate('monitor_test_tool_faq_2_a' as any) },
    { question: translate('monitor_test_tool_faq_3_q' as any), answer: translate('monitor_test_tool_faq_3_a' as any) },
    { question: translate('monitor_test_tool_faq_4_q' as any), answer: translate('monitor_test_tool_faq_4_a' as any) },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }} suppressHydrationWarning />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('tools'), path: getLocalizedPath(locale, '/tools') },
          { name: translate('monitor_test_tool' as any) },
        ]}
      />

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-4xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 bg-blue-100 px-3 py-1 rounded-full">
            {translate('monitor_test_tool_badge' as any)}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('monitor_test_tool_title' as any)}
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {translate('monitor_test_tool_intro' as any)}
          </p>
        </div>
      </section>

      {/* What does this tool test */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('monitor_test_tool_what_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            {translate('monitor_test_tool_what_desc' as any)}
          </p>
        </div>
      </section>

      {/* Core tests grid */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-900">
            {translate('monitor_test_tool_tests_title' as any)}
          </h2>
          <p className="text-slate-600 mb-8">{translate('monitor_test_tool_how_title' as any)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {CORE_TESTS.map((test) => (
              <Link
                key={test.path}
                href={getLocalizedPath(locale, test.path)}
                className={`card group hover:shadow-lg transition-all border-l-4 ${test.color}`}
              >
                <div className="text-3xl mb-3">{test.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {translate(test.labelKey as any)}
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">{translate(test.descKey as any)}</p>
              </Link>
            ))}
          </div>

          {/* Color screen tests */}
          <h3 className="text-xl font-bold mb-4">{translate('color_screens')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {COLOR_TOOLS.slice(0, 5).map((tool) => (
              <Link
                key={tool.id}
                href={getLocalizedPath(locale, tool.path)}
                className="card p-3 hover:shadow-md transition-all group text-center"
              >
                <div
                  className="w-full h-12 rounded mb-2 border border-slate-200"
                  style={{ backgroundColor: tool.color }}
                />
                <p className="text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  {translate(tool.nameKey as any)}
                </p>
              </Link>
            ))}
          </div>

          {/* Device specific tests */}
          <h3 className="text-xl font-bold mb-4">{translate('device_tests_title' as any)}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { path: '/gaming-monitor-test', icon: '🎮', label: translate('gaming_monitor_test' as any) },
              { path: '/iphone-screen-test', icon: '📱', label: translate('iphone_test' as any) },
              { path: '/macbook-screen-test', icon: '💻', label: translate('macbook_test' as any) },
              { path: '/oled-tv-test', icon: '📺', label: translate('oled_tv_test' as any) },
            ].map((d) => (
              <Link
                key={d.path}
                href={getLocalizedPath(locale, d.path)}
                className="card p-4 hover:shadow-md transition-all group"
              >
                <div className="text-2xl mb-2">{d.icon}</div>
                <p className="font-semibold text-sm group-hover:text-blue-600 transition-colors">{d.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
            {translate('monitor_test_tool_how_title' as any)}
          </h2>
          <div className="space-y-6">
            {([
              { step: 1, text: translate('monitor_test_tool_how_step1' as any) },
              { step: 2, text: translate('monitor_test_tool_how_step2' as any) },
              { step: 3, text: translate('monitor_test_tool_how_step3' as any) },
            ] as const).map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">
                  {step}
                </div>
                <p className="text-lg text-slate-700 pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to run */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
            {translate('monitor_test_tool_when_title' as any)}
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            {translate('monitor_test_tool_when_desc' as any)}
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

      {/* Monitor brands hub CTA */}
      <section className="section-alt">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{translate('monitor_tests')}</h2>
          <p className="text-slate-600 mb-6">{translate('monitor_test_intro' as any)}</p>
          <Link
            href={getLocalizedPath(locale, '/monitor-test')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            🖥️ {translate('monitor_test_page_title' as any)}
          </Link>
        </div>
      </section>
    </>
  );
}
