// app/[locale]/(website)/about/page.tsx - About page with multilingual SEO

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
    title: 'About Screenglow',
    description:
      'Learn about Screenglow, our mission to provide elite screen testing tools, and how we\'re helping millions of users worldwide.',
    path: '/about',
  });
}

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('about'), path: '/about' },
    ],
    locale
  );

  const values = [
    {
      title: translate('about_values_accessible'),
      description: translate('about_values_accessible_text'),
    },
    {
      title: translate('about_values_honest'),
      description: translate('about_values_honest_text'),
    },
    {
      title: translate('about_values_fast'),
      description: translate('about_values_fast_text'),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('about_title')}</h1>
          <p className="text-xl text-slate-700 mb-8">
            {translate('about_description')}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>{translate('about_mission_title')}</h2>
            <p>{translate('about_mission_text')}</p>

            <h2>{translate('about_why_title')}</h2>
            <p>{translate('about_why_text')}</p>

            <h2>{translate('about_offer_title')}</h2>
            <ul>
              <li>{translate('about_offer_1')}</li>
              <li>{translate('about_offer_2')}</li>
              <li>{translate('about_offer_3')}</li>
              <li>{translate('about_offer_4')}</li>
            </ul>

            <h2>{translate('about_team_title')}</h2>
            <p>{translate('about_team_text')}</p>

            <h2>{translate('about_values_title')}</h2>
            <div className="not-prose grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {values.map((value) => (
                <div key={value.title} className="card">
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
