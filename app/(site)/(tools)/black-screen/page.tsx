// app/(site)/(tools)/black-screen/page.tsx

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'black-screen')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: translate(TOOL.nameKey as any),
    description: 'Open a pure black full screen to spot stuck or lit pixels, check for backlight bleed and IPS glow, and see how deep your display\x27s blacks really are.',
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function BlackScreenPage() {

  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translatedUseCases = (TOOL.useCases || []).map((key) => translate(key as any));

  const translatedFeatures = [
    translate('feature_fullscreen_pure'),
    translate('feature_keyboard_shortcuts'),
    translate('feature_all_devices'),
    translate('feature_download_png'),
    translate('feature_free_no_registration'),
  ];


  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'black-screen').slice(0, 2).map((t) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    name: translate(t.id.replace(/-/g, '_') as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <ToolLayout
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        title={translate(TOOL.nameKey as any)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description={translate(TOOL.descriptionKey as any)}
        features={translatedFeatures}
        useCases={translatedUseCases}
        relatedTools={relatedTools}
        showScreenControls
        hasDownload
      >
        <ScreenDisplay strings={getClientStrings('screenDisplay')} color="#000000" title={translate(TOOL.nameKey as any)} />
      </ToolLayout>
      <GuideSection toolId="black-screen" />
      <RelatedTools currentToolId="black-screen" />
    </>
  );
}
