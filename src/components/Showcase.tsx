'use client';

import { useEffect, useRef, useState } from 'react';
import { Button, Icon } from './ui';
import { showcase, APP_URL } from '@/content/site';
import { ProductScreen } from './ProductScreen';

export function Showcase() {
  const [active, setActive] = useState(0);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const nodes = captionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = nodes.indexOf(entry.target as HTMLDivElement);
        if (index >= 0) setActive(index);
      }
    }, { rootMargin: '-42% 0px -42% 0px', threshold: 0 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className="section product-section">
      <div className="page">
        <div className="showcase-head"><p className="eyebrow">Product, not promises</p><h2>See what Vitals looks like.</h2><p className="lead">Use the health app in your browser today. Explore genuine screens from the Vitals app below.</p></div>
        <div className="showcase-grid">
          <div className="showcase-stage" aria-label="Vitals product screen preview">
            {showcase.map((item, index) => <div key={item.id} className="showcase-layer" data-active={index === active} aria-hidden={index !== active}><ProductScreen src={item.image} alt={item.alt} title={item.title} ratio={item.ratio} /></div>)}
          </div>
          <ol className="showcase-captions">
            {showcase.map((item, index) => <li key={item.id}>
              <div ref={element => { captionRefs.current[index] = element; }} className="showcase-caption" data-active={index === active}>
                <span className="showcase-number">{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.body}</p>
                <div className="showcase-inline"><ProductScreen src={item.image} alt={item.alt} title={item.title} ratio={item.ratio} /></div>
              </div>
            </li>)}
          </ol>
        </div>
        <div className="showcase-cta"><Button href={APP_URL} external size="lg">Open Vitals <Icon name="arrow_outward" size={20} /></Button></div>
      </div>
      <style>{`
        .product-section { background: var(--surface); }
        .showcase-head { max-width: 48rem; margin-bottom: clamp(2rem, 5vw, 3.5rem); }
        .showcase-head h2 { margin-top: .7rem; font-size: var(--step-h2); font-weight: 800; }
        .showcase-head .lead { margin-top: .8rem; }
        .showcase-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
        .showcase-stage { position: sticky; top: 7rem; aspect-ratio: 4 / 3; }
        .showcase-layer { position: absolute; inset: 0; pointer-events: none; transform: translateY(8px); opacity: 0; transition: opacity .32s ease, transform .32s ease; }
        .showcase-layer[data-active=true] { pointer-events: auto; opacity: 1; transform: none; }
        .showcase-layer .product-screen { height: 100%; }
        .showcase-layer .product-screen-image { aspect-ratio: 16 / 10; }
        .showcase-captions { list-style: none; margin: 0; padding: 0; }
        .showcase-caption { padding: clamp(2rem, 8vh, 5rem) 0; opacity: .55; transition: opacity .28s ease; }
        .showcase-caption[data-active=true] { opacity: 1; }
        .showcase-number { color: var(--primary); font: 800 .78rem var(--font-headline); letter-spacing: .1em; }
        .showcase-caption h3 { margin-top: .6rem; font-size: clamp(1.25rem, 2.2vw, 1.7rem); }
        .showcase-caption p { margin-top: .6rem; max-width: 36ch; color: var(--on-surface-variant); }
        .showcase-inline { display: none; margin-top: 1rem; }
        .showcase-cta { margin-top: 2.5rem; text-align: center; }
        @media (max-width: 900px) { .showcase-grid { grid-template-columns: 1fr; gap: 0; } .showcase-stage { display: none; } .showcase-caption { padding: 0 0 2.5rem; opacity: 1; } .showcase-inline { display: block; } }
        @media (prefers-reduced-motion: reduce) { .showcase-stage { position: static; } .showcase-layer { transform: none; transition: none; } .showcase-caption { opacity: 1; transition: none; } }
      `}</style>
    </section>
  );
}
