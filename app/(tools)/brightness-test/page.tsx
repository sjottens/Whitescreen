// app/(tools)/brightness-test/page.tsx - Brightness Test tool page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { SITE_URL, TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import BrightnessTest from '@/components/tools/brightness-test';

// Disable static generation due to client component requirements
export const dynamic = 'force-dynamic';

const BRIGHTNESS_TOOL = TEST_TOOLS.find((t) => t.id === 'brightness-test')!;

export const metadata: Metadata = generateSEOMetadata({
  title: BRIGHTNESS_TOOL.name,
  description:
    BRIGHTNESS_TOOL.description +
    ' Test monitor brightness levels, gamma response, and display uniformity with precision tools.',
  path: BRIGHTNESS_TOOL.path,
  keywords: [...BRIGHTNESS_TOOL.keywords, 'gamma test', 'monitor calibration', 'display uniformity test'],
});

export default function BrightnessTestPage() {
  const relatedTools = TEST_TOOLS.filter((t) => t.id !== 'brightness-test').slice(0, 3);

  const schema = toolSchema({
    name: BRIGHTNESS_TOOL.name,
    description: BRIGHTNESS_TOOL.description,
    url: `${SITE_URL}${BRIGHTNESS_TOOL.path}`,
    image: `${SITE_URL}/screenshots/brightness-test.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Test Tools', path: '/tools/tests' },
    { name: BRIGHTNESS_TOOL.name, path: BRIGHTNESS_TOOL.path },
  ]);

  const faqItems = [
    {
      question: 'What is a brightness test and why do I need one?',
      answer:
        'A brightness test helps verify your monitor displays all brightness levels accurately from black (0%) to white (100%). This ensures your display can render detail in both dark and bright areas correctly, which is essential for photography, video editing, and general content viewing.',
    },
    {
      question: 'What is gamma and how does it affect my display?',
      answer:
        'Gamma controls how brightness changes across midtones. Proper gamma ensures smooth transitions between brightness levels without banding. Most displays use gamma 2.2 for standard viewing. Our gray ladder test helps you identify gamma issues.',
    },
    {
      question: 'What is banding and what causes it?',
      answer:
        'Banding appears as visible horizontal or vertical stripes in gradients instead of smooth transitions. It can indicate insufficient color depth (8-bit vs 10-bit panel), GPU/driver issues, or contrast settings that are too extreme. Our gradient test specifically highlights banding.',
    },
    {
      question: 'How do I use the gray ladder test?',
      answer:
        'The gray ladder displays 11 gray levels from 0% (black) to 100% (white). Use arrow keys or tap to cycle through each level. Look carefully at each level for uniformity - all pixels should be the same brightness. Check for dark areas or spots that indicate monitor defects.',
    },
    {
      question: 'What should I look for in the brightness gradient?',
      answer:
        'In the gradient from black to white, look for smooth transitions with no visible bands or steps. The gradient should be uniform without any bright or dark spots. If you see distinct steps or lines, your monitor may have poor gamma response or color depth limitations.',
    },
    {
      question: 'What does the flicker test detect?',
      answer:
        'The flicker test alternates between black and white at specific frequencies (measured in Hz) to detect monitor flickering. If you see visible flickering or strobing, your monitor may have refresh rate issues or PWM (pulse-width modulation) dimming problems.',
    },
    {
      question: 'Should I calibrate my monitor after running this test?',
      answer:
        'If you identify brightness or gamma issues, monitor calibration can help. Professional monitor calibrators use equipment to adjust gamma, color temperature, and brightness. Software-based calibration tools can also help optimize your display.',
    },
    {
      question: 'What does opacity adjustment do?',
      answer:
        'The opacity slider reduces the overall brightness intensity of the test pattern. This helps you evaluate how your monitor responds to different brightness levels and can reveal issues that are only visible at certain brightness ranges.',
    },
  ];

  const faqSchema_data = faqSchema(faqItems);

  const features = [
    'Gray Ladder: 11-level test from 0% to 100% brightness',
    'Brightness Gradient: Smooth transition test for banding detection',
    'Vertical Bars: All brightness levels displayed simultaneously',
    'Flicker Test: 30-120 Hz refresh rate flicker detection',
    'Opacity Control: Adjust display intensity to test monitor response',
    'Fullscreen Mode: Press F for immersive testing',
    'Keyboard Navigation: Arrow keys, Space, R for quick control',
    'Desktop & Mobile Modes: Test on any device',
    'Auto-cycle Feature: Automatic gray level progression',
    'Real-time Feedback: See current brightness levels and hex values',
  ];

  const useCases = [
    'Monitor Calibration: Verify brightness and gamma before professional use',
    'Photo/Video Editing: Ensure accurate display of tonal ranges',
    'Quality Control: Test monitor uniformity and color accuracy',
    'Troubleshooting: Identify display issues like banding or flickering',
    'Gaming Setup: Verify no brightness loss in dark game scenes',
    'Professional Display: Ensure proper rendering for content creation',
    'Laptop/Tablet Testing: Check mobile device display quality',
    'Before Purchase: Test display brightness before buying a monitor',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema_data) }}
        suppressHydrationWarning
      />

      <ToolLayout
        title={BRIGHTNESS_TOOL.name}
        description={BRIGHTNESS_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
        }))}
      >
        <BrightnessTest />
      </ToolLayout>
    </>
  );
}
