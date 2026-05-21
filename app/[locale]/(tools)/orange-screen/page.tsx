// app/[locale]/(tools)/orange-screen/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'orange-screen')!;

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

export default async function OrangeScreenPage({ params }: { params: Promise<{ locale: string }> }) {
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
    'Pure orange full-screen display with no distractions',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
  ];

  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'orange-screen').slice(0, 2).map((t) => ({
    name: t.name,
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} suppressHydrationWarning />
      <ToolLayout
        title={TOOL.name}
        description={TOOL.description}
        features={features}
        useCases={translatedUseCases}
        relatedTools={relatedTools}
      >
        <ScreenDisplay color="#FFA500" title={TOOL.name} />
      </ToolLayout>
    </>
  );
}
