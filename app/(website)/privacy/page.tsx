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
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>Privacy Notice</h2>
            <p>
              TestaScreen respects your privacy. Our screen testing tools are designed to work entirely in your browser without collecting or storing personal data on external servers.
            </p>

            <h2>Data Collection</h2>
            <p>
              We do not collect, store, or transmit any personal information. All testing is performed locally on your device. If you contact us, we may retain your email address to respond to your inquiry.
            </p>

            <h2>Cookies & Analytics</h2>
            <p>
              We use minimal analytics to understand how users interact with our tools. This data is anonymized and does not identify individuals.
            </p>

            <h2>Your Rights</h2>
            <p>
              For data access requests, corrections, or to exercise your GDPR rights, please contact us at{' '}
              <strong>{translate('contact_email_address')}</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
