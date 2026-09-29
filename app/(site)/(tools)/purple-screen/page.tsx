// app/(site)/(tools)/purple-screen/page.tsx

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'purple-screen')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: translate(TOOL.nameKey as any),
    description: 'Turn your display into a solid purple full screen for creative lighting in photos and video, or download it as a PNG background.',
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function PurpleScreenPage() {
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
    translate('feature_download_png'),
    translate('feature_free_no_registration'),
  ];


  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'purple-screen').slice(0, 2).map((t) => ({
    name: translate(t.nameKey as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <ToolLayout
        title={translate(TOOL.nameKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        features={translatedFeatures}
        useCases={translatedUseCases}
        relatedTools={relatedTools}
        showScreenControls
        hasDownload
      >
        <ScreenDisplay strings={getClientStrings('screenDisplay')} color="#800080" title={translate(TOOL.nameKey as any)} />
      </ToolLayout>
      <GuideSection toolId="purple-screen" />
      <RelatedTools currentToolId="purple-screen" />
    </>
  );
}
