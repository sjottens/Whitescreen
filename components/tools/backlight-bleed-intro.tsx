'use client';

import Link from 'next/link';
import { Lightbulb, ArrowRight, Eye, MoveHorizontal } from 'lucide-react';

export default function BacklightBleedIntro() {
  const monitorTestHref = '/monitor-test';
  const buyingGuideHref = '/monitor-buying-guide';

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">

        {/* Bleed vs Glow */}
        <div className="mb-12">
          <h2 id="backlight-bleed-vs-ips-glow" className="scroll-mt-24 text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-emerald-400" />
            Backlight Bleed vs. IPS Glow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Backlight Bleed</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Light escaping around the panel edges where the backlight should be fully blocked. Shows up as
                sharp, localized bright patches or streaks - a hardware characteristic that varies unit to unit.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Stays fixed in place and shape as you move</li>
                <li>• Happens on any LCD panel type (IPS, VA, TN)</li>
                <li>• Some is normal; a lot, visible in real content, is a stronger case for return</li>
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <MoveHorizontal className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">IPS Glow</h3>
              </div>
              <p className="text-slate-300 mb-4">
                A soft haze near the corners caused by the IPS layer itself, most visible at an angle. It&apos;s a
                normal characteristic of IPS panels, not a defect - every IPS monitor has some degree of it.
              </p>
              <ul className="space-y-2 text-slate-400">
                <li>• Shifts in shape or intensity as your viewing angle changes</li>
                <li>• Specific to IPS (and IPS-type) panels</li>
                <li>• Not a warranty issue - it&apos;s how the panel technology works</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick differentiation test */}
        <div className="mb-12 bg-slate-900/50 border border-cyan-500/30 rounded-lg p-6 backdrop-blur">
          <h2 id="the-10-second-test" className="scroll-mt-24 text-2xl font-bold text-white mb-3">The 10-Second Test</h2>
          <p className="text-slate-300">
            Start the test below in a dim room, then sit directly in front of your screen and slowly move your head
            side to side. <strong className="text-white">Light that shifts or changes with your angle is IPS glow.
            Light that stays fixed in the same place and shape is backlight bleed.</strong>
          </p>
        </div>


        {/* Cross-links */}
        <div className="flex flex-wrap gap-4">
          <Link
            href={monitorTestHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            See the full Monitor Test <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={buyingGuideHref}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Read the Monitor Buying Guide <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
