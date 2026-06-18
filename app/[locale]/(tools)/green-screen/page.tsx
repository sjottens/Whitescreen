// app/[locale]/(tools)/green-screen/page.tsx

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

const TOOL = COLOR_TOOLS.find((t) => t.id === 'green-screen')!;

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

export default async function GreenScreenPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ],
    locale
  );

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

  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'green-screen').slice(0, 2).map((t) => ({
    name: translate(t.nameKey as any),
    path: t.path,
    color: t.color,
  }));

  return (
    <>
      <ColorScreenIntro 
        locale={locale} 
        colorName="green" 
        colorHex="#00FF00" 
        colorLabel={translate(TOOL.nameKey as any)}
        useCases={[
          { en: 'Green channel testing and response curves', fr: 'Test du canal vert et courbes de réponse' },
          { en: 'Green pixel defect detection', fr: 'Détection des défauts de pixels verts' },
          { en: 'Chroma key green screen for video production', fr: 'Écran vert chroma key pour production vidéo' },
          { en: 'Color separation and accuracy verification', fr: 'Vérification de la séparation et de la précision des couleurs' },
          { en: 'Professional lighting reference', fr: 'Référence professionnelle d\'éclairage' },
          { en: 'Color calibration and balance testing', fr: 'Test d\'étalonnage et d\'équilibre des couleurs' }
        ]}
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
        <ScreenDisplay color="#00FF00" title={translate(TOOL.nameKey as any)} locale={locale} />
      </ToolLayout>
      <GuideSection toolId="green-screen" />
      <RelatedTools currentToolId="green-screen" locale={locale as any} />
    </>
  );
}
