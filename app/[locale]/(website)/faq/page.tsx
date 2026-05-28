// app/[locale]/(website)/faq/page.tsx

import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, faqSchema, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';
import { FAQ_ITEMS } from '@/lib/constants';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'Frequently Asked Questions',
    description: 'Get answers to common questions about TestaScreen tools and how to use our screen testing features.',
    path: '/faq',
  });
}

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const locale = await getLocaleFromParams(params);
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

      <Breadcrumbs
        items={[
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('faq') },
        ]}
      />

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
