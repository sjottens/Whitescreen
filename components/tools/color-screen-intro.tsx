'use client';

import { Palette, CheckCircle } from 'lucide-react';

type LocaleTexts = { en: string; nl: string; es: string; de: string };

interface ColorScreenIntroProps {
  locale: string;
  colorName: string;
  colorHex: string;
  colorLabel: string;
  useCases: string[];
}

export default function ColorScreenIntro({ locale, colorName, colorHex, colorLabel, useCases }: ColorScreenIntroProps) {
  const lc = (texts: LocaleTexts): string => texts[locale as keyof LocaleTexts] ?? texts.en;

  const colorDescriptions: Record<string, LocaleTexts> = {
    white: {
      en: 'A pure white screen (RGB 255,255,255) ideal for testing brightness, display uniformity, and screen cleaning.',
      nl: 'Een puur wit scherm (RGB 255,255,255) ideaal voor het testen van helderheid, schermuniformiteit en schoonmaken.',
      es: 'Una pantalla blanca pura (RGB 255,255,255) ideal para probar el brillo, la uniformidad del display y la limpieza de la pantalla.',
      de: 'Ein reines weißes Display (RGB 255,255,255) ideal zum Testen von Helligkeit, Anzeigeuniformität und Schirmreinigung.',
    },
    black: {
      en: 'A pure black screen (RGB 0,0,0) perfect for testing dark levels, contrast, and detecting dead pixels on dark backgrounds.',
      nl: 'Een puur zwart scherm (RGB 0,0,0) perfect voor het testen van donkere niveaus, contrast en het detecteren van dode pixels op donkere achtergronden.',
      es: 'Una pantalla negra pura (RGB 0,0,0) perfecta para probar los niveles oscuros, el contraste y detectar píxeles muertos en fondos oscuros.',
      de: 'Ein reines schwarzes Display (RGB 0,0,0) perfekt zum Testen von Dunkelniveaus, Kontrast und zum Erkennen toter Pixel auf dunklen Hintergründen.',
    },
    red: {
      en: 'A pure red screen (RGB 255,0,0) for testing red channel response, color separation, and red pixel defects.',
      nl: 'Een puur rood scherm (RGB 255,0,0) voor het testen van de rode kanaalrespons, kleurscheiding en rode pixeldefecten.',
      es: 'Una pantalla roja pura (RGB 255,0,0) para probar la respuesta del canal rojo, la separación de colores y los defectos de píxeles rojos.',
      de: 'Ein reines rotes Display (RGB 255,0,0) zum Testen der Rotkanalreaktion, Farbtrennung und roter Pixelfehler.',
    },
    green: {
      en: 'A pure green screen (RGB 0,255,0) for testing green channel response, color separation, and green pixel defects.',
      nl: 'Een puur groen scherm (RGB 0,255,0) voor het testen van de groene kanaalrespons, kleurscheiding en groene pixeldefecten.',
      es: 'Una pantalla verde pura (RGB 0,255,0) para probar la respuesta del canal verde, la separación de colores y los defectos de píxeles verdes.',
      de: 'Ein reines grünes Display (RGB 0,255,0) zum Testen der Grünkanalreaktion, Farbtrennung und grüner Pixelfehler.',
    },
    blue: {
      en: 'A pure blue screen (RGB 0,0,255) for testing blue channel response, color separation, and blue pixel defects.',
      nl: 'Een puur blauw scherm (RGB 0,0,255) voor het testen van de blauwe kanaalrespons, kleurscheiding en blauwe pixeldefecten.',
      es: 'Una pantalla azul pura (RGB 0,0,255) para probar la respuesta del canal azul, la separación de colores y los defectos de píxeles azules.',
      de: 'Ein reines blaues Display (RGB 0,0,255) zum Testen der Blaükanalreaktion, Farbtrennung und blauer Pixelfehler.',
    },
    yellow: {
      en: 'A yellow screen (RGB 255,255,0) combining red and green channels for warm color spectrum testing.',
      nl: 'Een geel scherm (RGB 255,255,0) dat rode en groene kanalen combineert voor het testen van het warme kleurenspectrum.',
      es: 'Una pantalla amarilla (RGB 255,255,0) que combina los canales rojo y verde para probar el espectro de colores cálidos.',
      de: 'Ein gelbes Display (RGB 255,255,0), das rote und grüne Kanäle kombiniert, für Tests des warmen Farbspektrums.',
    },
    orange: {
      en: 'An orange screen (RGB 255,165,0) for testing warm color rendering and gradient smoothness.',
      nl: 'Een oranje scherm (RGB 255,165,0) voor het testen van warme kleurweergave en vloeiendheid van verlopen.',
      es: 'Una pantalla naranja (RGB 255,165,0) para probar la representación de colores cálidos y la suavidad del degradado.',
      de: 'Ein orangefarbenes Display (RGB 255,165,0) zum Testen der Warmfarb-Wiedergabe und Verlaufsglättung.',
    },
    pink: {
      en: 'A pink screen (RGB 255,192,203) for testing color balance and light tonal accuracy.',
      nl: 'Een roze scherm (RGB 255,192,203) voor het testen van kleurbalans en lichte tonale nauwkeurigheid.',
      es: 'Una pantalla rosa (RGB 255,192,203) para probar el equilibrio de colores y la precisión tonal ligera.',
      de: 'Ein rosafarbenes Display (RGB 255,192,203) zum Testen von Farbbalance und leichter Tongenauigkeit.',
    },
    purple: {
      en: 'A purple screen (RGB 128,0,128) for testing deep color saturation and mid-tone color accuracy.',
      nl: 'Een paars scherm (RGB 128,0,128) voor het testen van diepe kleurverzadiging en middelste toonkleurnauwkeurigheid.',
      es: 'Una pantalla púrpura (RGB 128,0,128) para probar la saturación profunda del color y la precisión del color en tonos medios.',
      de: 'Ein lila Display (RGB 128,0,128) zum Testen tiefer Farbsättigung und mittlerer Tonfarb-Genauigkeit.',
    },
  };

  const description: LocaleTexts = colorDescriptions[colorName.toLowerCase()] ?? {
    en: `A ${colorName} full screen for display testing and diagnostic purposes.`,
    nl: `Een ${colorName} volledig scherm voor schermtesten en diagnostische doeleinden.`,
    es: `Una pantalla completa ${colorName} para pruebas de display y diagnóstico.`,
    de: `Ein ${colorName} Vollbild für Anzeigetests und Diagnosezwecke.`,
  };

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {lc({
              en: `${colorLabel} Screen Test`,
              nl: `${colorLabel} Schermtest`,
              es: `Prueba de Pantalla ${colorLabel}`,
              de: `${colorLabel} Bildschirmtest`,
            })}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {lc(description)}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Pure Color</div>
              <p className="text-slate-300 text-sm">{colorHex}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Full Screen</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Immersive Test', nl: 'Meeslepende Test', es: 'Prueba Inmersiva', de: 'Immersiver Test' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Results in Seconds', nl: 'Resultaten in Seconden', es: 'Resultados en Segundos', de: 'Ergebnisse in Sekunden' })}</p>
            </div>
          </div>
        </div>

        {/* What You Can Test */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Palette className="w-8 h-8 text-purple-400" />
            {lc({ en: 'What Can You Test?', nl: 'Wat Kunt U Testen?', es: '¿Qué Puede Probar?', de: 'Was Können Sie Testen?' })}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">{lc({ en: 'Display Quality', nl: 'Beeldkwaliteit', es: 'Calidad de Pantalla', de: 'Anzeigequalität' })}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ {lc({ en: 'Color uniformity across screen', nl: 'Kleuruniformiteit over het scherm', es: 'Uniformidad de color en pantalla', de: 'Farbuniformität über den Bildschirm' })}</li>
                <li>✓ {lc({ en: 'Brightness consistency', nl: 'Helderheidsconsistentie', es: 'Consistencia de brillo', de: 'Helligkeitskonsistenz' })}</li>
                <li>✓ {lc({ en: 'Backlight bleeding detection', nl: 'Detectie van teruglichtverlies', es: 'Detección de sangrado de retroiluminación', de: 'Hintergrundlicht-Bleed-Erkennung' })}</li>
                <li>✓ {lc({ en: 'Dead pixel identification', nl: 'Identificatie van dode pixels', es: 'Identificación de píxeles muertos', de: 'Identifikation toter Pixel' })}</li>
                <li>✓ {lc({ en: 'Panel defects', nl: 'Paneeldefecten', es: 'Defectos del panel', de: 'Paneldefekte' })}</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <h3 className="text-xl font-bold text-white mb-4">{lc({ en: 'Specific Uses', nl: 'Specifieke Toepassingen', es: 'Usos Específicos', de: 'Spezifische Verwendungen' })}</h3>
              <ul className="space-y-2 text-slate-300">
                <li>✓ {lc({ en: 'Photography & lighting', nl: 'Fotografie & verlichting', es: 'Fotografía y iluminación', de: 'Fotografie & Beleuchtung' })}</li>
                <li>✓ {lc({ en: 'Video production', nl: 'Videoproductie', es: 'Producción de video', de: 'Videoproduktion' })}</li>
                <li>✓ {lc({ en: 'Green/blue screen effects', nl: 'Groen/blauw scherm effecten', es: 'Efectos de pantalla verde/azul', de: 'Grün-/Blaubildschirm-Effekte' })}</li>
                <li>✓ {lc({ en: 'Screen cleaning', nl: 'Scherm schoonmaken', es: 'Limpieza de pantalla', de: 'Bildschirm reinigen' })}</li>
                <li>✓ {lc({ en: 'Color calibration', nl: 'Kleurkalibratie', es: 'Calibración de color', de: 'Farbkalibrierung' })}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'How to Use This Screen Test', nl: 'Hoe Gebruik Je Deze Schermtest', es: 'Cómo Usar Esta Prueba de Pantalla', de: 'So Verwenden Sie Diesen Bildschirmtest' })}
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: lc({ en: 'Start the Full Screen Test', nl: 'Start de Volledig Scherm Test', es: 'Iniciar la Prueba de Pantalla Completa', de: 'Vollbildtest Starten' }),
                desc: lc({ en: 'Click "Start Test" to display the full screen color. Press F for fullscreen mode for optimal viewing.', nl: 'Klik op "Test Starten" om de volledige schermkleur te weergeven. Druk op F voor de modus volledig scherm.', es: 'Haga clic en "Iniciar prueba" para mostrar el color de pantalla completa. Presione F para el modo de pantalla completa.', de: 'Klicken Sie auf "Test starten", um die Vollbildfarbe anzuzeigen. Drücken Sie F für den Vollbildmodus.' }),
              },
              {
                title: lc({ en: 'Inspect the Entire Screen', nl: 'Inspecteer het Volledige Scherm', es: 'Inspeccionar Toda la Pantalla', de: 'Den Gesamten Bildschirm Untersuchen' }),
                desc: lc({ en: 'Look across all areas including corners, edges, and center. Check for color uniformity and brightness consistency.', nl: 'Bekijk alle gebieden inclusief hoeken, randen en het midden. Controleer op kleuruniformiteit en helderheidsconsistentie.', es: 'Examine todas las áreas incluyendo esquinas, bordes y centro. Verifique la uniformidad de color y consistencia de brillo.', de: 'Prüfen Sie alle Bereiche einschließlich Ecken, Kanten und Mitte. Achten Sie auf Farbuniformität und Helligkeitskonsistenz.' }),
              },
              {
                title: lc({ en: 'Look for Display Issues', nl: 'Zoek naar Schermfouten', es: 'Buscar Problemas de Pantalla', de: 'Nach Anzeigeproblemen Suchen' }),
                desc: lc({ en: 'Identify dead pixels (dark spots), backlight bleeding (bright edges), or color shifts (tint variations).', nl: 'Identificeer dode pixels (donkere vlekken), teruglichtverlies (heldere randen) of kleurverschuivingen.', es: 'Identifique píxeles muertos (manchas oscuras), sangrado de retroiluminación (bordes brillantes) o desplazamientos de color.', de: 'Erkennen Sie tote Pixel (dunkle Flecken), Hintergrundlicht-Bleeding (helle Ränder) oder Farbverschiebungen.' }),
              },
              {
                title: lc({ en: 'Use for Purpose', nl: 'Gebruik voor Uw Doel', es: 'Usar para Su Propósito', de: 'Für Ihren Zweck Verwenden' }),
                desc: lc({ en: 'Use the solid color screen for photography lighting, video production backgrounds, or screen calibration.', nl: 'Gebruik het effen kleurenscherm voor fotografieverlichting, videoproductie-achtergronden of schermkalibratie.', es: 'Use la pantalla de color sólido para iluminación fotográfica, fondos de producción de video o calibración de pantalla.', de: 'Verwenden Sie den einfarbigen Bildschirm für Fotografie-Beleuchtung, Video-Produktionshintergründe oder Bildschirmkalibrierung.' }),
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-slate-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </ol>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'Common Use Cases', nl: 'Veelvoorkomende Gebruiksscenarios', es: 'Casos de Uso Comunes', de: 'Häufige Anwendungsfälle' })}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-slate-300">{useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'Frequently Asked Questions', nl: 'Veelgestelde Vragen', es: 'Preguntas Frecuentes', de: 'Häufig Gestellte Fragen' })}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: lc({ en: 'Why use full screen color tests?', nl: 'Waarom volledig scherm kleurtesten gebruiken?', es: '¿Por qué usar pruebas de color de pantalla completa?', de: 'Warum Vollbild-Farbtests verwenden?' }),
                a: lc({ en: 'Full screen tests help identify display issues like backlight bleeding, dead pixels, and color uniformity problems across the entire panel.', nl: 'Volledig scherm tests helpen bij het identificeren van schermfouten zoals teruglichtverlies, dode pixels en kleuruniformiteitsproblemen over het gehele paneel.', es: 'Las pruebas de pantalla completa ayudan a identificar problemas de pantalla como el sangrado de retroiluminación, píxeles muertos y problemas de uniformidad de color en todo el panel.', de: 'Vollbildtests helfen bei der Identifizierung von Anzeigeproblemen wie Hintergrundlicht-Bleeding, toten Pixeln und Farbuniformitätsproblemen über das gesamte Panel.' }),
              },
              {
                q: lc({ en: 'Can I use this for color calibration?', nl: 'Kan ik dit gebruiken voor kleurkalibratie?', es: '¿Puedo usar esto para la calibración de color?', de: 'Kann ich das für die Farbkalibrierung verwenden?' }),
                a: lc({ en: 'While this provides pure color reference, professional color calibration requires specialized tools and software. This is useful for basic verification.', nl: 'Hoewel dit een zuivere kleurverwijzing biedt, vereist professionele kleurkalibratie gespecialiseerde tools en software. Dit is nuttig voor basisverificatie.', es: 'Si bien esto proporciona una referencia de color puro, la calibración de color profesional requiere herramientas y software especializados. Esto es útil para la verificación básica.', de: 'Obwohl dies eine reine Farbreferenz bietet, erfordert die professionelle Farbkalibrierung spezielle Tools und Software. Dies ist für die grundlegende Überprüfung nützlich.' }),
              },
              {
                q: lc({ en: 'What is a dead pixel?', nl: 'Wat is een dode pixel?', es: '¿Qué es un píxel muerto?', de: 'Was ist ein toter Pixel?' }),
                a: lc({ en: "A dead pixel appears as a dark spot (usually black) that doesn't display color. It's a hardware defect that's usually permanent.", nl: 'Een dode pixel verschijnt als een donkere vlek (gewoonlijk zwart) die geen kleur weergeeft. Het is een hardwaredefect dat meestal permanent is.', es: 'Un píxel muerto aparece como un punto oscuro (generalmente negro) que no muestra color. Es un defecto de hardware que suele ser permanente.', de: 'Ein toter Pixel erscheint als dunkler Fleck (normalerweise schwarz), der keine Farbe anzeigt. Es ist ein Hardware-Defekt, der in der Regel permanent ist.' }),
              },
              {
                q: lc({ en: 'How do I clean my screen safely?', nl: 'Hoe reinig ik mijn scherm veilig?', es: '¿Cómo limpio mi pantalla de forma segura?', de: 'Wie reinige ich meinen Bildschirm sicher?' }),
                a: lc({ en: 'Use a soft, lint-free cloth. Use white screen mode first to see any dust or marks. Never use harsh chemicals or excessive pressure.', nl: 'Gebruik een zachte, pluisvrije doek. Gebruik eerst de wit scherm modus om stof of vlekken te zien. Gebruik nooit agressieve chemicaliën of overmatige druk.', es: 'Use un paño suave sin pelusa. Use primero el modo de pantalla blanca para ver el polvo o las marcas. Nunca use productos químicos agresivos ni presión excesiva.', de: 'Verwenden Sie ein weiches, fusselfreies Tuch. Verwenden Sie zuerst den Weißbildschirmmodus, um Staub oder Flecken zu sehen. Verwenden Sie niemals starke Chemikalien oder übermäßigen Druck.' }),
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Info */}
        <div className="bg-purple-950/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">🎨 {lc({ en: 'Professional Use', nl: 'Professioneel Gebruik', es: 'Uso Profesional', de: 'Professionelle Nutzung' })}</h2>
          <p className="text-slate-300 mb-3">
            {lc({
              en: 'Professional photographers, videographers, and content creators use full-screen color tests for display verification, lighting setup, and color reference. This tool provides the exact color reference you need.',
              nl: 'Professionele fotografen, videomakers en contentmakers gebruiken volledige schermkleurtesten voor schermverificatie, verlichtingsinstellingen en kleurverwijzing. Dit hulpmiddel biedt de exacte kleurverwijzing die u nodig hebt.',
              es: 'Los fotógrafos, videógrafos y creadores de contenido profesionales usan pruebas de color de pantalla completa para verificación de pantalla, configuración de iluminación y referencia de color. Esta herramienta proporciona la referencia de color exacta que necesita.',
              de: 'Professionelle Fotografen, Videografen und Inhaltsersteller verwenden Vollbild-Farbtests zur Bildschirmverifizierung, Beleuchtungsaufbau und Farbreferenz. Dieses Tool bietet die genaue Farbreferenz, die Sie benötigen.',
            })}
          </p>
          <p className="text-slate-300 text-sm">
            {lc({ en: 'Color Value: ', nl: 'Kleurwaarde: ', es: 'Valor de Color: ', de: 'Farbwert: ' })}
            <strong>{colorHex}</strong> (RGB {colorLabel})
          </p>
        </div>
      </div>
    </section>
  );
}
