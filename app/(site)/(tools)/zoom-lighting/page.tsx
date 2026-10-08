// app/(site)/(tools)/zoom-lighting/page.tsx - Video Call Light

import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import RelatedTests from '@/components/tools/related-tests';
import VideoCallLight from '@/components/tools/video-call-light';

const PATH = '/zoom-lighting';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY[PATH], path: PATH });

export default function VideoCallLightPage() {
  return (
    <>
      <ToolLayout
        path={PATH}
        title="Video Call Light – Light Your Face With Your Screen"
        intro={
          <p>
            Turn a spare screen into a soft light for Zoom, Teams or Meet. Pick a color temperature, set the
            brightness and go full screen, then check the result with the{' '}
            <Link href="/webcam-test">webcam test</Link>.
          </p>
        }
      >
        <VideoCallLight />
      </ToolLayout>
      <GuideSection toolId="zoom-lighting" />
      <RelatedTests path={PATH} />
    </>
  );
}
