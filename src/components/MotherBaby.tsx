import Image from 'next/image';
import { pregnancy } from '@/content/site';
import { ProductScreen } from './ProductScreen';
import { Reveal, SectionHead } from './ui';

const stages = Array.from({ length: 9 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return { number, src: `/images/baby/baby-month-${number}.webp` };
});

export function MotherBaby() {
  return (
    <section id="mother-baby" className="section mother-baby">
      <div className="page">
        <div className="mother-intro">
          <Reveal>
            <div className="mother-photo">
              <Image src={pregnancy.image} alt={pregnancy.alt} fill sizes="(max-width: 800px) 100vw, 42vw" style={{ objectFit: 'cover', objectPosition: 'center 35%' }} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mother-copy">
              <p className="eyebrow">{pregnancy.eyebrow}</p>
              <h2>{pregnancy.title}</h2>
              <p className="lead">{pregnancy.body}</p>
              <p className="mother-note">The illustrations below are a visual sequence, not a medical week-by-week size guide.</p>
            </div>
          </Reveal>
        </div>

        <div className="baby-story">
          <div className="arrival-story">
            <div className="arrival-photo">
              <Image src="/images/story/newborn-journey.webp" alt="A parent meeting their newborn." fill sizes="(max-width: 760px) 100vw, 34vw" style={{ objectFit: 'cover', objectPosition: 'center 48%' }} />
            </div>
            <div className="arrival-copy"><p className="eyebrow">And after birth</p><h3>Keep the next milestones close.</h3><p>Create a baby profile and follow the vaccination timeline, with reminders ahead of due dates.</p></div>
          </div>

          <div className="mother-screens">
            <ProductScreen src={pregnancy.screenshot} alt={pregnancy.screenshotAlt} title="Pregnancy timeline" ratio={pregnancy.ratio} />
            <ProductScreen src={pregnancy.babyScreenshot} alt={pregnancy.babyScreenshotAlt} title="Baby profile & milestones" ratio={pregnancy.babyRatio} />
          </div>

          <div className="baby-visit-story">
            <div className="baby-visit-photo">
              <Image src="/images/story/child-visit.webp" alt="A clinician examining a young child during a visit." fill sizes="(max-width: 760px) 100vw, 40vw" style={{ objectFit: 'cover', objectPosition: 'center 40%' }} />
            </div>
            <p>Keep baby care milestones in your record, with a clinician there for the care that needs one.</p>
          </div>

          <details className="baby-art-disclosure">
            <summary>Explore the baby illustrations</summary>
            <p>Artwork for a visual sequence only; it is not a week-by-week medical guide.</p>
            <div className="baby-stage-grid" aria-label="Nine baby illustrations in sequence">
              {stages.map(stage => (
                <figure className="baby-stage" key={stage.number}>
                  <div className="baby-stage-art">
                    <Image src={stage.src} alt={`Baby illustration ${stage.number} in the artwork sequence`} fill sizes="(max-width: 560px) 28vw, 8vw" loading="lazy" style={{ objectFit: 'contain' }} />
                  </div>
                  <figcaption>{stage.number}</figcaption>
                </figure>
              ))}
            </div>
          </details>
        </div>
      </div>
      <style>{`
        .mother-baby { background: var(--surface-container-low); }
        .mother-intro { display: grid; grid-template-columns: .92fr 1.08fr; gap: clamp(2rem, 6vw, 5rem); align-items: center; }
        .mother-photo { position: relative; aspect-ratio: 4 / 5; max-height: 36rem; overflow: hidden; border-radius: var(--radius-2xl); box-shadow: var(--shadow-lg); }
        .mother-copy h2 { margin-top: .75rem; font-size: var(--step-h2); font-weight: 800; max-width: 15ch; }
        .mother-copy .lead { margin-top: 1.15rem; max-width: 48ch; }
        .mother-note { margin-top: 1.25rem; padding-left: .9rem; border-left: 3px solid var(--tertiary); color: var(--on-surface-variant); font-size: .88rem; }
        .baby-story { margin-top: clamp(3rem, 7vw, 6rem); padding: clamp(1.25rem, 4vw, 2.5rem); border: 1px solid var(--outline-variant); border-radius: var(--radius-2xl); background: var(--surface-container-lowest); }
        .baby-stage-grid { display: grid; grid-template-columns: repeat(9, minmax(0, 1fr)); gap: .25rem; margin-top: 1rem; }
        .baby-stage { margin: 0; text-align: center; }
        .baby-stage-art { position: relative; aspect-ratio: 1 / 1.12; }
        .baby-stage figcaption { color: var(--outline); font-size: .68rem; font-variant-numeric: tabular-nums; }
        .arrival-story { display: grid; grid-template-columns: .7fr 1fr; align-items: center; gap: clamp(1rem, 3vw, 2.5rem); }
        .arrival-photo { position: relative; overflow: hidden; aspect-ratio: 1.2 / 1; border-radius: var(--radius-xl); }
        .arrival-story h3 { margin-top: .35rem; font-size: var(--step-h3); }
        .arrival-story p:last-child { margin-top: .4rem; max-width: 48ch; color: var(--on-surface-variant); font-size: .9rem; }
        .mother-screens { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 2rem; }
        .baby-visit-story { display: grid; grid-template-columns: minmax(13rem, .8fr) 1fr; gap: clamp(1rem, 3vw, 2rem); align-items: center; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--outline-variant); }
        .baby-visit-photo { position: relative; overflow: hidden; aspect-ratio: 4 / 3; border-radius: var(--radius-xl); }
        .baby-visit-story p { max-width: 38ch; color: var(--on-surface-variant); font-size: .9rem; }
        .baby-art-disclosure { margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px solid var(--outline-variant); }
        .baby-art-disclosure summary { width: fit-content; color: var(--primary); font: 700 .9rem var(--font-headline); cursor: pointer; }
        .baby-art-disclosure p { margin-top: .65rem; color: var(--outline); font-size: .78rem; }
        @media (max-width: 780px) {
          .mother-intro { grid-template-columns: 1fr; }
          .mother-photo { aspect-ratio: 4 / 3; max-height: 25rem; }
          .baby-stage-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); row-gap: .8rem; }
          .arrival-story { grid-template-columns: .8fr 1fr; }
          .baby-visit-story { grid-template-columns: .8fr 1fr; }
        }
        @media (max-width: 560px) {
          .arrival-story, .baby-visit-story { grid-template-columns: 1fr; }
          .baby-stage-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .75rem .35rem; }
          .mother-screens { grid-template-columns: 1fr; }
          .arrival-photo { aspect-ratio: 16 / 10; }
          .baby-visit-photo { aspect-ratio: 16 / 10; }
        }
      `}</style>
    </section>
  );
}
