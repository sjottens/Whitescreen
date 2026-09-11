// app/opengraph-image.tsx - Dynamically generated social preview image (og:image / twitter:image)
// Served at /opengraph-image. Used as the site-wide fallback social share image
// and referenced directly by Article/BlogPosting JSON-LD schemas.

import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #0b2530 60%, #06202a 100%)',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #00DC82 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              fontWeight: 700,
              color: '#0f172a',
            }}
          >
            T
          </div>
          <div style={{ fontSize: '40px', fontWeight: 700, color: '#ffffff' }}>{SITE_NAME}</div>
        </div>
        <div
          style={{
            fontSize: '54px',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: '920px',
          }}
        >
          Professional Screen &amp; Display Testing
        </div>
        <div
          style={{
            marginTop: '28px',
            fontSize: '26px',
            color: '#94a3b8',
            textAlign: 'center',
            maxWidth: '820px',
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
