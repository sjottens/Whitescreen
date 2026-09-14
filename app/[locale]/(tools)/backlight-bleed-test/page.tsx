// app/[locale]/(tools)/backlight-bleed-test/page.tsx - SEO-optimized backlight
// bleed / IPS glow test page. Built to the same standard as /dead-pixel-test:
// dedicated intro with real methodology, guide section, honest schema (no
// fabricated ratings), and FAQ schema kept in sync with the visible FAQ.

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import BacklightBleedDisplay from '@/components/tools/backlight-bleed-display';
import GuideSection from '@/components/tools/guide-section';
import BacklightBleedIntro from '@/components/tools/backlight-bleed-intro';
import RelatedReading from '@/components/tools/related-reading';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = TEST_TOOLS.find((tool) => tool.id === 'backlight-bleed-test')!;

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
    // No "| TestAScreen" suffix - the root layout's title template adds it
    // once (see the identical note on /dead-pixel-test/page.tsx).
    title: `${title} - Check IPS Glow & Light Leak`,
    description: `${description}. Tells backlight bleed apart from normal IPS glow with a simple head-tilt test. Free, no download.`,
    path: TOOL.path,
    keywords: [
      'backlight bleed test',
      'ips glow test',
      'monitor backlight bleed',
      'backlight bleed vs ips glow',
      'check monitor for light bleed',
      'monitor test',
      'display test',
    ],
  });
}

export default async function BacklightBleedTestPage({ params }: { params: Promise<{ locale: string }> }) {
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

  // FAQ Schema - kept word-for-word identical to the visible FAQ rendered
  // by <BacklightBleedIntro> below.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is backlight bleed a defect I can return the monitor for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A small amount visible only on a black screen in a dark room is normal on most LCD monitors and usually isn't covered by warranty. Bleed visible during regular content in a normally-lit room is a much stronger case for a return - check your retailer's return window.",
        },
      },
      {
        '@type': 'Question',
        name: 'Can backlight bleed be fixed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not reliably. It comes from how the panel and backlight assembly were manufactured and assembled. Some people loosen and retighten the back panel screws with mixed, inconsistent results - it is not a guaranteed fix and can void warranty if done incorrectly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does every IPS monitor have glow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, to some degree - it is a characteristic of how IPS panels are built, not a manufacturing flaw. The amount varies by panel and viewing angle, but it cannot be eliminated entirely on IPS technology.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why does my monitor look worse right out of the box?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Panels can show more bleed when cold. Let the display run for 15-20 minutes and re-test before judging - and test at a realistic brightness (30-50%), not maximum.',
        },
      },
    ],
  };

  // WebApplication schema - same shape as /dead-pixel-test and
  // /dead-pixel-fixer, minus a review rating: there's no review-collection
  // feature behind this tool, so an aggregateRating here would be
  // fabricated structured data.
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Backlight Bleed Test',
    description:
      'Free online backlight bleed and IPS glow checker. Fills the screen with pure black and includes corner guides to help you spot light leak and tell it apart from normal IPS glow.',
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

      {/* SEO-Optimized Intro Section */}
      <BacklightBleedIntro locale={locale} />

      {/* Interactive Tool */}
      <ToolLayout
        title={translate(TOOL.descriptionKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        locale={locale}
        toolName={translate(TOOL.nameKey as any)}
      >
        <BacklightBleedDisplay locale={locale as any} />
      </ToolLayout>

      {/* Detailed Guide */}
      <GuideSection toolId="backlight-bleed-test" locale={locale} />

      {/* Related Reading - Blog Articles & Guides */}
      <RelatedReading toolId="backlight-bleed-test" locale={locale} />

      {/* Related Tools for Internal Linking & Engagement */}
      <RelatedTools currentToolId="backlight-bleed-test" locale={locale} />
    </>
  );
}
