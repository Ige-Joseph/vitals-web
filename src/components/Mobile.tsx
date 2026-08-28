import { Icon, Reveal } from './ui';
import { mobile, APP_STORE_URL, PLAY_STORE_URL, APP_URL } from '@/content/site';

/**
 * The mobile app, which does not exist yet.
 *
 * The store buttons are present so the section does not need redesigning the
 * week the app ships — but while the URLs are unset they are rendered as
 * disabled `span`s carrying "Coming soon", not as links to a fake listing.
 * Nothing here is clickable that would take someone to a page that is not
 * there, and nothing implies the app can be downloaded today.
 *
 * Setting NEXT_PUBLIC_APP_STORE_URL / NEXT_PUBLIC_PLAY_STORE_URL turns them
 * into real links. That is the entire launch change.
 */

function StoreButton({ store, href }: { store: 'apple' | 'google'; href: string }) {
  const label = store === 'apple' ? 'App Store' : 'Google Play';
  const live = Boolean(href);

  const inner = (
    <>
      <Icon name={store === 'apple' ? 'phone_iphone' : 'android'} size={22} />
      <span style={{ display: 'grid', textAlign: 'left', lineHeight: 1.15 }}>
        <span style={{ fontSize: '0.6875rem', opacity: 0.75 }}>
          {live ? 'Download on the' : 'Coming soon to'}
        </span>
        <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '0.9375rem' }}>
          {label}
        </span>
      </span>
    </>
  );

  const style: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.625rem',
    padding: '0.7rem 1.15rem',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid var(--outline-variant)',
    background: live ? 'var(--on-surface)' : 'var(--surface-container)',
    color: live ? 'var(--surface-container-lowest)' : 'var(--on-surface-variant)',
    cursor: live ? 'pointer' : 'default',
    opacity: live ? 1 : 0.75,
  };

  if (live) {
    return (
      <a href={href} style={style} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  // Not a link, and announced as unavailable rather than merely looking greyed.
  return (
    <span style={style} aria-disabled="true" title={`${label} — not available yet`}>
      {inner}
    </span>
  );
}

export function Mobile() {
  return (
    <section className="section">
      <div className="page">
        <Reveal>
          <div className="mobile-band">
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>
                On the way
              </p>
              <h2 style={{ fontSize: 'var(--step-h2)', fontWeight: 800, maxWidth: '16ch' }}>
                {mobile.title}
              </h2>
              <p className="lead" style={{ marginTop: '1rem', maxWidth: '44ch' }}>
                {mobile.body}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
                <StoreButton store="google" href={PLAY_STORE_URL} />
                <StoreButton store="apple" href={APP_STORE_URL} />
              </div>

              <p
                style={{
                  marginTop: '1.25rem',
                  fontSize: 'var(--step-small)',
                  color: 'var(--outline)',
                }}
              >
                {mobile.note}{' '}
                <a href="#waitlist" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  Join the waitlist
                </a>
                .
              </p>
            </div>

            <div className="mobile-aside">
              <p style={{ fontSize: 'var(--step-small)', color: 'var(--on-surface-variant)' }}>
                In the meantime, Vitals works in your phone&rsquo;s browser.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-headline)',
                  fontWeight: 700,
                  color: 'var(--primary)',
                }}
              >
                Open Vitals
                <Icon name="arrow_outward" size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .mobile-band {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          padding: clamp(2rem, 5vw, 3.5rem);
          border-radius: var(--radius-2xl);
          background: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          box-shadow: var(--shadow-md);
        }
        .mobile-aside {
          padding: 1.25rem;
          border-radius: var(--radius-xl);
          background: var(--surface-container-low);
        }
        @media (max-width: 860px) {
          .mobile-band { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
}
