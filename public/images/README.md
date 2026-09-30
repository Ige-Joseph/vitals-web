# Marketing images

Only selected, web-optimized images from the shared `vitals-assets` library are included here. Do not copy the whole library into this folder. Identical originals exist in both `app` and `website` asset groups.

## Story photography

The following WebP derivatives are used by the landing page:

| File | Source in `vitals-assets` | Use |
|---|---|---|
| `story/hero-family.webp` | `website/family/pexels-vanessa-loring-5082962.jpg` | Hero; family together outdoors |
| `story/family-at-home.webp` | `website/family/pexels-gabby-k-7114418.jpg` | Connected care |
| `story/newborn-journey.webp` | `website/family/pexels-serdi-18998443.jpg` | Pregnancy to baby story |
| `story/pregnancy-journey.webp` | `website/pregnancy/pexels-tiago-chaves-2154478168-35111181.jpg` | Pregnancy story |
| `story/appointment-consult.webp` | `website/appointment/pexels-cottonbro-7579823.jpg` | Everyday health; appointment context |
| `story/child-visit.webp` | `website/appointment/pexels-pavel-danilyuk-5998445.jpg` | Early baby care; clinician visit context |
| `story/medication-context.webp` | `website/medication/pexels-towfiqu-barbhuiya-3440682-11768111.jpg` | Everyday health; medicine context |
| `story/phone-stethoscope.webp` | `website/general/pexels-negativespace-48603.jpg` | Browser/PWA section; health technology context |
| `baby/baby-month-01.webp` through `baby/baby-month-09.webp` | `app/baby/Baby Month/baby-month-01.png` through `baby-month-09.png` | Transparent illustration sequence |

The photos were downscaled to a 1600px maximum dimension and encoded as WebP. Baby illustrations preserve transparency and are available behind an optional disclosure as a visual sequence only; the site does not attach week-level or medical development claims to them.

## Authentic Vitals screenshots

Screenshots were captured from the running local `vitals-frontend` using invented demo records, cropped to the relevant real interface, and encoded as WebP. Screenshot frames add only the website's surrounding border and title; the app UI itself is not recreated.

| File | Real app surface | Notes |
|---|---|---|
| `screens/dashboard.webp` | Dashboard | Today's tasks and quick actions; demo greeting only, no account details. Used in Product Introduction and Showcase. |
| `screens/medications.webp` | My Care → Medications | Active demo medicine and frequency. Used in Everyday Health. |
| `screens/appointments.webp` | My Care → Appointments | Scheduled demo check-in and reminder context. Used in Showcase. |
| `screens/symptom-checker.webp` | My Care → Symptom AI | Example symptom draft and the app's general-guidance disclaimer; no AI request was submitted. |
| `screens/drug-scan.webp` | My Care → Drug Scan | Genuine image-upload screen; no image was uploaded and no identification result was fabricated. |
| `screens/pregnancy-timeline.webp` | Mother & Baby → Timeline | Demo week 20 timeline and app-generated information. |
| `screens/baby-profile.webp` | Mother & Baby → Baby | Invented demo profile and vaccination timeline, cropped to the first two complete milestones. |
| `screens/family-invitation.webp` | Profile → Family → Invitation | Invitation and access choices for a managed demo record; no invitation was sent. |
| `screens/health-summary-premium.webp` | Profile → Health Summary | Real Premium access gate and summary description. The seeded account did not have effective Premium access, so the report-generation form was not reachable. |

Only selected screenshots are used on the page. Product captures that appear in both a feature section and the Showcase use the same optimized file rather than duplicate image copies.
