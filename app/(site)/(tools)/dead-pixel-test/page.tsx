// app/(site)/(tools)/dead-pixel-test/page.tsx - SEO-optimized dead pixel test page

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Monitor } from 'lucide-react';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import DeadPixelTest from '@/components/tools/dead-pixel-test';
import GuideSection from '@/components/tools/guide-section';
import DeadPixelHero from '@/components/tools/dead-pixel-hero';
import DeadPixelIntro from '@/components/tools/dead-pixel-intro';
import RelatedReading from '@/components/tools/related-reading';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = TEST_TOOLS.find((t) => t.id === 'dead-pixel-test')!;

export async function generateMetadata(): Promise<Metadata> {
  const title = translate(TOOL.nameKey as any);

  return pageMetadata({
    // No "| TestaScreen" suffix here - pageMetadata leaves
    // the title unsuffixed and the root layout's title template adds it
    // exactly once. Hardcoding it here too produced a duplicated site name.
    title: `${title} - Free Online Tool`,
    description: 'Find dead, stuck and hot pixels on any screen. Cycle through full-screen test colors in your browser. Free, nothing to install, works on any device.',
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

export default async function DeadPixelTestPage() {
  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ]);

  // FAQ Schema for SEO - kept word-for-word identical to the visible FAQ
  // rendered by <DeadPixelIntro> below. These previously drifted (schema had
  // 3 different questions than the 4 shown on the page), which is exactly
  // what Google's structured-data guidelines flag as a mismatch between
  // markup and visible content.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can dead pixels be fixed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dead pixels are usually permanent hardware failures and cannot be repaired. Stuck pixels are different - they sometimes respond to software fixes or physical pressure. Not sure which one you have? Our Dead Pixel Fixer tool below can help attempt a repair.',
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
        name: 'Is this test accurate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, this is a comprehensive color-cycling test that makes defective pixels highly visible. It is the most effective method for detecting dead and stuck pixels.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need fullscreen mode?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fullscreen mode ensures you are testing the entire display surface and eliminates distractions from the browser UI.',
        },
      },
    ],
  };

  // HowTo Schema - kept word-for-word identical to the visible "How to Use
  // This Dead Pixel Test" steps rendered by <DeadPixelIntro> below, for the
  // same reason the FAQ schema above mirrors its visible FAQ: structured
  // data that doesn't match on-page content is what Google's guidelines flag.
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use This Dead Pixel Test',
    description: 'Test your display for dead, stuck, and hot pixels using a color-cycling fullscreen test.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Clean Your Screen',
        text: 'Use a soft, lint-free cloth to gently clean your screen. Remove any dust or smudges.',
      },
      {
        '@type': 'HowToStep',
        name: 'Start the Test',
        text: 'Click "Start Test" and press F11 for fullscreen mode (recommended for best results).',
      },
      {
        '@type': 'HowToStep',
        name: 'Look Carefully',
        text: "Spend 10-15 seconds on each color. Look for spots that don't match the background color.",
      },
      {
        '@type': 'HowToStep',
        name: 'Document Issues',
        text: 'Take photos of any dead pixels found. Note their location for warranty claims.',
      },
    ],
  };

  // WebApplication schema - mirrors the schema already on /dead-pixel-fixer so
  // both tool pages carry equivalent "free tool" signals for rich results.
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dead Pixel Test',
    description: 'Free online dead pixel and stuck pixel detector. Cycles through multiple color backgrounds to reveal defective pixels on any display.',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    // aggregateRating intentionally omitted - there is no review-collection
    // feature behind this tool, so a star rating here would be fabricated
    // structured data. See lib/seo.ts for the fuller note.
  };

  return (
    <>
      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
        suppressHydrationWarning
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        suppressHydrationWarning
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        suppressHydrationWarning
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Compact header - test starts immediately below, no scrolling
          required. The full educational explainer (what are dead pixels,
          how to use, FAQ, warranty) moved below the tool - see
          <DeadPixelIntro> further down. */}
      <DeadPixelHero />

      {/* Interactive Tool */}
      <ToolLayout
        description={translate(TOOL.descriptionKey as any)}
        toolName={translate(TOOL.nameKey as any)}
      >
        <DeadPixelTest strings={getClientStrings('deadPixelTest')} />
      </ToolLayout>

      {/* Flagship-to-pillar link: dead-pixel-test is the flagship page,
          /monitor-test is the full testing hub it should feed into. */}
      <div className="container">
        <Link
          href={'/monitor-test'}
          className="group flex items-center justify-between gap-4 my-8 rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 hover:border-blue-300 hover:bg-blue-100/60 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Monitor className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <p className="text-sm md:text-base text-slate-700">{translate('dead_pixel_test_pillar_banner' as any)}</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 whitespace-nowrap">
            {translate('dead_pixel_test_pillar_banner_cta' as any)}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
      </div>

      {/* Full educational explainer - what are dead/stuck pixels, how to
          use this test, FAQ, warranty info. Now below the tool so it adds
          SEO depth without delaying the test itself. */}
      <DeadPixelIntro />

      {/* Detailed Guide */}
      <GuideSection toolId="dead-pixel-test" />

      {/* Related Reading - Blog Articles & Guides */}
      <RelatedReading strings={getClientStrings('relatedReading')} toolId="dead-pixel-test" />

      {/* Related Tools for Internal Linking & Engagement */}
      <RelatedTools currentToolId="dead-pixel-test" />
    </>
  );
}
