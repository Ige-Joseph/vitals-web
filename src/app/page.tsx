import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Explainer } from '@/components/Explainer';
import { Features } from '@/components/Features';
import { MotherBaby } from '@/components/MotherBaby';
import { ConnectedCare } from '@/components/ConnectedCare';
import { SmartTools } from '@/components/SmartTools';
import { Showcase } from '@/components/Showcase';
import { HowItWorks } from '@/components/HowItWorks';
import { Trust } from '@/components/Trust';
import { Premium } from '@/components/Premium';
import { Mobile } from '@/components/Mobile';
import { Faq } from '@/components/Faq';
import { Waitlist } from '@/components/Waitlist';
import { ContactFooter } from '@/components/ContactFooter';
import { WAITLIST_ENDPOINT } from '@/content/site';

export default function Home() {
  return <><Nav /><main id="main">
    <Hero />
    <Explainer />
    <Features />
    <MotherBaby />
    <ConnectedCare />
    <SmartTools />
    <Showcase />
    <HowItWorks />
    <Premium />
    <Trust />
    <Mobile />
    {WAITLIST_ENDPOINT ? <Waitlist /> : null}
    <Faq />
    <ContactFooter />
  </main></>;
}
