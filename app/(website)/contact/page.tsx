// app/(website)/contact/page.tsx - Contact page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us',
  description: 'Get in touch with us. We respond to all inquiries within 24-48 hours.',
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Main Content */}
      <section className="section">
        <div className="container max-w-3xl">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-slate-600">
              We'd love to hear from you! Whether you have questions, feedback, or suggestions for new features, feel free to reach out.
            </p>
          </div>

          {/* Email Us Section */}
          <div className="card p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Email Us</h2>
            <p className="text-slate-600 mb-4">
              For general inquiries, feedback, or support:
            </p>
            <a
              href="mailto:rvfrontend@gmail.com"
              className="text-cyan-600 hover:text-cyan-700 text-lg font-medium break-all transition-colors"
            >
              rvfrontend@gmail.com
            </a>
          </div>

          {/* Feedback Section */}
          <div className="card p-8 md:p-10 mb-12">
            <h2 className="text-2xl font-bold mb-4">Feedback & Suggestions</h2>
            <p className="text-slate-600">
              We're always looking to improve. If you have ideas for new features, color screens, or tools you'd like to see, please let us know! Your feedback helps us make this tool better for everyone.
            </p>
          </div>

          {/* Response Time Section */}
          <div className="card p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-4">Response Time</h2>
            <p className="text-slate-600">
              We aim to respond to all inquiries within 24-48 hours. Please note that this project is maintained by a small team, so response times may vary during peak periods.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
