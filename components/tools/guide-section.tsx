// components/tools/guide-section.tsx - Reusable guide section component for all tools

import Link from 'next/link';
import { TOOL_GUIDES } from '@/lib/tool-guides';
import { t } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';

interface GuideSectionProps {
  toolId: string;
  locale?: Locale;
}

export default function GuideSection({ toolId, locale = 'en' }: GuideSectionProps) {
  const translate = t(locale);
  const guide = TOOL_GUIDES[toolId];

  if (!guide) {
    return null;
  }

  const localized = {
    en: {
      deepDiveTitle: 'In-Depth Guide and Practical Context',
      deepDiveIntro:
        'This page is designed as an educational reference, not just a quick utility. The goal is to help you understand what the test checks, why the result matters, and when a detected issue is normal behavior versus a real defect. Display behavior always depends on panel type, ambient lighting, calibration, refresh settings, and viewing angle. For reliable conclusions, test multiple times and combine this page with related diagnostics. If your first result looks suspicious, repeat the test after warming up your display for at least 20 to 30 minutes, then compare outcomes before changing hardware settings.',
      practicalWorkflowTitle: 'Recommended Testing Workflow',
      practicalWorkflow:
        'Start with a controlled setup: disable extreme image enhancements, set a neutral color profile, and reduce room glare. Use this tool in fullscreen mode first, then repeat at normal browser size to identify scaling artifacts. Log what you observe in a simple checklist: location of issue, background color, brightness level, and whether the defect is constant or intermittent. This process makes support claims and warranty discussions easier because you can describe repeatable evidence instead of a one-time visual impression.',
      limitationsTitle: 'Limitations and Interpretation',
      limitations:
        'No browser-based test can replace hardware calibration devices or professional lab measurements. These tools are excellent for practical screening and daily QA, but they should be treated as directional evidence. A panel can pass a visual test and still require calibration for color-critical production work. Conversely, slight non-uniformity can appear during synthetic tests and remain invisible in normal use. Treat results as part of a broader decision process that includes your workflow needs, not just pass/fail criteria.',
      troubleshootingTitle: 'Common Problems and Fixes',
      troubleshooting:
        'If results seem inconsistent, check basics first: disable night mode, adaptive brightness, and OS color filters. Confirm your browser zoom is 100% and try another browser to rule out rendering quirks. On laptops, switch between battery and plugged-in mode because panel behavior may change with power policies. On high-refresh displays, test at native resolution and native refresh rate. If a suspected issue appears only on one test pattern but not others, you may be seeing content-dependent behavior rather than a hardware fault.',
      faqContextTitle: 'Before You Decide on Repair or Replacement',
      faqContext:
        'Use the FAQ below as practical guidance, not legal advice. Manufacturer pixel and uniformity policies vary by model, region, and purchase channel. Document findings with photos, include serial/model numbers, and capture the exact test condition when contacting support. If a problem affects only one app or one cable path, verify source device, cable quality, and GPU settings before concluding the panel is defective. A methodical approach reduces false positives and gives you stronger evidence when escalation is needed.',
      relatedReadingTitle: 'Related Internal Guides',
      relatedReadingIntro:
        'For a complete assessment, combine this page with adjacent tests and explanations. These internal links help you verify symptoms from multiple angles:',
      limitationsListTitle: 'Typical Constraints to Keep in Mind',
      links: [
        { label: 'Brightness Test', path: '/brightness-test' },
        { label: 'Contrast Test', path: '/contrast-test' },
        { label: 'Dead Pixel Test', path: '/dead-pixel-test' },
        { label: 'Tools Overview', path: '/tools' },
      ],
      constraints: [
        'Ambient light can hide or exaggerate defects.',
        'Factory profiles may prioritize vivid color over accuracy.',
        'Camera photos of the screen can misrepresent brightness and tint.',
        'Panel warm-up time can change apparent uniformity.',
      ],
    },
    nl: {
      deepDiveTitle: 'Uitgebreide Uitleg en Praktische Context',
      deepDiveIntro:
        'Deze pagina is bedoeld als informatiebron en niet alleen als snelle tool. Het doel is dat je begrijpt wat de test precies meet, waarom de uitkomst relevant is en wanneer een afwijking normaal gedrag is in plaats van een echt defect. Schermgedrag hangt altijd af van paneeltype, omgevingslicht, kalibratie, verversingssnelheid en kijkhoek. Test daarom meerdere keren en combineer deze pagina met verwante controles. Zie je direct een opvallend resultaat, herhaal de test na 20 tot 30 minuten opwarming van het scherm.',
      practicalWorkflowTitle: 'Aanbevolen Testworkflow',
      practicalWorkflow:
        'Begin met een gecontroleerde setup: zet extreme beeldverbetering uit, gebruik een neutraal kleurprofiel en verminder reflecties in de ruimte. Voer de test eerst fullscreen uit en daarna in normale browsergrootte om schaalartefacten te herkennen. Noteer je observaties in een korte checklist: locatie van het probleem, achtergrondkleur, helderheidsniveau en of het constant of wisselend optreedt. Met deze aanpak kun je bij support of garantie een reproduceerbare onderbouwing geven in plaats van een eenmalige indruk.',
      limitationsTitle: 'Beperkingen en Interpretatie',
      limitations:
        'Een browsertest vervangt geen hardwarekalibrator of labmeting. Deze tools zijn sterk voor praktische screening en dagelijkse kwaliteitscontrole, maar resultaten blijven indicatief. Een scherm kan visueel slagen en alsnog kalibratie nodig hebben voor kleurkritisch werk. Andersom kan lichte non-uniformiteit in synthetische patronen zichtbaar zijn maar in dagelijks gebruik geen hinder geven. Beoordeel resultaten daarom altijd in de context van jouw gebruikssituatie.',
      troubleshootingTitle: 'Veelvoorkomende Problemen en Oplossingen',
      troubleshooting:
        'Lijken resultaten inconsistent, controleer eerst de basis: nachtmodus uit, adaptieve helderheid uit en eventuele kleurfilters in het besturingssysteem uitzetten. Controleer browserzoom op 100% en test eventueel in een andere browser. Op laptops kan gedrag verschillen tussen accu en netstroom. Gebruik bij high-refresh monitoren altijd native resolutie en native refresh rate. Zie je een afwijking alleen in een specifiek patroon, dan kan dit contentafhankelijk gedrag zijn in plaats van een hardwarefout.',
      faqContextTitle: 'Voordat Je Kiest voor Reparatie of Vervanging',
      faqContext:
        'De FAQ hieronder is bedoeld als praktische hulp, niet als juridisch advies. Fabrikanten hanteren verschillende pixel- en uniformiteitsnormen per model en regio. Leg bevindingen vast met foto\'s, noteer model- en serienummer en vermeld de exacte testomstandigheden bij supportcontact. Komt het probleem alleen voor in een specifieke app of met een bepaalde kabel, controleer dan eerst bronapparaat, kabelkwaliteit en GPU-instellingen.',
      relatedReadingTitle: 'Gerelateerde Interne Gidsen',
      relatedReadingIntro:
        'Voor een volledige beoordeling is het verstandig om meerdere tests te combineren. Gebruik deze interne links om signalen vanuit verschillende invalshoeken te controleren:',
      limitationsListTitle: 'Praktische Grenzen om Rekening Mee te Houden',
      links: [
        { label: 'Helderheidstest', path: '/brightness-test' },
        { label: 'Contrasttest', path: '/contrast-test' },
        { label: 'Dode Pixel Test', path: '/dead-pixel-test' },
        { label: 'Tooloverzicht', path: '/tools' },
      ],
      constraints: [
        'Omgevingslicht kan defecten verbergen of juist versterken.',
        'Fabrieksprofielen kiezen vaak levendigheid boven nauwkeurigheid.',
        'Foto\'s van schermen kunnen helderheid en tint vertekenen.',
        'Opwarmtijd van het paneel kan uniformiteit zichtbaar veranderen.',
      ],
    },
    es: {
      deepDiveTitle: 'Guia Detallada y Contexto Practico',
      deepDiveIntro:
        'Esta pagina funciona como referencia educativa, no solo como una herramienta rapida. La idea es entender que evalua la prueba, por que el resultado importa y cuando una anomalia puede ser comportamiento normal en vez de un defecto real. El comportamiento de una pantalla depende del tipo de panel, la luz ambiental, la calibracion, la frecuencia de actualizacion y el angulo de vision. Repite la prueba varias veces y combinala con otras paginas relacionadas para confirmar conclusiones.',
      practicalWorkflowTitle: 'Flujo de Trabajo Recomendado',
      practicalWorkflow:
        'Empieza con una configuracion controlada: desactiva mejoras agresivas de imagen, usa un perfil de color neutro y reduce reflejos en la habitacion. Ejecuta la prueba en pantalla completa y luego en tamano normal del navegador para detectar artefactos de escalado. Anota observaciones clave: ubicacion del problema, color de fondo, nivel de brillo y si el defecto es constante o intermitente. Esta metodologia te ayuda a presentar evidencia repetible en soporte tecnico o garantia.',
      limitationsTitle: 'Limitaciones e Interpretacion',
      limitations:
        'Las pruebas en navegador no sustituyen equipos de calibracion profesional ni mediciones de laboratorio. Son excelentes para control practico y diagnostico inicial, pero deben interpretarse como evidencia orientativa. Una pantalla puede verse correcta y aun requerir calibracion para trabajo de color critico. Tambien puede ocurrir lo contrario: pequenas variaciones visibles en patrones sinteticos que no afectan el uso diario. Evalua los resultados segun tu caso de uso real.',
      troubleshootingTitle: 'Problemas Comunes y Soluciones',
      troubleshooting:
        'Si observas resultados inconsistentes, revisa primero lo basico: desactiva modo nocturno, brillo adaptativo y filtros de color del sistema operativo. Verifica zoom al 100% y prueba en otro navegador. En portatiles, compara bateria vs corriente porque la politica energetica puede alterar el panel. En monitores de alta frecuencia, prueba siempre con resolucion y refresco nativos. Si el problema aparece solo en un patron concreto, puede ser dependiente del contenido y no una falla fisica.',
      faqContextTitle: 'Antes de Decidir Reparacion o Reemplazo',
      faqContext:
        'Usa la seccion FAQ como orientacion practica. Las politicas de pixeles y uniformidad cambian segun marca, modelo y region. Documenta hallazgos con fotos, numero de serie/modelo y condiciones exactas de prueba al contactar soporte. Si el problema aparece solo con una aplicacion o cable especifico, valida antes el dispositivo fuente, la calidad del cable y la configuracion de la GPU.',
      relatedReadingTitle: 'Guias Internas Relacionadas',
      relatedReadingIntro:
        'Para una evaluacion completa, combina esta pagina con otras pruebas. Estos enlaces internos ayudan a validar sintomas desde varios angulos:',
      limitationsListTitle: 'Restricciones Habituales a Considerar',
      links: [
        { label: 'Prueba de Brillo', path: '/brightness-test' },
        { label: 'Prueba de Contraste', path: '/contrast-test' },
        { label: 'Prueba de Pixeles Muertos', path: '/dead-pixel-test' },
        { label: 'Resumen de Herramientas', path: '/tools' },
      ],
      constraints: [
        'La luz ambiental puede ocultar o exagerar defectos.',
        'Los perfiles de fabrica pueden priorizar impacto visual sobre precision.',
        'Las fotos de pantalla pueden distorsionar brillo y color.',
        'El calentamiento del panel puede cambiar la uniformidad percibida.',
      ],
    },
    de: {
      deepDiveTitle: 'Ausfuhrlicher Leitfaden und Praxisbezug',
      deepDiveIntro:
        'Diese Seite ist als Informationsquelle gedacht und nicht nur als schnelles Tool. Ziel ist, dass du verstehst, was der Test wirklich misst, warum das Ergebnis wichtig ist und wann eine Auffalligkeit normales Verhalten statt eines echten Defekts sein kann. Das Verhalten eines Displays hangt von Paneltyp, Umgebungslicht, Kalibrierung, Bildwiederholrate und Blickwinkel ab. Deshalb lohnt es sich, Tests mehrfach zu wiederholen und mit verwandten Seiten zu kombinieren.',
      practicalWorkflowTitle: 'Empfohlener Testablauf',
      practicalWorkflow:
        'Starte mit einer kontrollierten Ausgangslage: Deaktiviere starke Bildverbesserungen, nutze ein neutrales Farbprofil und reduziere Spiegelungen im Raum. Fuhre den Test zuerst im Vollbild aus und danach in normaler Browsergroesse, um Skalierungsartefakte zu erkennen. Dokumentiere Beobachtungen systematisch: Position des Problems, Hintergrundfarbe, Helligkeitsstufe sowie konstantes oder sporadisches Auftreten. So hast du belastbare Angaben fur Support und Gewahrleistungsanfragen.',
      limitationsTitle: 'Grenzen und Interpretation',
      limitations:
        'Browsertests ersetzen keine Hardwarekalibrierung und keine Labormessung. Sie eignen sich hervorragend fur praktische Vorprufung und laufende Qualitatskontrolle, bleiben aber eine Richtungsangabe. Ein Display kann visuell bestehen und trotzdem fur farbkritische Arbeit kalibriert werden mussen. Umgekehrt konnen leichte Unregelmassigkeiten in Testmustern auffallen, die im Alltag kaum relevant sind. Werte Ergebnisse immer im Kontext deines realen Einsatzes aus.',
      troubleshootingTitle: 'Haufige Probleme und Losungen',
      troubleshooting:
        'Wenn Ergebnisse schwanken, prufe zuerst die Grundlagen: Nachtmodus aus, adaptive Helligkeit aus, Betriebssystem-Farbfilter aus. Stelle Browserzoom auf 100% und teste zusatzlich in einem zweiten Browser. Bei Notebooks kann das Verhalten zwischen Akku- und Netzbetrieb variieren. Bei High-Refresh-Monitoren immer native Auflosung und native Bildwiederholrate verwenden. Tritt ein Problem nur in einem Muster auf, kann es inhaltsabhangig statt hardwarebedingt sein.',
      faqContextTitle: 'Vor Reparatur oder Austausch Entscheiden',
      faqContext:
        'Nutze die FAQ als praktische Orientierung. Herstellerregeln zu Pixeln und Uniformitat unterscheiden sich je nach Modell, Region und Handler. Dokumentiere Befunde mit Fotos, Seriennummer und exakten Testbedingungen fur den Supportfall. Wenn das Problem nur in einer App oder mit einem bestimmten Kabel auftritt, zuerst Quelle, Kabelqualitat und GPU-Einstellungen prufen.',
      relatedReadingTitle: 'Verwandte Interne Leitfaden',
      relatedReadingIntro:
        'Fur eine belastbare Bewertung solltest du mehrere Tests kombinieren. Diese internen Links helfen, Symptome aus verschiedenen Blickwinkeln zu prufen:',
      limitationsListTitle: 'Typische Einschrankungen im Alltag',
      links: [
        { label: 'Helligkeitstest', path: '/brightness-test' },
        { label: 'Kontrasttest', path: '/contrast-test' },
        { label: 'Dead-Pixel-Test', path: '/dead-pixel-test' },
        { label: 'Tool-Ubersicht', path: '/tools' },
      ],
      constraints: [
        'Umgebungslicht kann Fehler verbergen oder uberbetonen.',
        'Werkseinstellungen priorisieren oft Wirkung statt Genauigkeit.',
        'Display-Fotos konnen Helligkeit und Farbstich verfalschen.',
        'Aufwarmzeit des Panels beeinflusst die wahrgenommene Uniformitat.',
      ],
    },
  }[locale];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mt-12 bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 border border-slate-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">{translate('guide_how_to_use_title' as any)}</h2>

        {/* What is section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">{translate('guide_what_is_test_title' as any)}</h3>
          <p className="text-slate-700 leading-relaxed">{guide.whatIs}</p>
        </div>

        {/* Main sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {guide.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">{section.title}</h3>
              {section.items ? (
                <ul className="text-slate-700 space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <strong>{item.split(':')[0]}:</strong>
                      {item.includes(':') ? item.split(':').slice(1).join(':') : ''}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-700">{section.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Tips section */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">{translate('guide_testing_tips_title' as any)}</h3>
          <ul className="text-slate-700 space-y-3 grid md:grid-cols-2 gap-4">
            {guide.tips.map((tip, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-cyan-600 mr-3 font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Keyboard shortcuts section (if available) */}
        {guide.shortcuts && guide.shortcuts.length > 0 && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">{translate('keyboard_shortcuts')}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700">
              {guide.shortcuts.map((shortcut, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="bg-slate-200 text-slate-900 px-3 py-1 rounded font-mono font-semibold mr-3">
                    {shortcut.key}
                  </span>
                  <span>{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pro tip section */}
        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-slate-700 text-sm leading-relaxed">
            <strong className="text-cyan-700">{translate('guide_pro_tip_label' as any)}:</strong> {guide.proTip}
          </p>
        </div>

        {/* Long-form educational content for quality and policy compliance */}
        <div className="mt-10 pt-8 border-t border-slate-200 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{localized.deepDiveTitle}</h3>
            <p className="text-slate-700 leading-relaxed">{localized.deepDiveIntro}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{localized.practicalWorkflowTitle}</h3>
            <p className="text-slate-700 leading-relaxed mb-4">{localized.practicalWorkflow}</p>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-700">
              {guide.tips.map((tip, idx) => (
                <li key={idx} className="bg-white border border-slate-200 rounded-lg p-3">
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{localized.limitationsTitle}</h3>
            <p className="text-slate-700 leading-relaxed mb-4">{localized.limitations}</p>
            <h4 className="text-lg font-semibold text-slate-900 mb-2">{localized.limitationsListTitle}</h4>
            <ul className="space-y-2 text-slate-700">
              {localized.constraints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-700 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{localized.troubleshootingTitle}</h3>
            <p className="text-slate-700 leading-relaxed">{localized.troubleshooting}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{localized.faqContextTitle}</h3>
            <p className="text-slate-700 leading-relaxed">{localized.faqContext}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">{localized.relatedReadingTitle}</h3>
            <p className="text-slate-700 mb-4">{localized.relatedReadingIntro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {localized.links.map((item) => (
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
        </div>
      </div>
    </div>
  );
}
