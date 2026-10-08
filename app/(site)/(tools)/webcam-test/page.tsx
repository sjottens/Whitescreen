// app/(site)/(tools)/webcam-test/page.tsx - Webcam Test

import ToolPage from '@/components/hardware/tool-page';
import WebcamTest from '@/components/hardware/webcam-test';
import { toolMetadata, type Faq } from '@/lib/tool-schema';
import { PAGE_COPY } from '@/lib/page-copy';

const PATH = '/webcam-test' as const;
const DESCRIPTION = PAGE_COPY[PATH].description;

export const metadata = toolMetadata({ ...PAGE_COPY[PATH], path: PATH });

const FAQS: Faq[] = [
  {
    question: 'Is this webcam test safe?',
    answer:
      "Yes. Your video is only shown in your own browser. It isn't recorded, uploaded or stored, and the camera switches off when you click Stop or leave the page.",
  },
  {
    question: 'Why is my picture mirrored?',
    answer:
      'The preview is mirrored by default, like looking in a mirror, because that feels most natural. In most video call apps, others see you the right way round. You can switch mirroring off with the toggle.',
  },
  {
    question: 'Why is my frame rate lower than advertised?',
    answer:
      'Usually because of low light: the camera needs more time per frame to catch enough light. More light in the room almost always fixes it. A USB hub can also be the bottleneck.',
  },
  {
    question: 'Can I test the camera on my phone?',
    answer:
      "Yes. Open this page in your phone's browser, tap Start and allow access. If your phone has several cameras, you can switch between them in the dropdown.",
  },
  {
    question: 'My camera works here but not in Zoom or Teams. What now?',
    answer:
      "Check which camera is selected in that app's video settings. Also make sure the browser isn't still using it: stop this test or close the tab first.",
  },
];

export default function WebcamTestPage() {
  return (
    <ToolPage
      toolId="webcam-test"
      path={PATH}
      name="Webcam Test"
      description={DESCRIPTION}
      heading="Webcam Test Online – Check Your Camera"
      intro="Click Start and allow camera access. You'll see your live picture, plus the resolution and frame rate your camera is actually delivering right now."
      tool={<WebcamTest />}
      affiliate={{
        heading: 'Built-in camera not good enough?',
        text: 'Most laptop cameras are fine for a quick call, but they struggle in anything other than good light. An external webcam is one of the cheapest upgrades for how you look on video. These are worth a look.',
      }}
      toc={[
        { id: "what-the-numbers-mean", label: "What the numbers mean" },
        { id: "black-screen-or-no-camera-found", label: "Black screen or no camera found" },
        { id: "picture-grainy-dark-or-blurry", label: "Picture grainy, dark or blurry?" },
        { id: "what-happens-with-your-video", label: "What happens with your video" },
      ]}
      faqs={FAQS}
    >
      <h2 id="what-the-numbers-mean">What the numbers mean</h2>
      <p>
        The resolution and frame rate shown are what your camera is sending to the browser right now, not what&apos;s
        printed on the box. They can be lower than advertised without anything being wrong.
      </p>
      <p>
        The most common reason is light. In a dim room, a webcam keeps its shutter open longer to catch enough light,
        and that directly lowers the frame rate. A camera that does 30 frames per second in daylight can drop to 15 in
        the evening, and the video starts to look choppy. Plugging a webcam into a USB hub or a busy port can also limit
        the resolution it&apos;s able to send.
      </p>

      <h2 id="black-screen-or-no-camera-found">Black screen or no camera found</h2>
      <p>
        Check the physical stuff first, because it&apos;s the cause more often than you&apos;d think. Many laptops have a
        small sliding privacy shutter over the lens. Others have a key with a camera icon that switches the camera off
        entirely.
      </p>
      <p>
        After that, close every other app that might be using the camera. On Windows, usually only one app can use the
        webcam at a time. If Teams is running in the background, your browser gets a black screen.
      </p>
      <p>
        <strong>Windows 10 and 11.</strong> Open Settings &gt; Privacy &amp; security &gt; Camera and make sure camera
        access is on, including access for desktop apps.
      </p>
      <p>
        <strong>macOS.</strong> Open System Settings &gt; Privacy &amp; Security &gt; Camera and switch your browser on.
        Then quit the browser completely with Cmd+Q and open it again.
      </p>
      <p>
        On a work laptop, your IT department may have blocked the camera for certain apps. In that case, this test
        won&apos;t be able to fix it for you.
      </p>

      <h2 id="picture-grainy-dark-or-blurry">Picture grainy, dark or blurry?</h2>
      <p>
        Light again, nine times out of ten. Webcam sensors are tiny. In a dim room the camera turns up its sensitivity to
        compensate, and that&apos;s where the grain comes from. Sit facing a window or a lamp. Light from behind you
        turns you into a silhouette.
      </p>
      <p>
        Blurry or hazy? Wipe the lens. A laptop camera sits right where you grab the lid, so it collects fingerprints
        faster than you&apos;d think.
      </p>
      <p>
        Strange colours usually come from mixed lighting, like daylight on one side and a warm lamp on the other. The
        camera can&apos;t decide which one is &quot;white&quot;. Use one type of light and the colours settle down.
      </p>

      <h2 id="what-happens-with-your-video">What happens with your video</h2>
      <p>
        Nothing leaves your device. The picture is shown by your browser and goes nowhere else. Snapshots are only
        created on your own device when you click the button, and you decide whether to save them.
      </p>
    </ToolPage>
  );
}
