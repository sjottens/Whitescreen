// app/[locale]/(tools)/blue-screen/page.tsx

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

const TOOL = COLOR_TOOLS.find((t) => t.id === 'blue-screen')!;

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

export default async function BlueScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ],
    locale
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const translatedUseCases = (TOOL.useCases || []).map((key) => translate(key as any));

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

  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'blue-screen').slice(0, 2).map((t) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    name: translate(t.id.replace(/-/g, '_') as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <ColorScreenIntro 
        locale={locale} 
        colorName="blue" 
        colorHex="#0000FF" 
        colorLabel={translate(TOOL.nameKey as any)}
        useCases={translatedUseCases}
      />
      <ToolLayout
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        title={translate(TOOL.nameKey as any)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description={translate(TOOL.descriptionKey as any)}
        features={translatedFeatures}
        useCases={translatedUseCases}
        faqs={faqs}
        relatedTools={relatedTools}
        locale={locale}
      >
        <ScreenDisplay color="#0000FF" title={translate(TOOL.nameKey as any)} locale={locale} />
      </ToolLayout>
      <GuideSection toolId="blue-screen" />
      <RelatedTools currentToolId="blue-screen" locale={locale as any} />
    </>
  );
}
