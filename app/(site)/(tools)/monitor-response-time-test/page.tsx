// app/(site)/(tools)/monitor-response-time-test/page.tsx - Response Time Test

import type { Metadata } from 'next';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';
import MotionTestDisplay from '@/components/tools/motion-test-display';
import ResponseTimeIntro from '@/components/tools/response-time-intro';

const PATH = '/monitor-response-time-test';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function ResponseTimeTestPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Monitor Response Time & Ghosting Test"
        intro={
          <p>
            A striped block moves across your screen so you can watch for ghosting, motion blur and overshoot in
            real time. Pick a speed and a background, and watch what trails behind it.
          </p>
        }
      >
        <MotionTestDisplay strings={getClientStrings('motionTestDisplay')} />
      </ToolLayout>
      <GuideSection
        toolId="response-time-test"
        extraToc={[
          { id: "what-youre-actually-looking-at", label: "What You're Actually Looking At" },
          { id: "before-you-blame-the-monitor", label: "Before You Blame the Monitor" },
        ]}
      >
        <ResponseTimeIntro />
      </GuideSection>
      <RelatedTools currentToolId="response-time-test" />
    </>
  );
}
