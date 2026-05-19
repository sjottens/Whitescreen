// app/(tools)/blue-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const BLUE_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'blue-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: BLUE_SCREEN_TOOL.name,
  description: BLUE_SCREEN_TOOL.description + ' Perfect for chroma key effects and professional video production.',
  path: BLUE_SCREEN_TOOL.path,
  keywords: [...BLUE_SCREEN_TOOL.keywords, 'screen test blue', 'monitor testing'],
});

export default function BlueScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'blue-screen').slice(0, 3);

  const schema = toolSchema({
    name: BLUE_SCREEN_TOOL.name,
    description: BLUE_SCREEN_TOOL.description,
    url: `${SITE_URL}${BLUE_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/blue-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: BLUE_SCREEN_TOOL.name, path: BLUE_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure blue full-screen display optimized for chroma key',
    'Professional quality for video production and streaming',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Chroma Key: Professional background replacement in video',
    'Video Production: Blue screen compositing and effects',
    'Streaming: Background removal for streaming platforms',
    'Photography: Color accuracy testing with blue channel',
    'Display Calibration: Blue channel testing and validation',
    'Creative Effects: Color grading and blue tone adjustments',
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
        title={BLUE_SCREEN_TOOL.name}
        description={BLUE_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#0000FF" colorId="blue-screen" title={BLUE_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
