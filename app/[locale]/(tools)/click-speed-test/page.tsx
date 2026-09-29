// app/[locale]/(tools)/click-speed-test/page.tsx - Click Speed (CPS) Test

import ToolPage from '@/components/hardware/tool-page';
import ClickSpeedTest from '@/components/hardware/click-speed-test';
import { toolMetadata, type Faq } from '@/lib/tool-schema';

// English only: /nl/click-speed-test etc. 404 instead of serving an untranslated copy.
export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: 'en' }];
}

const PATH = '/click-speed-test';
const TITLE = 'Click Speed Test (CPS Test) – How Fast Can You Click?';
const DESCRIPTION =
  'Test your clicks per second in 1, 5, 10 or 30 seconds. Track your best score, learn clicking techniques and find out if your mouse is double clicking.';

export const metadata = toolMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQS: Faq[] = [
  {
    question: 'What does CPS mean?',
    answer: 'Clicks per second: the number of times you click, divided by the number of seconds in the test.',
  },
  {
    question: 'What is the average CPS?',
    answer:
      'Most people clicking normally score between 6 and 8 CPS. Above 10 is fast, and with a technique like jitter or butterfly clicking you can go considerably higher.',
  },
  {
    question: 'Is my best score saved?',
    answer:
      "Yes, but only on this device and in this browser. We don't store anything on a server, so if you clear your browser data or switch devices, your best score starts from zero.",
  },
  {
    question: 'Does it work on a phone or tablet?',
    answer:
      'Yes. Tapping the box counts the same as clicking. Scores on touch screens are usually a bit lower than with a mouse.',
  },
  {
    question: 'Does my mouse affect my score?',
    answer:
      'A little. A light, responsive switch makes fast clicking easier, and for drag clicking the surface of the button matters a lot. But practice and technique make far more difference than the mouse itself.',
  },
];

export default function ClickSpeedTestPage() {
  return (
    <ToolPage
      toolId="click-speed-test"
      path={PATH}
      name="Click Speed Test"
      description={DESCRIPTION}
      heading="Click Speed Test"
      intro="Pick a duration and start clicking in the box. The timer starts with your first click."
      tool={<ClickSpeedTest />}
      affiliate={{
        heading: 'Mouse double clicking or wearing out?',
        text: "A worn switch won't fix itself, and it only gets worse. If your mouse registers clicks you didn't make, these are solid replacements for gaming and everyday use.",
      }}
      faqs={FAQS}
      adClearance
    >
      <h2>What&apos;s a good score?</h2>
      <p>
        Most people clicking normally land somewhere between 6 and 8 clicks per second. Get above 10 and you&apos;re
        clearly faster than average. Beyond that, it&apos;s usually technique rather than raw finger speed.
      </p>
      <p>
        The duration makes a big difference. On the 1-second test you can go all out, so scores come out high. On 10 or
        30 seconds your hand gets tired and your number drops. The longer tests are a fairer measure of how fast you can
        keep it up, which is what counts in most games.
      </p>

      <h2>Clicking techniques</h2>
      <p>
        <strong>Jitter clicking.</strong> You tense your forearm until your hand starts to vibrate and your finger taps
        along with it. Most people reach 10 to 14 CPS this way. It&apos;s tiring and puts real strain on your wrist, so
        don&apos;t do it for long.
      </p>
      <p>
        <strong>Butterfly clicking.</strong> Two fingers take turns clicking the same button, usually index and middle
        finger. Easier to keep up than jitter clicking, and it can reach higher scores.
      </p>
      <p>
        <strong>Drag clicking.</strong> You slide a finger across the mouse button so the friction makes it bounce very
        quickly. This can produce extreme numbers, but it depends heavily on the mouse. On some mice it simply
        doesn&apos;t work.
      </p>
      <p>
        Whatever you try, take breaks. Some games and servers also limit or flag very high click speeds, so check the
        rules before you use these techniques there.
      </p>

      <h2>Score suspiciously high?</h2>
      <p>
        If a single slow click sometimes counts as two, it&apos;s not you. It&apos;s your mouse. The switch under the
        button wears out over time and starts sending two signals for one press. It&apos;s one of the most common mouse
        faults, even on expensive gaming mice. Click slowly ten times and count along with the counter. If the numbers
        don&apos;t match, the switch is going.
      </p>
    </ToolPage>
  );
}
