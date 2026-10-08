// app/(site)/(website)/contact/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ui/contact-form';
import { pageMetadata } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { PAGE_COPY } from '@/lib/page-copy';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    ...PAGE_COPY['/contact'],
    path: '/contact',
  });
}

export default async function ContactPage() {
  const supportLabels = {
    supportTopics: 'How can we help?',
    item1: 'Technical issues with any test or tool',
    item2: 'Questions about test results and interpretation',
    item3: 'Feedback on content or accessibility',
    item4: 'Business requests and collaboration inquiries',
    writeEffective: 'How to get a faster response',
    write1: 'Include your device, browser, and operating system.',
    write2: 'Describe which page you used and where it failed.',
    write3: 'Attach a screenshot or short video if possible.',
    legalNotice: 'For legal or privacy requests, use this same form and start your message with "Privacy" or "Legal".',
  };

  return (
    <>
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('contact_title')}</h1>
          <p className="text-xl text-slate-700">
            {translate('contact_hero_subtitle')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            {/* Contact Form */}
            <div className="card mb-12 p-8">
              <h2 className="text-2xl font-bold mb-6">{translate('contact_form_title')}</h2>
              <ContactForm
                labels={{
                  emailLabel: translate('contact_form_email_label'),
                  messageLabel: translate('contact_form_message_label'),
                  sendButton: translate('contact_form_send_button'),
                  successMessage: translate('contact_form_success'),
                  errorMessage: translate('contact_form_error'),
                  sendingMessage: translate('contact_form_sending'),
                }}
              />
            </div>

            {/* Expertise & Trust Section */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2>{translate('contact_expertise')}</h2>
              <p>{translate('contact_expertise_text')}</p>

              <h2>{translate('contact_not_support')}</h2>
              <p>{translate('contact_not_support_text')}</p>

              <h2>{translate('contact_what_we_help')}</h2>
              <ul>
                <li>{translate('contact_help_1')}</li>
                <li>{translate('contact_help_2')}</li>
                <li>{translate('contact_help_3')}</li>
                <li>{translate('contact_help_4')}</li>
                <li>{translate('contact_help_5')}</li>
              </ul>

              <h2>{translate('contact_what_we_cant')}</h2>
              <ul>
                <li>{translate('contact_cant_1')}</li>
                <li>{translate('contact_cant_2')}</li>
                <li>{translate('contact_cant_3')}</li>
                <li>{translate('contact_cant_4')}</li>
              </ul>

              <h3>{supportLabels.supportTopics}</h3>
              <ul>
                <li>{supportLabels.item1}</li>
                <li>{supportLabels.item2}</li>
                <li>{supportLabels.item3}</li>
                <li>{supportLabels.item4}</li>
              </ul>

              <h3>{supportLabels.writeEffective}</h3>
              <ul>
                <li>{supportLabels.write1}</li>
                <li>{supportLabels.write2}</li>
                <li>{supportLabels.write3}</li>
              </ul>

              <p className="text-sm italic text-slate-600">{supportLabels.legalNotice}</p>
            </div>

            {/* Quick Links to Common Topics */}
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold mb-4">Common Topics You Might Be Interested In</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href={'/dead-pixel-fixer'} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  Dead Pixel & Stuck Pixel Guide
                </Link>
                <Link 
                  href={'/tools'} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  All Display Resources
                </Link>
                <Link 
                  href={'/faq'} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  FAQ & Buying Guides
                </Link>
                <Link 
                  href={'/privacy'} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  Privacy & Legal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
