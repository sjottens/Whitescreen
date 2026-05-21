// app/[locale]/(tools)/brightness-test/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import BrightnessTest from '@/components/tools/brightness-test';

const TOOL_NAME = 'Brightness Test';
const TOOL_DESCRIPTION = 'Advanced brightness and gradient testing tool. Test monitor brightness levels, flicker detection, and gray uniformity.';
const TOOL_PATH = '/brightness-test';
const KEYWORDS = ['brightness test', 'monitor brightness', 'gradient test', 'flicker detection'];

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

export default async function BrightnessTestPage({ params }: { params: Promise<{ locale: string }> }) {
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
      <BrightnessTest />
    </>
  );
}
