// app/(site)/(tools)/dead-pixel-test/page.tsx - Dead Pixel Test

import type { Metadata } from 'next';
import Link from 'next/link';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTests from '@/components/tools/related-tests';
import DeadPixelTest from '@/components/tools/dead-pixel-test';
import DeadPixelIntro from '@/components/tools/dead-pixel-intro';

const PATH = '/dead-pixel-test';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function DeadPixelTestPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Dead Pixel Test – Check Your Screen Online"
        intro={
          <p>
            Cycle through full-screen colors to find dead, stuck and hot pixels on any monitor, laptop, TV or
            phone. Clean the screen, click Start and look at each color for a few seconds. Checking a whole monitor?
            The <Link href="/monitor-test">complete monitor test</Link> takes you through every check in order.
          </p>
        }
      >
        <DeadPixelTest strings={getClientStrings('deadPixelTest')} />
      </ToolLayout>
      <GuideSection
        toolId="dead-pixel-test"
        extraToc={[
          { id: "what-are-dead-pixels", label: "What Are Dead Pixels?" },
          { id: "types-of-defective-pixels", label: "Types of Defective Pixels" },
          { id: "how-to-use-this-dead-pixel-test", label: "How to Use This Dead Pixel Test" },
          { id: "warranty-information", label: "Warranty Information" },
        ]}
      >
        <DeadPixelIntro />
      </GuideSection>
      <RelatedTests path={PATH} />
    </>
  );
}
