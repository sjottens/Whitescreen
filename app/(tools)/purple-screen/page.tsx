// app/(tools)/purple-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const PURPLE_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'purple-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: PURPLE_SCREEN_TOOL.name,
  description: PURPLE_SCREEN_TOOL.description + ' Creative lighting for photography and display testing.',
  path: PURPLE_SCREEN_TOOL.path,
  keywords: [...PURPLE_SCREEN_TOOL.keywords, 'screen test purple'],
});

export default function PurpleScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'purple-screen').slice(0, 3);

  const schema = toolSchema({
    name: PURPLE_SCREEN_TOOL.name,
    description: PURPLE_SCREEN_TOOL.description,
    url: `${SITE_URL}${PURPLE_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/purple-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: PURPLE_SCREEN_TOOL.name, path: PURPLE_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure purple full-screen display for creative projects',
    'Professional quality for photography and design',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Photography Lighting: Creative purple fill light effects',
    'Video Production: Cinematic purple color grading',
    'Design Testing: Purple color mockups and prototypes',
    'Product Photography: Aesthetic purple backdrops',
    'Creative Projects: Digital art and design backgrounds',
    'Display Calibration: Purple channel testing',
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
        title={PURPLE_SCREEN_TOOL.name}
        description={PURPLE_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#800080" colorId="purple-screen" title={PURPLE_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
