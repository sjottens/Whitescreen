// app/(site)/(tools)/white-screen/page.tsx - White screen tool page

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';
import { PAGE_COPY } from '@/lib/page-copy';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'white-screen')!;

export async function generateMetadata(): Promise<Metadata> {

  return pageMetadata({
    ...PAGE_COPY['/white-screen'],
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function WhiteScreenPage() {


  // Breadcrumb schema for structured data
  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate('white_screen'), path: '/white-screen' },
    ]);

  // Translate use cases from translation keys
  const translatedUseCases = (TOOL.useCases || []).map((key) => translate(key as any));

  // Translate features using translation keys
  const translatedFeatures = [
    translate('feature_fullscreen_pure'),
    translate('feature_keyboard_shortcuts'),
    translate('feature_all_devices'),
    translate('feature_download_png'),
    translate('feature_free_no_registration'),
  ];


  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'white-screen').slice(0, 2).map((t) => ({
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
          <ScreenDisplay strings={getClientStrings('screenDisplay')} color="#FFFFFF" title={translate(TOOL.nameKey as any)} />
      </ToolLayout>
      <GuideSection toolId="white-screen" />
      <RelatedTools currentToolId="white-screen" />
    </>
  );
}
