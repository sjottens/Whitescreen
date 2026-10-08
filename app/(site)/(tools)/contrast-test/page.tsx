// app/(site)/(tools)/contrast-test/page.tsx - Contrast Test

import type { Metadata } from 'next';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTests from '@/components/tools/related-tests';
import ContrastTest from '@/components/tools/contrast-test';
import ContrastTestIntro from '@/components/tools/contrast-test-intro';

const PATH = '/contrast-test';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function ContrastTestPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Contrast Test & Text Readability Checker"
        intro={
          <p>
            See how readable text is at different contrast levels, check your own color pairs against the WCAG
            guidelines, and preview how colors look with common types of color blindness.
          </p>
        }
      >
        <ContrastTest strings={getClientStrings('contrastTest')} />
      </ToolLayout>
      <GuideSection
        toolId="contrast-test"
        extraToc={[
          { id: "what-is-display-contrast", label: "What is Display Contrast?" },
          { id: "how-to-test-monitor-contrast", label: "How to Test Monitor Contrast" },
          { id: "accessibility-matters", label: "Accessibility Matters" },
        ]}
      >
        <ContrastTestIntro />
      </GuideSection>
      <RelatedTests path={PATH} />
    </>
  );
}
