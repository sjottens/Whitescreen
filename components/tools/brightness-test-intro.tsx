'use client';

import { AlertCircle, Sun, Zap } from 'lucide-react';

type LocaleTexts = { en: string; nl: string; es: string; de: string };

interface BrightnessTestIntroProps {
  locale: string;
}

export default function BrightnessTestIntro({ locale }: BrightnessTestIntroProps) {
  const lc = (texts: LocaleTexts): string => texts[locale as keyof LocaleTexts] ?? texts.en;

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {lc({ en: 'Brightness Test & Detector', nl: 'Helderheidstest & Detector', es: 'Prueba y Detector de Brillo', de: 'Helligkeitstest & Detektor' })}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {lc({
              en: 'Test monitor brightness levels, gamma response, and display uniformity with precision tools. Identify brightness inconsistencies, backlight bleeding, and color uniformity issues.',
              nl: 'Test monitoerhelderheidsniveaus, gammarespons en beeldschermuniformiteit met precisietoolss. Identificeer helderheidsonregelmatigheden, teruglichtverlies en kleuruniformiteitsproblemen.',
              es: 'Pruebe los niveles de brillo del monitor, la respuesta gamma y la uniformidad del display con herramientas de precisión. Identifique inconsistencias de brillo, sangrado de retroiluminación y problemas de uniformidad de color.',
              de: 'Testen Sie Monitor-Helligkeitsstufen, Gamma-Antwort und Anzeigeuniformität mit Präzisionstools. Identifizieren Sie Helligkeitsinkonsistenzen, Hintergrundlicht-Bleeding und Farbuniformitätsprobleme.',
            })}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">11 Steps</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Brightness Ladder', nl: 'Helderheidsladder', es: 'Escalera de Brillo', de: 'Helligkeitsleiter' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Gamma Test</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Response Curves', nl: 'Responsecurves', es: 'Curvas de Respuesta', de: 'Antwort-Kurven' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Results in Seconds', nl: 'Resultaten in Seconden', es: 'Resultados en Segundos', de: 'Ergebnisse in Sekunden' })}</p>
            </div>
          </div>
        </div>

        {/* What is Brightness Test */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Sun className="w-8 h-8 text-yellow-400" />
            {lc({ en: 'What is a Brightness Test?', nl: 'Wat is een Helderheidstest?', es: '¿Qué es una Prueba de Brillo?', de: 'Was ist ein Helligkeitstest?' })}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brightness Uniformity */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">{lc({ en: 'Brightness Uniformity', nl: 'Helderheidsuniformiteit', es: 'Uniformidad de Brillo', de: 'Helligkeitsuniformität' })}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {lc({
                  en: 'Measures how evenly your display maintains brightness across the entire screen. Uneven brightness creates dark corners or bright spots.',
                  nl: 'Meet hoe gelijkmatig uw beeldscherm de helderheid over het gehele scherm handhaaft. Ongelijkmatige helderheid creëert donkere hoeken of heldere vlekken.',
                  es: 'Mide cómo su pantalla mantiene el brillo de manera uniforme en toda la pantalla. El brillo desigual crea esquinas oscuras o puntos brillantes.',
                  de: 'Misst, wie gleichmäßig Ihr Display die Helligkeit über den gesamten Bildschirm aufrechterhält. Ungleichmäßige Helligkeit erzeugt dunkle Ecken oder helle Flecken.',
                })}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {lc({ en: 'Detect backlight bleeding', nl: 'Teruglichtverlies detecteren', es: 'Detectar sangrado de retroiluminación', de: 'Hintergrundlicht-Bleeding erkennen' })}</li>
                <li>✓ {lc({ en: 'Identify dark corners', nl: 'Donkere hoeken identificeren', es: 'Identificar esquinas oscuras', de: 'Dunkle Ecken identifizieren' })}</li>
                <li>✓ {lc({ en: 'Check edge brightness', nl: 'Randhelderheid controleren', es: 'Verificar el brillo de los bordes', de: 'Randhelligkeit prüfen' })}</li>
              </ul>
            </div>

            {/* Gamma Response */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{lc({ en: 'Gamma Response', nl: 'Gammarespons', es: 'Respuesta Gamma', de: 'Gamma-Antwort' })}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {lc({
                  en: "Tests the display's tone curve and how it renders midtones. Proper gamma (2.2) ensures accurate color representation and smooth gradations.",
                  nl: 'Test de toonkromme van het beeldscherm en hoe het middentonen weergeeft. Correct gamma (2.2) zorgt voor nauwkeurige kleurweergave en vloeiende overgangen.',
                  es: 'Prueba la curva de tonos del display y cómo renderiza los tonos medios. El gamma correcto (2.2) garantiza una representación de color precisa y gradaciones suaves.',
                  de: 'Testet die Tonkurve des Displays und wie es Mitteltöne rendert. Korrektes Gamma (2.2) sorgt für genaue Farbdarstellung und gleichmäßige Abstufungen.',
                })}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {lc({ en: 'Verify tone gradation', nl: 'Toonovergang verifiëren', es: 'Verificar la gradación de tonos', de: 'Tonabstufung überprüfen' })}</li>
                <li>✓ {lc({ en: 'Test gamma curve accuracy', nl: 'Nauwkeurigheid gammacurve testen', es: 'Probar la precisión de la curva gamma', de: 'Gammakurven-Genauigkeit testen' })}</li>
                <li>✓ {lc({ en: 'Check midtone rendering', nl: 'Middentoonweergave controleren', es: 'Verificar el renderizado de tonos medios', de: 'Mittelton-Rendering prüfen' })}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'How to Use This Brightness Test', nl: 'Hoe Gebruik Je Deze Helderheidstest', es: 'Cómo Usar Esta Prueba de Brillo', de: 'So Verwenden Sie Diesen Helligkeitstest' })}
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: lc({ en: 'Adjust Monitor Settings', nl: 'Monitoer-instellingen Aanpassen', es: 'Ajustar la Configuración del Monitor', de: 'Monitoreinstellungen Anpassen' }),
                desc: lc({ en: 'Set your monitor to standard settings or factory defaults for consistent results.', nl: 'Stel uw monitor in op standaard instellingen of fabrieksinstellingen voor consistente resultaten.', es: 'Configure su monitor con los ajustes estándar o los valores predeterminados de fábrica para obtener resultados consistentes.', de: 'Stellen Sie Ihren Monitor auf Standardeinstellungen oder Werkseinstellungen für konsistente Ergebnisse ein.' }),
              },
              {
                title: lc({ en: 'Run the Brightness Ladder Test', nl: 'Voer de Helderheidsladdertest Uit', es: 'Ejecutar la Prueba de Escalera de Brillo', de: 'Helligkeitsleiter-Test Ausführen' }),
                desc: lc({ en: 'Look at the 11-step brightness ladder. Each step should be distinguishable without banding.', nl: 'Bekijk de 11-staps helderheidsladder. Elke stap moet onderscheidbaar zijn zonder banding.', es: 'Observe la escalera de brillo de 11 pasos. Cada paso debe ser distinguible sin bandas.', de: 'Sehen Sie sich die 11-stufige Helligkeitsleiter an. Jede Stufe sollte ohne Banding unterscheidbar sein.' }),
              },
              {
                title: lc({ en: 'Check for Gradient Banding', nl: 'Controleer op Verloopranden', es: 'Verificar el Bandeo de Degradado', de: 'Verlaufsbanding Prüfen' }),
                desc: lc({ en: 'If you see distinct bands instead of smooth gradations, your display has limited bit depth or dithering issues.', nl: 'Als u duidelijke banden ziet in plaats van vloeiende overgangen, heeft uw display een beperkte bitdiepte of dithering-problemen.', es: 'Si ve bandas distintas en lugar de gradaciones suaves, su pantalla tiene profundidad de bits limitada o problemas de tramado.', de: 'Wenn Sie unterschiedliche Banden statt glatter Abstufungen sehen, hat Ihr Display eine begrenzte Bittiefe oder Dithering-Probleme.' }),
              },
              {
                title: lc({ en: 'Verify Uniformity', nl: 'Uniformiteit Verifiëren', es: 'Verificar la Uniformidad', de: 'Uniformität Überprüfen' }),
                desc: lc({ en: 'Check that brightness remains consistent across all areas of the screen, especially corners.', nl: 'Controleer of de helderheid consistent blijft in alle gebieden van het scherm, vooral in de hoeken.', es: 'Verifique que el brillo permanezca consistente en todas las áreas de la pantalla, especialmente en las esquinas.', de: 'Prüfen Sie, ob die Helligkeit in allen Bereichen des Bildschirms konsistent bleibt, besonders in den Ecken.' }),
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

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'Frequently Asked Questions', nl: 'Veelgestelde Vragen', es: 'Preguntas Frecuentes', de: 'Häufig Gestellte Fragen' })}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: lc({ en: 'What is proper gamma for monitors?', nl: 'Wat is de juiste gamma voor monitoren?', es: '¿Cuál es el gamma correcto para monitores?', de: 'Was ist das richtige Gamma für Monitore?' }),
                a: lc({
                  en: 'Standard gamma is 2.2 for most displays. This provides optimal brightness and color perception. Gaming monitors often use 2.4 for more contrast.',
                  nl: 'Standaard gamma is 2,2 voor de meeste beeldschermen. Dit biedt optimale helderheid en kleurperceptie. Gamingmonitoren gebruiken vaak 2,4 voor meer contrast.',
                  es: 'El gamma estándar es 2.2 para la mayoría de las pantallas. Esto proporciona un brillo y una percepción del color óptimos. Los monitores de juegos suelen usar 2.4 para más contraste.',
                  de: 'Standard-Gamma ist 2,2 für die meisten Displays. Dies bietet optimale Helligkeit und Farbwahrnehmung. Gaming-Monitore verwenden oft 2,4 für mehr Kontrast.',
                }),
              },
              {
                q: lc({ en: 'What causes banding in gradients?', nl: 'Wat veroorzaakt banding in verlopen?', es: '¿Qué causa el bandeo en los degradados?', de: 'Was verursacht Banding in Verläufen?' }),
                a: lc({
                  en: 'Banding occurs when a display has 8-bit color instead of 10-bit, or when dithering is disabled. It creates visible steps instead of smooth transitions.',
                  nl: 'Banding treedt op wanneer een beeldscherm 8-bits kleur heeft in plaats van 10-bits, of wanneer dithering is uitgeschakeld. Het creëert zichtbare stappen in plaats van vloeiende overgangen.',
                  es: 'El bandeo ocurre cuando una pantalla tiene color de 8 bits en lugar de 10 bits, o cuando el tramado está desactivado. Crea pasos visibles en lugar de transiciones suaves.',
                  de: 'Banding tritt auf, wenn ein Display 8-Bit-Farbe statt 10-Bit hat oder Dithering deaktiviert ist. Es erzeugt sichtbare Stufen statt glatter Übergänge.',
                }),
              },
              {
                q: lc({ en: 'Is backlight bleeding normal?', nl: 'Is teruglichtverlies normaal?', es: '¿Es normal el sangrado de retroiluminación?', de: 'Ist Hintergrundlicht-Bleeding normal?' }),
                a: lc({
                  en: 'Slight backlight bleeding at edges is normal in IPS and VA panels. Excessive bleeding (visible during dark scenes) indicates a display defect covered by warranty.',
                  nl: 'Licht teruglichtverlies aan de randen is normaal in IPS- en VA-panelen. Excessief verlies (zichtbaar bij donkere scènes) wijst op een schermdefect dat wordt gedekt door garantie.',
                  es: 'Un ligero sangrado de retroiluminación en los bordes es normal en los paneles IPS y VA. El sangrado excesivo (visible durante escenas oscuras) indica un defecto de pantalla cubierto por garantía.',
                  de: 'Leichtes Hintergrundlicht-Bleeding an den Rändern ist bei IPS- und VA-Panels normal. Übermäßiges Bleeding (sichtbar bei dunklen Szenen) weist auf einen von der Garantie abgedeckten Displayfehler hin.',
                }),
              },
              {
                q: lc({ en: 'How does brightness affect color accuracy?', nl: 'Hoe beïnvloedt helderheid kleurnauwkeurigheid?', es: '¿Cómo afecta el brillo a la precisión del color?', de: 'Wie beeinflusst die Helligkeit die Farbgenauigkeit?' }),
                a: lc({
                  en: 'Improper brightness settings can cause color shifts and loss of detail in shadows. Use 120 cd/m² for professional work and 100-150 cd/m² for general use.',
                  nl: 'Onjuiste helderheidsinstellingen kunnen kleurverschuivingen en verlies van detail in schaduwen veroorzaken. Gebruik 120 cd/m² voor professioneel werk en 100-150 cd/m² voor algemeen gebruik.',
                  es: 'Los ajustes de brillo incorrectos pueden causar cambios de color y pérdida de detalle en las sombras. Use 120 cd/m² para trabajo profesional y 100-150 cd/m² para uso general.',
                  de: 'Falsche Helligkeitseinstellungen können Farbverschiebungen und Detailverlust in Schatten verursachen. Verwenden Sie 120 cd/m² für professionelle Arbeit und 100-150 cd/m² für den allgemeinen Gebrauch.',
                }),
              },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Tip */}
        <div className="bg-emerald-950/30 border border-emerald-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">💡 {lc({ en: 'Professional Tip', nl: 'Professionele Tip', es: 'Consejo Profesional', de: 'Professioneller Tipp' })}</h2>
          <p className="text-slate-300 mb-3">
            {lc({
              en: 'If your monitor shows significant brightness inconsistencies, backlight bleeding, or fails uniformity tests within warranty, contact the manufacturer. Most premium monitors have strict brightness uniformity standards (typically ≤20% variation).',
              nl: 'Als uw monitor significante helderheidsonregelmatigheden, teruglichtverlies vertoont of uniformiteitstests niet doorstaat binnen garantie, neem contact op met de fabrikant. De meeste premium monitoren hebben strikte normen voor helderheidsuniformiteit (doorgaans ≤20% variatie).',
              es: 'Si su monitor muestra inconsistencias de brillo significativas, sangrado de retroiluminación o no supera las pruebas de uniformidad dentro de la garantía, comuníquese con el fabricante. La mayoría de los monitores premium tienen estrictos estándares de uniformidad de brillo (típicamente ≤20% de variación).',
              de: 'Wenn Ihr Monitor erhebliche Helligkeitsinkonsistenzen, Hintergrundlicht-Bleeding zeigt oder Uniformitätstests innerhalb der Garantie nicht besteht, wenden Sie sich an den Hersteller. Die meisten Premium-Monitore haben strenge Helligkeitsuniformitätsstandards (typischerweise ≤20% Variation).',
            })}
          </p>
          <p className="text-slate-300 text-sm">
            {lc({
              en: 'Common manufacturers: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI',
              nl: 'Bekende fabrikanten: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI',
              es: 'Fabricantes comunes: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI',
              de: 'Bekannte Hersteller: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI',
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
