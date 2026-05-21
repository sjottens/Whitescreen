// app/[locale]/(tools)/dead-pixel-test/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import DeadPixelTest from '@/components/tools/dead-pixel-test';

const TOOL_ID = 'dead-pixel-test';
const TOOL_NAME = 'Dead Pixel Test';
const TOOL_DESCRIPTION = 'Professional dead pixel detection tool. Test your monitor for stuck, hot, or dead pixels with full-color testing.';
const TOOL_PATH = '/dead-pixel-test';
const KEYWORDS = ['dead pixel test', 'stuck pixel', 'monitor test', 'screen testing tool'];

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  return generateMultilingualMetadata({
    locale,
    title: TOOL_NAME,
    description: TOOL_DESCRIPTION,
    path: TOOL_PATH,
    keywords: KEYWORDS,
  });
}

export default async function DeadPixelTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Tools', path: '/tools' },
      { name: TOOL_NAME, path: TOOL_PATH },
    ],
    locale
  );
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} suppressHydrationWarning />
      <DeadPixelTest />
    </>
  );
}
