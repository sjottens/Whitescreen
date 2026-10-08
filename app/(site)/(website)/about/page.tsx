// app/(site)/(website)/about/page.tsx - About page: who builds the site and how the tests work

import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/breadcrumbs';
import { pageMetadata, breadcrumbSchema } from '@/lib/seo';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { AUTHOR } from '@/lib/author';
import { translate } from '@/lib/translations';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata({
    title: translate('about_title'),
    description: translate('about_description'),
    path: '/about',
  });
}

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${SITE_URL}/about`,
  url: `${SITE_URL}/about`,
  name: `About ${SITE_NAME}`,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/about#author`,
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.shortBio,
    knowsAbout: AUTHOR.knowsAbout,
    url: `${SITE_URL}/about#author`,
  },
};

const TOOLS = [
  { href: '/dead-pixel-test', name: 'Dead Pixel Test', text: 'Cycles full-screen colors so dead, stuck and hot pixels stand out.' },
  { href: '/dead-pixel-fixer', name: 'Dead Pixel Fixer', text: 'Flashes rapidly changing colors over a stuck pixel to try to free it.' },
  { href: '/color-screen', name: 'White, Black & Color Screens', text: 'Solid full-screen colors for uniformity, tint, bleed and subpixel checks.' },
  { href: '/backlight-bleed-test', name: 'Backlight Bleed Test', text: 'Near-black screens with corner markers to judge bleed and IPS glow.' },
  { href: '/monitor-response-time-test', name: 'Response Time Test', text: 'A moving pattern to spot ghosting and overshoot by eye.' },
  { href: '/tools', name: 'Hardware Tests', text: 'Microphone, keyboard, webcam and click speed tests.' },
];

export default async function AboutPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: translate('home'), path: '/' },
    { name: translate('about'), path: '/about' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        suppressHydrationWarning
      />

      <Breadcrumbs items={[{ name: translate('home'), path: '/' }, { name: translate('about') }]} />

      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">{translate('about_title')}</h1>
          <p className="text-xl text-slate-700">
            TestaScreen is a free set of browser-based tests for checking a screen the way a professional would: pixel
            by pixel, color by color, before a defect has a chance to become a problem.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-4xl">
          <div id="author" className="not-prose mb-12 flex scroll-mt-28 flex-col gap-6 rounded-2xl border border-slate-700 bg-slate-900/60 p-6 md:flex-row md:p-8">
            <div
              className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-[#00DC82]/15 text-2xl font-bold text-[#00DC82]"
              aria-hidden="true"
            >
              {AUTHOR.initials}
            </div>
            <div>
              <h2 className="mb-1 text-2xl md:text-3xl">Who builds TestaScreen</h2>
              <p className="mb-5 text-sm font-medium uppercase tracking-wide text-[#00DC82]">
                {AUTHOR.name} &middot; {AUTHOR.jobTitle}
              </p>
              <div className="space-y-4 text-lg leading-relaxed text-slate-300">
                <p>
                  I&apos;m {AUTHOR.name}, and I build and run TestaScreen. I&apos;ve worked as a front-end developer for
                  24 years. That work is about screens more than most people realize: making layouts land on exactly
                  the right pixel, checking the same design on monitors, laptops, tablets and phones, and learning to
                  tell when the display, not the code, is the reason something looks wrong.
                </p>
                <p>
                  For 15 years I&apos;ve also worked as a graphic specialist in image editing, retouching and preparing
                  images where color and detail have to be exactly right. That work only goes well on a screen you can
                  trust, and it taught me how much a slightly tinted white, a darker corner or one stuck subpixel can
                  matter.
                </p>
                <p>
                  TestaScreen is the toolkit I wanted for that work: quick, honest tests that run in any browser, with
                  a clear explanation of what you are looking at and what counts as a real defect.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>What you can test here</h2>
          </div>
          <ul className="not-prose my-6 grid list-none grid-cols-1 gap-4 pl-0 md:grid-cols-2">
            {TOOLS.map((tool) => (
              <li key={tool.href} className="mb-0">
                <Link
                  href={tool.href}
                  className="block h-full rounded-xl border border-slate-700 bg-slate-900/60 p-5 transition-colors hover:border-[#00DC82]/60"
                >
                  <span className="mb-1 block font-semibold text-slate-100">{tool.name}</span>
                  <span className="block text-sm text-slate-300">{tool.text}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="prose prose-lg max-w-none">
            <h2>How the tests work, and their limits</h2>
            <p>
              Every tool is built to do one specific thing you can check with your own eyes: fill the screen with a
              color, draw a pattern, move an object or flash a pixel. Everything runs in your browser and nothing is
              uploaded.
            </p>
            <p>
              A browser test is very good at finding dead and stuck pixels, backlight bleed, uneven brightness, color
              tints and visible ghosting. It cannot measure what needs dedicated hardware: calibrated color accuracy
              needs a colorimeter, and exact response times in milliseconds need a high-speed camera or a lab setup.
              Where that matters, the tool page says so.
            </p>

            <h2>Independent</h2>
            <p>
              TestaScreen has no manufacturer sponsors and no paid placements. Ads, where they are shown, are placed by
              Google and never decide what a page recommends.
            </p>

            <h2>Found a mistake?</h2>
            <p>
              If a test behaves oddly on your screen or something on the site is wrong or unclear, please let me know
              through the <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
