// app/[locale]/(website)/privacy/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';

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

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Privacy', path: '/privacy' },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl prose prose-lg">
          <h2>1. Overview</h2>
          <p>
            Screenglow is committed to protecting your privacy. This Privacy Policy explains how we handle user data.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect minimal information. We do not use cookies, tracking pixels, or user identification systems.
            Our tools run entirely in your browser without transmitting personal data to our servers.
          </p>

          <h2>3. Data Usage</h2>
          <p>
            We do not sell, trade, or share your information with third parties. Your data remains private.
          </p>

          <h2>4. Contact Us</h2>
          <p>
            For privacy concerns, contact us at: support@screenglow.eu
          </p>
        </div>
      </section>
    </>
  );
}
