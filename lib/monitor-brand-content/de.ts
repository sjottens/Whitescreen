// lib/monitor-brand-content/de.ts - German content for /monitor-test/[brand]
// pages. Faithful translation of en.ts, not new claims - see the note in
// index.ts for the factual-accuracy caveat that applies to every locale.
// Brand names, model numbers, and technical/panel terms (IPS, VA, TN,
// OLED, QD-OLED, Nano IPS, Mini-LED, Delta E, ISO 13406-2, USB-C, DCI-P3,
// AdobeRGB, sRGB, HDR, G-Sync, FreeSync, etc.) are kept in their original
// form, as is standard in German tech writing.

import type { MonitorBrandContent } from './index';

const GENERIC_WARRANTY =
  'Hersteller klassifizieren Pixelfehler in der Regel nach Konventionen, die von der alten Norm ISO 13406-2 abgeleitet sind. Diese definiert Pixelfehler-"Klassen" - Klasse I lässt keine Fehler zu, während Klasse II und III eine kleine Anzahl heller, dunkler oder hängender Subpixel erlauben. Nur wenige Verbrauchermonitore werden mit einer Klasse-I-Politik (null Fehler) verkauft; die meisten fallen unter eine Klasse-II-ähnliche Politik, die eine Handvoll Fehler zulässt, bevor ein Austausch angeboten wird. Die genaue Anzahl - und ob volle Pixel oder Subpixel gezählt werden - variiert je nach Hersteller, Produktlinie und Region und kann sich zwischen Modellen ändern. Prüfen Sie die spezifischen Garantiebedingungen Ihres Monitors, statt eine Zahl anzunehmen.';

export const MONITOR_BRAND_CONTENT_DE: Record<string, MonitorBrandContent> = {
  // ---------------------------------------------------------------------
  // Kernmarken
  // ---------------------------------------------------------------------
  asus: {
    panelTech:
      "ASUS verkauft Monitore mit nahezu jedem Paneltyp - Einsteiger- und Bürogeräte nutzen häufig VA- oder Einstiegs-IPS-Panels, während die Linien ROG und TUF Gaming auf Fast IPS für kürzere Reaktionszeiten setzen und die ProArt-Linie werkskalibrierte IPS-Panels für farbgenaues Arbeiten verwendet. Eine kleine Zahl hochwertiger ROG-Modelle nutzt QD-OLED-Panels. Da das ASUS-Label ein derart breites Spektrum abdeckt, ist die Paneltechnologie Ihres konkreten Modells wichtiger als der Markenname, wenn Sie beurteilen, wie 'normale' Farbe und Kontrast aussehen sollten.",
    commonIssues:
      "Da ASUS von Einsteiger- bis Spitzenklasse reicht, unterscheiden sich die zu prüfenden Bildqualitätsprobleme je nach Segment: Einsteiger-VA-Panels neigen eher zu sichtbarem Schlieren bei schneller Bewegung, während IPS-basierte ROG/ProArt-Modelle eher leichtes IPS-Glow oder Backlight Bleed an den Rändern in einem dunklen Raum zeigen. Berichte zu diesen Problemen variieren je nach konkretem Modell und Produktionscharge - betrachten Sie dies als etwas, das Sie an Ihrem Gerät prüfen sollten, nicht als erwarteten Defekt.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Verwendet die ASUS-Monitorlinie überall dasselbe Panel?',
        a: "Nein. ASUS verbaut Panels auf Basis von VA, IPS, TN, Fast IPS und (bei einigen ROG-Modellen) QD-OLED, je nach Serie und Preisklasse. Prüfen Sie Ihre genaue Modellnummer - der verwendete Paneltyp bestimmt, welche Farbverschiebung bei Betrachtungswinkel oder welches Schwarzwertverhalten normal ist und was ein Defekt ist.",
      },
      {
        q: 'Ist IPS-Glow bei einem ASUS-Monitor dasselbe wie ein toter Pixel?',
        a: "Nein. IPS-Glow ist ein schwaches, diffuses Aufhellen an den Ecken eines IPS-Panels bei Betrachtung in einem dunklen Raum, verursacht durch die Art, wie IPS-Panels Hintergrundbeleuchtung und Betrachtungswinkel handhaben - es verschiebt sich oder ändert seine Intensität, wenn Sie den Betrachtungswinkel ändern. Ein toter oder hängender Pixel ist ein einzelner fester Punkt, der sich nicht bewegt und unabhängig vom dahinter angezeigten Inhalt dieselbe Farbe behält.",
      },
      {
        q: 'Wo prüfe ich den Paneltyp meines konkreten ASUS-Modells vor dem Test?',
        a: "ASUS listet den Paneltyp (IPS, VA, TN, Fast IPS, OLED) im offiziellen Datenblatt jedes Produkts auf asus.com, meist unter den Spezifikationen 'Panel' oder 'Display'. Dies vorab zu wissen hilft Ihnen zu beurteilen, ob etwas, das Sie sehen, eine normale Eigenschaft dieses Paneltyps ist oder eine genauere Untersuchung verdient.",
      },
    ],
  },
  lg: {
    panelTech:
      'LG ist eines der wenigen Unternehmen, die sowohl Display-Panels herstellen (über LG Display) als auch fertige Monitore verkaufen, weshalb das eigene Sortiment stark auf Nano-IPS- und Standard-IPS-Panels setzt, mit OLED-Panels in den höherwertigen UltraGear-Gaming-Modellen und der professionellen UltraFine-Linie. Diese vertikale Integration ist ein echtes Unterscheidungsmerkmal gegenüber Marken, die Panels nur von Drittanbietern beziehen, garantiert allein aber kein fehlerfreies Gerät.',
    commonIssues:
      "Bei LGs IPS-basierten Monitoren ist das in Nutzerforen am häufigsten gemeldete optische Problem ungleichmäßiges Backlight Bleed oder Wolkenbildung an den Bildschirmrändern, was auf dunklen Hintergründen auffälliger ist und von Gerät zu Gerät variiert, statt ein Defekt der gesamten Linie zu sein. Bei LGs OLED-Gaming-Monitoren beseitigt die Paneltechnologie selbst die Frage des Backlight Bleed vollständig, bringt aber andere Langzeitüberlegungen mit sich, etwa das Risiko eines Einbrennens bei statischen Bildern, was ein einmaliger Test auf tote Pixel nicht erkennen kann.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beeinflusst es die Rate toter Pixel, dass LG eigene Panels herstellt?',
        a: "LG Display fertigt Panels sowohl für LGs eigene Monitore als auch für viele andere Marken, aber die eigene Panelfertigung beseitigt nicht die normale Produktionsstreuung - defekte Geräte kommen branchenweit weiterhin vor. Es bedeutet vor allem, dass LG Paneltypen (wie Nano IPS oder seine OLED-Varianten) anbieten kann, die bei Marken, die nur Panels von Drittanbietern beziehen, weniger verbreitet sind.",
      },
      {
        q: 'Wie unterscheidet sich das Testen eines LG-OLED-Monitors auf Pixelfehler vom Testen eines IPS-Modells?',
        a: "Der Farbwechseltest funktioniert bei beiden gleich, aber OLED-Panels erzeugen echtes Schwarz, indem sie Pixel vollständig abschalten, sodass ein 'toter' Pixel (einer, der abgeschaltet bleibt) schwerer von normalem schwarzem Inhalt zu unterscheiden sein kann - das Testen mit gesättigten Farben wie Rot, Grün und Blau ist bei OLED-Panels aussagekräftiger als das Testen mit Schwarz.",
      },
      {
        q: 'Was bedeutet "Nano IPS" für Farbtests bei einem LG-Monitor?',
        a: "Nano IPS ist LGs Marketingname für eine IPS-Variante mit einer Nanopartikelschicht, die Lichtwellenlängen filtert, um eine breitere Farbraumabdeckung zu erreichen, nicht um zu verändern, wie tote oder hängende Pixel erscheinen. Für Pixelfehlertests verhält es sich wie jedes andere IPS-Panel - Defekte zeigen sich weiterhin als statische farbige Punkte, die sich nicht mit dem Hintergrund verändern.",
      },
    ],
  },
  samsung: {
    panelTech:
      "Samsungs eigene Display-Sparte stellt in großem Umfang VA-Panels her, und die Gaming-Linie Odyssey basiert fast vollständig auf VA-Technologie (einschließlich gebogener 1000R-VA-Panels), mit einer kleineren Zahl von Odyssey-OLED-Spitzenmodellen, die Samsungs eigene QD-OLED-Panels nutzen. Samsungs allgemeine und geschäftliche Monitore kombinieren je nach Serie VA und IPS, weshalb sich eine Prüfung des Paneltyps beim konkreten Modell lohnt, statt ihn anzunehmen.",
    commonIssues:
      "VA-Panels, die Samsungs Gaming-Linie dominieren, sind branchenweit für eine andere Fehlerart als IPS bekannt: Statt Eckenglühen neigen VA-Panels eher zu sichtbarem 'Schwarzwert-Clipping' oder 'Schlieren' in dunklen Szenen mit schneller Bewegung und können bei steilen Betrachtungswinkeln eine ausgeprägtere Farb-/Kontrastverschiebung zeigen. Dies sind inhärente VA-Paneleigenschaften und keine Defekte, doch lohnt es sich, sie beim Testen von einem echten toten oder hängenden Pixel zu unterscheiden.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Warum sieht mein gebogener Samsung-Monitor an den Rändern farblich leicht anders aus?',
        a: "Das ist eine normale Eigenschaft gebogener VA-Panels und kein Defekt - der Betrachtungswinkel beeinflusst Farbe und Kontrast eines VA-Panels stärker als bei IPS, und die Ränder eines gebogenen Bildschirms stehen relativ zu Ihren Augen in einem anderen Winkel als die Mitte. Das ist etwas anderes als tote oder hängende Pixel, die unabhängig vom Betrachtungswinkel dieselbe Farbe behalten.",
      },
      {
        q: 'Brauchen Samsung Odyssey OLED-Monitore einen anderen Test auf tote Pixel als VA-Modelle?',
        a: 'Derselbe Farbwechselansatz funktioniert bei beiden, aber bei den OLED-Modellen hilft es, besonders auf gesättigte Farben statt auf schwarze Bildschirme zu achten, da OLED Schwarz erzeugt, indem Pixel abgeschaltet werden - ein hängender, abgeschalteter Pixel verschmilzt mit schwarzem Inhalt und ist gegen Rot, Grün, Blau oder Weiß deutlich besser sichtbar.',
      },
      {
        q: 'Ist ein heller Fleck auf meinem Samsung-Monitor ein toter Pixel oder ein Backlight-Problem?',
        a: "Ein einzelner fester heller Punkt, der unabhängig vom Bildschirminhalt dieselbe Farbe zeigt, ist meist ein hängender (nicht toter) Pixel. Ein breiterer Helligkeitsfleck, der sich mit dem Betrachtungswinkel verschiebt oder auf schwarzem Bildschirm am sichtbarsten ist, ist eher Backlight Bleed oder Wolkenbildung - ein von einzelnen Pixelfehlern getrenntes Problem.",
      },
    ],
  },
  dell: {
    panelTech:
      "Dells Monitorsortiment gliedert sich recht klar nach Serie: Die UltraSharp-Linie (U-Serie) verwendet IPS- oder IPS-Black-Panels mit werksseitiger Farbkalibrierung für Büro- und Kreativarbeit, die Alienware-Gaming-Monitore (unter dem Dell-Konzerndach verkauft) verwenden IPS- oder QD-OLED-Panels, und Dells einfachere P- und E-Serie-Bürmonitore verwenden Standard-IPS. Es gibt kein einzelnes 'Dell-Panel' - der Serienname ist der bessere Hinweis darauf, welche Technologie Sie testen.",
    commonIssues:
      "Bei Dells UltraSharp-Linie ist die häufigste optische Beschwerde in Nutzerberichten leichtes Backlight Bleed oder IPS-Glow, sichtbar auf schwarzem Bildschirm in einem dunklen Raum - eine bekannte Eigenschaft von IPS-Panels im Allgemeinen, nicht speziell von Dell. Bei den QD-OLED-Gaming-Modellen von Alienware verschiebt sich die Sorge von Backlight Bleed (das bei OLED nicht zutrifft) hin zu Farbbanding nahe Schwarz bei manchen Inhalten - ein anderes Phänomen als ein toter oder hängender Pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen Dells U-Serie, P-Serie und Alienware-Monitoren für Testzwecke?',
        a: "Der Farbwechseltest selbst funktioniert bei allen drei identisch, aber was als 'normale' optische Eigenschaft gilt, unterscheidet sich: U-Serie- und Alienware-IPS-Modelle können leichtes IPS-Glow an den Ecken auf dunklem Bildschirm zeigen, während P-Serie-Bürmonitore (oft Standard-IPS oder VA) eher einfaches Backlight Bleed zeigen. Keines davon ist dasselbe wie ein toter oder hängender Pixel.",
      },
      {
        q: 'Kalibriert Dell jeden UltraSharp-Monitor werksseitig?',
        a: "Dell bewirbt Werkskalibrierung (einschließlich eines Farbgenauigkeitsberichts pro Gerät bei manchen UltraSharp-Modellen) als Merkmal dieser bestimmten Linie, nicht als etwas, das einheitlich auf alle Dell-Monitore angewendet wird. Prüfen Sie die Produktseite Ihres Modells oder die mitgelieferte Dokumentation, um zu bestätigen, ob Werkskalibrierungsdaten bei Ihrem Gerät enthalten waren.",
      },
      {
        q: 'Wie teste ich einen Alienware-QD-OLED-Monitor anders als einen IPS-Dell-Monitor?',
        a: 'Durchlaufen Sie dieselben gesättigten Farben, achten Sie aber genauer darauf, wie der Bildschirm nahezu schwarzen Inhalt und dunkle Grautöne wiedergibt, da QD-OLED-Panels dies anders handhaben als IPS - ein auf einer festen Farbe hängender Pixel ist auf einem OLED-Panel gegen Rot, Grün oder Blau leichter zu erkennen als gegen Schwarz.',
      },
    ],
  },
  benq: {
    panelTech:
      "BenQs Sortiment ist um recht klar getrennte Einsatzzwecke organisiert: Die SW-Serie (Fotografie/Design) nutzt IPS-Panels mit Hardwarekalibrierung und breiter, nach Pantone- und Calman-Standards validierter Farbraumabdeckung, die PD-Serie richtet sich mit ähnlicher IPS-Kalibrierung an allgemeine professionelle/Design-Nutzung, und die Submarken Mobiuz und Zowie decken Consumer- bzw. E-Sport-Gaming ab, wobei Zowie insbesondere matte TN- oder IPS-Panels mit geringer Eingabeverzögerung bevorzugt, die auf kompetitives Spielen statt Farbgenauigkeit abgestimmt sind.",
    commonIssues:
      "BenQ bewirbt mehrere seiner professionellen (SW/PD) und Gaming-Monitore (Mobiuz) mit flimmerfreier Hintergrundbeleuchtung und Blaulichtfilter-Modi zur Reduzierung der Augenbelastung bei langen Sitzungen - das sind Display-Funktionen, keine Vorbeugung gegen Pixelfehler, und sie ändern nichts daran, wie ein toter oder hängender Pixel beim Testen erscheinen würde. Bei BenQs IPS-Panels im Allgemeinen gelten die üblichen IPS-Eigenschaften (leichtes Glühen an den Ecken in dunklen Räumen) genau wie bei jedem anderen IPS-basierten Monitor.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beeinflusst BenQs flimmerfreie Technologie den Test auf tote Pixel?',
        a: "Nein. Flimmerfreie Hintergrundbeleuchtungstechnologie betrifft, wie die Hintergrundbeleuchtung gedimmt wird (mit DC-Dimming statt PWM-Flimmern), um die Augenbelastung zu reduzieren - sie hat keinen Einfluss auf das Verhalten einzelner Pixel. Ein toter oder hängender Pixel erscheint auf einem flimmerfreien BenQ-Monitor genauso wie auf jedem anderen.",
      },
      {
        q: 'Wird ein BenQ-Zowie-Monitor anders getestet als ein BenQ-SW-Monitor?',
        a: "Das Testverfahren ist identisch - durchlaufen Sie Vollbild-Farbflächen und suchen Sie nach Pixeln, die nicht zum Hintergrund passen. Was sich unterscheidet, sind die Panel-Prioritäten: Zowie-Modelle priorisieren Reaktionszeit und Eingabeverzögerung über Farbgenauigkeit, erwarten Sie also nicht dieselbe Farblebendigkeit wie bei einem farbkalibrierten SW-Serie-Panel.",
      },
      {
        q: 'Welchen Paneltyp verwendet die BenQ-PD-Serie?',
        a: 'BenQs PD-Serie (Designer) verwendet IPS-Panels, in der Regel mit breiterer Farbraumabdeckung als BenQs günstige Bürmonitore, aber ohne das vollständige Hardwarekalibrierungspaket, das BenQ der SW-Serie (Fotografie) vorbehält - prüfen Sie die genaue PD-Modellnummer für die exakten Panel- und Farbraumspezifikationen.',
      },
    ],
  },
  alienware: {
    panelTech:
      "Alienwares aktuelles Monitorsortiment konzentriert sich auf zwei Paneltechnologien: IPS-Panels (einige davon mit Fast IPS für höhere Bildwiederholraten) bei den erschwinglicheren Gaming-Modellen sowie QD-OLED-Panels bei den gebogenen Ultrawide-Spitzenmonitoren (der AW3423DW und AW3423DWF sind die bekanntesten Beispiele), mit denen Alienware zu den ersten PC-Monitormarken gehörte, die dies in größerem Maßstab auf den Markt brachten.",
    commonIssues:
      "Bei Alienwares QD-OLED-Modellen ist die relevante Langzeitüberlegung das Risiko eines Einbrennens bei statischen Bildern (allen OLED-Technologien gemein, nicht spezifisch für Alienware), was ein einmaliger Farbwechseltest nicht aufdecken kann - er kann nur bestätigen, ob ein Pixel aktuell tot oder hängend ist, nicht zukünftiges Einbrennen vorhersagen. Bei Alienwares IPS-Gaming-Modellen gelten Standard-IPS-Glow- und Backlight-Bleed-Eigenschaften genau wie bei jedem IPS-Panel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Kann ein Test auf tote Pixel OLED-Einbrennen bei einem Alienware-Monitor erkennen?',
        a: "Nein. Ein Test auf tote Pixel durchläuft Vollfarben, um Pixel aufzudecken, die gerade jetzt an- oder ausgeschaltet hängen bleiben - er kann kein Einbrennen erkennen, das eine allmähliche, inhaltsabhängige Verdunkelung bestimmter Pixel durch lang anhaltende Anzeige statischer Bilder ist. Einbrennen zeigt sich typischerweise als schwaches Geisterbild von UI-Elementen (etwa einer Taskleiste oder eines Fadenkreuzes) statt als einzelner fester Farbpunkt.",
      },
      {
        q: 'Haben Alienware-QD-OLED-Monitore dieselbe Pixelfehler-Politik wie ihre IPS-Modelle?',
        a: "Garantiebedingungen für Pixelfehler können je nach Produktlinie variieren und werden von Dell (Eigentümer von Alienware) pro Modell festgelegt, nicht einheitlich für das gesamte Alienware-Sortiment. Prüfen Sie die konkrete Garantiedokumentation für Ihr Modell, statt anzunehmen, dass die Politik bei IPS- und QD-OLED-Alienware-Monitoren identisch ist.",
      },
      {
        q: 'Was ist der schnellste Weg, einen gebogenen Alienware-Ultrawide-Monitor auf Pixelfehler zu testen?',
        a: 'Nutzen Sie den Vollbildmodus und durchlaufen Sie jede Vollfarbe, wobei Sie besonders auf die äußeren Ränder des gebogenen Panels achten - auf sehr breiten gebogenen Bildschirmen übersieht man einen Defekt an den Außenrändern leicht, wenn man sich nur auf die Mitte des Displays konzentriert.',
      },
    ],
  },
  msi: {
    panelTech:
      'MSIs Gaming-Monitorsortiment (MAG- und MPG-Serie) basiert überwiegend auf VA- und IPS-Panels, wobei gebogene VA-Modelle in der Mittelklasse-MAG-Reihe verbreitet sind und flachere Fast-IPS-Panels in höher taktenden MPG-Modellen für kompetitives Spielen vorkommen. MSI ist im Vergleich zu Marken wie LG oder Samsung ein relativer Neuling im Monitormarkt und bezieht Panels von Drittherstellern, statt sie selbst zu produzieren.',
    commonIssues:
      "Da sich MSIs gebogene Gaming-Monitore auf VA-Panels stützen, gelten hier dieselben VA-Eigenschaften wie bei anderen VA-basierten Marken: mögliches Schlieren in dunklen Szenen bei schneller Bewegung und stärker auffällige Kontrastverschiebung bei steilen Betrachtungswinkeln - beides Paneleigenschaften, keine Defekte. Bei MSIs flacheren Fast-IPS-Gaming-Modellen ist das übliche IPS-Glow an den Ecken in dunklen Räumen die relevantere Eigenschaft, um sie von einem echten Defekt zu unterscheiden.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Stellt MSI eigene Monitorpanels her?',
        a: 'Nein. MSI bezieht, wie die meisten Gaming-Monitormarken außer LG und Samsung, seine Panels von Drittherstellern und baut sie mit MSI-spezifischer Elektronik, Firmware und RGB-Beleuchtung in eigene Monitordesigns ein. Die zugrunde liegende Paneltechnologie (VA oder IPS) bestimmt Farb- und Betrachtungswinkelverhalten, nicht die Marke MSI selbst.',
      },
      {
        q: 'Wie erkenne ich, ob der Rand meines gebogenen MSI-Monitors ein Krümmungsartefakt oder ein Pixelfehler ist?',
        a: "Eine krümmungsbedingte Farb- oder Helligkeitsverschiebung ändert sich entlang des Randes allmählich und gleichmäßig und sieht unabhängig vom Bildschirminhalt gleich aus. Ein Pixelfehler ist ein einzelner fester Punkt - er bleibt in Größe und Farbe gleich, egal ob Sie den Rand oder die Mitte der Krümmung betrachten, und verläuft nicht allmählich in die Umgebung.",
      },
      {
        q: 'Stört MSIs RGB-Beleuchtung Mystic Light den Pixeltest?',
        a: "Nein. Mystic Light steuert die RGB-Beleuchtung am Gehäuse und Standfuß des Monitors, nicht das Displaypanel selbst, und hat somit keinen Einfluss darauf, wie das Panel Farbe wiedergibt oder wie sichtbar tote/hängende Pixel während eines Farbwechseltests sind.",
      },
    ],
  },
  acer: {
    panelTech:
      "Acer deckt für eine einzelne Marke ein ungewöhnlich breites Spektrum ab: Die Gaming-Linie Predator nutzt IPS, VA und bei einigen Spitzenmodellen Mini-LED- oder OLED-Panels, während die preisgünstige Nitro-Linie hauptsächlich auf VA und Einstiegs-IPS setzt und die allgemeinen Büro-/Verbrauchermonitore je nach Preisklasse eine Mischung aus TN, VA und IPS verwenden. Der Name Acer allein sagt nichts über den Paneltyp aus - prüfen Sie das konkrete Modell.",
    commonIssues:
      "Angesichts der Breite von Acers Sortiment variieren die zu prüfenden Bildeigenschaften stark je nach Klasse: VA-Panels der günstigen Nitro-Linie zeigen eher sichtbares Schlieren bei dunklen, schnell bewegten Inhalten, während höherwertige Predator-IPS- und Mini-LED-Modelle eher leichtes Backlight-Blooming zeigen (sichtbarer Lichthof um helle Objekte auf dunklem Hintergrund) statt des gleichmäßigen Randglühens, das für Standard-IPS typisch ist.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist Acer Nitro dieselbe Paneltechnologie wie Acer Predator?',
        a: "Nein. Nitro ist Acers preisgünstige Gaming-Linie und nutzt meist VA- oder Einstiegs-IPS-Panels, während Predator Acers höherwertige Linie ist, die je nach konkretem Produkt IPS, VA, Mini-LED und einige OLED-Modelle umfasst. Prüfen Sie das Datenblatt Ihres genauen Modells, statt allein anhand des Linienamens zu urteilen.",
      },
      {
        q: 'Was ist Backlight-Blooming, und ist das dasselbe wie ein toter Pixel?',
        a: "Blooming ist ein weicher Lichthof um helle Objekte auf dunklem Hintergrund, verursacht durch die Zonenaufteilung einer Mini-LED- oder Standard-LED-Hintergrundbeleuchtung - am auffälligsten bei Acers Mini-LED-Predator-Modellen. Es ist eine Eigenschaft der Hintergrundbeleuchtung, kein Pixelfehler: Ein toter oder hängender Pixel ist ein einzelner fester Punkt, unabhängig davon, was in der Nähe angezeigt wird.",
      },
      {
        q: 'Bieten Acer-Monitore beim Kauf eine Garantie auf tote Pixel?',
        a: "Acers Pixelfehler-Politik wird je Produktlinie und Region festgelegt, nicht als einheitliche unternehmensweite Garantie, und kann sich im Laufe der Zeit ändern. Prüfen Sie die Garantiedokumentation für Ihr konkretes Modell und Ihre Region oder Acers regionale Support-Seite, statt anzunehmen, dass eine feste Anzahl zulässiger Defekte für das gesamte Sortiment gilt.",
      },
    ],
  },
  corsair: {
    panelTech:
      "Corsair ist später als die meisten Marken auf dieser Liste in den Monitormarkt eingestiegen, mit der XENEON-Linie auf Basis von IPS- und QD-OLED-Panels (das XENEON Flex ist ein bemerkenswertes biegsames QD-OLED-Modell), ausgerichtet auf Gaming mit hoher Bildwiederholrate und vermarktet neben Corsairs bestehendem Ökosystem an Peripheriegeräten und PC-Komponenten. Corsair bezieht seine Panels von Drittherstellern, statt sie selbst zu produzieren.",
    commonIssues:
      "Bei Corsairs IPS-basierten XENEON-Modellen gelten die üblichen IPS-Eigenschaften (leichtes Glühen an den Ecken in einem dunklen Raum) genau wie bei jedem IPS-Panel einer anderen Marke. Bei den QD-OLED-XENEON-Modellen gelten dieselben OLED-spezifischen Überlegungen wie bei anderen QD-OLED-Monitoren - ein einmaliger Farbtest kann einen aktuell toten oder hängenden Pixel aufdecken, aber nicht das langfristige Einbrennrisiko durch statische Inhalte.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beeinflusst Corsairs iCUE-Software, wie der Monitor Farbe darstellt?',
        a: "iCUE steuert im gesamten Produktökosystem von Corsair in erster Linie die RGB-Beleuchtung und die Integration von Peripheriegeräten; bei Corsair-Monitoren sind manche Bildschirmmenü-Einstellungen möglicherweise darüber zugänglich, aber die zugrunde liegende Panelkalibrierung und Farbwiedergabe sind unabhängig von iCUE und werden nicht davon beeinflusst, ob es läuft.",
      },
      {
        q: 'Wird das XENEON Flex genauso getestet wie ein normaler flacher Monitor?',
        a: "Ja, das Farbwechsel-Testverfahren ist unabhängig davon gleich, ob das Panel flach oder biegsam ist. Da das Flex QD-OLED ist, priorisieren Sie das Testen mit gesättigten Farben (Rot, Grün, Blau) gegenüber schwarzen Bildschirmen, da OLED Schwarz durch vollständiges Abschalten der Pixel erzeugt, wodurch ein abgeschaltet hängender Pixel speziell gegen schwarzen Inhalt schwerer zu erkennen ist.",
      },
      {
        q: 'Wie neu ist Corsair im Monitormarkt im Vergleich zu Marken wie LG oder Dell?',
        a: "Corsair brachte seine ersten XENEON-Monitore 2021 auf den Markt und ist damit einer der neueren Anbieter im Vergleich zu Unternehmen wie LG, Samsung oder Dell, die seit Jahrzehnten Monitore verkaufen. Das wirkt sich nicht zwangsläufig auf die Fehlerquoten aus, bedeutet aber, dass es speziell für Corsair-Displays weniger Langzeitdaten zur Zuverlässigkeit gibt.",
      },
    ],
  },
  eizo: {
    panelTech:
      "EIZO ist ein japanischer Hersteller, der sich nahezu ausschließlich auf farbkritische professionelle Monitore statt auf Verbraucher- oder Gaming-Displays spezialisiert hat. Die ColorEdge-Linie nutzt IPS-Panels in Kombination mit einem eingebauten Hardware-Kalibrierungssensor, und die RadiForce-Linie ist speziell für die medizinische Bildgebung (Radiologie) mit Grauwert- und Leuchtdichte-Gleichmäßigkeitsanforderungen konzipiert, die weit über typische Büro- oder Gaming-Monitore hinausgehen. EIZO stellt keine eigenen Panels her, sondern bezieht sie und ergänzt eigene Kalibrierungshardware und -firmware.",
    commonIssues:
      "Da EIZOs Zielmarkt farbkritische professionelle und medizinische Arbeit ist, sind die eigenen Qualitätskontroll- und Kalibrierungsprozesse des Unternehmens in der Regel strenger als bei Verbrauchermonitoren üblich, und EIZOs eigene Dokumentation ist eine bessere Quelle für Spezifikationen zur Panel-Gleichmäßigkeit als allgemeine Forenberichte. Das Wichtigste, was bei jedem EIZO-Monitor zu prüfen ist, gilt wie bei jedem IPS-Panel: leichtes Glühen an den Ecken in einem dunklen Raum ist normales IPS-Verhalten und von einem toten oder hängenden Pixel zu unterscheiden.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Verhindert EIZOs eingebauter Kalibrierungssensor tote Pixel?',
        a: "Nein. Der eingebaute Sensor bei ColorEdge-Monitoren rekalibriert Farb- und Helligkeitsausgabe im Zeitverlauf, um natürlicher Paneldrift entgegenzuwirken - er kann einzelne Pixelhardwarefehler wie tote oder hängende Pixel weder erkennen noch verhindern, da dies physische Defekte in den Transistoren des Panels sind, keine Kalibrierungsfragen.",
      },
      {
        q: 'Warum setzt EIZO für professionelle Arbeit auf IPS-Panels statt auf OLED?',
        a: "IPS-Panels bringen nicht das Risiko des Einbrennens bei statischen Bildern mit sich, das OLED hat, was bei professioneller Software mit fest platzierten Werkzeugleisten und Paletten wichtig ist, die lange angezeigt werden. IPS hat zudem eine lange Erfolgsbilanz stabilen, vorhersehbaren Farbverhaltens über Jahre hinweg, was EIZOs professionelle und medizinische Kunden gegenüber OLEDs tieferen Schwarzwerten bevorzugen.",
      },
      {
        q: 'Wird ein medizinischer RadiForce-Monitor genauso getestet wie ein ColorEdge-Monitor?',
        a: "Der grundlegende Farbwechseltest auf tote Pixel funktioniert bei beiden gleich, aber RadiForce-Monitore sind in der Regel für die Radiologie auf Graustufen ausgerichtet, sodass ein Test mit einem vollständigen Graustufengradienten zusätzlich zum Standardfarbsatz relevanter ist, um subtile Leuchtdichte-Gleichmäßigkeitsprobleme für diesen Einsatzzweck zu erkennen.",
      },
    ],
  },
  hp: {
    panelTech:
      "HPs Monitorsortiment gliedert sich in drei allgemeine Gruppen: Die E-Serie und Geschäftsmonitore nutzen Standard-IPS-Panels für den Bürogebrauch, die Gaming-Linie OMEN nutzt je nach Modell IPS- oder VA-Panels mit einigen höher taktenden Fast-IPS-Optionen, und die DreamColor-Linie (genutzt in Film, Animation und Rundfunkproduktion) nutzt professionell kalibrierte IPS-Panels mit erweiterter Farbgenauigkeitsvalidierung jenseits von HPs allgemeinem Verbrauchersortiment.",
    commonIssues:
      "Bei HPs IPS-basierten E-Serie- und OMEN-Monitoren gelten die üblichen IPS-Eigenschaften - leichtes Glühen an den Ecken, sichtbar auf dunklem Bildschirm in einem schwach beleuchteten Raum, ist eine Paneleigenschaft, kein Defekt. Bei HPs VA-basierten OMEN-Modellen gilt der übliche VA-Kompromiss: tieferer nativer Kontrast, aber mehr Potenzial für Schlieren in dunklen Szenen bei schneller Bewegung.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist HP DreamColor, und unterscheidet es sich von HPs regulären Monitoren?',
        a: 'DreamColor ist HPs professionelle Farbgenauigkeitslinie, werkskalibriert und validiert für den Einsatz in Film, Animation und Rundfunk-Farbkorrektur - eine eigenständige Produktlinie neben HPs allgemeinen Büro- (E-Serie) und Gaming-Monitoren (OMEN), mit strengeren Farbgenauigkeitstoleranzen und in der Regel einem höheren Preis.',
      },
      {
        q: 'Nutzt HP OMEN dieselben Panels wie HPs Bürmonitore?',
        a: 'Nein. OMEN ist HPs Gaming-Linie und priorisiert Bildwiederholrate und Reaktionszeit mit IPS- oder VA-Panels, die für Gaming-Leistung ausgewählt sind, während HPs E-Serie-Bürmonitore Produktivitätsfunktionen priorisieren (wie verstellbare Standfüße und mehrere Anschlüsse) mit Panels, die in der Regel nicht auf hohe Bildwiederholraten abgestimmt sind.',
      },
      {
        q: 'Wird ein toter Pixel bei einem HP-Monitor anders abgedeckt als bei einem Geschäftslaptop-Display?',
        a: "HP legt für eigenständige Monitore andere Garantiebedingungen fest als für Laptop-Displays, und die Pixelfehler-Politik kann sich zwischen diesen und zwischen Monitor-Produktlinien unterscheiden. Prüfen Sie die Garantiedokumentation speziell für Ihr Monitormodell, statt anzunehmen, dass dieselben Bedingungen für HPs gesamtes Produktsortiment gelten.",
      },
    ],
  },
  iiyama: {
    panelTech:
      'IIYAMA (eine japanisch gegründete Marke mit starker Präsenz im europäischen Markt) verkauft ein breites Sortiment unter den Linien ProLite (allgemein/professionell) und G-Master (Gaming), mit TN-, VA- und IPS-Panels je nach konkretem Modell und Preisklasse, bezogen von Drittherstellern statt selbst produziert.',
    commonIssues:
      "Da IIYAMAs Sortiment von günstigen TN-Panels bis zu höherwertigen IPS-Modellen reicht, variieren die zu prüfenden Eigenschaften stark je nach Modell: TN-Panels (verbreitet in IIYAMAs erschwinglichsten Monitoren) zeigen die ausgeprägteste Farb- und Kontrastverschiebung bei außermittigen Betrachtungswinkeln aller Paneltypen - eine normale TN-Eigenschaft, kein Defekt -, während IIYAMAs IPS-Modelle das gewohntere leichte Eckenglühen in dunklen Räumen zeigen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wie erkenne ich, ob mein IIYAMA-Monitor TN, VA oder IPS ist?',
        a: "IIYAMA listet den Paneltyp im offiziellen Datenblatt jedes Modells auf iiyama.com, meist unter 'Paneltyp' in den Displayspezifikationen. Das ist für den Test relevant, da TN-Panels bei einem Winkel deutlich mehr Farbverschiebung zeigen als IPS oder VA - normal für TN und nicht mit einem Defekt zu verwechseln.",
      },
      {
        q: 'Ist IIYAMAs Pixelfehler-Politik bei den Linien ProLite und G-Master gleich?',
        a: "IIYAMA legt Garantiebedingungen je Produkt und Region fest, nicht als einheitliche unternehmensweite Politik, und die Bedingungen können sich zwischen der allgemeinen ProLite-Linie und der Gaming-Linie G-Master unterscheiden. Prüfen Sie die Dokumentation oder die regionale Support-Seite für Ihr konkretes Modell.",
      },
      {
        q: 'Macht ein TN-Panel tote Pixel schwerer zu finden?',
        a: "Nicht wirklich - ein toter oder hängender Pixel erscheint unabhängig vom Paneltyp weiterhin als fester Farbpunkt. Was TN-Panels schwerer beurteilbar macht, ist die Farbgenauigkeit und Gleichmäßigkeit im Allgemeinen, da sich die Farbe des gesamten Bildschirms mit dem Betrachtungswinkel stärker verschiebt als bei IPS oder VA - ein Test bei geradem Blick statt aus einem Winkel liefert ein zuverlässigeres Ergebnis.",
      },
    ],
  },
  lenovo: {
    panelTech:
      "Lenovos ThinkVision-Linie (die primäre Monitorlinie, die die ThinkPad-Markenidentität erweitert) nutzt nahezu ausschließlich IPS-Panels, ausgerichtet auf Büro- und Geschäftsnutzung mit Schwerpunkt auf USB-C-Docking und Multi-Monitor-Setups. Lenovos Gaming-Submarke Legion nutzt je nach Modell IPS- und VA-Panels und ist als Ergänzung zu Lenovos Legion-Gaming-Laptops und -Desktops positioniert.",
    commonIssues:
      "Bei Lenovos IPS-dominierter ThinkVision-Linie gelten die üblichen IPS-Eigenschaften - leichtes Glühen an den Bildschirmecken auf dunklem Hintergrund in einem schwach beleuchteten Raum ist eine normale Paneleigenschaft, kein Defekt. Bei Legion-Gaming-Modellen mit VA-Panels gilt der übliche VA-Kompromiss aus tieferem Kontrast gegenüber mehr Potenzial für Schlieren in dunklen Szenen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beeinflusst ThinkVisions USB-C-Docking die Bildqualität oder das Pixelverhalten?',
        a: "Nein. USB-C-Docking (Stromversorgung, Daten und Video über ein Kabel) ist eine Konnektivitätsfunktion und hat keinen Einfluss auf die Farbwiedergabe des Panels oder darauf, ob einzelne Pixel tot oder hängend sind - das wird ausschließlich durch die physische Panel-Hardware bestimmt.",
      },
      {
        q: 'Hat Lenovo Legion dieselbe Panelqualität wie ThinkVision?',
        a: "Sie dienen unterschiedlichen Zwecken: ThinkVision priorisiert IPS-Panels, die auf Büro-/Produktivitätsfarbgenauigkeit und Betrachtungswinkel abgestimmt sind, während Legion die Gaming-Leistung priorisiert (Bildwiederholrate, Reaktionszeit) und IPS- oder VA-Panels nutzt, die dafür ausgewählt wurden. Keines ist strikt 'hochwertiger' - sie sind unterschiedlich optimiert.",
      },
      {
        q: 'Was ist der schnellste Weg, einen Lenovo-ThinkVision-Monitor bei einem Schreibtisch-Setup mit mehreren Monitoren zu testen?',
        a: "Führen Sie den Vollbildtest jeweils an einem Monitor durch, statt Farbe über einen erweiterten Multi-Monitor-Desktop hinweg gleichzeitig zu beurteilen - der Vollbildmodus des Browsers richtet sich an ein einzelnes Display, daher liefert das einzelne Testen jedes ThinkVision-Monitors ein klareres Ergebnis als ein Vergleich nebeneinander während des Tests.",
      },
    ],
  },
  nec: {
    panelTech:
      "NEC (dessen Display-Geschäft in manchen Regionen inzwischen als Sharp/NEC Display Solutions firmiert) konzentriert sich auf professionelle und spezialisierte Monitore statt auf Verbraucher- oder Gaming-Displays, mit der MultiSync-Linie für Geschäfts- und Public-Signage-Einsatz und der SpectraView-Linie für farbkritische Kreativ- und Druckarbeit, positionsähnlich zu EIZO. NECs professionelle Monitore nutzen IPS-Panels mit interner Kalibrierungshardware bei den höherwertigen SpectraView-Modellen.",
    commonIssues:
      "Da NECs Zielmarkt professionelle und Signage-Nutzung statt Verbraucher-Gaming ist, unterliegen die Monitore in der Regel strengeren werksseitigen Qualitätskontrollstandards für Farbgleichmäßigkeit als günstige Verbraucherdisplays, auch wenn dies die normale Möglichkeit eines einzelnen defekten Geräts nicht ausschließt. Die wichtigste IPS-Paneleigenschaft, die von einem Defekt zu unterscheiden ist, ist das übliche leichte Glühen an den Ecken, sichtbar auf dunklem Bildschirm in einem schwach beleuchteten Raum.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist NEC SpectraView vergleichbar mit EIZO ColorEdge?',
        a: 'Ja, sie nehmen eine ähnliche Marktposition ein - beide sind professionelle, werkskalibrierte IPS-Monitorlinien für farbkritische Foto-, Video- und Druckarbeit, beide nutzten interne Kalibrierungshardware bei höherwertigen Modellen, und beide sind bei Farbgenauigkeitsspezifikationen oberhalb allgemeiner Verbrauchermonitorlinien positioniert.',
      },
      {
        q: 'Verkauft NEC Gaming-Monitore?',
        a: "NECs Monitorsortiment konzentriert sich auf Geschäfts-, Signage- und farbkritische professionelle Arbeit statt auf Gaming - es konkurriert nicht im Segment der Gaming-Monitore mit hoher Bildwiederholrate wie Marken etwa ASUS, MSI oder Acer, daher werden NEC-Monitore in der Regel nicht mit Bildwiederholrate oder Reaktionszeit beworben.",
      },
      {
        q: 'Wo finde ich NECs konkrete Pixelfehler-Politik für mein Modell?',
        a: "NEC/Sharp NEC Display Solutions veröffentlicht Garantiebedingungen je Produktlinie und Region auf der offiziellen Support-Seite statt einer einzelnen universellen Politik - prüfen Sie die Dokumentation für Ihr konkretes MultiSync- oder SpectraView-Modell, statt einen festen Schwellenwert anzunehmen.",
      },
    ],
  },
  viewsonic: {
    panelTech:
      'ViewSonic verkauft ein breites Sortiment, das von günstigen Bürmonitoren bis zur ColorPro-Linie reicht, die IPS-Panels mit Werkskalibrierung für Foto- und Videoprofis nutzt und ähnlich positioniert ist wie BenQs SW/PD-Linien. ViewSonic hat zudem eine lange Geschichte bei Projektoren und Displays für den Bildungsmarkt, ein bemerkenswerter Unterschied zu Marken, die sich rein auf Monitore konzentrieren.',
    commonIssues:
      "Bei ViewSonics ColorPro und anderen IPS-basierten Modellen gelten die üblichen IPS-Eigenschaften - leichtes Glühen an den Ecken, sichtbar auf dunklem Bildschirm in einem schwach beleuchteten Raum, ist für diesen Paneltyp normal, kein Defekt. Bei ViewSonics günstigen Büro- und VA-basierten Modellen gilt der übliche VA-Kompromiss aus tieferem Kontrast gegenüber möglichem Schlieren in dunklen Szenen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist ViewSonic ColorPro, und wie unterscheidet es sich von ViewSonics Standardmonitoren?',
        a: "ColorPro ist ViewSonics werkskalibrierte professionelle Linie für farbkritische Foto- und Videoarbeit, ähnlich positioniert wie BenQs SW/PD-Serie oder ASUS ProArt - sie bietet eine strengere Farbgenauigkeitsvalidierung als ViewSonics allgemeine Büro- oder Einsteigermonitore.",
      },
      {
        q: 'Beeinflusst ViewSonics Projektorenhintergrund die Qualität seiner Monitore?',
        a: "Nicht direkt - Monitore und Projektoren nutzen unterschiedliche Displaytechnologien (Direktsicht-LCD-Panels gegenüber projiziertem Licht), sodass sich ViewSonics lange Projektorengeschichte nicht in einen spezifischen Monitorpanel-Vorteil übersetzt. Die Monitorpanels werden getrennt vom Projektorengeschäft bezogen und bewertet.",
      },
      {
        q: 'Steht die Pixelfehler-Politik eines ViewSonic-Monitors auf der Verpackung oder nur online?',
        a: "Details zur Garantie- und Pixelfehler-Politik finden sich zuverlässiger auf ViewSonics offizieller Support-Seite für Ihr konkretes Modell und Ihre Region als auf der Verkaufsverpackung aufgedruckt, da sich Richtlinien nach dem Verkaufsstart eines Produkts ändern können. Prüfen Sie den Support-Bereich von viewsonic.com für Ihre Modellnummer.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Marken-Unterlinien
  // ---------------------------------------------------------------------
  rog_asus: {
    panelTech:
      "ASUS ROG Swift, das Spitzensegment der ROG-Gaming-Linie, nutzt bei den meisten Modellen Fast-IPS-Panels für eine Kombination aus hoher Bildwiederholrate und angemessener Farbgenauigkeit, wobei eine kleine Zahl von Spitzenmodellen (wie das PG27AQDM) stattdessen QD-OLED-Panels nutzt. ROG-Swift-Monitore sind in der Regel sowohl preislich als auch bei der Panelqualität über der ASUS-TUF-Gaming-Linie positioniert.",
    commonIssues:
      'Bei ROG Swifts Fast-IPS-Modellen gilt die übliche IPS-Eigenschaft leichten Glühens an den Ecken auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei den QD-OLED-ROG-Swift-Modellen verschiebt sich die relevante Überlegung hin zu OLED-spezifischem Verhalten - ein einmaliger Farbtest kann einen aktuell toten oder hängenden Pixel erkennen, aber nicht das langfristige Einbrennrisiko durch statische Bildschirmelemente wie HUDs oder Fadenkreuze.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist ROG Swift immer OLED, oder nutzt es auch IPS?',
        a: "Die meisten ROG-Swift-Monitore nutzen Fast-IPS-Panels; nur eine kleine Zahl von Spitzenmodellen (wie das PG27AQDM) nutzt QD-OLED. Prüfen Sie Ihre konkrete Modellnummer anhand von ASUS' Datenblatt auf asus.com/rog, um vor dem Testen zu bestätigen, welchen Paneltyp Ihr Gerät nutzt.",
      },
      {
        q: 'Beeinflusst die G-Sync-Modulhardware den Test auf tote Pixel bei ROG-Swift-Monitoren?',
        a: 'Nein. Manche ROG-Swift-Modelle enthalten ein dediziertes NVIDIA-G-Sync-Hardwaremodul für variable Bildwiederholrate - dieses steuert das Frame-Pacing und hat keinen Einfluss auf das Verhalten einzelner Pixel oder darauf, wie ein toter/hängender Pixel während eines Farbwechseltests erscheint.',
      },
      {
        q: 'Gelten für ROG-Swift-Monitore strengere Standards bei toten Pixeln als für TUF Gaming?',
        a: "ASUS legt die Pixelfehler-Politik je Produktlinie fest, und Premiumlinien unterliegen manchmal anderen Bedingungen als Einsteigerlinien, doch das ist nicht garantiert für jeden Vergleich zwischen ROG und TUF - prüfen Sie die konkrete Garantiedokumentation für Ihr Modell, statt anzunehmen, dass ein strengerer Standard allein deshalb gilt, weil es die Spitzenlinie ist.",
      },
    ],
  },
  acer_nitro: {
    panelTech:
      "Acer Nitro ist Acers Gaming-Linie im unteren bis mittleren Preissegment, mit VA-Panels bei den meisten gebogenen Modellen und Einstiegs-IPS-Panels bei flacheren Modellen, wobei ein zugänglicher Preispunkt vor den höheren Bildwiederholraten oder der Premium-Paneltechnologie (Mini-LED, OLED) priorisiert wird, die Acers höherwertiger Predator-Linie vorbehalten ist.",
    commonIssues:
      "Da sich Nitros gebogene Modelle auf VA-Panels stützen, gilt der übliche VA-Kompromiss: tieferer nativer Kontrast, aber mehr Potenzial für sichtbares Schlieren bei schneller Bewegung in dunklen Szenen und eine ausgeprägtere Farb-/Kontrastverschiebung bei steilen Betrachtungswinkeln als bei IPS. Dies sind Paneleigenschaften, keine Defekte, doch lohnt es sich, sie beim Testen von einem echten toten oder hängenden Pixel zu unterscheiden.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist Acer Nitro die Einsteigerversion von Predator?',
        a: 'Ja, in der allgemeinen Positionierung - Nitro zielt mit VA- oder Einstiegs-IPS-Panels auf einen zugänglicheren Preispunkt, während Predator eine breitere Spanne bis hin zu Premium-Mini-LED- und OLED-Modellen abdeckt. Beide sind Acer-Gaming-Linien, aber Nitro steht bei Preis und Paneltechnologie in der Regel unter Predator.',
      },
      {
        q: 'Warum zeigt mein gebogener Acer-Nitro-Monitor an den Rändern unterschiedliche Helligkeit?',
        a: "Leichte Helligkeitsschwankungen über ein gebogenes VA-Panel, besonders nahe den Rändern, sind eine verbreitete Eigenschaft der Fertigung gebogener Panels und nicht zwangsläufig ein Defekt - es lohnt sich, dies mit einem Vollbild-Test in Weiß oder Grau zu prüfen, doch eine allmähliche Verschiebung über die Krümmung unterscheidet sich von einem einzelnen festen toten oder hängenden Pixel.",
      },
      {
        q: 'Hat Acer Nitro eine kürzere Garantie als Predator-Monitore?',
        a: "Garantiedauer und -bedingungen werden von Acer je Produkt und Region festgelegt und können sich zwischen Nitro und Predator unterscheiden - überprüfen Sie dies anhand von Acers aktueller regionaler Support-Dokumentation für Ihr konkretes Modell, statt eine feste Beziehung zwischen den beiden Linien anzunehmen.",
      },
    ],
  },
  dell_ips: {
    panelTech:
      "Dells P-Serie-Monitore (die verbreitetsten 'Dell-IPS'-Monitore in Büros) nutzen Standard-IPS-Panels für den Produktivitätseinsatz, ohne die erweiterte Farbkalibrierungsvalidierung, die Dell seiner höherwertigen UltraSharp-U-Serie vorbehält. Sie sind in der Regel als zuverlässige, schnörkellose Geschäftsdisplays positioniert, nicht als farbkritische oder Gaming-fokussierte Monitore.",
    commonIssues:
      "Bei Dells P-Serie-IPS-Monitoren gilt die übliche IPS-Eigenschaft: leichtes Glühen an den Ecken, sichtbar auf dunklem Bildschirm in einem schwach beleuchteten Raum, ist für diesen Paneltyp normal. Da diese meist als einfache Bürmonitore statt als Premiummodelle positioniert sind, sind die Farbgenauigkeitstoleranzen in der Regel großzügiger als bei Dells UltraSharp-Linie, was jedoch eher die Farbkonsistenz als speziell die Wahrscheinlichkeit von Pixelfehlern betrifft.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Hat Dells P-Serie dieselbe Panelqualität wie UltraSharp?',
        a: "Nein. P-Serie-Monitore nutzen Standard-IPS-Panels für allgemeine Büroproduktivität, während UltraSharp-Monitore (U-Serie) IPS- oder IPS-Black-Panels mit strengerer werksseitiger Farbkalibrierung für kreative und professionelle Arbeit nutzen. Die P-Serie ist Dells einfacheres, preisgünstigeres IPS-Segment.",
      },
      {
        q: 'Werden Dell-P-Serie-Monitore mit einem Farbgenauigkeitsbericht wie UltraSharp geliefert?',
        a: 'In der Regel nicht - Farbgenauigkeitsberichte pro Gerät sind ein Merkmal, das Dell gezielt bei manchen UltraSharp-Modellen bewirbt, nicht etwas, das typischerweise bei der einfacheren P-Serie enthalten ist. Prüfen Sie die mitgelieferte Dokumentation Ihres konkreten Modells, um dies zu bestätigen.',
      },
      {
        q: 'Worauf sollte ich bei einem Dell-IPS-Bürmonitor neben toten Pixeln noch achten?',
        a: "Neben toten/hängenden Pixeln lohnt es sich, ungleichmäßige Hintergrundbeleuchtungshelligkeit über einen Vollbild-Grau- oder Weißtest sowie sichtbare Wolkenbildung in den Ecken auf schwarzem Bildschirm in einem schwach beleuchteten Raum zu prüfen - beides unabhängig von einzelnen Pixelfehlern, aber mit Einfluss auf die allgemeine Bildgleichmäßigkeit.",
      },
    ],
  },
  lg_ultrawide: {
    panelTech:
      "LGs Ultrawide-Monitore (21:9 und breiter) basieren nahezu vollständig auf IPS-Panels aus LG Displays eigener Fertigung und umfassen sowohl produktivitätsorientierte Modelle (wie die Linien UltraWide und UltraFine) als auch Gaming-orientierte Ultrawide-Modelle innerhalb des UltraGear-Sortiments, die für schnellere Reaktionszeiten Nano IPS nutzen.",
    commonIssues:
      "Ultrawide-Panels sind physisch breiter als Standard-16:9-Monitore, was bedeutet, dass mehr Panelfläche für Fertigungstoleranzen zur Verfügung steht - es lohnt sich, Helligkeit und Farbgleichmäßigkeit über die gesamte Breite mit einem Vollbild-Grau- oder Weißtest zu prüfen, nicht nur in der Mitte, zusätzlich zur Prüfung auf einzelne tote oder hängende Pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Sind Defekte bei einem Ultrawide-Monitor wahrscheinlicher, weil er größer ist?',
        a: "Nicht unbedingt speziell mehr tote Pixel, aber die größere physische Panelfläche bedeutet, dass es mehr Fläche gibt, über die Helligkeit oder Farbgleichmäßigkeit variieren kann - eine von einzelnen Pixelfehlern getrennte Überlegung. Es lohnt sich, bei jedem Ultrawide die gesamte Breite mit einer Vollfarbe zu testen, nicht nur die Mitte.",
      },
      {
        q: 'Nutzt LGs Ultrawide-Gaming-Linie andere Panels als seine Produktivitäts-Ultrawides?',
        a: "LGs UltraGear-Ultrawide-Gaming-Modelle nutzen in der Regel Nano IPS für schnellere Reaktionszeiten, während LGs Nicht-Gaming-Ultrawide- und UltraFine-Linien Standard-IPS nutzen, das stärker auf Farbgenauigkeit und Produktivität als auf Bildwiederholrate abgestimmt ist - prüfen Sie das Datenblatt Ihres konkreten Modells, um dies zu bestätigen.",
      },
      {
        q: 'Wie führe ich einen Vollbild-Test auf tote Pixel bei einem Ultrawide-Bildformat durch?',
        a: "Der Vollbildtest im Browser füllt automatisch das Bildformat, das Ihr Display und Browserfenster nutzen, einschließlich 21:9 oder breiterer Ultrawide-Bildschirme - stellen Sie nur sicher, dass sich Ihr Browserfenster vor dem Start des Tests auf dem Ultrawide-Display befindet (nicht auf einem sekundären Standardmonitor).",
      },
    ],
  },
  samsung_curved: {
    panelTech:
      "Samsungs gebogene Gaming-Monitore (die Odyssey-Linie, einschließlich Modelle mit 1000R-Krümmung) basieren auf VA-Panels aus Samsungs eigener Display-Sparte, gewählt wegen VAs tieferem nativem Kontrastverhältnis, das Samsung als Ergänzung zum immersiven Effekt der Krümmung bewirbt.",
    commonIssues:
      "Gebogene VA-Panels vereinen zwei getrennte Eigenschaften, die es sich lohnt, beim Testen von einem toten oder hängenden Pixel zu unterscheiden: das VA-typische Potenzial für Schlieren in dunklen Szenen und Farbverschiebung je nach Betrachtungswinkel, plus die Krümmung selbst kann Helligkeit oder Farbe an den Rändern gegenüber der Mitte des Bildschirms bei außeraxialer Betrachtung leicht anders erscheinen lassen, rein als Funktion der physischen Krümmungsgeometrie.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Macht die Krümmung bei einem Samsung-Odyssey-Monitor tote Pixel schwerer erkennbar?',
        a: "Nicht grundsätzlich - ein toter oder hängender Pixel bleibt unabhängig von der Bildschirmkrümmung ein einzelner fester Farbpunkt. Was die Krümmung beeinflusst, ist, wie gleichmäßig Helligkeit und Farbe an den Rändern gegenüber der Mitte bei außermittiger Betrachtung erscheinen - ein getrennter, allmählicher Effekt, kein scharfer Einzelpixeldefekt.",
      },
      {
        q: 'Was bedeutet 1000R, und beeinflusst es die Paneltechnologie?',
        a: "1000R beschreibt den Krümmungsradius (ein Kreis mit 1000 mm Radius, was ungefähr dem natürlichen peripheren Sichtfeld des Menschen entspricht) - es ist eine physische Krümmungsspezifikation, keine Paneltechnologie. Das darunterliegende Panel ist bei Samsungs Odyssey-Linie weiterhin VA; die Krümmungszahl ändert nichts daran, wie der Test auf tote Pixel funktioniert.",
      },
      {
        q: 'Sollte ich einen gebogenen Samsung-Monitor im normalen Betrachtungsabstand testen?',
        a: "Ja - gebogene Monitore sind für einen bestimmten Betrachtungsabstand konzipiert, bei dem die Krümmung dem natürlichen Bogen Ihres Auges entspricht, und ein Test von zu weit weg oder in einem Winkel kann normale krümmungsbedingte Helligkeitsschwankungen ausgeprägter erscheinen lassen, als sie in der vorgesehenen Betrachtungsposition wären.",
      },
    ],
  },
  asus_tuf: {
    panelTech:
      "ASUS TUF Gaming steht in ASUS' Gaming-Sortiment unter ROG Swift, mit VA- und Standard-IPS-Panels statt der Fast-IPS- oder QD-OLED-Panels der Spitzenmodelle ROG, ausgerichtet auf wettbewerbsfähige Preise statt Spitzen-Paneltechnologie. ASUS bewirbt die TUF-Linie mit Komponentenlangzeittests, wobei dies eine von der Paneltechnologie selbst getrennte Verarbeitungsqualitätsaussage ist.",
    commonIssues:
      "Bei TUF Gamings VA-Modellen gilt der übliche VA-Kompromiss: tieferer nativer Kontrast gegenüber mehr Potenzial für Schlieren in dunklen Szenen und Farbverschiebung bei Betrachtungswinkel. Bei IPS-basierten TUF-Modellen ist das übliche leichte Eckenglühen auf dunklem Bildschirm in einem schwach beleuchteten Raum die relevante IPS-Eigenschaft, um sie von einem echten Defekt zu unterscheiden.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist ASUS TUF Gaming die Einsteigerversion von ROG?',
        a: "Ja, allgemein gesehen - TUF Gaming zielt mit VA- oder Standard-IPS-Panels statt ROGs Fast-IPS- oder QD-OLED-Optionen auf einen niedrigeren Preispunkt. Beide sind ASUS-Gaming-Linien, aber TUF steht bei Preis und Panel-Segment unter ROG.",
      },
      {
        q: 'Verringern ASUS-Langzeittests für TUF-Monitore das Risiko toter Pixel?',
        a: "ASUS bewirbt TUF-Gaming-Produkte mit Komponenten- und Verarbeitungsqualitätstests (etwa Kondensator- und Standfußlangzeittests), was eine von der Panelfertigung getrennte Aussage ist, und Langzeittests zielen nicht speziell darauf ab, das Risiko einzelner Pixelfehler zu verringern oder zu beseitigen, das aus der Panelfertigung, nicht der umgebenden Hardware stammt.",
      },
      {
        q: 'Welchen Paneltyp nutzt mein konkretes TUF-Gaming-Modell?',
        a: "TUF Gaming umfasst je nach konkretem Modell sowohl VA- als auch IPS-Panels - prüfen Sie das Feld 'Paneltyp' im offiziellen ASUS-Datenblatt Ihres Modells auf asus.com/tuf-gaming, um zu bestätigen, welches Sie haben, bevor Sie beurteilen, welches Betrachtungswinkel- oder Kontrastverhalten normal ist.",
      },
    ],
  },
  lg_gaming: {
    panelTech:
      "LGs Gaming-Linie UltraGear umfasst Nano-IPS-Panels (der Großteil des Sortiments, gewählt wegen schneller Reaktionszeiten mit besserer Farbgenauigkeit als typische TN- oder VA-Gaming-Panels) sowie eine kleinere Zahl von OLED-UltraGear-Modellen im oberen Segment, basierend auf LG Displays eigener Panelfertigung.",
    commonIssues:
      "Bei Nano-IPS-UltraGear-Modellen gilt die übliche IPS-Eigenschaft leichten Glühens an den Ecken auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei OLED-UltraGear-Modellen ist die relevante Überlegung anders: Ein Farbwechseltest kann bestätigen, ob ein Pixel aktuell tot oder hängend ist, kann aber kein Einbrennrisiko durch längere statische Anzeigen wie Spiel-HUDs vorhersagen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist LG UltraGear dasselbe wie LGs reguläre Monitorlinie?',
        a: "Nein. UltraGear ist LGs dedizierte Gaming-Submarke mit Nano-IPS- oder OLED-Panels, ausgewählt für hohe Bildwiederholrate und schnelle Reaktionszeit, während LGs allgemeines Monitorsortiment (UltraWide, UltraFine, Standard-IPS-Modelle) Produktivität oder Farbgenauigkeit über gaming-spezifische Leistung priorisiert.",
      },
      {
        q: 'Verändert Nano IPS, wie tote Pixel im Vergleich zu Standard-IPS aussehen?',
        a: "Nein. Nano IPS ist eine Farbraumverbesserung (eine Nanopartikelschicht, die Lichtwellenlängen filtert), keine Änderung der zugrunde liegenden Pixelstruktur - tote und hängende Pixel erscheinen bei Nano IPS genauso wie bei jeder anderen IPS-Variante: ein fester Farbpunkt, der sich nicht mit dem Hintergrund verändert.",
      },
      {
        q: 'Sollte ich einen OLED-UltraGear-Monitor anders testen als einen Nano-IPS-Monitor?',
        a: 'Nutzen Sie denselben Farbwechselprozess, richten Sie Ihre Aufmerksamkeit beim OLED-Modell aber stärker auf gesättigte Farben (Rot, Grün, Blau) statt auf schwarze Bildschirme, da OLED Schwarz durch vollständiges Abschalten der Pixel erzeugt, was einen abgeschaltet hängenden Pixel verdecken kann, der gegen eine helle Farbe offensichtlich wäre.',
      },
    ],
  },
  dell_gaming: {
    panelTech:
      "Dells Gaming-Bemühungen laufen größtenteils über die Submarke Alienware (verkauft unter dem Dell-Konzerndach), die je nach Modell IPS- und QD-OLED-Panels nutzt - Dell unterhält keine große separate Nicht-Alienware-Gaming-Linie, wie es manche Wettbewerber tun.",
    commonIssues:
      'Bei Alienwares IPS-Gaming-Modellen gilt die übliche IPS-Eigenschaft leichten Eckenglühens auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei den QD-OLED-Alienware-Modellen (wie dem AW3423DW) verschiebt sich die relevante Überlegung hin zu OLED-spezifischem Verhalten: Ein Farbtest deckt aktuell tote oder hängende Pixel auf, nicht aber zukünftiges Einbrennrisiko durch statische Inhalte.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Verkauft Dell Gaming-Monitore außerhalb der Marke Alienware?',
        a: "Dells gaming-orientierte Monitore werden hauptsächlich unter dem Namen Alienware verkauft statt direkt unter der Marke Dell, wobei Alienware innerhalb Dells Konzernstruktur operiert. Wenn Sie nach einem 'Dell-Gaming-Monitor' suchen, handelt es sich höchstwahrscheinlich um ein Modell der Marke Alienware.",
      },
      {
        q: 'Ist die Garantie bei Alienware-Monitoren anders als bei Dell UltraSharp?',
        a: "Dell legt die Pixelfehler- und Garantiepolitik je Produktlinie fest, und Alienwares Bedingungen entsprechen nicht garantiert denen von UltraSharp - prüfen Sie die konkrete Garantiedokumentation für Ihr Alienware-Modell, statt anzunehmen, dass sie Dells professioneller Monitorlinie entspricht.",
      },
      {
        q: 'Was sollte ich bei einem neuen Alienware-QD-OLED-Monitor zuerst prüfen?',
        a: 'Führen Sie den Vollbild-Farbwechseltest über alle Farben durch, mit besonderem Augenmerk auf Rot, Grün und Blau statt auf Schwarz, da OLED-Panels Schwarz durch Abschalten der Pixel erzeugen - ein abgeschaltet hängender Pixel verschmilzt mit schwarzem Inhalt und fällt gegen eine gesättigte Farbe deutlich stärker auf.',
      },
    ],
  },
  benq_gaming: {
    panelTech:
      "BenQs Gaming-Monitore teilen sich zwischen der Mobiuz-Linie (Consumer-Gaming, IPS- oder VA-Panels im Ausgleich zwischen Farbgenauigkeit und Bildwiederholrate) und der Zowie-Linie (E-Sport-fokussiert, meist matte TN- oder IPS-Panels, abgestimmt auf minimale Eingabeverzögerung und gleichmäßige Bewegungsschärfe über Farblebendigkeit, beliebt bei kompetitiven FPS-Spielern).",
    commonIssues:
      "Bei Mobiuz-IPS-Modellen gilt das übliche IPS-Glow an den Ecken in einem dunklen Raum. Bei Zowies TN-basierten Modellen erwarten Sie eine ausgeprägtere Farb- und Kontrastverschiebung bei außermittigen Betrachtungswinkeln als bei IPS oder VA - eine normale TN-Eigenschaft, kein Defekt, wobei es sich lohnt, bei geradem Blick zu testen, um ein zuverlässigeres Ergebnis bei echten Pixelfehlern zu erhalten.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen BenQ Mobiuz und BenQ Zowie?',
        a: "Mobiuz ist BenQs Consumer-Gaming-Linie im Ausgleich zwischen Farbgenauigkeit und Gaming-Leistung, während Zowie BenQs E-Sport-orientierte Linie ist, die minimale Eingabeverzögerung und Bewegungsschärfe (oft mit matten TN-Panels) für kompetitive Spieler priorisiert, in der Regel auf Kosten von Farblebendigkeit und Betrachtungswinkeln im Vergleich zu Mobiuz.",
      },
      {
        q: 'Warum sieht Farbe auf meinem BenQ-Zowie-Monitor in einem Winkel anders aus?',
        a: "Wenn Ihr Zowie-Modell ein TN-Panel nutzt, ist eine ausgeprägtere Farb- und Kontrastverschiebung bei außermittigen Betrachtungswinkeln eine normale Eigenschaft der TN-Technologie, die von Zowie gezielt wegen der geringen Eingabeverzögerung statt der Farbgenauigkeit gewählt wurde - das ist kein Defekt, bedeutet aber, dass ein Test bei geradem Blick auf den Bildschirm ein zuverlässigeres Ergebnis liefert.",
      },
      {
        q: 'Beeinflusst BenQs Augenschonungstechnologie bei Mobiuz-Monitoren den Pixeltest?',
        a: "Nein. BenQs Eye-Care-Funktionen (flimmerfreie Hintergrundbeleuchtung, Blaulichtfilter-Modi) passen an, wie die Hintergrundbeleuchtung angesteuert wird, und die Farbtemperatur - sie beeinflussen nicht die einzelne Pixelhardware, sodass ein toter oder hängender Pixel unabhängig davon, ob diese Modi aktiviert sind, gleich erscheint.",
      },
    ],
  },
  msi_curved: {
    panelTech:
      "MSIs gebogene Gaming-Monitore (hauptsächlich in der MAG- und MPG-Serie) basieren auf VA-Panels, gewählt wegen des tieferen nativen Kontrasts, den VA bietet, was MSI als Ergänzung zum immersiven Effekt des gebogenen Formfaktors positioniert - eine ähnliche Argumentation wie bei anderen Marken gebogener Gaming-Monitore, etwa Samsungs Odyssey-Linie.",
    commonIssues:
      "Der übliche VA-Kompromiss gilt bei MSIs gebogenen Modellen: tieferer nativer Kontrast gegenüber mehr Potenzial für Schlieren in dunklen Szenen bei schneller Bewegung und ausgeprägterer Farb-/Kontrastverschiebung bei steilen Betrachtungswinkeln. Die Krümmung selbst kann zudem dazu führen, dass Helligkeit an den Rändern gegenüber der Mitte bei außeraxialer Betrachtung leicht ungleichmäßig erscheint, unabhängig von einem echten toten oder hängenden Pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Warum nutzen gebogene Gaming-Monitore wie die von MSI meist VA statt IPS?',
        a: "VA-Panels bieten tiefere native Kontrastverhältnisse als IPS, was Hersteller einschließlich MSI als gut passend zum immersiven Effekt eines gebogenen Bildschirms bewerben. IPS-Panels lassen sich technisch biegen, sind aber branchenweit bei gebogenen Gaming-Monitoren seltener, teils aus Kostengründen und teils wegen dieser Kontrastpräferenz.",
      },
      {
        q: 'Beeinflusst MSIs Krümmungsradius, wo ich nach toten Pixeln suchen sollte?',
        a: "Nicht spezifisch - tote und hängende Pixel können unabhängig vom Krümmungsradius überall auf dem Panel auftreten. Es lohnt sich, bewusst die äußeren Ränder eines gebogenen Bildschirms zusätzlich zur Mitte zu prüfen, einfach weil man die Ränder auf einem breiten gebogenen Display leichter übersieht als auf einem flachen.",
      },
      {
        q: 'Ist MSIs RGB-Beleuchtung Mystic Light Teil des Displaypanels?',
        a: "Nein. Mystic Light ist Gehäuse- und Standfußbeleuchtung, unabhängig vom Displaypanel selbst - sie hat keinen Einfluss auf die Pixelwiedergabe oder darauf, wie ein toter/hängender Pixel während eines Farbwechseltests erscheinen würde.",
      },
    ],
  },
  corsair_gaming: {
    panelTech:
      "Corsairs XENEON-Gaming-Monitore nutzen bei den meisten Modellen IPS-Panels, wobei das XENEON Flex eine bemerkenswerte biegsame QD-OLED-Ausnahme darstellt, in der Regel ausgerichtet auf Gaming mit hoher Bildwiederholrate mit Schwerpunkt auf der Integration in Corsairs breiteres iCUE-Ökosystem aus Peripheriegeräten und PC-Komponenten.",
    commonIssues:
      "Bei XENEONs IPS-Modellen gilt das übliche IPS-Glow an den Ecken auf dunklem Bildschirm in einem schwach beleuchteten Raum. Beim QD-OLED-XENEON-Flex verschiebt sich die relevante Überlegung hin zu OLED-spezifischem Verhalten - das Testen mit gesättigten Farben ist aussagekräftiger als das Testen mit Schwarz, da OLED Schwarz durch vollständiges Abschalten der Pixel erzeugt.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Welches Panel nutzt das Corsair XENEON Flex?',
        a: 'Das XENEON Flex nutzt ein biegsames QD-OLED-Panel, bemerkenswert dafür, dass es von Hand zwischen flachem und gebogenem Formfaktor verstellbar ist - eine andere Paneltechnologie als die Standard-IPS-Panels, die bei den meisten übrigen Modellen von Corsairs XENEON-Sortiment verwendet werden.',
      },
      {
        q: 'Erhöht das Biegen des XENEON Flex das Risiko toter Pixel?',
        a: 'Corsair hat den Biegemechanismus des Flex so konzipiert, dass er innerhalb der angegebenen Biegetoleranz des Panels funktioniert, aber wie bei jedem beweglichen mechanischen Bauteil lohnt es sich, die Herstellerhinweise zu befolgen, wie weit und wie oft gebogen werden sollte - prüfen Sie Corsairs offizielle Dokumentation zu den konkreten Biegegrenzen des Panels, statt dies anzunehmen.',
      },
      {
        q: 'Ist Corsairs Monitorgarantie an eine iCUE-Softwareregistrierung geknüpft?',
        a: "Die Standard-Hardwaregarantie ist in der Regel unabhängig davon, ob Sie die iCUE-Software installiert oder sich damit registriert haben - prüfen Sie Ihre konkrete Kaufdokumentation und Corsairs Support-Seite, um die Garantiebedingungen für Ihr Modell und Ihre Region zu bestätigen.",
      },
    ],
  },
  asus_4k: {
    panelTech:
      "ASUS' professionelle 4K-Linie ProArt nutzt IPS-Panels mit werkseitiger, Calman-verifizierter Farbkalibrierung für Foto- und Videoprofis, in der Regel validiert für strengere Farbgenauigkeitstoleranzen (oft beworben mit Delta E < 2) als ASUS' allgemeine Verbraucher- oder Gaming-4K-Monitore.",
    commonIssues:
      "Bei ProArts IPS-Panels gilt die übliche IPS-Eigenschaft leichten Glühens an den Ecken auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei 4K-Auflösung speziell sind einzelne Pixel physisch kleiner als bei einem 1080p- oder 1440p-Panel gleicher Größe, was einen einzelnen toten oder hängenden Pixel auf den ersten Blick etwas schwerer erkennbar macht und einen genaueren, gezielteren Scan lohnenswert macht.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Macht 4K-Auflösung tote Pixel schwerer auffindbar?',
        a: "Ein einzelner toter oder hängender Pixel ist auf einem 4K-Panel physisch kleiner als auf einem Panel niedrigerer Auflösung gleicher Bildschirmgröße, da mehr Pixel auf denselben Raum verteilt sind. Er bleibt aus der Nähe sichtbar, doch ein langsamerer, gezielter Scan über den Vollbild-Farbtest lohnt sich bei 4K-Monitoren im Vergleich zu solchen mit niedrigerer Auflösung.",
      },
      {
        q: 'Erfolgt die ASUS-ProArt-Kalibrierung bei jedem Gerät oder nur für die Produktlinie im Allgemeinen?',
        a: "Prüfen Sie die Dokumentation Ihres konkreten ProArt-Modells - manche ProArt-Monitore enthalten einen Werkskalibrierungsbericht pro Gerät, während sich bei anderen die Calman-Verifizierungsaussage auf die Designvalidierung der Produktlinie bezieht statt auf jedes einzeln ausgelieferte Gerät. Dieses Detail variiert je nach Modell.",
      },
      {
        q: 'Welchen Delta-E-Wert sollte ich bei einem ASUS-ProArt-4K-Monitor erwarten?',
        a: "ASUS bewirbt mehrere ProArt-Modelle mit einem Genauigkeitsziel von Delta E < 2, was allgemein als genau genug gilt, damit Farbunterschiede für das menschliche Auge nicht wahrnehmbar sind. Der genaue Wert und ob er pro Gerät garantiert wird oder als Designziel gilt, variiert je nach Modell - prüfen Sie das Datenblatt Ihres konkreten Modells.",
      },
    ],
  },
  lg_4k: {
    panelTech:
      "LGs 4K-Monitorangebot teilt sich zwischen der UltraFine-Linie (IPS-Panels, USB-C-Konnektivität, historisch auf Mac-Kompatibilität ausgerichtet) und 4K-Modellen innerhalb der UltraGear-Gaming-Linie (Nano IPS, höhere Bildwiederholraten), plus allgemeinen 4K-IPS-Monitoren außerhalb beider Submarken, alle basierend auf LG Displays eigener Panelfertigung.",
    commonIssues:
      "Bei jedem von LGs 4K-IPS-Modellen gilt die übliche IPS-Eigenschaft leichten Eckenglühens auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei 4K-Auflösung sind einzelne Pixel physisch kleiner als bei einem Panel niedrigerer Auflösung gleicher Größe, was einen einzelnen toten oder hängenden Pixel auf den ersten Blick etwas weniger auffällig macht und einen langsameren, gezielten Scan beim Testen lohnenswert macht.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen LG UltraFine und LGs anderen 4K-Monitoren?',
        a: "UltraFine ist LGs Linie, die historisch auf Mac-Kompatibilität und USB-C-Konnektivität ausgerichtet ist, während LG auch allgemeine 4K-IPS-Monitore außerhalb dieser Submarke und 4K-Gaming-Modelle innerhalb von UltraGear verkauft. Alle nutzen Panels der IPS-Familie, aber UltraFines Positionierung ist speziell produktiv/kreativ statt gaming-orientiert.",
      },
      {
        q: 'Braucht ein 4K-LG-Monitor eine leistungsfähigere Grafikkarte, um richtig getestet zu werden?',
        a: "Der Test auf tote Pixel selbst ist nur Vollbild-Wiedergabe von Vollfarben, was für jede moderne Grafikhardware unabhängig von der Auflösung eine minimale Last darstellt - Sie brauchen keine leistungsstarke GPU, um den Test selbst durchzuführen, auch wenn die allgemeine Wiedergabe von 4K-Inhalten im Alltag von mehr Grafikleistung profitiert.",
      },
      {
        q: 'Sollte ich mit nativer 4K-Auflösung oder einer skalierten Auflösung testen?',
        a: "Testen Sie nach Möglichkeit mit der nativen 4K-Auflösung Ihres Monitors, da der Betrieb mit einer skalierten oder niedrigeren Auflösung bedeutet, dass das Display das Bild hochskaliert, was es schwerer machen kann zu beurteilen, ob ein Defekt auf einem einzelnen physischen Pixel liegt oder ein Artefakt der Skalierung ist.",
      },
    ],
  },
  dell_4k: {
    panelTech:
      "Dells professionelle 4K-Monitore konzentrieren sich auf die UltraSharp-U-Serie mit IPS- oder IPS-Black-Panels und werksseitiger Farbkalibrierung für Foto-, Video- und allgemeine kreative professionelle Arbeit - in der Regel Dells am stärksten auf Farbgenauigkeit ausgerichtetes Monitorsegment.",
    commonIssues:
      "Bei UltraSharps IPS-Panels gilt die übliche IPS-Eigenschaft leichten Eckenglühens auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei 4K-Auflösung sind einzelne Pixel physisch kleiner als bei einem Panel niedrigerer Auflösung gleicher Größe, was einen einzelnen toten oder hängenden Pixel auf den ersten Blick weniger auffällig macht - ein langsamerer, gezielter Scan beim Testen lohnt sich bei jedem 4K-Monitor.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Enthalten alle Dell-UltraSharp-4K-Monitore einen Werkskalibrierungsbericht?',
        a: "Nicht universell - Werkskalibrierungsberichte sind ein Merkmal, das Dell bei bestimmten UltraSharp-Modellen bewirbt, nicht bei der gesamten U-Serie. Prüfen Sie die Produktseite Ihres konkreten Modells oder die mitgelieferte Dokumentation, um zu bestätigen, ob ein Kalibrierungsbericht pro Gerät enthalten war.",
      },
      {
        q: 'Ist IPS Black für Pixelfehlerzwecke dasselbe wie Standard-IPS?',
        a: "IPS Black ist Dells Marketingname für eine IPS-Variante mit verbessertem nativem Kontrastverhältnis gegenüber Standard-IPS - es ändert nichts daran, wie tote oder hängende Pixel erkannt werden, da die zugrunde liegende Pixelstruktur und Testmethode dieselben sind wie bei jedem anderen IPS-Panel.",
      },
      {
        q: 'Auf welche Auflösung sollte der Browser beim Testen eines 4K-Dell-Monitors eingestellt sein?',
        a: "Stellen Sie sicher, dass Ihr Browserfenster auf dem 4K-Display maximiert ist (nicht auf einem sekundären Monitor) und dass die Bildschirmskalierung Ihres Betriebssystems den Browser nicht mit reduzierter effektiver Auflösung rendern lässt - der Vollbildtest funktioniert am besten, wenn er das native 4K-Panel tatsächlich vollständig ausfüllt.",
      },
    ],
  },
  benq_4k: {
    panelTech:
      "BenQs professionelle 4K-Monitore teilen sich zwischen der SW-Serie (fotografieorientiert, breiter Farbraum, Hardwarekalibrierung nach Pantone validiert) und der PD-Serie (allgemeine Design-/professionelle Arbeit), beide mit IPS-Panels, wobei SW-Modelle in der Regel eine strengere, speziell auf Fotografen ausgerichtete Farbgenauigkeitsvalidierung mitbringen.",
    commonIssues:
      "Bei BenQs IPS-basierten SW- und PD-4K-Modellen gilt das übliche IPS-Glow an den Ecken auf dunklem Bildschirm in einem schwach beleuchteten Raum. Bei 4K-Auflösung sind einzelne Pixel physisch kleiner als bei Panels niedrigerer Auflösung gleicher Größe, was einen einzelnen toten oder hängenden Pixel auf den ersten Blick weniger auffällig macht und einen langsameren, gezielten Scan lohnenswert macht.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Sollte ich BenQ SW oder PD für 4K-Fotobearbeitung kaufen?',
        a: "BenQ positioniert SW gezielt für Fotografie mit strengerer Farbvalidierung und breiterer Farbraumabdeckung, während sich PD breiter an allgemeines Design und professionelle Arbeit richtet - wenn farbkritische Fotografie Ihr Hauptzweck ist, ist SW BenQs speziellere Option, doch prüfen Sie die aktuellen Modellspezifikationen, da sich das Sortiment im Laufe der Zeit ändert.",
      },
      {
        q: 'Bedeutet BenQs Hardwarekalibrierung, dass mein 4K-Monitor keinen Farbtest benötigt?',
        a: "Hardwarekalibrierung betrifft die allgemeine Farbgenauigkeit und -konsistenz, ist aber ein eigener Prozess getrennt von der Prüfung auf tote oder hängende Pixel, welche einzelne Hardwaredefekte sind, unabhängig von der Farbkalibrierung. Es lohnt sich weiterhin, einen Farbwechseltest für Pixel auch bei einem kalibrierten Gerät durchzuführen.",
      },
      {
        q: 'Ist eine Pantone-Validierung dasselbe wie ein Werkskalibrierungsbericht?',
        a: "Pantone Validated ist eine Zertifizierung, die angibt, dass das Display Pantones Farbgenauigkeitsstandards als Produktlinie erfüllt - eine andere (wenn auch verwandte) Aussage als ein Werkskalibrierungsbericht pro Gerät. Prüfen Sie die Dokumentation Ihres konkreten Modells, um zu sehen, was für Ihr Gerät gilt.",
      },
    ],
  },
  samsung_4k: {
    panelTech:
      "Samsungs 4K-Monitore teilen sich zwischen gaming-orientierten Modellen der Odyssey-Neo-G-Serie (mit Mini-LED-hinterleuchteten VA-Panels) und allgemeinen oder Smart-Monitor-4K-Modellen (der M-Serie), wobei die Paneltechnologie stärker nach Produktlinie als allein nach Auflösung variiert.",
    commonIssues:
      "Bei Mini-LED-VA-Modellen ist Blooming (ein weicher Lichthof um helle Objekte auf dunklem Hintergrund, bedingt durch die Zonenaufteilung der Mini-LED-Hintergrundbeleuchtung) die relevante Eigenschaft, die von einem toten oder hängenden Pixel zu unterscheiden ist - Blooming ist ein Hintergrundbeleuchtungseffekt, der an nahegelegene helle Inhalte gebunden ist, während ein Pixelfehler ein einzelner fester Punkt ist, unabhängig davon, was in der Nähe angezeigt wird. Bei 4K-Auflösung im Allgemeinen sind einzelne Pixel zudem physisch kleiner, was einen langsameren, gezielten Scan lohnenswert macht.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist Mini-LED, und wie unterscheidet es sich von einem toten Pixel?',
        a: "Mini-LED bezeichnet die Hintergrundbeleuchtungstechnologie (viele kleine LED-Zonen hinter einem VA- oder IPS-Panel, die eine präzisere lokale Dimmung ermöglichen), nicht die Pixel selbst. Ein Mini-LED-Artefakt namens 'Blooming' - ein Lichthof um helle Objekte auf dunklen Hintergründen - ist ein Hintergrundbeleuchtungseffekt, während ein toter oder hängender Pixel ein einzelner fester Farbpunkt auf der Panelebene selbst ist.",
      },
      {
        q: 'Wird Samsungs 4K-Smart-Monitor der M-Serie genauso getestet wie ein Odyssey-Gaming-Monitor?',
        a: "Ja, das Vollbild-Farbwechsel-Testverfahren ist unabhängig davon identisch, ob es sich um ein gaming-orientiertes Odyssey-Modell oder einen allgemeinen Smart-Monitor der M-Serie handelt - was sich unterscheidet, ist die dahinterliegende Paneltechnologie (Mini-LED-VA gegenüber Standard-VA oder IPS), was beeinflusst, welche anderen Eigenschaften (wie Blooming) normal zu erwarten sind.",
      },
      {
        q: 'Nutzt die 4K-Odyssey-Neo-G-Serie dasselbe VA-Panel wie Odyssey-Modelle ohne Mini-LED?',
        a: "Nein - die Neo-G-Serie kombiniert VA-Paneltechnologie mit einer Mini-LED-Hintergrundbeleuchtung für präzisere lokale Dimmung, während Samsungs Standard-(Nicht-Neo-)Odyssey-Modelle VA-Panels mit herkömmlicher Hintergrundbeleuchtung nutzen. Beide sind auf Panelebene VA, aber die Hintergrundbeleuchtungssysteme unterscheiden sich erheblich.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Kategorieseiten (nicht an eine einzelne Marke gebunden)
  // ---------------------------------------------------------------------
  portable_monitor: {
    panelTech:
      "Tragbare Monitore, die über ein einzelnes USB-C-Kabel mit Strom versorgt und angesteuert werden, basieren nahezu ausschließlich auf IPS-Panels mit 1080p- oder 1440p-Auflösung und priorisieren eine dünne, leichte Bauweise vor den höheren Bildwiederholraten oder der Premium-Paneltechnologie (VA, OLED) von Desktopmonitoren, bei Marken wie ASUS ZenScreen, Lenovo und einer breiten Palette kleinerer Hersteller.",
    commonIssues:
      "Da tragbare Monitore dünner sind und dafür konzipiert wurden, transportiert und wiederholt an- und abgesteckt zu werden, lohnt es sich, die USB-C-Kabelverbindung und den Anschluss getrennt auf Zuverlässigkeitsprobleme (wie zeitweiligen Signalausfall) zu prüfen, zusätzlich zur Prüfung auf tote oder hängende Pixel, da eine lockere Verbindung manchmal wie ein Displayproblem aussehen kann, tatsächlich aber ein Kabel- oder Anschlussproblem ist.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Kann ein flackernder Bildschirm bei einem tragbaren Monitor mit einem Problem toter Pixel verwechselt werden?',
        a: "Ja, aber es handelt sich um unterschiedliche Probleme: Flackern über den gesamten Bildschirm deutet meist auf ein Problem mit der USB-C-Stromversorgung oder dem Kabel hin, da tragbare Monitore über dasselbe Kabel wie das Videosignal mit Strom versorgt werden, während ein toter oder hängender Pixel ein einzelner fester Punkt ist, der nicht flackert und unabhängig vom Rest des Bildschirms gleich bleibt.",
      },
      {
        q: 'Braucht ein tragbarer Monitor einen Laptop mit hoher USB-C-Leistung, um korrekt getestet zu werden?',
        a: "Die meisten tragbaren Monitore benötigen eine bestimmte Mindest-USB-C-Ausgangsleistung vom angeschlossenen Gerät, um überhaupt zu funktionieren - wenn der Bildschirm nicht angeht oder dunkel/instabil ist, prüfen Sie den Stromversorgungsbedarf Ihres tragbaren Monitors gegenüber dem, was der USB-C-Anschluss Ihres Laptops liefert, bevor Sie einen Paneldefekt annehmen.",
      },
      {
        q: 'Sind tragbare Monitore anfälliger für tote Pixel als Desktopmonitore?',
        a: "Es gibt keinen gut belegten Grund, warum Panels tragbarer Monitore bei gleicher Auflösung und gleichem Paneltyp inhärent höhere Fehlerraten hätten als Desktop-Panels - der Fertigungsprozess des LCD-Panels selbst ist weitgehend ähnlich. Was sich unterscheidet, ist das dünnere, mobilere Gehäuse, das die Haltbarkeit bei der Handhabung beeinflusst, nicht die Fertigung auf Pixelebene.",
      },
    ],
  },
  touchscreen_monitor: {
    panelTech:
      "Touchscreen-Monitore fügen eine kapazitive (oder, seltener, resistive) Touch-Schicht auf einem Standard-IPS-, VA- oder TN-Displaypanel hinzu - Touch-Technologie und die zugrunde liegende Paneltechnologie sind getrennte Systeme, und die Touch-Funktionalität ändert nichts daran, welcher Paneltyp das tatsächliche Bild liefert.",
    commonIssues:
      "Da Touchscreen-Monitore zwei getrennte Systeme haben (das Displaypanel und die Touch-Auflage), lohnt es sich, sie unabhängig voneinander zu prüfen: Ein toter oder hängender Pixel ist ein Displaypanel-Problem, während Touch-Fehlkalibrierung, tote Zonen oder nicht reagierende Touch-Bereiche ein separates Touch-Schicht-Problem sind, das ein Farbwechsel-Displaytest weder aufdeckt noch beeinflusst.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Prüft ein Test auf tote Pixel auch die Touch-Genauigkeit?',
        a: "Nein. Der Vollbild-Farbwechseltest prüft nur das Displaypanel auf tote, hängende oder heiße Pixel - er testet nicht die Touch-Auflage. Touch-Genauigkeit und -Reaktion müssen separat geprüft werden, in der Regel über das Touch-Kalibrierungswerkzeug Ihres Betriebssystems oder ein dediziertes Touch-Testtool.",
      },
      {
        q: 'Kann die Touch-Auflage sichtbare Punkte verursachen, die wie tote Pixel aussehen?',
        a: "Bei normaler Nutzung nicht - die Touch-Auflage ist transparent und sollte von sich aus keine sichtbaren Artefakte einbringen. Wenn Sie während des Farbtests einen festen Farbpunkt sehen, ist dies fast sicher ein Displaypanel-Problem (toter oder hängender Pixel) und nichts, das mit der Touch-Schicht zusammenhängt.",
      },
      {
        q: 'Unterscheidet sich die Paneltechnologie in einem Touchscreen-Monitor von einem Monitor ohne Touch?',
        a: "Nicht grundsätzlich - Touchscreen-Monitore nutzen dasselbe Spektrum an Paneltechnologien (IPS, VA, TN) wie Nicht-Touch-Monitore, wobei der Touch-Sensor als zusätzliche Schicht darüber angebracht ist. Der konkrete Paneltyp variiert je nach Modell, genau wie bei einem Monitor ohne Touch.",
      },
    ],
  },
  curved_monitor: {
    panelTech:
      'Gebogene Monitore basieren überwiegend auf VA-Panels, da sich VAs Fertigungsprozess leichter für die Krümmung eignet als IPS, auch wenn eine kleinere Zahl gebogener IPS-Monitore zu einem in der Regel höheren Preis existiert. Der Krümmungsradius (in Millimetern angegeben, etwa 1800R oder 1000R) variiert je nach Modell und bestimmt unabhängig von der Paneltechnologie, wie eng die Krümmung ist.',
    commonIssues:
      "Bei VA-basierten gebogenen Monitoren gilt der übliche VA-Kompromiss: tieferer nativer Kontrast gegenüber mehr Potenzial für Schlieren in dunklen Szenen und Farbverschiebung bei Betrachtungswinkel. Die Krümmung selbst kann zudem dazu führen, dass Helligkeit oder Farbe an den Rändern gegenüber der Mitte bei außeraxialer Betrachtung leicht anders erscheinen - ein allmählicher, krümmungsbedingter Effekt, der sich von einem einzelnen festen toten oder hängenden Pixel unterscheidet.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was bedeutet die R-Zahl (wie 1800R) bei einem gebogenen Monitor?',
        a: "Die R-Zahl beschreibt den Krümmungsradius in Millimetern - ein Monitor mit 1800R hätte, zu einem vollen Kreis erweitert, einen Radius von 1800 mm. Niedrigere Zahlen bedeuten eine engere Krümmung. Es ist eine physische Krümmungsspezifikation und sagt nichts über die Paneltechnologie aus und beeinflusst nicht, wie der Test auf tote Pixel funktioniert.",
      },
      {
        q: 'Haben gebogene Monitore eher tote Pixel als flache Monitore?',
        a: "Es gibt keinen gut belegten Grund, warum das Biegen eines Panels während der Fertigung inhärent die Rate einzelner Pixelfehler erhöhen würde - der Fertigungsprozess auf Pixelebene ist unabhängig von der endgültigen Krümmung ähnlich. Was die Krümmung beeinflusst, ist die wahrgenommene Gleichmäßigkeit zwischen Rand und Mitte, eine von einzelnen toten oder hängenden Pixeln getrennte Überlegung.",
      },
      {
        q: 'Sollte ich in einem bestimmten Abstand sitzen, um einen gebogenen Monitor richtig zu testen?',
        a: "Ja - gebogene Monitore sind für einen bestimmten Betrachtungsabstand konzipiert, bei dem die Krümmung ungefähr dem natürlichen Sichtfeld Ihres Auges entspricht. Ein Test aus zu großer Nähe, zu großer Entfernung oder einem steilen Winkel kann normale krümmungsbedingte Helligkeitsschwankungen ausgeprägter erscheinen lassen, als sie in der vorgesehenen Betrachtungsposition wären.",
      },
    ],
  },
  ultrawide_monitor: {
    panelTech:
      'Ultrawide-Monitore (Bildformate 21:9 und breiter, üblicherweise 34-49 Zoll) basieren überwiegend auf IPS-Panels, gewählt für konsistentere Farbe über das breitere Sichtfeld, als VA in der Regel bietet, wobei auch gebogene VA-Ultrawides existieren, besonders bei gaming-orientierten Modellen.',
    commonIssues:
      "Da Ultrawide-Panels physisch breiter sind als Standard-16:9-Monitore, gibt es mehr Panelfläche, über die Fertigungstoleranzen variieren können - es lohnt sich, Helligkeit und Farbgleichmäßigkeit über die gesamte Breite mit einem Vollbild-Grau- oder Weißtest zu prüfen, nicht nur in der Mitte, zusätzlich zur Prüfung auf einzelne tote oder hängende Pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wird ein 49-Zoll-Super-Ultrawide anders getestet als ein 34-Zoll-Ultrawide?',
        a: "Das Testverfahren ist unabhängig von der Größe gleich - durchlaufen Sie Vollfarben im Vollbild und scannen Sie nach Pixeln, die nicht zum Hintergrund passen. Bei einem größeren Super-Ultrawide lohnt es sich, mehr Zeit zu nehmen und physisch über die gesamte Breite zu scannen, da man einen Defekt an den äußeren Rändern eines sehr breiten Bildschirms leichter übersieht.",
      },
      {
        q: 'Braucht ein Ultrawide-Monitor eine bestimmte Grafikkarte für eine korrekte Anzeige?',
        a: "Ultrawide-Auflösungen (wie 3440x1440 oder 5120x1440) erfordern für anspruchsvolle Anwendungen wie Spiele mehr Grafikleistung, aber der Test auf tote Pixel selbst ist nur Vollbild-Wiedergabe von Vollfarben, eine minimale Last für jede moderne GPU unabhängig vom Bildformat oder der Auflösung des Monitors.",
      },
      {
        q: 'Warum sieht mein Ultrawide-Monitor an den äußersten linken und rechten Rändern etwas anders in der Helligkeit aus?',
        a: "Leichte Helligkeitsschwankungen über ein breites Panel, besonders zu den Rändern hin, können bei jedem großformatigen Display durch normale Hintergrundbeleuchtungs- und Fertigungstoleranzen auftreten. Es handelt sich um einen allmählichen, flächendeckenden Effekt - anders als ein toter oder hängender Pixel, ein einzelner fester Punkt unabhängig von seiner Position auf dem Panel.",
      },
    ],
  },
  gaming_144hz: {
    panelTech:
      '144Hz liegt im Einstiegs- bis Mittelsegment der Gaming-Bildwiederholraten und ist je nach konkretem Monitor mit TN-, VA- und IPS-Paneltypen erhältlich - anders als 240Hz oder 360Hz, die aus Gründen der Reaktionszeit stärker zu TN oder Fast IPS tendieren, bieten 144Hz-Monitore die breiteste Auswahl an Paneltypen für ein gegebenes Budget.',
    commonIssues:
      "Da 144Hz-Monitore alle drei wichtigen Paneltypen abdecken, variiert das zu Prüfende je nach konkretem Panel: TN-Modelle zeigen eine ausgeprägtere Farbverschiebung bei Betrachtungswinkel, VA-Modelle können Schlieren in dunklen Szenen bei schneller Bewegung zeigen, und IPS-Modelle zeigen leichtes Eckenglühen auf dunklem Bildschirm in einem schwach beleuchteten Raum - keines davon ist dasselbe wie ein toter oder hängender Pixel, der ein fester Defekt unabhängig von Paneltyp oder Inhalt ist.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beeinflusst die Bildwiederholrate, wie sichtbar tote Pixel sind?',
        a: "Nein. Ein toter oder hängender Pixel ist ein statischer Hardwaredefekt, unabhängig davon gleich sichtbar, ob der Monitor mit 60Hz oder 144Hz läuft - die Bildwiederholrate beeinflusst, wie flüssig Bewegung angezeigt wird, nicht ob einzelne Pixel korrekt funktionieren.",
      },
      {
        q: 'Sollte ich mit 144Hz oder einer niedrigeren Bildwiederholrate testen?',
        a: "Das spielt für den Test auf tote Pixel keine besondere Rolle, da der Test statische Vollfarben statt Bewegung nutzt - testen Sie mit der Bildwiederholrate, auf die Ihr Monitor aktuell eingestellt ist. Die Bildwiederholrate ist wichtiger für die Beurteilung der Bewegungsschärfe, eine von der Prüfung auf Pixelfehler getrennte Überlegung.",
      },
      {
        q: 'Welchen Paneltyp sollte ich bei einem 144Hz-Monitor vor dem Kauf prüfen?',
        a: "144Hz ist bei TN- (schnellste Reaktionszeit, größter Farb-/Betrachtungswinkelkompromiss), VA- (tieferer Kontrast, etwas Bewegungsschlieren) und IPS-Panels (beste Farbe und Betrachtungswinkel, etwas langsamere Reaktion als TN) verfügbar - was zu Ihnen passt, hängt davon ab, ob Sie Farbgenauigkeit, Kontrast oder die schnellstmögliche Reaktionszeit priorisieren.",
      },
    ],
  },
  gaming_240hz: {
    panelTech:
      "240Hz-Gaming-Monitore setzten historisch wegen der schnellen Reaktionszeiten stark auf TN-Panels, doch Fast-IPS-Panels sind in diesem Bildwiederholratensegment zunehmend verbreitet, da sich die Paneltechnologie verbessert hat und dabei bei weiterhin erreichten 240Hz bessere Farbgenauigkeit und Betrachtungswinkel als TN bietet. VA-Panels bei 240Hz sind seltener als bei 144Hz.",
    commonIssues:
      'Bei TN-basierten 240Hz-Modellen erwarten Sie eine ausgeprägtere Farb- und Kontrastverschiebung bei außermittigen Betrachtungswinkeln - eine normale TN-Eigenschaft, kein Defekt. Bei Fast-IPS-240Hz-Modellen gilt das übliche leichte Eckenglühen auf dunklem Bildschirm in einem schwach beleuchteten Raum. Ein Test bei geradem Blick auf den Bildschirm (statt aus einem Winkel) liefert bei beiden Paneltypen das zuverlässigste Ergebnis für echte Pixelfehler.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Sind bei einem 240Hz-Monitor Paneldefekte wahrscheinlicher als bei einem 144Hz-Monitor?',
        a: "Es gibt keinen gut belegten Zusammenhang zwischen Bildwiederholratenfähigkeit und der Rate toter Pixeldefekte - beides sind getrennte Aspekte von Panelfertigung und -design. Ein 240Hz-Panel ist bei vergleichbarer Verarbeitungsqualität nicht inhärent anfälliger oder unanfälliger für einzelne Pixelfehler als ein 144Hz-Panel.",
      },
      {
        q: 'Warum sieht TN-Farbe bei manchen 240Hz-Monitoren schlechter aus als IPS?',
        a: "TN-Panels boten historisch die schnellsten Reaktionszeiten, weshalb viele 240Hz-Monitore TN nutzten, aber TN-Technologie bringt inhärent mehr Farb- und Betrachtungswinkelkompromisse mit sich als IPS. Dies ist ein Kompromiss zwischen Paneltypen, kein Defekt, und neuere Fast-IPS-240Hz-Modelle schließen einen Großteil dieser Lücke.",
      },
      {
        q: 'Braucht ein 240Hz-Monitor spezielle Einstellungen, um auf tote Pixel getestet zu werden?',
        a: "Es sind keine besonderen Einstellungen nötig - der Vollbild-Farbtest funktioniert unabhängig davon, ob hohe Bildwiederholrate, G-Sync/FreeSync oder Overdrive-Einstellungen aktiviert sind, da er statisches Pixelverhalten bei Vollfarben prüft, nicht die Bewegungsleistung.",
      },
    ],
  },
  gaming_360hz: {
    panelTech:
      '360Hz liegt am extremen Ende der Verbraucher-Gaming-Bildwiederholraten, historisch dominiert von TN-Panels und in jüngerer Zeit von Fast-IPS-Panels, die speziell dafür entwickelt wurden, diese Reaktionszeit-Obergrenze zu erreichen; OLED-Optionen bei 360Hz waren branchenweit eingeschränkter, aufgrund unterschiedlicher technischer Kompromisse bei sehr hohen Bildwiederholraten, auch wenn sich dies mit fortschreitender Paneltechnologie ändert.',
    commonIssues:
      "Bei TN-basierten 360Hz-Modellen erwarten Sie eine ausgeprägtere Farb- und Betrachtungswinkelverschiebung als bei IPS - eine normale Eigenschaft des speziell für die Reaktionszeit gewählten Paneltyps. Bei Fast-IPS-360Hz-Modellen gilt das übliche leichte Eckenglühen auf dunklem Bildschirm. Da 360Hz-Monitore eine schmale, spezialisierte Produktkategorie sind, liefert ein Test bei geradem Blick statt aus einem Winkel das klarste Ergebnis für echte Pixelfehler.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wer braucht überhaupt einen 360Hz-Monitor, und beeinflusst das den Test?',
        a: "360Hz-Monitore richten sich gezielt an kompetitive E-Sport-Spieler in schnellen Titeln, bei denen die Minimierung der Latenz von Eingabe bis Bildschirmanzeige wichtig ist - der beabsichtigte Einsatzzweck ändert nichts daran, wie der Test auf tote Pixel funktioniert, der derselbe Vollbild-Farbwechselprozess unabhängig von der Bildwiederholraten-Obergrenze des Monitors ist.",
      },
      {
        q: 'Sind 360Hz-Monitore teurer im Austausch, wenn sie tote Pixel haben?',
        a: "360Hz-Monitore sind aufgrund der erforderlichen spezialisierten Paneltechnik in der Regel im Preis höher angesiedelt als 144Hz- oder 240Hz-Modelle, was bei der Entscheidung zwischen einer Garantieersatzlieferung und einer Reparatur wissenswert ist, doch die Pixelfehler-Politik selbst wird vom Hersteller je Modell festgelegt, nicht speziell durch die Bildwiederholrate.",
      },
      {
        q: 'Erfordert das Testen eines 360Hz-Monitors auf tote Pixel spezielle Hardware?',
        a: "Nein - der browserbasierte Vollbild-Farbtest funktioniert auf jedem Monitor und jeder Grafikkonfiguration, die eine Webseite im Vollbildmodus anzeigen kann. Sie müssen den Monitor nicht mit seinen vollen 360Hz betreiben, um auf tote oder hängende Pixel zu prüfen, da der Test nicht von Bewegung oder hohen Bildraten abhängt.",
      },
    ],
  },
  professional_monitor: {
    panelTech:
      "Professionelle Monitore nutzen überwiegend IPS-Panels wegen ihrer konsistenten Farbe und breiten Betrachtungswinkel, wobei eine wachsende Zahl hochwertiger Optionen für tieferen Kontrast auf OLED setzt, bei dedizierten professionellen Linien wie EIZO ColorEdge, NEC SpectraView, BenQ SW/PD, ASUS ProArt, Dell UltraSharp und ViewSonic ColorPro - diese Linien konkurrieren vor allem bei Kalibrierungsgenauigkeit und Konsistenz, nicht nur bei der Paneltechnologie.",
    commonIssues:
      "Da professionelle Monitore mit Farbgenauigkeit beworben werden, ist die relevantere Qualitätsprüfung über einzelne tote oder hängende Pixel hinaus Helligkeit und Farbgleichmäßigkeit über den gesamten Bildschirm mit einem Vollbild-Grau- oder Weißtest - professionelle Panels unterliegen in der Regel strengeren Gleichmäßigkeitstoleranzen als günstige Verbrauchermonitore, auch wenn dies je nach konkretem Modell und Hersteller variiert.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Was ist der Unterschied zwischen einem professionellen Monitor und einem gewöhnlichen Bürmonitor?',
        a: "Professionelle Monitore sind in der Regel werksseitig auf Farbgenauigkeit kalibriert (oft mit einem Kalibrierungsbericht pro Gerät), decken einen breiteren Farbraum ab (wie AdobeRGB oder DCI-P3) und unterliegen strengeren Gleichmäßigkeitstoleranzen als allgemeine Bürmonitore, die Kosten und Grundfunktionalität vor kalibrierter Farbgenauigkeit priorisieren.",
      },
      {
        q: 'Bedeutet Werkskalibrierung, dass ein professioneller Monitor keine toten Pixel hat?',
        a: "Nein. Werkskalibrierung betrifft Farbgenauigkeit und -konsistenz über das Panel hinweg - das ist ein eigener Prozess, getrennt von der einzelnen Pixelhardware, die unabhängig davon, wie gut die allgemeine Farbausgabe kalibriert ist, weiterhin Fertigungsdefekte aufweisen kann. Es lohnt sich weiterhin, bei jedem neu gekauften professionellen Monitor einen Test auf tote Pixel durchzuführen.",
      },
      {
        q: 'Wie unterscheidet sich die Pixelfehler-Politik eines professionellen Monitors üblicherweise von der eines Verbrauchermonitors?',
        a: "Manche professionellen Monitorlinien werden mit strengeren Pixelfehler-Richtlinien beworben als allgemeine Verbraucherlinien desselben Herstellers, was den höheren Preis und den farbkritischen Einsatzzweck widerspiegelt, doch das ist nicht universell - prüfen Sie die konkrete Garantiedokumentation für Ihr Modell, statt anzunehmen, dass eine strengere Politik allein deshalb gilt, weil es als professionell beworben wird.",
      },
    ],
  },
  photo_editing_monitor: {
    panelTech:
      'Für die Fotobearbeitung beworbene Monitore priorisieren breite Farbraumabdeckung (üblicherweise AdobeRGB und sRGB, manchmal DCI-P3) auf IPS-Panels mit Hardwarekalibrierung, bei Linien wie BenQ SW, ASUS ProArt, Dell UltraSharp, EIZO ColorEdge und ViewSonic ColorPro - die Paneltechnologie selbst ist in der Regel dieselbe IPS-Familie, die auch anderswo verwendet wird, wobei Farbraumabdeckung und Kalibrierungsgenauigkeit das Unterscheidungsmerkmal sind.',
    commonIssues:
      "Für die Fotobearbeitung speziell sind Helligkeit und Farbgleichmäßigkeit über den gesamten Bildschirm ebenso wichtig wie einzelne tote oder hängende Pixel, da ungleichmäßige Helligkeit sichtbar beeinflussen kann, wie Sie Belichtung und Farbbalance beim Bearbeiten beurteilen. Testen Sie mit einem Vollbild-Grau- oder Weißtest, um die allgemeine Gleichmäßigkeit zusätzlich zum Standard-Farbwechseltest auf tote Pixel zu prüfen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Welche Farbraumabdeckung sollte ich bei einem Fotobearbeitungsmonitor suchen?',
        a: 'Die AdobeRGB-Abdeckung (oft mit 95-99% bei auf Fotobearbeitung ausgerichteten Monitoren angegeben) ist die am häufigsten genannte Spezifikation für Fotografiearbeit, da viele Fotobearbeitungs-Workflows auf diesem Farbraum aufbauen, obwohl sRGB- und DCI-P3-Abdeckung je nach Ihrem konkreten Ausgabeformat ebenfalls relevant sind. Prüfen Sie die konkreten für Ihr Modell angegebenen Farbraumprozentsätze, statt sich allein auf das Label "Fotobearbeitung" zu verlassen.',
      },
      {
        q: 'Macht ein Monitor mit breitem Farbraum den Test auf tote Pixel anders?',
        a: "Nein, das Testverfahren ist unabhängig von der Farbraumabdeckung gleich - durchlaufen Sie Vollfarben im Vollbild und suchen Sie nach Pixeln, die nicht zum Hintergrund passen. Die Farbraumabdeckung beeinflusst, wie genau Farben allgemein wiedergegeben werden, nicht wie einzelne Pixelfehler erscheinen.",
      },
      {
        q: 'Sollte ich meinen Fotobearbeitungsmonitor vor oder nach der Prüfung auf tote Pixel kalibrieren?',
        a: "Beide Reihenfolgen funktionieren für die Prüfung auf tote Pixel selbst, da sie nicht vom Kalibrierungszustand abhängt, doch es ist im Allgemeinen effizienter, zuerst auf tote oder hängende Pixel zu prüfen - wenn Sie einen Defekt finden, der schwer genug für eine Rücksendung ist, macht es wenig Sinn, einen Monitor zu kalibrieren, den Sie eventuell zurückschicken.",
      },
    ],
  },
  video_editing_monitor: {
    panelTech:
      'Für Videobearbeitung und Farbkorrektur beworbene Monitore legen Wert auf breite Farbraumabdeckung (insbesondere DCI-P3, angesichts seiner Nutzung in der Filmproduktion) und HDR-Unterstützung auf IPS- oder OLED-Panels, wobei sich das oberste Segment dedizierten Broadcast-Referenzmonitoren annähert, die in professionellen Postproduktionsanlagen verwendet werden, sie aber in der Regel nicht erreicht.',
    commonIssues:
      "Für Farbkorrekturarbeit lohnt es sich, Helligkeit und Farbgleichmäßigkeit über den gesamten Bildschirm zusätzlich zu einzelnen toten oder hängenden Pixeln zu prüfen, da ungleichmäßige Helligkeit sichtbar beeinflussen kann, wie Schatten und Lichter beim Korrigieren beurteilt werden. Bei HDR-fähigen Modellen ist zudem erwähnenswert, dass die Spitzenhelligkeits-HDR-Angabe eines Monitors keinen Einfluss darauf hat, wie ein toter oder hängender Pixel während eines standardmäßigen SDR-Vollbild-Farbtests erscheint.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Ist ein Videobearbeitungsmonitor dasselbe wie ein Broadcast-Referenzmonitor?',
        a: "Im Allgemeinen nicht - Verbraucher- und Prosumer-Videobearbeitungsmonitore (selbst farbgenaue) stehen in der Regel eine Stufe unter dedizierten Broadcast-Referenzmonitoren, die in der professionellen Postproduktion verwendet werden und deutlich höhere Preise sowie noch strengere Kalibrierungs- und Gleichmäßigkeitsgarantien mit sich bringen. Videobearbeitungsmonitore versuchen, diese Genauigkeit zu einem zugänglicheren Preis anzunähern.",
      },
      {
        q: 'Ändert HDR-Unterstützung, wie ich auf tote Pixel testen sollte?',
        a: "Nein - führen Sie den standardmäßigen Vollbild-Farbwechseltest im normalen (SDR-)Modus durch. Der HDR-Modus ändert, wie Helligkeit und Kontrast speziell für HDR-Inhalte dargestellt werden, aber ein toter oder hängender Pixel ist ein Hardwaredefekt, der unabhängig davon, ob HDR aktiv ist, gleich erscheint.",
      },
      {
        q: 'Welchen Farbraum sollte ich bei einem Videobearbeitungsmonitor auf Abdeckung prüfen?',
        a: "Die DCI-P3-Abdeckung ist die am häufigsten genannte Spezifikation für Video-/Filmarbeit, da sie der im digitalen Kino verwendete Standard ist, obwohl Rec.709 (Broadcast/Webvideo) und Rec.2020 (manche HDR-Workflows) je nach Ihrem konkreten Lieferformat ebenfalls relevant sind - prüfen Sie, welche(n) Farbraum/Farbräume Ihr angestrebtes Ausgabeformat tatsächlich erfordert.",
      },
    ],
  },
};
