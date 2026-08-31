/**
 * Everything the marketing site says, in one place.
 *
 * Copy lives here rather than inside components so it can be changed without
 * touching layout, and so every claim on the site can be reviewed by reading a
 * single file. That matters more than usual here: this is a health product, and
 * the difference between "helps you keep track of your medicines" and anything
 * that sounds like medical advice is a difference somebody has to be able to
 * check.
 *
 * Every feature listed below exists in the product today. Nothing here is
 * aspirational except the mobile app, which is labelled as such everywhere it
 * appears.
 */

/** Where the real, running Vitals web application lives. */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? 'https://vital-app-ivory.vercel.app';

/**
 * The mobile apps do not exist yet.
 *
 * These stay empty until there is something to link to. The buttons read as
 * "coming soon" and are not clickable while these are unset — see StoreButtons.
 * When the React Native app ships, set the two environment variables and the
 * buttons become real links with no other change.
 */
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? '';
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '';

/**
 * Where the waitlist and contact forms post.
 *
 * No endpoint exists in the Vitals backend for either, so rather than inventing
 * one the forms post to whatever is configured here. Unset, they explain that
 * sign-ups are not open yet instead of pretending to succeed.
 */
export const WAITLIST_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? '';
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '';

export const nav = [
  // "What is it" first, because that is the question a first-time visitor is
  // holding. "Product" points at screenshots, which answers a later question —
  // it read as the explanation and was not one.
  { label: 'What is Vitals', href: '#about' },
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export const hero = {
  eyebrow: 'Your health companion',
  title: 'Your health, all in one place.',
  body:
    'Vitals helps you keep track of your medicines, note how you are feeling, and keep your health information together — so it is there when you need it.',
  primary: { label: 'Open Vitals', href: APP_URL },
  secondary: { label: 'Join the waitlist', href: '#waitlist' },
  note: 'Free to use on the web. The mobile app is on the way.',
};

/**
 * What Vitals actually is.
 *
 * The hero says what it helps you do; this says what it *is*, which is not the
 * same thing and was missing. A first-time visitor could previously read the
 * whole page without learning whether Vitals is an app, a service or a device —
 * and the only use of the word "app" was "the mobile app is on the way", which
 * reads as though the product itself has not shipped.
 *
 * Four plain answers: what it is, who it is for, what it costs, where it runs.
 */
export const explainer = {
  eyebrow: 'In short',
  title: 'So, what is Vitals?',
  body:
    'Vitals is a free web app for keeping track of your health. You add your medicines, appointments and how you have been feeling, and it keeps them together and reminds you when something is due. You can use it on your own, or share a record with family who help look after you.',
  facts: [
    { icon: 'language', label: 'What it is', value: 'A web app you open in your browser' },
    { icon: 'group', label: 'Who it is for', value: 'Anyone managing their health, or someone else’s' },
    { icon: 'payments', label: 'What it costs', value: 'Free. A few extras are Premium' },
    { icon: 'devices', label: 'Where it works', value: 'Any phone or computer, today' },
  ],
} as const;

export const features = [
  {
    icon: 'medication',
    title: 'Stay on top of your medicines',
    body:
      'Add what you take and when. Vitals reminds you, and keeps a record of the doses you logged.',
  },
  {
    icon: 'monitor_heart',
    title: 'Note how you feel',
    body:
      'Write down symptoms and mood as they happen, and look back over them later.',
  },
  {
    icon: 'calendar_month',
    title: 'Keep appointments in view',
    body:
      'Add appointments, get reminded, and sync them to the calendar you already use.',
  },
  {
    icon: 'diversity_3',
    title: 'Care for someone else',
    body:
      'Invite family to help, or manage a record for a parent or child. You decide who sees what.',
  },
  {
    icon: 'psychology',
    title: 'Make sense of health information',
    body:
      'Ask about symptoms in plain words, or point your camera at a medicine box to see what it is.',
  },
  {
    icon: 'pregnancy',
    title: 'Follow a pregnancy',
    body:
      'Track a pregnancy week by week, and carry on with your baby after they arrive.',
  },
] as const;

export const steps = [
  {
    n: '1',
    title: 'Add your health information',
    body: 'Your medicines, conditions and appointments — in one place instead of five.',
  },
  {
    n: '2',
    title: 'Track and understand it',
    body: 'Log doses and symptoms as you go, and see what has happened over time.',
  },
  {
    n: '3',
    title: 'Stay informed',
    body: 'Get reminders when they matter, and take a summary with you to a visit.',
  },
] as const;

/**
 * The product showcase.
 *
 * `image` points at a screenshot of the real application in /public/images.
 * Where a screenshot has not been captured yet the frame renders a labelled
 * placeholder rather than a fabricated interface — see docs in
 * public/images/README.md. Nothing here draws a screen that does not exist.
 */
export const showcase = [
  {
    id: 'dashboard',
    title: 'Everything for today, first',
    body: 'What to take, where to be, and what you have logged — on one screen.',
    image: '/images/app-dashboard.png',
    alt: 'The Vitals dashboard showing today’s medicines and appointments.',
  },
  {
    id: 'medications',
    title: 'Your medicines, and the doses you took',
    body: 'Doses appear as what you recorded — taken, skipped, missed — never as a score.',
    image: '/images/app-medications.png',
    alt: 'A medication in Vitals with its schedule and recorded doses.',
  },
  {
    id: 'summary',
    title: 'A summary you can take to a visit',
    body: 'A PDF of what you recorded over a period you choose. Part of Premium.',
    image: '/images/app-summary.png',
    alt: 'A Vitals health summary being prepared for download.',
  },
] as const;

export const trust = [
  {
    icon: 'lock',
    title: 'Your record is yours',
    body:
      'Nobody sees your health information unless you invite them, and you can remove access at any time.',
  },
  {
    icon: 'history',
    title: 'Sharing is recorded',
    body:
      'When you give someone access, that is written down — who, what, and when.',
  },
  {
    icon: 'draft',
    title: 'Nothing is diagnosed',
    body:
      'Vitals shows what you recorded. It does not assess it, score it or rate it.',
  },
] as const;

export const disclaimer =
  'Vitals is a health companion. It helps you organise and understand your own health information. It does not diagnose, treat or give medical advice, and it does not replace care from a doctor or pharmacist.';

export const faq = [
  {
    q: 'What is Vitals?',
    a: 'A place to keep your health information — your medicines, symptoms, appointments and history — so it is organised and easy to find.',
  },
  {
    q: 'Who is Vitals for?',
    a: 'Anyone managing their own health, and anyone helping someone else with theirs — a parent, a partner, an older relative.',
  },
  {
    q: 'What can I use it for?',
    a: 'Medicine reminders, logging doses and symptoms, keeping appointments, following a pregnancy, and sharing a record with family who help you.',
  },
  {
    q: 'Is Vitals free?',
    a: 'Yes. Your own health record is free to use. A few extras, like downloading a health summary, are part of Premium.',
  },
  {
    q: 'Does Vitals replace a doctor?',
    a: 'No. Vitals helps you keep track of things and understand your own information. It does not diagnose or advise, and it is not a substitute for seeing a professional.',
  },
  {
    q: 'Can I use it on the web?',
    a: 'Yes — Vitals works in your browser today, on a phone or a computer. You can open it right now.',
  },
  {
    q: 'Is there a mobile app?',
    a: 'Not yet. An Android app is being built, with iOS to follow. Join the waitlist and we will let you know when it is ready.',
  },
  {
    q: 'What happens to my health information?',
    a: 'It stays yours. It is not shown to anyone unless you invite them, sharing is recorded, and you can take access away again.',
  },
] as const;

export const mobile = {
  title: 'Vitals on mobile is coming.',
  body:
    'We are building the Vitals app for Android first, with iOS to follow. Everything you add on the web will be there when it arrives.',
  note: 'Not available yet. Join the waitlist and we will tell you when it is.',
};

export const waitlist = {
  title: 'Be first to get the app.',
  body:
    'Join the waitlist and we will email you once when the mobile app is ready. Nothing else.',
  success: {
    title: 'You are on the list.',
    body: 'We will email you when the app is ready. You can keep using Vitals on the web in the meantime.',
  },
};

export const contact = {
  title: 'Questions?',
  body: 'If something is unclear or not working, tell us and a person will read it.',
};
