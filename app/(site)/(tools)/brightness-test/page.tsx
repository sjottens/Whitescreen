// app/(site)/(tools)/brightness-test/page.tsx - Brightness Test

import type { Metadata } from 'next';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';
import BrightnessTest from '@/components/tools/brightness-test';
import BrightnessTestIntro from '@/components/tools/brightness-test-intro';

const PATH = '/brightness-test';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function BrightnessTestPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Monitor Brightness Test – Gamma, Black and White Levels"
        intro={
          <p>
            Check that your monitor shows every step from black to white, whether its gamma looks right and
            whether brightness is even across the panel. Adjust the monitor&apos;s brightness and contrast while you
            watch the patterns.
          </p>
        }
      >
        <BrightnessTest strings={getClientStrings('brightnessTest')} />
      </ToolLayout>
      <GuideSection
        toolId="brightness-test"
        extraToc={[
          { id: "what-is-a-brightness-test", label: "What is a Brightness Test?" },
          { id: "how-to-use-this-brightness-test", label: "How to Use This Brightness Test" },
        ]}
      >
        <BrightnessTestIntro />
      </GuideSection>
      <RelatedTools currentToolId="brightness-test" />
    </>
  );
}
