// app/(site)/(website)/monitor-test/page.tsx - Monitor Test Browser Landing Page

import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Monitor, CheckCircle2, AlertTriangle, Gamepad2, ShoppingCart, ClipboardCheck } from 'lucide-react';
import type { ReactNode } from 'react';
import { LinkButton } from '@/components/ui/button';
import { pageMetadata, faqSchema } from '@/lib/seo';
import { translate } from '@/lib/translations';
import { TEST_TOOLS, COLOR_TOOLS } from '@/lib/constants';
import { PAGE_COPY } from '@/lib/page-copy';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    ...PAGE_COPY['/monitor-test'],
    path: '/monitor-test',
    keywords: [
      translate('monitor_test_keyword_1' as any),
      translate('monitor_test_keyword_2' as any),
      translate('monitor_test_keyword_3' as any),
    ],
  });
}

// Settings that make a screen look worse or better than it is. Each one is a
// reason a test result can't be trusted, so they come before the tests.
const PREP: Array<{ title: string; text: ReactNode }> = [
  {
    title: 'Let it warm up',
    text: 'Leave the monitor on for about half an hour first. The backlight and the panel take a while to settle, and uniformity and color often look a little different in the first minutes.',
  },
  {
    title: 'Use the native resolution at 100% scaling',
    text: 'At any other resolution the monitor stretches the image, which blurs single pixels. That can hide a dead pixel, or add soft lines that are not really there.',
  },
  {
    title: 'Turn off the clever modes',
    text: 'Dynamic contrast, eco or power-saving modes, local dimming and HDR all change the brightness of parts of the image on their own, which makes bleed, uniformity and gray-step results hard to read. Switch them off while you test, and back on afterwards if you like them.',
  },
  {
    title: 'Clean the screen and dim the room',
    text: 'Wipe the panel with a dry microfiber cloth so dust is not mistaken for a dead pixel. Do the dark tests in a dim room: daylight or a lamp behind you hides bleed and glow.',
  },
  {
    title: 'Go full screen and sit where you normally sit',
    text: (
      <>
        Every test has a full-screen button (or press F11). Look straight on from your normal seat, because viewing
        from an angle makes IPS glow and color shift look worse than they are. Wondering how sharp your screen should
        look from there? The <Link href="/tools/pixel-density-calculator">pixel density calculator</Link> works it
        out.
      </>
    ),
  },
];

// "I see X" -> the test that confirms it.
const SYMPTOMS: Array<{ symptom: string; test: string; path: string; note: string }> = [
  {
    symptom: 'A dot that is always black, white or one color',
    test: 'Dead pixel test',
    path: '/dead-pixel-test',
    note: 'a dot that stays black on white is dead; one that stays red, green or blue on black is stuck.',
  },
  {
    symptom: 'A stuck colored dot you want to get rid of',
    test: 'Dead pixel fixer',
    path: '/dead-pixel-fixer',
    note: 'stuck pixels sometimes recover after flashing colors for a while. Dead, black pixels do not.',
  },
  {
    symptom: 'Light coming in from the edges or corners in dark scenes',
    test: 'Backlight bleed test',
    path: '/backlight-bleed-test',
    note: 'tells bleed (patches that stay put) apart from IPS glow (which changes as you move your head).',
  },
  {
    symptom: 'Patches, a tint or one darker side on a plain background',
    test: 'White screen',
    path: '/white-screen',
    note: 'uniformity problems are easiest to see on white at your usual brightness.',
  },
  {
    symptom: 'Trails or halos behind moving objects',
    test: 'Response time test',
    path: '/monitor-response-time-test',
    note: 'try each overdrive setting in the monitor menu; the right one often gets rid of the halo.',
  },
  {
    symptom: 'Dark scenes look crushed, or the whole picture looks washed out',
    test: 'Brightness test',
    path: '/brightness-test',
    note: 'if the darkest or lightest gray steps blend together, brightness, contrast or gamma are off.',
  },
  {
    symptom: 'Text is tiring to read, or you need colors that work for color-blind viewers',
    test: 'Contrast test',
    path: '/contrast-test',
    note: 'checks text against the WCAG contrast levels and previews common types of color blindness.',
  },
];

// Things that look like a fault during a test but are not one.
const FALSE_ALARMS: Array<{ title: string; text: string }> = [
  {
    title: 'Dust or a smudge',
    text: 'A dark speck with soft edges, or one that moves when you wipe the screen, is on the surface, not in the panel. A dead pixel is a sharp, tiny square that never moves.',
  },
  {
    title: 'IPS glow',
    text: 'A gray or warm sheen in the corners of a black screen that grows or shrinks as you move your head is IPS glow, which comes with the panel type. Real backlight bleed stays in the same place from every angle.',
  },
  {
    title: 'Banding in gradients',
    text: 'Faint steps in a smooth gradient are normal on many panels, and browser zoom or display scaling makes them worse. Check again at 100% zoom before you call it a fault.',
  },
  {
    title: 'Patterns in a photo of the screen',
    text: 'A phone camera adds wavy lines (moiré) and makes bleed look much brighter than it is. Judge with your eyes and keep the photo as a record only. Lowering the camera exposure until the photo matches what you see helps.',
  },
  {
    title: 'A faint shimmer on dark gray',
    text: 'Some panels switch very quickly between two shades to show colors they cannot display directly (known as FRC or dithering). Up close you can see it on dark gradients. It is not a defect.',
  },
];

const EXTRA_FAQS = [
  {
    question: 'How long does a full monitor test take?',
    answer:
      'About 15 minutes once the monitor has warmed up: a few minutes for the dead pixel colors, a few in a dim room for bleed and uniformity, and the rest for brightness, contrast and motion. It takes longer if you also try different overdrive or picture settings.',
  },
  {
    question: 'Can I use these tests on a laptop, TV or phone?',
    answer:
      "Yes. Every test runs in a browser, so open the page on the device you want to check. On a smart TV, use its built-in browser. Casting from a phone is less reliable, because the TV then scales and compresses the picture.",
  },
  {
    question: 'What should I do if I find a fault?',
    answer:
      "Rule out the false alarms on this page first. Then take a photo and write down the date. For a new monitor, compare what you found with the retailer's return policy and the manufacturer's pixel policy before the return window closes. Our guide to testing a monitor before returning it explains what usually counts as a fault and how to document it.",
  },
];

export default async function MonitorTestPage() {

  // The tests a full monitor check actually walks through, in the order a
  // careful buyer would run them - dead pixels first, then uniformity/
  // backlight, then brightness/contrast, then the rest of the color set.
  const dead_pixel = TEST_TOOLS.find((t) => t.id === 'dead-pixel-test')!;
  const backlightBleed = TEST_TOOLS.find((t) => t.id === 'backlight-bleed-test')!;
  const brightness = TEST_TOOLS.find((t) => t.id === 'brightness-test')!;
  const contrast = TEST_TOOLS.find((t) => t.id === 'contrast-test')!;
  const responseTime = TEST_TOOLS.find((t) => t.id === 'response-time-test')!;
  const white = COLOR_TOOLS.find((c) => c.id === 'white-screen')!;
  const black = COLOR_TOOLS.find((c) => c.id === 'black-screen')!;

  const testCards = [
    { path: dead_pixel.path, nameKey: dead_pixel.nameKey, descKey: dead_pixel.descriptionKey },
    { path: white.path, nameKey: white.nameKey, descKey: white.descriptionKey },
    { path: black.path, nameKey: black.nameKey, descKey: black.descriptionKey },
    { path: backlightBleed.path, nameKey: backlightBleed.nameKey, descKey: backlightBleed.descriptionKey },
    { path: brightness.path, nameKey: brightness.nameKey, descKey: brightness.descriptionKey },
    { path: contrast.path, nameKey: contrast.nameKey, descKey: contrast.descriptionKey },
    { path: responseTime.path, nameKey: responseTime.nameKey, descKey: responseTime.descriptionKey },
  ];

  // FAQ schema built from the visible "what a browser test can/can't tell
  // you" section below, so the two never drift out of sync.
  const limitsFaq = faqSchema([
    ...(['can', 'cant'] as const).map((kind) => ({
      question: translate(`monitor_test_hub_limits_${kind}_title` as any),
      answer: translate(`monitor_test_hub_limits_${kind}_text` as any),
    })),
    ...EXTRA_FAQS,
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(limitsFaq) }}
        suppressHydrationWarning
      />

      {/* Header Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{translate('monitor_test_badge' as any)}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('monitor_test_hub_h1' as any)}</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            {translate('monitor_test_hub_intro' as any)}
          </p>
        </div>
      </section>

      {/* Test Grid - the actual testing pillar content */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">{translate('monitor_test_hub_tests_title' as any)}</h2>
          <p className="text-slate-600 mb-8">{translate('monitor_test_hub_full_sequence_cta' as any)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {testCards.map((card, idx) => (
              <Link
                key={card.path}
                href={card.path}
                className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="text-xs font-mono text-blue-500 mb-1">{String(idx + 1).padStart(2, '0')}</div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {translate(card.nameKey as any)}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{translate(card.descKey as any)}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}

            {/* Gaming monitor test - distinct card, not part of the numbered
                sequence, since it targets a different (gaming) intent. */}
            <Link
              href={'/monitor-response-time-test'}
              className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <Gamepad2 className="w-4 h-4 text-blue-500 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {translate('monitor_test_hub_card_gaming' as any)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{translate('monitor_test_hub_card_gaming_desc' as any)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>

            {/* Buying guide - commercial-intent companion to the test suite */}
            <Link
              href={'/monitor-buying-guide'}
              className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <ShoppingCart className="w-4 h-4 text-blue-500 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {translate('monitor_test_hub_card_buying_guide' as any)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{translate('monitor_test_hub_card_buying_guide_desc' as any)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>

            {/* Test-before-returning guide - the clearest linkable-asset
                opportunity found in this niche's SERP research */}
            <Link
              href={'/how-to-test-a-monitor-before-returning'}
              className="group card p-5 hover:shadow-lg transition-all hover:border-blue-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <ClipboardCheck className="w-4 h-4 text-blue-500 mb-2" />
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {translate('monitor_test_hub_card_returning' as any)}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">{translate('monitor_test_hub_card_returning_desc' as any)}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-600 transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Before you start - settings that would make any result unreliable */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">Before You Start</h2>
          <p className="text-slate-600 mb-8">
            Many &quot;faults&quot; found in the first minute come from the setup rather than the screen. Sort these out
            first:
          </p>
          <ol className="space-y-4 list-none pl-0">
            {PREP.map((item, idx) => (
              <li key={item.title} className="card p-5 mb-0 flex gap-4">
                <span className="text-xs font-mono text-blue-500 mt-1">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-0">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Symptom -> test, for visitors who arrive with a specific complaint */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">Which Test Do You Need?</h2>
          <p className="text-slate-600 mb-8">Already noticed something odd? Start with the test that matches it.</p>
          <ul className="space-y-3 list-none pl-0">
            {SYMPTOMS.map((item) => (
              <li key={item.symptom} className="card p-5 mb-0">
                <p className="font-semibold text-slate-900 mb-1">{item.symptom}</p>
                <p className="text-sm text-slate-600 mb-0">
                  <Link href={item.path} className="font-semibold text-blue-600 hover:underline">
                    {item.test}
                  </Link>
                  : {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* False alarms - what looks like a defect during testing but isn't */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">It Might Not Be a Fault</h2>
          <p className="text-slate-600 mb-8">
            These come up during testing all the time and are usually harmless, so rule them out before you contact
            the seller. For what does count as a fault on a new monitor, see{' '}
            <Link href="/how-to-test-a-monitor-before-returning" className="text-blue-600 hover:underline">
              how to test a monitor before returning it
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FALSE_ALARMS.map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a browser test can/can't tell you - honest limits, on purpose */}
      <section className="section">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-3 text-slate-900">{translate('monitor_test_hub_limits_title' as any)}</h2>
          <p className="text-slate-600 mb-8">{translate('monitor_test_hub_limits_intro' as any)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900">{translate('monitor_test_hub_limits_can_title' as any)}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{translate('monitor_test_hub_limits_can_text' as any)}</p>
            </div>
            <div className="card p-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-bold text-slate-900">{translate('monitor_test_hub_limits_cant_title' as any)}</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{translate('monitor_test_hub_limits_cant_text' as any)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - the same questions are in the FAQPage schema above */}
      <section className="section-alt">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {EXTRA_FAQS.map((faq) => (
              <div key={faq.question} className="card p-5">
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-0">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <LinkButton href={'/tools'} variant="primary" size="lg">
              {translate('monitor_test_back_all_tools' as any)}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
