// app/(site)/(website)/tools/page.tsx - Overview of every tool and guide (lib/tool-directory.ts)

import { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';
import { TOOL_GROUPS } from '@/lib/tool-directory';

export const metadata: Metadata = pageMetadata({ ...PAGE_COPY['/tools'], path: '/tools' });

const GROUP_INTROS: Record<string, string> = {
  'screen-tests': 'Full-screen colors and patterns for checking a monitor, laptop, TV or phone display.',
  'hardware-tests': 'Quick checks for the microphone, keyboard, webcam and mouse, and a checklist for buying a used laptop.',
  guides: 'Step-by-step guides for testing a monitor properly, and a calculator for comparing screens before you buy.',
};

// Common reasons people land here, and where each one should start.
const STARTING_POINTS: Array<{ situation: string; links: Array<{ href: string; label: string }>; text: string }> = [
  {
    situation: 'A new monitor just arrived',
    links: [{ href: '/monitor-test', label: 'Monitor test' }],
    text: 'Work through the screen tests in order within the return window, starting with dead pixels.',
  },
  {
    situation: "You're buying a used laptop",
    links: [{ href: '/used-laptop-check', label: 'Used laptop check' }],
    text: 'Open it on the laptop itself at the viewing. It covers the screen, keys, speakers, battery and locks.',
  },
  {
    situation: 'A video call is coming up',
    links: [
      { href: '/mic-test', label: 'Mic test' },
      { href: '/webcam-test', label: 'Webcam test' },
      { href: '/zoom-lighting', label: 'Video call light' },
    ],
    text: 'Check that the right microphone and camera are picked, and use a second screen as a soft light.',
  },
  {
    situation: 'Something looks wrong on screen',
    links: [{ href: '/monitor-test', label: 'Which test do you need?' }],
    text: 'Match what you see, such as a dot, a glow or trails, to the test that confirms it.',
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="pb-4 pt-8 md:pt-12">
        <div className="container max-w-4xl">
          <h1 className="mb-4 text-4xl md:text-5xl">All Free Screen and Hardware Tests</h1>
          <p className="text-lg text-slate-300">
            Every test on TestaScreen runs in your browser, with nothing to install and nothing uploaded. Not sure where
            to start with a monitor? The <Link href="/monitor-test">complete monitor test</Link> walks you through the
            screen tests in the right order.
          </p>
          <nav aria-label="Tool groups" className="mt-6 flex flex-wrap gap-3">
            <section aria-labelledby="where-to-start" className="py-8 md:py-10">
        <div className="container max-w-4xl">
          <h2 id="where-to-start" className="mb-6 text-2xl md:text-3xl">
            Where to Start
          </h2>
          <ul className="grid list-none gap-4 pl-0 sm:grid-cols-2">
            {STARTING_POINTS.map((item) => (
              <li key={item.situation} className="mb-0 rounded-xl border border-slate-700 bg-slate-900/60 p-5">
                <h3 className="mb-1 text-lg font-semibold text-slate-100">{item.situation}</h3>
                <p className="mb-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
                <p className="mb-0 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {item.links.map((link) => (
                    <Link key={link.href} href={link.href} className="font-semibold text-cyan-300 hover:underline">
                      {link.label}
                    </Link>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {TOOL_GROUPS.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="btn btn-secondary btn-sm focus-ring">
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {TOOL_GROUPS.map((group) => (
        <section key={group.id} aria-labelledby={group.id} className="py-8 md:py-10">
          <div className="container">
            <h2 id={group.id} className="mb-2 scroll-mt-24 text-2xl md:text-3xl">
              {group.title}
            </h2>
            <p className="mb-6 max-w-3xl text-slate-300">{GROUP_INTROS[group.id]}</p>
            <ul className="grid list-none gap-4 pl-0 sm:grid-cols-2 lg:grid-cols-3">
              {group.entries.map((tool) => (
                <li key={tool.path} className="mb-0">
                  <Link
                    href={tool.path}
                    className="group block h-full rounded-xl border border-slate-700 bg-slate-900/60 p-5 text-slate-100 transition-colors hover:border-[#00DC82]/60 focus-ring"
                  >
                    <h3 className="mb-1 text-lg font-semibold group-hover:text-[#00DC82]">{tool.name}</h3>
                    <p className="mb-0 text-sm leading-relaxed text-slate-300">{tool.blurb}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section aria-labelledby="how-the-tests-work" className="py-8 md:py-12">
        <div className="tool-content container max-w-4xl">
          <h2 id="how-the-tests-work" className="mb-4 text-2xl md:text-3xl">
            How the Tests Work in Your Browser
          </h2>
          <p>
            Each test is a web page that uses what your browser already offers: full-screen mode, the camera and
            microphone, and keyboard and mouse events. Nothing is installed, and the pictures, sound and key presses
            stay on your device. A few things depend on the browser and the device:
          </p>
          <ul>
            <li>
              <strong>Full screen.</strong> The screen tests fill the whole display in Chrome, Edge, Firefox and Safari
              on a computer, and in most Android browsers. Safari on an iPhone doesn&apos;t let web pages go full
              screen, so the color fills the browser window instead. Turn the phone sideways and scroll a little to hide
              the toolbars.
            </li>
            <li>
              <strong>Camera and microphone.</strong> The browser asks for permission the first time you click Start.
              If you clicked Block by mistake, click the icon to the left of the address bar to change it. The image and
              recordings are only kept in the open tab and are gone when you close it.
            </li>
            <li>
              <strong>Keyboard.</strong> Almost every key reaches the browser, but the Fn key is handled inside the
              keyboard itself, so no website can see it. Some shortcuts, such as the ones that switch windows, are
              taken by the operating system first.
            </li>
            <li>
              <strong>Battery.</strong> Chrome and Edge share the charge level with web pages; Safari and Firefox
              don&apos;t. The <Link href="/used-laptop-check">used laptop check</Link> explains how to read the battery
              health from the laptop&apos;s own settings, which is the figure that really matters.
            </li>
          </ul>
          <p>
            Browser tests are good at showing faults you can see or hear, such as a dead pixel, a key that doesn&apos;t
            register or a silent microphone. They can&apos;t replace measuring equipment: exact color accuracy, response
            time in milliseconds and input lag need a colorimeter or a high-speed camera. The{' '}
            <Link href="/monitor-test">monitor test</Link> page goes into what a browser can and can&apos;t tell you.
          </p>
        </div>
      </section>
    </>
  );
}
