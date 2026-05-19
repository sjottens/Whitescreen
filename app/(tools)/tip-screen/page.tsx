// app/(tools)/tip-screen/page.tsx

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema } from '@/lib/seo';
import { SITE_URL, SPECIAL_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import ScreenDisplay from '@/components/tools/screen-display';

export const dynamic = 'force-dynamic';

const TIP_SCREEN_TOOL = SPECIAL_TOOLS.find((t) => t.id === 'tip-screen')!;

export const metadata: Metadata = generateSEOMetadata({
  title: TIP_SCREEN_TOOL.name,
  description: TIP_SCREEN_TOOL.description + ' POS tipping screen for restaurants and retail businesses.',
  path: TIP_SCREEN_TOOL.path,
  keywords: [...TIP_SCREEN_TOOL.keywords, 'point of sale', 'tipping'],
});

export default function TipScreenPage() {
  const schema = toolSchema({
    name: TIP_SCREEN_TOOL.name,
    description: TIP_SCREEN_TOOL.description,
    url: `${SITE_URL}${TIP_SCREEN_TOOL.path}`,
    image: `${SITE_URL}/screenshots/tip-screen.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Special Tools', path: '/tools/special' },
    { name: TIP_SCREEN_TOOL.name, path: TIP_SCREEN_TOOL.path },
  ]);

  const features = [
    'Interactive tipping screen with multiple options',
    'Customizable tip percentages (15%, 18%, 20%, custom)',
    'Clear, professional display for customer tipping',
    'Fast and easy transaction completion',
    'Works with any POS or payment system',
    'Fullscreen mode for dedicated tipping displays',
    'Free - no fees or subscriptions',
    'Instant setup - no configuration needed',
  ];

  const useCases = [
    'Restaurants: Table and counter tipping solutions',
    'Cafes: Quick service tipping for baristas',
    'Retail: Point of sale tipping opportunities',
    'Food Delivery: Rider and service tipping screens',
    'Events: Donation and gratuity collection',
    'Services: Professional service tipping displays',
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
        title={TIP_SCREEN_TOOL.name}
        description={TIP_SCREEN_TOOL.description}
        features={features}
        useCases={useCases}
      >
        <ScreenDisplay color="#FFFFFF" colorId="tip-screen" title={TIP_SCREEN_TOOL.name} />
      </ToolLayout>
    </>
  );
}
