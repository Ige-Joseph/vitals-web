import { APP_URL, CONTACT_EMAIL, contact, nav, WAITLIST_ENDPOINT } from '@/content/site';
import { Button, Icon, Reveal } from './ui';

export function ContactFooter() {
  const year = new Date().getFullYear();
  return <>
    <section id="contact" className="section final-cta">
      <div className="page">
        <Reveal><div className="final-panel">
          <div><p className="eyebrow">Start with Vitals</p><h2>{contact.title}</h2><p className="final-copy">{contact.body}</p></div>
          <div className="final-actions"><Button href={APP_URL} external size="lg">Open Vitals <Icon name="arrow_outward" size={20} /></Button>{CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`} className="final-contact">Questions? Contact us</a> : null}</div>
        </div></Reveal>
      </div>
    </section>
    <footer className="site-footer">
      <div className="page">
        <div className="footer-grid">
          <div><a className="footer-brand" href="#top" aria-label="Vitals home"><img src="/icons/icon-192x192.png" alt="" width="32" height="32" /><span>Vitals</span></a><p className="footer-desc">A health app for keeping your health information together.</p></div>
          <nav aria-label="Footer navigation"><h2>Explore</h2><ul>{nav.map(item => <li key={item.href}><a href={item.href}>{item.label}</a></li>)}{WAITLIST_ENDPOINT ? <li><a href="#waitlist">Android app updates</a></li> : null}</ul></nav>
          <div><h2>Get started</h2><ul><li><a href={APP_URL} target="_blank" rel="noopener noreferrer">Open Vitals</a></li>{CONTACT_EMAIL ? <li><a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a></li> : null}</ul></div>
        </div>
        <div className="footer-bottom"><p>&copy; {year} Vitals</p><p>Vitals does not provide diagnosis, treatment or medical advice.</p></div>
      </div>
      <style>{`
        .final-cta { padding-block: clamp(3.5rem, 8vw, 6rem); }
        .final-panel { display: grid; grid-template-columns: 1.2fr .8fr; gap: 2rem; align-items: center; padding: clamp(1.5rem, 5vw, 3.5rem); border-radius: var(--radius-2xl); background: var(--primary); color: var(--on-primary); box-shadow: var(--shadow-xl); }
        .final-panel .eyebrow { color: var(--primary-fixed); }
        .final-panel h2 { margin-top: .7rem; color: var(--on-primary); font-size: var(--step-h2); font-weight: 800; max-width: 18ch; }
        .final-copy { margin-top: .75rem; max-width: 50ch; color: rgba(255,255,255,.88); font-size: var(--step-lead); }
        .final-actions { display: grid; justify-items: start; gap: .85rem; }
        .final-actions a:first-child { background: var(--surface-container-lowest) !important; color: var(--primary) !important; box-shadow: none !important; }
        .final-contact { color: var(--on-primary); font-size: .86rem; text-decoration: underline; text-underline-offset: .2em; }
        .site-footer { padding-block: 3rem 2rem; border-top: 1px solid var(--outline-variant); background: var(--surface-container-low); }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: clamp(1.5rem, 4vw, 3.5rem); }
        .footer-brand { display: inline-flex; align-items: center; gap: .55rem; font: 800 1.15rem var(--font-headline); }
        .footer-brand img { border-radius: 8px; }
        .footer-desc { max-width: 30ch; margin-top: .7rem; color: var(--on-surface-variant); font-size: .88rem; }
        .footer-grid h2 { margin-bottom: .8rem; color: var(--outline); font: 700 .73rem var(--font-headline); letter-spacing: .08em; text-transform: uppercase; }
        .footer-grid ul { display: grid; gap: .55rem; margin: 0; padding: 0; list-style: none; }
        .footer-grid li a { color: var(--on-surface-variant); font-size: .9rem; }
        .footer-grid li a:hover { color: var(--primary); }
        .footer-bottom { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .75rem 1.5rem; margin-top: 2.25rem; padding-top: 1.25rem; border-top: 1px solid var(--outline-variant); color: var(--outline); font-size: .78rem; }
        @media (max-width: 700px) { .final-panel { grid-template-columns: 1fr; } .footer-grid { grid-template-columns: 1fr 1fr; } .footer-grid :first-child { grid-column: 1 / -1; } }
      `}</style>
    </footer>
  </>;
}
