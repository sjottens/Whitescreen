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

const additions = {
  en: {
    blog_search_placeholder: 'Search articles...',
    blog_filtering_by: 'Filtering by:',
    blog_featured_in_category: 'Featured in This Category',
    blog_featured_articles: 'Featured Articles',
    blog_browse_by_category: 'Browse by Category',
    blog_articles_count_label: 'articles',
    blog_articles_in: 'Articles in',
    blog_latest_articles: 'Latest Articles',
    blog_no_articles_category: 'No articles found in this category yet.',
    blog_view_all_articles: 'View all articles',
    blog_faq_title: 'Frequently Asked Questions',
    blog_faq_1_q: 'What types of screen issues can I test for?',
    blog_faq_1_a: 'You can test for dead pixels, stuck pixels, color accuracy, brightness, contrast, gradient uniformity, and more. Our tools support monitors, laptops, tablets, and smartphones.',
    blog_faq_2_q: 'Are all tests completely free?',
    blog_faq_2_a: 'Yes. All screen testing tools are free to use with no registration and no software installation.',
    blog_faq_3_q: 'Can I fix dead pixels if I find them?',
    blog_faq_3_a: 'True dead pixels cannot usually be repaired, but new displays may be covered under warranty depending on brand policy.',
    blog_faq_4_q: 'How often should I test my display?',
    blog_faq_4_a: 'Test a new display immediately after purchase. For existing displays, periodic checks help detect issues early.',
    blog_cta_title: 'Ready to Test Your Screen?',
    blog_cta_desc: 'Access our complete collection of professional display testing tools right now.',
    blog_cta_button: 'Explore All Testing Tools',
  },
  nl: {
    blog_search_placeholder: 'Zoek artikelen...',
    blog_filtering_by: 'Filter op:',
    blog_featured_in_category: 'Uitgelicht in deze categorie',
    blog_featured_articles: 'Uitgelichte artikelen',
    blog_browse_by_category: 'Bladeren per categorie',
    blog_articles_count_label: 'artikelen',
    blog_articles_in: 'Artikelen in',
    blog_latest_articles: 'Nieuwste artikelen',
    blog_no_articles_category: 'Nog geen artikelen gevonden in deze categorie.',
    blog_view_all_articles: 'Bekijk alle artikelen',
    blog_faq_title: 'Veelgestelde vragen',
    blog_faq_1_q: 'Welke schermproblemen kan ik testen?',
    blog_faq_1_a: 'Je kunt testen op dode pixels, vastzittende pixels, kleurnauwkeurigheid, helderheid, contrast en gradient-uniformiteit. De tools werken voor monitoren, laptops, tablets en smartphones.',
    blog_faq_2_q: 'Zijn alle tests volledig gratis?',
    blog_faq_2_a: 'Ja. Alle schermtesttools zijn gratis, zonder registratie en zonder installatie.',
    blog_faq_3_q: 'Kan ik dode pixels repareren als ik ze vind?',
    blog_faq_3_a: 'Echte dode pixels zijn meestal niet te repareren, maar bij nieuwe schermen is er vaak garantie afhankelijk van het merkbeleid.',
    blog_faq_4_q: 'Hoe vaak moet ik mijn scherm testen?',
    blog_faq_4_a: 'Test een nieuw scherm direct na aankoop. Voor bestaande schermen helpen periodieke controles om problemen vroeg te zien.',
    blog_cta_title: 'Klaar om je scherm te testen?',
    blog_cta_desc: 'Gebruik nu direct onze complete set professionele displaytesttools.',
    blog_cta_button: 'Ontdek alle testtools',
  },
  es: {
    blog_search_placeholder: 'Buscar artículos...',
    blog_filtering_by: 'Filtrando por:',
    blog_featured_in_category: 'Destacados en esta categoría',
    blog_featured_articles: 'Artículos destacados',
    blog_browse_by_category: 'Explorar por categoría',
    blog_articles_count_label: 'artículos',
    blog_articles_in: 'Artículos en',
    blog_latest_articles: 'Últimos artículos',
    blog_no_articles_category: 'Todavía no hay artículos en esta categoría.',
    blog_view_all_articles: 'Ver todos los artículos',
    blog_faq_title: 'Preguntas frecuentes',
    blog_faq_1_q: '¿Qué problemas de pantalla puedo probar?',
    blog_faq_1_a: 'Puedes comprobar píxeles muertos, píxeles atascados, precisión de color, brillo, contraste y uniformidad de gradiente. Funciona en monitores, portátiles, tabletas y móviles.',
    blog_faq_2_q: '¿Todas las pruebas son completamente gratis?',
    blog_faq_2_a: 'Sí. Todas las herramientas son gratuitas, sin registro y sin instalación.',
    blog_faq_3_q: '¿Puedo reparar píxeles muertos si los encuentro?',
    blog_faq_3_a: 'Los píxeles muertos reales normalmente no se reparan, pero los equipos nuevos pueden estar cubiertos por garantía según la marca.',
    blog_faq_4_q: '¿Con qué frecuencia debo probar mi pantalla?',
    blog_faq_4_a: 'Prueba una pantalla nueva justo después de comprarla. En pantallas usadas, las revisiones periódicas ayudan a detectar fallos antes.',
    blog_cta_title: '¿Listo para probar tu pantalla?',
    blog_cta_desc: 'Accede ahora a nuestra colección completa de herramientas profesionales de prueba de pantallas.',
    blog_cta_button: 'Explorar todas las herramientas',
  },
  de: {
    blog_search_placeholder: 'Artikel suchen...',
    blog_filtering_by: 'Gefiltert nach:',
    blog_featured_in_category: 'Empfohlen in dieser Kategorie',
    blog_featured_articles: 'Empfohlene Artikel',
    blog_browse_by_category: 'Nach Kategorie durchsuchen',
    blog_articles_count_label: 'Artikel',
    blog_articles_in: 'Artikel in',
    blog_latest_articles: 'Neueste Artikel',
    blog_no_articles_category: 'In dieser Kategorie wurden noch keine Artikel gefunden.',
    blog_view_all_articles: 'Alle Artikel anzeigen',
    blog_faq_title: 'Häufige Fragen',
    blog_faq_1_q: 'Welche Bildschirmprobleme kann ich testen?',
    blog_faq_1_a: 'Sie können tote Pixel, festsitzende Pixel, Farbgenauigkeit, Helligkeit, Kontrast und Verlaufsgleichmäßigkeit prüfen. Die Tools funktionieren für Monitore, Laptops, Tablets und Smartphones.',
    blog_faq_2_q: 'Sind alle Tests komplett kostenlos?',
    blog_faq_2_a: 'Ja. Alle Bildschirmtests sind kostenlos, ohne Registrierung und ohne Installation.',
    blog_faq_3_q: 'Kann ich tote Pixel reparieren, wenn ich sie finde?',
    blog_faq_3_a: 'Echte tote Pixel lassen sich in der Regel nicht reparieren, bei neuen Geräten greift jedoch oft die Garantie je nach Hersteller.',
    blog_faq_4_q: 'Wie oft sollte ich mein Display testen?',
    blog_faq_4_a: 'Testen Sie ein neues Display sofort nach dem Kauf. Bei bestehenden Geräten helfen regelmäßige Prüfungen, Probleme früh zu erkennen.',
    blog_cta_title: 'Bereit, Ihren Bildschirm zu testen?',
    blog_cta_desc: 'Nutzen Sie jetzt unsere vollständige Sammlung professioneller Display-Testtools.',
    blog_cta_button: 'Alle Testtools entdecken',
  },
};

for (const locale of Object.keys(additions)) {
  translations[locale] = { ...(translations[locale] || {}), ...additions[locale] };
}

const out = `// lib/translations.ts - Multilingual translations (English, Dutch, Spanish, German)\n\nexport const translations = ${JSON.stringify(translations, null, 2)} as const;\n\nexport type Locale = 'en' | 'nl' | 'es' | 'de';\nexport type TranslationKey = keyof typeof translations.en;\n\nexport function getTranslation(locale: Locale, key: TranslationKey): string {\n  const localeTranslations = translations[locale as keyof typeof translations];\n  if (!localeTranslations) {\n    return translations.en[key as keyof typeof translations.en] || key;\n  }\n  return (localeTranslations[key as keyof typeof localeTranslations] as string) || translations.en[key as keyof typeof translations.en] || key;\n}\n\nexport function t(locale: Locale) {\n  return (key: TranslationKey): string => getTranslation(locale, key);\n}\n`;

fs.writeFileSync(filePath, out, 'utf8');
console.log('Upserted blog UI translation keys');
