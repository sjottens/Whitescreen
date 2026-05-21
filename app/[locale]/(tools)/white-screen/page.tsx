// app/[locale]/(tools)/white-screen/page.tsx - White screen tool page with multilingual SEO

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import ScreenDisplay from '@/components/tools/screen-display';


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

  // Breadcrumb schema for structured data
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: 'Home', path: '/' },
      { name: 'Tools', path: '/tools' },
      { name: 'White Screen', path: '/white-screen' },
    ],
    locale
  );

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      {/* Tool Content */}
      <ScreenDisplay color="#FFFFFF" title="White Screen" />
    </>
  );
}
