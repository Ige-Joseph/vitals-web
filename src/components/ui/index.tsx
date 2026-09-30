'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * The small set of primitives the marketing site needs.
 *
 * Deliberately not a copy of the application's UI kit. That kit is built for
 * dense, interactive screens; this is built for a page you read once. What the
 * two share is the token layer, which is where the visual identity actually
 * lives — the same blues, radii, shadows and typefaces, at a different scale.
 */

/* ── Button ───────────────────────────────────────────────────────────── */

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'quiet';
  size?: 'md' | 'lg';
  external?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  full?: boolean;
};

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external,
  type = 'button',
  disabled,
  onClick,
  full,
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'var(--font-headline)',
    fontWeight: 700,
    fontSize: size === 'lg' ? '1.0625rem' : '0.9375rem',
    padding: size === 'lg' ? '1rem 1.75rem' : '0.75rem 1.375rem',
    borderRadius: 'var(--radius-full)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textAlign: 'center',
    width: full ? '100%' : undefined,
    opacity: disabled ? 0.55 : 1,
    // Kept short: a CTA that takes half a second to acknowledge a press feels
    // broken rather than polished.
    transition: 'transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease',
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      boxShadow: '0 6px 20px rgba(0, 91, 191, 0.24)',
    },
    secondary: {
      background: 'var(--surface-container-lowest)',
      color: 'var(--on-surface)',
      borderColor: 'var(--outline-variant)',
      boxShadow: 'var(--shadow-sm)',
    },
    quiet: {
      background: 'transparent',
      color: 'var(--on-surface-variant)',
    },
  };

  const style = { ...base, ...variants[variant] };
  const hover = (raise: boolean) => (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    e.currentTarget.style.transform = raise ? 'translateY(-2px)' : 'none';
  };

  if (href && !disabled) {
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={hover(true)}
        onMouseLeave={hover(false)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={hover(true)}
      onMouseLeave={hover(false)}
    >
      {children}
    </button>
  );
}

/* ── Icon ─────────────────────────────────────────────────────────────── */

/** Material Symbols, the same icon set the application uses. */
export function Icon({ name, size = 24, color }: { name: string; size?: number; color?: string }) {
  return (
    <span
      className="material-symbols-rounded"
      aria-hidden="true"
      style={{ fontSize: size, color, lineHeight: 1, userSelect: 'none' }}
    >
      {name}
    </span>
  );
}

/* ── Reveal ───────────────────────────────────────────────────────────── */

/**
 * Fade and rise as content enters the viewport.
 *
 * An IntersectionObserver toggling one attribute, with the animation itself in
 * CSS. That is the whole implementation — no animation library, nothing running
 * per frame, and it stops observing once an element has appeared so a long page
 * does not accumulate work.
 *
 * JavaScript opts into the reveal only after an observer is available. Without
 * JavaScript the default CSS leaves content visible.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'article';
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support, or the user prefers less motion: show it now.
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }

    // Enhancement is opt-in. If JavaScript never runs, the CSS default remains
    // visible instead of leaving the server-rendered content transparent.
    el.dataset.revealEnhanced = 'true';

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      delete el.dataset.revealEnhanced;
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className="reveal"
      data-shown={shown}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── Card ─────────────────────────────────────────────────────────────── */

export function Card({
  children,
  padding = '1.75rem',
  tone = 'raised',
}: {
  children: ReactNode;
  padding?: string;
  tone?: 'raised' | 'flat';
}) {
  return (
    <div
      style={{
        background:
          tone === 'raised' ? 'var(--surface-container-lowest)' : 'var(--surface-container-low)',
        borderRadius: 'var(--radius-2xl)',
        padding,
        boxShadow: tone === 'raised' ? 'var(--shadow-md)' : 'none',
        border: tone === 'raised' ? '1px solid rgba(24,28,32,0.04)' : 'none',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}

/* ── Section heading ──────────────────────────────────────────────────── */

export function SectionHead({
  eyebrow,
  title,
  body,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div
      style={{
        maxWidth: align === 'center' ? '46rem' : '38rem',
        marginInline: align === 'center' ? 'auto' : undefined,
        textAlign: align,
        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
      }}
    >
      {eyebrow ? <p className="eyebrow" style={{ marginBottom: '0.875rem' }}>{eyebrow}</p> : null}
      <h2 style={{ fontSize: 'var(--step-h2)', fontWeight: 800 }}>{title}</h2>
      {body ? <p className="lead" style={{ marginTop: '1rem' }}>{body}</p> : null}
    </div>
  );
}
