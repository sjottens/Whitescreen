const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_LOCALES = ['en', 'nl', 'de', 'es'];
const REMOVED_LOCALES = ['fr', 'it', 'pt', 'ja'];

function read(file) {
  return fs.readFileSync(path.join(ROOT, file), 'utf8');
}

function write(file, content) {
  const out = path.join(ROOT, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, content, 'utf8');
}

function parseTranslationsObject(tsContent) {
  const start = tsContent.indexOf('export const translations =');
  const end = tsContent.indexOf('} as const;');
  if (start === -1 || end === -1) throw new Error('translations object not found');

  const objStart = tsContent.indexOf('{', start);
  const objLiteral = tsContent.slice(objStart, end + 1);
  // eslint-disable-next-line no-new-func
  return new Function(`return (${objLiteral});`)();
}

function flattenKeys(obj, prefix = '') {
  const out = [];
  for (const [k, v] of Object.entries(obj || {})) {
    const full = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      out.push(...flattenKeys(v, full));
    } else {
      out.push(full);
    }
  }
  return out;
}

function findFiles(dir, exts, ignore = new Set(['node_modules', '.next', '.git', 'memories'])) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignore.has(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...findFiles(abs, exts, ignore));
    } else if (exts.some((e) => entry.name.endsWith(e))) {
      out.push(abs);
    }
  }
  return out;
}

function rel(p) {
  return path.relative(ROOT, p).replace(/\\/g, '/');
}

function extractHardcodedCandidates(content) {
  const candidates = [];
  const jsxTextRegex = />\s*([A-Za-z][^<{\n]{2,})\s*</g;
  let m;
  while ((m = jsxTextRegex.exec(content)) !== null) {
    const text = m[1].trim();
    if (!text) continue;
    if (/^(http|www\.|\d+|[A-Z_]{2,})/.test(text)) continue;
    candidates.push(text);
  }

  const attrRegex = /(placeholder|title|aria-label|alt|label)=\"([^\"]*[A-Za-z][^\"]*)\"/g;
  while ((m = attrRegex.exec(content)) !== null) {
    candidates.push(`${m[1]}=\"${m[2]}\"`);
  }

  return candidates;
}

function main() {
  const translationsTs = read('lib/translations.ts');
  const translationsObj = parseTranslationsObject(translationsTs);

  const allLocaleKeys = Object.keys(translationsObj);
  const activeLocalePayload = Object.fromEntries(TARGET_LOCALES.map((l) => [l, translationsObj[l] || {}]));

  const enKeys = new Set(flattenKeys(activeLocalePayload.en || {}));
  const report = {
    totalTranslationKeys: enKeys.size,
    locales: {},
    removedLocalesDetected: allLocaleKeys.filter((l) => REMOVED_LOCALES.includes(l)),
    activeLocales: TARGET_LOCALES,
  };

  for (const locale of TARGET_LOCALES) {
    const keys = new Set(flattenKeys(activeLocalePayload[locale] || {}));
    const missing = [...enKeys].filter((k) => !keys.has(k));
    const empty = [...keys].filter((k) => {
      const value = k.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), activeLocalePayload[locale]);
      return typeof value === 'string' && value.trim() === '';
    });
    const unused = [...keys].filter((k) => !enKeys.has(k));

    report.locales[locale] = {
      totalKeys: keys.size,
      missingCount: missing.length,
      emptyCount: empty.length,
      unusedCount: unused.length,
      sampleMissing: missing.slice(0, 30),
    };
  }

  const sourceFiles = findFiles(ROOT, ['.tsx', '.ts', '.jsx', '.js']);
  const hardcodedFindings = [];
  const scannedPages = [];

  for (const file of sourceFiles) {
    const relative = rel(file);
    if (!relative.startsWith('app/') && !relative.startsWith('components/')) continue;
    const content = fs.readFileSync(file, 'utf8');
    const hits = extractHardcodedCandidates(content)
      .filter((t) => !t.includes('{') && !t.includes('translate(') && !t.includes("t('"))
      .slice(0, 12);

    if (relative.includes('/page.tsx') || relative.includes('/layout.tsx') || relative.includes('/not-found.tsx')) {
      scannedPages.push(relative);
    }

    if (hits.length) {
      hardcodedFindings.push({ file: relative, count: hits.length, samples: hits.slice(0, 8) });
    }
  }

  hardcodedFindings.sort((a, b) => b.count - a.count);

  const reportPath = 'reports/i18n-audit-report.json';
  write(reportPath, JSON.stringify({ report, hardcodedFindings, scannedPages }, null, 2));

  const md = [];
  md.push('# I18n Audit Report');
  md.push('');
  md.push(`- Total translation keys (en baseline): ${report.totalTranslationKeys}`);
  md.push(`- Active locales audited: ${report.activeLocales.join(', ')}`);
  md.push(`- Removed locales still present in translation source: ${report.removedLocalesDetected.join(', ') || 'none'}`);
  md.push('');
  md.push('## Missing/Empty/Unused per locale');
  for (const locale of TARGET_LOCALES) {
    const info = report.locales[locale];
    md.push(`- ${locale}: missing=${info.missingCount}, empty=${info.emptyCount}, unused=${info.unusedCount}`);
  }
  md.push('');
  md.push('## Hardcoded Text Candidates');
  md.push(`- Files with candidates: ${hardcodedFindings.length}`);
  for (const item of hardcodedFindings.slice(0, 80)) {
    md.push(`- ${item.file} (${item.count})`);
  }
  md.push('');
  md.push('## Pages/Layouts Scanned');
  for (const p of scannedPages.sort()) {
    md.push(`- ${p}`);
  }

  write('reports/i18n-audit-report.md', md.join('\n'));
  console.log('Wrote reports/i18n-audit-report.json and reports/i18n-audit-report.md');
}

main();
