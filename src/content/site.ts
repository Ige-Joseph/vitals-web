/** Public, product-checked Vitals marketing content. */

export const APP_URL = 'https://vitals.loamlyntech.com/';
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? '';
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '';
export const WAITLIST_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? '';
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Mother & Baby', href: '#mother-baby' },
  { label: 'Family care', href: '#family-care' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const hero = {
  eyebrow: 'A health app for everyday care',
  title: 'Your health, with a little more in order.',
  body: 'Keep medicines, appointments, symptom checks and mood entries together. Use Vitals for your own care, a pregnancy journey, or the people whose care you help manage.',
  primary: { label: 'Open Vitals', href: APP_URL },
  secondary: { label: 'See how it works', href: '#about' },
  note: 'Use Vitals in your browser today. Free features are available; some extras are Premium.',
};

export const explainer = {
  eyebrow: 'A health app that keeps things together',
  title: 'Your health story, easier to keep track of.',
  body: 'Vitals gives you one place to record medicines and doses, appointments, symptom checks and mood. Follow a pregnancy and baby care journey, or manage a record for someone who depends on your care. Use it in your browser today; the Android app is in development, with iOS planned later.',
  facts: [
    { icon: 'person', label: 'Your health', value: 'Medicines, doses, symptom checks and appointments' },
    { icon: 'pregnant_woman', label: 'Mother & Baby', value: 'Pregnancy timeline, mood and baby care' },
    { icon: 'family_restroom', label: 'Family care', value: 'Manage a record or connect with an adult' },
    { icon: 'devices', label: 'Use it today', value: 'Open Vitals in your phone or computer browser' },
  ],
} as const;

export const everydayFeatures = [
  { icon: 'medication', title: 'Medicines and dose records', body: 'Keep a schedule, get reminders, and record doses as taken, skipped or missed.' },
  { icon: 'calendar_month', title: 'Appointments that stay in view', body: 'Add a visit and choose when Vitals should remind you ahead of it.' },
  { icon: 'monitor_heart', title: 'Symptom and mood history', body: 'Review previous AI symptom checks and mood entries.' },
] as const;

export const smartTools = [
  {
    icon: 'psychology', title: 'Symptom Checker',
    body: 'Describe what you are experiencing and review an informational AI response with its safety guidance.',
    screenshot: '/images/screens/symptom-checker.webp', alt: 'Vitals Symptom Checker entry screen with an example symptom and safety guidance.', ratio: '2 / 1',
  },
  {
    icon: 'biotech', title: 'Drug Scan',
    body: 'Upload a clear medicine image to review an identification result and related information. Results can be uncertain.',
    screenshot: '/images/screens/drug-scan.webp', alt: 'Vitals Drug Scan upload screen for medicine identification.', ratio: '2.3 / 1',
  },
] as const;

export const steps = [
  { n: '1', title: 'Choose a record', body: 'Use your own, create a managed record, or accept an adult\'s invitation to connect.' },
  { n: '2', title: 'Add what matters', body: 'Keep medicines, appointments, symptoms and care milestones together.' },
  { n: '3', title: 'Come back when you need it', body: 'Review your record, get reminders, and bring a Premium health summary to a visit.' },
] as const;

export const showcase = [
  { id: 'dashboard', title: 'A clear view of today', body: 'See your upcoming care tasks and recent activity in one place.', image: '/images/screens/dashboard.webp', alt: 'Vitals dashboard showing demo care tasks and activity.', ratio: '9 / 7' },
  { id: 'appointments', title: 'Appointments and reminders', body: 'Keep upcoming visits in view and choose when Vitals should remind you.', image: '/images/screens/appointments.webp', alt: 'Vitals appointments screen showing a scheduled demo check-in.', ratio: '16 / 10' },
  { id: 'summary', title: 'A health summary for your next visit', body: 'Generate a PDF of recorded health information for a date range you choose. Included with Premium.', image: '/images/screens/health-summary-premium.webp', alt: 'Vitals Premium health summary feature and its access gate.', ratio: '16 / 10' },
] as const;

export const pregnancy = {
  eyebrow: 'Mother & Baby', title: 'A journey with room for every next step.',
  body: 'Set up a pregnancy timeline from a date or current week, record mood, and continue into a baby profile with vaccination milestones and reminders.',
  image: '/images/story/pregnancy-journey.webp', alt: 'A pregnant woman resting a hand on her belly.',
  screenshot: '/images/screens/pregnancy-timeline.webp', screenshotAlt: 'Vitals Mother & Baby pregnancy timeline with demo information.', ratio: '17 / 18',
  babyScreenshot: '/images/screens/baby-profile.webp', babyScreenshotAlt: 'Vitals baby profile with an invented demo vaccination timeline.', babyRatio: '17 / 20',
};

export const familyCare = {
  eyebrow: 'Family & connected care', title: 'Care for someone, or stay connected to their record.',
  body: 'Managed records are for people whose care you organise when they do not have a Vitals account of their own. Connected adults have their own account and choose to share access with you by invitation.',
  image: '/images/story/family-at-home.webp', alt: 'A family sitting together at home.',
  screenshot: '/images/screens/family-invitation.webp', screenshotAlt: 'Vitals invitation screen for sharing access to a managed demo record.', ratio: '4 / 5',
};

export const premium = {
  title: 'More room for the care you manage.',
  body: 'Vitals has free features for your own health record. Premium includes downloadable health summaries and additional capacity for family records and connections.',
  screenshot: '/images/screens/health-summary-premium.webp', screenshotAlt: 'Vitals Health Summary feature gate explaining the Premium PDF summary.',
  note: 'The app shows current Premium details and availability. No pricing or limits are published here.',
};

export const trust = [
  { icon: 'lock', title: 'You manage access', body: 'Sharing starts with an invitation. You can manage a connection or remove access to your own record.' },
  { icon: 'history', title: 'Your entries stay in context', body: 'Vitals keeps the information you record together so it is easier to review and find.' },
  { icon: 'draft', title: 'Information, not diagnosis', body: 'Symptom Checker and Drug Scan provide informational results, not a diagnosis or treatment plan.' },
] as const;

export const disclaimer = 'Vitals helps you organise your health information. Symptom Checker and Drug Scan provide informational results; they do not diagnose, treat or replace advice from a doctor or pharmacist.';

export const faq = [
  { q: 'What is Vitals?', a: 'Vitals is a health app for organising medicines, dose records, appointments, symptom checks and care information. Use it in your browser today.' },
  { q: 'Who is Vitals for?', a: 'People keeping track of their own health, following a pregnancy or baby care journey, or helping manage a record for someone else.' },
  { q: 'What can I use it for?', a: 'Medicine and dose records, reminders, appointments, symptom checks, medicine-image identification, mood entries, pregnancy and baby care, and family records.' },
  { q: 'Is Vitals free?', a: 'Vitals has free features for your own health record. Premium includes the downloadable health summary and additional capacity for family records and connections. Check the app for current details.' },
  { q: 'Does Vitals replace a doctor or pharmacist?', a: 'No. Symptom Checker and Drug Scan provide information only. They do not diagnose or treat a condition and do not replace professional care.' },
  { q: 'Can I use Vitals today?', a: 'Yes. Open Vitals in a browser on your phone or computer. The current product is a PWA that works in the browser.' },
  { q: 'Is the Android or iOS app available?', a: 'The React Native app is in development, with Android first and iOS planned later. It is not yet available to download.' },
  { q: 'How does family access work?', a: 'You can manage a record for someone without their own Vitals account. Adults with their own account can invite you to connect to their record.' },
] as const;

export const mobile = {
  title: 'Use Vitals in your browser today.',
  body: 'The current PWA works on a phone or computer browser. A separate React Native app is in development for Android first, with iOS planned later.',
  note: 'The mobile app is not yet available to download.',
};

export const waitlist = {
  title: 'Hear when the Android app is ready.',
  body: 'Leave an email and we will send one update when the mobile app is available.',
  success: { title: 'You are on the list.', body: 'We will email you when the app is ready. You can keep using Vitals in your browser in the meantime.' },
};

export const contact = {
  title: 'Put your health information in one place.',
  body: 'Open Vitals in your browser and start with the health details you want to keep close.',
};
