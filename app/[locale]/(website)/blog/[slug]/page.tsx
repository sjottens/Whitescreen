// app/[locale]/(website)/blog/[slug]/page.tsx - Locale-specific blog article page
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import Link from 'next/link';
import { isValidLocale, getLocaleUrl, generateHrefLangAlternates, Locale } from '@/lib/i18n';
import { getBlogArticleBySlug, getRelatedArticles, allBlogArticles } from '@/lib/blog-content';
import { BlogArticleLayout } from '@/components/blog/blog-article-layout';
import { SITE_URL } from '@/lib/constants';

interface LocaleBlogArticlePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  const locales: Locale[] = ['nl', 'es', 'de', 'fr', 'it', 'pt', 'ja'];

  allBlogArticles.forEach((article) => {
    locales.forEach((locale) => {
      params.push({
        locale,
        slug: article.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: LocaleBlogArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const articleTranslations = article.translations[locale as Locale] || article.translations.en;
  const { publishedAt, updatedAt } = article;

  const canonicalPath = locale === 'en' ? article.seo.canonicalPath : `/${locale}${article.seo.canonicalPath}`;

  return {
    title: articleTranslations.metaTitle,
    description: articleTranslations.metaDescription,
    keywords: [articleTranslations.keyword, 'screen testing', 'monitor testing'],
    authors: [{ name: 'TestAScreen Team' }],
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: generateHrefLangAlternates(article.seo.canonicalPath),
    },
    openGraph: {
      title: articleTranslations.metaTitle,
      description: articleTranslations.metaDescription,
      type: 'article',
      url: `${SITE_URL}${canonicalPath}`,
      authors: ['TestAScreen'],
      publishedTime: new Date(publishedAt).toISOString(),
      modifiedTime: new Date(updatedAt).toISOString(),
      locale: locale,
      tags: [articleTranslations.keyword, 'display', 'monitor', 'screen'],
    },
    twitter: {
      card: 'summary_large_image',
      title: articleTranslations.metaTitle,
      description: articleTranslations.metaDescription,
    },
  };
}

export default function LocaleBlogArticlePage({
  params: paramsPromise,
}: LocaleBlogArticlePageProps) {
  const { locale: localeParam, slug } = React.use(paramsPromise);

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { content, toolCTAs, schemaType, faqItems: enFaqItems, publishedAt, updatedAt } = article;
  const articleTranslations = article.translations[locale] || article.translations.en;
  const relatedArticles = getRelatedArticles(article.id, 3);

  // Use locale-specific content if available, otherwise fallback to English
  const displayContent = articleTranslations.content || content;
  const displayToolCTAs = toolCTAs.map((cta, i) => ({
    ...cta,
    context: articleTranslations.toolCTAs?.[i]?.context || cta.context,
  }));
  const displayFaqItems = articleTranslations.faqItems || enFaqItems;

  const canonicalPath = locale === 'en' ? article.seo.canonicalPath : `/${locale}${article.seo.canonicalPath}`;

  // Generate Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: articleTranslations.title,
    description: articleTranslations.metaDescription,
    image: `${SITE_URL}/og-image.png`,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Organization',
      name: 'TestAScreen',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TestAScreen',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    inLanguage: locale,
  };

  // Generate FAQ Schema if applicable
  const faqSchema =
    schemaType === 'FAQPage' && displayFaqItems
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: displayFaqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  const breadcrumbLabels: Record<Locale, { home: string; blog: string }> = {
    en: { home: 'Home', blog: 'Blog' },
    nl: { home: 'Startpagina', blog: 'Blog' },
    es: { home: 'Inicio', blog: 'Blog' },
    de: { home: 'Startseite', blog: 'Blog' },
    fr: { home: 'Accueil', blog: 'Blog' },
    it: { home: 'Home', blog: 'Blog' },
    pt: { home: 'Início', blog: 'Blog' },
    ja: { home: 'ホーム', blog: 'ブログ' },
  };

  const labels = breadcrumbLabels[locale] || breadcrumbLabels.en;
  const baseBlogUrl = locale === 'en' ? '/blog' : `/${locale}/blog`;

  const breadcrumbs = [
    { label: labels.home, href: locale === 'en' ? '/' : `/${locale}` },
    { label: labels.blog, href: baseBlogUrl },
    { label: articleTranslations.title, href: canonicalPath },
  ];

  const relatedPreview = relatedArticles.map((a) => ({
    title: a.translations[locale]?.title || a.translations.en.title,
    slug: a.slug,
    excerpt: (a.translations[locale]?.content?.introduction || a.content.introduction).substring(0, 100) + '...',
    readingTime: a.readingTimeMinutes,
  }));

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        suppressHydrationWarning
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          suppressHydrationWarning
        />
      )}

      <BlogArticleLayout
        title={articleTranslations.title}
        metaTitle={articleTranslations.metaTitle}
        metaDescription={articleTranslations.metaDescription}
        h1={articleTranslations.h1}
        publishedAt={publishedAt}
        updatedAt={updatedAt}
        readingTimeMinutes={article.readingTimeMinutes}
        breadcrumbs={breadcrumbs}
        relatedArticles={relatedPreview}
        locale={locale}
      >
        {/* Article Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <p className="text-lg leading-relaxed text-gray-700">
            {displayContent.introduction}
          </p>

          {/* Sections */}
          {displayContent.sections.map((section, index) => (
            <div key={index} id={`section-${index}`}>
              <h2 className="text-3xl font-bold mt-12 mb-6">{section.h2}</h2>

              {/* Subheadings */}
              {section.h3s && section.h3s.length > 0 && (
                <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">
                    In this section:
                  </h3>
                  <ul className="space-y-1">
                    {section.h3s.map((h3, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        {h3}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section Content */}
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {section.content}
              </p>

              {/* Tool CTA for this section if applicable */}
              {displayToolCTAs.some((cta) => cta.placement === 'within-content') &&
                index === Math.floor(displayContent.sections.length / 2) && (
                  <div className="my-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 mb-2">
                      Test Your Display Now
                    </h3>
                    <p className="text-blue-800 text-sm mb-4">
                      {displayToolCTAs[0]?.context}
                    </p>
                    <Link
                      href={locale === 'en' ? '/tools' : `/${locale}/tools`}
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      Try Testing Tools
                    </Link>
                  </div>
                )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">{displayContent.conclusion}</p>
          </div>

          {/* FAQ Section if available */}
          {displayFaqItems && displayFaqItems.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-3xl font-bold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {displayFaqItems.map((item, index) => (
                  <details
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border"
                  >
                    <summary className="font-bold cursor-pointer">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </BlogArticleLayout>
    </>
  );
}
