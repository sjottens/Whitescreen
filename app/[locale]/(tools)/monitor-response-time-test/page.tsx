// app/[locale]/(tools)/monitor-response-time-test/page.tsx - Response time /
// ghosting test page. Same standard as /dead-pixel-test and
// /backlight-bleed-test: dedicated intro, honest schema, FAQ synced to the
// visible page.

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import MotionTestDisplay from '@/components/tools/motion-test-display';
import GuideSection from '@/components/tools/guide-section';
import ResponseTimeIntro from '@/components/tools/response-time-intro';
import RelatedReading from '@/components/tools/related-reading';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = TEST_TOOLS.find((tool) => tool.id === 'response-time-test')!;

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
    title: `${title} - Free Online Tool`,
    description: `${description}. Spot ghosting, overshoot, and motion blur, and check your overdrive setting. Free, no download.`,
    path: TOOL.path,
    keywords: [
      'monitor response time test',
      'ghosting test',
      'monitor ghosting test',
      'motion blur test',
      'overdrive test',
      'pixel response time',
      'gaming monitor test',
    ],
  });
}

export default async function ResponseTimeTestPage({ params }: { params: Promise<{ locale: string }> }) {
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

  // FAQ Schema - kept word-for-word identical to the visible FAQ in
  // <ResponseTimeIntro> below.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Can this tool tell me my monitor's response time in milliseconds?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Milliseconds require a high-speed camera or dedicated test hardware. This tool is a visual check for ghosting and overshoot - useful for spotting a real problem or comparing settings, not for verifying a spec sheet number.',
        },
      },
      {
        '@type': 'Question',
        name: 'I see ghosting - is my monitor defective?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Usually not. Check the overdrive (OD) setting in your monitor's on-screen menu first - it's the most common fixable cause. If ghosting persists at every overdrive setting and is much worse than similar monitors, that's a stronger signal of a genuine panel issue.",
        },
      },
      {
        '@type': 'Question',
        name: 'Why does the trail change when I change the overdrive setting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Overdrive works by overdriving the voltage sent to pixels to make them switch color faster. Too little and you get ghosting (trailing); too much and you get overshoot (a halo leading ahead of the object). The right setting depends on your specific panel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does a higher refresh rate fix ghosting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "It helps with motion blur (because each frame is shown for less time) but doesn't fix true ghosting, which comes from how fast the pixels themselves can change color - a panel response time issue, not a refresh rate issue.",
        },
      },
    ],
  };

  // WebApplication schema - no aggregateRating, same reasoning as every
  // other tool page fixed/built in this pass: no review-collection feature
  // exists behind this tool.
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Monitor Response Time & Ghosting Test',
    description:
      'Free online ghosting and motion blur checker. Moves a striped block across the screen at adjustable speed so you can spot ghosting, overshoot, and motion blur, and compare your monitor\'s overdrive settings.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <ResponseTimeIntro locale={locale} />

      <ToolLayout
        title={translate(TOOL.descriptionKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        locale={locale}
        toolName={translate(TOOL.nameKey as any)}
      >
        <MotionTestDisplay locale={locale as any} />
      </ToolLayout>

      <GuideSection toolId="response-time-test" locale={locale} />

      <RelatedReading toolId="response-time-test" locale={locale} />

      <RelatedTools currentToolId="response-time-test" locale={locale} />
    </>
  );
}
