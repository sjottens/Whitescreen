// app/(tools)/broken-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const BROKEN_SCREEN_TOOL = SPECIAL_TOOLS.find((t) => t.id === 'broken-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: BROKEN_SCREEN_TOOL.name,
  description: BROKEN_SCREEN_TOOL.description + ' Realistic prank broken screen effect with sound.',
  path: BROKEN_SCREEN_TOOL.path,
  keywords: [...BROKEN_SCREEN_TOOL.keywords, 'prank', 'broken screen effect'],
});

export default function BrokenScreenPage() {
  const schema = toolSchema({
    name: BROKEN_SCREEN_TOOL.name,
    description: BROKEN_SCREEN_TOOL.description,
    url: `${SITE_URL}${BROKEN_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/broken-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Special Tools', path: '/tools/special' },
    { name: BROKEN_SCREEN_TOOL.name, path: BROKEN_SCREEN_TOOL.path },
  ]);

  const features = [
    'Realistic broken screen effect with glass cracks',
    'Sound effects for authentic experience',
    'Fullscreen realistic glass break animation',
    'Easy restart for multiple pranks',
    'Works on all devices and browsers',
    'Mobile and desktop compatible',
    'Instant activation - no setup needed',
    'Fully harmless - just for fun',
  ];

  const useCases = [
    'Pranks: Fun prank on friends and colleagues',
    'Entertainment: Viral content and social media',
    'Presentations: Attention-grabbing joke slides',
    'Parties: Fun interactive entertainment',
    'Streaming: Prank content for viewers',
    'Events: Humorous ice breaker activity',
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
        title={BROKEN_SCREEN_TOOL.name}
        description={BROKEN_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
      >
        <ScreenDisplay color="#000000" colorId="broken-screen" title={BROKEN_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
