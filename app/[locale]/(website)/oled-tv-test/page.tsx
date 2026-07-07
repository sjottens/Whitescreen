// app/[locale]/(website)/oled-tv-test/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
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
    title: translate('oled_tv_test_title'),
    description: translate('oled_tv_test_description'),
    path: '/oled-tv-test',
    keywords: ['OLED TV test', 'OLED screen quality', 'Television display test', 'TV burn-in test'],
  });
}

export default async function OLEDTVTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('oled_tv_test'), path: '/oled-tv-test' },
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

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('resources'), path: getLocalizedPath(locale, '/tools') },
          { name: translate('oled_tv_test') },
        ]}
      />

      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-purple-50 to-slate-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('oled_tv_test_title')}
          </h1>
          <p className="text-xl text-slate-700">
            {translate('oled_tv_test_description')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed text-lg">
              {translate('oled_tv_test_intro')}
            </p>
          </div>

          {/* Test Grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('recommended_tests')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/screen/red-screen/fullscreen', title: 'Red Screen', desc: 'Perfect black levels with red test' },
                { path: '/screen/black-screen/fullscreen', title: 'Black Screen', desc: 'OLED black level verification' },
                { path: '/screen/white-screen/4k', title: 'White 4K', desc: 'Brightness and white point test' },
                { path: '/dead-pixel-test', title: 'Dead Pixel Test', desc: 'Check for pixel defects' },
              ].map((test) => (
                <Link
                  key={test.path}
                  href={getLocalizedPath(locale, test.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-purple-600">{test.title}</h3>
                  <p className="text-sm text-slate-600">{test.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Device-Specific FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('oled_tv_specific_questions' as any)}</h2>
            <div className="space-y-4">
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('oled_tv_faq_1_q')}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('oled_tv_faq_1_a')}
                </p>
              </details>
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('oled_tv_faq_2_q')}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('oled_tv_faq_2_a')}
                </p>
              </details>
            </div>
          </div>

          {/* Related Device Tests */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('test_other_devices' as any)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/iphone-screen-test', title: 'iPhone Screen Test', icon: '📱' },
                { path: '/macbook-screen-test', title: 'MacBook Screen Test', icon: '💻' },
                { path: '/gaming-monitor-test', title: 'Gaming Monitor Test', icon: '🎮' },
              ].map((device) => (
                <Link
                  key={device.path}
                  href={getLocalizedPath(locale, device.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{device.icon}</div>
                  <h3 className="font-bold text-lg group-hover:text-purple-600">{device.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
