'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button, Icon } from './ui';
import { showcase, APP_URL } from '@/content/site';

/**
 * The application, explained by scrolling.
 *
 * The frame pins while the captions move past it, and the screen inside changes
 * as each caption takes over. It is the pattern product pages use to walk
 * somebody through an interface, and it earns its place here because this
 * section has a sequence to tell rather than three unrelated pictures.
 *
 * ── What this deliberately is not ────────────────────────────────────────
 *
 * There is no WebGL and no animation library. A Three.js scene would add
 * several times the weight of this entire site and would cost the most on
 * exactly the devices this product is for — mid-range Android phones on patchy
 * connections. The depth here is `perspective` and a few degrees of `rotateY`,
 * which is CSS, composited on the GPU, and free.
 *
 * The only JavaScript is one IntersectionObserver deciding which caption is
 * active. Nothing is measured on scroll, nothing runs per frame.
 *
 * ── Where it turns itself off ────────────────────────────────────────────
 *
 * Pinning is desktop-only. On a phone there is not enough height for a pinned
 * frame and a caption to coexist, and taking over the scroll on a small screen
 * is how these sections become unusable. Below the breakpoint it falls back to
 * frames stacked with their captions, which is what it always was.
 *
 * Under prefers-reduced-motion the tilt and the transitions go, the frame stops
 * pinning, and every caption is shown at full strength — the content is never
 * behind the effect.
 */

/** Browser chrome around a screenshot, so it reads as an application. */
function AppFrame({ src, alt, active }: { src: string; alt: string; active: boolean }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className="frame" data-active={active}>
      <div aria-hidden="true" className="frame-chrome">
        {['#ff5f57', '#febc2e', '#28c840'].map(c => (
          <span key={c} style={{ width: 9, height: 9, borderRadius: 99, background: c, opacity: 0.75 }} />
        ))}
        <span className="frame-host">vitals</span>
      </div>

      <div className="frame-body">
        {showImage ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            onError={() => setFailed(true)}
          />
        ) : (
          // No screenshot yet: the application's own surface treatment, in flat
          // tints. It reads as a product waiting to load rather than a note to
          // whoever is building the site.
          <div role="img" aria-label={alt} className="frame-skeleton">
            <div aria-hidden="true" className="sk-rail">
              <span className="sk-pill sk-brand" />
              {[0, 1, 2, 3].map(i => (
                <span key={i} className="sk-pill" />
              ))}
            </div>
            <div aria-hidden="true" className="sk-main">
              <span className="sk-title" />
              <div className="sk-cards">
                <span className="sk-card sk-card-a" />
                <span className="sk-card sk-card-b" />
              </div>
              <span className="sk-row" />
              <span className="sk-row" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Showcase() {
  const [active, setActive] = useState(0);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = captionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;

    // A band across the middle of the viewport: whichever caption sits in it is
    // the one being read, and therefore the one the frame should show.
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = nodes.indexOf(entry.target as HTMLDivElement);
          if (i >= 0) setActive(i);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className="section tint-primary">
      <div className="page">
        <div className="sc-head">
          <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>
            The product
          </p>
          <h2 style={{ fontSize: 'var(--step-h2)', fontWeight: 800 }}>This is Vitals, today.</h2>
          <p className="lead" style={{ marginTop: '1rem' }}>
            Not a concept. You can open it in your browser right now.
          </p>
        </div>

        <div className="sc">
          {/* Pinned on desktop; the frame that changes as you read. */}
          <div className="sc-stage">
            <div className="sc-stage-inner">
              {showcase.map((item, i) => (
                <div key={item.id} className="sc-layer" data-active={i === active}>
                  <AppFrame src={item.image} alt={item.alt} active={i === active} />
                </div>
              ))}
            </div>
          </div>

          {/* The captions that scroll past it. */}
          <ol className="sc-captions">
            {showcase.map((item, i) => (
              <li key={item.id}>
                <div
                  ref={el => {
                    captionRefs.current[i] = el;
                  }}
                  className="sc-caption"
                  data-active={i === active}
                >
                  <span className="sc-step" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>

                  {/* On phones the frame belongs with its caption, since there
                      is no pinned stage to put it in. */}
                  <div className="sc-inline-frame">
                    <AppFrame src={item.image} alt={item.alt} active />
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div style={{ marginTop: 'clamp(2.5rem, 5vw, 3.5rem)', textAlign: 'center' }}>
          <Button href={APP_URL} external size="lg">
            Open Vitals
            <Icon name="arrow_outward" size={20} />
          </Button>
        </div>
      </div>

      <style>{`
        .sc-head { max-width: 40rem; margin-bottom: clamp(2.5rem, 5vw, 4rem); }

        .sc {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }

        /* The stage sticks while the captions column, which is taller, scrolls. */
        .sc-stage {
          position: sticky;
          top: 7rem;
          /* perspective is what makes the few degrees of rotation read as depth
             rather than as a skew. */
          perspective: 1400px;
        }
        .sc-stage-inner { position: relative; aspect-ratio: 16 / 10.9; }

        .sc-layer {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateY(14px) scale(0.985);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .sc-layer[data-active='true'] { opacity: 1; transform: none; pointer-events: auto; }

        .frame {
          height: 100%;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          box-shadow: var(--shadow-xl);
          display: grid;
          grid-template-rows: auto 1fr;
          /* Settles to flat when it is the one being read. */
          transform: rotateY(-7deg) rotateX(2deg);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: left center;
        }
        .frame[data-active='true'] { transform: rotateY(0deg) rotateX(0deg); }

        .frame-chrome {
          display: flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.6rem 0.85rem;
          background: var(--surface-container);
          border-bottom: 1px solid var(--outline-variant);
        }
        .frame-host { margin-left: 0.5rem; font-size: 0.6875rem; color: var(--outline); }
        .frame-body { position: relative; background: var(--surface); }

        /* Placeholder interior */
        .frame-skeleton {
          position: absolute;
          inset: 0;
          padding: 1.15rem;
          display: grid;
          grid-template-columns: 84px 1fr;
          gap: 0.85rem;
          background: linear-gradient(160deg, var(--surface-container-lowest), var(--surface-container-low));
        }
        .sk-rail {
          border-radius: var(--radius-md);
          background: var(--surface-container);
          display: grid;
          align-content: start;
          gap: 0.4rem;
          padding: 0.6rem 0.5rem;
        }
        .sk-pill { height: 7px; border-radius: 99px; background: var(--outline-variant); opacity: 0.55; }
        .sk-brand { height: 9px; background: var(--primary-fixed-dim); opacity: 1; }
        .sk-main { display: grid; gap: 0.6rem; align-content: start; }
        .sk-title { height: 13px; width: 46%; border-radius: 99px; background: var(--primary-fixed-dim); }
        .sk-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; }
        .sk-card { height: 54px; border-radius: var(--radius-md); opacity: 0.85; }
        .sk-card-a { background: var(--primary-fixed); }
        .sk-card-b { background: var(--tertiary-fixed); }
        .sk-row { height: 40px; border-radius: var(--radius-md); background: var(--surface-container); }

        /* Captions */
        .sc-captions { list-style: none; margin: 0; padding: 0; }
        .sc-caption {
          padding: clamp(3rem, 12vh, 7rem) 0;
          opacity: 0.42;
          transition: opacity 0.4s ease;
        }
        .sc-caption[data-active='true'] { opacity: 1; }
        .sc-step {
          font-family: var(--font-headline);
          font-weight: 800;
          font-size: 0.8125rem;
          letter-spacing: 0.1em;
          color: var(--primary);
        }
        .sc-caption h3 {
          margin-top: 0.75rem;
          font-size: clamp(1.35rem, 2.4vw, 1.9rem);
          font-weight: 800;
        }
        .sc-caption p {
          margin-top: 0.75rem;
          color: var(--on-surface-variant);
          font-size: var(--step-lead);
          line-height: 1.55;
          max-width: 34ch;
        }
        .sc-inline-frame { display: none; margin-top: 1.5rem; aspect-ratio: 16 / 10.9; }

        /* ── Phones and tablets: no pinning ─────────────────────────────── */
        @media (max-width: 900px) {
          .sc { grid-template-columns: 1fr; gap: 0; }
          .sc-stage { display: none; }
          .sc-caption { padding: 0 0 3rem; opacity: 1; }
          .sc-inline-frame { display: block; }
          .sc-inline-frame .frame { transform: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sc-stage { position: static; }
          .sc-layer { position: relative; opacity: 1; transform: none; transition: none; }
          .sc-layer + .sc-layer { margin-top: 1.5rem; }
          .sc-stage-inner { aspect-ratio: auto; }
          .frame { transform: none; transition: none; }
          .sc-caption { opacity: 1; transition: none; }
        }
      `}</style>
    </section>
  );
}
