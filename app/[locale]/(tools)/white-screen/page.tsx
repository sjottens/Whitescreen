// app/[locale]/(tools)/white-screen/page.tsx - White screen tool page with multilingual SEO

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';
import GuideSection from '@/components/tools/guide-section';
import ColorScreenIntro from '@/components/tools/color-screen-intro';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = COLOR_TOOLS.find((t) => t.id === 'white-screen')!;

export async function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);

  return generateMultilingualMetadata({
    locale,
    title: translate(TOOL.nameKey as any),
    description: translate(TOOL.descriptionKey as any),
    path: TOOL.path,
    keywords: TOOL.keywords,
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
  const translatedUseCases = (TOOL.useCases || []).map((key) => translate(key as any));

  // Translate features using translation keys
  const translatedFeatures = [
    translate('feature_fullscreen_pure'),
    translate('feature_keyboard_shortcuts'),
    translate('feature_all_devices'),
    translate('feature_download_png'),
    translate('feature_free_no_registration'),
  ];

  const faqs = [
    {
      question: translate('tool_faq_1_q' as any),
      answer: translate('tool_faq_1_a' as any),
    },
    {
      question: translate('tool_faq_2_q' as any),
      answer: translate('tool_faq_2_a' as any),
    },
    {
      question: translate('tool_faq_3_q' as any),
      answer: translate('tool_faq_3_a' as any),
    },
  ];

  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'white-screen').slice(0, 2).map((t) => ({
    name: translate(t.nameKey as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <ColorScreenIntro 
        locale={locale} 
        colorName="white" 
        colorHex="#FFFFFF" 
        colorLabel={translate(TOOL.nameKey as any)}
        useCases={translatedUseCases}
      />
      <ToolLayout
        title={translate(TOOL.nameKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        features={translatedFeatures}
        useCases={translatedUseCases}
        faqs={faqs}
        relatedTools={relatedTools}
        locale={locale}
      >
          <ScreenDisplay color="#FFFFFF" title={translate(TOOL.nameKey as any)} locale={locale} />
      </ToolLayout>
      <GuideSection toolId="white-screen" />
      <RelatedTools currentToolId="white-screen" locale={locale as any} />
    </>
  );
}
