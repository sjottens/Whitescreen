// app/(site)/(tools)/mic-test/page.tsx - Microphone Test

import ToolPage from '@/components/hardware/tool-page';
import MicTest from '@/components/hardware/mic-test';
import { toolMetadata, type Faq } from '@/lib/tool-schema';

const PATH = '/mic-test';
const TITLE = 'Mic Test – Check Your Microphone Online (Free & Private)';
const DESCRIPTION =
  'Test your microphone in seconds. See live input levels, record a short clip and hear yourself back. Nothing is uploaded, it all runs in your browser.';

export const metadata = toolMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQS: Faq[] = [
  {
    question: 'Is this mic test safe to use?',
    answer:
      "Yes. The test runs completely in your browser. Your audio isn't uploaded, saved or sent anywhere, and the recording disappears when you leave the page.",
  },
  {
    question: 'Why is my microphone so quiet?',
    answer:
      "Usually one of three things: the input volume is set low in your system settings, you're too far from the mic, or the browser is using a different microphone than you think, like the built-in laptop mic instead of your headset. Pick the right one in the dropdown and check the input volume.",
  },
  {
    question: 'My mic works here but not in Zoom or Teams. Why?',
    answer:
      'Every app has its own microphone setting. Open the audio settings in Zoom or Teams and select the same microphone that worked in this test.',
  },
  {
    question: 'Can I test my microphone on my phone?',
    answer: "Yes. Open this page in your phone's browser, tap Start and allow access. It works on Android and iPhone.",
  },
  {
    question: 'Why does my browser ask for permission?',
    answer:
      "Browsers never let a website use your microphone without asking first. That's a good thing. You can withdraw the permission at any time through the icon in the address bar.",
  },
];

export default function MicTestPage() {
  return (
    <ToolPage
      toolId="mic-test"
      path={PATH}
      name="Mic Test"
      description={DESCRIPTION}
      heading="Microphone Test"
      intro="Click Start, allow microphone access and say something. If the bar moves, your mic works. Everything happens in your browser, so we never hear or store a thing."
      tool={<MicTest />}
      affiliate={{
        heading: 'Is your microphone letting you down?',
        text: "If your mic is quiet, noisy or cutting out and the settings above didn't fix it, a decent USB microphone is often a cheaper fix than you'd expect. These are the ones we'd look at.",
      }}
      faqs={FAQS}
    >
      <h2>How to read the result</h2>
      <p>
        The bar shows how loud your microphone hears you. Talk at a normal volume from about an arm&apos;s length away
        and you want it bouncing around the middle. Barely moving? Your input level is too low, or the browser picked a
        different mic than the one you&apos;re talking into. Constantly hitting the red? It&apos;s set too high, and
        people on your calls will hear distortion.
      </p>
      <p>
        The meter only tells you that sound is coming in, not whether it sounds good. For that, hit{' '}
        <strong>Record 5 seconds</strong> and listen back. Five seconds of your own voice will reveal what a meter
        can&apos;t: background hiss, an echo from a bare room, or that muffled sound you get when a headset mic is
        pointing at your cheek.
      </p>

      <h2>Mic not picked up at all?</h2>
      <p>
        Start with the browser. If you ever clicked &quot;Block&quot; on a permission pop-up, the site stays blocked
        until you change it yourself. Look for the small lock or microphone icon in the address bar. Then check the
        dropdown above the meter. A laptop with a headset plugged in can easily list three or four inputs, and the
        default isn&apos;t always the one you&apos;re using.
      </p>
      <p>
        <strong>Windows 10 and 11.</strong> Open Settings &gt; Privacy &amp; security &gt; Microphone and make sure
        microphone access is on, including access for desktop apps. Then go to Settings &gt; System &gt; Sound, pick
        your mic under Input and check its volume. A very common culprit is another app holding on to the mic. Discord,
        Teams and Zoom can all do this, even when they&apos;re minimized. Close them fully and test again.
      </p>
      <p>
        <strong>macOS.</strong> Open System Settings &gt; Privacy &amp; Security &gt; Microphone and switch your browser
        on. If you only just did that, quit the browser completely with Cmd+Q and open it again. macOS doesn&apos;t
        apply the change to an app that&apos;s already running.
      </p>
      <p>
        <strong>Android and iPhone.</strong> On Android, long-press your browser&apos;s icon, tap App info &gt;
        Permissions &gt; Microphone. On iPhone, open Settings, find Chrome or Safari and check that Microphone is
        allowed.
      </p>

      <h2>Bluetooth headset sounds terrible?</h2>
      <p>
        Your headset probably isn&apos;t broken. As soon as a Bluetooth headset uses its microphone, most computers
        switch it to a hands-free mode that drops the audio quality to phone-call level. Your voice sounds like it&apos;s
        coming through a tin can, and music playing at the same time suddenly sounds flat. It&apos;s a limitation of how
        Bluetooth handles audio in both directions. A wired headset or a USB microphone doesn&apos;t have this problem.
      </p>

      <h2>What happens with your audio</h2>
      <p>
        Nothing leaves your device. The meter and the recording are handled entirely by your browser, and the recording
        is gone the moment you refresh or close the page.
      </p>
    </ToolPage>
  );
}
