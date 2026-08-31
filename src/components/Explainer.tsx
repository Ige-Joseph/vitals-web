import { Icon, Reveal } from './ui';
import { explainer } from '@/content/site';

/**
 * What Vitals is.
 *
 * The section that was missing. The hero says what Vitals helps you *do*, and
 * the features say what it *has* — but nothing said what it *is*, so a
 * first-time visitor could read the page and still not know whether this was an
 * app, a service or a device. The only appearance of the word "app" was "the
 * mobile app is on the way", which reads as though nothing has shipped.
 *
 * It sits immediately after the hero, before any feature, because that is the
 * question someone is actually holding at that point. The four facts answer the
 * ones they ask next — what is it, who is it for, what does it cost, where does
 * it run — in the order they usually ask them.
 *
 * No card, no icons grid, no decoration: one paragraph at reading size and four
 * short lines. A section explaining what something is should be the plainest on
 * the page.
 */
export function Explainer() {
  return (
    <section id="about" className="section" style={{ paddingBlock: 'clamp(3rem, 7vw, 5.5rem)' }}>
      <div className="page">
        <div className="explainer">
          <Reveal>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                {explainer.eyebrow}
              </p>
              <h2 style={{ fontSize: 'var(--step-h2)', fontWeight: 800, maxWidth: '12ch' }}>
                {explainer.title}
              </h2>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div>
              <p
                style={{
                  fontSize: 'var(--step-lead)',
                  lineHeight: 1.6,
                  color: 'var(--on-surface)',
                  maxWidth: '54ch',
                }}
              >
                {explainer.body}
              </p>

              <dl className="facts">
                {explainer.facts.map(fact => (
                  <div key={fact.label} className="fact">
                    <span className="fact-icon">
                      <Icon name={fact.icon} size={20} />
                    </span>
                    <div>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .explainer {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: clamp(2rem, 5vw, 4.5rem);
          align-items: start;
        }
        .facts {
          margin: clamp(2rem, 4vw, 2.75rem) 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem 2rem;
        }
        .fact {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .fact-icon {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: var(--primary-fixed);
          color: var(--on-primary-fixed-variant);
        }
        .facts dt {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--outline);
          font-family: var(--font-headline);
        }
        .facts dd {
          margin: 0.2rem 0 0;
          font-size: 0.9375rem;
          color: var(--on-surface);
          line-height: 1.45;
        }
        @media (max-width: 900px) {
          .explainer { grid-template-columns: 1fr; gap: 1.75rem; }
        }
        @media (max-width: 560px) {
          .facts { grid-template-columns: 1fr; gap: 1rem; }
        }
      `}</style>
    </section>
  );
}
