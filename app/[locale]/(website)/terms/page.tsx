// app/[locale]/(website)/terms/page.tsx - Terms & Conditions page with EU compliance

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('terms_title'),
    description: translate('terms_acceptance_text'),
    path: '/terms',
  });
}

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: TermsPageProps) {
  const locale = await getLocaleFromParams(params);
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
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
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

          <h2>{translate('terms_limitations')}</h2>
          <p>{translate('terms_limitations_text')}</p>

          <h2>{translate('terms_accuracy')}</h2>
          <p>{translate('terms_accuracy_text')}</p>

          <h2>{translate('terms_materials')}</h2>
          <p>{translate('terms_materials_text')}</p>

          <h2>{translate('terms_links')}</h2>
          <p>{translate('terms_links_text')}</p>

          <h2>{translate('terms_modifications')}</h2>
          <p>{translate('terms_modifications_text')}</p>

          <h2>{translate('terms_governing_law')}</h2>
          <p>{translate('terms_governing_law_text')}</p>

          <h2>{translate('terms_contact')}</h2>
          <p>
            {translate('terms_contact_text')}
            <br />
            <strong>{translate('terms_email_label' as any)}</strong> {translate('terms_email_value' as any)}
          </p>

          <hr className="my-12" />

          <h2 className="text-sm text-slate-600 font-semibold uppercase">{translate('terms_compliance')}</h2>
          <p className="text-sm text-slate-600">
            {translate('terms_compliance_text')}
          </p>
        </div>
      </section>
    </>
  );
}
