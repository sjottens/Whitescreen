// app/(tools)/red-screen/page.tsx - Red screen tool page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const RED_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'red-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: RED_SCREEN_TOOL.name,
  description: RED_SCREEN_TOOL.description + ' Perfect for color accuracy testing, photography lighting, and video effects.',
  path: RED_SCREEN_TOOL.path,
  keywords: [...RED_SCREEN_TOOL.keywords, 'screen test red', 'monitor testing'],
});

export default function RedScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'red-screen').slice(0, 3);

  const schema = toolSchema({
    name: RED_SCREEN_TOOL.name,
    description: RED_SCREEN_TOOL.description,
    url: `${SITE_URL}${RED_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/red-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: RED_SCREEN_TOOL.name, path: RED_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure red full-screen display with no distractions',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Offline support with PWA installation',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Color Testing: Check monitor color accuracy and reproduction',
    'Photography Lighting: Use as a professional fill light with red tones',
    'Video Production: Red color overlays and lighting elements',
    'Display Calibration: Red channel testing and validation',
    'Presentation Mode: Color-specific background or lighting',
    'Creative Effects: Red tone adjustments and color grading',
  ];

  return (
    <>
      {/* Structured Data */}
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
        title={RED_SCREEN_TOOL.name}
        description={RED_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#FF0000" colorId="red-screen" title={RED_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
