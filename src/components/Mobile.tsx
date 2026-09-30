import Image from 'next/image';
import { APP_URL, mobile, WAITLIST_ENDPOINT } from '@/content/site';
import { Button, Icon, Reveal } from './ui';

export function Mobile() {
  return (
    <section className="section mobile-section">
      <div className="page">
        <Reveal>
          <div className="mobile-band">
            <div>
              <p className="eyebrow">Vitals today & next</p>
              <h2>{mobile.title}</h2>
              <p className="lead">{mobile.body}</p>
              <div className="mobile-actions">
                <Button href={APP_URL} external size="lg">Open Vitals <Icon name="arrow_outward" size={20} /></Button>
                {WAITLIST_ENDPOINT ? <a className="mobile-waitlist" href="#waitlist">Get the Android app update</a> : null}
              </div>
            </div>
            <aside className="mobile-note"><div className="mobile-photo"><Image src="/images/story/phone-stethoscope.webp" alt="A smartphone beside a stethoscope, representing browser-based health tools." fill sizes="(max-width: 800px) 100vw, 26vw" style={{ objectFit: 'cover', objectPosition: 'center' }} /></div><span className="mobile-note-icon"><Icon name="devices" size={23} /></span><p>{mobile.note}</p><p className="pwa-note">Vitals is a PWA: add it to your home screen from your browser if your device supports it.</p></aside>
          </div>
        </Reveal>
      </div>
      <style>{`
        .mobile-section { background: var(--surface-container-low); }
        .mobile-band { display: grid; grid-template-columns: 1.35fr .65fr; align-items: center; gap: clamp(2rem, 5vw, 4rem); padding: clamp(1.5rem, 5vw, 3.5rem); border: 1px solid var(--outline-variant); border-radius: var(--radius-2xl); background: var(--surface-container-lowest); box-shadow: var(--shadow-md); }
        .mobile-band h2 { margin-top: .7rem; font-size: var(--step-h2); font-weight: 800; max-width: 16ch; }
        .mobile-band .lead { margin-top: .9rem; max-width: 48ch; }
        .mobile-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem; margin-top: 1.5rem; }
        .mobile-waitlist { color: var(--primary); font: 700 .9rem var(--font-headline); text-decoration: underline; text-underline-offset: .2em; }
        .mobile-note { padding: 1rem; border-radius: var(--radius-xl); background: var(--surface-container-low); }
        .mobile-photo { position: relative; overflow: hidden; aspect-ratio: 1.65 / 1; margin-bottom: 1rem; border-radius: var(--radius-lg); }
        .mobile-note-icon { display: grid; place-items: center; width: 2.75rem; height: 2.75rem; margin-bottom: .85rem; border-radius: var(--radius-lg); color: var(--primary); background: var(--primary-fixed); }
        .mobile-note p { color: var(--on-surface-variant); font-size: .87rem; }
        .mobile-note .pwa-note { margin-top: .75rem; color: var(--outline); font-size: .78rem; }
        @media (max-width: 800px) { .mobile-band { grid-template-columns: 1fr; } }
        @media (max-width: 560px) { .mobile-actions { display: grid; } }
      `}</style>
    </section>
  );
}
