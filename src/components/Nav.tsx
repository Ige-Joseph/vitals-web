'use client';

import { useEffect, useState } from 'react';
import { Button, Icon } from './ui';
import { nav, APP_URL } from '@/content/site';

/**
 * The header.
 *
 * Two rules shape it. The primary action stays reachable at every width — on a
 * phone it sits in the bar itself rather than inside the menu, because it is
 * the one thing a visitor is most likely to want and burying it behind a
 * hamburger would be a strange choice for the button the whole page is for.
 *
 * And nothing from the authenticated application appears here. This navigation
 * knows about marketing sections and one outbound link, and that is all.
 */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // A menu that stays open while the page scrolls underneath it is disorienting,
  // and Escape is where anyone reaches to close an overlay.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(247,249,255,0.86)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(180%) blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--outline-variant)' : 'transparent'}`,
        transition: 'background 0.25s ease, border-color 0.25s ease',
      }}
    >
      <div
        className="page"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          height: '4.5rem',
        }}
      >
        <a
          href="#top"
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}
          aria-label="Vitals — home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/icon-192x192.png" alt="" width={32} height={32} style={{ borderRadius: 8 }} />
          <span
            style={{
              fontFamily: 'var(--font-headline)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
            }}
          >
            Vitals
          </span>
        </a>

        {/* Desktop links. Hidden below the breakpoint by the media query at the
            bottom of this file. */}
        <nav className="nav-desktop" aria-label="Main">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {nav.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: 'var(--on-surface-variant)',
                    paddingBlock: '0.5rem',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Button href={APP_URL} external>
            Open Vitals
          </Button>

          <button
            className="nav-toggle"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--outline-variant)',
              background: 'var(--surface-container-lowest)',
              color: 'var(--on-surface)',
              cursor: 'pointer',
            }}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu. Rendered only when open so its links are not in the tab
          order while it is closed. */}
      {open ? (
        <div
          id="mobile-menu"
          className="nav-mobile"
          style={{
            borderTop: '1px solid var(--outline-variant)',
            background: 'var(--surface-container-lowest)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <nav className="page" aria-label="Main" style={{ paddingBlock: '1rem 1.5rem' }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '0.25rem' }}>
              {[...nav, { label: 'Join the waitlist', href: '#waitlist' }].map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.875rem 0.25rem',
                      fontFamily: 'var(--font-headline)',
                      fontWeight: 600,
                      fontSize: '1.0625rem',
                      borderBottom: '1px solid var(--surface-container)',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none; }
          .nav-toggle { display: inline-flex !important; }
        }
        @media (min-width: 861px) {
          .nav-mobile { display: none; }
        }
      `}</style>
    </header>
  );
}
