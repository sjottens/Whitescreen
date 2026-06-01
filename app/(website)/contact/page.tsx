// app/(website)/contact/page.tsx - English-only contact page

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMetadata as generateBaseMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { t } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  const translate = t('en');

  return generateBaseMetadata({
    title: translate('contact_title'),
    description: translate('contact_description'),
    path: '/contact',
  });
}

export default function ContactPage() {
  const locale = 'en';
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
          { name: translate('home'), path: '/' },
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
          <div className="prose prose-lg max-w-none">
            <h2>{translate('contact_email_direct')}</h2>
            <p className="mb-6">
              <strong>{translate('contact_email_address')}</strong>
            </p>
            <p>{translate('contact_response_time')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
