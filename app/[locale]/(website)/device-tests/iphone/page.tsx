// app/[locale]/(website)/device-tests/iphone/page.tsx

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
    title: translate('iphone_test_title'),
    description: translate('iphone_test_description'),
    path: '/iphone-screen-test',
    keywords: ['iPhone screen test', 'iPhone display test', 'Apple screen quality'],
  });
}

export default async function IPhoneTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('iphone_test'), path: '/iphone-screen-test' },
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            {translate('iphone_test_title')}
          </h1>
          <p className="text-xl text-slate-700">
            {translate('iphone_test_description')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-4xl">
          {/* Introduction */}
          <div className="mb-12 prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed text-lg">
              {translate('iphone_test_intro')}
            </p>
          </div>

          {/* Test Grid */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{translate('recommended_tests')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/screen/red/fullscreen', title: 'Red Screen', desc: 'Test red pixel quality and dead pixels' },
                { path: '/screen/blue/fullscreen', title: 'Blue Screen', desc: 'Check blue channel consistency' },
                { path: '/screen/green/fullscreen', title: 'Green Screen', desc: 'Verify green display uniformity' },
                { path: '/screen/white/fullscreen', title: 'White Screen', desc: 'Overall brightness and color accuracy' },
              ].map((test) => (
                <Link
                  key={test.path}
                  href={getLocalizedPath(locale, test.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">{test.title}</h3>
                  <p className="text-sm text-slate-600">{test.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Device-Specific FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">iPhone-Specific Questions</h2>
            <div className="space-y-4">
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('iphone_faq_1_q')}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('iphone_faq_1_a')}
                </p>
              </details>
              <details className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {translate('iphone_faq_2_q')}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {translate('iphone_faq_2_a')}
                </p>
              </details>
            </div>
          </div>

          {/* Related Device Tests */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Test Other Devices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { path: '/macbook-screen-test', title: 'MacBook Screen Test', icon: '💻' },
                { path: '/oled-tv-test', title: 'OLED TV Test', icon: '📺' },
                { path: '/gaming-monitor-test', title: 'Gaming Monitor Test', icon: '🎮' },
              ].map((device) => (
                <Link
                  key={device.path}
                  href={getLocalizedPath(locale, device.path)}
                  className="card p-6 hover:shadow-lg transition-all group"
                >
                  <div className="text-3xl mb-3">{device.icon}</div>
                  <h3 className="font-bold text-lg group-hover:text-blue-600">{device.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
