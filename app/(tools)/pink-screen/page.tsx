// app/(tools)/pink-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const PINK_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'pink-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: PINK_SCREEN_TOOL.name,
  description: PINK_SCREEN_TOOL.description + ' Aesthetic lighting for creative photography and video production.',
  path: PINK_SCREEN_TOOL.path,
  keywords: [...PINK_SCREEN_TOOL.keywords, 'screen test pink', 'aesthetic background'],
});

export default function PinkScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'pink-screen').slice(0, 3);

  const schema = toolSchema({
    name: PINK_SCREEN_TOOL.name,
    description: PINK_SCREEN_TOOL.description,
    url: `${SITE_URL}${PINK_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/pink-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: PINK_SCREEN_TOOL.name, path: PINK_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure pink full-screen display for aesthetic lighting',
    'Perfect for creative photography and video production',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Photography Lighting: Creative fill light with aesthetic pink tones',
    'Video Production: Cinematic color grading and mood setting',
    'Streaming: Professional background for content creators',
    'Product Photography: Aesthetic lighting and backdrop',
    'Social Media Content: Trendy pink color backgrounds',
    'Creative Projects: Design mockups and color testing',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />

      <ToolLayout
        title={PINK_SCREEN_TOOL.name}
        description={PINK_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#FF1493" colorId="pink-screen" title={PINK_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
