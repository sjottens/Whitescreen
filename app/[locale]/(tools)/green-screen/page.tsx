// app/[locale]/(tools)/green-screen/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import ScreenDisplay from '@/components/tools/screen-display';

const TOOL_ID = 'green-screen';
const TOOL_NAME = 'Green Screen';
const TOOL_DESCRIPTION = 'Professional green screen for chroma key video production, streaming, and content creation.';
const TOOL_PATH = '/green-screen';
const KEYWORDS = ['green screen', 'chroma key', 'video production', 'streaming'];

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

export default async function GreenScreenPage({ params }: { params: Promise<{ locale: string }> }) {
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
      <ScreenDisplay color="#00FF00" toolId={TOOL_ID} toolName={TOOL_NAME} />
    </>
  );
}
