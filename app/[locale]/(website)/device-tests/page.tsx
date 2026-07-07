// app/[locale]/(website)/device-tests/page.tsx - Device-Specific Tests Landing Page

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Smartphone, Monitor, Gamepad2 } from 'lucide-react';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { LinkButton } from '@/components/ui/button';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

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
    title: translate('device_tests_title'),
    description: translate('device_tests_meta_description' as any),
    path: '/device-tests',
    keywords: [
      translate('device_tests_keyword_1' as any),
      translate('device_tests_keyword_2' as any),
      translate('device_tests_keyword_3' as any),
      translate('device_tests_keyword_4' as any),
      translate('device_tests_keyword_5' as any),
    ],
  });
}

interface DeviceTestsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DeviceTestsPage({ params }: DeviceTestsPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('device_tests_title'), path: '/device-tests' },
    ],
    locale
  );

  const devices = [
    {
      icon: Smartphone,
      color: 'gray',
      title: translate('iphone_test'),
      description: translate('iphone_test_description'),
      path: '/iphone-screen-test',
    },
    {
      icon: Monitor,
      color: 'slate',
      title: translate('macbook_test'),
      description: translate('macbook_test_description'),
      path: '/macbook-screen-test',
    },
    {
      icon: Gamepad2,
      color: 'orange',
      title: translate('gaming_monitor_test'),
      description: translate('gaming_monitor_test_description'),
      path: '/gaming-monitor-test',
    },
    {
      icon: Monitor,
      color: 'indigo',
      title: translate('oled_tv_test'),
      description: translate('oled_tv_test_description'),
      path: '/oled-tv-test',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('resources'), path: getLocalizedPath(locale, '/tools') },
          { name: translate('device_tests_title') },
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
            <Smartphone className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{translate('device_tests_badge' as any)}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('device_tests_title')}</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {translate('device_tests_intro' as any)}
          </p>
        </div>
      </section>

      {/* Devices Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devices.map((device, index) => {
              const Icon = device.icon;

              return (
                <Link
                  key={index}
                  href={getLocalizedPath(locale, device.path)}
                  className="group card p-6 hover:shadow-lg transition-all border-l-4 hover:border-blue-500 cursor-pointer"
                >
                  <Icon className={`w-10 h-10 mb-4 transition-colors ${device.color === 'gray' ? 'text-gray-700 group-hover:text-blue-600' : device.color === 'slate' ? 'text-slate-700 group-hover:text-blue-600' : device.color === 'orange' ? 'text-orange-700 group-hover:text-blue-600' : 'text-indigo-700 group-hover:text-blue-600'}`} />
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {device.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {device.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    {translate('test_now')} <span>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-alt">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">{translate('device_tests_not_listed_title' as any)}</h2>
          <p className="text-slate-600 mb-6">
            {translate('device_tests_not_listed_desc' as any)}
          </p>
          <LinkButton 
            href={getLocalizedPath(locale, '/tools')}
            variant="primary"
            size="lg"
          >
            {translate('btn_view_tools')}
          </LinkButton>
        </div>
      </section>
    </>
  );
}
