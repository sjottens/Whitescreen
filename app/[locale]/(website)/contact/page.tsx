// app/[locale]/(website)/contact/page.tsx

import { Metadata } from 'next';
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
    title: translate('contact_title'),
    description: translate('contact_description'),
    path: '/contact',
  });
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('contact'), path: '/contact' },
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
          { name: translate('contact') },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('contact_title')}</h1>
          <p className="text-xl text-slate-700">
            {translate('contact_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-2xl">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">{translate('contact_title')}</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">{translate('contact_email_label')}</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder={translate('contact_email_placeholder')} required />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">{translate('contact_message_label')}</label>
                <textarea className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder={translate('contact_message_placeholder')} rows={5} required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700">
                {translate('contact_send_button')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
