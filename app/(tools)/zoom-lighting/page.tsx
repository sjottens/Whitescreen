// app/(tools)/zoom-lighting/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const ZOOM_LIGHTING_TOOL = SPECIAL_TOOLS.find((t) => t.id === 'zoom-lighting')!;

export const metadata: Metadata = generateSEOMetadata({
  title: ZOOM_LIGHTING_TOOL.name,
  description: ZOOM_LIGHTING_TOOL.description + ' Professional lighting for video calls, streaming, and presentations.',
  path: ZOOM_LIGHTING_TOOL.path,
  keywords: [...ZOOM_LIGHTING_TOOL.keywords, 'professional lighting', 'video call setup'],
});

export default function ZoomLightingPage() {
  const schema = toolSchema({
    name: ZOOM_LIGHTING_TOOL.name,
    description: ZOOM_LIGHTING_TOOL.description,
    url: `${SITE_URL}${ZOOM_LIGHTING_TOOL.path}`,
    image: `${SITE_URL}/screenshots/zoom-lighting.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Special Tools', path: '/tools/special' },
    { name: ZOOM_LIGHTING_TOOL.name, path: ZOOM_LIGHTING_TOOL.path },
  ]);

  const features = [
    'Soft white lighting optimized for video calls',
    'Professional appearance with proper color temperature',
    'Adjustable intensity for different lighting conditions',
    'Multiple lighting presets for different room setups',
    'Real-time preview of lighting effects',
    'Compatible with all major video conferencing platforms',
    'Free - no registration required',
    'Works on all devices instantly',
  ];

  const useCases = [
    'Video Conferences: Zoom, Teams, Google Meet lighting',
    'Professional Meetings: Executive presence and credibility',
    'Streaming: Twitch, YouTube, professional broadcasts',
    'Podcasting: Professional audio/video content',
    'Job Interviews: Best lighting for online interviews',
    'Content Creation: YouTube videos and social media',
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
        title={ZOOM_LIGHTING_TOOL.name}
        description={ZOOM_LIGHTING_TOOL.description}
        features={features}
        useCases={useCases}
      >
        <ScreenDisplay color="#FFFACD" colorId="zoom-lighting" title={ZOOM_LIGHTING_TOOL.name} />
      </ToolLayout>
    </>
  );
}
