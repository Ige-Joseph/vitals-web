import fs from 'node:fs';
import path from 'node:path';
import Image from 'next/image';
import { Button, Icon, Reveal, SectionHead } from './ui';
import { showcase, APP_URL } from '@/content/site';

/**
 * The real application.
 *
 * Every frame here is a screenshot of the running Vitals web app, presented in
 * browser chrome. Where a screenshot has not been captured yet the frame states
 * that plainly instead of drawing an interface — a mocked-up screen that does
 * not match the product would be the one dishonest thing on the page, and the
 * whole point of this section is "this is real, look".
 *
 * public/images/README.md has the capture instructions, including which route
 * each frame expects.
 */

const shotExists = (src: string) => {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', src.replace(/^\//, '')));
  } catch {
    return false;
  }
};

/** Browser chrome around a screenshot, so it reads as an application. */
function AppFrame({ src, alt, tilt = 0 }: { src: string; alt: string; tilt?: number }) {
  const has = shotExists(src);

  return (
    <div
      style={{
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: 'var(--surface-container-lowest)',
        boxShadow: 'var(--shadow-xl)',
        border: '1px solid var(--outline-variant)',
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
      }}
    >
      {/* Chrome. Decorative, so it is hidden from assistive technology. */}
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: '0.6rem 0.85rem',
          background: 'var(--surface-container)',
          borderBottom: '1px solid var(--outline-variant)',
        }}
      >
        {['#ff5f57', '#febc2e', '#28c840'].map(c => (
          <span key={c} style={{ width: 9, height: 9, borderRadius: 99, background: c, opacity: 0.75 }} />
        ))}
        <span
          style={{
            marginLeft: '0.5rem',
            fontSize: '0.6875rem',
            color: 'var(--outline)',
            fontFamily: 'var(--font-body)',
          }}
        >
          vitals
        </span>
      </div>

      <div style={{ position: 'relative', aspectRatio: '16 / 10', background: 'var(--surface)' }}>
        {has ? (
          <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
        ) : (
          <div
            role="img"
            aria-label={alt}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              padding: '1.5rem',
              textAlign: 'center',
              background:
                'linear-gradient(160deg, var(--surface-container-lowest) 0%, var(--surface-container-low) 100%)',
            }}
          >
            <div style={{ maxWidth: '30ch' }}>
              <span
                className="material-symbols-rounded"
                aria-hidden="true"
                style={{ fontSize: 30, color: 'var(--outline)' }}
              >
                image
              </span>
              <p
                style={{
                  marginTop: '0.5rem',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  color: 'var(--on-surface-variant)',
                }}
              >
                {alt}
              </p>
              <p style={{ marginTop: '0.375rem', fontSize: '0.72rem', color: 'var(--outline)' }}>
                Screenshot pending — add <code>{src}</code>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Showcase() {
  const [lead, ...rest] = showcase;

  return (
    <section id="product" className="section" style={{ background: 'var(--surface-container-low)' }}>
      <div className="page">
        <SectionHead
          eyebrow="The product"
          title="This is Vitals, today."
          body="Not a concept. You can open it in your browser right now."
        />

        <div className="showcase">
          <Reveal>
            <div>
              <AppFrame src={lead.image} alt={lead.alt} />
              <h3 style={{ fontSize: 'var(--step-h3)', fontWeight: 700, marginTop: '1.5rem' }}>
                {lead.title}
              </h3>
              <p style={{ marginTop: '0.5rem', color: 'var(--on-surface-variant)' }}>{lead.body}</p>
            </div>
          </Reveal>

          <div className="showcase-side">
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={(i + 1) * 90}>
                <div>
                  <AppFrame src={item.image} alt={item.alt} />
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, marginTop: '1rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ marginTop: '0.375rem', fontSize: 'var(--step-small)', color: 'var(--on-surface-variant)' }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)', textAlign: 'center' }}>
            <Button href={APP_URL} external size="lg">
              Open Vitals
              <Icon name="arrow_outward" size={20} />
            </Button>
          </div>
        </Reveal>
      </div>

      <style>{`
        .showcase {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: clamp(1.5rem, 3vw, 2.5rem);
          align-items: start;
        }
        .showcase-side {
          display: grid;
          gap: clamp(1.5rem, 3vw, 2rem);
        }
        @media (max-width: 900px) {
          .showcase { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
