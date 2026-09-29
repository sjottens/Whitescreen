// app/(site)/(website)/about/page.tsx - About page

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { llmOptimizedAboutPageSchema, schemaToJsonLd } from '@/lib/seo-llm-optimization';
import { translate } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {

  return pageMetadata({
    title: translate('about_title'),
    description: translate('about_description'),
    path: '/about',
  });
}

export default async function AboutPage() {

  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('about'), path: '/about' },
    ]);

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
      {/* LLM Optimization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaToJsonLd(llmOptimizedAboutPageSchema()) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: '/' },
          { name: translate('about') },
        ]}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('about_title')}</h1>
          <p className="text-xl text-slate-700 mb-8">
            {translate('about_description')}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container">
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

            <h2>{translate('about_expertise_title')}</h2>
            <p>{translate('about_expertise_text')}</p>
            <p>
              {translate('about_research_title').toLowerCase() === 'accuracy & research' && 'Our guides cover '}
              <Link href={'/dead-pixel-fixer'} className="text-blue-600 hover:underline">
                stuck pixel repair techniques
              </Link>
              {', '}
              <Link href={'/tools'} className="text-blue-600 hover:underline">
                monitor testing concepts
              </Link>
              {', and '}
              <Link href={'/tools'} className="text-blue-600 hover:underline">
                display specifications
              </Link>
              {' with technical depth.'}
            </p>

            <h2>{translate('about_research_title')}</h2>
            <p>{translate('about_research_text')}</p>

            <h2>{translate('about_sources_title')}</h2>
            <p>{translate('about_sources_text')}</p>

            <h2>{translate('about_updates_title')}</h2>
            <p>{translate('about_updates_text')}</p>

            <h2>{translate('about_for_users_title')}</h2>
            <p>{translate('about_for_users_text')}</p>

            <div className="bg-slate-100 p-8 rounded-lg my-8 not-prose">
              <h3 className="text-xl font-bold mb-4">Explore Our Guides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href={'/white-screen'} 
                  className="p-4 bg-white rounded hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-slate-900">{translate('white_screen')}</p>
                  <p className="text-sm text-slate-600">{translate('display_testing_desc')}</p>
                </Link>
                <Link 
                  href={'/dead-pixel-fixer'} 
                  className="p-4 bg-white rounded hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-slate-900">{translate('dead_pixel_fixer')}</p>
                  <p className="text-sm text-slate-600">Comprehensive guide to stuck pixels and repair techniques</p>
                </Link>
                <Link 
                  href={'/tools'} 
                  className="p-4 bg-white rounded hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-slate-900">{translate('resources_title')}</p>
                  <p className="text-sm text-slate-600">Browse all guides and resources</p>
                </Link>
                <Link 
                  href={'/faq'} 
                  className="p-4 bg-white rounded hover:shadow-lg transition-shadow"
                >
                  <p className="font-semibold text-slate-900">{translate('faq_title')}</p>
                  <p className="text-sm text-slate-600">Answers to common questions about display technology</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
