// app/[locale]/(website)/contact/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import ContactForm from '@/components/ui/contact-form';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate('contact_title'),
    description: translate('contact_description'),
    path: '/contact',
  });
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const supportLabels =
    locale === 'nl'
      ? {
          supportTopics: 'Waarmee kunnen we helpen?',
          item1: 'Technische problemen met een test of tool',
          item2: 'Vragen over meetresultaten en interpretatie',
          item3: 'Feedback over content, toegankelijkheid of vertalingen',
          item4: 'Zakelijke vragen en samenwerkingen',
          writeEffective: 'Tips voor een snelle reactie',
          write1: 'Noem apparaat, browser en besturingssysteem.',
          write2: 'Beschrijf welke pagina je gebruikte en welke stap faalde.',
          write3: 'Voeg indien mogelijk een screenshot of korte video toe.',
          legalNotice: 'Juridische of privacyvragen? Gebruik het privacykanaal voor formele verzoeken.',
        }
      : locale === 'es'
        ? {
            supportTopics: 'En que podemos ayudarte?',
            item1: 'Problemas tecnicos con una prueba o herramienta',
            item2: 'Preguntas sobre resultados y su interpretacion',
            item3: 'Comentarios sobre contenido, accesibilidad o traducciones',
            item4: 'Consultas comerciales y colaboraciones',
            writeEffective: 'Consejos para una respuesta rapida',
            write1: 'Indica dispositivo, navegador y sistema operativo.',
            write2: 'Explica que pagina usaste y en que paso fallo.',
            write3: 'Adjunta captura o video corto si es posible.',
            legalNotice: 'Preguntas legales o de privacidad? Usa el canal de privacidad para solicitudes formales.',
          }
        : locale === 'de'
          ? {
              supportTopics: 'Wobei koennen wir helfen?',
              item1: 'Technische Probleme mit Test oder Tool',
              item2: 'Fragen zu Ergebnissen und Interpretation',
              item3: 'Feedback zu Inhalten, Barrierefreiheit oder Uebersetzungen',
              item4: 'Business-Anfragen und Kooperationen',
              writeEffective: 'Tipps fuer eine schnelle Rueckmeldung',
              write1: 'Bitte Geraet, Browser und Betriebssystem angeben.',
              write2: 'Beschreibe die Seite und den fehlerhaften Schritt.',
              write3: 'Wenn moeglich Screenshot oder kurzes Video beifuegen.',
              legalNotice: 'Rechtliche oder Datenschutzfragen? Bitte den Privacy-Kanal fuer formelle Anfragen nutzen.',
            }
          : {
              supportTopics: 'How can we help?',
              item1: 'Technical issues with any test or tool',
              item2: 'Questions about test results and interpretation',
              item3: 'Feedback on content, accessibility, or translations',
              item4: 'Business requests and collaboration inquiries',
              writeEffective: 'How to get a faster response',
              write1: 'Include your device, browser, and operating system.',
              write2: 'Describe which page you used and where it failed.',
              write3: 'Attach a screenshot or short video if possible.',
              legalNotice: 'For legal or privacy requests, use the privacy contact channel for formal processing.',
            };

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('contact'), path: '/contact' },
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
          { name: translate('home'), path: getLocalizedPath(locale, '/') },
          { name: translate('contact') },
        ]}
      />

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
            {/* Direct Contact */}
            <div className="card mb-12 p-8">
              <h2 className="text-2xl font-bold mb-4">{translate('contact_email_direct')}</h2>
              <p className="text-lg font-semibold text-slate-900 mb-2">
                {translate('contact_email_address')}
              </p>
              <p className="text-slate-600 mb-4">{translate('contact_response_time')}</p>
              <p className="text-slate-600">
                Reach out with questions about display technology, our guides, or feedback on the site.
              </p>
            </div>

            {/* Contact Form */}
            <div className="card mb-12 p-8">
              <h2 className="text-2xl font-bold mb-6">{translate('contact_form_title')}</h2>
              <ContactForm
                locale={locale}
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
                  href={getLocalizedPath(locale, '/dead-pixel-fixer')} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  Dead Pixel & Stuck Pixel Guide
                </Link>
                <Link 
                  href={getLocalizedPath(locale, '/tools')} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  All Display Resources
                </Link>
                <Link 
                  href={getLocalizedPath(locale, '/faq')} 
                  className="p-3 bg-white rounded hover:shadow transition-shadow text-blue-600 hover:underline"
                >
                  FAQ & Buying Guides
                </Link>
                <Link 
                  href={getLocalizedPath(locale, '/privacy')} 
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
