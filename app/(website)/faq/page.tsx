// app/(website)/faq/page.tsx - English-only FAQ page

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMetadata as generateBaseMetadata, faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { t } from '@/lib/translations';
import { FAQ_ITEMS } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  return generateBaseMetadata({
    title: 'Frequently Asked Questions',
    description: 'Get answers to common questions about TestaScreen tools and how to use our screen testing features.',
    path: '/faq',
  });
}

export default function FAQPage() {
  const locale = 'en';
  const translate = t(locale);

  const faqData = faqSchema(FAQ_ITEMS);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('faq'), path: '/faq' },
    ],
    locale
  );

  const localizedFaqItems = [
    { question: translate('faq_item_1_q'), answer: translate('faq_item_1_a') },
    { question: translate('faq_item_2_q'), answer: translate('faq_item_2_a') },
    { question: translate('faq_item_3_q'), answer: translate('faq_item_3_a') },
    { question: translate('faq_item_4_q'), answer: translate('faq_item_4_a') },
    { question: translate('faq_item_5_q'), answer: translate('faq_item_5_a') },
    { question: translate('faq_item_6_q'), answer: translate('faq_item_6_a') },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        suppressHydrationWarning
      />

      <Breadcrumbs
        items={[
          { name: translate('home'), path: '/' },
          { name: translate('faq') },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('faq_title')}</h1>
          <p className="text-xl text-slate-700">
            {translate('faq_subtitle')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {localizedFaqItems.map((item, index) => (
              <details key={index} className="group card cursor-pointer p-6">
                <summary className="flex items-center justify-between font-semibold">
                  {item.question}
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
