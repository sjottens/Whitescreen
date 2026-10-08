// app/(site)/(website)/faq/page.tsx

import { Metadata } from 'next';
import { pageMetadata, faqSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { FAQ_ITEMS } from '@/lib/constants';
import { PAGE_COPY } from '@/lib/page-copy';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    ...PAGE_COPY['/faq'],
    path: '/faq',
  });
}

export default async function FAQPage() {

  const faqData = faqSchema(FAQ_ITEMS);

  const localizedFaqItems = [
    { question: translate('faq_item_1_q'), answer: translate('faq_item_1_a') },
    { question: translate('faq_item_2_q'), answer: translate('faq_item_2_a') },
    { question: translate('faq_item_3_q'), answer: translate('faq_item_3_a') },
    { question: translate('faq_item_4_q'), answer: translate('faq_item_4_a') },
    { question: translate('faq_item_5_q'), answer: translate('faq_item_5_a') },
    { question: translate('faq_item_6_q'), answer: translate('faq_item_6_a') },
    { question: translate('faq_item_7_q'), answer: translate('faq_item_7_a') },
    { question: translate('faq_item_8_q'), answer: translate('faq_item_8_a') },
    { question: translate('faq_item_9_q'), answer: translate('faq_item_9_a') },
    { question: translate('faq_item_10_q'), answer: translate('faq_item_10_a') },
  ];

  return (
    <>
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('faq_title')}</h1>
          <p className="text-xl text-slate-700">
            {translate('faq_description')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {localizedFaqItems.map((item, index) => (
              <details key={index} className="card cursor-pointer">
                <summary className="text-lg font-semibold hover:text-cyan-600 transition-colors">
                  {item.question}
                </summary>
                <p className="text-slate-600 mt-4 pt-4 border-t">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
