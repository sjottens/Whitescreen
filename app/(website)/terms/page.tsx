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
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Service</h2>
            <p>
              By using TestaScreen, you agree to these terms and conditions. These terms apply to all users and anyone accessing our services.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access TestaScreen for personal, non-commercial use only. You may not:
            </p>
            <ul>
              <li>Reverse engineer or decompile our tools</li>
              <li>Remove any proprietary notices or labels</li>
              <li>Transfer the tools or your rights to another person</li>
              <li>Use the tools in any way that violates laws or regulations</li>
              <li>Attempt to gain unauthorized access to our services</li>
            </ul>

            <h2>Disclaimer</h2>
            <p>
              TestaScreen is provided "as is" without any warranties, expressed or implied. We do not warrant that the tools will be uninterrupted or error-free.
            </p>

            <h2>Limitations of Liability</h2>
            <p>
              In no event shall TestaScreen be liable for any indirect, incidental, special, or consequential damages arising from your use of our tools.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, please contact us at{' '}
              <strong>{translate('contact_email_address')}</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
