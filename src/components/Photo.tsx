import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

/**
 * A photograph, or a designed space waiting for one.
 *
 * The site is built to carry real photography — see public/images/README.md for
 * what belongs in each slot and the representation the brief asks for. No
 * photographs are committed, because inventing image files is not something
 * that can be faked and licensed stock is not something to guess at.
 *
 * So this checks, at build time, whether the file is actually there. If it is,
 * it renders through next/image with responsive sizes and lazy loading. If it
 * is not, it renders a composed placeholder in the Vitals palette that states
 * what the slot is for.
 *
 * The point is that the page looks finished either way. A missing photograph
 * leaves a considered block of colour and a label, not a broken image icon or a
 * collapsed layout — and dropping the file in later needs no code change.
 */

const PUBLIC_DIR = path.join(process.cwd(), 'public');

const exists = (src: string) => {
  try {
    return fs.existsSync(path.join(PUBLIC_DIR, src.replace(/^\//, '')));
  } catch {
    return false;
  }
};

export function Photo({
  src,
  alt,
  ratio = '4 / 3',
  priority = false,
  rounded = 'var(--radius-2xl)',
}: {
  src: string;
  /** Describes the photograph. Also shown on the placeholder, so it is never
   *  a throwaway string. */
  alt: string;
  ratio?: string;
  priority?: boolean;
  rounded?: string;
}) {
  const frame: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    aspectRatio: 'var(--photo-ratio, ' + ratio + ')',
    borderRadius: rounded,
    overflow: 'hidden',
    background: 'var(--surface-container)',
    boxShadow: 'var(--shadow-lg)',
  };

  if (exists(src)) {
    return (
      <div style={frame}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={priority}
          // Anything below the fold waits its turn.
          loading={priority ? undefined : 'lazy'}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        ...frame,
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        textAlign: 'center',
        background:
          'linear-gradient(155deg, var(--primary-fixed) 0%, var(--surface-container-low) 62%, var(--tertiary-fixed) 160%)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--outline-variant)',
      }}
      role="img"
      aria-label={alt}
    >
      <div style={{ maxWidth: '28ch' }}>
        <span
          className="material-symbols-rounded"
          aria-hidden="true"
          style={{ fontSize: 34, color: 'var(--on-primary-fixed-variant)', opacity: 0.55 }}
        >
          photo_camera
        </span>
        <p
          style={{
            marginTop: '0.75rem',
            fontFamily: 'var(--font-headline)',
            fontWeight: 700,
            fontSize: '0.9375rem',
            color: 'var(--on-primary-fixed-variant)',
          }}
        >
          {alt}
        </p>
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '0.75rem',
            color: 'var(--on-surface-variant)',
            opacity: 0.85,
          }}
        >
          Add <code>{src}</code>
        </p>
      </div>
    </div>
  );
}
