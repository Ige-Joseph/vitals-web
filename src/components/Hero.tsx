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
        .hero-media { position: relative; padding: .25rem .25rem 1.75rem 1.75rem; }
        .hero-photo { position: relative; width: 100%; aspect-ratio: 1.25 / 1; overflow: hidden; border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl); }
        .hero-chip { position: absolute; left: 0; bottom: 0; display: flex; align-items: center; gap: .75rem; max-width: calc(100% - 1rem); padding: .8rem 1rem .8rem .8rem; border: 1px solid var(--outline-variant); border-radius: var(--radius-xl); background: var(--surface-container-lowest); box-shadow: var(--shadow-lg); animation: chip-in .55s .18s both cubic-bezier(.22,1,.36,1); }
        .hero-chip-icon { display: grid; place-items: center; width: 2.4rem; height: 2.4rem; flex: 0 0 auto; border-radius: var(--radius-md); color: var(--on-primary-fixed-variant); background: var(--primary-fixed); }
        .hero-chip strong, .hero-chip em { display: block; }
        .hero-chip strong { font: 700 .88rem/1.25 var(--font-headline); }
        .hero-chip em { margin-top: .15rem; color: var(--on-surface-variant); font-size: .72rem; font-style: normal; }
        @keyframes chip-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr; gap: 2rem; } .hero-copy h1 { max-width: 15ch; } .hero-media { padding-left: .5rem; } .hero-photo { aspect-ratio: 16 / 10; } }
        @media (max-width: 560px) {
          .hero-grid { width: 100%; max-width: 100%; margin-inline: auto; }
          .hero-grid .hero-copy, .hero-grid .hero-media { min-width: 0; max-width: 100%; }
          .hero-copy h1 { max-width: 13ch; }
          .hero-lead { width: 100%; max-width: 100%; overflow-wrap: anywhere; }
          .hero-actions { display: grid; }
          .hero-actions :is(a, button) { width: 100%; max-width: 100%; min-width: 0; box-sizing: border-box; }
          .hero-media { padding: 0 0 1.25rem; }
          .hero-photo { aspect-ratio: 4 / 3; }
        }
        @media (prefers-reduced-motion: reduce) { .hero-chip { animation: none; } }
      `}</style>
    </section>
  );
}
