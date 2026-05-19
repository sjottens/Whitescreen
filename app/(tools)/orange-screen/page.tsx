// app/(tools)/orange-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const ORANGE_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'orange-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: ORANGE_SCREEN_TOOL.name,
  description: ORANGE_SCREEN_TOOL.description + ' Warm lighting effects for photography and video production.',
  path: ORANGE_SCREEN_TOOL.path,
  keywords: [...ORANGE_SCREEN_TOOL.keywords, 'screen test orange', 'warm lighting'],
});

export default function OrangeScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'orange-screen').slice(0, 3);

  const schema = toolSchema({
    name: ORANGE_SCREEN_TOOL.name,
    description: ORANGE_SCREEN_TOOL.description,
    url: `${SITE_URL}${ORANGE_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/orange-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: ORANGE_SCREEN_TOOL.name, path: ORANGE_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure orange full-screen display for warm lighting',
    'Professional quality for creative lighting effects',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Photography Lighting: Warm orange fill light for golden hour effects',
    'Video Production: Cinematic warm color grading',
    'Streaming: Professional warm-toned backgrounds',
    'Product Photography: Warm ambient lighting setup',
    'Creative Projects: Sunset and warm tone effects',
    'Display Calibration: Orange/warm channel testing',
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
        title={ORANGE_SCREEN_TOOL.name}
        description={ORANGE_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#FFA500" colorId="orange-screen" title={ORANGE_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
