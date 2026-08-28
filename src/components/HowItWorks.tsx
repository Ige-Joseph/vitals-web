import { Reveal, SectionHead } from './ui';
import { steps } from '@/content/site';

/**
 * Three steps.
 *
 * Meant to be scanned rather than read: a number, a short line, one sentence.
 * The connecting rule between steps is drawn on desktop only — vertically it
 * would run through the numbers rather than between them.
 */
export function HowItWorks() {
  return (
    <section className="section">
      <div className="page">
        {/*
          A single held sentence before the mechanics.

          Borrowed in shape from mbilafiamedical.com's "Accuracy is not just a
          standard — it's a promise": one line, confident, no adjectives doing
          the work. The claim is deliberately small enough to be true.
        */}
        <Reveal>
          <blockquote className="statement">
            <p>Keeping track of your health shouldn&rsquo;t be the hard part.</p>
            <cite>That is the whole idea behind Vitals.</cite>
          </blockquote>
        </Reveal>

        <SectionHead eyebrow="How it works" title="Three steps, and you are set up." align="center" />

        <ol className="steps">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 110}>
              <div className="step">
                <span className="step-n" aria-hidden="true">
                  {step.n}
                </span>
                <h3 style={{ fontSize: 'var(--step-h3)', fontWeight: 700, marginTop: '1.25rem' }}>
                  {step.title}
                </h3>
                <p style={{ marginTop: '0.625rem', color: 'var(--on-surface-variant)' }}>
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <style>{`
        .statement {
          margin: 0 auto clamp(3.5rem, 7vw, 5.5rem);
          max-width: 24ch;
          text-align: center;
          border: 0;
          padding: 0;
        }
        .statement p {
          font-family: var(--font-headline);
          font-weight: 800;
          font-size: clamp(1.6rem, 3.6vw, 2.6rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }
        .statement cite {
          display: block;
          margin-top: 1rem;
          font-style: normal;
          font-size: var(--step-small);
          color: var(--on-surface-variant);
        }
        .steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(1.5rem, 4vw, 3rem);
          counter-reset: step;
        }
        .step { position: relative; }
        .step-n {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          border-radius: var(--radius-full);
          background: var(--primary);
          color: var(--on-primary);
          font-family: var(--font-headline);
          font-weight: 800;
          font-size: 1.35rem;
          box-shadow: 0 8px 22px rgba(0,91,191,0.22);
        }
        /* The rule joining the steps, drawn from each number to the next. */
        @media (min-width: 861px) {
          .steps > li { position: relative; }
          .steps > li:not(:last-child) .step::after {
            content: '';
            position: absolute;
            top: 28px;
            left: 72px;
            right: calc(-1 * clamp(1.5rem, 4vw, 3rem) - 16px);
            height: 2px;
            background: linear-gradient(90deg, var(--outline-variant), transparent);
          }
        }
        @media (max-width: 860px) {
          .steps { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
}
