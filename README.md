# vitals-web

The public marketing website for Vitals, separate from the Vitals health app and API.

```bash
npm install
npm run dev      # http://localhost:3103
npm run typecheck
npm run build
```

Next.js 14 App Router, React 18 and TypeScript. The page uses the Vitals typography and color tokens, local optimized photography, `next/image`, and CSS/IntersectionObserver motion without an animation dependency.

## Configuration

Copy `.env.example` to `.env.local` and set only values that are ready to use.

| Variable | When unset |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Uses the current deployed Vitals app URL |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | Mobile waitlist is not shown |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact link is omitted |
| `NEXT_PUBLIC_APP_STORE_URL` / `NEXT_PUBLIC_PLAY_STORE_URL` | Not linked; do not publish until the app is available |

The current Vitals health app is usable in a browser as a PWA. The separate React Native app is in development, Android first, with iOS planned later; this site does not present it as available to download.

## Product captures

See [`public/images/README.md`](public/images/README.md) for selected shared-library photography, illustration, and authentic Vitals application screenshots. Product captures use invented demo records and retain their real interface content.
