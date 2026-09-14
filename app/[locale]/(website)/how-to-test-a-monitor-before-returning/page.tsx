// app/[locale]/(website)/how-to-test-a-monitor-before-returning/page.tsx
// Closes a real gap found during SERP research: active, unanswered discussion
// on Reddit/AnandTech/Tom's Guide forums about testing a monitor before a
// return window closes, with no single dedicated page owning the topic.

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { generateMultilingualMetadata, breadcrumbSchemaMultilingual, faqSchema } from '@/lib/seo';
import { getLocaleFromParams } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/link-utils';
import { t } from '@/lib/translations';

const PAGE_PATH = '/how-to-test-a-monitor-before-returning';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await getLocaleFromParams(props.params);

  return generateMultilingualMetadata({
    locale,
    title: 'How to Test a New Monitor Before Returning It | Complete Checklist',
    description:
      'Most monitor defects only show up if you know where to look. Run this checklist before your return window closes: dead pixels, backlight bleed, uniformity, ghosting, and more.',
    path: PAGE_PATH,
    keywords: [
      'how to test a monitor before returning',
      'test new monitor before buying',
      'monitor return checklist',
      'how to check a new monitor for defects',
      'monitor dead on arrival checklist',
    ],
  });
}

const CHECKLIST = [
  {
    n: 1,
    title: 'Inspect it before you even power it on',
    body:
      "Check the box for shipping damage, confirm every accessory (power cable, video cable, stand, screws) is actually in the box, and look at the panel itself for scratches, dents, or a cracked corner. If anything looks wrong here, photograph it now, before you touch the monitor further - it's the easiest return case there is.",
    linkPath: null as string | null,
    linkLabel: null as string | null,
  },
  {
    n: 2,
    title: 'Dead and stuck pixels',
    body:
      'The classic check, and the fastest to run. Cycle through solid colors in fullscreen and look for spots that don\'t change - dark spots are dead pixels, colored spots that don\'t match the background are stuck pixels.',
    linkPath: '/dead-pixel-test',
    linkLabel: 'Run the Dead Pixel Test',
  },
  {
    n: 3,
    title: 'Backlight bleed and IPS glow',
    body:
      'Dim the room, let the monitor warm up for 15-20 minutes, then run a full-black screen and check the corners and edges. Move your head side to side - light that stays fixed in place is bleed; light that shifts with your angle is normal IPS glow, not a defect.',
    linkPath: '/backlight-bleed-test',
    linkLabel: 'Run the Backlight Bleed Test',
  },
  {
    n: 4,
    title: 'Uniformity and color casts',
    body:
      'A full white screen reveals backlight unevenness, dust under the panel, and any tint or color cast across the surface. A full black or dark-gray screen shows the same for contrast and black-level consistency.',
    linkPath: '/white-screen',
    linkLabel: 'Run the White Screen Test',
  },
  {
    n: 5,
    title: 'Brightness and contrast',
    body:
      'Confirm the display actually reaches a usable maximum brightness and that dark and light tones stay separated instead of crushing together - both are quick to spot with a gradient.',
    linkPath: '/brightness-test',
    linkLabel: 'Run the Brightness Test',
  },
  {
    n: 6,
    title: 'Ghosting and response time (especially for gaming monitors)',
    body:
      "If you bought this for gaming, this step matters most. Watch for a trailing edge behind moving objects (ghosting) or a halo leading ahead of them (overshoot), and try your monitor's overdrive settings to see which produces the cleanest motion.",
    linkPath: '/monitor-response-time-test',
    linkLabel: 'Run the Response Time & Ghosting Test',
  },
  {
    n: 7,
    title: 'Ports, refresh rate, and advertised specs',
    body:
      "Plug in every input you actually plan to use, not just the one it shipped connected with. If you bought a high-refresh-rate monitor, confirm your OS display settings actually show the advertised Hz - it's common for a display to silently default to 60Hz until you select the higher rate manually.",
    linkPath: null,
    linkLabel: null,
  },
];

export default async function TestBeforeReturningPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocaleFromParams(params);
  const translate = t(locale);

  const breadcrumbs = breadcrumbSchemaMultilingual(
    [
      { name: translate('home'), path: '/' },
      { name: 'Resources', path: '/tools' },
      { name: 'Test a Monitor Before Returning It', path: PAGE_PATH },
    ],
    locale
  );

  const faqItems = [
    {
      question: 'How long do I have to return a monitor?',
      answer:
        'It depends entirely on where you bought it - most electronics retailers offer somewhere in the 15-30 day range, and manufacturer warranties are separate and usually longer but require shipping the unit back. Check your specific receipt or order confirmation; don\'t assume a standard window.',
    },
    {
      question: 'How many dead pixels are acceptable before I should return a monitor?',
      answer:
        'Most manufacturers allow a small number (commonly 0-8) depending on their specific warranty terms - check yours for the exact policy. A single dead pixel found during this checklist, while still inside your return window, is usually still worth acting on even if the manufacturer would technically call it within spec.',
    },
    {
      question: 'Is some backlight bleed normal, or should I return the monitor?',
      answer:
        "A small amount visible only on a black screen in a dark room is normal on most LCD monitors and usually isn't grounds for return on its own. Bleed visible during regular content in a normally-lit room is a much stronger case - and if you're already inside your return window, there's little downside to acting on it.",
    },
    {
      question: 'Should I test the monitor before or after setting up all my software?',
      answer:
        'Before. Run this checklist the same day the monitor arrives, ideally within the first hour, so you still have the box, packaging, and your full return window if something is wrong. Waiting even a few days to "get around to it" is the most common way people miss a return deadline.',
    },
  ];

  const faq = faqSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        suppressHydrationWarning
      />

      <section className="section py-12 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: translate('home'), path: getLocalizedPath(locale, '/') },
              { name: 'Resources', path: getLocalizedPath(locale, '/tools') },
              { name: 'Test a Monitor Before Returning It' },
            ]}
          />
          <div className="max-w-3xl mx-auto mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Test a New Monitor Before Returning It
            </h1>
            <p className="text-xl text-slate-600 mb-6">
              Most monitor defects don&apos;t announce themselves - they only show up if you know where to look.
              Run this checklist the day your monitor arrives, while your return window is still wide open.
            </p>
          </div>
        </div>
      </section>

      <section className="section py-12">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2>Why This Matters More Than It Seems</h2>
            <p>
              A monitor can look completely fine for normal browsing and still have a dead pixel you&apos;d only
              spot on a solid color, backlight bleed you&apos;d only see in a dark room, or ghosting that only
              shows up in a fast-moving game. None of that is obvious from unboxing it and opening a browser.
              The return window is the only time fixing any of this is free and easy - once it closes, you&apos;re
              stuck filing a manufacturer warranty claim (if you even can), which is slower and often requires you
              to ship the monitor back at your own initial expense.
            </p>
            <p>Set aside 15-20 minutes. Run every step below in order. Document anything that looks wrong.</p>
          </div>

          {/* The checklist */}
          <div className="mt-12 space-y-6">
            {CHECKLIST.map((item) => (
              <div key={item.n} className="card p-6 flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                  {item.n}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mb-3">{item.body}</p>
                  {item.linkPath && item.linkLabel && (
                    <Link
                      href={getLocalizedPath(locale, item.linkPath)}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      {item.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none mt-12">
            <h2>What&apos;s Normal vs. What&apos;s Worth Returning</h2>
            <p>
              Not every imperfection is a defect. Manufacturers generally tolerate a small number of dead or
              stuck pixels, a faint amount of backlight bleed visible only in a dark room, and minor IPS glow -
              all are normal manufacturing variance, not damage. The honest line to draw: if the issue is only
              visible under deliberately harsh test conditions (pure black, dark room, close inspection) and
              disappears during normal use, it&apos;s probably within tolerance. If it&apos;s visible during
              regular content in a normally-lit room, that&apos;s a much stronger case for a return.
            </p>

            <h2>Documenting an Issue</h2>
            <p>
              If you do find something, document it properly before you contact the retailer or manufacturer:
            </p>
            <ul>
              <li>Photograph the issue with the exact test screen visible (a phone camera exaggerates some
                defects, like backlight bleed, so use it for evidence, not for your own judgment call)</li>
              <li>Note the model number and serial number, both usually on a label on the back of the unit</li>
              <li>Write down the exact test conditions - which tool, what brightness setting, room lighting</li>
              <li>Keep the original box and all packaging until the return or exchange is fully resolved</li>
            </ul>

            <h2>Know Your Return Window</h2>
            <p>
              Return policies vary by retailer, and this guide won&apos;t guess at any specific one - check your
              receipt or order confirmation for your actual deadline. What&apos;s consistent across almost every
              retailer: the return window is shorter and far less hassle than a manufacturer warranty claim, which
              is why running this checklist immediately, rather than whenever you get around to it, is the single
              highest-leverage thing you can do here.
            </p>
          </div>

          {/* Cross-links */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-3 text-slate-900">Keep Testing</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href={getLocalizedPath(locale, '/monitor-test')} className="text-blue-600 font-semibold hover:underline">
                See the full Monitor Test →
              </Link>
              <Link href={getLocalizedPath(locale, '/monitor-buying-guide')} className="text-blue-600 font-semibold hover:underline">
                Read the Monitor Buying Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section py-12 bg-slate-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
