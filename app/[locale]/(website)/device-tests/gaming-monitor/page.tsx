// app/[locale]/(website)/device-tests/gaming-monitor/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('gaming_monitor_test_title'),
    description: translate('gaming_monitor_test_description'),
    path: '/gaming-monitor-test',
    keywords: ['gaming monitor test', '144Hz test', 'high refresh rate', 'gaming display quality'],
  });
}

export default async function GamingMonitorTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('gaming_monitor_test'), path: '/gaming-monitor-test' },
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

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('gaming_monitor_test_title')}
          </h1>
          <p className="text-xl text-slate-700">
            {translate('gaming_monitor_test_description')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed text-lg">
              {translate('gaming_monitor_test_intro')}
            </p>
          </div>

          {/* Test Grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('recommended_tests')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/screen/red-screen/oled', title: 'Red OLED', desc: 'Color accuracy for gaming' },
                { path: '/screen/white-screen/4k', title: 'White 4K', desc: '4K resolution display test' },
                { path: '/brightness-test', title: 'Brightness Test', desc: 'Maximum brightness verification' },
                { path: '/contrast-test', title: 'Contrast Test', desc: 'High contrast ratio check' },
              ].map((test) => (
                <Link
                  key={test.path}
                  href={getLocalizedPath(locale, test.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600">{test.title}</h3>
                  <p className="text-sm text-slate-600">{test.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Device-Specific FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('gaming_monitor_faq_section_title')}</h2>
            <div className="space-y-4">
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('gaming_monitor_faq_1_q')}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('gaming_monitor_faq_1_a')}
                </p>
              </details>
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('gaming_monitor_faq_2_q')}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('gaming_monitor_faq_2_a')}
                </p>
              </details>
            </div>
          </div>

          {/* Related Device Tests */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('test_other_devices_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/iphone-screen-test', title: 'iPhone Screen Test', icon: '📱' },
                { path: '/macbook-screen-test', title: 'MacBook Screen Test', icon: '💻' },
                { path: '/oled-tv-test', title: 'OLED TV Test', icon: '📺' },
              ].map((device) => (
                <Link
                  key={device.path}
                  href={getLocalizedPath(locale, device.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{device.icon}</div>
                  <h3 className="font-bold text-lg group-hover:text-orange-600">{device.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
