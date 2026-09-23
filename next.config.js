/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance & Bundling
    poweredByHeader: false,
    compress: true,
    productionBrowserSourceMaps: false,
    experimental: {
        optimizePackageImports: ['components', 'lib'],
    },

    // Image optimization - aggressive optimization for mobile
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        unoptimized: false,
        minimumCacheTTL: 31536000,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Webpack optimization for smaller bundle
    webpack: (config, { isServer }) => {
        config.optimization = {
            ...config.optimization,
            usedExports: true,
            sideEffects: false,
            minimize: true,
        };
        return config;
    },

    // React strict mode
    reactStrictMode: true,

    // Redirects - consolidate duplicate device-test URLs onto their
    // canonical pages. /device-tests/{iphone,macbook,oled-tv,gaming-monitor}
    // rendered the same content as /iphone-screen-test etc. at a second URL,
    // which is a real duplicate-content risk even though nothing links to
    // the /device-tests/* sub-paths internally. /device-tests itself (the
    // index page) is unaffected and keeps linking to the canonical URLs.
    //
    // /screen/[color]/[variant] were templated near-duplicates of the colour
    // tool pages (only the colour name changed, 144 URLs across locales) and
    // got the site rejected by AdSense as low-value content. They're folded
    // back into the real tool pages.
    //
    // Each rule is emitted twice (with and without a locale prefix) because
    // an optional `:locale?` in the destination 500s when it's absent.
    async redirects() {
        const rules = [
            ['/device-tests/iphone', '/iphone-screen-test'],
            ['/device-tests/macbook', '/macbook-screen-test'],
            ['/device-tests/oled-tv', '/oled-tv-test'],
            ['/device-tests/gaming-monitor', '/gaming-monitor-test'],
            ['/screen/:color(white-screen|black-screen|red-screen|blue-screen|green-screen|pink-screen|purple-screen|orange-screen|yellow-screen|zoom-lighting)/:variant*', '/:color'],
            ['/screen/:path*', '/tools'],
            // 41 per-brand/per-variant landing pages (lg_4k, gaming_240hz...)
            // that all funnelled into the same tests - flagged by Google as
            // doorway pages. The /monitor-test pillar covers them all.
            ['/monitor-test/:brand+', '/monitor-test'],
        ];
        return rules.flatMap(([source, destination]) => [
            { source, destination, permanent: true },
            {
                source: `/:locale(nl|es|de)${source}`,
                destination: `/:locale${destination}`,
                permanent: true,
            },
        ]);
    },

    // Headers for SEO & Performance
    async headers() {
        return [{
                source: '/:path*',
                headers: [{
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), usb=(), magnetometer=(), payment=()',
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=31536000; includeSubDomains',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://rsms.me https://fonts.googleapis.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://rsms.me; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com https://rsms.me; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://pagead2.googlesyndication.com https://stats.g.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://tpc.googlesyndication.com https://googleads.g.doubleclick.net; frame-src 'self' https://pagead2.googlesyndication.com https://ep2.adtrafficquality.google https://googleads.g.doubleclick.net;",
                    },
                ],
            },
            // Cache static assets
            {
                source: '/fonts/:path*',
                headers: [{
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                }, ],
            },
            {
                source: '/images/:path*',
                headers: [{
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                }, ],
            },
        ];
    },

    // Environment variables
    env: {
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://testascreen.com',
    },
};

module.exports = nextConfig;