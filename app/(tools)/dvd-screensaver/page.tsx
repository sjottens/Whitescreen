// app/(tools)/dvd-screensaver/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const DVD_SCREENSAVER_TOOL = SPECIAL_TOOLS.find((t) => t.id === 'dvd-screensaver')!;

export const metadata: Metadata = generateSEOMetadata({
  title: DVD_SCREENSAVER_TOOL.name,
  description: DVD_SCREENSAVER_TOOL.description + ' Classic nostalgic DVD logo animation screensaver.',
  path: DVD_SCREENSAVER_TOOL.path,
  keywords: [...DVD_SCREENSAVER_TOOL.keywords, 'classic screensaver'],
});

export default function DVDScreensaverPage() {
  const schema = toolSchema({
    name: DVD_SCREENSAVER_TOOL.name,
    description: DVD_SCREENSAVER_TOOL.description,
    url: `${SITE_URL}${DVD_SCREENSAVER_TOOL.path}`,
    image: `${SITE_URL}/screenshots/dvd-screensaver.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Special Tools', path: '/tools/special' },
    { name: DVD_SCREENSAVER_TOOL.name, path: DVD_SCREENSAVER_TOOL.path },
  ]);

  const features = [
    'Authentic DVD logo animation recreation',
    'Bouncing logo with corner collision detection',
    'Color changing on corner hits (true DVD feel)',
    'Fullscreen support for immersive experience',
    'Adjustable speed settings',
    'Responsive on all screen sizes',
    'Pure nostalgia - no ads or tracking',
    'Works instantly in any browser',
  ];

  const useCases = [
    'Nostalgia: Relive the classic DVD era',
    'Entertainment: Fun interactive screensaver',
    'Presentations: Attention grabber for events',
    'Parties: Retro entertainment display',
    'Office: Relaxing idle screen animation',
    'Social: Shareworthy nostalgic experience',
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
        title={DVD_SCREENSAVER_TOOL.name}
        description={DVD_SCREENSAVER_TOOL.description}
        features={features}
        useCases={useCases}
      >
        <ScreenDisplay color="#000000" colorId="dvd-screensaver" title={DVD_SCREENSAVER_TOOL.name} />
      </ToolLayout>
    </>
  );
}
