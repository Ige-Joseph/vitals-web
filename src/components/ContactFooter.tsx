import { APP_URL, CONTACT_EMAIL, nav } from '@/content/site';
import { Button, Icon } from './ui';
import { Brand } from './Brand';

export function ContactFooter() {
  return <><section className="section landing-final" id="contact"><div className="page"><div className="landing-final__panel"><div><p className="landing-label">Start with what matters to you</p><h2>A little more clarity.<br />One day at a time.</h2><p>Open Vitals in your browser and put your health information in one place.</p></div><Button href={APP_URL} external size="lg">Open Vitals <Icon name="arrow_forward" size={19} /></Button></div></div></section><footer className="landing-footer"><div className="page"><div className="landing-footer__main"><div><a href="#top" aria-label="Vitals home"><Brand /></a><p>Everyday care, kept together.</p></div><nav aria-label="Footer navigation">{nav.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}{CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a> : null}</nav></div><div className="landing-footer__fine"><span>© {new Date().getFullYear()} Vitals</span><span>Information and organisation. Vitals does not diagnose or treat.</span></div></div></footer></>;
}
