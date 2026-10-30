import { Nav } from '@/components/Nav';
import { LandingHero, ProductOverview, CareJourneys, GettingStarted } from '@/components/Landing';
import { Trust } from '@/components/Trust';
import { Faq } from '@/components/Faq';
import { Waitlist } from '@/components/Waitlist';
import { ContactFooter } from '@/components/ContactFooter';
import { WAITLIST_ENDPOINT } from '@/content/site';

export default function Home() {
  return <><Nav /><main id="main">
    <LandingHero />
    <ProductOverview />
    <CareJourneys />
    <GettingStarted />
    <Trust />
    {WAITLIST_ENDPOINT ? <Waitlist /> : null}
    <Faq />
    <ContactFooter />
  </main></>;
}
