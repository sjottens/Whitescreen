// app/[locale]/(tools)/pink-screen/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import ScreenDisplay from '@/components/tools/screen-display';

const TOOL_NAME = 'Pink Screen';
const TOOL_DESCRIPTION = 'Pink screen display for aesthetic lighting, creative photography, and content creation effects.';
const TOOL_PATH = '/pink-screen';
const KEYWORDS = ['pink screen', 'aesthetic lighting', 'creative lighting', 'photography effects'];

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

export default async function PinkScreenPage({ params }: { params: Promise<{ locale: string }> }) {
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
      <ScreenDisplay color="#FF1493" title={TOOL_NAME} />
    </>
  );
}
