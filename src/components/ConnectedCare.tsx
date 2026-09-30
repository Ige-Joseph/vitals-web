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
            <div className="family-photo-collage">
              <div className="family-photo">
                <Image src={familyCare.image} alt={familyCare.alt} fill sizes="(max-width: 820px) 100vw, 42vw" style={{ objectFit: 'cover', objectPosition: 'center 55%' }} />
              </div>
              <figure className="family-photo-inset">
                <div className="family-photo-inset-image">
                  <Image src="/images/story/hero-family.webp" alt="A family spending time together outdoors." fill sizes="(max-width: 560px) 48vw, 17vw" loading="lazy" style={{ objectFit: 'cover', objectPosition: 'center 54%' }} />
                </div>
                <figcaption>Care includes the people around us.</figcaption>
              </figure>
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
        .family-photo-collage { position: relative; isolation: isolate; padding: 0 1.5rem 1.4rem 0; }
        .family-photo { position: relative; overflow: hidden; aspect-ratio: 4 / 3; border-radius: var(--radius-2xl); box-shadow: var(--shadow-lg); background: var(--surface-container); }
        .family-photo img, .family-photo-inset-image img { transition: transform .85s cubic-bezier(.2,.7,.2,1); }
        .family-photo-collage:hover .family-photo img { transform: scale(1.025); }
        @media (hover: none) { .family-photo-collage:hover .family-photo img, .family-photo-inset:hover .family-photo-inset-image img { transform: none; } }
        .family-photo-inset { position: absolute; z-index: 2; right: -.1rem; bottom: 0; width: 47%; margin: 0; padding: .35rem; border: 1px solid rgba(255,255,255,.92); border-radius: 1.15rem; background: rgba(247,249,255,.9); backdrop-filter: blur(14px) saturate(145%); -webkit-backdrop-filter: blur(14px) saturate(145%); box-shadow: 0 20px 48px rgba(24,28,32,.2), inset 0 1px 0 rgba(255,255,255,.95); transform: rotate(-2deg); transition: transform .35s cubic-bezier(.2,.7,.2,1), box-shadow .35s ease; }
        .family-photo-inset-image { position: relative; overflow: hidden; aspect-ratio: 1.24 / 1; border-radius: .9rem; background: var(--surface-container); }
        .family-photo-inset figcaption { padding: .5rem .55rem .45rem; color: var(--on-surface-variant); font: 700 .66rem/1.35 var(--font-headline); }
        .family-photo-inset:hover { transform: rotate(0) translateY(-4px); box-shadow: 0 26px 56px rgba(24,28,32,.24), inset 0 1px 0 rgba(255,255,255,.95); }
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
        @media (max-width: 820px) { .family-story { grid-template-columns: 1fr; } .family-photo-collage { padding-right: 1rem; } .family-photo { aspect-ratio: 16 / 10; } .family-screen { grid-template-columns: 1fr; } .family-caption { max-width: 55ch; } }
        @media (max-width: 560px) { .family-photo { aspect-ratio: 4 / 3; } }
      `}</style>
    </section>
  );
}
