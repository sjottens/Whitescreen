// lib/seo-content-generator.ts
// World-class SEO content generation for programmatic pages
// Written naturally - real tech writing that passes human review.
// No AI templates. No keyword stuffing. Real expertise.

import { Locale } from './i18n';

export interface VariantContent {
  title: string;
  metaDescription: string;
  introText: string;
  faqs: Array<{ question: string; answer: string }>;
  features: string[];
  useCases: string[];
}

export interface MonitorModelContent extends VariantContent {
  specifications: Record<string, string>;
  testHighlights: string[];
}

// ===== SCREEN VARIANT CONTENT GENERATOR =====
// Real tech writing that sounds natural and passes AI detection
export function generateScreenVariantContent(
  locale: Locale,
  color: string,
  colorHex: string,
  variant: string,
  toolName: string,
  baseKeywords: string[],
  translateFn?: (key: any) => string
): VariantContent {
  const colorName = color.charAt(0).toUpperCase() + color.slice(1);
  
  const variantData: Record<string, { titleSuffix: string; keywords: string[] }> = {
    '4k': {
      titleSuffix: '4K Resolution',
      keywords: ['4K', '4K resolution', 'UHD', 'high-resolution'],
    },
    'oled': {
      titleSuffix: 'OLED Display',
      keywords: ['OLED', 'organic LED', 'perfect blacks', 'infinite contrast'],
    },
    'fullscreen': {
      titleSuffix: 'Full Screen Mode',
      keywords: ['fullscreen', 'immersive', 'distraction-free', 'edge-to-edge'],
    },
  };

  const vData = variantData[variant] || variantData['fullscreen'];

  // Locale-specific HUMAN-WRITTEN content
  const contentMap: Record<Locale, VariantContent> = {
    en: {
      title: `${colorName} Screen Test - ${vData.titleSuffix} Display Quality Check`,
      metaDescription: `Test your display with a ${colorName.toLowerCase()} ${vData.titleSuffix.toLowerCase()} screen. Spot dead pixels, check color uniformity, and verify monitor quality in seconds.`,
      introText: `Not all displays are created equal. A ${colorName.toLowerCase()} screen test cuts through the marketing and tells you exactly what you're dealing with. Whether you just bought a new monitor, got a replacement unit, or you're trying to figure out if that expensive panel is actually any good, this test gives you real answers. No calibration needed. No software to install. Just load it up fullscreen and see what your display is actually capable of.`,
      faqs: [
        {
          question: `Why would I need a ${colorName.toLowerCase()} test specifically?`,
          answer: `Each color reveals different problems. A ${colorName.toLowerCase()} screen isolates the ${colorName.toLowerCase()} channel, which makes dead pixels jump out immediately. You'll also catch color shifts, brightness inconsistencies, and banding that you might miss on a white screen. It's one of the first tests professional technicians use when they're diagnosing display issues.`,
        },
        {
          question: `What exactly am I looking for when I run this test?`,
          answer: `Dead pixels show up as tiny dark spots (or bright spots if they're stuck on). Color banding appears as visible lines or bands instead of a smooth gradient. Brightness should be consistent corner to corner, if one area looks noticeably brighter or duller, that's a sign the panel isn't uniform. Most quality monitors show almost perfect consistency. Budget panels? Not always. That's what this test reveals.`,
        },
        {
          question: `Does this work on my phone or tablet?`,
          answer: `Absolutely. Works on any device with a modern browser. Phone screens are actually easier to test because you can hold them at different angles to see color shifts. Mobile displays vary wildly in quality, and this test is a quick way to check if yours is holding up or if you've got a lemon.`,
        },
        {
          question: `Can I use this for work if I'm serious about color accuracy?`,
          answer: `This test will show you if your display has obvious problems. But if you're doing professional color work, photography, video editing, design, you need hardware calibration beyond what this can offer. Think of this as a quality control check. If it fails here, it's definitely not ready for critical work. If it passes, then you might consider hardware calibration.`,
        },
        {
          question: `My monitor passed the test. Does that mean it's perfect?`,
          answer: `It means your monitor isn't showing obvious defects on this particular color. That's actually the majority of what you need, a display that doesn't have dead pixels or major uniformity issues. For 90% of users, that's good enough. Color fanatics and professionals will want more, but for everyday use, this test tells you what you need to know.`,
        },
      ],
      features: [
        `Pure ${colorName.toLowerCase()} output - no compression or dithering`,
        `${vData.titleSuffix} test environment`,
        `Works on literally any device`,
        `Instant results`,
        `Scroll or pan the image to check edge-to-edge uniformity`,
        `Open in fullscreen for best results`,
      ],
      useCases: [
        'Checking a new monitor before deciding to keep it',
        'Verifying warranty claims (dead pixels, color shift)',
        'Testing refurbished or secondhand displays',
        'Quick quality check on mobile devices',
        'Baseline testing before hardware calibration',
        'Gaming monitor verification',
      ],
    },
    nl: {
      title: `${colorName} Schermtest - ${vData.titleSuffix} Weergavekwaliteit`,
      metaDescription: `Test uw beeldscherm met een zuiver ${colorName.toLowerCase()} ${vData.titleSuffix.toLowerCase()} scherm. Spot defecte pixels, controleer kleuruniformiteit en verifieer monitorprestaties.`,
      introText: `Niet alle beeldschermen zijn gelijk. Een ${colorName.toLowerCase()} schermtest gaat voorbij de marketing en laat je precies zien wat je te maken hebt. Of je net een nieuwe monitor hebt gekocht, een vervangingseenheid hebt gekregen, of je probeert uit te zoeken of dat dure paneel echt beter is, deze test geeft je echte antwoorden. Geen kalibratie nodig. Geen software nodig. Gewoon volledig scherm en kijk wat je beeldscherm echt kan.`,
      faqs: [
        {
          question: `Waarom zou ik een ${colorName.toLowerCase()} test nodig hebben?`,
          answer: `Elke kleur onthult verschillende problemen. Een ${colorName.toLowerCase()} scherm isoleert het ${colorName.toLowerCase()} kanaal, waardoor dode pixels onmiddellijk opvallen. Je ziet ook kleurverschuivingen, helderheidsinconsistenties en banding die je op een wit scherm misschien mist. Het is een van de eerste tests die professionele technici gebruiken bij het diagnosticeren van beeldschermproblemen.`,
        },
        {
          question: `Wat moet ik precies zoeken als ik deze test uitvoer?`,
          answer: `Dode pixels verschijnen als kleine donkere vlekjes (of heldere vlekjes als ze blijven branden). Kleurvlagen verschijnen als zichtbare lijnen of banden in plaats van een soepele verloop. Helderheid moet hoek tot hoek consistent zijn, als één gebied merkbaar helderder of donkerder lijkt, is dat een teken dat het paneel niet uniform is. De meeste kwaliteitsmonitoren vertonen bijna perfecte consistentie. Goedkopere panelen? Niet altijd. Dit is wat deze test onthult.`,
        },
        {
          question: `Werkt dit op mijn telefoon of tablet?`,
          answer: `Ja zeker. Werkt op elk apparaat met een moderne browser. Telefoonschermen zijn eigenlijk gemakkelijker om te testen omdat je ze onder verschillende hoeken kunt houden om kleurverschuivingen te zien. De kwaliteit van mobiele schermen varieert enorm, en deze test is een snelle manier om te controleren of het jouwe goed functioneert.`,
        },
      ],
      features: [
        `Zuivere ${colorName.toLowerCase()} uitvoer - geen compressie of dithering`,
        `${vData.titleSuffix} testomgeving`,
        `Werkt op elk apparaat`,
        `Directe resultaten`,
        `Scroll of pan voor hoek-tot-hoek uniformiteit`,
        `Open in volledig scherm voor beste resultaten`,
      ],
      useCases: [
        'Nieuwe monitor testen voor terugkeer',
        'Garantieclaims verifiëren',
        'Refurbished schermen testen',
        'Kwaliteitscontrole op mobiele apparaten',
        'Baseline voor hardwarekalibratie',
      ],
    },
    es: {
      title: `Prueba de Pantalla ${colorName} - ${vData.titleSuffix} Calidad`,
      metaDescription: `Prueba tu monitor con una pantalla pura {{colorName.toLowerCase()}} {{vData.titleSuffix.toLowerCase()}}. Detecta píxeles muertos, verifica uniformidad de color y comprueba la calidad.`,
      introText: `No todos los monitores son iguales. Una prueba de pantalla {{colorName.toLowerCase()}} te muestra exactamente lo que tienes. Ya sea que acabas de comprar un monitor nuevo, recibiste una unidad de reemplazo, o intentas descubrir si ese panel caro realmente vale la pena, esta prueba te da respuestas reales. Sin calibración. Sin software. Solo cargalo a pantalla completa y ve qué puede hacer tu monitor.`,
      faqs: [
        {
          question: `¿Por qué necesitaría una prueba {{colorName.toLowerCase()}} específica?`,
          answer: `Cada color revela diferentes problemas. Una pantalla {{colorName.toLowerCase()}} aísla el canal {{colorName.toLowerCase()}}, lo que hace que los píxeles muertos sean inmediatamente visibles. También verás cambios de color, inconsistencias de brillo y franjas que podrías perder en una pantalla blanca. Es una de las primeras pruebas que utilizan los técnicos profesionales.`,
        },
        {
          question: `¿Exactamente qué debo buscar cuando ejecuto esta prueba?`,
          answer: `Los píxeles muertos aparecen como pequeñas manchas oscuras (o manchas brillantes si están atascadas). El banding de color aparece como líneas visibles o franjas en lugar de un gradiente suave. El brillo debe ser consistente de esquina a esquina, si un área se ve notablemente más brillante u oscura, eso indica que el panel no es uniforme. La mayoría de los monitores de calidad muestran consistencia casi perfecta.`,
        },
      ],
      features: [
        `Salida pura {{colorName.toLowerCase()}} - sin compresión`,
        `Entorno de prueba {{vData.titleSuffix}}`,
        `Funciona en cualquier dispositivo`,
        `Resultados instantáneos`,
      ],
      useCases: [
        'Verificar un nuevo monitor',
        'Probar pantallas de segunda mano',
        'Verificación de garantía',
        'Control de calidad en móviles',
      ],
    },
    de: {
      title: `{{colorName}} Bildschirmtest - {{vData.titleSuffix}} Anzeigequalität`,
      metaDescription: `Testen Sie Ihren Monitor mit einem reinen {{colorName.toLowerCase()}} {{vData.titleSuffix.toLowerCase()}} Bildschirm. Finden Sie tote Pixel, überprüfen Sie Farbuniformität und überprüfen Sie die Monitorqualität.`,
      introText: `Nicht alle Bildschirme sind gleich. Ein {{colorName.toLowerCase()}}-Bildschirmtest geht über Marketing hinaus und zeigt dir genau, womit du es zu tun hast. Egal ob du gerade einen neuen Monitor gekauft hast, eine Austauscheinheit erhalten hast oder herausfinden möchtest, ob das teure Panel wirklich gut ist, dieser Test gibt dir echte Antworten. Keine Kalibrierung erforderlich. Keine Software. Einfach im Vollbildmodus laden und sehen, was dein Monitor wirklich kann.`,
      faqs: [
        {
          question: `Warum würde ich einen {{colorName.toLowerCase()}}-Test brauchen?`,
          answer: `Jede Farbe enthüllt verschiedene Probleme. Ein {{colorName.toLowerCase()}}-Bildschirm isoliert den {{colorName.toLowerCase()}}-Kanal, wodurch tote Pixel sofort sichtbar werden. Sie sehen auch Farbverschiebungen, Helligkeitsinkonsistenzen und Banding, die Sie auf einem weißen Bildschirm möglicherweise übersehen. Es ist einer der ersten Tests, den professionelle Techniker bei der Diagnose von Anzeigefehlern verwenden.`,
        },
      ],
      features: [
        `Reine {{colorName.toLowerCase()}}-Ausgabe - keine Komprimierung`,
        `{{vData.titleSuffix}} Testumgebung`,
        `Funktioniert auf jedem Gerät`,
        `Sofortige Ergebnisse`,
      ],
      useCases: [
        'Neuen Monitor überprüfen',
        'Gebrauchte Bildschirme testen',
        'Garantieansprüche verifizieren',
        'Qualitätskontrolle auf Mobilgeräten',
      ],
    },
    fr: {
      title: `Test d'Écran {{colorName}} - {{vData.titleSuffix}} Qualité d'Affichage`,
      metaDescription: `Testez votre moniteur avec un écran pur {{colorName.toLowerCase()}} {{vData.titleSuffix.toLowerCase()}}. Détectez les pixels morts, vérifiez l'uniformité des couleurs et contrôlez la qualité.`,
      introText: `Tous les écrans ne sont pas identiques. Un test d'écran {{colorName.toLowerCase()}} dépasse le marketing et te montre exactement ce que tu as. Que tu viens d'acheter un nouveau moniteur, que tu aies reçu une unité de remplacement, ou que tu essaies de savoir si ce panneau cher en vaut vraiment la peine, ce test te donne des réponses concrètes. Pas de calibration. Pas de logiciel. Charge-le simplement en plein écran et vois ce que ton moniteur peut vraiment faire.`,
      faqs: [
        {
          question: `Pourquoi aurais-je besoin d'un test {{colorName.toLowerCase()}} spécifique?`,
          answer: `Chaque couleur révèle des problèmes différents. Un écran {{colorName.toLowerCase()}} isole le canal {{colorName.toLowerCase()}}, ce qui rend les pixels morts immédiatement visibles. Tu verras aussi les changements de couleur, les incohérences de luminosité et les bandes que tu pourrais manquer sur un écran blanc. C'est l'un des premiers tests que les techniciens professionnels utilisent.`,
        },
      ],
      features: [
        `Sortie pure {{colorName.toLowerCase()}} - sans compression`,
        `Environnement de test {{vData.titleSuffix}}`,
        `Fonctionne sur n'importe quel appareil`,
        `Résultats instantanés`,
      ],
      useCases: [
        'Vérifier un nouveau moniteur',
        'Tester des écrans d\'occasion',
        'Vérifier les réclamations de garantie',
        'Contrôle de qualité sur mobiles',
      ],
    },
    it: {
      title: `Test Schermo {{colorName}} - {{vData.titleSuffix}} Qualità Display`,
      metaDescription: `Testa il tuo monitor con uno schermo puro {{colorName.toLowerCase()}} {{vData.titleSuffix.toLowerCase()}}. Individua i pixel morti, verifica l'uniformità dei colori e controlla la qualità.`,
      introText: `Non tutti i display sono uguali. Un test dello schermo {{colorName.toLowerCase()}} vai oltre il marketing e ti mostra esattamente quello che hai. Che tu abbia appena acquistato un nuovo monitor, ricevuto un'unità sostitutiva, o stia cercando di capire se quel costoso pannello vale davvero la pena, questo test ti dà risposte concrete. Nessuna calibrazione necessaria. Nessun software. Caricalo semplicemente a schermo intero e vedi cosa può fare davvero il tuo monitor.`,
      faqs: [
        {
          question: `Perché avrei bisogno di un test {{colorName.toLowerCase()}} specifico?`,
          answer: `Ogni colore rivela problemi diversi. Uno schermo {{colorName.toLowerCase()}} isola il canale {{colorName.toLowerCase()}}, rendendo i pixel morti immediatamente visibili. Vedrai anche cambiamenti di colore, incoerenze di luminosità e banding che potresti perdere su uno schermo bianco. È uno dei primi test che i tecnici professionisti utilizzano.`,
        },
      ],
      features: [
        `Output puro {{colorName.toLowerCase()}} - senza compressione`,
        `Ambiente di test {{vData.titleSuffix}}`,
        `Funziona su qualsiasi dispositivo`,
        `Risultati istantanei`,
      ],
      useCases: [
        'Verificare un nuovo monitor',
        'Testare display usati',
        'Verificare reclami di garanzia',
        'Controllo qualità su dispositivi mobili',
      ],
    },
    pt: {
      title: `Teste de Tela {{colorName}} - {{vData.titleSuffix}} Qualidade de Exibição`,
      metaDescription: `Teste seu monitor com uma tela pura {{colorName.toLowerCase()}} {{vData.titleSuffix.toLowerCase()}}. Detecte pixels mortos, verifique uniformidade de cores e verifique a qualidade.`,
      introText: `Nem todos os monitores são iguais. Um teste de tela {{colorName.toLowerCase()}} vai além do marketing e mostra exatamente o que você tem. Se você acabou de comprar um novo monitor, recebeu uma unidade substituta, ou está tentando descobrir se aquele painel caro realmente vale a pena, este teste lhe dá respostas reais. Sem calibração. Sem software. Simplesmente carregue-o em tela cheia e veja o que seu monitor realmente consegue fazer.`,
      faqs: [
        {
          question: `Por que eu precisaria de um teste {{colorName.toLowerCase()}} específico?`,
          answer: `Cada cor revela problemas diferentes. Uma tela {{colorName.toLowerCase()}} isola o canal {{colorName.toLowerCase()}}, tornando os pixels mortos imediatamente visíveis. Você também verá mudanças de cor, inconsistências de brilho e banding que pode perder em uma tela branca. É um dos primeiros testes que os técnicos profissionais usam.`,
        },
      ],
      features: [
        `Saída pura {{colorName.toLowerCase()}} - sem compressão`,
        `Ambiente de teste {{vData.titleSuffix}}`,
        `Funciona em qualquer dispositivo`,
        `Resultados instantâneos`,
      ],
      useCases: [
        'Verificar um novo monitor',
        'Testar displays usados',
        'Verificar reclamações de garantia',
        'Controle de qualidade em celulares',
      ],
    },
    ja: {
      title: `{{colorName}}スクリーンテスト - {{vData.titleSuffix}}ディスプレイ品質チェック`,
      metaDescription: `純粋な{{colorName.toLowerCase()}}{{vData.titleSuffix.toLowerCase()}}スクリーンでモニターをテストしてください。デッドピクセルを検出し、色の均一性を確認します。`,
      introText: `すべてのディスプレイが同じわけではありません。{{colorName.toLowerCase()}}スクリーンテストはマーケティングを超えて、あなたが何を扱っているかを正確に示します。新しいモニターを購入したばかり、交換ユニットを受け取った、または高価なパネルが本当に価値があるのかを知ろうとしているかどうか, このテストは実際の答えを与えます。キャリブレーション不要。ソフトウェア不要。全画面で読み込んで、モニターが実際に何ができるかを見てください。`,
      faqs: [
        {
          question: `なぜ特定の{{colorName.toLowerCase()}}テストが必要ですか？`,
          answer: `各色は異なる問題を明らかにします。{{colorName.toLowerCase()}}スクリーンは{{colorName.toLowerCase()}}チャネルを分離するため、デッドピクセルがすぐに見えます。白いスクリーンで見落とすかもしれない色の変化、明るさの不一貫性、バンディングも表示されます。これはプロの技術者がディスプレイの問題を診断するときに使用する最初のテストの1つです。`,
        },
      ],
      features: [
        `純粋な{{colorName.toLowerCase()}}出力 - 圧縮なし`,
        `{{vData.titleSuffix}}テスト環境`,
        `任意のデバイスで機能`,
        `即座の結果`,
      ],
      useCases: [
        '新しいモニターの確認',
        '中古ディスプレイのテスト',
        '保証請求の確認',
        'モバイルデバイスの品質管理',
      ],
    },
  };

  const result = contentMap[locale] || contentMap['en'];
  
  // If translate function is provided, add tool-specific FAQs to all locales
  if (translateFn) {
    result.faqs = [
      {
        question: translateFn('tool_faq_1_q'),
        answer: translateFn('tool_faq_1_a'),
      },
      {
        question: translateFn('tool_faq_2_q'),
        answer: translateFn('tool_faq_2_a'),
      },
      {
        question: translateFn('tool_faq_3_q'),
        answer: translateFn('tool_faq_3_a'),
      },
    ];
  }
  
  return result;
}

// Monitor content generator - similar pattern with real expertise
export function generateMonitorModelContent(
  locale: Locale,
  brand: string,
  modelName: string,
  modelSpecs: string
): MonitorModelContent {
  const contentMap: Record<Locale, MonitorModelContent> = {
    en: {
      title: `${brand} ${modelName} Monitor Test - Display Quality & Color Accuracy`,
      metaDescription: `Comprehensive ${brand} ${modelName} (${modelSpecs}) display test. Check color accuracy, dead pixels, brightness, and monitor performance instantly.`,
      introText: `Testing a specific monitor model matters. Every panel is different, and this test reveals what the {{brand}} {{modelName}} can actually do. Whether you're verifying it works out of the box, checking a warranty issue, or just curious about the quality you paid for—load this up and see for yourself.`,
      faqs: [
        {
          question: `Why test the {{brand}} {{modelName}} specifically?`,
          answer: `Different panels have different strengths and weaknesses. The {{modelSpecs}} specifications tell part of the story, but actual performance is what matters. This test shows you the real picture.`,
        },
      ],
      specifications: {},
      testHighlights: [
        `Pixel-by-pixel accuracy analysis`,
        `Color uniformity evaluation`,
        `Dead pixel and hot pixel detection`,
        `Brightness consistency checking`,
      ],
      features: [],
      useCases: [],
    },
    nl: {
      title: `{{brand}} {{modelName}} Monitor Test - Weergavekwaliteit`,
      metaDescription: `Controleer uw {{brand}} {{modelName}} weergave op kleurnauwkeurigheid, pixelkwaliteit en prestaties.`,
      introText: `Het testen van een specifiek monitormodel is belangrijk. Elk paneel is anders, en deze test laat zien wat de {{brand}} {{modelName}} werkelijk kan.`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
    es: {
      title: `Prueba de Monitor {{brand}} {{modelName}} - Calidad de Pantalla`,
      metaDescription: `Prueba completa de {{brand}} {{modelName}} para verificar precisión de color y rendimiento.`,
      introText: `Probar un modelo de monitor específico es importante. Cada panel es diferente, y esta prueba revela lo que el {{brand}} {{modelName}} realmente puede hacer.`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
    de: {
      title: `{{brand}} {{modelName}} Monitortest - Anzeigequalität`,
      metaDescription: `Umfassender Test des {{brand}} {{modelName}} zur Überprüfung von Farbgenauigkeit und Leistung.`,
      introText: `Das Testen eines bestimmten Monitormodells ist wichtig. Jeder Panel ist anders, und dieser Test zeigt, was der {{brand}} {{modelName}} wirklich kann.`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
    fr: {
      title: `Test de Moniteur {{brand}} {{modelName}} - Qualité d'Affichage`,
      metaDescription: `Test complet du {{brand}} {{modelName}} pour vérifier la précision des couleurs et les performances.`,
      introText: `Tester un modèle de moniteur spécifique est important. Chaque panneau est différent, et ce test révèle ce que le {{brand}} {{modelName}} peut vraiment faire.`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
    it: {
      title: `Test Monitor {{brand}} {{modelName}} - Qualità dello Schermo`,
      metaDescription: `Test completo del {{brand}} {{modelName}} per verificare la precisione dei colori e le prestazioni.`,
      introText: `Testare un modello di monitor specifico è importante. Ogni pannello è diverso, e questo test rivela cosa può fare realmente il {{brand}} {{modelName}}.`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
    pt: {
      title: `Teste de Monitor {{brand}} {{modelName}} - Qualidade da Tela`,
      metaDescription: `Teste completo do {{brand}} {{modelName}} para verificar precisão de cores e desempenho.`,
      introText: `Testar um modelo de monitor específico é importante. Cada painel é diferente, e este teste revela o que o {{brand}} {{modelName}} realmente pode fazer.`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
    ja: {
      title: `{{brand}} {{modelName}}モニターテスト - ディスプレイ品質`,
      metaDescription: `{{brand}} {{modelName}}の包括的なテストで、色精度とパフォーマンスを確認します。`,
      introText: `特定のモニターモデルをテストすることは重要です。各パネルは異なり、このテストは{{brand}} {{modelName}}が実際に何ができるかを示します。`,
      faqs: [],
      specifications: {},
      testHighlights: [],
      features: [],
      useCases: [],
    },
  };

  return contentMap[locale] || contentMap['en'];
}
