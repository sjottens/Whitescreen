// app/(tools)/white-screen/page.tsx - White screen tool page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

// Disable static generation due to client component requirements
export const dynamic = 'force-dynamic';

const WHITE_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'white-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: WHITE_SCREEN_TOOL.name,
  description: WHITE_SCREEN_TOOL.description + ' Perfect for display testing, screen cleaning, and photography lighting.',
  path: WHITE_SCREEN_TOOL.path,
  keywords: [...WHITE_SCREEN_TOOL.keywords, 'screen test white', 'monitor testing'],
});

export default function WhiteScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'white-screen').slice(0, 3);

  const schema = toolSchema({
    name: WHITE_SCREEN_TOOL.name,
    description: WHITE_SCREEN_TOOL.description,
    url: `${SITE_URL}${WHITE_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/white-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: WHITE_SCREEN_TOOL.name, path: WHITE_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure white full-screen display with no distractions',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Works on all devices - phones, tablets, desktops',
    'Download as high-quality PNG in any resolution',
    'Free - no registration or subscriptions required',
    'Privacy-first - no tracking or data collection',
    'Offline support with PWA installation',
    'Accessibility optimized for all users',
  ];

  const useCases = [
    'Display Testing: Check monitor uniformity and dead pixels',
    'Screen Cleaning: Make dust and fingerprints clearly visible',
    'Photography Lighting: Use as a professional fill light',
    'Video Production: Background or lighting element',
    'Monitor Calibration: Brightness and contrast testing',
    'Presentation Mode: Whiteboard projection alternative',
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
        title={WHITE_SCREEN_TOOL.name}
        description={WHITE_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#FFFFFF" colorId="white-screen" title={WHITE_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
