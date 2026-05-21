// app/[locale]/(tools)/zoom-lighting/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import ToolLayout from '@/components/tools/tool-layout';

const TOOL_NAME = 'Zoom Lighting';
const TOOL_DESCRIPTION = 'Advanced zoom lighting tool for professional photography and video production with adjustable brightness and color.';
const TOOL_PATH = '/zoom-lighting';
const KEYWORDS = ['zoom lighting', 'photography lighting', 'studio lighting', 'video production'];

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

export default async function ZoomLightingPage({ params }: { params: Promise<{ locale: string }> }) {
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
      
      {/* Zoom lighting tool component would go here */}
      <section className="section">
        <div className="container">
          <h1>Zoom Lighting Tool</h1>
          <p>This tool provides adjustable lighting for photography and video production.</p>
        </div>
      </section>
    </>
  );
}
