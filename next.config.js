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

    // Redirects - thin, templated and doorway pages removed after a Google
    // manual action (thin content / doorways), folded into the real tools.
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
            // Thin per-device pages (~200 words each, just linking to the
            // colour screens) - doorways onto the same tests. The full tests
            // work on any device.
            ['/device-tests/gaming-monitor', '/monitor-response-time-test'],
            ['/device-tests', '/tools'],
            ['/device-tests/:path+', '/dead-pixel-test'],
            ['/iphone-screen-test', '/dead-pixel-test'],
            ['/macbook-screen-test', '/dead-pixel-test'],
            ['/oled-tv-test', '/dead-pixel-test'],
            ['/gaming-monitor-test', '/monitor-response-time-test'],
            // ~250-word brand-vs-brand / spec comparison stubs.
            ['/compare/:path*', '/monitor-buying-guide'],
            ['/screen/:color(white-screen|black-screen|red-screen|blue-screen|green-screen|pink-screen|purple-screen|orange-screen|yellow-screen|zoom-lighting)/:variant*', '/:color'],
            ['/screen/:path*', '/tools'],
            // 41 per-brand/per-variant landing pages (lg_4k, gaming_240hz...)
            // that all funnelled into the same tests - flagged by Google as
            // doorway pages. The /monitor-test pillar covers them all.
            ['/monitor-test/:brand+', '/monitor-test'],
            // Short (<400 word) dead-pixel posts that overlapped longer ones.
            ['/blog/how-dead-pixels-happen', '/blog/what-are-dead-pixels'],
            ['/blog/dead-pixels-on-monitors-laptops-phones-and-tvs', '/blog/what-are-dead-pixels'],
            ['/blog/broken-pixel-diagnosis-test-and-repair-methods', '/blog/can-dead-pixels-be-fixed'],
            ['/blog/dead-pixel-warranty-guide', '/how-to-test-a-monitor-before-returning'],
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
            // Untranslated locales: usable, but kept out of the index until
            // fully translated (see INDEXED_LOCALES in lib/i18n.ts).
            {
                source: '/:locale(nl|es|de)',
                headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
            },
            {
                source: '/:locale(nl|es|de)/:path*',
                headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
            },
            // Vercel also serves every deployment on *.vercel.app - keep that
            // mirror of the site out of the index.
            {
                source: '/:path*',
                has: [{ type: 'host', value: '(?<host>.*)\\.vercel\\.app' }],
                headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
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