import { Icon, Reveal } from './ui';
import { contact, CONTACT_EMAIL, APP_URL, nav } from '@/content/site';

/**
 * Contact, then the footer.
 *
 * Contact is an email address, not a ticketing system. There is no support
 * portal to build here and pretending otherwise would add a form that posts
 * nowhere. When NEXT_PUBLIC_CONTACT_EMAIL is unset the section says a contact
 * address is coming rather than rendering a dead mailto.
 *
 * The footer links only to things that exist. There are no Privacy or Terms
 * routes in the application yet, so there are no Privacy or Terms links — a
 * footer link to a 404 is worse on a health product than an absent one. Nor are
 * there social icons, because there are no accounts to point at.
 */
export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" className="section">
        <div className="page">
          <Reveal>
            <div
              style={{
                display: 'grid',
                placeItems: 'center',
                textAlign: 'center',
                padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
                borderRadius: 'var(--radius-2xl)',
                background: 'var(--gradient-primary)',
                color: 'var(--on-primary)',
                boxShadow: 'var(--shadow-xl)',
              }}
            >
              <h2 style={{ fontSize: 'var(--step-h2)', fontWeight: 800, color: 'var(--on-primary)' }}>
                {contact.title}
              </h2>
              <p
                style={{
                  marginTop: '0.875rem',
                  maxWidth: '42ch',
                  color: 'rgba(255,255,255,0.88)',
                  fontSize: 'var(--step-lead)',
                }}
              >
                {contact.body}
              </p>

              {CONTACT_EMAIL ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: '2rem',
                    padding: '0.9rem 1.6rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--surface-container-lowest)',
                    color: 'var(--primary)',
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 700,
                  }}
                >
                  <Icon name="mail" size={20} />
                  {CONTACT_EMAIL}
                </a>
              ) : (
                <p
                  style={{
                    marginTop: '2rem',
                    fontSize: 'var(--step-small)',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  A contact address is being set up. In the meantime, questions can go through the
                  app.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <footer
        style={{
          borderTop: '1px solid var(--outline-variant)',
          background: 'var(--surface-container-low)',
          paddingBlock: '3rem 2.5rem',
        }}
      >
        <div className="page">
          <div className="footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/icon-192x192.png" alt="" width={28} height={28} style={{ borderRadius: 7 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-headline)',
                    fontWeight: 800,
                    fontSize: '1.125rem',
                  }}
                >
                  Vitals
                </span>
              </div>
              <p
                style={{
                  marginTop: '0.875rem',
                  fontSize: 'var(--step-small)',
                  color: 'var(--on-surface-variant)',
                  maxWidth: '30ch',
                }}
              >
                A place to keep your health information, and keep track of it.
              </p>
            </div>

            <nav aria-label="Footer">
              <h2 className="foot-h">Explore</h2>
              <ul className="foot-list">
                {nav.map(item => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
                <li>
                  <a href="#waitlist">Waitlist</a>
                </li>
              </ul>
            </nav>

            <div>
              <h2 className="foot-h">Get started</h2>
              <ul className="foot-list">
                <li>
                  <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                    Open Vitals
                  </a>
                </li>
                {CONTACT_EMAIL ? (
                  <li>
                    <a href={`mailto:${CONTACT_EMAIL}`}>Contact us</a>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--outline-variant)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem 1.5rem',
              justifyContent: 'space-between',
              fontSize: '0.8125rem',
              color: 'var(--outline)',
            }}
          >
            <p>© {year} Vitals</p>
            <p style={{ maxWidth: '52ch' }}>
              Vitals does not provide medical advice, diagnosis or treatment.
            </p>
          </div>
        </div>

        <style>{`
          .footer-grid {
            display: grid;
            grid-template-columns: 1.6fr 1fr 1fr;
            gap: clamp(2rem, 5vw, 4rem);
          }
          .foot-h {
            font-family: var(--font-headline);
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--outline);
            margin-bottom: 0.875rem;
          }
          .foot-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.625rem; }
          .foot-list a {
            font-size: 0.9375rem;
            color: var(--on-surface-variant);
          }
          .foot-list a:hover { color: var(--primary); }
          @media (max-width: 720px) {
            .footer-grid { grid-template-columns: 1fr 1fr; }
            .footer-grid > :first-child { grid-column: 1 / -1; }
          }
        `}</style>
      </footer>
    </>
  );
}
