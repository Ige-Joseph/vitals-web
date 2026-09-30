import type { Metadata, Viewport } from 'next';
import './globals.css';

/**
 * Manrope and DM Sans are the application's two typefaces, loaded the same way
 * here. `display=swap` means the page is readable before the fonts arrive,
 * which matters more on a first visit over a slow connection than a moment of
 * fallback type does.
 *
 * Material Symbols is the icon set the application uses. It is loaded with a
 * narrow axis range rather than the full variable font, because the site needs
 * one weight at one optical size.
 */
const FONTS =
  'https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap';
const ICONS =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&display=swap';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
        <link rel="stylesheet" href={ICONS} />
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
