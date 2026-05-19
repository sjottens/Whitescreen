// app/(tools)/yellow-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const YELLOW_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'yellow-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: YELLOW_SCREEN_TOOL.name,
  description: YELLOW_SCREEN_TOOL.description + ' Bright yellow full screen for color testing and lighting effects.',
  path: YELLOW_SCREEN_TOOL.path,
  keywords: [...YELLOW_SCREEN_TOOL.keywords, 'screen test yellow', 'bright lighting'],
});

export default function YellowScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'yellow-screen').slice(0, 3);

  const schema = toolSchema({
    name: YELLOW_SCREEN_TOOL.name,
    description: YELLOW_SCREEN_TOOL.description,
    url: `${SITE_URL}${YELLOW_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/yellow-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: YELLOW_SCREEN_TOOL.name, path: YELLOW_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure bright yellow full-screen display',
    'Professional quality for color and brightness testing',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Color Testing: Brightness and yellow channel accuracy',
    'Display Testing: Monitor brightness and gamma validation',
    'Photography Lighting: Bright fill light and backgrounds',
    'Video Production: Bright color effects and overlays',
    'Creative Projects: High visibility and bright tone effects',
    'Accessibility Testing: High contrast color validation',
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
        title={YELLOW_SCREEN_TOOL.name}
        description={YELLOW_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#FFFF00" colorId="yellow-screen" title={YELLOW_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
