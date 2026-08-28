# Images

No images are committed here. The site is built to expect them and renders a
composed placeholder in the Vitals palette wherever one is missing, so the page
looks finished either way and nothing breaks while the slots are empty.

**Dropping a file in is the whole change.** The components check at build time
whether the file exists; there is no code to edit and no manifest to update.

---

## Photography

Three slots. Deliberately few — a photograph in every section makes a page feel
like a stock library rather than a product.

| File | Where | What it should show |
|---|---|---|
| `hero.jpg` | Hero, right column | One person, at home, managing their own medicines. Calm, everyday, not clinical. Shot portrait (4:5) — it is cropped to 16:10 on phones. |
| `caregiver.jpg` | Features grid, last cell | Two people: someone helping a parent or relative with their medicines. Square (1:1). |
| *(optional)* | — | The layout does not need a third. Add one only if a section genuinely feels thin. |

### Representation

The brief is specific and it matters more than the composition:

- Black and African people
- Everyday people managing their health, not models
- A range of ages and genders across the set
- Where healthcare workers appear, Black doctors and nurses
- **African settings where possible.** Stock photography of Black Americans
  will make a Nigerian product read as American. That is the failure mode to
  watch for.
- Avoid obviously staged stock: white backdrops, folded arms, stethoscope
  draped over a laptop, someone beaming at a pill bottle

Good sources with African photography: Nappy.co, Tonl, CreateHER Stock, Unsplash's
Africa collections. Check the licence covers commercial use.

### Format

- **JPEG**, sRGB, quality ~80
- Roughly **1600px** on the long edge — `next/image` generates the responsive
  sizes, so a larger original wastes build time and repository space
- Keep faces away from the extreme edges: the hero is cropped differently on
  phones

Alt text is written in the components and describes the photograph, not the
feature. If you change what a photograph shows, update the alt text with it —
`src/components/Hero.tsx` and `src/components/Features.tsx`.

---

## Product screenshots

These are screenshots of the **real, running application**. Do not mock these
up: the section exists to prove Vitals is real, and a fabricated screen would
be the one dishonest thing on the page.

| File | Route to capture | What should be on screen |
|---|---|---|
| `app-dashboard.png` | `/dashboard` | Today's medicines and appointments, with real-looking data |
| `app-medications.png` | `/care` or a medication's detail | A medication, its schedule, and recorded doses |
| `app-summary.png` | Profile → Health summary | The summary card, ideally mid-generation or ready to download |

### Capturing them

1. Run the app with realistic data — `npm run db:seed` in `vitals-backend`, then
   add a few medicines and appointments by hand so the screens are not empty.
   Empty states photograph badly and undersell the product.
2. Open the app at a **1440×900** viewport. Wider produces a lot of empty
   gutter once the shot is cropped to 16:10.
3. Capture the content area. Include the app's own chrome if it helps the shot
   read as an application — the site adds browser chrome around it either way.
4. Save as **PNG** (screenshots have flat colour and hard edges; JPEG will make
   the text fuzzy), about **1600px** wide.

### Before publishing

**Use invented patient data.** These are health records. Names, dates of birth,
conditions and medicines in a public screenshot must not belong to a real
person — including yours. Seed data, or data typed in for the purpose, only.
