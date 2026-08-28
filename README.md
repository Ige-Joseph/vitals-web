# vitals-web

The public marketing site for Vitals. Separate from the application in
`vitals-frontend` and from the API in `vitals-backend` — it shares their visual
identity and nothing else.

```bash
npm install
npm run dev      # http://localhost:3100
npm run build
npm run typecheck
```

Next.js 14 (App Router), React 18, TypeScript. No UI framework, no animation
library, no state library. The whole page is 96 kB of JavaScript on first load
and prerenders to static HTML.

---

## The theme is not a choice made here

`src/app/globals.css` carries the Vitals Universal Theme copied verbatim from
`vitals-frontend/src/index.css` — the same Material 3 token names, the same hex
values, the same radii, shadows and typefaces (Manrope for headings, DM Sans for
body, Material Symbols for icons).

It is duplicated rather than imported because the two apps do not share a build.
**If a token changes in the application, change it here too.** A marketing site
that drifts from the product it sells is worse than a little duplication.

What is added is scale, not identity: fluid type steps, wider spacing, editorial
layout. No second palette, no other typeface.

---

## Configuration

Everything external is an environment variable. Copy `.env.example` to
`.env.local`.

| Variable | Effect when unset |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Falls back to the deployed app. This is the "Open Vitals" target. |
| `NEXT_PUBLIC_APP_STORE_URL` | Store button renders as "Coming soon", not a link |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Same |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | Form is disabled and says sign-ups are not open |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact section says an address is being set up |

Each of those unset states is deliberate. The alternative — a store button
linking to a listing that does not exist, or a form that accepts an address and
drops it — is worse than an honest absence.

**Launching the mobile app is two environment variables.** No redesign.

---

## What this site claims

Only what the product does. Every feature listed in `src/content/site.ts` exists
in the application today: medicines and reminders, symptom and mood logging,
appointments with calendar sync, family access, the AI symptom checker and drug
identification, pregnancy tracking, and health summary PDFs.

Deliberately **not** present, because none of it is true yet:

- testimonials, user counts, ratings, partner logos
- pricing tables or subscription tiers
- security or regulatory claims — no HIPAA, no "military-grade", no certifications
- App Store or Google Play availability
- Privacy and Terms links, because those routes do not exist in the application

Premium is mentioned twice, both times in passing. It is not sold here.

The medical disclaimer has its own block in the Trust section and a line in the
footer. It is the most important sentence on the page.

---

## Images

None are committed. Slots render a designed placeholder until a file is dropped
in, and the components detect the file at build time — there is no code to
change. See [`public/images/README.md`](public/images/README.md) for what belongs
in each slot, the representation the photography needs, and how to capture the
product screenshots.

The screenshots must be of the **real running application**. The showcase
section exists to prove Vitals is real; a mocked-up screen would defeat it.

---

## Structure

```
src/
  app/
    layout.tsx     fonts, metadata, skip link
    page.tsx       section order
    globals.css    the theme + one reveal animation
  components/      one file per section
    ui/            Button, Icon, Card, Reveal, SectionHead
    Photo.tsx      photograph, or a designed placeholder
  content/
    site.ts        every word on the site
```

Copy lives in `content/site.ts` so it can be changed without touching layout,
and so every claim the site makes can be reviewed by reading one file.

---

## Accessibility

Semantic landmarks, one `h1`, skip link, visible focus states in the brand
colour, labelled form fields, `aria-live` on the waitlist success state, and a
mobile menu that traps nothing but closes on Escape.

The FAQ is native `<details>`/`<summary>` — keyboard support and screen-reader
semantics come from the browser, and it works with JavaScript disabled.

Motion is one fade-and-rise driven by an IntersectionObserver toggling a CSS
class. Under `prefers-reduced-motion` it is removed and **content stays
visible** — a reveal that never fires would otherwise hide the page from the
people most likely to need it.
