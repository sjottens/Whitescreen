// app/(site)/(tools)/backlight-bleed-test/page.tsx - Backlight Bleed Test

import type { Metadata } from 'next';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTests from '@/components/tools/related-tests';
import BacklightBleedDisplay from '@/components/tools/backlight-bleed-display';
import BacklightBleedIntro from '@/components/tools/backlight-bleed-intro';

const PATH = '/backlight-bleed-test';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function BacklightBleedTestPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Backlight Bleed Test & IPS Glow Checker"
        intro={
          <p>
            Fill your screen with near-black and check the edges and corners for light that shouldn&apos;t be
            there. The guide below explains how to tell backlight bleed, a hardware defect, apart from IPS glow, which
            is normal.
          </p>
        }
      >
        <BacklightBleedDisplay strings={getClientStrings('backlightBleedDisplay')} />
      </ToolLayout>
      <GuideSection
        toolId="backlight-bleed-test"
        extraToc={[
          { id: "backlight-bleed-vs-ips-glow", label: "Backlight Bleed vs. IPS Glow" },
          { id: "the-10-second-test", label: "The 10-Second Test" },
        ]}
      >
        <BacklightBleedIntro />
      </GuideSection>
      <RelatedTests path={PATH} />
    </>
  );
}
