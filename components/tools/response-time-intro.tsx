'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Repeat, TrendingUp } from 'lucide-react';
import { getLocalizedPath } from '@/lib/link-utils';

interface ResponseTimeIntroProps {
  locale: string;
}

export default function ResponseTimeIntro({ locale }: ResponseTimeIntroProps) {
  const monitorTestHref = getLocalizedPath(locale as any, '/monitor-test');
  const gamingHref = getLocalizedPath(locale as any, '/gaming-monitor-test');

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            Monitor Response Time &amp; Ghosting Test
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-4">
            A striped block moves across your screen so you can watch for ghosting, motion blur, and overshoot in
            real time. Pick a speed, pick a background, and watch what trails behind it.
          </p>
          <p className="text-base text-slate-400 max-w-3xl leading-relaxed mb-6">
            One honest note up front: this is a visual check, not a lab measurement. A browser can&apos;t report a
            millisecond response-time figure - that needs a high-speed camera or dedicated test hardware. What it
            can do is show you, right now, whether your monitor&apos;s current settings produce visible ghosting.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
              <p className="text-slate-300 text-sm">Free to Use</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">3 Speeds</div>
              <p className="text-slate-300 text-sm">Slow / Medium / Fast</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">No Download Needed</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-emerald-400" />
            What You&apos;re Actually Looking At
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <Repeat className="w-5 h-5 text-red-400" />
                <h3 className="text-lg font-bold text-white">Ghosting</h3>
              </div>
              <p className="text-slate-300 text-sm">
                A distinct trailing edge or faint double image behind the block. Usually means the panel is too
                slow to fully switch color between frames.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-bold text-white">Overshoot</h3>
              </div>
              <p className="text-slate-300 text-sm">
                A bright or dark halo that leads <em>ahead</em> of the block instead of trailing it. Almost always
                means your monitor&apos;s overdrive (OD) setting is too aggressive.
              </p>
            </div>
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-bold text-white">Motion Blur</h3>
              </div>
              <p className="text-slate-300 text-sm">
                A more uniform smear across the whole block. Common on any sample-and-hold display and reduced by
                a higher refresh rate, not just a faster panel.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-slate-900/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-3">Before You Blame the Monitor</h2>
          <p className="text-slate-300">
            Open your monitor&apos;s on-screen menu and check the overdrive setting (often labeled OD, Response
            Time, or Overdrive - Off/Normal/Fast/Extreme). Try each option while this test runs and pick whichever
            shows the least ghosting <em>and</em> the least overshoot together. It&apos;s the single most common
            fixable cause of visible ghosting, and most monitors don&apos;t ship on their best setting by default.
          </p>
        </div>

        {/* FAQ Section - kept word-for-word identical to the FAQPage schema
            on this page. */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can this tool tell me my monitor\'s response time in milliseconds?',
                a: 'No. Milliseconds require a high-speed camera or dedicated test hardware. This tool is a visual check for ghosting and overshoot - useful for spotting a real problem or comparing settings, not for verifying a spec sheet number.',
              },
              {
                q: 'I see ghosting - is my monitor defective?',
                a: 'Usually not. Check the overdrive (OD) setting in your monitor\'s on-screen menu first - it\'s the most common fixable cause. If ghosting persists at every overdrive setting and is much worse than similar monitors, that\'s a stronger signal of a genuine panel issue.',
              },
              {
                q: 'Why does the trail change when I change the overdrive setting?',
                a: 'Overdrive works by overdriving the voltage sent to pixels to make them switch color faster. Too little and you get ghosting (trailing); too much and you get overshoot (a halo leading ahead of the object). The right setting depends on your specific panel.',
              },
              {
                q: 'Does a higher refresh rate fix ghosting?',
                a: 'It helps with motion blur (because each frame is shown for less time) but doesn\'t fix true ghosting, which comes from how fast the pixels themselves can change color - a panel response time issue, not a refresh rate issue.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href={monitorTestHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            See the full Monitor Test <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={gamingHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Gaming Monitor Test Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
