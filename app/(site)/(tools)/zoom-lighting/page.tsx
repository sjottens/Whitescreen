// app/(site)/(tools)/zoom-lighting/page.tsx

import { Metadata } from 'next';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';
import VideoCallLight from '@/components/tools/video-call-light';
import { PAGE_COPY } from '@/lib/page-copy';

const TOOL = SPECIAL_TOOLS.find((t) => t.id === 'zoom-lighting')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    ...PAGE_COPY['/zoom-lighting'],
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function ZoomLightingPage() {
  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ]);

  const translatedUseCases = (TOOL.useCases || []).map((key) => translate(key as any));

  const translatedFeatures = [
    translate('feature_fullscreen_pure'),
    translate('feature_keyboard_shortcuts'),
    translate('feature_all_devices'),
    translate('feature_free_no_registration'),
  ];

  return (
    <>
      <ToolLayout
        title={translate(TOOL.nameKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        features={translatedFeatures}
        useCases={translatedUseCases}
        showScreenControls
      >
        <VideoCallLight />
      </ToolLayout>
      <GuideSection toolId="zoom-lighting" />
    </>
  );
}
