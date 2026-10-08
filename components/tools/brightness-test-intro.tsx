'use client';

import { Sun, Zap } from 'lucide-react';

export default function BrightnessTestIntro() {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">

        {/* What is Brightness Test */}
        <div className="mb-12">
          <h2 id="what-is-a-brightness-test" className="scroll-mt-24 text-3xl font-bold text-white mb-6 flex items-center gap-3">
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
          <h2 id="how-to-use-this-brightness-test" className="scroll-mt-24 text-3xl font-bold text-white mb-6">
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


        {/* Warranty Info */}
        <div className="bg-emerald-950/30 border border-emerald-500/50 rounded-lg p-6 backdrop-blur">
          <h2 id="professional-tip" className="scroll-mt-24 text-2xl font-bold text-white mb-3">💡 Professional Tip</h2>
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
