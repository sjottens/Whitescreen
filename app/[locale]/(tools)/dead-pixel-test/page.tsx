// app/[locale]/(tools)/dead-pixel-test/page.tsx - SEO-optimized dead pixel test page

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import DeadPixelTest from '@/components/tools/dead-pixel-test';
import GuideSection from '@/components/tools/guide-section';
import DeadPixelIntro from '@/components/tools/dead-pixel-intro';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = TEST_TOOLS.find((t) => t.id === 'dead-pixel-test')!;

export async function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);
  const title = translate(TOOL.nameKey as any);
  const description = translate(TOOL.descriptionKey as any);

  return generateMultilingualMetadata({
    locale,
    title: `${title} - Free Online Tool | TestaScreen`,
    description: `${description} Detect stuck pixels, dead pixels, and hot pixels on your display instantly. Free, no registration required.`,
    path: TOOL.path,
    keywords: [
      'dead pixel test',
      'dead pixel detector',
      'stuck pixel test',
      'hot pixel test',
      'pixel test online',
      'free pixel tester',
      'display test',
      'monitor test',
      'screen test',
    ],
  });
}

export default async function DeadPixelTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ],
    locale
  );

  // FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can dead pixels be fixed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dead pixels are usually permanent hardware failures. Stuck pixels sometimes respond to software fixes or physical pressure, but dead pixels cannot be repaired.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many dead pixels are acceptable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most manufacturers allow 0-8 dead pixels depending on the warranty terms. Check your warranty for specifics.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find dead pixels on my display?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use a color-cycling dead pixel test like ours. Clean your screen, start the test, and look carefully for spots that do not match the background color on each test screen.',
        },
      },
    ],
  };

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* SEO-Optimized Intro Section */}
      <DeadPixelIntro locale={locale} />

      {/* Interactive Tool */}
      <ToolLayout
        title={translate(TOOL.descriptionKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        locale={locale}
        toolName={translate(TOOL.nameKey as any)}
      >
        <DeadPixelTest locale={locale as any} />
      </ToolLayout>

      {/* Detailed Guide */}
      <GuideSection toolId="dead-pixel-test" locale={locale} />

      {/* Related Tools for Internal Linking & Engagement */}
      <RelatedTools currentToolId="dead-pixel-test" locale={locale} />
    </>
  );
}
