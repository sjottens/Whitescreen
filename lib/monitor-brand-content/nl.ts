// lib/monitor-brand-content/nl.ts - Dutch content for /monitor-test/[brand]
// pages. Faithful translation of en.ts, not new claims - see the note in
// index.ts for the factual-accuracy caveat that applies to every locale.
// Brand names, model numbers, and technical/panel terms (IPS, VA, TN,
// OLED, QD-OLED, Nano IPS, Mini-LED, Delta E, ISO 13406-2, USB-C, DCI-P3,
// AdobeRGB, sRGB, HDR, G-Sync, FreeSync, etc.) are kept in their original
// form, as is standard in Dutch tech writing.

import type { MonitorBrandContent } from './index';

const GENERIC_WARRANTY =
  'Fabrikanten classificeren pixeldefecten doorgaans volgens conventies die zijn afgeleid van de oude ISO 13406-2-norm, die pixelfout-"klassen" definieert - Klasse I staat geen enkel defect toe, terwijl Klasse II en III een klein aantal heldere, donkere of vastgelopen subpixels toestaan. Slechts weinig consumentenmonitoren worden verkocht onder een Klasse I-beleid (nul defecten); de meeste vallen onder een beleid vergelijkbaar met Klasse II, dat een handvol defecten toestaat voordat een vervanging wordt aangeboden. Het exacte aantal, en of dit volledige pixels of subpixels betreft, verschilt per fabrikant, productlijn en regio, en kan tussen modellen veranderen - controleer de specifieke garantievoorwaarden van uw monitor in plaats van een getal aan te nemen.';

export const MONITOR_BRAND_CONTENT_NL: Record<string, MonitorBrandContent> = {
  // ---------------------------------------------------------------------
  // Kernmerken
  // ---------------------------------------------------------------------
  asus: {
    panelTech:
      "ASUS verkoopt monitoren met bijna elk paneeltype - budget- en kantoormodellen gebruiken vaak VA- of instap-IPS-panelen, terwijl de ROG- en TUF Gaming-lijnen leunen op Fast IPS voor kortere reactietijden, en de ProArt-lijn fabrieksgekalibreerde IPS-panelen gebruikt gericht op kleurnauwkeurig werk. Een klein aantal high-end ROG-modellen gebruikt QD-OLED-panelen. Omdat het ASUS-label zo'n breed scala bestrijkt, is de paneeltechnologie van uw specifieke model belangrijker dan de merknaam bij het beoordelen van wat 'normale' kleur en contrast eruit zouden moeten zien.",
    commonIssues:
      "Omdat ASUS budget- tot topmodellen omvat, verschillen de te controleren beeldkwaliteitsproblemen per segment: instap-VA-panelen zijn gevoeliger voor zichtbaar 'smeren' van zwart bij snelle beweging, terwijl IPS-gebaseerde ROG/ProArt-modellen vaker lichte IPS-glow of backlight bleed laten zien bij de randen in een donkere kamer. Meldingen van deze problemen variëren per specifiek model en productiepartij, dus beschouw dit als iets om op uw exemplaar te controleren, niet als een verwacht defect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Gebruikt de ASUS-monitorlijn overal hetzelfde paneel?',
        a: "Nee. ASUS gebruikt panelen op basis van VA, IPS, TN, Fast IPS en (bij enkele ROG-modellen) QD-OLED, afhankelijk van de serie en prijsklasse. Controleer uw exacte modelnummer - het gebruikte paneeltype bepaalt wat normale kleurverschuiving bij kijkhoek of zwartniveau-gedrag is versus een defect.",
      },
      {
        q: 'Is IPS-glow op een ASUS-monitor hetzelfde als een dode pixel?',
        a: "Nee. IPS-glow is een vage, diffuse oplichting bij de hoeken van een IPS-paneel wanneer bekeken in een donkere kamer, veroorzaakt door hoe IPS-panelen backlight en kijkhoek verwerken - het verschuift of verandert van intensiteit als u de kijkhoek wijzigt. Een dode of vastgelopen pixel is een enkel vast punt dat niet beweegt en dezelfde kleur behoudt, ongeacht wat erachter wordt weergegeven.",
      },
      {
        q: 'Waar controleer ik het paneeltype van mijn specifieke ASUS-model vóór het testen?',
        a: "ASUS vermeldt het paneeltype (IPS, VA, TN, Fast IPS, OLED) op het officiële specificatieblad van elk product op asus.com, meestal onder 'Paneel' of 'Display'-specificaties. Dit vooraf weten helpt u te beoordelen of iets wat u ziet een normaal kenmerk van dat paneeltype is of nader onderzoek verdient.",
      },
    ],
  },
  lg: {
    panelTech:
      'LG is een van de weinige bedrijven die zowel beeldschermpanelen produceert (via LG Display) als complete monitoren verkoopt, waardoor het eigen assortiment sterk leunt op Nano IPS- en standaard IPS-panelen, met OLED-panelen in de hogere UltraGear-gamingmodellen en de UltraFine-professionele lijn. Deze verticale integratie is een echt onderscheidend kenmerk ten opzichte van merken die panelen alleen van derden betrekken, al garandeert dit op zich geen defectvrij exemplaar.',
    commonIssues:
      "Bij LG's IPS-gebaseerde monitoren is het meest gemelde cosmetische probleem in gebruikersforums ongelijkmatige backlight bleed of wolkvorming bij de schermranden, wat opvallender is op donkere achtergronden en per exemplaar verschilt in plaats van een defect van de hele lijn te zijn. Bij LG's OLED-gamingmonitoren elimineert de paneeltechnologie zelf de backlight-bleed-kwestie volledig, maar introduceert het andere langetermijnoverwegingen zoals inbrand-risico bij statische beelden, wat een eenmalige dodepixeltest niet kan detecteren.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beïnvloedt het feit dat LG zijn eigen panelen produceert het aantal dode pixels?',
        a: "LG Display produceert panelen voor LG's eigen monitoren én voor veel andere merken, maar het zelf produceren van panelen elimineert geen normale productievariatie - defecte exemplaren komen nog steeds branchebreed voor. Het betekent vooral dat LG paneeltypen (zoals Nano IPS of zijn OLED-varianten) kan aanbieden die minder breed beschikbaar zijn bij merken die alleen panelen van derden betrekken.",
      },
      {
        q: 'Hoe verschilt het testen van een LG OLED-monitor op pixeldefecten van een IPS-monitor?',
        a: "De kleurwisseltest werkt op beide dezelfde manier, maar OLED-panelen produceren echt zwart door pixels volledig uit te schakelen, waardoor een 'dode' pixel (een die uitgeschakeld blijft) moeilijker te onderscheiden kan zijn van normale zwarte content - testen op verzadigde kleuren zoals rood, groen en blauw is veelzeggender dan testen op zwart bij OLED-panelen.",
      },
      {
        q: 'Wat betekent "Nano IPS" voor kleurtesten op een LG-monitor?',
        a: "Nano IPS is LG's marketingnaam voor een IPS-variant met een nanodeeltjeslaag die lichtgolflengten filtert, gericht op bredere kleurruimtedekking in plaats van het veranderen van hoe dode of vastgelopen pixels verschijnen. Voor pixeldefecttests gedraagt het zich hetzelfde als elk ander IPS-paneel - defecten verschijnen nog steeds als statische gekleurde stippen die niet met de achtergrond meeveranderen.",
      },
    ],
  },
  samsung: {
    panelTech:
      "Samsungs eigen displaydivisie produceert op grote schaal VA-panelen, en de Odyssey-gaminglijn is vrijwel volledig gebouwd op VA-technologie (inclusief gebogen 1000R VA-panelen), met een kleiner aantal flagship Odyssey OLED-modellen die Samsungs eigen QD-OLED-panelen gebruiken. Samsungs algemene en zakelijke monitoren combineren VA en IPS afhankelijk van de serie, dus controleer het paneeltype bij het specifieke model in plaats van het aan te nemen.",
    commonIssues:
      "VA-panelen, die Samsungs gaminglijn domineren, staan branchebreed bekend om een ander type gebrek dan IPS: in plaats van hoekgloed zijn VA-panelen gevoeliger voor zichtbare 'zwartverlies' of 'smearing' in donkere scènes met snelle beweging, en kunnen meer uitgesproken kleur-/contrastverschuiving vertonen bij scherpe kijkhoeken. Dit zijn inherente VA-paneelkenmerken en geen defecten, maar het is de moeite waard ze te onderscheiden van een echte dode of vastgelopen pixel tijdens het testen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Waarom ziet mijn gebogen Samsung-monitor er bij de randen net iets anders uit qua kleur?',
        a: "Dit is een normaal kenmerk van gebogen VA-panelen en geen defect - kijkhoek beïnvloedt kleur en contrast van VA-panelen sterker dan bij IPS, en de randen van een gebogen scherm staan onder een andere hoek ten opzichte van uw ogen dan het midden. Dit staat los van dode of vastgelopen pixels, die ongeacht kijkhoek dezelfde kleur behouden.",
      },
      {
        q: 'Hebben Samsung Odyssey OLED-monitoren een andere dodepixeltest nodig dan VA-modellen?',
        a: 'Dezelfde kleurwisselmethode werkt voor beide, maar bij de OLED-modellen helpt het om vooral op verzadigde kleuren te letten in plaats van zwarte schermen, omdat OLED zwart produceert door pixels uit te schakelen - een vastgelopen uitgeschakelde pixel gaat op in zwarte content en is veel beter zichtbaar tegen rood, groen, blauw of wit.',
      },
      {
        q: 'Is een lichte vlek op mijn Samsung-monitor een dode pixel of een backlight-probleem?',
        a: "Een enkele vaste heldere stip die dezelfde kleur behoudt ongeacht wat er op het scherm staat, is meestal een vastgelopen (niet dode) pixel. Een breder helderheidsvlak dat verschuift bij verandering van kijkhoek of vooral zichtbaar is op een zwart scherm, is eerder backlight bleed of wolkvorming, wat een apart probleem is van individuele pixeldefecten.",
      },
    ],
  },
  dell: {
    panelTech:
      "Dells monitorassortiment splitst zich vrij duidelijk per serie: de UltraSharp-lijn (U-serie) gebruikt IPS- of IPS Black-panelen met fabriekskleurkalibratie gericht op kantoor- en creatief werk, de Alienware-merkgamingmonitoren (verkocht onder de Dell-bedrijfsparaplu) gebruiken IPS- of QD-OLED-panelen, en Dells eenvoudigere P-serie en E-serie kantoormonitoren gebruiken standaard IPS. Er bestaat geen enkel 'Dell-paneel' - de serienaam is de betere indicator van welke technologie u test.",
    commonIssues:
      "Bij Dells UltraSharp-lijn is de meest gemelde cosmetische klacht in gebruikersrapporten lichte backlight bleed of IPS-glow zichtbaar op een zwart scherm in een donkere kamer, wat een bekend kenmerk van IPS-panelen in het algemeen is en niet specifiek voor Dell. Bij de Alienware QD-OLED-gamingmodellen verschuift de zorg van backlight bleed (dat niet van toepassing is op OLED) naar bijna-zwart kleurbanding bij sommige content, wat een ander fenomeen is dan een dode of vastgelopen pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is het verschil tussen Dells U-serie, P-serie en Alienware-monitoren voor testdoeleinden?',
        a: "De kleurwisseltest zelf werkt bij alle drie identiek, maar wat telt als een 'normaal' cosmetisch kenmerk verschilt: U-serie en Alienware IPS-modellen kunnen lichte IPS-glow bij de hoeken vertonen op een donker scherm, terwijl P-serie kantoormonitoren (vaak standaard IPS of VA) vaker eenvoudige backlight bleed vertonen. Geen van deze is hetzelfde als een dode of vastgelopen pixel.",
      },
      {
        q: 'Kalibreert Dell elke UltraSharp-monitor in de fabriek?',
        a: "Dell adverteert fabriekskalibratie (inclusief een kleurnauwkeurigheidsrapport per exemplaar bij sommige UltraSharp-modellen) als een kenmerk van die specifieke lijn, niet als iets dat uniform wordt toegepast op alle Dell-monitoren. Controleer de productpagina van uw model of de meegeleverde documentatie om te bevestigen of fabriekskalibratiegegevens bij uw exemplaar zijn geleverd.",
      },
      {
        q: 'Hoe test ik een Alienware QD-OLED-monitor anders dan een IPS Dell-monitor?',
        a: 'Doorloop dezelfde verzadigde kleuren, maar let extra op hoe het scherm bijna-zwarte content en donkere grijstinten weergeeft, omdat QD-OLED-panelen dit anders verwerken dan IPS - een pixel die op een vaste kleur vastzit, is op een OLED-paneel het makkelijkst te zien tegen rood, groen of blauw in plaats van zwart.',
      },
    ],
  },
  benq: {
    panelTech:
      "BenQ's assortiment is georganiseerd rond vrij duidelijke gebruiksscenario's: de SW-serie (fotografie/design) gebruikt IPS-panelen met hardwarekalibratie en brede kleurruimtedekking gevalideerd volgens Pantone- en Calman-standaarden, de PD-serie richt zich op algemeen professioneel/design-gebruik met vergelijkbare IPS-kalibratie, en de submerken Mobiuz en Zowie bestrijken respectievelijk consumenten- en esportsgaming, waarbij Zowie vooral matte TN- of IPS-panelen met lage inputlag verkiest boven kleurnauwkeurigheid, afgestemd op competitief spel.",
    commonIssues:
      "BenQ adverteert verschillende professionele (SW/PD) en gamingmonitoren (Mobiuz) met flikkervrije backlights en modi met weinig blauw licht, gericht op het verminderen van oogvermoeidheid tijdens lange sessies - dit zijn displayfuncties, geen preventie van pixeldefecten, en veranderen niets aan hoe een dode of vastgelopen pixel er tijdens het testen uitziet. Bij BenQ's IPS-panelen in het algemeen gelden de gebruikelijke IPS-kenmerken (lichte gloed bij hoeken in donkere kamers) op dezelfde manier als bij elke IPS-gebaseerde monitor.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: "Beïnvloedt BenQ's flikkervrije technologie het testen op dode pixels?",
        a: "Nee. Flikkervrije backlighttechnologie regelt hoe de backlight wordt gedimd (met DC-dimming in plaats van PWM-flikkering) om oogvermoeidheid te verminderen - dit heeft geen effect op individueel pixelgedrag. Een dode of vastgelopen pixel verschijnt op dezelfde manier op een flikkervrije BenQ-monitor als op elke andere.",
      },
      {
        q: 'Wordt een BenQ Zowie-monitor anders getest dan een BenQ SW-monitor?',
        a: "De testprocedure is identiek - doorloop effen kleuren in volledig scherm en zoek naar pixels die niet overeenkomen met de achtergrond. Wat verschilt zijn de paneelprioriteiten: Zowie-modellen geven voorrang aan reactietijd en inputlag boven kleurnauwkeurigheid, dus verwacht niet dezelfde kleurlevendigheid als bij een kleurgekalibreerd SW-paneel.",
      },
      {
        q: 'Welk paneeltype gebruikt de BenQ PD-serie?',
        a: "BenQ's PD-serie (Designer) gebruikt IPS-panelen, doorgaans met bredere kleurruimtedekking dan BenQ's budget-kantoormonitoren, maar zonder het volledige hardwarekalibratiepakket dat BenQ reserveert voor de SW-serie (fotografie) - controleer het specifieke PD-modelnummer voor de exacte paneel- en kleurruimtespecificaties.",
      },
    ],
  },
  alienware: {
    panelTech:
      "Alienwares huidige monitorassortiment draait om twee paneeltechnologieën: IPS-panelen (waaronder Fast IPS voor hogere verversingsfrequenties) bij de betaalbaardere gamingmodellen, en QD-OLED-panelen in de flagship gebogen ultrawide-monitoren (de AW3423DW en AW3423DWF zijn de bekendste voorbeelden), waarmee Alienware een van de eerste pc-monitormerken was die dit op grote schaal op de markt bracht.",
    commonIssues:
      "Bij Alienwares QD-OLED-modellen is de relevante langetermijnoverweging het risico op inbranden bij statische beelden (gemeen aan alle OLED-technologie, niet uniek voor Alienware), wat een eenmalige kleurwisseltest niet kan onthullen - deze kan alleen bevestigen of een pixel op dit moment dood of vastgelopen is, niet toekomstig inbranden voorspellen. Bij Alienwares IPS-gamingmodellen gelden standaard IPS-glow en backlight-bleed-kenmerken op dezelfde manier als bij elk IPS-paneel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Kan een dodepixeltest OLED-inbranden op een Alienware-monitor detecteren?',
        a: "Nee. Een dodepixeltest doorloopt effen kleuren om pixels te onthullen die op dit moment vast blijven staan aan of uit - het kan geen inbranden detecteren, wat een geleidelijke, contentafhankelijke verdonkering van specifieke pixels is door langdurige weergave van statische beelden. Inbranden toont zich doorgaans als vage nabeelden van UI-elementen (zoals een taakbalk of vizier) in plaats van een enkele vaste-kleurstip.",
      },
      {
        q: 'Hebben Alienware QD-OLED-monitoren hetzelfde dodepixelbeleid als hun IPS-modellen?',
        a: "Garantiebeleid voor pixeldefecten kan per productlijn verschillen en wordt door Dell (eigenaar van Alienware) per model vastgesteld, niet uniform toegepast op het hele Alienware-assortiment. Controleer de specifieke garantiedocumentatie voor uw model in plaats van aan te nemen dat het beleid hetzelfde is bij IPS- en QD-OLED-Alienware-monitoren.",
      },
      {
        q: 'Wat is de snelste manier om een gebogen Alienware-ultrawide op pixeldefecten te testen?',
        a: 'Gebruik de volledigschermmodus en doorloop elke effen kleur, met extra aandacht voor de verre randen van het gebogen paneel - op zeer brede gebogen schermen is het makkelijk een defect nabij de buitenranden te missen als u zich alleen op het midden van het scherm richt.',
      },
    ],
  },
  msi: {
    panelTech:
      'MSI\'s gamingmonitorassortiment (MAG- en MPG-serie) is voornamelijk gebouwd op VA- en IPS-panelen, met gebogen VA-modellen gangbaar in het middensegment MAG-assortiment en vlakkere Fast IPS-panelen in MPG-modellen met hogere verversingsfrequentie gericht op competitief spel. MSI is een relatieve nieuwkomer op de monitormarkt vergeleken met merken als LG of Samsung, en betrekt panelen van externe fabrikanten in plaats van deze zelf te produceren.',
    commonIssues:
      "Omdat MSI's gebogen gamingmonitoren leunen op VA-panelen, gelden hier dezelfde VA-kenmerken als bij andere VA-gebaseerde merken: mogelijke smearing bij donkere scènes tijdens snelle beweging en meer merkbare contrastverschuiving bij scherpe kijkhoeken, beide paneelkenmerken en geen defecten. Bij MSI's vlakkere Fast IPS-gamingmodellen is de standaard IPS-glow bij hoeken in donkere kamers het relevantere kenmerk om te onderscheiden van een echt defect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Produceert MSI zijn eigen monitorpanelen?',
        a: 'Nee. MSI betrekt, zoals de meeste gamingmonitormerken behalve LG en Samsung, panelen van externe paneelfabrikanten en bouwt deze in eigen monitorontwerpen met MSI-specifieke elektronica, firmware en rgb-verlichting. De onderliggende paneeltechnologie (VA of IPS) bepaalt kleur- en kijkhoekgedrag, niet het merk MSI zelf.',
      },
      {
        q: 'Hoe weet ik of de rand van mijn gebogen MSI-monitor een kromming-artefact of een pixeldefect is?',
        a: "Een aan de kromming gerelateerde kleur- of helderheidsverschuiving verandert geleidelijk en consistent langs de rand en ziet er hetzelfde uit ongeacht wat er op het scherm staat. Een pixeldefect is een enkel vast punt - het blijft even groot en van dezelfde kleur of u nu de rand of het midden van de kromming bekijkt, en vervaagt niet geleidelijk in de omgeving.",
      },
      {
        q: "Verstoort MSI's Mystic Light rgb-verlichting het testen van pixels?",
        a: "Nee. Mystic Light regelt rgb-verlichting op de behuizing en voet van de monitor, niet het displaypaneel zelf, dus het heeft geen effect op hoe het paneel kleur weergeeft of op de zichtbaarheid van dode/vastgelopen pixels tijdens een kleurwisseltest.",
      },
    ],
  },
  acer: {
    panelTech:
      "Acer bestrijkt een ongewoon breed gamma voor één merk: de Predator-lijn (gaming) gebruikt IPS, VA en bij enkele topmodellen Mini-LED of OLED-panelen, terwijl de budgetvriendelijke Nitro-lijn vooral op VA en instap-IPS leunt, en de algemene kantoor-/consumentenmonitoren een mix van TN, VA en IPS gebruiken afhankelijk van de prijsklasse. De naam Acer alleen zegt niets over het paneeltype - controleer het specifieke model.",
    commonIssues:
      "Gezien hoe breed Acers assortiment is, verschillen de te controleren beeldkenmerken sterk per segment: budget Nitro-lijn VA-panelen laten vaker zichtbare smearing zien bij donkere, snel bewegende content, terwijl hogere Predator IPS- en Mini-LED-modellen vaker lichte backlight-blooming laten zien (zichtbare halo rond heldere objecten op een donkere achtergrond) in plaats van de uniforme randgloed die typisch is voor standaard IPS.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is Acer Nitro dezelfde paneeltechnologie als Acer Predator?',
        a: "Nee. Nitro is Acers budgetgaminglijn en gebruikt doorgaans VA- of instap-IPS-panelen, terwijl Predator Acers hogere lijn is die IPS, VA, Mini-LED en enkele OLED-modellen omvat, afhankelijk van het specifieke product. Controleer het specificatieblad van uw exacte model in plaats van aan te nemen op basis van de lijnnaam alleen.",
      },
      {
        q: 'Wat is backlight-blooming en is dat hetzelfde als een dode pixel?',
        a: "Blooming is een zachte lichthalo zichtbaar rond heldere objecten op een donkere achtergrond, veroorzaakt door hoe een Mini-LED- of standaard LED-backlight is ingedeeld in zones - het is het meest merkbaar bij Acers Mini-LED Predator-modellen. Het is een backlight-kenmerk, geen pixeldefect: een dode of vastgelopen pixel is een enkele vaste stip die los staat van wat er in de buurt wordt weergegeven.",
      },
      {
        q: 'Leveren Acer-monitoren een dodepixelgarantie bij aankoop?',
        a: "Acers pixeldefectbeleid wordt per productlijn en regio vastgesteld in plaats van als één bedrijfsbrede garantie, en kan in de loop van de tijd veranderen. Controleer de garantiedocumentatie voor uw specifieke model en regio, of Acers regionale supportsite, in plaats van aan te nemen dat een vast aantal toegestane defecten voor het hele assortiment geldt.",
      },
    ],
  },
  corsair: {
    panelTech:
      "Corsair betrad de monitormarkt later dan de meeste merken op deze lijst, met de XENEON-lijn gebouwd op IPS- en QD-OLED-panelen (de XENEON Flex is een opmerkelijk buigbaar QD-OLED-model), gericht op gaming met hoge verversingsfrequentie en op de markt gebracht naast Corsairs bestaande ecosysteem van randapparatuur en pc-componenten. Corsair betrekt panelen van externe fabrikanten in plaats van deze zelf te produceren.",
    commonIssues:
      "Bij Corsairs IPS-gebaseerde XENEON-modellen gelden standaard IPS-kenmerken (lichte gloed bij hoeken in een donkere kamer) op dezelfde manier als bij elk IPS-paneel van een ander merk. Bij de QD-OLED XENEON-modellen gelden dezelfde OLED-specifieke overwegingen als bij andere QD-OLED-monitoren - een eenmalige kleurtest kan een op dit moment dode of vastgelopen pixel onthullen, maar niet het langetermijnrisico op inbranden door statische content.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: "Beïnvloedt Corsairs iCUE-software hoe de monitor kleur weergeeft?",
        a: "iCUE regelt voornamelijk rgb-verlichting en integratie van randapparatuur binnen Corsairs productecosysteem; op Corsair-monitoren zijn sommige schermmenu-instellingen mogelijk daarmee toegankelijk, maar de onderliggende paneelkalibratie en kleurweergave staan los van iCUE en worden niet beïnvloed door of het actief is.",
      },
      {
        q: 'Wordt de XENEON Flex op dezelfde manier getest als een standaard vlakke monitor?',
        a: "Ja, de kleurwisseltestprocedure is hetzelfde ongeacht of het paneel vlak of buigbaar is. Omdat de Flex QD-OLED is, geef voorrang aan testen met verzadigde kleuren (rood, groen, blauw) boven zwarte schermen, omdat OLED zwart weergeeft door pixels uit te schakelen, waardoor een vastgelopen uitgeschakelde pixel moeilijker te zien is tegen zwarte content specifiek.",
      },
      {
        q: 'Hoe nieuw is Corsair op de monitormarkt vergeleken met merken als LG of Dell?',
        a: "Corsair lanceerde zijn eerste XENEON-monitoren in 2021, wat het een van de nieuwere spelers maakt vergeleken met bedrijven als LG, Samsung of Dell die al tientallen jaren monitoren verkopen. Dit beïnvloedt niet inherent de defectpercentages, maar betekent wel dat er minder langetermijngegevens over betrouwbaarheid beschikbaar zijn specifiek voor Corsair-displays.",
      },
    ],
  },
  eizo: {
    panelTech:
      "EIZO is een Japanse fabrikant die zich vrijwel uitsluitend specialiseert in kleurkritische professionele monitoren in plaats van consumenten- of gamingdisplays. De ColorEdge-lijn gebruikt IPS-panelen gecombineerd met een ingebouwde hardwarekalibratiesensor, en de RadiForce-lijn is speciaal ontworpen voor medische beeldvorming (radiologie) met eisen aan grijswaarden en helderheidsuniformiteit die ver boven typische kantoor- of gamingmonitoren uitstijgen. EIZO produceert geen eigen panelen maar betrekt deze en voegt eigen kalibratiehardware en -firmware toe.",
    commonIssues:
      "Omdat EIZO's doelmarkt kleurkritisch professioneel en medisch werk is, zijn de eigen kwaliteitscontrole- en kalibratieprocessen doorgaans strenger dan consumentenmonitornormen, en is EIZO's eigen documentatie een betere bron voor paneeluniformiteitsspecificaties dan algemene forumberichten. Het belangrijkste om op elke EIZO-monitor te controleren is hetzelfde als bij elk IPS-paneel: lichte gloed bij de hoeken in een donkere kamer is normaal IPS-gedrag en staat los van een dode of vastgelopen pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Voorkomt EIZO\'s ingebouwde kalibratiesensor dode pixels?',
        a: "Nee. De ingebouwde sensor op ColorEdge-monitoren herkalibreert kleur- en helderheidsoutput na verloop van tijd om natuurlijke paneeldrift tegen te gaan - het kan geen individuele pixelhardwarestoringen zoals dode of vastgelopen pixels detecteren of voorkomen, aangezien dit fysieke defecten in de transistors van het paneel zijn, geen kalibratiekwesties.",
      },
      {
        q: 'Waarom richt EIZO zich op IPS-panelen in plaats van OLED voor professioneel werk?',
        a: "IPS-panelen hebben niet het risico op inbranden bij statische beelden dat OLED wel heeft, wat belangrijk is voor professionele software met vaste werkbalken en paletten die lange tijd worden weergegeven. IPS heeft ook een lange staat van dienst met stabiel, voorspelbaar kleurgedrag over jaren gebruik, wat EIZO's professionele en medische klanten prefereren boven OLED's diepere zwartniveaus.",
      },
      {
        q: 'Wordt een medische RadiForce-monitor op dezelfde manier getest als een ColorEdge-monitor?',
        a: "De basale kleurwisseltest werkt bij beide hetzelfde, maar RadiForce-monitoren zijn doorgaans gericht op grijswaarden voor radiologiewerk, dus testen met een volledige grijswaardengradiënt naast de standaard kleurenset is relevanter voor het opsporen van subtiele helderheidsuniformiteitsproblemen specifiek voor dat gebruik.",
      },
    ],
  },
  hp: {
    panelTech:
      "HP's monitorassortiment splitst zich in drie algemene groepen: de E-serie en zakelijke monitoren gebruiken standaard IPS-panelen gericht op kantoorgebruik, de OMEN-gaminglijn gebruikt IPS- of VA-panelen afhankelijk van het model met enkele Fast IPS-opties met hogere verversingsfrequentie, en de DreamColor-lijn (gebruikt in film, animatie en broadcastproductie) gebruikt professioneel gekalibreerde IPS-panelen met uitgebreide kleurnauwkeurigheidsvalidatie buiten HP's algemene consumentenassortiment.",
    commonIssues:
      "Bij HP's IPS-gebaseerde E-serie- en OMEN-monitoren gelden standaard IPS-kenmerken - lichte gloed bij de hoeken zichtbaar op een donker scherm in een schemerige kamer is een paneelkenmerk, geen defect. Bij HP's VA-gebaseerde OMEN-modellen geldt de gebruikelijke VA-afweging: dieper nativ contrast maar meer kans op smearing bij donkere scènes tijdens snelle beweging.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is HP DreamColor en verschilt dat van HP\'s reguliere monitoren?',
        a: "DreamColor is HP's professionele kleurnauwkeurigheidslijn, fabrieksgekalibreerd en gevalideerd voor gebruik in film, animatie en broadcast-kleurcorrectie - het is een aparte productlijn van HP's algemene kantoor- (E-serie) en gamingmonitoren (OMEN), met striktere kleurnauwkeurigheidstoleranties en doorgaans een hogere prijs.",
      },
      {
        q: 'Gebruikt HP OMEN dezelfde panelen als HP\'s kantoormonitoren?',
        a: "Nee. OMEN is HP's gaminglijn en geeft voorrang aan verversingsfrequentie en reactietijd, met IPS- of VA-panelen geselecteerd voor gamingprestaties, terwijl HP's E-serie kantoormonitoren voorrang geven aan productiviteitsfuncties (zoals verstelbare voeten en meerdere poorten) met panelen die doorgaans niet zijn afgestemd op hoge verversingsfrequenties.",
      },
      {
        q: 'Wordt een dode pixel op een HP-monitor anders gedekt dan op een zakelijk laptopscherm?',
        a: "HP stelt aparte garantievoorwaarden vast voor losse monitoren versus laptopdisplays, en het pixeldefectbeleid kan daartussen verschillen en tussen monitorproductlijnen onderling. Controleer de garantiedocumentatie specifiek voor uw monitormodel in plaats van aan te nemen dat dezelfde voorwaarden gelden voor HP's hele productassortiment.",
      },
    ],
  },
  iiyama: {
    panelTech:
      'IIYAMA (een Japans opgericht merk met een sterke aanwezigheid op de Europese markt) verkoopt een breed assortiment onder de ProLite-lijn (algemeen/professioneel) en G-Master-lijn (gaming), met TN-, VA- en IPS-panelen afhankelijk van het specifieke model en de prijsklasse, betrokken van externe paneelfabrikanten in plaats van in eigen huis geproduceerd.',
    commonIssues:
      "Omdat IIYAMA's assortiment van budget-TN-panelen tot hogere IPS-modellen reikt, verschillen de te controleren kenmerken aanzienlijk per model: TN-panelen (gangbaar in IIYAMA's meest betaalbare monitoren) vertonen de meest uitgesproken kleur- en contrastverschuiving bij kijkhoeken buiten het midden van elk paneeltype, wat een normaal TN-kenmerk is en geen defect, terwijl IIYAMA's IPS-modellen de gebruikelijkere lichte hoekgloed in donkere kamers vertonen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Hoe zie ik of mijn IIYAMA-monitor TN, VA of IPS is?',
        a: "IIYAMA vermeldt het paneeltype op het officiële specificatieblad van elk model op iiyama.com, meestal onder 'Paneeltype' in de displayspecificaties. Dit is belangrijk voor testen omdat TN-panelen veel meer kleurverschuiving vertonen bij een hoek dan IPS of VA, wat normaal is voor TN en niet mag worden aangezien voor een defect.",
      },
      {
        q: 'Is IIYAMA\'s dodepixelbeleid hetzelfde bij de ProLite- en G-Master-lijnen?',
        a: "IIYAMA stelt garantievoorwaarden per product en regio vast in plaats van één bedrijfsbreed beleid, en voorwaarden kunnen verschillen tussen de algemene ProLite-lijn en de G-Master-gaminglijn. Controleer de documentatie of regionale supportpagina voor uw specifieke model.",
      },
      {
        q: 'Maakt een TN-paneel dode pixels moeilijker te vinden?',
        a: "Niet echt - een dode of vastgelopen pixel verschijnt nog steeds als een vaste-kleurstip ongeacht paneeltype. Wat TN-panelen moeilijker te beoordelen maakt, is kleurnauwkeurigheid en uniformiteit in het algemeen, omdat de kleur van het hele scherm meer verschuift met kijkhoek dan bij IPS of VA, dus testen terwijl u recht vooruit kijkt in plaats van vanuit een hoek geeft een betrouwbaarder beeld.",
      },
    ],
  },
  lenovo: {
    panelTech:
      "Lenovo's ThinkVision-lijn (de primaire monitorlijn, een uitbreiding van de ThinkPad-merkidentiteit) gebruikt vrijwel uitsluitend IPS-panelen, gericht op kantoor- en zakelijk gebruik met nadruk op USB-C-docking en multi-monitoropstellingen. Lenovo's Legion-submerk voor gaming gebruikt IPS- en VA-panelen afhankelijk van het model, gepositioneerd als aanvulling op Lenovo's Legion-gaminglaptops en -desktops.",
    commonIssues:
      "Bij Lenovo's IPS-dominante ThinkVision-lijn gelden standaard IPS-kenmerken - lichte gloed bij de schermhoeken op een donkere achtergrond in een schemerige kamer is een normaal paneelkenmerk en geen defect. Bij Legion-gamingmodellen met VA-panelen geldt de gebruikelijke VA-afweging van dieper contrast tegenover meer kans op smearing bij donkere scènes.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: "Beïnvloedt ThinkVision's USB-C-docking de beeldkwaliteit of het pixelgedrag?",
        a: "Nee. USB-C-docking (stroomlevering, data en video via één kabel) is een connectiviteitsfunctie en heeft geen effect op de kleurweergave van het paneel of op de vraag of individuele pixels dood of vastgelopen zijn - dat wordt volledig bepaald door de fysieke paneelhardware.",
      },
      {
        q: 'Heeft Lenovo Legion dezelfde paneelkwaliteit als ThinkVision?',
        a: "Ze dienen verschillende doelen: ThinkVision geeft voorrang aan IPS-panelen afgestemd op kantoor-/productiviteitskleurnauwkeurigheid en kijkhoeken, terwijl Legion voorrang geeft aan gamingprestaties (verversingsfrequentie, reactietijd) en IPS- of VA-panelen gebruikt geselecteerd voor dat doel. Geen van beide is strikt 'beter' - ze zijn anders geoptimaliseerd.",
      },
      {
        q: 'Wat is de snelste manier om een Lenovo ThinkVision-monitor te testen bij een bureau-opstelling met meerdere monitoren?',
        a: "Voer de volledigschermtest op één monitor tegelijk uit in plaats van kleur te beoordelen over een uitgebreid multi-monitorbureaublad tegelijk - volledig scherm in de browser richt zich op één display, dus elke ThinkVision-monitor apart testen geeft een duidelijker beeld dan ze tijdens het testen naast elkaar vergelijken.",
      },
    ],
  },
  nec: {
    panelTech:
      "NEC (waarvan de displaytak in sommige regio's nu opereert als Sharp/NEC Display Solutions) richt zich op professionele en gespecialiseerde monitoren in plaats van consumenten- of gamingdisplays, met de MultiSync-lijn voor zakelijk gebruik en publieke signage en de SpectraView-lijn gericht op kleurkritisch creatief en drukwerk, vergelijkbaar qua marktpositie met EIZO. NEC's professionele monitoren gebruiken IPS-panelen met interne kalibratiehardware bij de hogere SpectraView-modellen.",
    commonIssues:
      "Omdat NEC's doelmarkt professioneel en signagegebruik is in plaats van consumentengaming, worden de monitoren doorgaans aan strengere kwaliteitscontrolenormen voor kleuruniformiteit onderworpen dan budget-consumentendisplays, al sluit dit de normale mogelijkheid van een individueel defect exemplaar niet uit. Het belangrijkste IPS-paneelkenmerk om te onderscheiden van een defect is de gebruikelijke lichte gloed bij de hoeken zichtbaar op een donker scherm in een schemerige kamer.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is NEC SpectraView vergelijkbaar met EIZO ColorEdge?',
        a: 'Ja, ze nemen een vergelijkbare marktpositie in - beide zijn professionele, fabrieksgekalibreerde IPS-monitorlijnen gericht op kleurkritisch foto-, video- en drukwerk, beide gebruikten interne kalibratiehardware bij hogere modellen, en beide zijn gepositioneerd boven algemene consumentenmonitorlijnen qua kleurnauwkeurigheidsspecificaties.',
      },
      {
        q: 'Verkoopt NEC gamingmonitoren?',
        a: "NEC's monitorassortiment richt zich op zakelijk, signage en kleurkritisch professioneel werk in plaats van gaming - het concurreert niet in het segment gamingmonitoren met hoge verversingsfrequentie zoals merken als ASUS, MSI of Acer, dus u zult NEC-monitoren over het algemeen niet zien adverteren met verversingsfrequentie of reactietijd.",
      },
      {
        q: 'Waar vind ik NEC\'s specifieke dodepixelbeleid voor mijn model?',
        a: "NEC/Sharp NEC Display Solutions publiceert garantievoorwaarden per productlijn en regio op de officiële supportsite in plaats van één universeel beleid - controleer de documentatie voor uw specifieke MultiSync- of SpectraView-model in plaats van een vaste drempel aan te nemen.",
      },
    ],
  },
  viewsonic: {
    panelTech:
      'ViewSonic verkoopt een breed assortiment, van budget-kantoormonitoren tot de ColorPro-lijn, die IPS-panelen met fabriekskalibratie gebruikt gericht op foto- en videoprofessionals, vergelijkbaar gepositioneerd met BenQ\'s SW/PD-lijnen. ViewSonic heeft ook een lange geschiedenis in projectoren en displays voor de onderwijsmarkt, wat een opvallend verschil is met merken die zich puur op monitoren richten.',
    commonIssues:
      "Bij ViewSonic's ColorPro en andere IPS-gebaseerde modellen gelden standaard IPS-kenmerken - lichte gloed bij de hoeken zichtbaar op een donker scherm in een schemerige kamer is normaal voor het paneeltype en geen defect. Bij ViewSonic's budget-kantoor- en VA-gebaseerde modellen geldt de gebruikelijke VA-afweging van dieper contrast tegenover mogelijke smearing bij donkere scènes.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is ViewSonic ColorPro en hoe verschilt dat van ViewSonic\'s standaardmonitoren?',
        a: "ColorPro is ViewSonic's fabrieksgekalibreerde professionele lijn gericht op kleurkritisch foto- en videowerk, vergelijkbaar gepositioneerd met BenQ's SW/PD-serie of ASUS ProArt - het draagt striktere kleurnauwkeurigheidsvalidatie dan ViewSonic's algemene kantoor- of budgetmonitoren.",
      },
      {
        q: 'Beïnvloedt ViewSonic\'s projectorachtergrond de kwaliteit van zijn monitoren?',
        a: "Niet direct - monitoren en projectoren gebruiken verschillende displaytechnologieën (direct-view lcd-panelen versus geprojecteerd licht), dus ViewSonic's lange geschiedenis in projectoren vertaalt zich niet naar een specifiek monitorpaneelvoordeel. De monitorpanelen worden apart van de projectortak ingekocht en beoordeeld.",
      },
      {
        q: 'Staat het dodepixelbeleid van een ViewSonic-monitor op de doos of alleen online?',
        a: "Details over garantie- en pixeldefectbeleid zijn betrouwbaarder te vinden op ViewSonic's officiële supportsite voor uw specifieke model en regio dan gedrukt op de verpakking, aangezien beleid kan worden bijgewerkt nadat een product is uitgebracht. Controleer het supportgedeelte van viewsonic.com voor uw modelnummer.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Submerken/lijnen
  // ---------------------------------------------------------------------
  rog_asus: {
    panelTech:
      "ASUS ROG Swift, het topsegment van de ROG-gaminglijn, gebruikt bij het grootste deel van het assortiment Fast IPS-panelen voor een combinatie van hoge verversingsfrequentie en redelijke kleurnauwkeurigheid, met een klein aantal topmodellen (zoals de PG27AQDM) die in plaats daarvan QD-OLED-panelen gebruiken. ROG Swift-monitoren zijn doorgaans gepositioneerd boven de ASUS TUF Gaming-lijn, zowel qua prijs als paneelkwaliteit.",
    commonIssues:
      'Bij ROG Swift\'s Fast IPS-modellen geldt het gebruikelijke IPS-kenmerk van lichte gloed bij de hoeken op een donker scherm in een schemerige kamer. Bij de QD-OLED ROG Swift-modellen verschuift de relevante overweging naar OLED-specifiek gedrag - een eenmalige kleurtest kan een op dit moment dode of vastgelopen pixel opsporen, maar niet het langetermijnrisico op inbranden door statische schermelementen zoals HUD\'s of richtkruisen.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is ROG Swift altijd OLED, of gebruikt het ook IPS?',
        a: "De meeste ROG Swift-monitoren gebruiken Fast IPS-panelen; slechts een klein aantal topmodellen (zoals de PG27AQDM) gebruikt QD-OLED. Controleer uw specifieke modelnummer tegen ASUS' specificatieblad op asus.com/rog om te bevestigen welk paneeltype uw exemplaar gebruikt vóór het testen.",
      },
      {
        q: 'Beïnvloedt G-Sync-modulehardware het testen op dode pixels bij ROG Swift-monitoren?',
        a: 'Nee. Sommige ROG Swift-modellen bevatten een speciale NVIDIA G-Sync-hardwaremodule voor variabele verversingsfrequentie - deze regelt de framepacing en heeft geen effect op individueel pixelgedrag of hoe een dode/vastgelopen pixel verschijnt tijdens een kleurwisseltest.',
      },
      {
        q: 'Worden ROG Swift-monitoren aan een strengere dodepixelnorm gehouden dan TUF Gaming?',
        a: "ASUS stelt pixeldefectbeleid per productlijn vast, en premiumlijnen vallen soms onder andere voorwaarden dan budgetlijnen, maar dit is niet gegarandeerd waar voor elke vergelijking tussen ROG en TUF - controleer de specifieke garantiedocumentatie voor uw model in plaats van aan te nemen dat een strengere norm geldt enkel omdat het de vlaggenschiplijn is.",
      },
    ],
  },
  acer_nitro: {
    panelTech:
      "Acer Nitro is Acers budget-tot-middensegment gaminglijn, met VA-panelen bij de meeste gebogen modellen en instap-IPS-panelen bij vlakkere modellen, met voorrang voor een toegankelijke prijs boven de hogere verversingsfrequenties of premium paneeltechnologie (Mini-LED, OLED) die zijn voorbehouden aan Acers hogere Predator-lijn.",
    commonIssues:
      "Omdat Nitro's gebogen modellen leunen op VA-panelen, geldt de standaard VA-afweging: dieper nativ contrast maar meer kans op zichtbare smearing bij snelle beweging in donkere scènes, en meer uitgesproken kleur-/contrastverschuiving bij scherpe kijkhoeken dan IPS. Dit zijn paneelkenmerken en geen defecten, maar het is de moeite waard ze te onderscheiden van een echte dode of vastgelopen pixel tijdens het testen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is Acer Nitro de budgetversie van Predator?',
        a: 'Ja, over het algemeen - Nitro richt zich op een toegankelijker prijspunt met VA- of instap-IPS-panelen, terwijl Predator een breder gamma bestrijkt tot premium Mini-LED- en OLED-modellen. Beide zijn Acer-gaminglijnen, maar Nitro staat doorgaans onder Predator qua prijs en paneeltechnologie.',
      },
      {
        q: 'Waarom vertoont mijn gebogen Acer Nitro-monitor verschillende helderheid bij de randen?',
        a: "Lichte helderheidsvariatie over een gebogen VA-paneel, vooral bij de randen, is een gangbaar kenmerk van de productie van gebogen panelen en niet noodzakelijk een defect - het is de moeite waard dit te controleren met een effen witte of grijze volledigschermtest, maar een geleidelijke verschuiving over de kromming verschilt van een enkele vaste dode of vastgelopen pixel.",
      },
      {
        q: 'Heeft Acer Nitro een kortere garantie dan Predator-monitoren?',
        a: "Garantieduur en -voorwaarden worden per product en regio door Acer vastgesteld, en kunnen verschillen tussen Nitro en Predator, maar controleer dit bij Acers actuele regionale supportdocumentatie voor uw specifieke model in plaats van een vaste relatie tussen de twee lijnen aan te nemen.",
      },
    ],
  },
  dell_ips: {
    panelTech:
      "Dells P-serie monitoren (de meest voorkomende 'Dell IPS'-monitoren op kantoren) gebruiken standaard IPS-panelen gericht op productiviteitsgebruik, zonder de uitgebreide kleurkalibratievalidatie die Dell reserveert voor de hogere UltraSharp U-serie. Ze zijn doorgaans gepositioneerd als betrouwbare, no-nonsense zakelijke displays in plaats van kleurkritische of gamingmonitoren.",
    commonIssues:
      "Bij Dells P-serie IPS-monitoren geldt het standaard IPS-kenmerk: lichte gloed bij de hoeken zichtbaar op een donker scherm in een schemerige kamer is normaal voor het paneeltype. Omdat deze doorgaans zijn gepositioneerd als eenvoudige kantoormonitoren in plaats van premiummodellen, zijn de kleurnauwkeurigheidstoleranties doorgaans ruimer dan bij Dells UltraSharp-lijn, al beïnvloedt dit kleurconsistentie eerder dan specifiek de kans op pixeldefecten.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Heeft Dells P-serie dezelfde paneelkwaliteit als UltraSharp?',
        a: "Nee. P-serie monitoren gebruiken standaard IPS-panelen gericht op algemene kantoorproductiviteit, terwijl UltraSharp-monitoren (U-serie) IPS- of IPS Black-panelen gebruiken met striktere fabriekskleurkalibratie gericht op creatief en professioneel werk. P-serie is Dells eenvoudigere, budgetvriendelijkere IPS-segment.",
      },
      {
        q: 'Worden Dell P-serie monitoren geleverd met een kleurnauwkeurigheidsrapport zoals UltraSharp?',
        a: 'Over het algemeen niet - kleurnauwkeurigheidsrapporten per exemplaar zijn een functie die Dell specifiek adverteert bij sommige UltraSharp-modellen, niet iets dat doorgaans is inbegrepen bij de eenvoudigere P-serie. Controleer de meegeleverde documentatie van uw specifieke model om dit te bevestigen.',
      },
      {
        q: 'Waar moet ik naast dode pixels nog op letten bij een Dell IPS-kantoormonitor?',
        a: "Naast dode/vastgelopen pixels is het de moeite waard ongelijkmatige backlight-helderheid te controleren via een effen grijs of wit volledig scherm en eventuele zichtbare wolkvorming in de hoeken op een zwart scherm in een schemerige kamer - beide staan los van individuele pixeldefecten maar beïnvloeden de algehele beelduniformiteit.",
      },
    ],
  },
  lg_ultrawide: {
    panelTech:
      "LG's ultrawide-monitoren (21:9 en breder) zijn vrijwel volledig gebouwd op IPS-panelen, gebaseerd op LG Displays eigen productie, en omvatten zowel productiviteitsgerichte modellen (zoals de UltraWide- en UltraFine-lijnen) als gamingsgerichte ultrawide-modellen binnen het UltraGear-assortiment die Nano IPS gebruiken voor snellere reactietijden.",
    commonIssues:
      "Ultrawide-panelen zijn fysiek breder dan standaard 16:9-monitoren, wat betekent dat er meer paneeloppervlak is waarover productietolerantie kan variëren - het is de moeite waard helderheid en kleuruniformiteit over de volledige breedte te controleren met een effen grijs of wit volledig scherm, niet alleen het midden, naast het controleren op individuele dode of vastgelopen pixels.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is de kans op defecten groter bij een ultrawide-monitor omdat deze groter is?',
        a: "Niet noodzakelijk specifiek meer dode pixels, maar het grotere fysieke paneeloppervlak betekent wel dat er meer ruimte is waarover helderheid of kleuruniformiteit kan variëren, wat los staat van individuele pixeldefecten. Het testen van de volledige breedte met een effen kleur, niet alleen het midden, is de moeite waard bij elke ultrawide.",
      },
      {
        q: 'Gebruikt LG\'s ultrawide-gaminglijn andere panelen dan zijn productiviteitsultrawides?',
        a: "LG's UltraGear ultrawide-gamingmodellen gebruiken doorgaans Nano IPS voor snellere reactietijden, terwijl LG's niet-gaming ultrawide- en UltraFine-lijnen standaard IPS gebruiken meer afgestemd op kleurnauwkeurigheid en productiviteit dan verversingsfrequentie - controleer het specificatieblad van uw specifieke model om dit te bevestigen.",
      },
      {
        q: 'Hoe voer ik een volledigschermtest op dode pixels uit bij een ultrawide beeldverhouding?',
        a: "De volledigschermtest in de browser vult automatisch de beeldverhouding die uw display en browservenster gebruiken, inclusief 21:9 of bredere ultrawide-schermen - zorg er alleen voor dat uw browservenster op het ultrawide-display staat (niet een secundaire standaardmonitor) voordat u de test start.",
      },
    ],
  },
  samsung_curved: {
    panelTech:
      "Samsungs gebogen gamingmonitoren (de Odyssey-lijn, inclusief modellen met 1000R-kromming) zijn gebouwd op VA-panelen geproduceerd door Samsungs eigen displaydivisie, gekozen vanwege VA's diepere natieve contrastverhouding, wat Samsung adverteert als aanvulling op het meeslepende effect van de kromming.",
    commonIssues:
      "Gebogen VA-panelen combineren twee aparte kenmerken die de moeite waard zijn om te onderscheiden van een dode of vastgelopen pixel tijdens het testen: het VA-typische risico op smearing bij donkere scènes en kleurverschuiving bij kijkhoek, plus de kromming zelf kan helderheid of kleur er bij de randen net anders laten uitzien dan in het midden van het scherm wanneer buiten-as bekeken, puur als functie van de fysieke krommingsgeometrie.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Maakt de kromming op een Samsung Odyssey-monitor dode pixels moeilijker te vinden?',
        a: "Niet fundamenteel - een dode of vastgelopen pixel blijft een enkele vaste-kleurstip ongeacht schermkromming. Wat de kromming wél beïnvloedt, is hoe uniform helderheid en kleur eruitzien bij de randen versus het midden wanneer buiten het midden bekeken, wat een apart, geleidelijk effect is en geen scherp enkelpixeldefect.",
      },
      {
        q: 'Wat betekent 1000R en beïnvloedt dat de paneeltechnologie?',
        a: "1000R beschrijft de krommingsradius (een cirkel met een straal van 1000mm, ongeveer overeenkomend met het natuurlijke perifere gezichtsveld van de mens) - het is een fysieke krommingsspecificatie, geen paneeltechnologie. Het onderliggende paneel is bij Samsungs Odyssey-lijn nog steeds VA; het krommingsgetal verandert niets aan hoe dodepixeltesten werken.",
      },
      {
        q: 'Moet ik een gebogen Samsung-monitor testen op normale kijkafstand?',
        a: "Ja - gebogen monitoren zijn ontworpen om op een specifieke afstand te worden bekeken waar de kromming overeenkomt met de natuurlijke boog van uw oog, en testen van te ver weg of onder een hoek kan normale krommingsgerelateerde helderheidsvariatie sterker doen lijken dan bij de bedoelde kijkpositie.",
      },
    ],
  },
  asus_tuf: {
    panelTech:
      "ASUS TUF Gaming staat in ASUS' gamingassortiment onder ROG Swift, met VA- en standaard IPS-panelen in plaats van de Fast IPS- of QD-OLED-panelen van de flagship ROG-modellen, gericht op een scherpe prijs in plaats van topsegment paneeltechnologie. ASUS adverteert de TUF-lijn rond duurzaamheidstests van componenten, al is dat een bouwkwaliteitsclaim los van de paneeltechnologie zelf.",
    commonIssues:
      "Bij TUF Gaming's VA-modellen geldt de standaard VA-afweging: dieper nativ contrast tegenover meer kans op smearing bij donkere scènes en kleurverschuiving bij kijkhoek. Bij IPS-gebaseerde TUF-modellen is de gebruikelijke lichte hoekgloed op een donker scherm in een schemerige kamer het relevante IPS-kenmerk om te onderscheiden van een echt defect.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is ASUS TUF Gaming de budgetversie van ROG?',
        a: "Ja, over het algemeen - TUF Gaming richt zich op een lager prijspunt dan ROG Swift, met VA- of standaard IPS-panelen in plaats van ROG's Fast IPS- of QD-OLED-opties. Beide zijn ASUS-gaminglijnen, maar TUF staat onder ROG qua prijs en paneelsegment.",
      },
      {
        q: 'Verlaagt ASUS\' duurzaamheidstest voor TUF-monitoren het risico op dode pixels?',
        a: "ASUS adverteert TUF Gaming-producten rond component- en bouwkwaliteitstests (zoals duurzaamheid van condensatoren en voet), wat een aparte claim is van paneelniveauproductie, en duurzaamheidstests richten zich niet specifiek op of elimineren individueel pixeldefectrisico, dat voortkomt uit paneelproductie in plaats van de omringende hardware.",
      },
      {
        q: 'Welk paneeltype gebruikt mijn specifieke TUF Gaming-model?',
        a: "TUF Gaming omvat zowel VA- als IPS-panelen afhankelijk van het specifieke model - controleer het veld 'Paneeltype' op het officiële ASUS-specificatieblad van uw model op asus.com/tuf-gaming om te bevestigen welke u heeft voordat u beoordeelt wat normaal kijkhoek- of contrastgedrag is.",
      },
    ],
  },
  lg_gaming: {
    panelTech:
      "LG's UltraGear-gaminglijn omvat Nano IPS-panelen (het merendeel van het assortiment, gekozen voor snelle reactietijden met betere kleurnauwkeurigheid dan typische TN- of VA-gamingpanelen) en een kleiner aantal OLED UltraGear-modellen aan de bovenkant, gebaseerd op LG Displays eigen paneelproductie.",
    commonIssues:
      "Bij Nano IPS UltraGear-modellen geldt het gebruikelijke IPS-kenmerk van lichte gloed bij de hoeken op een donker scherm in een schemerige kamer. Bij OLED UltraGear-modellen is de relevante overweging anders: een kleurwisseltest kan bevestigen of een pixel op dit moment dood of vastgelopen is, maar kan geen inbrandrisico voorspellen door langdurige weergave van statische beelden zoals game-HUD's.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is LG UltraGear hetzelfde als LG\'s reguliere monitorlijn?',
        a: "Nee. UltraGear is LG's toegewijde gamingsubmerk, met Nano IPS- of OLED-panelen geselecteerd voor hoge verversingsfrequentie en snelle reactietijd, terwijl LG's algemene monitorassortiment (UltraWide, UltraFine, standaard IPS-modellen) voorrang geeft aan productiviteit of kleurnauwkeurigheid boven gamingspecifieke prestaties.",
      },
      {
        q: 'Verandert Nano IPS hoe dode pixels eruitzien vergeleken met standaard IPS?',
        a: "Nee. Nano IPS is een verbetering van de kleurruimte (een nanodeeltjeslaag die lichtgolflengten filtert) in plaats van een verandering aan de onderliggende pixelstructuur - dode en vastgelopen pixels verschijnen op Nano IPS op dezelfde manier als op elke andere IPS-variant: een vaste-kleurstip die niet meeverandert met de achtergrond.",
      },
      {
        q: 'Moet ik een OLED UltraGear-monitor anders testen dan een Nano IPS-model?',
        a: 'Gebruik hetzelfde kleurwisselproces, maar richt uw aandacht meer op verzadigde kleuren (rood, groen, blauw) dan op zwarte schermen bij het OLED-model, omdat OLED zwart weergeeft door pixels volledig uit te schakelen, wat een vastgelopen uitgeschakelde pixel kan maskeren die tegen een heldere kleur juist opvalt.',
      },
    ],
  },
  dell_gaming: {
    panelTech:
      "Dells gamingmonitorinspanningen lopen grotendeels via het submerk Alienware (verkocht onder de Dell-bedrijfsparaplu), dat IPS- en QD-OLED-panelen gebruikt afhankelijk van het model - Dell onderhoudt geen grote aparte niet-Alienware gaminglijn zoals sommige concurrenten dat wel doen.",
    commonIssues:
      'Bij Alienwares IPS-gamingmodellen geldt het standaard IPS-kenmerk van lichte hoekgloed op een donker scherm in een schemerige kamer. Bij de QD-OLED Alienware-modellen (zoals de AW3423DW) verschuift de relevante overweging naar OLED-specifiek gedrag: een kleurtest onthult op dit moment dode of vastgelopen pixels, maar niet toekomstig inbrandrisico door statische content.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Verkoopt Dell gamingmonitoren buiten het merk Alienware?',
        a: "Dells gamingsgerichte monitoren worden voornamelijk verkocht onder de naam Alienware in plaats van direct onder het merk Dell, al opereert Alienware binnen Dells bedrijfsstructuur. Als u naar een 'Dell-gamingmonitor' zoekt, is dit hoogstwaarschijnlijk een model met het merk Alienware.",
      },
      {
        q: 'Is de garantie anders voor Alienware-monitoren versus Dell UltraSharp?',
        a: "Dell stelt pixeldefect- en garantiebeleid per productlijn vast, en de voorwaarden van Alienware komen niet gegarandeerd overeen met die van UltraSharp - controleer de specifieke garantiedocumentatie voor uw Alienware-model in plaats van aan te nemen dat deze overeenkomt met Dells professionele monitorlijn.",
      },
      {
        q: 'Wat moet ik als eerste controleren op een nieuwe Alienware QD-OLED-monitor?',
        a: 'Voer de volledigschermkleurwisseltest uit over alle kleuren, met bijzondere aandacht voor rood, groen en blauw in plaats van zwart, omdat OLED-panelen zwart weergeven door pixels uit te schakelen - een vastgelopen uitgeschakelde pixel gaat op in zwarte content en valt veel duidelijker op tegen een verzadigde kleur.',
      },
    ],
  },
  benq_gaming: {
    panelTech:
      "BenQ's gamingmonitoren splitsen zich tussen de Mobiuz-lijn (consumentengaming, IPS- of VA-panelen die kleurnauwkeurigheid en verversingsfrequentie in balans brengen) en de Zowie-lijn (esportsgericht, doorgaans matte TN- of IPS-panelen afgestemd op minimale inputlag en consistente bewegingshelderheid boven kleurlevendigheid, populair bij competitieve FPS-spelers).",
    commonIssues:
      "Bij Mobiuz IPS-modellen geldt standaard IPS-gloed bij de hoeken in een donkere kamer. Bij Zowie's TN-gebaseerde modellen verwacht meer uitgesproken kleur- en contrastverschuiving bij kijkhoeken buiten het midden dan bij IPS of VA - een normaal TN-kenmerk en geen defect, al is het de moeite waard te testen terwijl u recht vooruit kijkt voor een betrouwbaarder beeld van echte pixeldefecten.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is het verschil tussen BenQ Mobiuz en BenQ Zowie?',
        a: "Mobiuz is BenQ's consumentengaminglijn die kleurnauwkeurigheid en gamingprestaties in balans brengt, terwijl Zowie BenQ's esportsgerichte lijn is die voorrang geeft aan minimale inputlag en bewegingshelderheid (vaak met matte TN-panelen) voor competitieve spelers, doorgaans ten koste van kleurlevendigheid en kijkhoeken vergeleken met Mobiuz.",
      },
      {
        q: 'Waarom ziet kleur er anders uit onder een hoek op mijn BenQ Zowie-monitor?',
        a: "Als uw Zowie-model een TN-paneel gebruikt, is meer uitgesproken kleur- en contrastverschuiving bij kijkhoeken buiten het midden een normaal kenmerk van TN-technologie, door Zowie specifiek gekozen vanwege de lage inputlag in plaats van kleurnauwkeurigheid - het is geen defect, maar het betekent wel dat recht op het scherm kijken tijdens het testen een betrouwbaarder beeld geeft.",
      },
      {
        q: "Beïnvloedt BenQ's oogverzorgingstechnologie op Mobiuz-monitoren het testen van pixels?",
        a: "Nee. BenQ's Eye-Care-functies (flikkervrije backlight, modi met weinig blauw licht) passen aan hoe de backlight wordt aangestuurd en de kleurtemperatuur - ze beïnvloeden individuele pixelhardware niet, dus een dode of vastgelopen pixel verschijnt op dezelfde manier ongeacht of deze modi zijn ingeschakeld.",
      },
    ],
  },
  msi_curved: {
    panelTech:
      "MSI's gebogen gamingmonitoren (voornamelijk in de MAG- en MPG-serie) zijn gebouwd op VA-panelen, gekozen vanwege het diepere native contrast dat VA biedt, wat MSI positioneert als aanvulling op het meeslepende effect van de gebogen vormfactor - vergelijkbare redenering als bij andere merken met gebogen gamingmonitoren zoals Samsungs Odyssey-lijn.",
    commonIssues:
      "De standaard VA-afweging geldt bij MSI's gebogen modellen: dieper nativ contrast tegenover meer kans op smearing bij donkere scènes tijdens snelle beweging en meer uitgesproken kleur-/contrastverschuiving bij scherpe kijkhoeken. De kromming zelf kan er ook voor zorgen dat helderheid er bij de randen net anders uitziet dan in het midden wanneer buiten-as bekeken, los van een echte dode of vastgelopen pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Waarom gebruiken gebogen gamingmonitoren zoals die van MSI meestal VA in plaats van IPS?',
        a: "VA-panelen bieden dieper native contrastverhoudingen dan IPS, wat fabrikanten waaronder MSI adverteren als goed passend bij het meeslepende effect van een gebogen scherm. IPS-panelen kunnen technisch gebogen worden, maar komen minder vaak voor bij gebogen gamingmonitoren branchebreed, deels vanwege kosten en deels vanwege deze contrastvoorkeur.",
      },
      {
        q: 'Beïnvloedt MSI\'s krommingsradius waar ik naar dode pixels moet zoeken?',
        a: "Niet specifiek - dode en vastgelopen pixels kunnen overal op het paneel voorkomen ongeacht krommingsradius. Het is de moeite waard bewust de verre randen van een gebogen scherm te controleren naast het midden, simpelweg omdat het makkelijker is de randen over het hoofd te zien op een breed gebogen display dan op een vlak scherm.",
      },
      {
        q: 'Maakt MSI\'s rgb-verlichting Mystic Light deel uit van het displaypaneel?',
        a: "Nee. Mystic Light is behuizings- en voetverlichting, los van het displaypaneel zelf - het heeft geen effect op pixelweergave of hoe een dode/vastgelopen pixel verschijnt tijdens een kleurwisseltest.",
      },
    ],
  },
  corsair_gaming: {
    panelTech:
      "Corsairs XENEON-gamingmonitoren gebruiken IPS-panelen bij het grootste deel van het assortiment, met de XENEON Flex als opmerkelijke buigbare QD-OLED-uitzondering, doorgaans gepositioneerd voor gaming met hoge verversingsfrequentie met nadruk op integratie met Corsairs bredere iCUE-ecosysteem van randapparatuur en pc-componenten.",
    commonIssues:
      "Bij XENEON's IPS-modellen geldt standaard IPS-gloed bij de hoeken op een donker scherm in een schemerige kamer. Bij de QD-OLED XENEON Flex verschuift de relevante overweging naar OLED-specifiek gedrag - testen met verzadigde kleuren is veelzeggender dan testen met zwart, omdat OLED zwart weergeeft door pixels volledig uit te schakelen.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Welk paneel gebruikt de Corsair XENEON Flex?',
        a: "De XENEON Flex gebruikt een buigbaar QD-OLED-paneel, opmerkelijk omdat het met de hand instelbaar is tussen een vlakke en gebogen vormfactor - dit is een andere paneeltechnologie dan de standaard IPS-panelen die bij het grootste deel van de rest van Corsairs XENEON-assortiment worden gebruikt.",
      },
      {
        q: 'Verhoogt het buigen van de XENEON Flex het risico op dode pixels?',
        a: "Corsair heeft het buigmechanisme van de Flex ontworpen om binnen de door het paneel opgegeven buigtolerantie te werken, maar zoals bij elk bewegend mechanisch onderdeel is het de moeite waard de richtlijnen van de fabrikant te volgen over hoe ver en hoe vaak u buigt - controleer Corsairs officiële documentatie voor de specifieke buiglimieten van het paneel in plaats van dit aan te nemen.",
      },
      {
        q: 'Is Corsairs monitorgarantie gekoppeld aan registratie bij iCUE-software?',
        a: "Standaard hardwaregarantiedekking staat doorgaans los van of u iCUE-software heeft geïnstalleerd of geregistreerd - controleer uw specifieke aankoopdocumentatie en Corsairs supportsite om de garantievoorwaarden voor uw model en regio te bevestigen.",
      },
    ],
  },
  asus_4k: {
    panelTech:
      "ASUS' professionele 4K-lijn, ProArt, gebruikt IPS-panelen met fabriekskleurkalibratie geverifieerd door Calman, gericht op foto- en videoprofessionals, doorgaans gevalideerd voor striktere kleurnauwkeurigheidstoleranties (vaak geadverteerd rond Delta E < 2) dan ASUS' algemene consumenten- of gaming-4K-monitoren.",
    commonIssues:
      "Bij ProArt's IPS-panelen geldt het standaard IPS-kenmerk van lichte gloed bij de hoeken op een donker scherm in een schemerige kamer. Bij 4K-resolutie specifiek zijn individuele pixels fysiek kleiner dan bij een 1080p- of 1440p-paneel van dezelfde grootte, wat een enkele dode of vastgelopen pixel iets moeilijker in één oogopslag te vinden maakt en een nauwkeurigere, opzettelijke scan verdient.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Maakt 4K-resolutie dode pixels moeilijker te vinden?',
        a: "Een enkele dode of vastgelopen pixel is fysiek kleiner op een 4K-paneel dan op een paneel met lagere resolutie van dezelfde schermgrootte, aangezien er meer pixels in dezelfde ruimte passen. Het blijft van dichtbij zichtbaar, maar een langzamere, opzettelijke scan over de volledigschermkleurtest is de moeite waard bij 4K-monitoren vergeleken met monitoren met lagere resolutie.",
      },
      {
        q: 'Wordt ASUS ProArt-kalibratie per exemplaar uitgevoerd of alleen voor de productlijn in het algemeen?',
        a: "Controleer de documentatie van uw specifieke ProArt-model - sommige ProArt-monitoren bevatten een fabriekskalibratierapport per exemplaar, terwijl bij andere de Calman-verificatieclaim verwijst naar de ontwerpvalidatie van de productlijn in plaats van elk individueel verzonden exemplaar. Dit verschilt per model.",
      },
      {
        q: 'Welke Delta E-waarde mag ik verwachten van een ASUS ProArt 4K-monitor?',
        a: "ASUS adverteert verschillende ProArt-modellen rond een nauwkeurigheidsdoel van Delta E < 2, wat over het algemeen als nauwkeurig genoeg wordt beschouwd om kleurverschillen niet waarneembaar te maken voor het menselijk oog. Het exacte cijfer en of het per exemplaar wordt gegarandeerd of als ontwerpdoel geldt, verschilt per model - controleer het specificatieblad van uw specifieke model.",
      },
    ],
  },
  lg_4k: {
    panelTech:
      "LG's 4K-monitoraanbod splitst zich tussen de UltraFine-lijn (IPS-panelen, USB-C-connectiviteit, historisch gepositioneerd rond Mac-compatibiliteit) en 4K-modellen binnen de UltraGear-gaminglijn (Nano IPS, hogere verversingsfrequenties), plus algemene 4K IPS-monitoren buiten beide submerken, allemaal gebaseerd op LG Displays eigen paneelproductie.",
    commonIssues:
      "Bij elk van LG's 4K IPS-modellen geldt het standaard IPS-kenmerk van lichte hoekgloed op een donker scherm in een schemerige kamer. Bij 4K-resolutie zijn individuele pixels fysiek kleiner dan bij een paneel met lagere resolutie van dezelfde grootte, wat een enkele dode of vastgelopen pixel iets minder opvallend maakt in één oogopslag en een langzamere, opzettelijke scan tijdens het testen verdient.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is het verschil tussen LG UltraFine en LG\'s andere 4K-monitoren?',
        a: "UltraFine is LG's lijn die historisch is gepositioneerd rond Mac-compatibiliteit en USB-C-connectiviteit, terwijl LG ook algemene 4K IPS-monitoren buiten dat submerk verkoopt en 4K-gamingmodellen binnen UltraGear. Alle gebruiken IPS-familiepanelen, maar UltraFine's positionering is specifiek productiviteit/creatief in plaats van gaming.",
      },
      {
        q: 'Heeft een 4K LG-monitor een krachtigere videokaart nodig om goed te testen?',
        a: "De dodepixeltest zelf is slechts effen kleurweergave in volledig scherm, wat minimale belasting is voor elke moderne grafische hardware ongeacht resolutie - u heeft geen krachtige gpu nodig om de test zelf uit te voeren, ook al profiteert het aansturen van 4K-content in het algemeen voor dagelijks gebruik wel van meer grafische prestaties.",
      },
      {
        q: 'Moet ik testen op native 4K-resolutie of een geschaalde resolutie?',
        a: "Test indien mogelijk op de native 4K-resolutie van uw monitor, aangezien draaien op een geschaalde of lagere resolutie betekent dat het display het beeld opschaalt, wat het moeilijker kan maken te beoordelen of een defect op een individuele fysieke pixel zit of een artefact van de schaling is.",
      },
    ],
  },
  dell_4k: {
    panelTech:
      "Dells professionele 4K-monitoren concentreren zich in de UltraSharp U-serie, met IPS- of IPS Black-panelen met fabriekskleurkalibratie gericht op foto-, video- en algemeen creatief professioneel werk, doorgaans Dells meest op kleurnauwkeurigheid gerichte monitorsegment.",
    commonIssues:
      "Bij UltraSharp's IPS-panelen geldt het standaard IPS-kenmerk van lichte hoekgloed op een donker scherm in een schemerige kamer. Bij 4K-resolutie zijn individuele pixels fysiek kleiner dan bij een paneel met lagere resolutie van dezelfde grootte, waardoor een enkele dode of vastgelopen pixel iets minder opvalt in één oogopslag - een langzamere, opzettelijke scan tijdens het testen is de moeite waard bij elke 4K-monitor.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Bevatten alle Dell UltraSharp 4K-monitoren een fabriekskalibratierapport?',
        a: "Niet universeel - fabriekskalibratierapporten zijn een functie die Dell adverteert bij specifieke UltraSharp-modellen in plaats van de hele U-serie. Controleer de productpagina van uw specifieke model of de meegeleverde documentatie om te bevestigen of een kalibratierapport per exemplaar was inbegrepen.",
      },
      {
        q: 'Is IPS Black hetzelfde als standaard IPS voor pixeldefectdoeleinden?',
        a: "IPS Black is Dells marketingnaam voor een IPS-variant met verbeterde native contrastverhouding vergeleken met standaard IPS - het verandert niets aan hoe dode of vastgelopen pixels worden gedetecteerd, aangezien de onderliggende pixelstructuur en testmethode hetzelfde zijn als bij elk ander IPS-paneel.",
      },
      {
        q: 'Op welke resolutie moet de browser staan bij het testen van een 4K Dell-monitor?',
        a: "Zorg dat uw browservenster gemaximaliseerd is op het 4K-display (niet een secundaire monitor) en dat de schermschaling van uw besturingssysteem er niet voor zorgt dat de browser op een lagere effectieve resolutie weergeeft - de volledigschermtest werkt het beste wanneer deze het native 4K-paneel daadwerkelijk vult.",
      },
    ],
  },
  benq_4k: {
    panelTech:
      "BenQ's professionele 4K-monitoren zijn verdeeld tussen de SW-serie (fotografiegericht, brede kleurruimte, hardwarekalibratie gevalideerd tegen Pantone) en de PD-serie (algemeen design-/professioneel werk), beide met IPS-panelen, maar SW-modellen dragen doorgaans striktere kleurnauwkeurigheidsvalidatie specifiek gericht op fotografen.",
    commonIssues:
      "Bij BenQ's IPS-gebaseerde SW- en PD-4K-modellen geldt standaard IPS-gloed bij de hoeken op een donker scherm in een schemerige kamer. Bij 4K-resolutie zijn individuele pixels fysiek kleiner dan bij panelen met lagere resolutie van dezelfde grootte, wat een enkele dode of vastgelopen pixel minder opvallend maakt in één oogopslag en een langzamere, opzettelijke scan verdient.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Moet ik BenQ SW of PD kopen voor 4K-fotobewerking?',
        a: "BenQ positioneert SW specifiek voor fotografie met striktere kleurvalidatie en bredere kleurruimtedekking, terwijl PD zich breder richt op algemeen design en professioneel werk - als kleurkritische fotografie uw primaire gebruik is, is SW BenQ's meer gespecialiseerde optie, maar controleer de actuele modelspecificaties aangezien het assortiment in de loop van de tijd verandert.",
      },
      {
        q: "Betekent BenQ's hardwarekalibratie dat mijn 4K-monitor geen kleurtest nodig heeft?",
        a: "Hardwarekalibratie behandelt algehele kleurnauwkeurigheid en consistentie, maar het is een apart proces van het controleren op dode of vastgelopen pixels, wat individuele hardwaredefecten zijn die los staan van kleurkalibratie. Het blijft de moeite waard een kleurwisseltest voor pixels uit te voeren, zelfs op een gekalibreerd exemplaar.",
      },
      {
        q: 'Is Pantone-validatie hetzelfde als een fabriekskalibratierapport?',
        a: "Pantone Validated is een certificering die aangeeft dat het display voldoet aan Pantones kleurnauwkeurigheidsnormen als productlijn, wat een andere (zij het verwante) claim is dan een fabriekskalibratierapport per exemplaar - controleer de documentatie van uw specifieke model om te zien wat op uw exemplaar van toepassing is.",
      },
    ],
  },
  samsung_4k: {
    panelTech:
      "Samsungs 4K-monitoren splitsen zich tussen gamingsgerichte modellen in de Odyssey Neo G-serie (met Mini-LED-verlichte VA-panelen) en algemene of smart-monitor 4K-modellen (de M-serie), waarbij de paneeltechnologie meer varieert per productlijn dan enkel per resolutie.",
    commonIssues:
      "Bij Mini-LED VA-modellen is blooming (een zachte lichthalo rond heldere objecten op een donkere achtergrond, door hoe de Mini-LED-backlight in zones is ingedeeld) het relevante kenmerk om te onderscheiden van een dode of vastgelopen pixel - blooming is een backlight-effect gekoppeld aan nabije heldere content, terwijl een pixeldefect een enkele vaste stip is die los staat van wat eromheen wordt weergegeven. Bij 4K-resolutie in het algemeen zijn individuele pixels ook fysiek kleiner, wat een langzamere, opzettelijke scan de moeite waard maakt.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is Mini-LED en hoe verschilt dat van een dode pixel?',
        a: "Mini-LED verwijst naar de backlighttechnologie (veel kleine LED-zones achter een VA- of IPS-paneel, wat preciezere lokale dimming mogelijk maakt), niet de pixels zelf. Een Mini-LED-artefact genaamd 'blooming' - een halo rond heldere objecten op donkere achtergronden - is een backlight-effect, terwijl een dode of vastgelopen pixel een enkele vaste-kleurstip is op de paneellaag zelf.",
      },
      {
        q: "Wordt Samsungs 4K M-serie smart-monitor op dezelfde manier getest als een Odyssey-gamingmonitor?",
        a: "Ja, de volledigschermkleurwisseltestprocedure is identiek ongeacht of het een gamingsgericht Odyssey-model of een algemene M-serie smart-monitor betreft - wat verschilt is de paneeltechnologie erachter (Mini-LED VA versus standaard VA of IPS), wat beïnvloedt welke andere kenmerken (zoals blooming) normaal te verwachten zijn.",
      },
      {
        q: 'Gebruikt de 4K Odyssey Neo G-serie hetzelfde VA-paneel als niet-Mini-LED Odyssey-modellen?',
        a: "Nee - de Neo G-serie combineert VA-paneeltechnologie met een Mini-LED-backlight voor preciezere lokale dimming, terwijl Samsungs standaard (niet-Neo) Odyssey-modellen VA-panelen met conventionele verlichting gebruiken. Beide zijn VA op paneelniveau, maar de backlightsystemen verschillen aanzienlijk.",
      },
    ],
  },

  // ---------------------------------------------------------------------
  // Categoriepagina's (niet aan één merk gebonden)
  // ---------------------------------------------------------------------
  portable_monitor: {
    panelTech:
      "Draagbare monitoren, gevoed en aangestuurd via één USB-C-kabel, zijn vrijwel uitsluitend gebouwd op IPS-panelen met een resolutie van 1080p of 1440p, met voorrang voor een dunne, lichte constructie boven de hogere verversingsfrequenties of premium paneeltechnologie (VA, OLED) van desktopmonitoren, bij merken als ASUS ZenScreen, Lenovo en een breed scala aan kleinere fabrikanten.",
    commonIssues:
      "Omdat draagbare monitoren dunner zijn en ontworpen om te worden meegenomen en herhaaldelijk aan- en losgekoppeld, is het de moeite waard de USB-C-kabelaansluiting en -poort apart te controleren op betrouwbaarheidsproblemen (zoals onderbroken signaal) naast het controleren op dode of vastgelopen pixels, aangezien een losse verbinding soms op een displayprobleem kan lijken maar eigenlijk een kabel- of poortprobleem is.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Kan een flikkerend scherm bij een draagbare monitor worden aangezien voor een dodepixelprobleem?',
        a: "Ja, maar het zijn verschillende problemen: flikkering over het hele scherm wijst meestal op een USB-C-stroomlevering- of kabelprobleem, aangezien draagbare monitoren via dezelfde kabel als het videosignaal worden gevoed, terwijl een dode of vastgelopen pixel een enkel vast punt is dat niet flikkert en gelijk blijft ongeacht de rest van het scherm.",
      },
      {
        q: 'Heeft een draagbare monitor een laptop met hoog vermogen USB-C nodig om goed te testen?',
        a: "De meeste draagbare monitoren hebben een bepaald minimum USB-C-stroomvermogen van het aangesloten apparaat nodig om überhaupt te functioneren - als het scherm niet aangaat of dof/instabiel is, controleer dan de stroomvereiste van uw draagbare monitor tegenover wat de USB-C-poort van uw laptop levert voordat u een paneeldefect aanneemt.",
      },
      {
        q: 'Zijn draagbare monitoren gevoeliger voor dode pixels dan desktopmonitoren?',
        a: "Er is geen goed onderbouwde reden waarom draagbare monitorpanelen inherent hogere defectpercentages zouden hebben dan desktoppanelen van dezelfde resolutie en hetzelfde paneeltype - het productieproces van het lcd-paneel zelf is grotendeels vergelijkbaar. Wat verschilt is de dunnere, mobielere behuizing, wat de duurzaamheid bij gebruik beïnvloedt in plaats van de productie op pixelniveau.",
      },
    ],
  },
  touchscreen_monitor: {
    panelTech:
      "Touchscreenmonitoren voegen een capacitieve (of, minder gebruikelijk, resistieve) touchlaag toe boven op een standaard IPS-, VA- of TN-displaypaneel - de touchtechnologie en de onderliggende paneeltechnologie zijn aparte systemen, en touchfunctionaliteit verandert niets aan welk paneeltype het daadwerkelijke beeld levert.",
    commonIssues:
      "Omdat touchscreenmonitoren twee aparte systemen hebben (het displaypaneel en de touchlaag), is het de moeite waard ze apart te controleren: een dode of vastgelopen pixel is een displaypaneelprobleem, terwijl touchkalibratieproblemen, dode zones of onreageerbare touchgebieden een apart touchlaagprobleem zijn dat een kleurwisseldisplaytest niet onthult of beïnvloedt.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Controleert een dodepixeltest ook de touchnauwkeurigheid?',
        a: "Nee. De volledigschermkleurwisseltest controleert alleen het displaypaneel op dode, vastgelopen of hete pixels - het test de touchlaag niet. Touchnauwkeurigheid en -reactievermogen moeten apart worden gecontroleerd, doorgaans via de touchkalibratietool van uw besturingssysteem of een speciaal touchtesthulpmiddel.",
      },
      {
        q: 'Kan de touchlaag zichtbare stippen veroorzaken die op dode pixels lijken?',
        a: "Bij normaal gebruik niet - de touchlaag is transparant en zou op zichzelf geen zichtbare artefacten moeten introduceren. Als u een vaste-kleurstip ziet tijdens de kleurtest, is dit vrijwel zeker een displaypaneelprobleem (dode of vastgelopen pixel) en geen kwestie gerelateerd aan de touchlaag.",
      },
      {
        q: 'Verschilt de paneeltechnologie in een touchscreenmonitor van een niet-touchmonitor?',
        a: "Niet inherent - touchscreenmonitoren gebruiken hetzelfde scala aan paneeltechnologieën (IPS, VA, TN) als niet-touchmonitoren, met de touchsensor toegevoegd als extra laag erboven. Het specifieke paneeltype verschilt per model, net als bij een niet-touchmonitor.",
      },
    ],
  },
  curved_monitor: {
    panelTech:
      'Gebogen monitoren zijn overwegend gebouwd op VA-panelen, omdat het productieproces van VA zich makkelijker leent voor kromming dan IPS, al bestaat een kleiner aantal gebogen IPS-monitoren tegen doorgaans een hogere prijs. De krommingsradius (uitgedrukt in millimeters, zoals 1800R of 1000R) verschilt per model en bepaalt hoe scherp de kromming is, los van de paneeltechnologie.',
    commonIssues:
      "Bij VA-gebaseerde gebogen monitoren geldt de standaard VA-afweging: dieper nativ contrast tegenover meer kans op smearing bij donkere scènes en kleurverschuiving bij kijkhoek. De kromming zelf kan er ook voor zorgen dat helderheid of kleur er bij de randen net anders uitziet dan in het midden wanneer buiten-as bekeken - een geleidelijk, krommingsgerelateerd effect dat verschilt van een enkele vaste dode of vastgelopen pixel.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat betekent het R-getal (zoals 1800R) op een gebogen monitor?',
        a: "Het R-getal beschrijft de krommingsradius in millimeters - een monitor met 1800R zou, uitgebreid tot een volledige cirkel, een straal van 1800mm hebben. Lagere getallen betekenen een scherpere kromming. Het is een fysieke krommingsspecificatie en zegt niets over paneeltechnologie en beïnvloedt niet hoe dodepixeltesten werken.",
      },
      {
        q: 'Hebben gebogen monitoren eerder dode pixels dan platte monitoren?',
        a: "Er is geen goed onderbouwde reden waarom het buigen van een paneel tijdens productie inherent de kans op individuele pixeldefecten zou verhogen - het productieproces op pixelniveau is vergelijkbaar ongeacht de uiteindelijke kromming. Wat de kromming wél beïnvloedt, is de waargenomen uniformiteit tussen rand en midden, wat los staat van individuele dode of vastgelopen pixels.",
      },
      {
        q: 'Moet ik op een specifieke afstand zitten om een gebogen monitor goed te testen?',
        a: "Ja - gebogen monitoren zijn ontworpen voor een specifieke kijkafstand waarbij de kromming ongeveer overeenkomt met uw natuurlijke gezichtsveld. Testen van te dichtbij, te ver weg of onder een scherpe hoek kan normale krommingsgerelateerde helderheidsvariatie sterker doen lijken dan bij de bedoelde kijkpositie.",
      },
    ],
  },
  ultrawide_monitor: {
    panelTech:
      'Ultrawide-monitoren (21:9 en bredere beeldverhoudingen, doorgaans 34-49 inch) zijn overwegend gebouwd op IPS-panelen, gekozen voor consistentere kleur over het bredere gezichtsveld dan VA doorgaans biedt, al bestaan gebogen VA-ultrawides ook, vooral bij gamingsgerichte modellen.',
    commonIssues:
      "Omdat ultrawide-panelen fysiek breder zijn dan standaard 16:9-monitoren, is er meer paneeloppervlak waarover productietolerantie kan variëren - het controleren van helderheid en kleuruniformiteit over de volledige breedte met een effen grijs of wit volledig scherm, niet alleen het midden, is de moeite waard naast het controleren op individuele dode of vastgelopen pixels.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wordt een 49-inch super-ultrawide anders getest dan een 34-inch ultrawide?',
        a: "De testprocedure is hetzelfde ongeacht grootte - doorloop effen kleuren in volledig scherm en scan naar pixels die niet overeenkomen met de achtergrond. Bij een grotere super-ultrawide is het de moeite waard meer tijd te nemen en fysiek over de volledige breedte te scannen, aangezien het makkelijker is een defect aan de verre randen van een zeer breed scherm te missen.",
      },
      {
        q: 'Heeft een ultrawide-monitor een specifieke videokaart nodig om goed weer te geven?',
        a: "Ultrawide-resoluties (zoals 3440x1440 of 5120x1440) vereisen meer grafische verwerking voor veeleisende toepassingen zoals games, maar de dodepixeltest zelf is slechts effen kleurweergave in volledig scherm, wat minimale belasting is voor elke moderne gpu ongeacht de beeldverhouding of resolutie van de monitor.",
      },
      {
        q: 'Waarom ziet mijn ultrawide-monitor er bij de uiterste linker- en rechterrand net anders uit qua helderheid?',
        a: "Lichte helderheidsvariatie over een breed paneel, vooral richting de randen, kan optreden bij elk groot display door normale backlight- en productietolerantie. Het is een geleidelijk, gebiedsbreed effect - anders dan een dode of vastgelopen pixel, wat een enkel vast punt is dat los staat van zijn positie op het paneel.",
      },
    ],
  },
  gaming_144hz: {
    panelTech:
      '144Hz bevindt zich in het instap- tot middensegment van gaming-verversingsfrequenties en is verkrijgbaar met TN-, VA- en IPS-paneeltypen afhankelijk van de specifieke monitor - in tegenstelling tot 240Hz of 360Hz, die meer leunen op TN of Fast IPS vanwege reactietijd, bieden 144Hz-monitoren de breedste keuze aan paneeltypen voor een gegeven budget.',
    commonIssues:
      "Omdat 144Hz-monitoren alle drie de belangrijkste paneeltypen omvatten, verschilt wat te controleren per specifiek paneel: TN-modellen vertonen meer uitgesproken kleurverschuiving bij kijkhoek, VA-modellen kunnen smearing vertonen bij donkere scènes tijdens snelle beweging, en IPS-modellen vertonen lichte hoekgloed op een donker scherm in een schemerige kamer - geen van deze is hetzelfde als een dode of vastgelopen pixel, wat een vast defect is los van paneeltype of content.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Beïnvloedt verversingsfrequentie hoe zichtbaar dode pixels zijn?',
        a: "Nee. Een dode of vastgelopen pixel is een statisch hardwaredefect, op dezelfde manier zichtbaar ongeacht of de monitor op 60Hz of 144Hz draait - verversingsfrequentie beïnvloedt hoe vloeiend beweging wordt weergegeven, niet of individuele pixels correct functioneren.",
      },
      {
        q: 'Moet ik testen op 144Hz of een lagere verversingsfrequentie?',
        a: "Dit maakt niet specifiek uit voor het testen op dode pixels, aangezien de test statische effen kleuren gebruikt in plaats van beweging - test op welke verversingsfrequentie uw monitor momenteel is ingesteld. Verversingsfrequentie is belangrijker voor het beoordelen van bewegingshelderheid, wat los staat van het controleren op pixeldefecten.",
      },
      {
        q: 'Welk paneeltype moet ik controleren bij een 144Hz-monitor vóór aankoop?',
        a: "144Hz is verkrijgbaar met TN- (snelste reactietijd, meest kleur-/kijkhoekcompromis), VA- (dieper contrast, wat bewegingssmearing) en IPS-panelen (beste kleur en kijkhoeken, iets tragere reactie dan TN) - welke bij u past hangt af van of u kleurnauwkeurigheid, contrast of de snelst mogelijke reactietijd prioriteert.",
      },
    ],
  },
  gaming_240hz: {
    panelTech:
      "240Hz-gamingmonitoren leunden historisch op TN-panelen vanwege hun snelle reactietijden, al zijn Fast IPS-panelen steeds gangbaarder geworden in dit verversingssegment naarmate de paneeltechnologie is verbeterd, met betere kleurnauwkeurigheid en kijkhoeken dan TN terwijl ze nog steeds 240Hz halen. VA-panelen bij 240Hz komen minder vaak voor dan bij 144Hz.",
    commonIssues:
      'Bij TN-gebaseerde 240Hz-modellen verwacht meer uitgesproken kleur- en contrastverschuiving bij kijkhoeken buiten het midden - een normaal TN-kenmerk en geen defect. Bij Fast IPS 240Hz-modellen geldt de gebruikelijke lichte hoekgloed op een donker scherm in een schemerige kamer. Testen terwijl u recht op het scherm kijkt (in plaats van onder een hoek) geeft het betrouwbaarste beeld van echte pixeldefecten bij beide paneeltypen.',
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Heeft een 240Hz-monitor eerder paneeldefecten dan een 144Hz-monitor?',
        a: "Er is geen goed onderbouwd verband tussen verversingsfrequentiecapaciteit en dodepixeldefectpercentage - beide zijn aparte aspecten van paneelproductie en -ontwerp. Een 240Hz-paneel is niet inherent meer of minder vatbaar voor individuele pixeldefecten dan een 144Hz-paneel van vergelijkbare bouwkwaliteit.",
      },
      {
        q: 'Waarom ziet TN-kleur er slechter uit dan IPS bij sommige 240Hz-monitoren?',
        a: "TN-panelen boden historisch de snelste reactietijden, wat verklaart waarom veel 240Hz-monitoren TN gebruikten, maar TN-technologie heeft inherent meer kleur- en kijkhoekcompromis dan IPS. Dit is een afweging tussen paneeltypen en geen defect, en nieuwere Fast IPS 240Hz-modellen dichten een groot deel van dat verschil.",
      },
      {
        q: 'Moet ik speciale instellingen inschakelen om een 240Hz-monitor op dode pixels te testen?',
        a: "Er zijn geen speciale instellingen nodig - de volledigschermkleurtest werkt ongeacht of hoge verversingsfrequentie, G-Sync/FreeSync of overdrive-instellingen zijn ingeschakeld, aangezien deze statisch pixelgedrag op effen kleuren controleert in plaats van bewegingsprestaties.",
      },
    ],
  },
  gaming_360hz: {
    panelTech:
      '360Hz bevindt zich aan het extreme uiteinde van consumenten-gamingverversingsfrequenties, historisch gedomineerd door TN-panelen en recenter door Fast IPS-panelen specifiek ontworpen om dat reactietijdplafond te halen; OLED-opties bij 360Hz zijn branchebreed beperkter geweest vanwege andere technische afwegingen bij zeer hoge verversingsfrequenties, al verandert dit naarmate paneeltechnologie zich ontwikkelt.',
    commonIssues:
      "Bij TN-gebaseerde 360Hz-modellen verwacht meer uitgesproken kleur- en kijkhoekverschuiving dan bij IPS - een normaal kenmerk van het paneeltype dat specifiek is gekozen voor reactietijd. Bij Fast IPS 360Hz-modellen geldt de standaard lichte hoekgloed op een donker scherm. Omdat 360Hz-monitoren een smalle, gespecialiseerde productcategorie zijn, geeft recht vooruit kijken in plaats van onder een hoek het duidelijkste beeld van echte pixeldefecten.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wie heeft eigenlijk een 360Hz-monitor nodig, en beïnvloedt dat het testen?',
        a: "360Hz-monitoren zijn specifiek gericht op competitieve esportsspelers in snelle titels waar het minimaliseren van input-naar-fotonlatentie belangrijk is - het beoogde gebruik verandert niets aan hoe dodepixeltesten werken, wat hetzelfde volledigschermkleurwisselproces is ongeacht het verversingsfrequentieplafond van de monitor.",
      },
      {
        q: 'Zijn 360Hz-monitoren duurder om te vervangen als ze dode pixels hebben?',
        a: "360Hz-monitoren zijn doorgaans duurder geprijsd dan 144Hz- of 240Hz-modellen vanwege de vereiste gespecialiseerde paneeltechniek, wat de moeite waard is om te weten bij het beslissen tussen een garantievervanging of reparatie, maar het pixeldefectbeleid zelf wordt door de fabrikant per model vastgesteld, niet specifiek door de verversingsfrequentie.",
      },
      {
        q: 'Vereist het testen van een 360Hz-monitor op dode pixels speciale hardware?',
        a: "Nee - de browsergebaseerde volledigschermkleurtest werkt op elke monitor en elke grafische opstelling die een webpagina in volledig scherm kan weergeven. U hoeft de monitor niet op zijn volle 360Hz te laten draaien om te controleren op dode of vastgelopen pixels, aangezien de test niet afhankelijk is van beweging of hoge framerates.",
      },
    ],
  },
  professional_monitor: {
    panelTech:
      "Professionele monitoren gebruiken overwegend IPS-panelen vanwege hun consistente kleur en brede kijkhoeken, met een groeiend aantal topopties die OLED gebruiken voor dieper contrast, bij toegewijde professionele lijnen zoals EIZO ColorEdge, NEC SpectraView, BenQ SW/PD, ASUS ProArt, Dell UltraSharp en ViewSonic ColorPro - deze lijnen concurreren vooral op kalibratienauwkeurigheid en consistentie in plaats van enkel paneeltechnologie.",
    commonIssues:
      "Omdat professionele monitoren worden geadverteerd op kleurnauwkeurigheid, is de relevantere kwaliteitscontrole naast individuele dode of vastgelopen pixels helderheid en kleuruniformiteit over het volledige scherm met een effen grijze of witte volledigschermtest - professionele panelen worden doorgaans aan striktere uniformiteitstoleranties gehouden dan budget-consumentenmonitoren, al verschilt dit per specifiek model en fabrikant.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Wat is het verschil tussen een professionele monitor en een gewone kantoormonitor?',
        a: "Professionele monitoren zijn doorgaans fabrieksgekalibreerd voor kleurnauwkeurigheid (vaak met een kalibratierapport per exemplaar), bestrijken een bredere kleurruimte (zoals AdobeRGB of DCI-P3), en worden aan striktere uniformiteitstoleranties gehouden dan algemene kantoormonitoren, die kosten en basisfunctionaliteit boven gekalibreerde kleurnauwkeurigheid prioriteren.",
      },
      {
        q: 'Betekent fabriekskalibratie dat een professionele monitor geen dode pixels heeft?',
        a: "Nee. Fabriekskalibratie behandelt kleurnauwkeurigheid en consistentie over het paneel - het is een apart proces van individuele pixelhardware, die nog steeds productiedefecten kan hebben ongeacht hoe goed de algehele kleuroutput is gekalibreerd. Het blijft de moeite waard een dodepixeltest uit te voeren op elke nieuw gekochte professionele monitor.",
      },
      {
        q: 'Hoe verschilt het dodepixelbeleid van een professionele monitor doorgaans van dat van een consumentenmonitor?',
        a: "Sommige professionele monitorlijnen worden geadverteerd met strengere pixeldefectbeleid dan algemene consumentenlijnen van dezelfde fabrikant, wat de hogere prijs en kleurkritische toepassing weerspiegelt, maar dit is niet universeel - controleer de specifieke garantiedocumentatie voor uw model in plaats van aan te nemen dat een strenger beleid geldt enkel omdat het als professioneel wordt geadverteerd.",
      },
    ],
  },
  photo_editing_monitor: {
    panelTech:
      'Monitoren geadverteerd voor fotobewerking geven voorrang aan brede kleurruimtedekking (doorgaans AdobeRGB en sRGB, soms DCI-P3) op IPS-panelen met hardwarekalibratie, bij lijnen als BenQ SW, ASUS ProArt, Dell UltraSharp, EIZO ColorEdge en ViewSonic ColorPro - de paneeltechnologie zelf is doorgaans dezelfde IPS-familie die elders wordt gebruikt, met kleurruimtedekking en kalibratienauwkeurigheid als onderscheidende factor.',
    commonIssues:
      "Voor fotobewerkingswerk specifiek is helderheid en kleuruniformiteit over het volledige scherm net zo belangrijk als individuele dode of vastgelopen pixels, aangezien ongelijkmatige helderheid zichtbaar kan afdoen aan hoe u belichting en kleurbalans beoordeelt tijdens het bewerken. Test met een effen grijs of wit volledig scherm om de algehele uniformiteit te controleren naast de standaard kleurwisseldodepixeltest.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Naar welke kleurruimtedekking moet ik zoeken bij een fotobewerkingsmonitor?',
        a: 'AdobeRGB-dekking (vaak vermeld als 95-99% bij fotobewerkingsgerichte monitoren) is de meest genoemde specificatie voor fotografiewerk, aangezien dit de kleurruimte is waarop veel fotobewerkingsworkflows zijn gebaseerd, al zijn sRGB- en DCI-P3-dekking ook relevant afhankelijk van uw specifieke uitvoerformaat. Controleer de specifieke kleurruimtepercentages die voor uw model worden geclaimd in plaats van uit te gaan van het label "fotobewerking" alleen.',
      },
      {
        q: 'Maakt een monitor met brede kleurruimte het testen op dode pixels anders?',
        a: "Nee, de testprocedure is hetzelfde ongeacht kleurruimtedekking - doorloop effen kleuren in volledig scherm en zoek naar pixels die niet overeenkomen met de achtergrond. Kleurruimtedekking beïnvloedt hoe nauwkeurig kleuren over het algemeen worden weergegeven, niet hoe individuele pixeldefecten verschijnen.",
      },
      {
        q: 'Moet ik mijn fotobewerkingsmonitor kalibreren vóór of na het controleren op dode pixels?',
        a: "Beide volgordes werken voor de dodepixelcontrole zelf, aangezien deze niet afhankelijk is van de kalibratiestatus, maar het is over het algemeen efficiënter om eerst op dode of vastgelopen pixels te controleren - als u een defect vindt dat ernstig genoeg is voor een retour, heeft het weinig zin een monitor te kalibreren die u mogelijk terugstuurt.",
      },
    ],
  },
  video_editing_monitor: {
    panelTech:
      'Monitoren geadverteerd voor videobewerking en kleurcorrectie leggen nadruk op brede kleurruimtedekking (met name DCI-P3, gezien het gebruik in filmproductie) en HDR-ondersteuning op IPS- of OLED-panelen, waarbij het hoogste segment de dedicated broadcast-referentiemonitoren benadert die in professionele postproductiefaciliteiten worden gebruikt, maar deze doorgaans niet evenaart.',
    commonIssues:
      "Voor kleurcorrectiewerk is het de moeite waard helderheid en kleuruniformiteit over het volledige scherm te controleren naast individuele dode of vastgelopen pixels, aangezien ongelijkmatige helderheid zichtbaar kan beïnvloeden hoe schaduwen en hooglichten worden beoordeeld tijdens het corrigeren. Bij HDR-geschikte modellen is het ook vermeldenswaard dat de piekhelderheids-HDR-claim van een monitor geen invloed heeft op hoe een dode of vastgelopen pixel verschijnt tijdens een standaard SDR-volledigschermkleurtest.",
    warranty: GENERIC_WARRANTY,
    faqs: [
      {
        q: 'Is een videobewerkingsmonitor hetzelfde als een broadcast-referentiemonitor?',
        a: "Over het algemeen niet - consumenten- en prosumer-videobewerkingsmonitoren (zelfs kleurnauwkeurige) staan doorgaans een trede onder dedicated broadcast-referentiemonitoren die in professionele postproductie worden gebruikt, welke veel hogere prijzen en nog striktere kalibratie- en uniformiteitsgaranties hebben. Videobewerkingsmonitoren proberen die nauwkeurigheid tegen een toegankelijkere prijs te benaderen.",
      },
      {
        q: 'Verandert HDR-ondersteuning hoe ik moet testen op dode pixels?',
        a: "Nee - voer de standaard volledigschermkleurwisseltest uit in normale (SDR-)modus. HDR-modus verandert hoe helderheid en contrast worden weergegeven specifiek voor HDR-content, maar een dode of vastgelopen pixel is een hardwaredefect dat op dezelfde manier verschijnt ongeacht of HDR actief is.",
      },
      {
        q: 'Welke kleurruimte moet ik controleren op dekking bij een videobewerkingsmonitor?',
        a: "DCI-P3-dekking is de meest genoemde specificatie voor video-/filmwerk, aangezien dit de standaard is die in digitale bioscoop wordt gebruikt, al zijn Rec.709 (broadcast/webvideo) en Rec.2020 (sommige HDR-workflows) ook relevant afhankelijk van uw specifieke leveringsformaat - controleer welke kleurruimte(s) uw beoogde uitvoerformaat daadwerkelijk vereist.",
      },
    ],
  },
};
