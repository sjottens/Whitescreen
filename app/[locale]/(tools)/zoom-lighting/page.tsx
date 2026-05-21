// app/[locale]/(tools)/zoom-lighting/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';

const TOOL = SPECIAL_TOOLS.find((t) => t.id === 'zoom-lighting')!;

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  return generateMultilingualMetadata({
    locale,
    title: TOOL.name,
    description: TOOL.description,
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function ZoomLightingPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: TOOL.name, path: TOOL.path },
    ],
    locale
  );

  const translatedUseCases = TOOL.useCases.map((key) => translate(key as any));

  const features = [
    'Adjustable brightness for professional lighting',
    'Perfect for video calls and streaming',
    'Works on all devices - phones, tablets, desktops',
    'Free - no registration or subscriptions required',
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} suppressHydrationWarning />
      
      <ToolLayout
        title={TOOL.name}
        description={TOOL.description}
        features={features}
        useCases={translatedUseCases}
      >
        <section className="section">
          <div className="container">
            <h2>Zoom Lighting Tool</h2>
            <p>This tool provides adjustable lighting for photography and video production.</p>
          </div>
        </section>
      </ToolLayout>
    </>
  );
}
