'use client';

import { Contrast, Eye } from 'lucide-react';

interface ContrastTestIntroProps {
  locale: string;
}

export default function ContrastTestIntro({ locale }: ContrastTestIntroProps) {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            Contrast Test & Accessibility Checker
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            Test monitor contrast ratio, WCAG accessibility compliance, and color vision deficiency simulation. Ensure your display meets professional standards and is accessible to all users.
          </p>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">WCAG AAA</div>
              <p className="text-slate-300 text-sm">7:1 Compliance</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">5 Modes</div>
              <p className="text-slate-300 text-sm">Color Vision Tests</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Live</div>
              <p className="text-slate-300 text-sm">Contrast Ratio</p>
            </div>
          </div>
        </div>

        {/* What is Contrast */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Contrast className="w-8 h-8 text-blue-400" />
            What is Display Contrast?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WCAG Standards */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">WCAG Standards</h3>
              </div>
              <p className="text-slate-300 mb-4">
                WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios for readable text. AAA requires 7:1, AA requires 4.5:1.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ AAA Level: 7:1 contrast</li>
                <li>✓ AA Level: 4.5:1 contrast</li>
                <li>✓ Fail: Below 4.5:1</li>
              </ul>
            </div>

            {/* Color Vision Deficiency */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white">Color Vision Deficiency</h3>
              </div>
              <p className="text-slate-300 mb-4">
                8% of men and 0.5% of women have some form of color blindness. Our simulator helps test accessibility for people with various types of color vision deficiency.
              </p>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>✓ Deuteranopia (Red-Green)</li>
                <li>✓ Protanopia (Red-Green)</li>
                <li>✓ Tritanopia (Blue-Yellow)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            How to Test Monitor Contrast
          </h2>

          <ol className="space-y-4">
            {[
              {
                title: 'View WCAG Ladder',
                desc: '11 pairs of colors with varying contrast ratios. See which levels you can distinguish.'
              },
              {
                title: 'Test Text Readability',
                desc: 'View text samples at different contrast levels. AAA text should be easily readable from normal viewing distance.'
              },
              {
                title: 'Simulate Color Vision Deficiency',
                desc: 'Switch between 5 vision modes to see how people with color blindness perceive your display.'
              },
              {
                title: 'Check Custom Colors',
                desc: 'Test any foreground/background color pair to see the exact contrast ratio and WCAG compliance.'
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
                q: 'What contrast ratio should I aim for?',
                a: 'WCAG AAA (7:1) is the gold standard for accessibility. Most professional displays achieve 1000:1 static contrast, but visible text contrast is more important.'
              },
              {
                q: 'What is the difference between static and dynamic contrast?',
                a: 'Static contrast is measured between pure white and pure black on the same screen. Dynamic contrast uses local dimming. Static is more reliable for real-world content.'
              },
              {
                q: 'Why does contrast matter for accessibility?',
                a: 'Low contrast makes text hard to read for people with visual impairment or when viewing in bright conditions. High contrast benefits everyone by improving readability.'
              },
              {
                q: 'Can I test my design\'s contrast?',
                a: 'Yes! Use the custom color tester to check any foreground/background combination. Enter hex values and instantly see the WCAG compliance level.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h4 className="text-lg font-bold text-white mb-3">{item.q}</h4>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Info */}
        <div className="bg-blue-950/30 border border-blue-500/50 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">♿ Accessibility Matters</h2>
          <p className="text-slate-300 mb-3">
            Following WCAG contrast guidelines isn't just for compliance—it improves readability for everyone. Proper contrast helps users with low vision, color blindness, and those viewing in bright conditions.
          </p>
          <p className="text-slate-300 text-sm">
            Learn more: WCAG 2.1 Level AAA guidelines at w3.org
          </p>
        </div>
      </div>
    </section>
  );
}
