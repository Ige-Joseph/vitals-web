import { APP_URL, premium } from '@/content/site';
import { ProductScreen } from './ProductScreen';
import { Button, Icon, Reveal } from './ui';

export function Premium() {
  return (
    <section id="premium" className="section premium-section">
      <div className="page">
        <div className="premium-layout">
          <Reveal>
            <div>
              <p className="eyebrow">Premium, when you need more</p>
              <h2>{premium.title}</h2>
              <p className="lead">{premium.body}</p>
              <div className="premium-includes">
                <p><Icon name="description" size={20} /> Downloadable health summary</p>
                <p><Icon name="group_add" size={20} /> More capacity for managed and connected records</p>
              </div>
              <p className="premium-note">{premium.note}</p>
              <Button href={APP_URL} external variant="secondary">See Vitals Premium <Icon name="arrow_outward" size={18} /></Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ProductScreen src={premium.screenshot} alt={premium.screenshotAlt} title="Premium health summary" />
          </Reveal>
        </div>
      </div>
      <style>{`
        .premium-section { background: var(--surface-container-low); }
        .premium-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(2rem, 6vw, 5rem); align-items: center; }
        .premium-layout h2 { margin-top: .75rem; font-size: var(--step-h2); font-weight: 800; max-width: 15ch; }
        .premium-layout .lead { margin-top: 1rem; max-width: 48ch; }
        .premium-includes { display: grid; gap: .7rem; margin: 1.35rem 0; }
        .premium-includes p { display: flex; align-items: center; gap: .65rem; color: var(--on-surface-variant); font-size: .92rem; }
        .premium-includes .material-symbols-rounded { color: var(--primary); }
        .premium-note { max-width: 48ch; margin-bottom: 1.25rem; color: var(--outline); font-size: .8rem; }
        @media (max-width: 800px) { .premium-layout { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
