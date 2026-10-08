// app/(site)/(tools)/used-laptop-check/page.tsx - Used (second-hand) laptop check

import Link from 'next/link';
import ToolPage from '@/components/hardware/tool-page';
import UsedLaptopCheck from '@/components/hardware/used-laptop-check';
import { toolMetadata, type Faq } from '@/lib/tool-schema';
import { PAGE_COPY } from '@/lib/page-copy';

const PATH = '/used-laptop-check' as const;
const DESCRIPTION = PAGE_COPY[PATH].description;

export const metadata = toolMetadata({ ...PAGE_COPY[PATH], path: PATH });

const FAQS: Faq[] = [
  {
    question: "Can a website check a laptop's battery health?",
    answer:
      "No. A browser can show the current charge level and whether it is charging, in Chrome and Edge, but not how worn the battery is. For that you need the laptop's own battery report, which takes a minute on Windows, macOS and ChromeOS.",
  },
  {
    question: 'How long does a used laptop check take?',
    answer:
      'About 15 minutes if you go through the whole list, including a few minutes on battery power. Bring a USB stick and your phone so you can test the ports, and ask the seller to have the laptop charged and switched on.',
  },
  {
    question: 'What is a good battery cycle count?',
    answer:
      'It depends on the model. Many laptop batteries are designed to keep about 80 percent of their capacity after somewhere between 300 and 1000 full cycles; Apple rates recent MacBooks for 1000. A low count with a high remaining capacity is what you want to see.',
  },
  {
    question: 'Does this work on a MacBook or a Chromebook?',
    answer:
      "Yes, the checklist runs in any modern browser. Safari and Firefox don't share the battery status, so on a Mac the battery step relies on the Battery settings instead, which you need for the health figure anyway.",
  },
  {
    question: 'Should I check the storage drive too?',
    answer:
      'Yes. Check in the system settings that the capacity matches the advert. On Windows, a free tool such as CrystalDiskInfo shows the drive health; on a Mac, Disk Utility can run First Aid. A drive that reports warnings is a reason to walk away or renegotiate.',
  },
  {
    question: "What if the seller won't let me test the laptop?",
    answer:
      "Treat that as a red flag. A seller with a working laptop has no reason to refuse a 15-minute check. If you buy anyway, use a payment method that offers buyer protection, and don't pay before you have seen the laptop start up.",
  },
];

export default function UsedLaptopCheckPage() {
  return (
    <ToolPage
      toolId="used-laptop-check"
      path={PATH}
      name="Used Laptop Check"
      description={DESCRIPTION}
      heading="Used Laptop Check – Test a Second-Hand Laptop Before You Buy"
      intro="Open this page on the laptop you're thinking of buying and work through the list. Mark each part OK or Problem as you go, then email the results to yourself to keep them."
      tool={<UsedLaptopCheck />}
      affiliate={{
        heading: 'Found a problem?',
        text: "A worn battery or a dead key doesn't have to rule a laptop out, but it should lower the price. These are the parts we'd look at replacing.",
      }}
      toc={[
        { id: 'how-to-use-this-checklist', label: 'How to use this checklist' },
        { id: 'check-the-battery-health', label: 'Check the battery health' },
        { id: 'red-flags-that-should-stop-the-sale', label: 'Red flags that should stop the sale' },
        { id: 'questions-to-ask-the-seller', label: 'Questions to ask the seller' },
        { id: 'how-this-check-works', label: 'How this check works' },
      ]}
      faqs={FAQS}
      wideTool
    >
      <h2 id="how-to-use-this-checklist">How to use this checklist</h2>
      <p>
        Ask the seller to have the laptop charged, switched on and signed in, and bring a USB stick, your phone and a
        pair of headphones. Open this page on the laptop itself, so the screen, speakers and keyboard you test are the
        ones you&apos;re buying. Work from top to bottom: the order puts the quick, visible checks first, so you can stop
        early if the screen or keyboard already disappoints.
      </p>
      <p>
        Most steps take under a minute. The screen colors fill the whole display, which is the only reliable way to
        spot a single dead pixel; the <Link href="/dead-pixel-test">full dead pixel test</Link> and the{' '}
        <Link href="/backlight-bleed-test">backlight bleed test</Link> go deeper if something looks off. Keyboard,
        webcam and microphone open their own tests in a new tab, so your checklist stays where you left it.
      </p>

      <h2 id="check-the-battery-health">Check the battery health</h2>
      <p>
        A browser can&apos;t see how worn a battery is, but the laptop can tell you in a minute. Look for two numbers:
        how much charge the battery holds now compared with when it was new, and how many charge cycles it has done.
      </p>
      <p>
        <strong>Windows.</strong> Open Command Prompt, type <code>powercfg /batteryreport</code> and press Enter. It
        saves a file called battery-report.html in the user folder. Open it and compare Design capacity with Full charge
        capacity. Below about 80 percent of the original, expect noticeably shorter battery life. Many laptops also list
        a cycle count in the same report.
      </p>
      <p>
        <strong>macOS.</strong> Open System Settings &gt; Battery and click the info button next to Battery Health to
        see the maximum capacity. For the cycle count, hold Option, click the Apple menu, choose System Information and
        go to Power.
      </p>
      <p>
        <strong>ChromeOS.</strong> Open the Diagnostics app from the launcher. The battery section shows health and
        cycle count.
      </p>

      <h2 id="red-flags-that-should-stop-the-sale">Red flags that should stop the sale</h2>
      <ul>
        <li>
          <strong>A swollen battery.</strong> The touchpad sits higher than usual or no longer clicks, the case has a gap,
          or the laptop rocks on a flat table. A swollen lithium battery is a safety risk, not just a wear issue.
        </li>
        <li>
          <strong>Signs of liquid damage.</strong> Sticky keys, stains under the keycaps, or a faint sweet or musty smell.
          Liquid damage often looks fine at first and fails weeks later.
        </li>
        <li>
          <strong>A locked laptop.</strong> On a Mac, Activation Lock must be off: the seller should sign out of their
          Apple Account and turn off Find My. On Windows, check under Settings &gt; Accounts &gt; Access work or school
          that the laptop isn&apos;t managed by a company or school, and ask the seller to remove any BIOS password.
        </li>
        <li>
          <strong>Specs that don&apos;t match the advert.</strong> Compare processor, memory and storage in the system
          settings with what you were promised.
        </li>
        <li>
          <strong>A charger that isn&apos;t original</strong> and a laptop that only runs while plugged in.
        </li>
      </ul>

      <h2 id="questions-to-ask-the-seller">Questions to ask the seller</h2>
      <p>
        How old is the laptop, and is there a receipt? Receipts matter for any remaining warranty and show the laptop
        isn&apos;t stolen. Has it ever been repaired, and by whom? Why are they selling? Ask them to do a factory reset
        in front of you once you&apos;ve agreed to buy, so you start with a clean system and their accounts are gone.
      </p>

      <h2 id="how-this-check-works">How this check works</h2>
      <p>
        Everything runs in your browser, and nothing is sent anywhere unless you ask for your results by email. The
        screen step shows five full-screen colors that
        together reveal dead pixels (on white), stuck pixels (on black) and faulty subpixels (on red, green and blue).
        The speaker step plays a short 440 Hz tone on the left channel, the right channel or both. The battery step reads
        the charge level where the browser allows it, and the box at the end shows the screen resolution, processor
        threads and memory that the browser reports. Browsers round those last numbers on purpose, so always confirm
        them in the laptop&apos;s own settings.
      </p>
    </ToolPage>
  );
}
