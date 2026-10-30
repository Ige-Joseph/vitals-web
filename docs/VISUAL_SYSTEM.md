# Vitals visual system

The PWA, native mobile app, and marketing site share the embracing V logo,
Manrope headings, DM Sans interface text, and a curated Lucide vector icon set.
Font licenses are included beside the self-hosted web assets. Native icon data
is distributed under the included ISC license.

## Shared direction

- Primary blue: #005bbf; pale blue: #e8f0ff.
- Main text: #18273c; secondary text: #596779; border: #e2e8f0.
- Phone gutter: 24px. Controls: 52px minimum height; corners: 14px.
- Cards use 20px corners, light borders, and restrained shadows.
- Headings use Manrope 600/700; body and control labels use DM Sans.
- Brief fades and timed press feedback respect reduced-motion preferences.
- Five destinations: Today, My Care, Mother & Baby, Articles, Profile.
- Today's scheduled care appears before shortcuts. Profile sections disclose
  secondary information progressively.

Layouts adapt to platform conventions: the PWA uses a sidebar on large screens,
while native mobile keeps its bottom navigation and native controls.

## Scope

Care decisions, access rules, account linking, billing entitlements, and API
contracts remain as before. Google Calendar stays Coming soon. Admin screens
were excluded from the redesign. Dark mode retains the existing native theme;
this iteration establishes visual consistency in the light theme.

## Verification

Production builds cover both web repositories; mobile uses TypeScript and
Android JavaScript bundle checks. Browser interaction checks use fictional
records and intercepted API calls. They exercise navigation, authentication
wiring, a dose action, responsive layouts, and the paused Calendar presentation.
They do not establish real Google authorization, push delivery, or Android
rendering on a device. See the mobile Google sign-in guide for build setup.
