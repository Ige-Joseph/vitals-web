import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';

/**
 * A photograph, or a composed stand-in for one.
 *
 * No photographs are committed — see public/images/README.md for what each slot
 * needs. This checks at build time whether the file is there: if it is, it goes
 * through next/image with responsive sizes and lazy loading; if it is not, the
 * slot renders a piece of brand artwork instead.
 *
 * The artwork is the important part. An earlier version printed the expected
 * filename on the page, which turned every empty slot into a builder's note and
 * made a finished site look broken. Nothing of the sort is rendered now — not
 * even behind a NODE_ENV check, because that check shipped once already and a
 * marketing page is the wrong place to find out it did not hold. Which files
 * are missing is documented in public/images/README.md, where it belongs.
 *
 * What a visitor sees is a deliberate composition in the product's own colours
 * — good enough to launch with, better still once a photograph replaces it.
 */

const PUBLIC_DIR = path.join(process.cwd(), 'public');

const exists = (src: string) => {
  try {
    return fs.existsSync(path.join(PUBLIC_DIR, src.replace(/^\//, '')));
  } catch {
    return false;
  }
};

/**
 * Layered arcs and a soft field, drawn with gradients and radii that already
 * exist in the theme. No SVG asset, no illustration library — it is a few
 * divs, so it costs nothing and cannot go stale against the palette.
 */
function Artwork({ label, tone }: { label: string; tone: 'primary' | 'warm' }) {
  const isWarm = tone === 'warm';

  return (
    <div
      role="img"
      aria-label={label}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: isWarm
          ? 'linear-gradient(150deg, #ffdbcb 0%, #f7f9ff 55%, #d8e2ff 100%)'
          : 'linear-gradient(150deg, #d8e2ff 0%, #f7f9ff 52%, #ffdbcb 118%)',
      }}
    >
      {/* Concentric arcs, offset off-canvas so only the sweep is visible. */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '128%',
          aspectRatio: '1',
          right: '-46%',
          bottom: '-58%',
          borderRadius: '50%',
          border: '1.5px solid rgba(0,91,191,0.16)',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '96%',
          aspectRatio: '1',
          right: '-30%',
          bottom: '-42%',
          borderRadius: '50%',
          border: '1.5px solid rgba(0,91,191,0.12)',
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.75), rgba(255,255,255,0) 60%)',
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '34%',
          aspectRatio: '1',
          left: '12%',
          top: '16%',
          borderRadius: '50%',
          background: isWarm
            ? 'radial-gradient(circle at 35% 30%, rgba(158,67,0,0.16), rgba(158,67,0,0) 68%)'
            : 'radial-gradient(circle at 35% 30%, rgba(0,91,191,0.18), rgba(0,91,191,0) 68%)',
        }}
      />

      {/* The Vitals mark, quietly, so the space still reads as branded. */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'grid',
          placeItems: 'center',
          width: 74,
          height: 74,
          borderRadius: 'var(--radius-xl)',
          background: 'rgba(255,255,255,0.72)',
          boxShadow: '0 10px 30px rgba(24,28,32,0.10)',
          color: 'var(--primary)',
        }}
      >
        <span className="material-symbols-rounded" style={{ fontSize: 34 }}>
          favorite
        </span>
      </span>
    </div>
  );
}

export function Photo({
  src,
  alt,
  ratio = '4 / 3',
  priority = false,
  rounded = 'var(--radius-2xl)',
  tone = 'primary',
}: {
  src: string;
  /** Describes the photograph. Used as the accessible name either way, so it is
   *  never a throwaway string. */
  alt: string;
  ratio?: string;
  priority?: boolean;
  rounded?: string;
  tone?: 'primary' | 'warm';
}) {
  const frame: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    aspectRatio: `var(--photo-ratio, ${ratio})`,
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
          loading={priority ? undefined : 'lazy'}
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div style={frame}>
      <Artwork label={alt} tone={tone} />

    </div>
  );
}
