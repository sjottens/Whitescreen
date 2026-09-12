#!/usr/bin/env node
/*
 * AdSense integration audit.
 * Checks required AdSense setup and CSP allowlist entries.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LAYOUT_PATH = path.join(ROOT, 'app', 'layout.tsx');
const NEXT_CONFIG_PATH = path.join(ROOT, 'next.config.js');
const AD_OPTIMIZER_PATH = path.join(ROOT, 'components', 'analytics', 'ad-optimizer.tsx');

function read(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file: ${filePath}`);
  }
  return fs.readFileSync(filePath, 'utf8');
}

function assertContains(haystack, needle, label, errors) {
  if (!haystack.includes(needle)) {
    errors.push(`Missing ${label}: ${needle}`);
  }
}

function main() {
  const errors = [];

  const layout = read(LAYOUT_PATH);
  const nextConfig = read(NEXT_CONFIG_PATH);
  const adOptimizer = read(AD_OPTIMIZER_PATH);

  // Required AdSense head setup.
  assertContains(layout, 'name="google-adsense-account"', 'AdSense account meta tag', errors);

  // The adsbygoogle.js loader itself is injected at runtime by AdOptimizer
  // (interaction-or-idle-timeout, gated on marketing consent) rather than a
  // static <script> in layout.tsx - that's deliberate, it keeps the loader
  // off the critical path for Core Web Vitals/Lighthouse. Check it there.
  assertContains(
    adOptimizer,
    'pagead/js/adsbygoogle.js?client=ca-pub-5016673566357322',
    'AdSense script src in AdOptimizer',
    errors
  );

  // Required CSP domains for AdSense request lifecycle.
  const requiredScriptSrc = [
    'https://pagead2.googlesyndication.com',
  ];

  const requiredConnectSrc = [
    'https://pagead2.googlesyndication.com',
    'https://tpc.googlesyndication.com',
    'https://ep1.adtrafficquality.google',
    'https://ep2.adtrafficquality.google',
  ];

  const requiredFrameSrc = [
    'https://pagead2.googlesyndication.com',
    'https://ep2.adtrafficquality.google',
    'https://googleads.g.doubleclick.net',
  ];

  for (const domain of requiredScriptSrc) {
    assertContains(nextConfig, domain, 'CSP script-src domain', errors);
  }
  for (const domain of requiredConnectSrc) {
    assertContains(nextConfig, domain, 'CSP connect-src domain', errors);
  }
  for (const domain of requiredFrameSrc) {
    assertContains(nextConfig, domain, 'CSP frame-src domain', errors);
  }

  console.log('AdSense audit');
  if (errors.length === 0) {
    console.log('Status: PASS');
    console.log('No AdSense blockers detected in layout/CSP configuration.');
    process.exit(0);
  }

  console.log(`Status: FAIL (${errors.length} issue(s))`);
  for (const issue of errors) {
    console.log(`- ${issue}`);
  }
  process.exit(1);
}

main();
