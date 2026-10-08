// app/(site)/(tools)/white-screen/page.tsx - White Screen

import type { Metadata } from 'next';
import Link from 'next/link';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';
import ScreenDisplay from '@/components/tools/screen-display';

const PATH = '/white-screen';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function WhiteScreenPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="White Screen Online – Full Screen White"
        intro={
          <p>
            Click the white area or press F to fill your whole screen with pure white. It shows dead pixels as
            black dots, makes dust and smudges easy to spot and reveals uneven brightness. For stuck pixels, also run
            the <Link href="/black-screen">black screen</Link> and the{' '}
            <Link href="/color-screen">red, green and blue screens</Link>.
          </p>
        }
      >
        <ScreenDisplay strings={getClientStrings('screenDisplay')} color="#FFFFFF" title="white-screen" />
      </ToolLayout>
      <GuideSection toolId="white-screen" />
      <RelatedTools currentToolId="white-screen" />
    </>
  );
}
