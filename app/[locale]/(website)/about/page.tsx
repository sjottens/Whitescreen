// app/[locale]/(website)/about/page.tsx - About page with multilingual SEO

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';

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

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
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

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">About Screenglow</h1>
          <p className="text-xl text-slate-700 mb-8">
            Elite screen testing and display tools for professionals worldwide.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              Screenglow is dedicated to providing professional-grade screen testing and display calibration tools that are accessible to everyone.
            </p>

            <h2>Why We Started</h2>
            <p>
              We recognized the need for simple, powerful tools that help users test their monitors and displays without complexity.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>Free, open-source screen testing tools</li>
              <li>Professional-grade features</li>
              <li>Instant results, no installation required</li>
              <li>Privacy-first approach</li>
            </ul>

            <h2>Our Team</h2>
            <p>
              Screenglow is built by a passionate team of developers and designers committed to excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
