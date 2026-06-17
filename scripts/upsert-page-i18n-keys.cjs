const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'lib', 'translations.ts');
const source = fs.readFileSync(filePath, 'utf8');
const start = source.indexOf('export const translations =');
const end = source.indexOf('} as const;');
if (start === -1 || end === -1) throw new Error('translations block not found');
const objStart = source.indexOf('{', start);
const objLiteral = source.slice(objStart, end + 1);
// eslint-disable-next-line no-new-func
const translations = new Function(`return (${objLiteral});`)();

const keys = {
  en: {
    back_to_home: 'Back to Home',
    tools_monitor_intro: 'Test your display with brand-specific pages optimized for more than 50 monitor manufacturers.',
    tools_monitor_support_title: 'We support 50+ monitor brands!',
    tools_monitor_support_desc: 'From ASUS ROG to BenQ, Alienware to EIZO, and many more.',
    tools_monitor_url_hint: 'Try typing your brand name in the URL:',
    tools_browse_more_brands: 'Browse More Brands',
    tools_device_intro: 'Specialized test pages designed for specific devices and display types.',
    tools_calculators_title: 'Calculator & Utility Tools',
    tools_calculators_intro: 'Interactive tools to help you choose the right monitor setup and understand display specifications.',
    refresh_rate_calculator: 'Refresh Rate Calculator',
    pixel_density_calculator: 'Pixel Density Calculator',
    monitor_comparison_tool: 'Monitor Comparison Tool',
    tools_refresh_calculator_desc: 'Find the optimal refresh rate for your GPU and CPU with practical recommendations.',
    tools_pixel_calculator_desc: 'Calculate PPI and compare sharpness across different screen sizes and resolutions.',
    tools_monitor_comparison_desc: 'Compare monitor specifications side by side and find the best display for your use case.',

    compare_page_title: 'Monitor & Spec Comparisons',
    compare_page_description: 'In-depth guides comparing monitor brands, specifications, and display types to support informed decisions.',
    compare_keyword_1: 'monitor comparison',
    compare_keyword_2: 'brand comparison',
    compare_keyword_3: 'gaming monitor',
    compare_keyword_4: 'professional display',
    compare_nav_label: 'Comparisons',
    compare_badge: 'Comparison Guides',
    compare_browse_intro: 'Browse our comparison guides covering',
    compare_browse_suffix: 'monitor matchups and specification breakdowns.',
    compare_why_title: 'Why Compare?',
    compare_feature_1_title: 'Make Informed Decisions',
    compare_feature_1_desc: 'Understand key differences between brands and specifications to find the right monitor.',
    compare_feature_2_title: 'Spec Deep Dives',
    compare_feature_2_desc: 'See what refresh rates, panel types, and resolution really mean in practice.',
    compare_feature_3_title: 'Gaming Optimization',
    compare_feature_3_desc: 'Get targeted recommendations for competitive play, streaming, and smooth gameplay.',
    compare_feature_4_title: 'Professional Use',
    compare_feature_4_desc: 'Review options for color accuracy, content creation, and productivity workflows.',
    compare_cta_title: 'Ready to find your perfect monitor?',
    compare_cta_desc: 'Use our interactive tools and tests to evaluate monitor performance and specifications.',
    compare_cta_button: 'Explore All Tools'
  },
  nl: {
    back_to_home: 'Terug naar home',
    tools_monitor_intro: 'Test je scherm met merk-specifieke pagina\'s die geoptimaliseerd zijn voor meer dan 50 monitorfabrikanten.',
    tools_monitor_support_title: 'We ondersteunen 50+ monitormerken!',
    tools_monitor_support_desc: 'Van ASUS ROG tot BenQ, van Alienware tot EIZO en nog veel meer.',
    tools_monitor_url_hint: 'Probeer je merknaam direct in de URL te typen:',
    tools_browse_more_brands: 'Bekijk meer merken',
    tools_device_intro: 'Gespecialiseerde testpagina\'s voor specifieke apparaten en schermtypes.',
    tools_calculators_title: 'Calculatoren & hulpprogramma\'s',
    tools_calculators_intro: 'Interactieve tools om de juiste monitorconfiguratie te kiezen en specificaties beter te begrijpen.',
    refresh_rate_calculator: 'Refresh rate calculator',
    pixel_density_calculator: 'Pixeldichtheid calculator',
    monitor_comparison_tool: 'Monitorvergelijkingstool',
    tools_refresh_calculator_desc: 'Vind de optimale verversingssnelheid voor je GPU en CPU met praktische aanbevelingen.',
    tools_pixel_calculator_desc: 'Bereken PPI en vergelijk scherpte tussen verschillende schermgroottes en resoluties.',
    tools_monitor_comparison_desc: 'Vergelijk monitorspecificaties naast elkaar en vind het beste scherm voor jouw gebruik.',

    compare_page_title: 'Monitor- en specificatievergelijkingen',
    compare_page_description: 'Uitgebreide gidsen die monitormerken, specificaties en displaytypes vergelijken voor betere keuzes.',
    compare_keyword_1: 'monitor vergelijking',
    compare_keyword_2: 'merk vergelijking',
    compare_keyword_3: 'gaming monitor',
    compare_keyword_4: 'professioneel display',
    compare_nav_label: 'Vergelijkingen',
    compare_badge: 'Vergelijkingsgidsen',
    compare_browse_intro: 'Bekijk onze vergelijkingsgidsen met',
    compare_browse_suffix: 'monitorvergelijkingen en specificatie-analyses.',
    compare_why_title: 'Waarom vergelijken?',
    compare_feature_1_title: 'Maak betere keuzes',
    compare_feature_1_desc: 'Begrijp de belangrijkste verschillen tussen merken en specificaties om het juiste scherm te kiezen.',
    compare_feature_2_title: 'Diepgaande specificaties',
    compare_feature_2_desc: 'Zie wat refresh rates, paneeltypes en resolutie in de praktijk betekenen.',
    compare_feature_3_title: 'Gaming optimalisatie',
    compare_feature_3_desc: 'Krijg gerichte aanbevelingen voor competitief gamen, streaming en vloeiende gameplay.',
    compare_feature_4_title: 'Professioneel gebruik',
    compare_feature_4_desc: 'Vergelijk opties voor kleurnauwkeurigheid, contentcreatie en productiviteit.',
    compare_cta_title: 'Klaar om je perfecte monitor te vinden?',
    compare_cta_desc: 'Gebruik onze interactieve tools en tests om monitorprestaties en specificaties te beoordelen.',
    compare_cta_button: 'Ontdek alle tools'
  },
  es: {
    back_to_home: 'Volver al inicio',
    tools_monitor_intro: 'Prueba tu pantalla con páginas específicas por marca optimizadas para más de 50 fabricantes de monitores.',
    tools_monitor_support_title: '¡Compatibles con más de 50 marcas!',
    tools_monitor_support_desc: 'Desde ASUS ROG y BenQ hasta Alienware, EIZO y muchas más.',
    tools_monitor_url_hint: 'Prueba escribiendo el nombre de tu marca en la URL:',
    tools_browse_more_brands: 'Ver más marcas',
    tools_device_intro: 'Páginas de prueba especializadas para dispositivos y tipos de pantalla concretos.',
    tools_calculators_title: 'Calculadoras y utilidades',
    tools_calculators_intro: 'Herramientas interactivas para elegir la mejor configuración de monitor y entender sus especificaciones.',
    refresh_rate_calculator: 'Calculadora de frecuencia de actualización',
    pixel_density_calculator: 'Calculadora de densidad de píxeles',
    monitor_comparison_tool: 'Herramienta de comparación de monitores',
    tools_refresh_calculator_desc: 'Encuentra la frecuencia óptima para tu GPU y CPU con recomendaciones prácticas.',
    tools_pixel_calculator_desc: 'Calcula PPI y compara nitidez entre diferentes tamaños y resoluciones.',
    tools_monitor_comparison_desc: 'Compara especificaciones de monitores lado a lado y encuentra el mejor para tu uso.',

    compare_page_title: 'Comparativas de monitores y especificaciones',
    compare_page_description: 'Guías en profundidad para comparar marcas, especificaciones y tipos de pantalla con criterio.',
    compare_keyword_1: 'comparativa de monitores',
    compare_keyword_2: 'comparativa de marcas',
    compare_keyword_3: 'monitor gaming',
    compare_keyword_4: 'pantalla profesional',
    compare_nav_label: 'Comparativas',
    compare_badge: 'Guías comparativas',
    compare_browse_intro: 'Explora nuestras guías con',
    compare_browse_suffix: 'comparativas de monitores y análisis de especificaciones.',
    compare_why_title: '¿Por qué comparar?',
    compare_feature_1_title: 'Decisiones informadas',
    compare_feature_1_desc: 'Comprende diferencias clave entre marcas y especificaciones para elegir mejor.',
    compare_feature_2_title: 'Análisis de especificaciones',
    compare_feature_2_desc: 'Aprende qué significan en la práctica la tasa de refresco, el tipo de panel y la resolución.',
    compare_feature_3_title: 'Optimización para gaming',
    compare_feature_3_desc: 'Obtén recomendaciones concretas para juego competitivo, streaming y fluidez.',
    compare_feature_4_title: 'Uso profesional',
    compare_feature_4_desc: 'Revisa opciones para precisión de color, creación de contenido y productividad.',
    compare_cta_title: '¿Listo para encontrar tu monitor ideal?',
    compare_cta_desc: 'Usa nuestras herramientas y pruebas interactivas para evaluar rendimiento y especificaciones.',
    compare_cta_button: 'Explorar todas las herramientas'
  },
  de: {
    back_to_home: 'Zuruck zur Startseite',
    tools_monitor_intro: 'Testen Sie Ihr Display mit markenspezifischen Seiten fur mehr als 50 Monitorhersteller.',
    tools_monitor_support_title: 'Wir unterstutzen mehr als 50 Monitormarken!',
    tools_monitor_support_desc: 'Von ASUS ROG uber BenQ bis Alienware, EIZO und viele weitere.',
    tools_monitor_url_hint: 'Geben Sie den Markennamen direkt in der URL ein:',
    tools_browse_more_brands: 'Mehr Marken anzeigen',
    tools_device_intro: 'Spezialisierte Testseiten fur bestimmte Gerate und Displaytypen.',
    tools_calculators_title: 'Rechner und Hilfstools',
    tools_calculators_intro: 'Interaktive Tools, um die richtige Monitor-Konfiguration zu finden und Spezifikationen besser zu verstehen.',
    refresh_rate_calculator: 'Bildwiederholrate-Rechner',
    pixel_density_calculator: 'Pixeldichte-Rechner',
    monitor_comparison_tool: 'Monitor-Vergleichstool',
    tools_refresh_calculator_desc: 'Finden Sie die optimale Bildwiederholrate fur GPU und CPU mit praxisnahen Empfehlungen.',
    tools_pixel_calculator_desc: 'Berechnen Sie PPI und vergleichen Sie Scharfe zwischen verschiedenen GroBen und Auflosungen.',
    tools_monitor_comparison_desc: 'Vergleichen Sie Monitorspezifikationen nebeneinander und finden Sie das passende Display.',

    compare_page_title: 'Monitor- und Spezifikationsvergleiche',
    compare_page_description: 'Detaillierte Leitfaden zum Vergleich von Marken, Spezifikationen und Displaytypen fur bessere Entscheidungen.',
    compare_keyword_1: 'monitor vergleich',
    compare_keyword_2: 'markenvergleich',
    compare_keyword_3: 'gaming monitor',
    compare_keyword_4: 'professionelles display',
    compare_nav_label: 'Vergleiche',
    compare_badge: 'Vergleichsleitfaden',
    compare_browse_intro: 'Durchsuchen Sie unsere Vergleiche mit',
    compare_browse_suffix: 'Monitor-Duellen und Spezifikationsanalysen.',
    compare_why_title: 'Warum vergleichen?',
    compare_feature_1_title: 'Fundierte Entscheidungen',
    compare_feature_1_desc: 'Verstehen Sie zentrale Unterschiede zwischen Marken und Spezifikationen, um richtig zu wahlen.',
    compare_feature_2_title: 'Spezifikationen im Detail',
    compare_feature_2_desc: 'Erfahren Sie, was Bildwiederholrate, Paneltyp und Auflosung in der Praxis bedeuten.',
    compare_feature_3_title: 'Gaming-Optimierung',
    compare_feature_3_desc: 'Erhalten Sie konkrete Empfehlungen fur kompetitives Spielen, Streaming und flussige Darstellung.',
    compare_feature_4_title: 'Professionelle Nutzung',
    compare_feature_4_desc: 'Vergleichen Sie Optionen fur Farbgenauigkeit, Content-Erstellung und Produktivitat.',
    compare_cta_title: 'Bereit, den perfekten Monitor zu finden?',
    compare_cta_desc: 'Nutzen Sie unsere interaktiven Tools und Tests zur Bewertung von Leistung und Spezifikationen.',
    compare_cta_button: 'Alle Tools entdecken'
  }
};

for (const locale of Object.keys(keys)) {
  translations[locale] = { ...(translations[locale] || {}), ...keys[locale] };
}

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted compare/tools translation keys');
