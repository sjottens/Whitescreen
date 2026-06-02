// app/[locale]/(tools)/brightness-test/page.tsx

import { Metadata } from 'next';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual } from '@/lib/seo';
import { getLocaleFromParams, LOCALES, DEFAULT_LOCALE } from '@/lib/i18n';
import { t } from '@/lib/translations';
import { TEST_TOOLS } from '@/lib/constants';
import BrightnessTest from '@/components/tools/brightness-test';

const TOOL = TEST_TOOLS.find((t) => t.id === 'brightness-test')!;

export async function generateStaticParams() {
  return LOCALES.filter((locale) => locale !== DEFAULT_LOCALE).map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);
  const translate = t(locale);
  return generateMultilingualMetadata({
    locale,
    title: translate(TOOL.nameKey as any),
    description: translate(TOOL.descriptionKey as any),
    path: TOOL.path,
    keywords: TOOL.keywords,
  });
}

export default async function BrightnessTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);
  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: translate('tools'), path: '/tools' },
      { name: translate(TOOL.nameKey as any), path: TOOL.path },
    ],
    locale
  );
  return (
    <>
      <BrightnessTest />
      
      {/* Explanation Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="mt-12 bg-gradient-to-b from-slate-50 to-white rounded-xl p-8 border border-slate-200">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Use the Brightness Test</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">What is a Brightness Test?</h3>
              <p className="text-slate-700 leading-relaxed">
                A brightness test evaluates your monitor's ability to display different levels of brightness accurately. This tool helps you identify issues with monitor brightness uniformity, detect dead pixels, assess color accuracy, and measure contrast ratio performance. It's essential for professional color work, photo editing, and quality assurance.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Test Modes Explained</h3>
              <ul className="text-slate-700 space-y-2">
                <li><strong>Gray Ladder:</strong> Shows 11 gray levels (0-100%) to test brightness uniformity</li>
                <li><strong>Gradient:</strong> Smooth transition from black to white to detect banding</li>
                <li><strong>Bars:</strong> Separate bars of each brightness level for detailed comparison</li>
                <li><strong>Flicker:</strong> Black/white flicker pattern to detect monitor flicker issues</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">What to Look For</h3>
              <ul className="text-slate-700 space-y-3">
                <li>
                  <strong>Banding:</strong> Visible bands or stripes in gradients indicate poor color depth
                </li>
                <li>
                  <strong>Brightness Shifts:</strong> Uneven brightness across the display suggests backlight issues
                </li>
                <li>
                  <strong>Color Casts:</strong> Tints in gray levels may indicate color balance problems
                </li>
                <li>
                  <strong>Dead/Stuck Pixels:</strong> Colored spots or dark areas in uniform displays
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Testing Tips</h3>
              <ul className="text-slate-700 space-y-3">
                <li>
                  <strong>Calibration:</strong> Ensure your monitor is fully warmed up (30+ minutes)
                </li>
                <li>
                  <strong>Environment:</strong> Test in a darkened room to better see brightness differences
                </li>
                <li>
                  <strong>Distance:</strong> View the screen at arm's length for optimal perception
                </li>
                <li>
                  <strong>Zoom:</strong> Use fullscreen mode (press F) for immersive testing
                </li>
                <li>
                  <strong>Compare:</strong> View each gray level carefully and note any anomalies
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Keyboard Shortcuts</h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-700">
              <div><strong>F</strong> - Toggle fullscreen mode</div>
              <div><strong>Space</strong> - Start/stop auto-cycling (Gray Ladder mode)</div>
              <div><strong>Arrow Keys</strong> - Navigate between brightness levels</div>
              <div><strong>R</strong> - Reset to 50% gray level</div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-900 text-sm">
              <strong>Pro Tip:</strong> For the most accurate brightness test results, adjust your monitor's brightness control to a comfortable viewing level, then use the Display Opacity slider to fine-tune the test display without affecting monitor settings.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
