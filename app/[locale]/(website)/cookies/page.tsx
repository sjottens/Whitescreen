import { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

const cookieContent = {
  en: {
    title: 'Cookie Policy',
    description: 'Learn which cookies are used on TestaScreen and how you can control them.',
    intro:
      'This Cookie Policy explains what cookies are, how TestaScreen uses them, and what choices you have. We keep cookie usage as limited and transparent as possible.',
    sections: [
      {
        heading: '1. What Cookies Are',
        body:
          'Cookies are small text files stored on your device by websites. They can be used for essential functionality, remembering preferences, analytics, and advertising.',
      },
      {
        heading: '2. Cookies We Use',
        body:
          'We use only essential technical cookies needed for core site behavior, such as language preference. We do not set first-party marketing profiles through tracking scripts.',
      },
      {
        heading: '3. Third-Party Services',
        body:
          'Some integrated services, including advertising or embedded resources, may set their own cookies according to their policies. Review those providers for full details.',
      },
      {
        heading: '4. Managing Cookies',
        body:
          'You can block or delete cookies in your browser settings. Restricting cookies may affect language persistence and some interactive functionality.',
      },
      {
        heading: '5. Advertising and Monetization',
        body:
          'This website uses Google AdSense to display targeted advertisements. Google stores cookies to understand your browsing interests and show relevant ads. We receive revenue from ad impressions and clicks, which supports our free tools. You can control personalized advertising in your Google Ad Settings or browser privacy settings.',
      },
      {
        heading: '6. Consent and Updates',
        body:
          'By continuing to use the website, you consent to the cookie use described in this policy where legally permitted. We may update this page as integrations or regulations change.',
      },
    ],
  },
  nl: {
    title: 'Cookiebeleid',
    description: 'Lees welke cookies op TestaScreen worden gebruikt en hoe je deze kunt beheren.',
    intro:
      'Dit cookiebeleid legt uit wat cookies zijn, hoe TestaScreen ze gebruikt en welke keuzes je hebt. We beperken cookiegebruik tot het noodzakelijke en communiceren dit transparant.',
    sections: [
      {
        heading: '1. Wat cookies zijn',
        body:
          'Cookies zijn kleine tekstbestanden die websites op je apparaat opslaan. Ze kunnen worden gebruikt voor essentiele functionaliteit, voorkeuren, analytics en advertenties.',
      },
      {
        heading: '2. Welke cookies wij gebruiken',
        body:
          'Wij gebruiken alleen technische cookies die nodig zijn voor basisfunctionaliteit, zoals taalvoorkeur. We plaatsen geen first-party marketingprofielen via tracking-scripts.',
      },
      {
        heading: '3. Diensten van derden',
        body:
          'Sommige geintegreerde diensten, waaronder advertentie- of embedded diensten, kunnen eigen cookies plaatsen volgens hun eigen beleid. Raadpleeg die partijen voor details.',
      },
      {
        heading: '4. Cookies beheren',
        body:
          'Je kunt cookies blokkeren of verwijderen via je browserinstellingen. Houd er rekening mee dat functies zoals taalonthouding dan beperkt kunnen werken.',
      },
      {
        heading: '5. Reclame en geldverdienen',
        body:
          'Deze website maakt gebruik van Google AdSense om doelgerichte advertenties weer te geven. Google slaat cookies op om je browserinteresses te begrijpen en relevante advertenties te tonen. Wij ontvangen inkomsten van advertentieweergaven en klikken, waarmee we onze gratis tools kunnen aanbieden. Je kunt gepersonaliseerde advertenties uitzetten via Google Ad Settings of browserinstellingen.',
      },
      {
        heading: '6. Toestemming en updates',
        body:
          'Door de website te blijven gebruiken stem je in met het in dit beleid beschreven cookiegebruik, voor zover wettelijk toegestaan. Deze pagina kan worden bijgewerkt.',
      },
    ],
  },
  es: {
    title: 'Politica de Cookies',
    description: 'Conoce que cookies se usan en TestaScreen y como puedes controlarlas.',
    intro:
      'Esta Politica de Cookies explica que son las cookies, como las usa TestaScreen y que opciones tienes. Limitamos su uso al minimo necesario y actuamos con transparencia.',
    sections: [
      {
        heading: '1. Que son las cookies',
        body:
          'Las cookies son pequenos archivos de texto que los sitios web guardan en tu dispositivo. Pueden servir para funciones esenciales, preferencias, analitica y publicidad.',
      },
      {
        heading: '2. Cookies que utilizamos',
        body:
          'Usamos solo cookies tecnicas esenciales para el funcionamiento basico, como la preferencia de idioma. No creamos perfiles de marketing propios mediante scripts de rastreo.',
      },
      {
        heading: '3. Servicios de terceros',
        body:
          'Algunos servicios integrados, incluidos recursos publicitarios o incrustados, pueden establecer sus propias cookies segun sus politicas. Consulta sus avisos para mas informacion.',
      },
      {
        heading: '4. Gestion de cookies',
        body:
          'Puedes bloquear o eliminar cookies en la configuracion de tu navegador. Si limitas cookies, algunas funciones como recordar idioma pueden verse afectadas.',
      },
      {
        heading: '5. Publicidad y monetizacion',
        body:
          'Este sitio utiliza Google AdSense para mostrar anuncios dirigidos. Google almacena cookies para entender tus intereses de navegacion y mostrar anuncios relevantes. Recibimos ingresos de impresiones de anuncios y clics, que financian nuestras herramientas gratuitas. Puedes controlar publicidad personalizada en Google Ad Settings o en la configuracion de privacidad del navegador.',
      },
      {
        heading: '6. Consentimiento y cambios',
        body:
          'Al seguir usando el sitio aceptas el uso de cookies descrito en esta politica cuando la ley lo permita. Podemos actualizar esta pagina por cambios tecnicos o regulatorios.',
      },
    ],
  },
  de: {
    title: 'Cookie-Richtlinie',
    description: 'Erfahre, welche Cookies TestaScreen verwendet und wie du sie steuern kannst.',
    intro:
      'Diese Cookie-Richtlinie erklaert, was Cookies sind, wie TestaScreen sie verwendet und welche Wahlmoeglichkeiten du hast. Wir halten den Einsatz so gering und transparent wie moeglich.',
    sections: [
      {
        heading: '1. Was Cookies sind',
        body:
          'Cookies sind kleine Textdateien, die Websites auf deinem Geraet speichern. Sie koennen fuer essentielle Funktionen, Praeferenzen, Analytik und Werbung genutzt werden.',
      },
      {
        heading: '2. Von uns verwendete Cookies',
        body:
          'Wir verwenden nur technisch notwendige Cookies fuer Kernfunktionen wie die Sprachpraeferenz. Wir setzen keine eigenen Marketingprofile per Tracking-Skripten.',
      },
      {
        heading: '3. Drittanbieter-Dienste',
        body:
          'Einige eingebundene Dienste, darunter Werbe- oder Embedded-Ressourcen, koennen eigene Cookies gemaess ihrer Richtlinien setzen. Bitte pruefe diese Anbieter separat.',
      },
      {
        heading: '4. Cookies verwalten',
        body:
          'Du kannst Cookies in den Browsereinstellungen blockieren oder loeschen. Das kann Auswirkungen auf Funktionen wie Sprachspeicherung und Interaktivitaet haben.',
      },
      {
        heading: '5. Werbung und Monetarisierung',
        body:
          'Diese Website nutzt Google AdSense, um zielgerichtete Anzeigen anzuzeigen. Google speichert Cookies, um deine Browsing-Interessen zu verstehen und relevante Anzeigen zu zeigen. Wir erhalten Einnahmen durch Anzeigenimpressionen und Klicks, die unsere kostenlosen Tools finanzieren. Du kannst personalisierte Werbung in Google Ad Settings oder Browsereinstellungen deaktivieren.',
      },
      {
        heading: '6. Einwilligung und Aktualisierungen',
        body:
          'Durch die weitere Nutzung der Website stimmst du der hier beschriebenen Cookie-Nutzung zu, soweit rechtlich zulaessig. Wir aktualisieren diese Seite bei Bedarf.',
      },
    ],
  },
} as const;

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const content = cookieContent[locale] || cookieContent.en;

  return generateMultilingualMetadata({
    locale,
    title: content.title,
    description: content.description,
    path: '/cookies',
  });
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const content = cookieContent[locale] || cookieContent.en;

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: content.title, path: '/cookies' },
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
          { name: content.title },
        ]}
      />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{content.title}</h1>
          <p className="text-xl text-slate-700">{content.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-3xl prose prose-lg">
          <p>{content.intro}</p>
          {content.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
