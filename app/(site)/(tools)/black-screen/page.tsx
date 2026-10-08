// app/(site)/(tools)/black-screen/page.tsx - Black Screen

import type { Metadata } from 'next';
import Link from 'next/link';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTests from '@/components/tools/related-tests';
import ScreenDisplay from '@/components/tools/screen-display';

const PATH = '/black-screen';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function BlackScreenPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Black Screen Online – Full Screen Black"
        intro={
          <p>
            Press F to fill your screen with pure black. Lit dots are stuck or hot pixels, and light along the
            edges is backlight bleed or IPS glow. The <Link href="/backlight-bleed-test">backlight bleed test</Link>{' '}
            adds corner markers if you want to look closer.
          </p>
        }
      >
        <ScreenDisplay strings={getClientStrings('screenDisplay')} color="#000000" title="black-screen" />
      </ToolLayout>
      <GuideSection toolId="black-screen" />
      <RelatedTests path={PATH} />
    </>
  );
}
