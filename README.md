<p align="center">
  <img src="assets/logo_banner.jpg" alt="frontdoorapp.co" width="640">
</p>

<p align="center">
  <b>You do what you do best. We make the world see it.</b>
</p>

<p align="center">
  The managed digital presence for businesses — set up for you, run on autopilot.
</p>

---

> This repository (`frontdoorapp-web`) is the web client for **frontdoorapp.co** — currently the marketing landing page plus a live example of a Frontdoor presence page.

## What frontdoorapp.co does

A digital presence — website, social media, reviews, business email, content — is table
stakes for any business to be found and trusted. For most owners that means stitching
together 6+ tools, hiring a freelancer, or doing nothing at all. It's a tax on the people
least equipped to pay it.

frontdoorapp.co does it **for** them — setting up a business's entire online presence,
then keeping it running:

- **We set it up** — domain, account claiming, email migration, brand-voice capture, first content.
- **Automation keeps it running** — posting across channels, draft-first replies, info kept current.
- **A human team has your back** — onboarding and ongoing help for anything tricky.

**What's included:** Landing Page · Social Media Presence · Business Email · Analytics ·
Content Generation · Social Media Automation · Natural-language Automations · Platform
Support.

One front door, every channel, near-zero effort from the owner.

## This repo

A [Next.js](https://nextjs.org) site (App Router · TypeScript · Tailwind CSS v4),
statically prerendered and deployed on Vercel.

- **Marketing landing page** (`/`) — the hero, problem, how-it-works, the eight services,
  and an early-access waitlist. Supports light/dark mode (follows your system, with a
  toggle in the navbar).
- **Live example** (`/demo`) — a mock "Frontdoor page" for a sample business (Bella's
  Bakery): photo cover, menu, reservations, and reviews — a "this is what you get" demo.

> 🚧 **Early development.** The site is live at [frontdoorapp.co](https://frontdoorapp.co);
> the product itself is in active development.

## Getting started

You'll need **Node.js 18.18+** (Node 20+ recommended).

```bash
git clone https://github.com/engrkenjitanaka/frontdoorapp-web.git
cd frontdoorapp-web

npm install                  # install dependencies
npm run dev                  # dev server → http://localhost:3000
npm run build && npm start   # production build, then serve it
```

`npm run build` also runs the TypeScript type-check — it's the de-facto quality gate
(there's no separate test runner or linter yet).

### Project structure

```text
app/                 App Router — layout (fonts, SEO metadata, no-flash theme script),
                     page.tsx, globals.css, demo/ (the /demo example)
  globals.css        Tailwind v4 @theme brand tokens, dark-mode rules, keyframes
components/          Landing sections (Header, Hero, …) + ThemeToggle + shared UI
  demo/              Demo-only pieces (the Menu detail modal, BookingForm)
public/              Logo lockup + demo photos
```

## Deploying to Vercel

🟢 **Live at [frontdoorapp.co](https://frontdoorapp.co)** — deployed on
[Vercel](https://vercel.com) with **zero configuration** (Vercel auto-detects Next.js).
The project auto-deploys on every push to `main`; pull requests get their own preview
URLs. To deploy manually:

```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

### Early-access waitlist

Signups POST same-origin to a Route Handler (`app/api/waitlist/route.ts`) that runs an
invisible [Vercel BotID](https://vercel.com/docs/botid) check (no captcha for real users),
drops honeypot hits, validates the email, and stores it in **Upstash Redis** — a sorted
set (`waitlist`) keyed by signup time, so it dedupes and you can view/export it in the
Upstash console.

**One-time setup** (provisions the env vars automatically):

```bash
vercel install upstash       # wires UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
vercel env pull .env.local   # only needed to exercise the route locally
```

BotID needs no env vars — its invisible protection activates automatically once deployed
on Vercel (in local dev it runs in basic mode). The Upstash tokens are server-only (never
`NEXT_PUBLIC_`).

## Contributing

Early days — if you'd like to get involved, open an issue to start a conversation.

## License

To be determined.
