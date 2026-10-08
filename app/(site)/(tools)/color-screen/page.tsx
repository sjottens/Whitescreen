// app/(site)/(tools)/color-screen/page.tsx - Color Screen
// Replaces the old one-page-per-color screens (/red-screen, /green-screen...),
// which redirect here with ?color=<id>.

import type { Metadata } from 'next';
import Link from 'next/link';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTests from '@/components/tools/related-tests';
import ScreenDisplay from '@/components/tools/screen-display';
import { COLOR_SWATCHES } from '@/lib/constants';

const PATH = '/color-screen';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function ColorScreenPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Color Screen – Red, Green, Blue and Custom"
        intro={
          <p>
            Pick a color and press F to fill your screen with it. Red, green and blue each light a single
            subpixel, which makes them the surest way to find a stuck or dead subpixel. Prefer an automatic run? The{' '}
            <Link href="/dead-pixel-test">dead pixel test</Link> cycles through them for you.
          </p>
        }
      >
        <ScreenDisplay
          strings={getClientStrings('screenDisplay')}
          color={COLOR_SWATCHES[0].hex}
          title="color-screen"
          swatches={COLOR_SWATCHES}
        />
      </ToolLayout>
      <GuideSection toolId="color-screen" />
      <RelatedTests path={PATH} />
    </>
  );
}
