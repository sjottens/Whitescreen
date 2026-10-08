// lib/used-laptop-steps.ts - The steps of the used laptop check. Shared by the
// checklist (components/hardware/used-laptop-check.tsx) and the route that
// emails the results (app/api/laptop-check/route.ts), which builds the mail
// from these texts rather than from anything the browser sends.

export type StepStatus = 'ok' | 'problem';

export interface Step {
  id: string;
  title: string;
  hint: string;
  link?: { href: string; label: string };
}

export const STEPS: Step[] = [
  { id: 'screen', title: 'Screen', hint: 'Cycle through the colors below in full screen. Look for dead or stuck pixels, bright patches at the edges and uneven color.' },
  { id: 'keyboard', title: 'Keyboard', hint: 'Press every key once, including Fn, the arrows and the number row.', link: { href: '/keyboard-test', label: 'Open the keyboard test' } },
  { id: 'touchpad', title: 'Touchpad', hint: 'Move the pointer into every corner, click both buttons, and scroll with two fingers.' },
  { id: 'speakers', title: 'Speakers', hint: 'Play the left and right tone. Listen for crackling, buzzing or a side that stays silent.' },
  { id: 'webcam', title: 'Webcam', hint: 'Check that the picture appears, is sharp and that the camera light turns on.', link: { href: '/webcam-test', label: 'Open the webcam test' } },
  { id: 'mic', title: 'Microphone', hint: 'Record a few seconds and play it back.', link: { href: '/mic-test', label: 'Open the mic test' } },
  { id: 'battery', title: 'Battery & charger', hint: 'Unplug the charger: the laptop must keep running and the level should not drop fast. Plug it back in and check that it charges.' },
  { id: 'ports', title: 'Ports & wireless', hint: 'Try a USB stick or phone cable in every port, connect to Wi-Fi, and pair a Bluetooth device if you can.' },
  { id: 'body', title: 'Body & hinges', hint: 'Open and close the lid: the hinge should hold the screen at any angle without creaking. Look for cracks, a bulging case and missing screws.' },
  { id: 'locks', title: 'Accounts & locks', hint: 'Make sure the seller has signed out of their account, the laptop is not managed by a company or school, and there is no firmware or BIOS password.' },
];
