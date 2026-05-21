// app/[locale]/(tools)/contrast-test/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import ContrastTest from '@/components/tools/contrast-test';

const TOOL_ID = 'contrast-test';
const TOOL_NAME = 'Contrast Test';
const TOOL_DESCRIPTION = 'Professional WCAG-compliant contrast testing tool. Test color pairs, color vision deficiency simulation, and accessibility compliance.';
const TOOL_PATH = '/contrast-test';
const KEYWORDS = ['contrast test', 'WCAG contrast', 'color vision deficiency', 'accessibility testing'];

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

export default async function ContrastTestPage({ params }: { params: Promise<{ locale: string }> }) {
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
      <ContrastTest />
    </>
  );
}
