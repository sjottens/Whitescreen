// app/(website)/privacy/page.tsx - English-only privacy policy page

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMetadata as generateBaseMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { t } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  return generateBaseMetadata({
    title: 'Privacy Policy',
    description: 'Privacy policy for TestaScreen. We explain how we handle and protect user data.',
    path: '/privacy',
  });
}

export default function PrivacyPage() {
  const locale = 'en';
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('privacy'), path: '/privacy' },
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
          { name: translate('privacy') },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('privacy_title')}</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl prose prose-lg max-w-none">
          <h2>1. {translate('privacy_intro')}</h2>
          <p>{translate('privacy_intro_full')}</p>

          <h2>2. {translate('privacy_data_collection')}</h2>
          <p>{translate('privacy_data_collection_text')}</p>

          <h2>3. {translate('privacy_how_it_works')}</h2>
          <p>{translate('privacy_how_it_works_text')}</p>
          <ul>
            <li>{translate('privacy_how_item_1')}</li>
            <li>{translate('privacy_how_item_2')}</li>
            <li>{translate('privacy_how_item_3')}</li>
          </ul>

          <h2>4. {translate('privacy_cookies')}</h2>
          <p>{translate('privacy_cookies_text')}</p>

          <h2>5. {translate('privacy_external_services')}</h2>
          <p>{translate('privacy_external_services_text')}</p>

          <h2>6. {translate('privacy_gdpr_rights')}</h2>
          <p>{translate('privacy_gdpr_rights_text')}</p>
          <ul>
            <li><strong>{translate('privacy_right_access')}:</strong> {translate('privacy_right_access_desc')}</li>
            <li><strong>{translate('privacy_right_rectification')}:</strong> {translate('privacy_right_rectification_desc')}</li>
            <li><strong>{translate('privacy_right_erasure')}:</strong> {translate('privacy_right_erasure_desc')}</li>
            <li><strong>{translate('privacy_right_objection')}:</strong> {translate('privacy_right_objection_desc')}</li>
          </ul>

          <h2>7. {translate('privacy_contact')}</h2>
          <p>{translate('privacy_contact_text')}</p>
        </div>
      </section>
    </>
  );
}
