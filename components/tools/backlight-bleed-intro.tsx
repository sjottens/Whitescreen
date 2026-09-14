'use client';

import Link from 'next/link';
import { Lightbulb, ArrowRight, Eye, MoveHorizontal } from 'lucide-react';
import { getLocalizedPath } from '@/lib/link-utils';

interface BacklightBleedIntroProps {
  locale: string;
}

export default function BacklightBleedIntro({ locale }: BacklightBleedIntroProps) {
  const monitorTestHref = getLocalizedPath(locale as any, '/monitor-test');
  const buyingGuideHref = getLocalizedPath(locale as any, '/monitor-buying-guide');

  return (
    <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16">
      <div className="container">
        {/* Main Intro */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
            Backlight Bleed Test &amp; IPS Glow Checker
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-6">
            Fill your screen with pure black and check the edges and corners for light that shouldn&apos;t be there.
            This test also helps you tell backlight bleed (a hardware defect) apart from IPS glow (a normal
            characteristic of IPS panels) - the two get confused constantly, and the difference matters if
            you&apos;re deciding whether to return a monitor.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">100%</div>
              <p className="text-slate-300 text-sm">Free to Use</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Corner Guides</div>
              <p className="text-slate-300 text-sm">Built In</p>
            </div>
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 backdrop-blur">
              <div className="text-emerald-400 font-bold text-2xl mb-1">Instant</div>
              <p className="text-slate-300 text-sm">Results in Seconds</p>
            </div>
          </div>
        </div>

        {/* Bleed vs Glow */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
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
          <h2 className="text-2xl font-bold text-white mb-3">The 10-Second Test</h2>
          <p className="text-slate-300">
            Start the test below in a dim room, then sit directly in front of your screen and slowly move your head
            side to side. <strong className="text-white">Light that shifts or changes with your angle is IPS glow.
            Light that stays fixed in the same place and shape is backlight bleed.</strong>
          </p>
        </div>

        {/* FAQ Section - kept word-for-word identical to the FAQPage schema
            on this page, so markup and visible content never drift apart. */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Is backlight bleed a defect I can return the monitor for?',
                a: 'A small amount visible only on a black screen in a dark room is normal on most LCD monitors and usually isn\'t covered by warranty. Bleed visible during regular content in a normally-lit room is a much stronger case for a return - check your retailer\'s return window.',
              },
              {
                q: 'Can backlight bleed be fixed?',
                a: 'Not reliably. It comes from how the panel and backlight assembly were manufactured and assembled. Some people loosen and retighten the back panel screws with mixed, inconsistent results - it is not a guaranteed fix and can void warranty if done incorrectly.',
              },
              {
                q: 'Does every IPS monitor have glow?',
                a: 'Yes, to some degree - it is a characteristic of how IPS panels are built, not a manufacturing flaw. The amount varies by panel and viewing angle, but it cannot be eliminated entirely on IPS technology.',
              },
              {
                q: 'Why does my monitor look worse right out of the box?',
                a: 'Panels can show more bleed when cold. Let the display run for 15-20 minutes and re-test before judging - and test at a realistic brightness (30-50%), not maximum.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 backdrop-blur">
                <h3 className="font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
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
