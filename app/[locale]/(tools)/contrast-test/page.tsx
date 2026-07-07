// app/[locale]/(tools)/contrast-test/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ContrastTest from '@/components/tools/contrast-test';
import GuideSection from '@/components/tools/guide-section';
import ContrastTestIntro from '@/components/tools/contrast-test-intro';
import RelatedTools from '@/components/tools/related-tools';

const TOOL = TEST_TOOLS.find((t) => t.id === 'contrast-test')!;

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

export default async function ContrastTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ],
    locale
  );
  return (
    <>
      <ContrastTestIntro locale={locale} />
      <ToolLayout
        title={translate(TOOL.descriptionKey as any)}
        description={translate(TOOL.descriptionKey as any)}
        locale={locale}
        toolName={translate(TOOL.nameKey as any)}
      >
        <ContrastTest locale={locale as any} />
      </ToolLayout>
      <GuideSection toolId="contrast-test" locale={locale as any} />
      <RelatedTools currentToolId="contrast-test" locale={locale as any} />
    </>
  );
}
