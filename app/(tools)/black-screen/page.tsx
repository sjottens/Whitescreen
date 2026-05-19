// app/(tools)/black-screen/page.tsx - Black screen tool page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, COLOR_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

// Disable static generation due to client component requirements
export const dynamic = 'force-dynamic';

const BLACK_SCREEN_TOOL = COLOR_TOOLS.find((t) => t.id === 'black-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: BLACK_SCREEN_TOOL.name,
  description: BLACK_SCREEN_TOOL.description + ' Perfect for dead pixel detection, contrast testing, and monitor uniformity checks.',
  path: BLACK_SCREEN_TOOL.path,
  keywords: [...BLACK_SCREEN_TOOL.keywords, 'dead pixel black screen', 'monitor black test'],
});

export default function BlackScreenPage() {
  const relatedTools = COLOR_TOOLS.filter((t) => t.id !== 'black-screen').slice(0, 3);

  const schema = toolSchema({
    name: BLACK_SCREEN_TOOL.name,
    description: BLACK_SCREEN_TOOL.description,
    url: `${SITE_URL}${BLACK_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/black-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Color Tools', path: '/tools/colors' },
    { name: BLACK_SCREEN_TOOL.name, path: BLACK_SCREEN_TOOL.path },
  ]);

  const features = [
    'Pure black full-screen display for dead pixel detection',
    'Ideal for testing display uniformity in dark areas',
    'Reveals dust and fingerprints clearly',
    'Perfect for contrast and black level testing',
    'Works on all devices and browsers',
    'Download as PNG in any resolution',
    'Free and privacy-respecting tool',
    'Fullscreen mode with keyboard shortcuts',
  ];

  const useCases = [
    'Dead Pixel Detection: Find stuck or dead pixels easily',
    'Monitor Uniformity Testing: Check for color banding',
    'Screen Cleaning: Make dust and smudges visible',
    'Brightness & Contrast Testing: Verify black levels',
    'Gaming Preparation: Calibrate for competitive gaming',
    'Professional Calibration: Color accuracy checking',
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
        title={BLACK_SCREEN_TOOL.name}
        description={BLACK_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
          color: t.color,
        }))}
      >
        <ScreenDisplay color="#000000" colorId="black-screen" title={BLACK_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
