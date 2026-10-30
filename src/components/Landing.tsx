import Image from 'next/image';
import { APP_URL } from '@/content/site';
import { Button, Icon } from './ui';

export function LandingHero() {
  return <section className="landing-hero" id="top"><div className="page landing-hero__grid">
    <div className="landing-hero__copy"><p className="landing-label">A little more in order</p><h1>Everyday care,<br /><span>kept together.</span></h1><p className="landing-hero__lead">Your medicines, appointments, and the people you care for. Vitals brings your health information into one clear place.</p><div className="landing-actions"><Button href={APP_URL} external size="lg">Open Vitals <Icon name="arrow_forward" size={19} /></Button><a className="landing-text-link" href="#product">Take a look <Icon name="expand_more" size={18} /></a></div><p className="landing-availability"><Icon name="devices" size={17} />Use the web app today. Android is in development.</p></div>
    <div className="landing-preview"><div className="landing-preview__bar"><img src="/brand/vitals-symbol.svg" alt="" width={22} height={22} /><span>Vitals / Today</span><span className="landing-demo">Demo preview</span></div><picture><source media="(max-width: 640px)" srcSet="/images/screens/dashboard-mobile.webp" /><img className="landing-preview__image" src="/images/screens/dashboard.webp" alt="Vitals Today screen with fictional medicines and an appointment to show how the app works." width={900} height={700} /></picture><div className="landing-preview__foot"><Icon name="check_circle" size={17} /><span>A clearer view of your day.</span></div></div>
  </div></section>;
}

const benefits = [
  { icon: 'pill', title: 'Keep your routine in view', body: 'Record medicines, choose reminder times, and note doses as taken, skipped, or missed.' },
  { icon: 'event', title: 'Make room for the next visit', body: 'Keep appointments together and choose when you want a reminder ahead of them.' },
  { icon: 'history', title: 'Give your information a home', body: 'Find your recorded mood and symptom history, and use informational tools for symptoms and medicine images.' },
];

export function ProductOverview() {
  return <section id="product" className="section landing-product"><div className="page"><div id="about" className="landing-section-head"><p className="landing-label">Meet Vitals</p><h2>Less to keep in your head.<br />More in one place.</h2><p>A place for what you record, what is coming up, and the care you help organise.</p></div><div className="landing-benefits">{benefits.map(item => <article key={item.title}><span className="landing-feature-icon"><Icon name={item.icon} size={25} /></span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><div className="landing-premium-note"><Icon name="description" size={23} /><div><h3>A record you can bring to your next visit.</h3><p>Premium adds downloadable health summaries and more room for managed records and connections. Your existing health records stay accessible.</p></div><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="landing-text-link">Explore in Vitals <Icon name="arrow_forward" size={18} /></a></div></div></section>;
}

export function CareJourneys() {
  return <section className="section landing-journeys"><div className="page"><div className="landing-section-head"><p className="landing-label">Care takes different shapes</p><h2>For your own day.<br />And the people in it.</h2><p>The same familiar Vitals experience, wherever you are in your care journey.</p></div><div className="landing-journey-grid">
    <article className="landing-journey" id="mother-baby"><div className="landing-journey__photo"><Image src="/images/story/pregnancy-journey.webp" fill sizes="(max-width: 760px) 90vw, 45vw" alt="A pregnant woman resting a hand on her belly." style={{ objectFit: 'cover', objectPosition: 'center 44%' }} /></div><div className="landing-journey__copy"><span className="landing-label">Mother &amp; Baby</span><h3>Each stage, kept close.</h3><p>Follow a pregnancy timeline, record mood, and continue into baby care with vaccination milestones and reminders.</p><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="landing-text-link">Explore your journey <Icon name="arrow_forward" size={18} /></a></div></article>
    <article className="landing-journey" id="family-care"><div className="landing-journey__photo"><Image src="/images/story/family-at-home.webp" fill sizes="(max-width: 760px) 90vw, 45vw" alt="A family spending time together at home." style={{ objectFit: 'cover' }} /></div><div className="landing-journey__copy"><span className="landing-label">Family &amp; connected care</span><h3>Care that stays connected.</h3><p>Manage a record for someone without their own account, or connect with an adult who chooses to share theirs by invitation.</p><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="landing-text-link">See family care <Icon name="arrow_forward" size={18} /></a></div></article>
  </div></div></section>;
}

export function GettingStarted() {
  const steps = [
    ['Choose a record', 'Start with your own, a managed record, or an invitation from someone sharing their care.'],
    ['Add what matters', 'Record your medicines, appointments, and the details you want to keep close.'],
    ['Come back to a clearer day', 'Review what you recorded, see what is next, and get your reminders.'],
  ];
  return <section className="section landing-start" id="how-it-works"><div className="page"><div className="landing-section-head"><p className="landing-label">A simple place to start</p><h2>A little structure.<br />At your own pace.</h2></div><ol className="landing-steps">{steps.map(([title,body],index) => <li key={title}><span className="landing-step-number">{String(index+1).padStart(2,'0')}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>;
}
