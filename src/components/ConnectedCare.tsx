import Image from 'next/image';
import { familyCare } from '@/content/site';
import { ProductScreen } from './ProductScreen';
import { Reveal } from './ui';

export function ConnectedCare() {
  return (
    <section id="family-care" className="section">
      <div className="page">
        <div className="family-story">
          <Reveal>
            <div className="family-photo">
              <Image src={familyCare.image} alt={familyCare.alt} fill sizes="(max-width: 820px) 100vw, 42vw" style={{ objectFit: 'cover', objectPosition: 'center 55%' }} />
            </div>
          </Reveal>
          <div className="family-content">
            <Reveal delay={90}>
              <p className="eyebrow">{familyCare.eyebrow}</p>
              <h2>{familyCare.title}</h2>
              <p className="lead">{familyCare.body}</p>
            </Reveal>
            <Reveal delay={170}>
              <div className="family-types">
                <article>
                  <span className="family-icon"><span className="material-symbols-rounded" aria-hidden="true">family_restroom</span></span>
                  <div><h3>Managed</h3><p>A record you look after for someone without their own Vitals account.</p></div>
                </article>
                <article>
                  <span className="family-icon family-icon-alt"><span className="material-symbols-rounded" aria-hidden="true">group</span></span>
                  <div><h3>Connected</h3><p>An adult with their own account who invites you to access their record.</p></div>
                </article>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="family-screen">
            <ProductScreen src={familyCare.screenshot} alt={familyCare.screenshotAlt} title="Family records & invitations" ratio={familyCare.ratio} />
            <p className="family-caption">A connected record belongs to its owner; they can change or remove access.</p>
          </div>
        </Reveal>
      </div>
      <style>{`
        .family-story { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(2rem, 6vw, 5rem); }
        .family-photo { position: relative; overflow: hidden; aspect-ratio: 4 / 3; border-radius: var(--radius-2xl); box-shadow: var(--shadow-lg); }
        .family-content h2 { margin-top: .75rem; font-size: var(--step-h2); font-weight: 800; max-width: 17ch; }
        .family-content .lead { margin-top: 1rem; max-width: 48ch; }
        .family-types { display: grid; gap: .9rem; margin-top: 1.6rem; }
        .family-types article { display: flex; align-items: flex-start; gap: .8rem; padding: 1rem; border: 1px solid var(--outline-variant); border-radius: var(--radius-xl); background: var(--surface-container-lowest); }
        .family-icon { display: grid; flex: 0 0 2.4rem; place-items: center; width: 2.4rem; height: 2.4rem; border-radius: .8rem; color: var(--on-primary-fixed-variant); background: var(--primary-fixed); }
        .family-icon-alt { color: var(--tertiary); background: var(--tertiary-fixed); }
        .family-types h3 { font-size: 1rem; }
        .family-types p { margin-top: .25rem; color: var(--on-surface-variant); font-size: .9rem; line-height: 1.5; }
        .family-screen { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(12rem, .6fr); gap: 1.5rem; align-items: center; margin-top: 3rem; }
        .family-screen .product-screen { width: 100%; max-width: 35rem; margin-inline: auto; }
        .family-caption { color: var(--on-surface-variant); font-size: .9rem; max-width: 28ch; }
        @media (max-width: 820px) { .family-story { grid-template-columns: 1fr; } .family-photo { aspect-ratio: 16 / 10; } .family-screen { grid-template-columns: 1fr; } .family-caption { max-width: 55ch; } }
        @media (max-width: 560px) { .family-photo { aspect-ratio: 4 / 3; } }
      `}</style>
    </section>
  );
}
