// app/(tools)/dead-pixel-test/page.tsx - Dead Pixel Test tool page

import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata, toolSchema, breadcrumbSchema, faqSchema } from '@/lib/seo';
import { SITE_URL, TEST_TOOLS } from '@/lib/constants';
import ToolLayout from '@/components/tools/tool-layout';
import DeadPixelTest from '@/components/tools/dead-pixel-test';

// Disable static generation due to client component requirements
export const dynamic = 'force-dynamic';

const DEAD_PIXEL_TOOL = TEST_TOOLS.find((t) => t.id === 'dead-pixel-test')!;

export const metadata: Metadata = generateSEOMetadata({
  title: DEAD_PIXEL_TOOL.name,
  description: DEAD_PIXEL_TOOL.description + ' Test dead, stuck, and hot pixels on any screen.',
  path: DEAD_PIXEL_TOOL.path,
  keywords: [...DEAD_PIXEL_TOOL.keywords, 'stuck pixel test', 'hot pixel test', 'display defect detector'],
});

export default function DeadPixelTestPage() {
  const relatedTools = TEST_TOOLS.filter((t) => t.id !== 'dead-pixel-test').slice(0, 3);

  const schema = toolSchema({
    name: DEAD_PIXEL_TOOL.name,
    description: DEAD_PIXEL_TOOL.description,
    url: `${SITE_URL}${DEAD_PIXEL_TOOL.path}`,
    image: `${SITE_URL}/screenshots/dead-pixel-test.png`,
  });

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Tools', path: '/tools' },
    { name: 'Test Tools', path: '/tools' },
    { name: DEAD_PIXEL_TOOL.name, path: DEAD_PIXEL_TOOL.path },
  ]);

  const faqItems = [
    {
      question: 'How do I test for dead pixels?',
      answer:
        'Start the test in fullscreen mode and cycle through different solid colors. Dead pixels appear as black dots on colored backgrounds. Stuck pixels show a fixed incorrect color. Look carefully at each color pattern.',
    },
    {
      question: "What's the difference between dead and stuck pixels?",
      answer:
        "Dead pixels are completely black on all colors because they're permanently off. Stuck pixels show a fixed color (red, green, or blue) because one or more sub-pixels are stuck in the on position.",
    },
    {
      question: 'How does the mobile dead pixel test work?',
      answer:
        "Select your device's aspect ratio to ensure the test area fits your screen perfectly. Different phones have different screen proportions (16:9, 18:9, 19.5:9, 20:9, 21:9, or 4:3).",
    },
    {
      question: 'What colors are best for dead pixel testing?',
      answer:
        'Pure black (#000000), white (#FFFFFF), red (#FF0000), green (#00FF00), and blue (#0000FF) are most effective. Testing with all 9 colors is recommended for thorough detection.',
    },
    {
      question: 'Can dead pixels be fixed?',
      answer:
        'Dead pixels usually cannot be repaired. However, stuck pixels sometimes can be fixed using pixel fixing software or pressure methods. Most manufacturers cover dead pixels under warranty.',
    },
    {
      question: 'How long should I spend testing each color?',
      answer:
        'Spend 10-15 seconds carefully examining the entire screen area for each color. Test in a dark room for better visibility, especially on bright patterns.',
    },
  ];

  const faqSchema_data = faqSchema(faqItems);

  const features = [
    'Test with 9 solid colors (black, white, red, green, blue, cyan, magenta, yellow, gray)',
    'Desktop and Mobile test modes with aspect ratio selection',
    'Auto-cycle colors for continuous testing',
    'Fullscreen mode with keyboard shortcuts (F, Space)',
    'Arrow keys or tap to manually cycle through colors',
    'Works on all devices - monitors, laptops, tablets, smartphones',
    'Identifies dead, stuck, and hot pixels',
    'Free - no registration or subscriptions required',
  ];

  const useCases = [
    'Monitor Testing: Check for defective pixels after purchase',
    'Quality Control: Verify display quality before accepting delivery',
    'Warranty Claims: Prove display is defect-free for returns',
    'Troubleshooting: Identify if issues are dead pixels or other problems',
    'Gaming Monitors: Ensure high-end displays are perfect',
    'Professional Displays: Verify photo/video editing screen quality',
    'Resale Verification: Confirm display condition before selling',
    'Technical Support: Diagnose display issues for users',
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
        title={DEAD_PIXEL_TOOL.name}
        description={DEAD_PIXEL_TOOL.description}
        features={features}
        useCases={useCases}
        relatedTools={relatedTools.map((t) => ({
          name: t.name,
          path: t.path,
        }))}
      >
        <DeadPixelTest />
      </ToolLayout>

      {/* Detailed Content Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {/* What is Dead Pixel Test */}
            <div>
              <h2 className="text-3xl font-bold mb-4">What is a Dead Pixel Test?</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                A dead pixel test is a diagnostic tool used to identify defective pixels on LCD, LED, OLED, and AMOLED displays. This free online dead pixel checker works on all devices including desktop monitors, laptops, smartphones, tablets, and TVs.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By displaying solid colors across your entire screen, you can easily spot dead pixels (permanently black), stuck pixels (fixed incorrect color), or hot pixels (always lit). Our dead pixel tester supports multiple screen resolutions from 1080p to 4K and 8K displays.
              </p>
            </div>

            {/* Why Test Your Screen */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Test Your Screen for Dead Pixels?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">New Display Warranty</h3>
                  <p className="text-slate-600">
                    Test monitors, laptops, phones, and tablets immediately after purchase. Most manufacturers offer returns or replacements for displays with dead pixels within the return period.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                  <p className="text-slate-600">
                    Verify display quality before accepting delivery of expensive monitors, gaming displays, or professional equipment.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Troubleshooting</h3>
                  <p className="text-slate-600">
                    Identify if screen issues are dead pixels, stuck pixels, or other display problems like backlight bleeding.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Resale Value</h3>
                  <p className="text-slate-600">
                    Prove your display is defect-free when selling used monitors, laptops, or phones to ensure maximum resale value.
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop vs Mobile */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Desktop vs Mobile Dead Pixel Testing</h2>
              <div className="space-y-6">
                <div className="p-6 border-2 border-slate-200 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">Desktop Test Mode</h3>
                  <p className="text-slate-600 mb-3">
                    Perfect for testing computer monitors, laptop screens, all-in-one PCs, and external displays. The desktop mode fills your entire screen with solid test colors, making it easy to spot dead or stuck pixels on large displays.
                  </p>
                  <p className="text-slate-600">
                    Ideal for 1080p, 1440p (2K), 4K, and 8K monitors from brands like Dell, LG, Samsung, ASUS, BenQ, and ViewSonic.
                  </p>
                </div>
                <div className="p-6 border-2 border-slate-200 rounded-lg">
                  <h3 className="text-2xl font-bold mb-3">Mobile Test Mode</h3>
                  <p className="text-slate-600 mb-3">
                    Specifically designed for smartphones and tablets with support for all modern aspect ratios: 16:9, 18:9, 19.5:9, 20:9, 21:9, and 4:3.
                  </p>
                  <p className="text-slate-600">
                    Test iPhone screens (iPhone X/11/12/13/14+), Samsung Galaxy displays, Google Pixel, OnePlus, and all Android devices with perfect fit.
                  </p>
                </div>
              </div>
            </div>

            {/* Pixel Defects */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Understanding Pixel Defects</h2>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-900">
                  <h3 className="font-bold text-lg mb-2">Dead Pixels</h3>
                  <p className="text-slate-600">
                    Completely black on all test colors. The pixel is permanently off and cannot be repaired. Most noticeable on white or bright colored backgrounds.
                  </p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-lg mb-2">Stuck Pixels</h3>
                  <p className="text-slate-600">
                    Display a fixed color (red, green, or blue) regardless of the test pattern. Sometimes fixable using pixel fixing software or pressure methods.
                  </p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-bold text-lg mb-2">Hot Pixels</h3>
                  <p className="text-slate-600">
                    Always lit white or bright, most visible on black backgrounds. Common on OLED displays and camera sensors.
                  </p>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Best Practices for Dead Pixel Testing</h2>
              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-8">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-cyan-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Clean Your Screen</p>
                      <p className="text-slate-600">Wipe off dust, fingerprints, and smudges before testing to avoid confusing dirt with dead pixels.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-cyan-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Test All Colors</p>
                      <p className="text-slate-600">Check black, white, red, green, blue, cyan, magenta, yellow, and gray. Different pixel defects show on different colors.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-cyan-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Good Lighting</p>
                      <p className="text-slate-600">Test in a dark room for better visibility of pixel defects, especially on bright test patterns.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-cyan-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Take Your Time</p>
                      <p className="text-slate-600">Spend 10-15 seconds on each color carefully examining the entire screen area.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl text-cyan-600 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Multiple Tests</p>
                      <p className="text-slate-600">Run the test 2-3 times to confirm any suspected dead or stuck pixels.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <details
                    key={i}
                    className="group p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
                  >
                    <summary className="font-semibold text-slate-900 flex justify-between items-center">
                      {item.question}
                      <span className="text-slate-600 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-slate-600 leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
