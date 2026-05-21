// app/(website)/faq/page.tsx - Comprehensive FAQ page with structured data

import { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateSEOMetadata, faqSchema, breadcrumbSchema } from '@/lib/seo';
import { FAQ_ITEMS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Screenglow tools, screen testing, display calibration, and how to use our features.',
  path: '/faq',
  keywords: ['FAQ', 'screen testing FAQ', 'how to test monitor', 'display testing questions'],
});

export default function FAQPage() {
  const faqData = faqSchema(FAQ_ITEMS);
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600">Find answers to common questions about using Screenglow tools.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <details key={index} className="group card cursor-pointer" open={index < 3}>
                <summary className="flex items-center justify-between font-semibold text-lg text-slate-900 group-open:text-cyan-600 transition-colors">
                  {item.question}
                  <ChevronDown className="w-6 h-6 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-base">{item.answer}</p>
              </details>
            ))}
          </div>

          {/* Additional FAQ Categories */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h2 className="text-3xl font-bold mb-8">Other Common Questions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>How do I access the tools?</li>
                  <li>Do I need to create an account?</li>
                  <li>Which browsers are supported?</li>
                  <li>Can I use on mobile devices?</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Technical Support</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>How do I troubleshoot issues?</li>
                  <li>Which resolutions are supported?</li>
                  <li>Can I use offline?</li>
                  <li>How do I report a bug?</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Display Testing</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>How to detect dead pixels?</li>
                  <li>What is screen uniformity?</li>
                  <li>How to test refresh rate?</li>
                  <li>Best practices for testing?</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Professional Use</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>Can I use for commercial?</li>
                  <li>Photography lighting setup?</li>
                  <li>Video production tips?</li>
                  <li>Streaming setup guide?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 pt-16 border-t border-slate-200 text-center">
            <h2 className="text-3xl font-bold mb-4">Didn't find your answer?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Get in touch with our support team. We're here to help!
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
