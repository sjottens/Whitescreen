// app/(website)/privacy/page.tsx - Privacy policy page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy',
  description: 'Screenglow Privacy Policy. We take your privacy seriously and do not collect or track personal data.',
  path: '/privacy',
});

export default function PrivacyPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <section className="section">
        <div className="container max-w-3xl prose prose-lg">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Privacy Policy</h1>

          <div className="text-slate-600 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
              <p>
                At Screenglow ("we" or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
              <p>
                We believe in privacy by design. We collect minimal data:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>No personal information is required to use our tools</li>
                <li>We do not use cookies to track users</li>
                <li>We do not collect IP addresses or device identifiers</li>
                <li>We do not have user accounts or registration systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Information</h2>
              <p>
                Since we collect minimal data, we have minimal usage of information:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Server logs (automatically deleted after 7 days)</li>
                <li>Analytics data (aggregated and anonymized only)</li>
                <li>No profiling or targeting</li>
                <li>No third-party data sharing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
              <p>
                We do not use cookies. This means we do not track your behavior across our website or other websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
              <p>
                We may use analytics services that may collect anonymous, aggregated information. These services follow their own privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Google Analytics (anonymized)</li>
                <li>Hosting providers (Vercel)</li>
                <li>CDN services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:{' '}
                <a href="mailto:privacy@screenglow.eu" className="text-cyan-600 hover:text-cyan-700">
                  privacy@screenglow.eu
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The date at the bottom of this page indicates when it was last updated.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">Last updated: May 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
