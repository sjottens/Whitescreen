// app/[locale]/(website)/blog/page.tsx - Locale-specific blog homepage
import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, getLocaleUrl, generateHrefLangAlternates, LOCALE_METADATA, type Locale } from '@/lib/i18n';
import { BlogHomepage } from '@/components/blog/blog-homepage';
import { getFeaturedArticles, getBlogArticlesByCluster, allBlogArticles } from '@/lib/blog-content';
import { t } from '@/lib/translations';

interface LocaleBlogPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateStaticParams() {
  return ['nl', 'es', 'de'].map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({
  params,
}: LocaleBlogPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const localeInfo = LOCALE_METADATA[locale];

  // Localized titles and descriptions
  const titles: Record<string, string> = {
    nl: 'Schermtest Blog | Gratis Displaytest Gidsen',
    es: 'Blog de Prueba de Pantalla | Guías Gratuitas de Prueba de Pantalla',
    de: 'Bildschirmtest Blog | Kostenlose Display-Test-Anleitungen',
  };

  const descriptions: Record<string, string> = {
    nl: 'Leer alles over schermtesten, dode pixels, kleurnauwkeurigheid, monitordiagnostiek en display-probleemoplossing. Praktische gidsen voor monitor-kopers en IT-professionals.',
    es: 'Aprenda sobre pruebas de pantalla, píxeles muertos, precisión del color, diagnóstico de monitores y solución de problemas de pantalla. Guías de expertos para compradores de monitores y profesionales de TI.',
    de: 'Erfahren Sie mehr über Bildschirmtests, tote Pixel, Farbgenauigkeit, Monitordiagnose und Display-Fehlerbehebung. Expertenleitfäden für Monitor-Käufer und IT-Profis.',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: getLocaleUrl(locale, '/blog'),
      languages: generateHrefLangAlternates('/blog'),
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      type: 'website',
      url: getLocaleUrl(locale, '/blog'),
      locale: localeInfo.hreflang,
    },
  };
}

export default function LocaleBlogPage({ params: paramsPromise }: LocaleBlogPageProps) {
  const { locale } = React.use(paramsPromise);
  const translate = t(locale as Locale);

  if (!isValidLocale(locale)) {
    notFound();
  }

  const featured = getFeaturedArticles();
  const latest = allBlogArticles
    .filter((a) => !a.featured)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, 6);

  // Localized category names
  const categoryNames: Record<string, Record<string, string>> = {
    nl: {
      'pixel-problems': 'Pixelproblemen',
      'screen-testing': 'Schermtest',
      'color-quality': 'Kleur & Beeldkwaliteit',
      troubleshooting: 'Probleemoplossing',
      'buying-guides': 'Koopgidsen',
      educational: 'Educatief',
    },
    es: {
      'pixel-problems': 'Problemas de Píxeles',
      'screen-testing': 'Prueba de Pantalla',
      'color-quality': 'Color y Calidad de Imagen',
      troubleshooting: 'Solución de Problemas',
      'buying-guides': 'Guías de Compra',
      educational: 'Educativo',
    },
    de: {
      'pixel-problems': 'Pixelprobleme',
      'screen-testing': 'Bildschirmtest',
      'color-quality': 'Farbe und Bildqualität',
      troubleshooting: 'Fehlerbehebung',
      'buying-guides': 'Kaufanleitungen',
      educational: 'Bildung',
    },
  };

  const categories = [
    {
      id: 'pixel-problems',
      name: categoryNames[locale]?.['pixel-problems'] || 'Pixel Problems',
      description: categoryNames[locale]?.['pixel-problems'] || 'Pixel Problems',
      articleCount: getBlogArticlesByCluster('pixel-problems').length,
    },
    {
      id: 'screen-testing',
      name: categoryNames[locale]?.['screen-testing'] || 'Screen Testing',
      description: categoryNames[locale]?.['screen-testing'] || 'Screen Testing',
      articleCount: getBlogArticlesByCluster('screen-testing').length,
    },
    {
      id: 'color-quality',
      name: categoryNames[locale]?.['color-quality'] || 'Color & Quality',
      description: categoryNames[locale]?.['color-quality'] || 'Color & Quality',
      articleCount: getBlogArticlesByCluster('color-quality').length,
    },
    {
      id: 'troubleshooting',
      name: categoryNames[locale]?.troubleshooting || 'Troubleshooting',
      description: categoryNames[locale]?.troubleshooting || 'Troubleshooting',
      articleCount: getBlogArticlesByCluster('troubleshooting').length,
    },
    {
      id: 'buying-guides',
      name: categoryNames[locale]?.['buying-guides'] || 'Buying Guides',
      description: categoryNames[locale]?.['buying-guides'] || 'Buying Guides',
      articleCount: getBlogArticlesByCluster('buying-guides').length,
    },
    {
      id: 'educational',
      name: categoryNames[locale]?.educational || 'Educational',
      description: categoryNames[locale]?.educational || 'Educational',
      articleCount: getBlogArticlesByCluster('educational').length,
    },
  ];

  const featuredPreview = featured.map((a) => ({
    slug: a.slug,
    title: a.translations[locale]?.title || a.translations.en.title,
    excerpt: (a.translations[locale]?.content?.introduction || a.content.introduction).substring(0, 150) + '...',
    publishedAt: a.publishedAt,
    readingTimeMinutes: a.readingTimeMinutes,
    cluster: a.cluster,
    featured: a.featured,
  }));

  const latestPreview = latest.map((a) => ({
    slug: a.slug,
    title: a.translations[locale]?.title || a.translations.en.title,
    excerpt: (a.translations[locale]?.content?.introduction || a.content.introduction).substring(0, 150) + '...',
    publishedAt: a.updatedAt || a.publishedAt,
    readingTimeMinutes: a.readingTimeMinutes,
    cluster: a.cluster,
    featured: a.featured,
  }));

  const allArticlesPreview = allBlogArticles.map((a) => ({
    slug: a.slug,
    title: a.translations[locale]?.title || a.translations.en.title,
    excerpt: (a.translations[locale]?.content?.introduction || a.content.introduction).substring(0, 150) + '...',
    publishedAt: a.publishedAt,
    readingTimeMinutes: a.readingTimeMinutes,
    cluster: a.cluster,
    featured: a.featured,
  }));

  const titles: Record<string, string> = {
    nl: 'Schermtest Blog',
    es: 'Blog de Prueba de Pantalla',
    de: 'Bildschirmtest Blog',
  };

  const subtitles: Record<string, string> = {
    nl: 'Deskundige gidsen voor displaydiagnostiek, dode pixels, monitortest en meer',
    es: 'Guías de expertos para diagnóstico de pantalla, píxeles muertos, prueba de monitor y más',
    de: 'Expertenleitfäden für Display-Diagnose, tote Pixel, Monitortest und mehr',
  };

  return (
    <Suspense fallback={<div className="w-full py-20 text-center">{translate('common_loading' as any)}</div>}>
      <BlogHomepage
        title={titles[locale] || titles.en}
        subtitle={subtitles[locale] || subtitles.en}
        featuredArticles={featuredPreview}
        latestArticles={latestPreview}
        allArticles={allArticlesPreview}
        categories={categories}
        locale={locale}
      />
    </Suspense>
  );
}
