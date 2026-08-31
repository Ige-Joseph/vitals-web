import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Explainer } from '@/components/Explainer';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Showcase } from '@/components/Showcase';
import { Trust } from '@/components/Trust';
import { Mobile } from '@/components/Mobile';
import { Faq } from '@/components/Faq';
import { Waitlist } from '@/components/Waitlist';
import { ContactFooter } from '@/components/ContactFooter';

/**
 * The order answers a first-time visitor's questions in the order they ask
 * them: what is this, what does it do, how do I start, is it real, can I trust
 * it with health information, is there an app, and then the smaller questions.
 *
 * Showcase sits after How it works on purpose — "this is real, here it is"
 * lands better once someone knows what they are looking at.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Explainer />
        <Features />
        <HowItWorks />
        <Showcase />
        <Trust />
        <Mobile />
        <Faq />
        <Waitlist />
        <ContactFooter />
      </main>
    </>
  );
}
