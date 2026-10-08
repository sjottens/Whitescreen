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
import RelatedTools from '@/components/tools/related-tools';
import { PAGE_COPY } from '@/lib/page-copy';

const TOOL = TEST_TOOLS.find((t) => t.id === 'brightness-test')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    ...PAGE_COPY['/brightness-test'],
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
        description={translate(TOOL.descriptionKey as any)}
        toolName={translate(TOOL.nameKey as any)}
      >
        <BrightnessTest strings={getClientStrings('brightnessTest')} />
      </ToolLayout>
      <GuideSection toolId="brightness-test" />
      <RelatedTools currentToolId="brightness-test" />
    </>
  );
}
