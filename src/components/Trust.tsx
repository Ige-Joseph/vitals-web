import { Icon, Reveal, SectionHead } from './ui';
import { trust, disclaimer } from '@/content/site';

/**
 * Trust, stated only as far as the product actually goes.
 *
 * Every line here describes something the application does: access runs through
 * invitations you control, granting access writes a record, and reports show
 * recorded counts rather than scores. There is no claim about encryption
 * standards, certification or compliance, because none has been established —
 * and on a health product an unbacked security claim is worse than silence.
 *
 * The medical disclaimer is given its own block rather than buried in the
 * footer. It is the most important sentence on the page.
 */
export function Trust() {
  return (
    <section className="section" style={{ background: 'var(--surface-container-low)' }}>
      <div className="page">
        <SectionHead
          eyebrow="Your information"
          title="Health information deserves care."
          body="A few things we think are worth being clear about."
        />

        <ul className="trust-grid">
          {trust.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span
                  style={{
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 44,
                    height: 44,
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--surface-container-lowest)',
                    color: 'var(--primary)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700 }}>{item.title}</h3>
                  <p
                    style={{
                      marginTop: '0.375rem',
                      fontSize: 'var(--step-small)',
                      color: 'var(--on-surface-variant)',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <aside
            style={{
              marginTop: 'clamp(2.5rem, 5vw, 3.5rem)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              borderRadius: 'var(--radius-xl)',
              background: 'var(--surface-container-lowest)',
              borderLeft: '4px solid var(--tertiary)',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              maxWidth: '58rem',
            }}
          >
            <span style={{ color: 'var(--tertiary)', flexShrink: 0, marginTop: 2 }}>
              <Icon name="info" size={22} />
            </span>
            <p style={{ fontSize: 'var(--step-small)', color: 'var(--on-surface-variant)', lineHeight: 1.65 }}>
              {disclaimer}
            </p>
          </aside>
        </Reveal>
      </div>

      <style>{`
        .trust-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }
        @media (max-width: 860px) {
          .trust-grid { grid-template-columns: 1fr; gap: 1.75rem; }
        }
      `}</style>
    </section>
  );
}
