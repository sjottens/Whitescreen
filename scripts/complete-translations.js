// Script to complete translations for NL, ES, and DE
const fs = require('fs');
const path = require('path');

// Read translations file
const filePath = path.join(__dirname, '../lib/translations.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Extract English keys and their values
const enMatch = content.match(/"en":\s*{([\s\S]*?)},\s*"nl"/);
if (!enMatch) {
  console.error('Could not find EN translations section');
  process.exit(1);
}

const enSection = enMatch[1];
const keyValueRegex = /"([a-z_]+)":\s*"([^"]*(?:\\.[^"]*)*)"/g;
let match;
const translations = {};

while ((match = keyValueRegex.exec(enSection)) !== null) {
  const key = match[1];
  const value = match[2];
  // Unescape quotes
  translations[key] = value.replace(/\\"/g, '"');
}

console.log(`Found ${Object.keys(translations).length} EN keys`);

// Now check what's missing in NL
const nlMatch = content.match(/"nl":\s*{([\s\S]*?)},\s*"es"/);
if (!nlMatch) {
  console.error('Could not find NL translations section');
  process.exit(1);
}

const nlSection = nlMatch[1];
const nlKeys = new Set();
let nlMatch2;
while ((nlMatch2 = keyValueRegex.exec(nlSection)) !== null) {
  nlKeys.add(nlMatch2[1]);
}

console.log(`Found ${nlKeys.size} NL keys`);

// Find missing keys
const missingInNL = Object.keys(translations).filter(k => !nlKeys.has(k));
console.log(`\nMissing in NL: ${missingInNL.length} keys`);
if (missingInNL.length > 0) {
  console.log('First 10 missing keys:');
  missingInNL.slice(0, 10).forEach(k => {
    console.log(`  - ${k}: "${translations[k]}"`);
  });
}

// Check ES
const esMatch = content.match(/"es":\s*{([\s\S]*?)},\s*"de"/);
if (!esMatch) {
  console.error('Could not find ES translations section');
  process.exit(1);
}

const esSection = esMatch[1];
const esKeys = new Set();
const esKeyRegex = /"([a-z_]+)":\s*"([^"]*(?:\\.[^"]*)*)"/g;
let esMatch2;
while ((esMatch2 = esKeyRegex.exec(esSection)) !== null) {
  esKeys.add(esMatch2[1]);
}

console.log(`Found ${esKeys.size} ES keys`);

const missingInES = Object.keys(translations).filter(k => !esKeys.has(k));
console.log(`\nMissing in ES: ${missingInES.length} keys`);

// Check DE
const deMatch = content.match(/"de":\s*{([\s\S]*?)},\s*"de"|as const}/);
const deMatch2 = content.match(/"de":\s*{([\s\S]*?)}[\s]*[,}][\s]*(as const|"[a-z]+")/);
if (!deMatch2) {
  console.error('Could not find DE translations section');
  process.exit(1);
}

const deSection = deMatch2[1];
const deKeys = new Set();
const deKeyRegex = /"([a-z_]+)":\s*"([^"]*(?:\\.[^"]*)*)"/g;
let deMatch3;
while ((deMatch3 = deKeyRegex.exec(deSection)) !== null) {
  deKeys.add(deMatch3[1]);
}

console.log(`Found ${deKeys.size} DE keys`);

const missingInDE = Object.keys(translations).filter(k => !deKeys.has(k));
console.log(`\nMissing in DE: ${missingInDE.length} keys`);

console.log('\nTranslation coverage:');
console.log(`EN: 100% (${Object.keys(translations).length})`);
console.log(`NL: ${Math.round((1 - missingInNL.length / Object.keys(translations).length) * 100)}% (${Object.keys(translations).length - missingInNL.length}/${Object.keys(translations).length})`);
console.log(`ES: ${Math.round((1 - missingInES.length / Object.keys(translations).length) * 100)}% (${Object.keys(translations).length - missingInES.length}/${Object.keys(translations).length})`);
console.log(`DE: ${Math.round((1 - missingInDE.length / Object.keys(translations).length) * 100)}% (${Object.keys(translations).length - missingInDE.length}/${Object.keys(translations).length})`);
