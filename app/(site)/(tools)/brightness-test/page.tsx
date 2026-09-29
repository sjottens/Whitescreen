// app/(site)/(tools)/brightness-test/page.tsx

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import BrightnessTest from '@/components/tools/brightness-test';
import GuideSection from '@/components/tools/guide-section';
import BrightnessTestIntro from '@/components/tools/brightness-test-intro';
import RelatedReading from '@/components/tools/related-reading';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = TEST_TOOLS.find((t) => t.id === 'brightness-test')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: translate(TOOL.nameKey as any),
    description: 'Check your display\x27s brightness steps, shadow detail and flicker with full-screen gray ladders, gradients and bar patterns. Free, in your browser.',
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function BrightnessTestPage() {
  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ]);
  return (
    <>
      <BrightnessTestIntro />
      <ToolLayout
        title={translate(TOOL.descriptionKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        toolName={translate(TOOL.nameKey as any)}
      >
        <BrightnessTest strings={getClientStrings('brightnessTest')} />
      </ToolLayout>
      <GuideSection toolId="brightness-test" />
      <RelatedReading strings={getClientStrings('relatedReading')} toolId="brightness-test" />
      <RelatedTools currentToolId="brightness-test" />
    </>
  );
}
