// app/[locale]/(tools)/white-screen/page.tsx - White screen tool page with multilingual SEO

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'white-screen')!;

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'White Screen',
    description: 'Pure white full screen for display testing, screen cleaning, and photography lighting. Test monitor uniformity and calibration instantly.',
    path: '/white-screen',
    keywords: [
      'white screen',
      'white screen tool',
      'display test white',
      'monitor test',
      'screen cleaning',
      'photography lighting',
      'display uniformity',
    ],
  });
}

interface WhiteScreenPageProps {
  params: Promise<{ locale: string }>;
}

export default async function WhiteScreenPage({ params }: WhiteScreenPageProps) {
  const locale = await getLocaleFromParams(params);

  const translate = t(locale);

  // Breadcrumb schema for structured data
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate('white_screen'), path: '/white-screen' },
    ],
    locale
  );

  // Translate use cases from translation keys
  const translatedUseCases = TOOL.useCases.map((key) => translate(key as any));

  // Translate features using translation keys
  const translatedFeatures = [
    translate('feature_fullscreen_pure'),
    translate('feature_keyboard_shortcuts'),
    translate('feature_all_devices'),
    translate('feature_download_png'),
    translate('feature_free_no_registration'),
  ];

  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'white-screen').slice(0, 2).map((t) => ({
    name: translate(t.id.replace(/-/g, '_') as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <ToolLayout
      title={translate('white_screen') || 'White Screen'}
      description={TOOL.description}
      features={translatedFeatures}
      useCases={translatedUseCases}
      relatedTools={relatedTools}
      locale={locale}
    >
      <ScreenDisplay color="#FFFFFF" title="White Screen" locale={locale} />
    </ToolLayout>
  );
}
