import type { Metadata, Viewport } from 'next';
import './globals.css';
import './visual-system.css';

// Self-hosted Manrope and DM Sans; interface icons are local SVG vectors.
const FONTS = '/fonts/fonts.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vitals.health'),
  title: 'Vitals — Your health, all in one place',
  description:
    'Vitals is a health app for keeping medicines, appointments, and health information together. Use it in your browser today; free features are available, with some extras in Premium.',
  applicationName: 'Vitals',
  icons: {
    icon: '/favicon.svg',
    apple: '/icons/icon-192x192.png',
  },
  openGraph: {
    title: 'Vitals — Your health, all in one place',
    description:
      'Keep track of your medicines, note how you are feeling, and keep your health information together.',
    siteName: 'Vitals',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#005bbf',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={FONTS} />
        <link rel="preload" href="/fonts/manrope-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/dm-sans-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        {/* First tab stop on the page. */}
        <a className="skip" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
