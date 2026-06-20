'use client';

import { Contrast, Eye } from 'lucide-react';

type LocaleTexts = { en: string; nl: string; es: string; de: string };

interface ContrastTestIntroProps {
  locale: string;
}

export default function ContrastTestIntro({ locale }: ContrastTestIntroProps) {
  const lc = (texts: LocaleTexts): string => texts[locale as keyof LocaleTexts] ?? texts.en;

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            {lc({ en: 'Contrast Test & Accessibility Checker', nl: 'Contrasttest & Toegankelijkheidscontrole', es: 'Prueba de Contraste y Verificador de Accesibilidad', de: 'Kontrasttest & Zugänglichkeitsprüfer' })}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            {lc({
              en: 'Test monitor contrast ratio, WCAG accessibility compliance, and color vision deficiency simulation. Ensure your display meets professional standards and is accessible to all users.',
              nl: 'Test de contrastverhouding van de monitor, WCAG-toegankelijkheidsconformiteit en simulatie van kleurvisiedeficiëntie. Zorg ervoor dat uw beeldscherm voldoet aan professionele normen en toegankelijk is voor alle gebruikers.',
              es: 'Pruebe la relación de contraste del monitor, el cumplimiento de accesibilidad WCAG y la simulación de deficiencia de visión del color. Asegúrese de que su pantalla cumpla con los estándares profesionales y sea accesible para todos los usuarios.',
              de: 'Testen Sie das Kontrastverhältnis des Monitors, die WCAG-Zugänglichkeitskonformität und die Simulation von Farbsehdefiziten. Stellen Sie sicher, dass Ihr Display professionellen Standards entspricht und für alle Benutzer zugänglich ist.',
            })}
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">WCAG AAA</div>
              <p className="text-slate-300 text-sm">{lc({ en: '7:1 Compliance', nl: '7:1 Conformiteit', es: 'Cumplimiento 7:1', de: '7:1 Konformität' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">5 Modes</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Color Vision Tests', nl: 'Kleurvisietests', es: 'Pruebas de Visión del Color', de: 'Farbsehtests' })}</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Live</div>
              <p className="text-slate-300 text-sm">{lc({ en: 'Contrast Ratio', nl: 'Contrastverhouding', es: 'Relación de Contraste', de: 'Kontrastverhältnis' })}</p>
            </div>
          </div>
        </div>

        {/* What is Contrast */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Contrast className="w-8 h-8 text-blue-400" />
            {lc({ en: 'What is Display Contrast?', nl: 'Wat is Beeldschermcontrast?', es: '¿Qué es el Contraste del Display?', de: 'Was ist Anzeigekontrast?' })}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WCAG Standards */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">{lc({ en: 'WCAG Standards', nl: 'WCAG-normen', es: 'Estándares WCAG', de: 'WCAG-Standards' })}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {lc({
                  en: 'WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios for readable text. AAA requires 7:1, AA requires 4.5:1.',
                  nl: 'WCAG (Web Content Accessibility Guidelines) definieert minimale contrastverhoudingenspecificaties voor leesbare tekst. AAA vereist 7:1, AA vereist 4,5:1.',
                  es: 'WCAG (Pautas de Accesibilidad para el Contenido Web) define las relaciones de contraste mínimas para texto legible. AAA requiere 7:1, AA requiere 4.5:1.',
                  de: 'WCAG (Web Content Accessibility Guidelines) definiert Mindestkontrastverhältnisse für lesbaren Text. AAA erfordert 7:1, AA erfordert 4,5:1.',
                })}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {lc({ en: 'AAA Level: 7:1 contrast', nl: 'AAA Niveau: 7:1 contrast', es: 'Nivel AAA: contraste 7:1', de: 'AAA-Niveau: 7:1 Kontrast' })}</li>
                <li>✓ {lc({ en: 'AA Level: 4.5:1 contrast', nl: 'AA Niveau: 4,5:1 contrast', es: 'Nivel AA: contraste 4.5:1', de: 'AA-Niveau: 4,5:1 Kontrast' })}</li>
                <li>✓ {lc({ en: 'Fail: Below 4.5:1', nl: 'Niet geslaagd: Onder 4,5:1', es: 'Falla: Por debajo de 4.5:1', de: 'Fehlschlag: Unter 4,5:1' })}</li>
              </ul>
            </div>

            {/* Color Vision Deficiency */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white">{lc({ en: 'Color Vision Deficiency', nl: 'Kleurvisiedeficiëntie', es: 'Deficiencia de Visión del Color', de: 'Farbsehdefizit' })}</h3>
              </div>
              <p className="text-slate-300 mb-4">
                {lc({
                  en: '8% of men and 0.5% of women have some form of color blindness. Our simulator helps test accessibility for people with various types of color vision deficiency.',
                  nl: '8% van de mannen en 0,5% van de vrouwen heeft een bepaalde vorm van kleurenblindheid. Onze simulator helpt de toegankelijkheid te testen voor mensen met verschillende soorten kleurvisiedeficiëntie.',
                  es: 'El 8% de los hombres y el 0,5% de las mujeres tienen alguna forma de daltonismo. Nuestro simulador ayuda a probar la accesibilidad para personas con varios tipos de deficiencia de visión del color.',
                  de: '8% der Männer und 0,5% der Frauen haben irgendeine Form von Farbenblindheit. Unser Simulator hilft, die Zugänglichkeit für Menschen mit verschiedenen Arten von Farbsehdefiziten zu testen.',
                })}
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ {lc({ en: 'Deuteranopia (Red-Green)', nl: 'Deuteranopie (Rood-Groen)', es: 'Deuteranopía (Rojo-Verde)', de: 'Deuteranopie (Rot-Grün)' })}</li>
                <li>✓ {lc({ en: 'Protanopia (Red-Green)', nl: 'Protanopie (Rood-Groen)', es: 'Protanopía (Rojo-Verde)', de: 'Protanopie (Rot-Grün)' })}</li>
                <li>✓ {lc({ en: 'Tritanopia (Blue-Yellow)', nl: 'Tritanopie (Blauw-Geel)', es: 'Tritanopía (Azul-Amarillo)', de: 'Tritanopie (Blau-Gelb)' })}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            {lc({ en: 'How to Test Monitor Contrast', nl: 'Hoe Monitorcontrast Te Testen', es: 'Cómo Probar el Contraste del Monitor', de: 'So Testen Sie den Monitorkontrast' })}
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: lc({ en: 'View WCAG Ladder', nl: 'Bekijk de WCAG-ladder', es: 'Ver la Escalera WCAG', de: 'WCAG-Leiter Anzeigen' }),
                desc: lc({ en: '11 pairs of colors with varying contrast ratios. See which levels you can distinguish.', nl: '11 kleurparen met variërende contrastverhoudingenspecificaties. Kijk welke niveaus u kunt onderscheiden.', es: '11 pares de colores con diferentes relaciones de contraste. Vea qué niveles puede distinguir.', de: '11 Farbpaare mit variierenden Kontrastverhältnissen. Sehen Sie, welche Niveaus Sie unterscheiden können.' }),
              },
              {
                title: lc({ en: 'Test Text Readability', nl: 'Tekstleesbaarheid Testen', es: 'Probar la Legibilidad del Texto', de: 'Textlesbarkeit Testen' }),
                desc: lc({ en: 'View text samples at different contrast levels. AAA text should be easily readable from normal viewing distance.', nl: 'Bekijk tekstsamples op verschillende contrastniveaus. AAA-tekst moet gemakkelijk leesbaar zijn op normale kijkafstand.', es: 'Vea muestras de texto en diferentes niveles de contraste. El texto AAA debe ser fácilmente legible desde una distancia de visión normal.', de: 'Sehen Sie Textbeispiele bei verschiedenen Kontrast-Niveaus an. AAA-Text sollte aus normaler Betrachtungsabstand leicht lesbar sein.' }),
              },
              {
                title: lc({ en: 'Simulate Color Vision Deficiency', nl: 'Kleurvisiedeficiëntie Simuleren', es: 'Simular la Deficiencia de Visión del Color', de: 'Farbsehdefizit Simulieren' }),
                desc: lc({ en: 'Switch between 5 vision modes to see how people with color blindness perceive your display.', nl: 'Schakel tussen 5 visiemodi om te zien hoe mensen met kleurenblindheid uw beeldscherm waarnemen.', es: 'Cambie entre 5 modos de visión para ver cómo las personas con daltonismo perciben su pantalla.', de: 'Wechseln Sie zwischen 5 Sichtmodi, um zu sehen, wie Menschen mit Farbenblindheit Ihr Display wahrnehmen.' }),
              },
              {
                title: lc({ en: 'Check Custom Colors', nl: 'Aangepaste Kleuren Controleren', es: 'Verificar Colores Personalizados', de: 'Benutzerdefinierte Farben Prüfen' }),
                desc: lc({ en: 'Test any foreground/background color pair to see the exact contrast ratio and WCAG compliance.', nl: 'Test elk kleurpaar van voor- en achtergrond om de exacte contrastverhouding en WCAG-conformiteit te zien.', es: 'Pruebe cualquier par de colores de primer plano/fondo para ver la relación de contraste exacta y el cumplimiento de WCAG.', de: 'Testen Sie jedes Vordergrund-/Hintergrund-Farbpaar, um das genaue Kontrastverhältnis und die WCAG-Konformität zu sehen.' }),
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
                q: lc({ en: 'What contrast ratio should I aim for?', nl: 'Welke contrastverhouding moet ik nastreven?', es: '¿A qué relación de contraste debo aspirar?', de: 'Welches Kontrastverhältnis sollte ich anstreben?' }),
                a: lc({
                  en: 'WCAG AAA (7:1) is the gold standard for accessibility. Most professional displays achieve 1000:1 static contrast, but visible text contrast is more important.',
                  nl: 'WCAG AAA (7:1) is de gouden standaard voor toegankelijkheid. De meeste professionele displays bereiken 1000:1 statisch contrast, maar zichtbaar tekstcontrast is belangrijker.',
                  es: 'WCAG AAA (7:1) es el estándar de oro para la accesibilidad. La mayoría de las pantallas profesionales logran un contraste estático de 1000:1, pero el contraste de texto visible es más importante.',
                  de: 'WCAG AAA (7:1) ist der Goldstandard für Zugänglichkeit. Die meisten professionellen Displays erreichen 1000:1 statischen Kontrast, aber der sichtbare Textkontrast ist wichtiger.',
                }),
              },
              {
                q: lc({ en: 'What is the difference between static and dynamic contrast?', nl: 'Wat is het verschil tussen statisch en dynamisch contrast?', es: '¿Cuál es la diferencia entre el contraste estático y dinámico?', de: 'Was ist der Unterschied zwischen statischem und dynamischem Kontrast?' }),
                a: lc({
                  en: 'Static contrast is measured between pure white and pure black on the same screen. Dynamic contrast uses local dimming. Static is more reliable for real-world content.',
                  nl: 'Statisch contrast wordt gemeten tussen puur wit en puur zwart op hetzelfde scherm. Dynamisch contrast gebruikt lokale dimming. Statisch is betrouwbaarder voor echte inhoud.',
                  es: 'El contraste estático se mide entre blanco puro y negro puro en la misma pantalla. El contraste dinámico usa la atenuación local. El estático es más confiable para el contenido del mundo real.',
                  de: 'Statischer Kontrast wird zwischen reinem Weiß und reinem Schwarz auf demselben Bildschirm gemessen. Dynamischer Kontrast verwendet lokales Dimming. Statischer Kontrast ist zuverlässiger für reale Inhalte.',
                }),
              },
              {
                q: lc({ en: 'Why does contrast matter for accessibility?', nl: 'Waarom is contrast belangrijk voor toegankelijkheid?', es: '¿Por qué es importante el contraste para la accesibilidad?', de: 'Warum ist Kontrast für Zugänglichkeit wichtig?' }),
                a: lc({
                  en: 'Low contrast makes text hard to read for people with visual impairment or when viewing in bright conditions. High contrast benefits everyone by improving readability.',
                  nl: 'Laag contrast maakt tekst moeilijk leesbaar voor mensen met een visuele beperking of bij het bekijken in heldere omstandigheden. Hoog contrast is voor iedereen gunstig door de leesbaarheid te verbeteren.',
                  es: 'El bajo contraste dificulta la lectura del texto para personas con discapacidad visual o cuando se visualiza en condiciones luminosas. El alto contraste beneficia a todos mejorando la legibilidad.',
                  de: 'Niedriger Kontrast erschwert das Lesen von Text für Menschen mit Sehbeeinträchtigungen oder beim Betrachten unter hellen Bedingungen. Hoher Kontrast kommt allen zugute, indem er die Lesbarkeit verbessert.',
                }),
              },
              {
                q: lc({ en: "Can I test my design's contrast?", nl: 'Kan ik het contrast van mijn ontwerp testen?', es: '¿Puedo probar el contraste de mi diseño?', de: 'Kann ich den Kontrast meines Designs testen?' }),
                a: lc({
                  en: 'Yes! Use the custom color tester to check any foreground/background combination. Enter hex values and instantly see the WCAG compliance level.',
                  nl: 'Ja! Gebruik de aangepaste kleurtester om elke voor- en achtergrondcombinatie te controleren. Voer hexwaarden in en zie onmiddellijk het WCAG-conformiteitsniveau.',
                  es: '¡Sí! Use el verificador de color personalizado para revisar cualquier combinación de primer plano/fondo. Ingrese valores hexadecimales e instantáneamente vea el nivel de cumplimiento de WCAG.',
                  de: 'Ja! Verwenden Sie den benutzerdefinierten Farbtester, um jede Vordergrund-/Hintergrundkombination zu überprüfen. Geben Sie Hex-Werte ein und sehen Sie sofort das WCAG-Konformitätsniveau.',
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

        {/* Accessibility Info */}
        <div className="bg-blue-950/30 border border-blue-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">♿ {lc({ en: 'Accessibility Matters', nl: 'Toegankelijkheid is Belangrijk', es: 'La Accesibilidad Importa', de: 'Zugänglichkeit Ist Wichtig' })}</h2>
          <p className="text-slate-300 mb-3">
            {lc({
              en: "Following WCAG contrast guidelines isn't just for compliance—it improves readability for everyone. Proper contrast helps users with low vision, color blindness, and those viewing in bright conditions.",
              nl: 'Het volgen van WCAG-contrastrichtlijnen is niet alleen voor naleving—het verbetert de leesbaarheid voor iedereen. Correct contrast helpt gebruikers met slecht zicht, kleurenblindheid en gebruikers die bij heldere omstandigheden bekijken.',
              es: 'Seguir las pautas de contraste de WCAG no es solo para el cumplimiento: mejora la legibilidad para todos. El contraste adecuado ayuda a los usuarios con baja visión, daltonismo y quienes visualizan en condiciones luminosas.',
              de: 'Das Befolgen der WCAG-Kontrastrichtlinien dient nicht nur der Compliance – es verbessert die Lesbarkeit für alle. Angemessener Kontrast hilft Benutzern mit Sehschwäche, Farbenblindheit und denen, die unter hellen Bedingungen betrachten.',
            })}
          </p>
          <p className="text-slate-300 text-sm">
            {lc({
              en: 'Learn more: WCAG 2.1 Level AAA guidelines at w3.org',
              nl: 'Meer informatie: WCAG 2.1 Niveau AAA richtlijnen op w3.org',
              es: 'Más información: Pautas WCAG 2.1 Nivel AAA en w3.org',
              de: 'Mehr erfahren: WCAG 2.1 Niveau AAA Richtlinien auf w3.org',
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
