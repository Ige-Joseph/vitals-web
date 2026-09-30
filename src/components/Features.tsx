import { everydayFeatures } from '@/content/site';
import Image from 'next/image';
import { ProductScreen } from './ProductScreen';
import { Icon, Reveal, SectionHead } from './ui';

export function Features() {
  return (
    <section id="features" className="section everyday-section">
      <div className="page">
        <SectionHead eyebrow="Everyday health management" title="The details of care, all in one place." body="Build a useful record from everyday things you already need to keep track of." />
        <div className="everyday-layout">
          <div className="everyday-list">
            {everydayFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 80}>
                <article className="everyday-feature">
                  <span className={`everyday-icon everyday-icon-${index}`}><Icon name={feature.icon} size={23} /></span>
                  <div><h3>{feature.title}</h3><p>{feature.body}</p></div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <ProductScreen src="/images/screens/medications.webp" alt="Vitals medication management showing an invented demo medicine." title="Medicines & dose records" ratio="3 / 2" />
          </Reveal>
        </div>
        <Reveal>
          <div className="care-context" aria-label="Everyday healthcare context">
            <figure className="care-context-item care-context-medication">
              <div className="care-context-photo"><Image src="/images/story/medication-context.webp" alt="A person holding a medicine bottle." fill sizes="(max-width: 560px) 46vw, (max-width: 700px) 82vw, 32vw" style={{ objectFit: 'cover', objectPosition: 'center 38%' }} /></div>
              <figcaption>Keep medicine details and dose records close.</figcaption>
            </figure>
            <figure className="care-context-item care-context-appointment">
              <div className="care-context-photo"><Image src="/images/story/appointment-consult.webp" alt="A patient speaking with a clinician during an appointment." fill sizes="(max-width: 560px) 46vw, (max-width: 700px) 55vw, 24vw" style={{ objectFit: 'cover', objectPosition: 'center 42%' }} /></div>
              <figcaption>Keep appointments and reminders in view.</figcaption>
            </figure>
          </div>
        </Reveal>
      </div>
      <style>{`
        .everyday-section { background: var(--surface-container-low); }
        .everyday-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(2rem, 5vw, 4rem); align-items: center; }
        .everyday-list { display: grid; gap: .85rem; }
        .everyday-feature { display: flex; align-items: flex-start; gap: .9rem; padding: 1rem; border: 1px solid var(--outline-variant); border-radius: var(--radius-xl); background: var(--surface-container-lowest); }
        .everyday-icon { display: grid; flex: 0 0 2.6rem; place-items: center; width: 2.6rem; height: 2.6rem; border-radius: var(--radius-lg); color: var(--on-primary-fixed-variant); background: var(--primary-fixed); }
        .everyday-icon-1 { color: var(--tertiary); background: var(--tertiary-fixed); }
        .everyday-icon-2 { color: var(--on-secondary-container); background: var(--secondary-fixed); }
        .everyday-feature h3 { font-size: 1rem; }
        .everyday-feature p { margin-top: .3rem; color: var(--on-surface-variant); font-size: .9rem; line-height: 1.5; }
        .care-context { position: relative; width: min(100%, 43rem); height: clamp(18rem, 34vw, 26rem); margin: 3rem 0 0 auto; isolation: isolate; }
        .care-context-item { position: absolute; bottom: 0; margin: 0; overflow: hidden; border: 6px solid var(--surface-container-low); border-radius: calc(var(--radius-2xl) + .25rem); background: var(--surface-container-low); box-shadow: var(--shadow-xl); }
        .care-context-medication { z-index: 1; left: 0; width: 69%; }
        .care-context-appointment { z-index: 2; right: 0; width: 48%; transition: box-shadow .35s ease; }
        .care-context-photo { position: relative; overflow: hidden; aspect-ratio: 1.4 / 1; border-radius: var(--radius-xl) var(--radius-xl) 0 0; background: var(--surface-container); }
        .care-context-photo img { transition: transform .75s cubic-bezier(.2,.7,.2,1); }
        .care-context-item:hover .care-context-photo img { transform: scale(1.04); }
        .care-context-appointment:hover { box-shadow: var(--shadow-xl); }
        .care-context-item figcaption { box-sizing: border-box; display: flex; align-items: center; min-height: 3.25rem; padding: .45rem .8rem; color: var(--on-surface); background: var(--surface-container-lowest); font-size: .76rem; font-weight: 600; line-height: 1.4; }
        @media (max-width: 800px) { .everyday-layout { grid-template-columns: 1fr; } .care-context { height: clamp(20rem, 58vw, 26rem); margin-inline: auto; } }
        @media (max-width: 560px) { .care-context { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .65rem; height: auto; margin-top: 2rem; } .care-context-item { position: relative; inset: auto; width: auto; border-width: 4px; border-radius: var(--radius-xl); } .care-context-photo { aspect-ratio: 1 / 1; } .care-context-item figcaption { min-height: 4.2rem; padding: .35rem .4rem; font-size: .68rem; } }
        @media (hover: none) { .care-context-item:hover .care-context-photo img { transform: none; } }
      `}</style>
    </section>
  );
}
