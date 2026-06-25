'use client';

import { AlertCircle, Sun, Zap } from 'lucide-react';

interface BrightnessTestIntroProps {
  locale: string;
}

export default function BrightnessTestIntro({ locale }: BrightnessTestIntroProps) {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            Brightness Test & Detector
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            Test monitor brightness levels, gamma response, and display uniformity with precision tools. Identify brightness inconsistencies, backlight bleeding, and color uniformity issues.
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">11 Steps</div>
              <p className="text-slate-300 text-sm">Brightness Ladder</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Gamma Test</div>
              <p className="text-slate-300 text-sm">Response Curves</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">Results in Seconds</p>
            </div>
          </div>
        </div>

        {/* What is Brightness Test */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Sun className="w-8 h-8 text-yellow-400" />
            What is a Brightness Test?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brightness Uniformity */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Sun className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Brightness Uniformity</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Measures how evenly your display maintains brightness across the entire screen. Uneven brightness creates dark corners or bright spots.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ Detect backlight bleeding</li>
                <li>✓ Identify dark corners</li>
                <li>✓ Check edge brightness</li>
              </ul>
            </div>

            {/* Gamma Response */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Gamma Response</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Tests the display's tone curve and how it renders midtones. Proper gamma (2.2) ensures accurate color representation and smooth gradations.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ Verify tone gradation</li>
                <li>✓ Test gamma curve accuracy</li>
                <li>✓ Check midtone rendering</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            How to Use This Brightness Test
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: 'Adjust Monitor Settings',
                desc: 'Set your monitor to standard settings or factory defaults for consistent results.'
              },
              {
                title: 'Run the Brightness Ladder Test',
                desc: 'Look at the 11-step brightness ladder. Each step should be distinguishable without banding.'
              },
              {
                title: 'Check for Gradient Banding',
                desc: 'If you see distinct bands instead of smooth gradations, your display has limited bit depth or dithering issues.'
              },
              {
                title: 'Verify Uniformity',
                desc: 'Check that brightness remains consistent across all areas of the screen, especially corners.'
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-slate-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'What is proper gamma for monitors?',
                a: 'Standard gamma is 2.2 for most displays. This provides optimal brightness and color perception. Gaming monitors often use 2.4 for more contrast.'
              },
              {
                q: 'What causes banding in gradients?',
                a: 'Banding occurs when a display has 8-bit color instead of 10-bit, or when dithering is disabled. It creates visible steps instead of smooth transitions.'
              },
              {
                q: 'Is backlight bleeding normal?',
                a: 'Slight backlight bleeding at edges is normal in IPS and VA panels. Excessive bleeding (visible during dark scenes) indicates a display defect covered by warranty.'
              },
              {
                q: 'How does brightness affect color accuracy?',
                a: 'Improper brightness settings can cause color shifts and loss of detail in shadows. Use 120 cd/m² for professional work and 100-150 cd/m² for general use.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Info */}
        <div className="bg-emerald-950/30 border border-emerald-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">💡 Professional Tip</h2>
          <p className="text-slate-300 mb-3">
            If your monitor shows significant brightness inconsistencies, backlight bleeding, or fails uniformity tests within warranty, contact the manufacturer. Most premium monitors have strict brightness uniformity standards (typically ≤20% variation).
          </p>
          <p className="text-slate-300 text-sm">
            Common manufacturers: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI
          </p>
        </div>
      </div>
    </section>
  );
}
