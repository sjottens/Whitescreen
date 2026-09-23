// app/[locale]/(website)/monitor-test/page.tsx - Monitor Test Browser Landing Page

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Monitor, CheckCircle2, AlertTriangle, Gamepad2, ShoppingCart, ClipboardCheck } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { LinkButton } from '@/components/ui/button';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual, faqSchema } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { TEST_TOOLS, COLOR_TOOLS } from '@/lib/constants';

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
    title: translate('monitor_test_page_title' as any),
    description: translate('monitor_test_page_description' as any),
    path: '/monitor-test',
    keywords: [
      translate('monitor_test_keyword_1' as any),
      translate('monitor_test_keyword_2' as any),
      translate('monitor_test_keyword_3' as any),
    ],
  });
}

interface MonitorTestPageProps {
  params: Promise<{ locale: string }>;
}

export default async function MonitorTestPage({ params }: MonitorTestPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('monitor_test_breadcrumb_title' as any), path: '/monitor-test' },
    ],
    locale
  );

  // The tests a full monitor check actually walks through, in the order a
  // careful buyer would run them - dead pixels first, then uniformity/
  // backlight, then brightness/contrast, then the rest of the color set.
  const dead_pixel = TEST_TOOLS.find((t) => t.id === 'dead-pixel-test')!;
  const backlightBleed = TEST_TOOLS.find((t) => t.id === 'backlight-bleed-test')!;
  const brightness = TEST_TOOLS.find((t) => t.id === 'brightness-test')!;
  const contrast = TEST_TOOLS.find((t) => t.id === 'contrast-test')!;
  const responseTime = TEST_TOOLS.find((t) => t.id === 'response-time-test')!;
  const white = COLOR_TOOLS.find((c) => c.id === 'white-screen')!;
  const black = COLOR_TOOLS.find((c) => c.id === 'black-screen')!;

  const testCards = [
    { path: dead_pixel.path, nameKey: dead_pixel.nameKey, descKey: dead_pixel.descriptionKey },
    { path: white.path, nameKey: white.nameKey, descKey: white.descriptionKey },
    { path: black.path, nameKey: black.nameKey, descKey: black.descriptionKey },
    { path: backlightBleed.path, nameKey: backlightBleed.nameKey, descKey: backlightBleed.descriptionKey },
    { path: brightness.path, nameKey: brightness.nameKey, descKey: brightness.descriptionKey },
    { path: contrast.path, nameKey: contrast.nameKey, descKey: contrast.descriptionKey },
    { path: responseTime.path, nameKey: responseTime.nameKey, descKey: responseTime.descriptionKey },
  ];

  // FAQ schema mirrors the visible "what a browser test can/can't tell
  // you" section below, so the two never drift out of sync.
  const limitsFaq = faqSchema([
    {
      question: 'What can a browser-based monitor test actually detect?',
      answer:
        'Dead and stuck pixels, color casts, backlight uniformity and bleed, gradient or color banding, and obvious brightness or contrast problems - a solid-color or gradient screen reveals all of these clearly.',
    },
    {
      question: 'What can a browser-based monitor test NOT measure?',
      answer:
        "Calibrated color accuracy (Delta-E), true response time in milliseconds, exact HDR peak brightness, and input lag all require a colorimeter, a high-speed camera, or dedicated test hardware. A browser test can't measure these precisely.",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(limitsFaq) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('resources'), path: getLocalizedPath(locale, '/tools') },
          { name: translate('monitor_test_breadcrumb_title' as any) },
        ]}
      />

      {/* Sticky Back to Tools Bar */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-blue-50 to-slate-50 border-b-2 border-blue-200 backdrop-blur-sm">
        <div className="container px-4 py-4 flex items-center justify-between">
          <LinkButton
            href={getLocalizedPath(locale, '/tools')}
            variant="secondary"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {translate('back_to_tools')}
          </LinkButton>
        </div>
      </div>

      {/* Header Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{translate('monitor_test_badge' as any)}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('monitor_test_hub_h1' as any)}</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {translate('monitor_test_hub_intro' as any)}
          </p>
        </div>
      </section>

      {/* Test Grid - the actual testing pillar content */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">{translate('monitor_test_hub_tests_title' as any)}</h2>
          <p className="text-slate-600 mb-8">{translate('monitor_test_hub_full_sequence_cta' as any)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {testCards.map((card, idx) => (
              <Link
                key={card.path}
                href={getLocalizedPath(locale, card.path)}
                className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-xs font-mono text-blue-500 mb-1">{String(idx + 1).padStart(2, '0')}</div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {translate(card.nameKey as any)}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{translate(card.descKey as any)}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}

            {/* Gaming monitor test - distinct card, not part of the numbered
                sequence, since it targets a different (gaming) intent. */}
            <Link
              href={getLocalizedPath(locale, '/gaming-monitor-test')}
              className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <Gamepad2 className="w-4 h-4 text-blue-500 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {translate('monitor_test_hub_card_gaming' as any)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{translate('monitor_test_hub_card_gaming_desc' as any)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>

            {/* Buying guide - commercial-intent companion to the test suite */}
            <Link
              href={getLocalizedPath(locale, '/monitor-buying-guide')}
              className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <ShoppingCart className="w-4 h-4 text-blue-500 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {translate('monitor_test_hub_card_buying_guide' as any)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{translate('monitor_test_hub_card_buying_guide_desc' as any)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>

            {/* Test-before-returning guide - the clearest linkable-asset
                opportunity found in this niche's SERP research */}
            <Link
              href={getLocalizedPath(locale, '/how-to-test-a-monitor-before-returning')}
              className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <ClipboardCheck className="w-4 h-4 text-blue-500 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {translate('monitor_test_hub_card_returning' as any)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{translate('monitor_test_hub_card_returning_desc' as any)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* What a browser test can/can't tell you - honest limits, on purpose */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">{translate('monitor_test_hub_limits_title' as any)}</h2>
          <p className="text-slate-600 mb-8">{translate('monitor_test_hub_limits_intro' as any)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900">{translate('monitor_test_hub_limits_can_title' as any)}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{translate('monitor_test_hub_limits_can_text' as any)}</p>
            </div>
            <div className="card p-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">{translate('monitor_test_hub_limits_cant_title' as any)}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{translate('monitor_test_hub_limits_cant_text' as any)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{translate('monitor_test_not_found_brand_title' as any)}</h2>
          <p className="text-slate-600 mb-6">
            {translate('monitor_test_not_found_brand_desc' as any)}
          </p>
          <LinkButton
            href={getLocalizedPath(locale, '/tools')}
            variant="primary"
            size="lg"
          >
            {translate('monitor_test_back_all_tools' as any)}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
