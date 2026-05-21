// app/[locale]/(website)/contact/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'Contact Screenglow',
    description: 'Get in touch with Screenglow team. We\'re here to help with any questions about our screen testing tools.',
    path: '/contact',
  });
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const locale = await getLocaleFromParams(params);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">Contact Us</h1>
          <p className="text-xl text-slate-700">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-2xl">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg" rows={5} required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700">
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-slate-600">support@screenglow.eu</p>
            </div>
            <div className="card">
              <h3 className="text-lg font-bold mb-2">Response Time</h3>
              <p className="text-slate-600">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
