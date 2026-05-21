// app/[locale]/(tools)/black-screen/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import ScreenDisplay from '@/components/tools/screen-display';

const TOOL_NAME = 'Black Screen';
const TOOL_DESCRIPTION = 'Pure black full screen for testing dark areas, dead pixel detection, and monitor contrast testing.';
const TOOL_PATH = '/black-screen';
const KEYWORDS = ['black screen', 'dead pixel test', 'monitor test black', 'screen testing'];

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

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlackScreenPage({ params }: PageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: TOOL_NAME, path: TOOL_PATH },
    ],
    locale
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} suppressHydrationWarning />
      <ScreenDisplay color="#000000" title={TOOL_NAME} />
    </>
  );
}
