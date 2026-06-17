#!/usr/bin/env node
/*
 * SEO metadata audit for Next.js App Router pages.
 * Ensures every page.tsx under app contains:
 * - metadata export (metadata or generateMetadata)
 * - title field
 * - description field
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'app');

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name === 'page.tsx') {
      files.push(fullPath);
    }
  }

  return files;
}

function hasMetadataExport(content) {
  return (
    /export\s+const\s+metadata\b/.test(content) ||
    /export\s+async\s+function\s+generateMetadata\s*\(/.test(content)
  );
}

function hasTitle(content) {
  return /\btitle\s*:/.test(content);
}

function hasDescription(content) {
  return /\bdescription\s*:/.test(content);
}

function toRelative(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, '/');
}

function run() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('ERROR: app directory not found.');
    process.exit(1);
  }

  const pages = walk(APP_DIR);
  const issues = [];

  for (const pagePath of pages) {
    const content = fs.readFileSync(pagePath, 'utf8');

    const checks = {
      hasMetadata: hasMetadataExport(content),
      hasTitle: hasTitle(content),
      hasDescription: hasDescription(content),
    };

    if (!checks.hasMetadata || !checks.hasTitle || !checks.hasDescription) {
      issues.push({
        file: toRelative(pagePath),
        ...checks,
      });
    }
  }

  console.log('SEO metadata audit');
  console.log(`Pages scanned: ${pages.length}`);

  if (issues.length === 0) {
    console.log('Status: PASS');
    console.log('All pages include metadata export, title, and description.');
    return;
  }

  console.log(`Status: FAIL (${issues.length} file(s))`);
  for (const issue of issues) {
    console.log(
      `- ${issue.file} | metadata=${issue.hasMetadata} title=${issue.hasTitle} description=${issue.hasDescription}`
    );
  }

  process.exit(1);
}

run();
