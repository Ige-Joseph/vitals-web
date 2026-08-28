import { Button, Icon, Reveal } from './ui';
import { hero } from '@/content/site';
import { Photo } from './Photo';

/**
 * The hero.
 *
 * Text left, one photograph right, and nothing else competing. The composition
 * changes rather than shrinks on a phone: the columns stack, the portrait
 * becomes a wide crop underneath the copy, and the buttons go full width — a
 * scaled-down two-column layout would put a thin column of text beside a
 * postage stamp.
 *
 * The photograph is the only decorative element on the page above the fold.
 * That is deliberate: the fastest way to look like every other health startup
 * is to surround the headline with floating shapes.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="tint-primary"
      style={{ paddingBlock: 'clamp(2.5rem, 6vw, 5rem) var(--section-y)' }}
    >
      <div className="page">
        <div className="hero-grid">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: '1.25rem' }}>
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1
                style={{
                  fontSize: 'var(--step-display)',
                  fontWeight: 800,
                  maxWidth: '14ch',
                }}
              >
                Your health,{' '}
                <span className="accent">all in one place.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '38ch' }}>
                {hero.body}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-actions">
                <Button href={hero.primary.href} external size="lg">
                  {hero.primary.label}
                  <Icon name="arrow_outward" size={20} />
                </Button>
                <Button href={hero.secondary.href} variant="secondary" size="lg">
                  {hero.secondary.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: 'var(--step-small)',
                  color: 'var(--outline)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Icon name="check_circle" size={18} color="var(--primary)" />
                {hero.note}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="hero-media" style={{ position: 'relative' }}>
              <Photo
                src="/images/hero.jpg"
                alt="A woman checking her medicines at home, phone in hand."
                priority
                ratio="4 / 5"
              />

              {/* Layered over the photograph's lower corner. It states what the
                  product does rather than a statistic, because there are no
                  usage numbers worth quoting and inventing one would be the
                  easiest lie on the page. */}
              <div className="hero-chip">
                <span className="hero-chip-icon">
                  <Icon name="notifications_active" size={20} />
                </span>
                <span>
                  <strong>Next dose, 8:00pm</strong>
                  <em>Reminders that arrive on time</em>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: center;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2.25rem;
        }
        .hero-chip {
          position: absolute;
          left: -1.25rem;
          bottom: 1.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 1.1rem 0.8rem 0.8rem;
          border-radius: var(--radius-xl);
          background: var(--surface-container-lowest);
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--outline-variant);
        }
        .hero-chip-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-md);
          background: var(--primary-fixed);
          color: var(--on-primary-fixed-variant);
          flex-shrink: 0;
        }
        .hero-chip strong {
          display: block;
          font-family: var(--font-headline);
          font-size: 0.9375rem;
          font-weight: 700;
          line-height: 1.2;
        }
        .hero-chip em {
          display: block;
          font-style: normal;
          font-size: 0.75rem;
          color: var(--on-surface-variant);
          margin-top: 1px;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          /* Tucked inside the frame on phones — a negative offset would hang
             off the edge of the viewport. */
          .hero-chip { left: 1rem; bottom: 1rem; }
          /* A tall portrait below the fold on a phone pushes everything else
             off the screen; a landscape crop keeps the page moving. */
          .hero-media { --photo-ratio: 16 / 10; }
          .hero-actions > * { flex: 1 1 100%; }
        }
      `}</style>
    </section>
  );
}
