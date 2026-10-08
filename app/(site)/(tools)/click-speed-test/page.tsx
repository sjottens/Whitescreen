// app/(site)/(tools)/click-speed-test/page.tsx - Click Speed (CPS) Test

import ToolPage from '@/components/hardware/tool-page';
import ClickSpeedTest from '@/components/hardware/click-speed-test';
import { toolMetadata, type Faq } from '@/lib/tool-schema';
import { PAGE_COPY } from '@/lib/page-copy';

const PATH = '/click-speed-test' as const;
const DESCRIPTION = PAGE_COPY[PATH].description;

export const metadata = toolMetadata({ ...PAGE_COPY[PATH], path: PATH });

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
    question: 'Can I use a touchpad or the keyboard?',
    answer:
      'Yes. A tap or click on a touchpad counts like a mouse click, and Space or Enter work when the click box is selected. Touchpads are usually slower than a mouse, so compare scores on the same device.',
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
      heading="Click Speed Test – How Many Clicks per Second?"
      intro="Pick a duration and start clicking in the box. The timer starts with your first click."
      tool={<ClickSpeedTest />}
      affiliate={{
        heading: 'Mouse double clicking or wearing out?',
        text: "A worn switch won't fix itself, and it only gets worse. If your mouse registers clicks you didn't make, these are solid replacements for gaming and everyday use.",
      }}
      toc={[
        { id: "whats-a-good-score", label: "What's a good score?" },
        { id: "clicking-techniques", label: "Clicking techniques" },
        { id: "how-the-test-counts-your-clicks", label: "How the test counts your clicks" },
        { id: "score-suspiciously-high", label: "Score suspiciously high?" },
        { id: "fixing-a-mouse-that-double-clicks", label: "Fixing a mouse that double clicks" },
      ]}
      faqs={FAQS}
      adClearance
    >
      <h2 id="whats-a-good-score">What&apos;s a good score?</h2>
      <p>
        Most people clicking normally land somewhere between 6 and 8 clicks per second. Get above 10 and you&apos;re
        clearly faster than average. Beyond that, it&apos;s usually technique rather than raw finger speed.
      </p>
      <p>
        The duration makes a big difference. On the 1-second test you can go all out, so scores come out high. On 10 or
        30 seconds your hand gets tired and your number drops. The longer tests are a fairer measure of how fast you can
        keep it up, which is what counts in most games.
      </p>

      <h2 id="clicking-techniques">Clicking techniques</h2>
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

      <h2 id="how-the-test-counts-your-clicks">How the test counts your clicks</h2>
      <p>
        A click counts the moment the left mouse button goes down, not when you let go, so the counter keeps up with
        however fast you press. Right and middle clicks are ignored. You can also use Space or Enter while the box is
        selected; holding the key down counts once, not as a stream of repeats.
      </p>
      <p>
        The timer starts on your first click and runs on the browser&apos;s high-precision clock, so a 5-second test
        really is 5 seconds. Your score is the number of clicks divided by the length of the test. When time is up the
        box locks for a moment, so one last frantic click doesn&apos;t start a new round by accident. Your best score
        for each duration is kept in this browser only.
      </p>

      <h2 id="score-suspiciously-high">Score suspiciously high?</h2>
      <p>
        If a single slow click sometimes counts as two, it&apos;s not you. It&apos;s your mouse. The switch under the
        button wears out over time and starts sending two signals for one press. It&apos;s one of the most common mouse
        faults, even on expensive gaming mice. Click slowly ten times and count along with the counter. If the numbers
        don&apos;t match, the switch is going.
      </p>

      <h2 id="fixing-a-mouse-that-double-clicks">Fixing a mouse that double clicks</h2>
      <p>
        Start with the software. Many gaming mice have a debounce or click delay setting in their own app; raising it a
        few milliseconds can hide a worn switch for a while. Also check that no macro or rapid-fire function is
        assigned to the button. The double-click speed setting in Windows or macOS has nothing to do with this fault.
      </p>
      <p>
        If that doesn&apos;t help, the switch itself is worn. A short blast of compressed air under the button sometimes
        buys some time. A mouse still under warranty is usually replaced without discussion, because double clicking is
        a known fault. Out of warranty, a new switch can be soldered in if you&apos;re handy, but for most mice
        replacing the whole mouse is quicker.
      </p>
    </ToolPage>
  );
}
