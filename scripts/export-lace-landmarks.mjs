import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = await readFile(path.join(root, 'src/components/lace/Landmarks.tsx'), 'utf8');
const outputDir = path.join(root, 'public/assets/illustrations');
await mkdir(outputDir, { recursive: true });

function extract(name) {
  const match = source.match(new RegExp(`const ${name} = String\\.raw\x60([\\s\\S]*?)\x60;`));
  if (!match) throw new Error(`Could not find ${name} in Landmarks.tsx`);
  return match[1]
    .replaceAll('var(--land-fill)', '#F4EFE4')
    .replaceAll('var(--land-glass)', '#28463C')
    .replaceAll('var(--land-accent)', '#A87B3F')
    .replaceAll('currentColor', '#263A32');
}

const exports = [
  {
    name: 'THEATRE_GRAPHIC',
    file: 'national-theatre.svg',
    viewBox: '0 0 1200 700',
    labelledby: 'nt-title nt-desc',
  },
  {
    name: 'BRIDGE_GRAPHIC',
    file: 'lekki-ikoyi-link-bridge.svg',
    viewBox: '0 0 1200 600',
    labelledby: 'lb-title lb-desc',
  },
];

for (const item of exports) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${item.viewBox}" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="${item.labelledby}">\n${extract(item.name)}\n</svg>\n`;
  await writeFile(path.join(outputDir, item.file), svg, 'utf8');
}
