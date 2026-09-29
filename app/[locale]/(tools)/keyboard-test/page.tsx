// app/[locale]/(tools)/keyboard-test/page.tsx - Keyboard Test

import ToolPage from '@/components/hardware/tool-page';
import KeyboardTest from '@/components/hardware/keyboard-test';
import { toolMetadata, type Faq } from '@/lib/tool-schema';

// English only: /nl/keyboard-test etc. 404 instead of serving an untranslated copy.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }];
}

const PATH = '/keyboard-test';
const TITLE = 'Keyboard Test – Check Every Key Online';
const DESCRIPTION =
  'Press every key and see which ones work. Find dead keys, double presses and ghosting in seconds. Works with laptop, mechanical and Mac keyboards.';

export const metadata = toolMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

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
      heading="Keyboard Test"
      intro="Press every key on your keyboard. Each key lights up while you hold it and turns green once it's tested, so you can see at a glance which ones never registered."
      tool={<KeyboardTest />}
      affiliate={{
        heading: 'Time for a new keyboard?',
        text: "Keys that chatter, stick or give up entirely usually won't recover. If your keyboard is a few years old, replacing it is often less hassle than repairing it. Here are a few we'd consider.",
      }}
      faqs={FAQS}
      wideTool
    >
      <h2>What you&apos;re looking at</h2>
      <p>
        A key lights up while you hold it down and stays green once it&apos;s been tested. Below the keyboard you&apos;ll
        see the name and code of the last key you pressed, plus how many times you&apos;ve pressed it.
      </p>
      <p>
        The code is more useful than it looks. It tells you which physical key your computer thinks you pressed,
        whatever language layout you use. On an AZERTY or German keyboard, the letters on screen might not match the caps
        on your keys, but the codes will still line up with the right position.
      </p>

      <h2>A key doesn&apos;t light up</h2>
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

      <h2>A key types twice</h2>
      <p>
        This is called chattering. You press once and the computer registers two presses. It&apos;s caused by a worn or
        faulty switch and it&apos;s common on mechanical keyboards after a few years of use.
      </p>
      <p>
        You can check it here. Tap the suspicious key slowly, ten times, and watch the counter below the keyboard. If it
        says 12 or 13, you&apos;ve found your problem. Blowing compressed air under the key sometimes helps. Otherwise
        the switch needs replacing, or you&apos;re looking at a new keyboard.
      </p>

      <h2>Keys don&apos;t register when pressed together</h2>
      <p>
        Hold down several keys at once and see how many light up. Cheaper keyboards often can&apos;t handle certain
        combinations of three or more keys. That&apos;s called ghosting, and it matters mostly in games where you hold
        movement keys while pressing something else. Keyboards advertised with &quot;N-key rollover&quot; (NKRO) should
        show every key you hold.
      </p>

      <h2>Keys doing something strange</h2>
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
    </ToolPage>
  );
}
