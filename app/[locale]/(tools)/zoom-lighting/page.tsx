// app/[locale]/(tools)/zoom-lighting/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import GuideSection from '@/components/tools/guide-section';

const TOOL = SPECIAL_TOOLS.find((t) => t.id === 'zoom-lighting')!;

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

export default async function ZoomLightingPage({ params }: { params: Promise<{ locale: string }> }) {
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
    translate('feature_free_no_registration'),
  ];

  return (
    <>
      <ToolLayout
        title={translate(TOOL.nameKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        features={translatedFeatures}
        useCases={translatedUseCases}
        locale={locale}
      >
        <section className="section">
          <div className="container">
            <h2>{translate('zoom_lighting_heading' as any)}</h2>
            <p>{translate('zoom_lighting_description_long' as any)}</p>
          </div>
        </section>
      </ToolLayout>
      <GuideSection toolId="zoom-lighting" />
    </>
  );
}
