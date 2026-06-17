// app/(website)/blog/[slug]/page.tsx - English blog article page
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogArticleBySlug, getRelatedArticles, allBlogArticles } from '@/lib/blog-content';
import { BlogArticleLayout } from '@/components/blog/blog-article-layout';
import { generateHrefLangAlternates } from '@/lib/i18n';
import { SITE_URL } from '@/lib/constants';
import Script from 'next/script';
import Link from 'next/link';
import { t } from '@/lib/translations';

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allBlogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const { seo, translations, publishedAt, updatedAt } = article;
  const enSeo = seo;
  const enTranslations = translations.en;

  return {
    title: enSeo.metaTitleEn,
    description: enSeo.metaDescriptionEn,
    keywords: [enSeo.keywordEn, 'screen testing', 'monitor testing'],
    authors: [{ name: 'TestAScreen Team' }],
    alternates: {
      canonical: `${SITE_URL}${enSeo.canonicalPath}`,
      languages: generateHrefLangAlternates(enSeo.canonicalPath),
    },
    openGraph: {
      title: enSeo.metaTitleEn,
      description: enSeo.metaDescriptionEn,
      type: 'article',
      url: `${SITE_URL}${enSeo.canonicalPath}`,
      authors: ['TestAScreen'],
      publishedTime: new Date(publishedAt).toISOString(),
      modifiedTime: new Date(updatedAt).toISOString(),
      locale: 'en_US',
      tags: [enSeo.keywordEn, 'display', 'monitor', 'screen'],
    },
    twitter: {
      card: 'summary_large_image',
      title: enSeo.metaTitleEn,
      description: enSeo.metaDescriptionEn,
    },
  };
}

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const translate = t('en');
  const { slug } = React.use(params);
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { seo, translations, content, toolCTAs, schemaType, faqItems: enFaqItems } = article;
  const enTranslations = translations.en;
  
  // Use English translations' content if available, otherwise fallback to article.content
  const displayContent = enTranslations.content || content;
  const displayToolCTAs = toolCTAs.map((cta, i) => ({
    ...cta,
    context: enTranslations.toolCTAs?.[i]?.context || cta.context,
  }));
  const displayFaqItems = enTranslations.faqItems || enFaqItems;
  
  const relatedArticles = getRelatedArticles(article.id, 3);

  // Generate Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: enTranslations.title,
    description: enTranslations.metaDescription,
    image: `${SITE_URL}/og-image.png`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
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

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: enTranslations.title, href: seo.canonicalPath },
  ];

  const sectionLabels = {
    inThisSection: translate('blog_section_in_this_section' as any),
    conclusion: translate('blog_section_conclusion' as any),
    faq: translate('blog_section_faq' as any),
  };

  const relatedPreview = relatedArticles.map((a) => ({
    title: a.translations.en.title,
    slug: a.slug,
    excerpt: (a.translations.en.content?.introduction || a.content.introduction).substring(0, 100) + '...',
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
        title={enTranslations.title}
        metaTitle={enTranslations.metaTitle}
        metaDescription={enTranslations.metaDescription}
        h1={enTranslations.h1}
        publishedAt={article.publishedAt}
        updatedAt={article.updatedAt}
        readingTimeMinutes={article.readingTimeMinutes}
        breadcrumbs={breadcrumbs}
        relatedArticles={relatedPreview}
        locale="en"
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
                    {sectionLabels.inThisSection}
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
                      {translate('blog_inline_cta_title' as any)}
                    </h3>
                    <p className="text-blue-800 text-sm mb-4">
                      {displayToolCTAs[0]?.context}
                    </p>
                    <Link
                      href="/tools"
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      {translate('blog_inline_cta_button' as any)}
                    </Link>
                  </div>
                )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-3xl font-bold mb-6">{sectionLabels.conclusion}</h2>
            <p className="text-gray-700 leading-relaxed">{displayContent.conclusion}</p>
          </div>

          {/* FAQ Section if available */}
          {displayFaqItems && displayFaqItems.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h2 className="text-3xl font-bold mb-6">
                {sectionLabels.faq}
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
