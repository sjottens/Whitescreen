import { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Dead Pixel Fixer (Online) – Free Stuck Pixel Repair Tool',
  description: 'Fix stuck pixels online with our free dead pixel fixer. Flash rapidly changing colors in fullscreen mode to help revive stuck LCD, LED, OLED and laptop screen pixels.',
  keywords: 'dead pixel fixer, stuck pixel fixer, pixel repair tool, screen repair tool, dead pixel test, LCD pixel repair, OLED pixel repair, monitor pixel fixer, online pixel fixer',

  // Open Graph
  openGraph: {
    title: 'Dead Pixel Fixer (Online) – Free Stuck Pixel Repair Tool',
    description: 'Fix stuck pixels online with our free dead pixel fixer. Flash rapidly changing colors in fullscreen mode to help revive stuck LCD, LED, OLED and laptop screen pixels.',
    url: `${SITE_URL}/dead-pixel-fixer`,
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Dead Pixel Fixer Tool',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Dead Pixel Fixer (Online) – Free Stuck Pixel Repair Tool',
    description: 'Fix stuck pixels online with our free dead pixel fixer. Flash rapidly changing colors in fullscreen mode to help revive stuck LCD, LED, OLED and laptop screen pixels.',
    images: [`${SITE_URL}/opengraph-image`],
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  
  // Structured data will be added via JSON-LD in the page component
};
