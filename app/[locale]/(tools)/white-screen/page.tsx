// app/[locale]/(tools)/white-screen/page.tsx - White screen tool page with multilingual SEO

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { WHITE_SCREEN_TOOL } from '@/lib/constants';
import ScreenDisplay from '@/components/tools/screen-display';

// Tool configuration
const TOOL_ID = 'white-screen';
const TOOL_NAME = 'White Screen';
const TOOL_DESCRIPTION = 'Pure white full screen for display testing, screen cleaning, and photography lighting. Test monitor uniformity and calibration instantly.';
const TOOL_PATH = '/white-screen';
const KEYWORDS = [
  'white screen',
  'white screen tool',
  'display test white',
  'monitor test',
  'screen cleaning',
  'photography lighting',
  'display uniformity',
];

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

interface WhiteScreenPageProps {
  params: Promise<{ locale: string }>;
}

export default async function WhiteScreenPage({ params }: WhiteScreenPageProps) {
  const locale = await getLocaleFromParams(params);

  // Breadcrumb schema for structured data
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
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Tool Content */}
      <ScreenDisplay color="#FFFFFF" toolId={TOOL_ID} toolName={TOOL_NAME} />
    </>
  );
}
