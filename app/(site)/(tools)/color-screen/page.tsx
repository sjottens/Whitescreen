// app/(site)/(tools)/color-screen/page.tsx - Full-screen colors with a picker.
// Replaces the old one-page-per-color screens (/red-screen, /green-screen...),
// which redirect here with ?color=<id>.

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { COLOR_TOOLS, COLOR_SWATCHES } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';
import GuideSection from '@/components/tools/guide-section';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'color-screen')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: 'Color Screen: Red, Green, Blue & Custom Full Screen',
    description: 'Switch your screen to pure red, green, blue or any custom color to find stuck subpixels, check tint and uniformity, or download the color as a PNG.',
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function ColorScreenPage() {
  const features = [
    translate('feature_fullscreen_pure'),
    translate('feature_keyboard_shortcuts'),
    translate('feature_all_devices'),
    translate('feature_download_png'),
    translate('feature_free_no_registration'),
  ];

  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== TOOL.id).map((t) => ({
    name: translate(t.nameKey as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <ToolLayout
        title={translate('color_screen')}
        description={translate('color_screen_desc')}
        features={features}
        relatedTools={relatedTools}
        showScreenControls
        hasDownload
      >
        <ScreenDisplay
          strings={getClientStrings('screenDisplay')}
          color={COLOR_SWATCHES[0].hex}
          title="color-screen"
          swatches={COLOR_SWATCHES}
        />
      </ToolLayout>
      <GuideSection toolId="color-screen" />
      <RelatedTools currentToolId="color-screen" />
    </>
  );
}
