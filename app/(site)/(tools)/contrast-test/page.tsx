// app/(site)/(tools)/contrast-test/page.tsx

import { getClientStrings } from '@/lib/client-strings';
import { Metadata } from 'next';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ContrastTest from '@/components/tools/contrast-test';
import GuideSection from '@/components/tools/guide-section';
import ContrastTestIntro from '@/components/tools/contrast-test-intro';
import RelatedTools from '@/components/tools/related-tools';
import { PAGE_COPY } from '@/lib/page-copy';

const TOOL = TEST_TOOLS.find((t) => t.id === 'contrast-test')!;

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    ...PAGE_COPY['/contrast-test'],
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function ContrastTestPage() {
  const breadcrumbs = breadcrumbSchema([
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ]);
  return (
    <>
      <ContrastTestIntro />
      <ToolLayout
        description={translate(TOOL.descriptionKey as any)}
        toolName={translate(TOOL.nameKey as any)}
      >
        <ContrastTest strings={getClientStrings('contrastTest')} />
      </ToolLayout>
      <GuideSection toolId="contrast-test" />
      <RelatedTools currentToolId="contrast-test" />
    </>
  );
}
