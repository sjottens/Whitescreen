// app/[locale]/(website)/privacy/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'Privacy Policy',
    description: 'Privacy policy for Screenglow. We explain how we handle and protect user data.',
    path: '/privacy',
  });
}

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const locale = await getLocaleFromParams(params);
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

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('privacy_title')}</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl prose prose-lg">
          <h2>1. {translate('privacy_intro')}</h2>
          <p>
            {translate('privacy_intro')}
          </p>

          <h2>2. {translate('privacy_data_collection')}</h2>
          <p>
            {translate('privacy_data_collection_text')}
          </p>

          <h2>3. {translate('privacy_how_it_works')}</h2>
          <p>
            {translate('privacy_how_it_works_text')}
          </p>

          <h2>4. {translate('privacy_cookies')}</h2>
          <p>
            {translate('privacy_cookies_text')}
          </p>

          <h2>5. {translate('privacy_contact')}</h2>
          <p>
            {translate('privacy_contact_text')}
          </p>
        </div>
      </section>
    </>
  );
}
