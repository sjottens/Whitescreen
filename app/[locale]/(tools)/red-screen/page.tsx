// app/[locale]/(tools)/red-screen/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import ScreenDisplay from '@/components/tools/screen-display';

const TOOL_ID = 'red-screen';
const TOOL_NAME = 'Red Screen';
const TOOL_DESCRIPTION = 'Pure red display screen for color testing, color accuracy calibration, and photography lighting effects.';
const TOOL_PATH = '/red-screen';
const KEYWORDS = ['red screen', 'color test', 'photography lighting', 'color accuracy'];

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

export default async function RedScreenPage({ params }: { params: Promise<{ locale: string }> }) {
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
      <ScreenDisplay color="#FF0000" toolId={TOOL_ID} toolName={TOOL_NAME} />
    </>
  );
}
