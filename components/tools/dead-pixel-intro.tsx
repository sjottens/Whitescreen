'use client';

import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface DeadPixelIntroProps {
  locale: string;
}

export default function DeadPixelIntro({ locale }: DeadPixelIntroProps) {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            Dead Pixel Test & Detector
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            Use our free dead pixel detector to identify stuck pixels, dead pixels, and hot pixels on your display. This comprehensive test cycles through multiple color backgrounds to make defective pixels highly visible.
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
              <p className="text-slate-300 text-sm">Free to Use</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">16 Colors</div>
              <p className="text-slate-300 text-sm">Comprehensive Detection</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">Results in Seconds</p>
            </div>
          </div>
        </div>

        {/* What are Dead Pixels */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-emerald-400" />
            What Are Dead Pixels?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Dead Pixels */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Dead Pixels</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Pixels that are not receiving power and appear as small dark/black dots on your display. They fail to illuminate regardless of color changes.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Appear as black or dark spots</li>
                <li>• Permanent defect (hard to fix)</li>
                <li>• More common than stuck pixels</li>
              </ul>
            </div>

            {/* Stuck Pixels */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Stuck Pixels</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Pixels "stuck" in the ON position, displaying a single color (usually red, green, or blue). They may respond to physical pressure or heat.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Appear as colored dots (RGB)</li>
                <li>• Sometimes fixable with tools/methods</li>
                <li>• Less common but more noticeable</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pixel Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Types of Defective Pixels
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Black pixel */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">Black Dead Pixel</h4>
              <p className="text-sm text-slate-400">
                Appears on colored backgrounds
              </p>
            </div>

            {/* Red stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">Red Stuck Pixel</h4>
              <p className="text-sm text-slate-400">
                Stuck on red subpixel
              </p>
            </div>

            {/* Green stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">Green Stuck Pixel</h4>
              <p className="text-sm text-slate-400">
                Stuck on green subpixel
              </p>
            </div>

            {/* Blue stuck */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 backdrop-blur">
              <div className="w-full h-24 bg-white rounded mb-4 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-md"></div>
              </div>
              <h4 className="font-bold text-white mb-2">Blue Stuck Pixel</h4>
              <p className="text-sm text-slate-400">
                Stuck on blue subpixel
              </p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            How to Use This Dead Pixel Test
          </h2>

          <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-8 backdrop-blur">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Clean Your Screen</h4>
                  <p className="text-slate-300">
                    Use a soft, lint-free cloth to gently clean your screen. Remove any dust or smudges.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Start the Test</h4>
                  <p className="text-slate-300">
                    Click "Start Test" and press F11 for fullscreen mode (recommended for best results).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">
                    Look Carefully
                  </h4>
                  <p className="text-slate-300">
                    Spend 10-15 seconds on each color. Look for spots that don't match the background color.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h4 className="font-bold text-white mb-1">Document Issues</h4>
                  <p className="text-slate-300">
                    Take photos of any dead pixels found. Note their location for warranty claims.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can dead pixels be fixed?',
                a: 'Dead pixels are usually permanent hardware failures. Stuck pixels sometimes respond to software fixes or physical pressure, but dead pixels cannot be repaired.'
              },
              {
                q: 'How many dead pixels are acceptable?',
                a: 'Most manufacturers allow 0-8 dead pixels depending on the warranty terms. Check your warranty for specifics.'
              },
              {
                q: 'Is this test accurate?',
                a: 'Yes, this is a comprehensive color-cycling test that makes defective pixels highly visible. It\'s the most effective method for detecting dead and stuck pixels.'
              },
              {
                q: 'Why do I need fullscreen mode?',
                a: 'Fullscreen mode ensures you\'re testing the entire display surface and eliminates distractions from the browser UI.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Info */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg p-8 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-4">
            💡 Warranty Information
          </h2>
          <p className="text-slate-300 mb-4">
            If you find dead pixels within your warranty period, contact the manufacturer with documented evidence (photos). Most manufacturers cover 0-8 dead pixels. Premium displays often have stricter standards.
          </p>
          <p className="text-slate-400 text-sm">
            Common manufacturers: Dell, LG, ASUS, BenQ, Samsung, HP, AOC, MSI
          </p>
        </div>
      </div>
    </section>
  );
}
