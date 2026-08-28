'use client';

import { useState } from 'react';
import { Button, Icon } from './ui';
import { waitlist, WAITLIST_ENDPOINT } from '@/content/site';

/**
 * The waitlist.
 *
 * No waitlist endpoint exists in the Vitals backend, and inventing one would
 * have meant adding a route to a product this site is only supposed to
 * advertise. So the form posts to whatever NEXT_PUBLIC_WAITLIST_ENDPOINT names.
 *
 * With nothing configured it does not pretend. The button is disabled and the
 * form says sign-ups are not open yet, which is true — a form that swallows an
 * address and shows a tick is the worst version of this, because the person
 * believes they are on a list that does not exist.
 */
export function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [error, setError] = useState('');

  const configured = Boolean(WAITLIST_ENDPOINT);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!configured) return;

    setState('sending');
    setError('');

    try {
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, reason }),
      });

      if (!res.ok) throw new Error('Request failed');
      setState('done');
    } catch {
      setState('error');
      setError('That did not go through. Please try again in a moment.');
    }
  };

  return (
    <section id="waitlist" className="section" style={{ background: 'var(--surface-container-low)' }}>
      <div className="page">
        <div className="waitlist-grid">
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>
              Waitlist
            </p>
            <h2 style={{ fontSize: 'var(--step-h2)', fontWeight: 800, maxWidth: '14ch' }}>
              {waitlist.title}
            </h2>
            <p className="lead" style={{ marginTop: '1rem', maxWidth: '40ch' }}>
              {waitlist.body}
            </p>
          </div>

          <div
            style={{
              background: 'var(--surface-container-lowest)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--outline-variant)',
            }}
          >
            {state === 'done' ? (
              // aria-live so the change is announced, not just seen.
              <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '1rem 0' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 56,
                    height: 56,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--primary-fixed)',
                    color: 'var(--on-primary-fixed-variant)',
                  }}
                >
                  <Icon name="check" size={28} />
                </span>
                <h3 style={{ fontSize: 'var(--step-h3)', fontWeight: 700, marginTop: '1rem' }}>
                  {waitlist.success.title}
                </h3>
                <p style={{ marginTop: '0.5rem', color: 'var(--on-surface-variant)' }}>
                  {waitlist.success.body}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'grid', gap: '1rem' }} noValidate>
                <Field id="wl-name" label="Name">
                  <input
                    id="wl-name"
                    name="name"
                    className="fld"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    autoComplete="name"
                    required
                  />
                </Field>

                <Field id="wl-email" label="Email">
                  <input
                    id="wl-email"
                    name="email"
                    type="email"
                    className="fld"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                  />
                </Field>

                <Field id="wl-reason" label="What would you use Vitals for?" optional>
                  <textarea
                    id="wl-reason"
                    name="reason"
                    className="fld"
                    rows={3}
                    value={reason}
                    onChange={e => setReason(e.target.value)}
                    style={{ resize: 'vertical' }}
                  />
                </Field>

                {error ? (
                  <p role="alert" style={{ fontSize: 'var(--step-small)', color: 'var(--error)' }}>
                    {error}
                  </p>
                ) : null}

                <Button type="submit" full size="lg" disabled={!configured || state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : 'Join the waitlist'}
                </Button>

                <p style={{ fontSize: '0.78rem', color: 'var(--outline)', textAlign: 'center' }}>
                  {configured
                    ? 'One email when the app is ready. Nothing else.'
                    : 'Sign-ups are not open yet — check back shortly.'}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .waitlist-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
        }
        .fld {
          width: 100%;
          padding: 0.8rem 0.95rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-low);
          color: var(--on-surface);
          font-family: var(--font-body);
          font-size: 1rem;
        }
        .fld:focus-visible {
          outline: 3px solid var(--primary);
          outline-offset: 1px;
          border-color: var(--primary);
        }
        @media (max-width: 860px) {
          .waitlist-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function Field({
  id,
  label,
  optional,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'grid', gap: '0.375rem' }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: 'var(--font-headline)',
          fontWeight: 600,
          fontSize: 'var(--step-small)',
          color: 'var(--on-surface-variant)',
        }}
      >
        {label}
        {optional ? <span style={{ color: 'var(--outline)', fontWeight: 400 }}> (optional)</span> : null}
      </label>
      {children}
    </div>
  );
}
