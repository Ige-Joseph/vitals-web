'use client';
import { useEffect, useState } from 'react';
import { nav, APP_URL } from '@/content/site';
import { Button, Icon } from './ui';
import { Brand } from './Brand';

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    const wide = window.matchMedia('(min-width: 901px)');
    const resized = () => { if (wide.matches) setOpen(false); };
    document.addEventListener('keydown', close);
    wide.addEventListener('change', resized);
    return () => { document.removeEventListener('keydown', close); wide.removeEventListener('change', resized); };
  }, [open]);
  return <header className="landing-header"><div className="page landing-header__inner">
    <a href="#top" aria-label="Vitals home" onClick={() => setOpen(false)}><Brand /></a>
    <nav id="vitals-site-menu" className="landing-nav" data-open={open} aria-label="Main navigation">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}</nav>
    <div className="landing-header__actions"><Button href={APP_URL} external>Open Vitals <Icon name="arrow_outward" size={17} /></Button><button className="landing-menu" type="button" onClick={() => setOpen(value => !value)} aria-controls="vitals-site-menu" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'}><Icon name={open ? 'close' : 'menu'} size={23} /></button></div>
  </div></header>;
}
