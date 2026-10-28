import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import { Assemble } from './Assemble';

/** Read the real public directory at build/render time so new gallery files join automatically. */
function getGalleryFiles() {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), 'public/assets/gallery'))
      .filter((file) => /\.(avif|gif|jpe?g|png|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  } catch {
    return [];
  }
}

function GalleryTrack({ files, copy = false }: { files: string[]; copy?: boolean }) {
  return (
    <div className="gallery-marquee__track" aria-hidden={copy || undefined}>
      {files.map((file, index) => (
        <figure className="gallery-marquee__item" key={`${copy ? 'copy-' : ''}${file}`}>
          <Image
            src={`/assets/gallery/${file}`}
            alt={copy ? '' : `Previous event photograph ${index + 1}`}
            fill
            sizes="(max-width: 600px) 62vw, 238px"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
}

export default function GallerySlideshow() {
  const files = getGalleryFiles();
  if (!files.length) return null;

  return (
    <section className="gallery-section" aria-label="Previous event photographs">
      <Assemble className="gallery-marquee" style={{ '--assemble-paper': 'var(--lace-ivory)' } as CSSProperties}>
        <div className="gallery-marquee__belt">
          <GalleryTrack files={files} />
          <GalleryTrack files={files} copy />
        </div>
      </Assemble>
    </section>
  );
}
