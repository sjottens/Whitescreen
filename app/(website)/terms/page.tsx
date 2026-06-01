// app/(website)/terms/page.tsx - English-only terms and conditions page

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMetadata as generateBaseMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { t } from '@/lib/translations';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const translate = t('en');

  return generateBaseMetadata({
    title: translate('terms_title'),
    description: translate('terms_acceptance_text'),
    path: '/terms',
  });
}

export default function TermsPage() {
  const locale = 'en';
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('terms'), path: '/terms' },
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
          { name: translate('terms') },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('terms_title')}</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl prose prose-lg max-w-none">
          <h2>{translate('terms_acceptance')}</h2>
          <p>{translate('terms_acceptance_text')}</p>

          <h2>{translate('terms_use_license')}</h2>
          <p>{translate('terms_use_license_text')}</p>
          <ul>
            <li>{translate('terms_license_item_1')}</li>
            <li>{translate('terms_license_item_2')}</li>
            <li>{translate('terms_license_item_3')}</li>
            <li>{translate('terms_license_item_4')}</li>
            <li>{translate('terms_license_item_5')}</li>
          </ul>

          <h2>{translate('terms_disclaimer')}</h2>
          <p>{translate('terms_disclaimer_text')}</p>

          <h2>{translate('terms_limitation')}</h2>
          <p>{translate('terms_limitation_text')}</p>

          <h2>{translate('terms_modifications')}</h2>
          <p>{translate('terms_modifications_text')}</p>

          <h2>{translate('terms_contact')}</h2>
          <p>{translate('terms_contact_text')}</p>
        </div>
      </section>
    </>
  );
}
