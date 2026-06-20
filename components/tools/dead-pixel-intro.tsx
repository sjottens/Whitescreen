'use client';

import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

type LocaleTexts = { en: string; nl: string; es: string; de: string };

interface DeadPixelIntroProps {
  locale: string;
}

export default function DeadPixelIntro({ locale }: DeadPixelIntroProps) {
  const lc = (texts: LocaleTexts): string => texts[locale as keyof LocaleTexts] ?? texts.en;

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {lc({ en: 'Dead Pixel Test & Detector', nl: 'Dode Pixel Test & Detector', es: 'Prueba y Detector de Píxeles Muertos', de: 'Toter Pixel Test & Detektor' })}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {lc({
              en: 'Use our free dead pixel detector to identify stuck pixels, dead pixels, and hot pixels on your display. This comprehensive test cycles through multiple color backgrounds to make defective pixels highly visible.',
              nl: 'Gebruik onze gratis dode pixel detector om stuck pixels, dode pixels en hete pixels op uw scherm te identificeren. Deze uitgebreide test doorloopt meerdere kleurachtergronden om defecte pixels goed zichtbaar te maken.',
              es: 'Use nuestro detector de píxeles muertos gratuito para identificar píxeles atascados, muertos y calientes en su pantalla. Esta prueba completa recorre múltiples fondos de color para hacer que los píxeles defectuosos sean muy visibles.',
              de: 'Verwenden Sie unseren kostenlosen Totpixel-Detektor, um feststeckende, tote und heiße Pixel auf Ihrem Display zu identifizieren. Dieser umfassende Test durchläuft mehrere Farbhintergründe, um defekte Pixel gut sichtbar zu machen.',
            })}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Free to Use', nl: 'Gratis te Gebruiken', es: 'Gratis', de: 'Kostenlos' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">16 Colors</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Comprehensive Detection', nl: 'Uitgebreide Detectie', es: 'Detección Completa', de: 'Umfassende Erkennung' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Results in Seconds', nl: 'Resultaten in Seconden', es: 'Resultados en Segundos', de: 'Ergebnisse in Sekunden' })}</p>
            </div>
          </div>
        </div>

        {/* What are Dead Pixels */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-emerald-400" />
            {lc({ en: 'What Are Dead Pixels?', nl: 'Wat Zijn Dode Pixels?', es: '¿Qué Son los Píxeles Muertos?', de: 'Was Sind Tote Pixel?' })}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dead Pixels */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">{lc({ en: 'Dead Pixels', nl: 'Dode Pixels', es: 'Píxeles Muertos', de: 'Tote Pixel' })}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {lc({
                  en: 'Pixels that are not receiving power and appear as small dark/black dots on your display. They fail to illuminate regardless of color changes.',
                  nl: 'Pixels die geen stroom ontvangen en als kleine donkere/zwarte stippen op uw scherm verschijnen. Ze lichten niet op, ongeacht kleurveranderingen.',
                  es: 'Píxeles que no reciben energía y aparecen como pequeños puntos oscuros/negros en su pantalla. No se iluminan independientemente de los cambios de color.',
                  de: 'Pixel, die keine Energie erhalten und als kleine dunkle/schwarze Punkte auf Ihrem Display erscheinen. Sie leuchten unabhängig von Farbänderungen nicht auf.',
                })}
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• {lc({ en: 'Appear as black or dark spots', nl: 'Verschijnen als zwarte of donkere vlekken', es: 'Aparecen como manchas negras o oscuras', de: 'Erscheinen als schwarze oder dunkle Flecken' })}</li>
                <li>• {lc({ en: 'Permanent defect (hard to fix)', nl: 'Permanent defect (moeilijk te repareren)', es: 'Defecto permanente (difícil de reparar)', de: 'Permanenter Defekt (schwer zu beheben)' })}</li>
                <li>• {lc({ en: 'More common than stuck pixels', nl: 'Vaker dan stuck pixels', es: 'Más común que los píxeles atascados', de: 'Häufiger als feststeckende Pixel' })}</li>
              </ul>
            </div>

            {/* Stuck Pixels */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">{lc({ en: 'Stuck Pixels', nl: 'Stuck Pixels', es: 'Píxeles Atascados', de: 'Feststeckende Pixel' })}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {lc({
                  en: 'Pixels "stuck" in the ON position, displaying a single color (usually red, green, or blue). They may respond to physical pressure or heat.',
                  nl: 'Pixels "vast" in de AAN-positie, die één kleur weergeven (gewoonlijk rood, groen of blauw). Ze kunnen reageren op fysieke druk of warmte.',
                  es: 'Píxeles "atascados" en la posición ON, mostrando un solo color (generalmente rojo, verde o azul). Pueden responder a la presión física o al calor.',
                  de: 'Pixel, die in der EIN-Position "feststecken" und eine einzelne Farbe anzeigen (normalerweise rot, grün oder blau). Sie können auf physischen Druck oder Wärme reagieren.',
                })}
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• {lc({ en: 'Appear as colored dots (RGB)', nl: 'Verschijnen als gekleurde stippen (RGB)', es: 'Aparecen como puntos de color (RGB)', de: 'Erscheinen als farbige Punkte (RGB)' })}</li>
                <li>• {lc({ en: 'Sometimes fixable with tools/methods', nl: 'Soms herstelbaar met tools/methoden', es: 'A veces reparables con herramientas/métodos', de: 'Manchmal mit Tools/Methoden behebbar' })}</li>
                <li>• {lc({ en: 'Less common but more noticeable', nl: 'Minder voorkomend maar meer opvallend', es: 'Menos común pero más notorio', de: 'Weniger häufig, aber auffälliger' })}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pixel Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'Types of Defective Pixels', nl: 'Types Defecte Pixels', es: 'Tipos de Píxeles Defectuosos', de: 'Arten Defekter Pixel' })}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Black pixel */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{lc({ en: 'Black Dead Pixel', nl: 'Zwarte Dode Pixel', es: 'Píxel Muerto Negro', de: 'Schwarzer Toter Pixel' })}</h4>
              <p className="text-sm text-slate-400">
                {lc({ en: 'Appears on colored backgrounds', nl: 'Verschijnt op gekleurde achtergronden', es: 'Aparece en fondos de color', de: 'Erscheint auf farbigen Hintergründen' })}
              </p>
            </div>

            {/* Red stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{lc({ en: 'Red Stuck Pixel', nl: 'Rode Stuck Pixel', es: 'Píxel Atascado Rojo', de: 'Roter Feststeckender Pixel' })}</h4>
              <p className="text-sm text-slate-400">
                {lc({ en: 'Stuck on red subpixel', nl: 'Vast op rode subpixel', es: 'Atascado en el subpíxel rojo', de: 'Feststeckend im roten Subpixel' })}
              </p>
            </div>

            {/* Green stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{lc({ en: 'Green Stuck Pixel', nl: 'Groene Stuck Pixel', es: 'Píxel Atascado Verde', de: 'Grüner Feststeckender Pixel' })}</h4>
              <p className="text-sm text-slate-400">
                {lc({ en: 'Stuck on green subpixel', nl: 'Vast op groene subpixel', es: 'Atascado en el subpíxel verde', de: 'Feststeckend im grünen Subpixel' })}
              </p>
            </div>

            {/* Blue stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">{lc({ en: 'Blue Stuck Pixel', nl: 'Blauwe Stuck Pixel', es: 'Píxel Atascado Azul', de: 'Blauer Feststeckender Pixel' })}</h4>
              <p className="text-sm text-slate-400">
                {lc({ en: 'Stuck on blue subpixel', nl: 'Vast op blauwe subpixel', es: 'Atascado en el subpíxel azul', de: 'Feststeckend im blauen Subpixel' })}
              </p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'How to Use This Dead Pixel Test', nl: 'Hoe Gebruik Je Deze Dode Pixel Test', es: 'Cómo Usar Esta Prueba de Píxeles Muertos', de: 'So Verwenden Sie Diesen Totpixel-Test' })}
          </h2>

          <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-8 backdrop-blur">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{lc({ en: 'Clean Your Screen', nl: 'Reinig Uw Scherm', es: 'Limpie Su Pantalla', de: 'Reinigen Sie Ihren Bildschirm' })}</h4>
                  <p className="text-slate-300">
                    {lc({
                      en: 'Use a soft, lint-free cloth to gently clean your screen. Remove any dust or smudges.',
                      nl: 'Gebruik een zachte, pluisvrije doek om uw scherm voorzichtig te reinigen. Verwijder stof of vlekken.',
                      es: 'Use un paño suave sin pelusa para limpiar suavemente su pantalla. Retire el polvo o manchas.',
                      de: 'Verwenden Sie ein weiches, fusselfreies Tuch, um Ihren Bildschirm vorsichtig zu reinigen. Entfernen Sie Staub oder Flecken.',
                    })}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{lc({ en: 'Start the Test', nl: 'Start de Test', es: 'Iniciar la Prueba', de: 'Test Starten' })}</h4>
                  <p className="text-slate-300">
                    {lc({
                      en: 'Click "Start Test" and press F11 for fullscreen mode (recommended for best results).',
                      nl: 'Klik op "Test Starten" en druk op F11 voor de modus volledig scherm (aanbevolen voor beste resultaten).',
                      es: 'Haga clic en "Iniciar prueba" y presione F11 para el modo de pantalla completa (recomendado para mejores resultados).',
                      de: 'Klicken Sie auf "Test starten" und drücken Sie F11 für den Vollbildmodus (empfohlen für beste Ergebnisse).',
                    })}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    {lc({ en: 'Look Carefully', nl: 'Kijk Nauwkeurig', es: 'Mire Detenidamente', de: 'Sorgfältig Schauen' })}
                  </h4>
                  <p className="text-slate-300">
                    {lc({
                      en: "Spend 10-15 seconds on each color. Look for spots that don't match the background color.",
                      nl: 'Besteed 10-15 seconden per kleur. Zoek naar vlekken die niet overeenkomen met de achtergrondkleur.',
                      es: 'Pase 10-15 segundos en cada color. Busque manchas que no coincidan con el color de fondo.',
                      de: 'Verbringen Sie 10-15 Sekunden bei jeder Farbe. Suchen Sie nach Flecken, die nicht mit der Hintergrundfarbe übereinstimmen.',
                    })}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">{lc({ en: 'Document Issues', nl: 'Documenteer Problemen', es: 'Documentar Problemas', de: 'Probleme Dokumentieren' })}</h4>
                  <p className="text-slate-300">
                    {lc({
                      en: 'Take photos of any dead pixels found. Note their location for warranty claims.',
                      nl: 'Maak foto\'s van gevonden dode pixels. Noteer hun locatie voor garantieclaims.',
                      es: 'Tome fotos de cualquier píxel muerto encontrado. Anote su ubicación para reclamaciones de garantía.',
                      de: 'Machen Sie Fotos von gefundenen toten Pixeln. Notieren Sie deren Lage für Garantieansprüche.',
                    })}
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'Frequently Asked Questions', nl: 'Veelgestelde Vragen', es: 'Preguntas Frecuentes', de: 'Häufig Gestellte Fragen' })}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: lc({ en: 'Can dead pixels be fixed?', nl: 'Kunnen dode pixels worden gerepareerd?', es: '¿Se pueden reparar los píxeles muertos?', de: 'Können tote Pixel repariert werden?' }),
                a: lc({
                  en: 'Dead pixels are usually permanent hardware failures. Stuck pixels sometimes respond to software fixes or physical pressure, but dead pixels cannot be repaired.',
                  nl: 'Dode pixels zijn gewoonlijk permanente hardwarestoringen. Stuck pixels reageren soms op softwareoplossingen of fysieke druk, maar dode pixels kunnen niet worden gerepareerd.',
                  es: 'Los píxeles muertos son generalmente fallos de hardware permanentes. Los píxeles atascados a veces responden a soluciones de software o presión física, pero los píxeles muertos no se pueden reparar.',
                  de: 'Tote Pixel sind normalerweise permanente Hardware-Ausfälle. Feststeckende Pixel reagieren manchmal auf Software-Korrekturen oder physischen Druck, aber tote Pixel können nicht repariert werden.',
                }),
              },
              {
                q: lc({ en: 'How many dead pixels are acceptable?', nl: 'Hoeveel dode pixels zijn acceptabel?', es: '¿Cuántos píxeles muertos son aceptables?', de: 'Wie viele tote Pixel sind akzeptabel?' }),
                a: lc({
                  en: 'Most manufacturers allow 0-8 dead pixels depending on the warranty terms. Check your warranty for specifics.',
                  nl: 'De meeste fabrikanten staan 0-8 dode pixels toe, afhankelijk van de garantievoorwaarden. Controleer uw garantie voor specifieke details.',
                  es: 'La mayoría de los fabricantes permiten 0-8 píxeles muertos según los términos de garantía. Consulte su garantía para obtener detalles específicos.',
                  de: 'Die meisten Hersteller erlauben 0-8 tote Pixel je nach Garantiebedingungen. Überprüfen Sie Ihre Garantie für Details.',
                }),
              },
              {
                q: lc({ en: 'Is this test accurate?', nl: 'Is deze test nauwkeurig?', es: '¿Es precisa esta prueba?', de: 'Ist dieser Test genau?' }),
                a: lc({
                  en: "Yes, this is a comprehensive color-cycling test that makes defective pixels highly visible. It's the most effective method for detecting dead and stuck pixels.",
                  nl: 'Ja, dit is een uitgebreide kleurwisselende test die defecte pixels goed zichtbaar maakt. Het is de meest effectieve methode voor het detecteren van dode en stuck pixels.',
                  es: 'Sí, esta es una prueba completa de ciclo de colores que hace que los píxeles defectuosos sean muy visibles. Es el método más efectivo para detectar píxeles muertos y atascados.',
                  de: 'Ja, dies ist ein umfassender Farbwechsel-Test, der defekte Pixel gut sichtbar macht. Es ist die effektivste Methode zur Erkennung toter und feststeckender Pixel.',
                }),
              },
              {
                q: lc({ en: 'Why do I need fullscreen mode?', nl: 'Waarom heb ik de modus volledig scherm nodig?', es: '¿Por qué necesito el modo de pantalla completa?', de: 'Warum brauche ich den Vollbildmodus?' }),
                a: lc({
                  en: "Fullscreen mode ensures you're testing the entire display surface and eliminates distractions from the browser UI.",
                  nl: 'De modus volledig scherm zorgt ervoor dat u het gehele displayoppervlak test en elimineert afleidingen van de browser-interface.',
                  es: 'El modo de pantalla completa asegura que esté probando toda la superficie del display y elimina las distracciones de la interfaz del navegador.',
                  de: 'Der Vollbildmodus stellt sicher, dass Sie die gesamte Displayoberfläche testen, und eliminiert Ablenkungen durch die Browser-Oberfläche.',
                }),
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Info */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-4">
            {lc({ en: '💡 Warranty Information', nl: '💡 Garantie-informatie', es: '💡 Información de Garantía', de: '💡 Garantieinformationen' })}
          </h2>
          <p className="text-slate-300 mb-4">
            {lc({
              en: 'If you find dead pixels within your warranty period, contact the manufacturer with documented evidence (photos). Most manufacturers cover 0-8 dead pixels. Premium displays often have stricter standards.',
              nl: 'Als u dode pixels binnen uw garantieperiode vindt, neem dan contact op met de fabrikant met gedocumenteerd bewijs (foto\'s). De meeste fabrikanten dekken 0-8 dode pixels. Premium displays hebben vaak strengere normen.',
              es: 'Si encuentra píxeles muertos dentro de su período de garantía, comuníquese con el fabricante con evidencia documentada (fotos). La mayoría de los fabricantes cubren 0-8 píxeles muertos. Las pantallas premium suelen tener estándares más estrictos.',
              de: 'Wenn Sie tote Pixel innerhalb Ihrer Garantiezeit finden, wenden Sie sich mit dokumentierten Beweisen (Fotos) an den Hersteller. Die meisten Hersteller decken 0-8 tote Pixel ab. Premium-Displays haben oft strengere Standards.',
            })}
          </p>
          <p className="text-slate-400 text-sm">
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
