// app/(site)/dead-pixel-fixer/page.tsx - Dead Pixel Fixer page.
//
// Server component: supplies the metadata and hands the interactive tool its
// strings, so the dictionary stays out of the browser bundle.

import { Metadata } from 'next';
import DeadPixelFixer from '@/components/tools/dead-pixel-fixer';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  // Targets the exact "dead pixel fixer" phrase this page needs to rank for.
  title: 'Dead Pixel Fixer (Online) – Free Stuck Pixel Repair Tool',
  description:
    'Fix stuck pixels online with our free dead pixel fixer. Flash rapidly changing colors full screen to help revive stuck LCD, LED, OLED and laptop pixels.',
  path: '/dead-pixel-fixer',
  keywords: [
    'dead pixel fixer',
    'stuck pixel fixer',
    'pixel repair tool',
    'fix dead pixel online',
    'stuck pixel repair',
    'dead pixel test',
    'LCD pixel repair',
    'OLED pixel repair',
  ],
});

export default function DeadPixelFixerPage() {
  return <DeadPixelFixer strings={getClientStrings('deadPixelFixer')} />;
}
