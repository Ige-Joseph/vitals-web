import { Reveal, SectionHead } from './ui';
import { faq } from '@/content/site';

/**
 * FAQ.
 *
 * Native `<details>` / `<summary>`, which gets keyboard support, screen-reader
 * semantics and open/close state from the browser. A hand-rolled accordion
 * would need all three reimplemented and would still work less well — and this
 * one is readable with JavaScript switched off entirely.
 *
 * The marker is rotated with CSS on [open]; the height is not animated, because
 * animating auto height needs measurement and the payoff is a flourish nobody
 * asked for on a page they are scanning for an answer.
 */
export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="page">
        <SectionHead eyebrow="FAQ" title="Questions people ask." align="center" />

        <div className="faq-list">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 45}>
              <details className="faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="material-symbols-rounded faq-mark" aria-hidden="true">
                    expand_more
                  </span>
                </summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .faq-list {
          max-width: 46rem;
          margin-inline: auto;
          display: grid;
          gap: 0.75rem;
        }
        .faq-item {
          background: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-xl);
          padding: 0 1.35rem;
          box-shadow: var(--shadow-sm);
        }
        .faq-item summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-block: 1.15rem;
          cursor: pointer;
          font-family: var(--font-headline);
          font-weight: 700;
          font-size: 1.0625rem;
          color: var(--on-surface);
          list-style: none;
        }
        /* Safari draws its own triangle without this. */
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-item summary:focus-visible {
          outline: 3px solid var(--primary);
          outline-offset: 2px;
          border-radius: var(--radius-md);
        }
        .faq-mark {
          color: var(--outline);
          transition: transform 0.22s ease;
          flex-shrink: 0;
        }
        .faq-item[open] .faq-mark { transform: rotate(180deg); }
        .faq-item p {
          padding-bottom: 1.35rem;
          margin-top: -0.25rem;
          color: var(--on-surface-variant);
          line-height: 1.65;
          max-width: 60ch;
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-mark { transition: none; }
        }
      `}</style>
    </section>
  );
}
