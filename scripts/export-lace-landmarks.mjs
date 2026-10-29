import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nt = await readFile(path.join(root, 'public/assets/illustrations/national-theatre.svg'), 'utf8');
const lb = await readFile(path.join(root, 'public/assets/illustrations/lekki-ikoyi-link-bridge.svg'), 'utf8');

console.log('Verified National Theatre SVG:', nt.length, 'bytes');
console.log('Verified Lekki-Ikoyi Link Bridge SVG:', lb.length, 'bytes');
