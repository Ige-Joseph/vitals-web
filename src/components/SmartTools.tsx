import { APP_URL, smartTools } from '@/content/site';
import { ProductScreen } from './ProductScreen';
import { Icon, Reveal, SectionHead } from './ui';

export function SmartTools() {
  return (
    <section className="section smart-tools">
      <div className="page">
        <SectionHead eyebrow="Smart health tools" title="Helpful information, with clear limits." body="Use Symptom Checker and Drug Scan to explore information. They are not a diagnosis or a substitute for professional care." />
        <div className="tool-grid">
          {smartTools.map((tool, index) => (
            <Reveal key={tool.title} delay={index * 100}>
              <article className="tool-card">
                <div className="tool-heading">
                  <span className="tool-icon"><Icon name={tool.icon} size={24} /></span>
                  <div><h3>{tool.title}</h3><p>{tool.body}</p></div>
                </div>
                <ProductScreen src={tool.screenshot} alt={tool.alt} title={tool.title} ratio={tool.ratio} />
              </article>
            </Reveal>
          ))}
        </div>
        <p className="tool-disclaimer">Vitals does not diagnose, treat or give medical advice. Contact a doctor or pharmacist for professional guidance.</p>
        <div className="tool-link"><a href={APP_URL} target="_blank" rel="noopener noreferrer">Explore Vitals <Icon name="arrow_outward" size={18} /></a></div>
      </div>
      <style>{`
        .smart-tools { background: var(--surface-container-low); }
        .tool-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1rem, 3vw, 2rem); }
        .tool-card { height: 100%; padding: clamp(1rem, 2.5vw, 1.5rem); border: 1px solid var(--outline-variant); border-radius: var(--radius-2xl); background: var(--surface-container-lowest); box-shadow: var(--shadow-md); }
        .tool-heading { display: flex; gap: .9rem; align-items: flex-start; min-height: 7rem; margin-bottom: 1.15rem; }
        .tool-icon { display: grid; flex: 0 0 2.8rem; place-items: center; width: 2.8rem; height: 2.8rem; border-radius: var(--radius-lg); color: var(--on-primary-fixed-variant); background: var(--primary-fixed); }
        .tool-card h3 { font-size: var(--step-h3); }
        .tool-card p { margin-top: .4rem; color: var(--on-surface-variant); font-size: .92rem; line-height: 1.55; }
        .tool-disclaimer { margin: 1.5rem auto 0; text-align: center; max-width: 70ch; color: var(--outline); font-size: .83rem; }
        .tool-link { margin-top: 1.25rem; text-align: center; }
        .tool-link a { display: inline-flex; align-items: center; gap: .4rem; color: var(--primary); font: 700 .95rem var(--font-headline); }
        @media (max-width: 760px) { .tool-grid { grid-template-columns: 1fr; } .tool-heading { min-height: unset; } }
      `}</style>
    </section>
  );
}
