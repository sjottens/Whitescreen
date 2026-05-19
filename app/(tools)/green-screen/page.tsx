// app/(tools)/green-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const GREEN_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'green-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: GREEN_SCREEN_TOOL.name,
  description: GREEN_SCREEN_TOOL.description + ' Professional green screen for video production and streaming.',
  path: GREEN_SCREEN_TOOL.path,
  keywords: [...GREEN_SCREEN_TOOL.keywords, 'screen test green', 'monitor testing'],
});

export default function GreenScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'green-screen').slice(0, 3);

  const schema = toolSchema({
    name: GREEN_SCREEN_TOOL.name,
    description: GREEN_SCREEN_TOOL.description,
    url: `${SITE_URL}${GREEN_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/green-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: GREEN_SCREEN_TOOL.name, path: GREEN_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure green full-screen display optimized for chroma key',
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
    'Video Production: Green screen compositing and effects',
    'Streaming: Background removal for streaming platforms',
    'Photography: Color accuracy testing with green channel',
    'Display Calibration: Green channel testing and validation',
    'Creative Effects: Color grading and green tone adjustments',
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
        title={GREEN_SCREEN_TOOL.name}
        description={GREEN_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#00FF00" colorId="green-screen" title={GREEN_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
