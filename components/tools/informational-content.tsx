import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';

type Topic = 'refresh-rate' | 'pixel-density' | 'monitor-comparison';

interface InformationalContentProps {
  locale: Locale;
  topic: Topic;
}

const topicLabels: Record<Topic, Record<Locale, string>> = {
  'refresh-rate': {
    en: 'refresh rate planning',
    nl: 'verversingssnelheid plannen',
    es: 'planificacion de frecuencia de actualizacion',
    de: 'Planung der Bildwiederholrate',
  },
  'pixel-density': {
    en: 'pixel density analysis',
    nl: 'pixeldichtheid analyse',
    es: 'analisis de densidad de pixeles',
    de: 'Analyse der Pixeldichte',
  },
  'monitor-comparison': {
    en: 'monitor comparison research',
    nl: 'monitorvergelijking onderzoek',
    es: 'investigacion de comparacion de monitores',
    de: 'Monitorvergleich und Recherche',
  },
};

const content = {
  en: {
    title: 'Practical Buying and Testing Context',
    p1: 'Use this page as part of an informed decision process. A single metric rarely tells the full story: real-world experience depends on panel type, motion behavior, color consistency, viewing distance, and your workflow priorities. Whether you are selecting a gaming display, office monitor, or creative workstation panel, combine tool output with hands-on checks and trusted reviews. This reduces the risk of overpaying for specifications that do not improve your daily use.',
    p2: 'For reliable results, test with your actual hardware profile: native resolution, typical brightness level, and the same applications you use most. Quick synthetic checks are useful, but they can miss contextual problems such as text clarity fatigue, scaling artifacts, VRR behavior, or color shifts at your preferred brightness. A practical comparison should always include usage scenarios like long reading sessions, mixed productivity windows, and media playback.',
    p3: 'If you are evaluating multiple options, document findings in a simple shortlist matrix. Include price, warranty, panel type, notable strengths, and known trade-offs. This avoids decision bias from marketing terms alone and gives you clear reasons for your final choice. Transparent notes are also useful later when troubleshooting, because you can compare current behavior to the expectations you recorded at purchase time.',
    p4: 'No online tool can replace calibrated instrumentation or controlled lab conditions. Treat these outcomes as high-quality guidance, then validate with your own environment and tolerance thresholds. A display that is technically stronger on paper may still be the wrong fit if it introduces eye strain, poor ergonomics, or inconsistent performance in your most important use case.',
    faqTitle: 'Common Questions Before Purchase',
    faqs: [
      'Should I optimize for maximum specs or balanced daily usability? In most cases, balanced usability wins for long-term satisfaction.',
      'Can two monitors with similar specs feel different? Yes. Tuning, overdrive behavior, coating, and quality control vary by model.',
      'Is one test enough to make a decision? No. Use multiple tests and combine them with real usage checks.',
    ],
    relatedTitle: 'Related Internal Pages',
    links: [
      { label: 'All Tools', path: '/tools' },
      { label: 'Contrast Test', path: '/contrast-test' },
      { label: 'Brightness Test', path: '/brightness-test' },
      { label: 'Monitor Compare Guides', path: '/compare' },
    ],
  },
  nl: {
    title: 'Praktische Koop- en Testcontext',
    p1: 'Gebruik deze pagina als onderdeel van een onderbouwde keuze. Een enkele metric vertelt zelden het hele verhaal: de praktijk hangt af van paneeltype, bewegingsscherpte, kleurconsistentie, kijkafstand en jouw prioriteiten. Of je nu een gamingmonitor, kantoorscherm of creatief werkpaneel zoekt, combineer toolresultaten met echte gebruikstests en betrouwbare reviews. Zo voorkom je dat je betaalt voor specificaties die in de praktijk weinig toevoegen.',
    p2: 'Voor betrouwbare uitkomsten test je met jouw echte gebruiksprofiel: native resolutie, normale helderheid en de apps die je dagelijks gebruikt. Synthetische tests zijn nuttig, maar missen soms context zoals tekstvermoeidheid, schaalartefacten, VRR-gedrag of kleurverschuiving bij jouw favoriete helderheid. Een goede vergelijking bevat daarom altijd scenario\'s als lange leessessies, productiviteit met meerdere vensters en mediagebruik.',
    p3: 'Vergelijk je meerdere modellen, leg bevindingen vast in een eenvoudige shortlist-matrix. Noteer prijs, garantie, paneeltype, sterke punten en bekende nadelen. Dat voorkomt beslissen op marketingtaal alleen en maakt je keuze transparanter. Deze notities helpen later ook bij troubleshooting, omdat je huidig gedrag kunt vergelijken met je verwachting op het moment van aankoop.',
    p4: 'Geen enkele online tool vervangt gekalibreerde meetapparatuur of laboratoriumomstandigheden. Zie de uitkomsten als kwalitatieve richting en valideer daarna in je eigen omgeving met jouw toleranties. Een scherm dat op papier beter is, kan alsnog de verkeerde keuze zijn als het vermoeiend kijkt of onstabiel presteert in jouw belangrijkste use-case.',
    faqTitle: 'Veelgestelde Vragen Voor Aankoop',
    faqs: [
      'Moet ik kiezen voor maximale specs of gebalanceerd dagelijks gebruik? In de praktijk wint gebalanceerd gebruik vaak op de lange termijn.',
      'Kunnen twee monitoren met vergelijkbare specs anders aanvoelen? Ja. Afstelling, overdrive, coating en kwaliteitscontrole verschillen per model.',
      'Is een enkele test genoeg voor een aankoopbeslissing? Nee. Combineer meerdere tests met echte praktijkcontrole.',
    ],
    relatedTitle: 'Gerelateerde Interne Pagina\'s',
    links: [
      { label: 'Alle Tools', path: '/tools' },
      { label: 'Contrasttest', path: '/contrast-test' },
      { label: 'Helderheidstest', path: '/brightness-test' },
      { label: 'Monitor Vergelijkingsgidsen', path: '/compare' },
    ],
  },
  es: {
    title: 'Contexto Practico de Compra y Pruebas',
    p1: 'Usa esta pagina como parte de una decision informada. Una sola metrica casi nunca cuenta toda la historia: la experiencia real depende del tipo de panel, comportamiento en movimiento, consistencia de color, distancia de vision y prioridades de uso. Tanto para gaming como para oficina o trabajo creativo, combina resultados de herramientas con pruebas reales y fuentes confiables para evitar pagar por especificaciones que no mejoran tu dia a dia.',
    p2: 'Para resultados utiles, prueba con tu perfil real: resolucion nativa, brillo habitual y las aplicaciones que realmente utilizas. Las pruebas sinteticas son utiles, pero no siempre detectan problemas de contexto como fatiga visual en texto, artefactos de escalado, comportamiento VRR o cambios de color a distintos niveles de brillo. Una comparacion seria siempre incluye escenarios de uso prolongado y multitarea.',
    p3: 'Si comparas varios modelos, registra hallazgos en una matriz simple: precio, garantia, tipo de panel, puntos fuertes y compromisos. Asi reduces sesgos de marketing y tomas decisiones con criterios claros. Estas notas tambien ayudan en soporte tecnico porque te permiten contrastar el comportamiento actual con lo que esperabas al momento de compra.',
    p4: 'Ninguna herramienta online reemplaza instrumentacion calibrada ni laboratorio controlado. Interpreta estos resultados como orientacion de alta calidad y valida despues en tu propio entorno. Un monitor con mejores cifras en papel puede no ser la mejor opcion si genera fatiga, ergonomia pobre o rendimiento inconsistente en tu flujo principal.',
    faqTitle: 'Preguntas Comunes Antes de Comprar',
    faqs: [
      'Conviene priorizar maximas especificaciones o equilibrio de uso diario? En la mayoria de casos, gana el equilibrio.',
      'Dos monitores con especificaciones similares pueden sentirse distintos? Si. Ajuste, overdrive, recubrimiento y control de calidad cambian.',
      'Una sola prueba basta para decidir? No. Combina varias pruebas con validacion de uso real.',
    ],
    relatedTitle: 'Paginas Internas Relacionadas',
    links: [
      { label: 'Todas las Herramientas', path: '/tools' },
      { label: 'Prueba de Contraste', path: '/contrast-test' },
      { label: 'Prueba de Brillo', path: '/brightness-test' },
      { label: 'Guias de Comparacion', path: '/compare' },
    ],
  },
  de: {
    title: 'Praktischer Kauf- und Testkontext',
    p1: 'Nutze diese Seite als Teil einer fundierten Entscheidung. Eine einzelne Kennzahl liefert selten das ganze Bild: Die reale Nutzung hangt von Paneltyp, Bewegungsverhalten, Farbkonstanz, Betrachtungsabstand und deinen Prioritaten ab. Ob Gaming, Office oder Creative Workstation, kombiniere Tool-Ergebnisse mit Praxistests und verlasslichen Quellen. So vermeidest du, fur Werte zu zahlen, die im Alltag kaum Nutzen bringen.',
    p2: 'Fur belastbare Ergebnisse teste mit deinem echten Profil: native Auflosung, typische Helligkeit und die Anwendungen, die du wirklich nutzt. Synthetische Checks sind hilfreich, erfassen aber nicht immer Kontextprobleme wie Textmudigkeit, Skalierungsartefakte, VRR-Verhalten oder Farbverschiebungen bei bestimmten Helligkeiten. Eine gute Bewertung umfasst deshalb immer reale Nutzungsszenarien.',
    p3: 'Wenn du mehrere Modelle vergleichst, dokumentiere die Ergebnisse in einer einfachen Matrix: Preis, Garantie, Paneltyp, Starken und bekannte Kompromisse. Das reduziert Marketing-Bias und macht die Endentscheidung nachvollziehbar. Diese Notizen helfen spater auch beim Troubleshooting, weil du Ist-Verhalten mit den ursprunglichen Erwartungen vergleichen kannst.',
    p4: 'Kein Online-Tool ersetzt kalibrierte Messhardware oder Laborbedingungen. Betrachte die Resultate als hochwertige Orientierung und validiere anschliessend in deiner eigenen Umgebung. Ein auf dem Papier starkeres Display kann trotzdem unpassend sein, wenn es Augenbelastung, schlechte Ergonomie oder inkonsistente Leistung im wichtigsten Einsatzfall verursacht.',
    faqTitle: 'Haufige Fragen Vor Dem Kauf',
    faqs: [
      'Sollte ich maximale Daten oder ausgewogene Alltagstauglichkeit priorisieren? Meist ist ausgewogene Nutzung langfristig besser.',
      'Konnen Monitore mit ahnlichen Specs unterschiedlich wirken? Ja. Tuning, Overdrive, Beschichtung und QA unterscheiden sich stark.',
      'Reicht ein einzelner Test fur die Entscheidung? Nein. Mehrere Tests plus reale Nutzung sind sinnvoll.',
    ],
    relatedTitle: 'Verwandte Interne Seiten',
    links: [
      { label: 'Alle Tools', path: '/tools' },
      { label: 'Kontrasttest', path: '/contrast-test' },
      { label: 'Helligkeitstest', path: '/brightness-test' },
      { label: 'Vergleichsleitfaden', path: '/compare' },
    ],
  },
} as const;

export default function InformationalContent({ locale, topic }: InformationalContentProps) {
  const c = content[locale];
  const topicLabel = topicLabels[topic][locale];

  return (
    <section className="mt-12 rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 md:p-10">
      <h2 className="text-3xl font-bold text-slate-900 mb-5">{c.title}</h2>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>{c.p1}</p>
        <p>{c.p2}</p>
        <p>{c.p3}</p>
        <p>{c.p4}</p>
        <p>
          {locale === 'nl' && 'Deze pagina ondersteunt specifiek: '}
          {locale === 'en' && 'This page specifically supports: '}
          {locale === 'es' && 'Esta pagina apoya especificamente: '}
          {locale === 'de' && 'Diese Seite unterstutzt speziell: '}
          <strong>{topicLabel}</strong>.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">{c.faqTitle}</h3>
        <ul className="space-y-2 text-slate-700">
          {c.faqs.map((faq, idx) => (
            <li key={idx} className="rounded-lg border border-slate-200 bg-white p-3">
              {faq}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-3">{c.relatedTitle}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {c.links.map((item) => (
            <Link
              key={item.path}
              href={getLocalizedPath(locale, item.path)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 hover:border-cyan-300 hover:text-cyan-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
