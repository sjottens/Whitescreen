// app/(site)/(tools)/keyboard-test/page.tsx - Keyboard Test

import Link from 'next/link';
import ToolPage from '@/components/hardware/tool-page';
import KeyboardTest from '@/components/hardware/keyboard-test';
import { toolMetadata, type Faq } from '@/lib/tool-schema';
import { PAGE_COPY } from '@/lib/page-copy';

const PATH = '/keyboard-test' as const;
const DESCRIPTION = PAGE_COPY[PATH].description;

export const metadata = toolMetadata({ ...PAGE_COPY[PATH], path: PATH });

const FAQS: Faq[] = [
  {
    question: 'Does this work with Mac keyboards?',
    answer:
      'Yes. Command, Option and Control all register. Some Mac-specific function keys, such as brightness and Mission Control, are handled by macOS itself and never reach the browser.',
  },
  {
    question: "Why doesn't the Fn key light up?",
    answer:
      "The Fn key is handled inside the keyboard itself and never sent to your computer. No website can detect it. That's normal, not a fault.",
  },
  {
    question: 'Does this test record what I type?',
    answer: 'No. Keys are only shown on the screen while you test. Nothing is saved or sent anywhere.',
  },
  {
    question: 'Can I test my laptop keyboard?',
    answer:
      "Yes, this works exactly the same for laptop keyboards. It's a quick way to check a second-hand laptop before you buy it.",
  },
  {
    question: "What's the difference between ANSI and ISO?",
    answer:
      "They're the two most common physical layouts. ANSI is standard in the US and has a wide, flat Enter key. ISO is common in Europe and has a tall Enter key plus an extra key next to the left Shift. Pick the one that matches your keyboard.",
  },
];

export default function KeyboardTestPage() {
  return (
    <ToolPage
      toolId="keyboard-test"
      path={PATH}
      name="Keyboard Test"
      description={DESCRIPTION}
      heading="Keyboard Test Online – Check Every Key"
      intro="Press every key on your keyboard. Each key lights up while you hold it and turns green once it's tested, so you can see at a glance which ones never registered."
      tool={<KeyboardTest />}
      affiliate={{
        heading: 'Time for a new keyboard?',
        text: "Keys that chatter, stick or give up entirely usually won't recover. If your keyboard is a few years old, replacing it is often less hassle than repairing it. Here are a few we'd consider.",
      }}
      toc={[
        { id: "what-youre-looking-at", label: "What you're looking at" },
        { id: "a-key-doesnt-light-up", label: "A key doesn't light up" },
        { id: "a-key-types-twice", label: "A key types twice" },
        { id: "keys-dont-register-when-pressed-together", label: "Keys don't register when pressed together" },
        { id: "keys-doing-something-strange", label: "Keys doing something strange" },
        { id: "how-this-test-works", label: "How this test works" },
      ]}
      faqs={FAQS}
      wideTool
    >
      <h2 id="what-youre-looking-at">What you&apos;re looking at</h2>
      <p>
        A key lights up while you hold it down and stays green once it&apos;s been tested. Below the keyboard you&apos;ll
        see the name and code of the last key you pressed, plus how many times you&apos;ve pressed it.
      </p>
      <p>
        The code is more useful than it looks. It tells you which physical key your computer thinks you pressed,
        whatever language layout you use. On an AZERTY or German keyboard, the letters on screen might not match the caps
        on your keys, but the codes will still line up with the right position.
      </p>

      <h2 id="a-key-doesnt-light-up">A key doesn&apos;t light up</h2>
      <p>
        First rule out software. Try the same key in a plain text editor like Notepad or TextEdit. If it&apos;s dead
        there too, the problem is the keyboard itself.
      </p>
      <p>
        On a laptop, pay attention to the pattern. When a whole row or a block of keys fails at the same time, that
        usually points to the internal connector rather than the individual keys. That&apos;s a repair job. A single
        dead key on a mechanical keyboard is often just dust under the switch. On keyboards with hot-swap sockets, the
        switch may also have come loose slightly. Pull it out and push it back in firmly.
      </p>

      <h2 id="a-key-types-twice">A key types twice</h2>
      <p>
        This is called chattering. You press once and the computer registers two presses. It&apos;s caused by a worn or
        faulty switch and it&apos;s common on mechanical keyboards after a few years of use.
      </p>
      <p>
        You can check it here. Tap the suspicious key slowly, ten times, and watch the counter below the keyboard. If it
        says 12 or 13, you&apos;ve found your problem. Blowing compressed air under the key sometimes helps. Otherwise
        the switch needs replacing, or you&apos;re looking at a new keyboard. Mouse buttons wear out the same way; the{' '}
        <Link href="/click-speed-test">click speed test</Link> shows whether yours double clicks.
      </p>

      <h2 id="keys-dont-register-when-pressed-together">Keys don&apos;t register when pressed together</h2>
      <p>
        Hold down several keys at once and see how many light up. Cheaper keyboards often can&apos;t handle certain
        combinations of three or more keys. That&apos;s called ghosting, and it matters mostly in games where you hold
        movement keys while pressing something else. Keyboards advertised with &quot;N-key rollover&quot; (NKRO) should
        show every key you hold.
      </p>

      <h2 id="keys-doing-something-strange">Keys doing something strange</h2>
      <p>Before you blame the hardware, check a few settings that catch people out all the time:</p>
      <ul>
        <li>
          <strong>F-keys change the volume or brightness instead.</strong> Your keyboard&apos;s Fn lock is on. On many
          laptops you toggle it with Fn + Esc.
        </li>
        <li>
          <strong>Keys respond slowly or not at all on Windows.</strong> Filter Keys may be turned on. Search for
          &quot;Filter Keys&quot; in the Start menu and switch it off.
        </li>
        <li>
          <strong>The numpad moves the cursor instead of typing numbers.</strong> Num Lock is off.
        </li>
      </ul>

      <h2 id="how-this-test-works">How this test works</h2>
      <p>
        Every press is recorded by the key&apos;s physical position, not by the character it types, so the test works
        the same on QWERTY, AZERTY and other layouts. The counter for a key goes up once per press; holding a key down
        doesn&apos;t add repeats, which is exactly why a key that registers twice stands out. Keys you hold at the same
        time stay highlighted, so you can see which combinations your keyboard can handle.
      </p>
      <p>
        A few keys, such as Print Screen on Windows, only report being released, and the test counts those too. While
        the test is active it catches every key, including Tab, so to get out with the keyboard alone, press Esc three
        times quickly. Nothing you type is stored or sent anywhere.
      </p>
    </ToolPage>
  );
}
