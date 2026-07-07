// app/[locale]/(tools)/[tool-id]/page.tsx.template
// Template for creating new tool pages with comprehensive SEO
// Replace [tool-id] with actual tool ID and customize content

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup';
import ToolLayout from '@/components/tools/tool-layout';
import Script from 'next/script';

// Tool Configuration
const TOOL_CONFIG = {
  id: 'tool-id', // Change this
  name: 'Tool Name',
  description: 'Comprehensive tool description',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  path: '/tool-id',
  color: '#FFFFFF', // For color tools
  useCase: 'Primary use case',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
  useCases: [
    'Use case 1',
    'Use case 2',
    'Use case 3',
  ]
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: TOOL_CONFIG.name,
    description: TOOL_CONFIG.description,
    path: TOOL_CONFIG.path,
    keywords: TOOL_CONFIG.keywords,
  });
}

interface ToolPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema(
    [
      { name: translate('home'), path: '/' },
      { name: translate('resources'), path: '/tools' },
      { name: TOOL_CONFIG.name, path: TOOL_CONFIG.path },
    ]
  );

  // Generate FAQ schema
  const faqData = [
    {
      question: `How do I use the ${TOOL_CONFIG.name}?`,
      answer: `The ${TOOL_CONFIG.name} is designed for ${TOOL_CONFIG.useCase}. Click the tool above or press F to enter fullscreen mode.`
    },
    {
      question: `Is the ${TOOL_CONFIG.name} accurate?`,
      answer: 'Yes, our tools are professional-grade and used by experts worldwide.'
    },
    {
      question: `Does it work on my device?`,
      answer: 'Yes! Works on Windows, Mac, Linux, iOS, Android, and any device with a modern web browser.'
    },
    {
      question: `Can I use this on mobile?`,
      answer: 'Absolutely. The tool is fully responsive and optimized for mobile devices.'
    },
    {
      question: `Is there a cost?`,
      answer: '100% free. No registration, no hidden fees.'
    },
    {
      question: `Is my data private?`,
      answer: 'Yes. Everything runs in your browser. No data is sent to our servers.'
    },
    {
      question: `Can I download the results?`,
      answer: 'Yes, you can download the screen as a PNG image in any resolution.'
    },
    {
      question: `What should I do if I find issues?`,
      answer: 'Contact us with details. We can help troubleshoot and recommend solutions.'
    },
  ];

  const faqSchema = generateFAQSchema(faqData, `https://testascreen.eu${TOOL_CONFIG.path}`);

  return (
    <>
      {/* FAQ Schema Markup */}
      <Script
        id={`faq-schema-${TOOL_CONFIG.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Breadcrumb Schema Markup */}
      <Script
        id={`breadcrumb-schema-${TOOL_CONFIG.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ToolLayout
        title={TOOL_CONFIG.name}
        description={TOOL_CONFIG.description}
        features={TOOL_CONFIG.features}
        useCases={TOOL_CONFIG.useCases}
        relatedTools={[
          // Add related tool links here
          // {
          //   name: 'Related Tool',
          //   path: '/related-tool',
          //   color: '#FF0000'
          // }
        ]}
        locale={locale}
      >
        <div>{/* Render tool component here */}</div>
      </ToolLayout>
    </>
  );
}
