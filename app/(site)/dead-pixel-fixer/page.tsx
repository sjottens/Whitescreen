// app/(site)/dead-pixel-fixer/page.tsx - Dead Pixel Fixer page.
//
// Server component: supplies the metadata and hands the interactive tool its
// strings, so the dictionary stays out of the browser bundle.

import { Metadata } from 'next';
import DeadPixelFixer from '@/components/tools/dead-pixel-fixer';
import { getClientStrings } from '@/lib/client-strings';
import { pageMetadata } from '@/lib/seo';
import { PAGE_COPY } from '@/lib/page-copy';

export const metadata: Metadata = pageMetadata({
  ...PAGE_COPY['/dead-pixel-fixer'],
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
