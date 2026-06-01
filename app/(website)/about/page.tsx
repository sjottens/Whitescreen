// app/(website)/about/page.tsx - English-only about page

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMetadata as generateBaseMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { t } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  return generateBaseMetadata({
    title: 'About TestaScreen',
    description:
      'Learn about TestaScreen, our mission to provide elite screen testing tools, and how we\'re helping millions of users worldwide.',
    path: '/about',
  });
}

export default function AboutPage() {
  const locale = 'en';
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

      <Breadcrumbs
        items={[
          { name: translate('home'), path: '/' },
          { name: translate('about') },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('about_title')}</h1>
          <p className="text-xl text-slate-700 mb-8">
            {translate('about_description')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>{translate('about_mission')}</h2>
            <p>{translate('about_mission_text')}</p>

            <h2>{translate('about_vision')}</h2>
            <p>{translate('about_vision_text')}</p>

            <h2>{translate('about_values')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 not-prose">
              {values.map((value, i) => (
                <div key={i} className="card p-6">
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
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
