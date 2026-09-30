import { explainer } from '@/content/site';
import { ProductScreen } from './ProductScreen';
import { Icon, Reveal } from './ui';

export function Explainer() {
  return (
    <section id="about" className="section about-section">
      <div className="page">
        <div className="about-grid">
          <div className="about-copy">
            <Reveal><p className="eyebrow">{explainer.eyebrow}</p><h2>{explainer.title}</h2><p className="lead">{explainer.body}</p></Reveal>
            <dl className="facts">
              {explainer.facts.map((fact, index) => <Reveal as="div" key={fact.label} delay={index * 55}><div className="fact"><span className="fact-icon"><Icon name={fact.icon} size={20} /></span><div><dt>{fact.label}</dt><dd>{fact.value}</dd></div></div></Reveal>)}
            </dl>
          </div>
          <Reveal delay={120}><ProductScreen src="/images/screens/dashboard.webp" alt="Vitals dashboard showing demo care tasks and activity." title="Vitals dashboard" ratio="9 / 7" priority /></Reveal>
        </div>
      </div>
      <style>{`
        .about-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(2rem, 5vw, 4rem); align-items: center; }
        .about-copy h2 { margin-top: .75rem; max-width: 15ch; font-size: var(--step-h2); font-weight: 800; }
        .about-copy .lead { margin-top: 1rem; max-width: 55ch; }
        .facts { margin: 1.75rem 0 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .fact { display: flex; align-items: flex-start; gap: .7rem; }
        .fact-icon { display: grid; flex: 0 0 2.25rem; place-items: center; width: 2.25rem; height: 2.25rem; border-radius: var(--radius-md); background: var(--primary-fixed); color: var(--on-primary-fixed-variant); }
        .facts dt { font: 700 .72rem var(--font-headline); letter-spacing: .05em; text-transform: uppercase; color: var(--outline); }
        .facts dd { margin: .2rem 0 0; color: var(--on-surface); font-size: .86rem; line-height: 1.45; }
        @media (max-width: 820px) { .about-grid { grid-template-columns: 1fr; } }
        @media (max-width: 560px) { .facts { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
