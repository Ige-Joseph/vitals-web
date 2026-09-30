import Image from 'next/image';
import { Button, Icon, Reveal } from './ui';
import { hero } from '@/content/site';

export function Hero() {
  return (
    <section id="top" className="tint-primary hero-section">
      <div className="page">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal><p className="eyebrow">{hero.eyebrow}</p></Reveal>
            <Reveal delay={70}><h1>Your health, <span className="accent">with a little more in order.</span></h1></Reveal>
            <Reveal delay={130}><p className="lead hero-lead">{hero.body}</p></Reveal>
            <Reveal delay={190}>
              <div className="hero-actions">
                <Button href={hero.primary.href} external size="lg">{hero.primary.label}<Icon name="arrow_outward" size={20} /></Button>
                <Button href={hero.secondary.href} variant="secondary" size="lg">{hero.secondary.label}</Button>
              </div>
            </Reveal>
            <Reveal delay={250}><p className="hero-note"><Icon name="check_circle" size={18} color="var(--primary)" />{hero.note}</p></Reveal>
          </div>
          <Reveal delay={120}>
            <div className="hero-media">
              <div className="hero-photo"><Image src="/images/story/hero-family.webp" alt="A family spending time together outdoors." fill sizes="(max-width: 900px) 100vw, 48vw" priority style={{ objectFit: 'cover', objectPosition: 'center 54%' }} /></div>
              <div className="hero-chip"><span className="hero-chip-icon"><Icon name="health_and_safety" size={20} /></span><span><strong>A health app for everyday care</strong><em>Use Vitals in your browser today</em></span></div>
              <figure className="hero-product" aria-label="Real Vitals dashboard preview">
                <div className="hero-product-image">
                  <Image src="/images/screens/dashboard.webp" alt="Vitals dashboard showing demo care tasks and activity." fill sizes="(max-width: 560px) 64vw, (max-width: 900px) 45vw, 24vw" loading="eager" style={{ objectFit: 'contain', objectPosition: 'top', background: 'var(--surface)' }} />
                </div>
                <figcaption><Icon name="dashboard" size={17} /><span><strong>Inside Vitals</strong><em>A clear view of today</em></span></figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .hero-section { padding-block: clamp(2.5rem, 6vw, 5rem) clamp(3.75rem, 8vw, 6rem); }
        .hero-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(2rem, 5vw, 4.5rem); align-items: center; }
        .hero-copy h1 { margin-top: 1rem; font-size: var(--step-display); font-weight: 800; max-width: 14ch; }
        .hero-lead { margin-top: 1.35rem; max-width: 40ch; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: .75rem; margin-top: 2rem; }
        .hero-note { display: flex; align-items: flex-start; gap: .5rem; margin-top: 1.25rem; max-width: 48ch; color: var(--outline); font-size: var(--step-small); }
        .hero-note .material-symbols-rounded { flex: 0 0 auto; }
        .hero-media { position: relative; padding: .25rem .25rem 1.5rem 1.5rem; isolation: isolate; }
        .hero-photo { position: relative; width: 100%; aspect-ratio: 1.25 / 1; overflow: hidden; border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl); background: var(--surface-container); }
        .hero-photo img { transition: transform .8s cubic-bezier(.2,.7,.2,1); }
        .hero-media:hover .hero-photo img { transform: scale(1.025); }
        .hero-chip { position: absolute; z-index: 2; left: 0; top: 1.15rem; display: flex; align-items: center; gap: .75rem; max-width: calc(100% - 1rem); padding: .8rem 1rem .8rem .8rem; border: 1px solid rgba(255,255,255,.72); border-radius: var(--radius-xl); background: rgba(247,249,255,.9); backdrop-filter: blur(16px) saturate(145%); -webkit-backdrop-filter: blur(16px) saturate(145%); box-shadow: 0 16px 38px rgba(24,28,32,.14), inset 0 1px 0 rgba(255,255,255,.85); animation: chip-in .55s .18s both cubic-bezier(.22,1,.36,1); }
        .hero-chip-icon { display: grid; place-items: center; width: 2.4rem; height: 2.4rem; flex: 0 0 auto; border-radius: var(--radius-md); color: var(--on-primary-fixed-variant); background: var(--primary-fixed); }
        .hero-chip strong, .hero-chip em { display: block; }
        .hero-chip strong { font: 700 .88rem/1.25 var(--font-headline); }
        .hero-chip em { margin-top: .15rem; color: var(--on-surface-variant); font-size: .72rem; font-style: normal; }
        .hero-product { position: absolute; z-index: 2; right: -.15rem; bottom: -.25rem; width: min(58%, 19rem); overflow: hidden; margin: 0; border: 1px solid rgba(255,255,255,.9); border-radius: 1.1rem; background: rgba(247,249,255,.94); box-shadow: 0 22px 54px rgba(24,28,32,.2), inset 0 1px 0 rgba(255,255,255,.9); backdrop-filter: blur(16px) saturate(145%); -webkit-backdrop-filter: blur(16px) saturate(145%); transform: translateY(0); transition: transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease; }
        .hero-product:hover { transform: translateY(-5px); box-shadow: 0 28px 64px rgba(24,28,32,.23), inset 0 1px 0 rgba(255,255,255,.9); }
        .hero-product-image { position: relative; aspect-ratio: 9 / 7; overflow: hidden; border-radius: 1rem 1rem .35rem .35rem; background: var(--surface); }
        .hero-product figcaption { display: flex; align-items: center; gap: .55rem; padding: .65rem .8rem .7rem; color: var(--primary); }
        .hero-product figcaption span, .hero-product figcaption strong, .hero-product figcaption em { display: block; }
        .hero-product figcaption strong { color: var(--on-surface); font: 700 .75rem/1.2 var(--font-headline); }
        .hero-product figcaption em { margin-top: .12rem; color: var(--on-surface-variant); font-size: .66rem; font-style: normal; }
        @keyframes chip-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 2rem; } .hero-copy h1 { max-width: 15ch; } .hero-media { padding-left: .5rem; } .hero-photo { aspect-ratio: 16 / 10; } }
        @media (max-width: 560px) {
          .hero-grid { width: 100%; max-width: 100%; margin-inline: auto; }
          .hero-grid .hero-copy, .hero-grid .hero-media { min-width: 0; max-width: 100%; }
          .hero-copy h1 { max-width: 13ch; }
          .hero-lead { width: 100%; max-width: 100%; overflow-wrap: anywhere; }
          .hero-actions { display: grid; }
          .hero-actions :is(a, button) { width: 100%; max-width: 100%; min-width: 0; box-sizing: border-box; }
          .hero-media { padding: 0 0 1.5rem; }
          .hero-photo { aspect-ratio: 4 / 3; }
          .hero-chip { top: .65rem; left: -.35rem; max-width: 70%; padding: .6rem .7rem .6rem .6rem; gap: .55rem; }
          .hero-chip strong { font-size: .72rem; }
          .hero-chip em { font-size: .63rem; }
          .hero-chip-icon { width: 2rem; height: 2rem; }
          .hero-product { right: -.25rem; bottom: -.2rem; width: 62%; border-radius: .9rem; }
          .hero-product figcaption { padding: .5rem .65rem; }
        }
        @media (prefers-reduced-motion: reduce) { .hero-chip { animation: none; } }
      `}</style>
    </section>
  );
}
