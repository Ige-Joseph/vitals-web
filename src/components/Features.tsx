import { Card, Icon, Reveal, SectionHead } from './ui';
import { features } from '@/content/site';
import { Photo } from './Photo';

/**
 * What Vitals does.
 *
 * Six things, each one already in the product. The grid is broken once by a
 * photograph occupying a cell, which stops it reading as a wall of identical
 * boxes without needing an image beside every item.
 */
export function Features() {
  return (
    <section id="features" className="section" style={{ background: 'var(--surface-container-low)' }}>
      <div className="page">
        <SectionHead
          eyebrow="What it does"
          title="Enough to keep your health in order."
          body="Not everything at once — the things people actually use."
        />

        <ul className="feature-grid">
          {features.map((feature, i) => (
            <Reveal as="li" key={feature.title} delay={i * 60}>
              <Card>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--primary-fixed)',
                    color: 'var(--on-primary-fixed-variant)',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon name={feature.icon} size={24} />
                </span>

                <h3 style={{ fontSize: 'var(--step-h3)', fontWeight: 700 }}>{feature.title}</h3>
                <p style={{ marginTop: '0.625rem', color: 'var(--on-surface-variant)' }}>
                  {feature.body}
                </p>
              </Card>
            </Reveal>
          ))}

          {/* One photograph inside the grid rather than a band above it. */}
          <Reveal as="li" delay={120}>
            <div className="feature-photo">
              <Photo
                src="/images/caregiver.jpg"
                alt="A daughter helping her mother sort her medicines for the week."
                ratio="1 / 1"
              />
            </div>
          </Reveal>
        </ul>
      </div>

      <style>{`
        .feature-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        /* The photograph sits in the last cell and is only worth its space when
           there is a row to fill. */
        .feature-photo { height: 100%; }
        @media (max-width: 1000px) {
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .feature-grid { grid-template-columns: 1fr; }
          .feature-photo { display: none; }
        }
      `}</style>
    </section>
  );
}
