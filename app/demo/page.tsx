import type { Metadata } from "next";
import { BookingForm } from "@/components/demo/BookingForm";
import { Menu } from "@/components/demo/Menu";
import { OpenStatus } from "@/components/demo/OpenStatus";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Marquee } from "@/components/demo/Marquee";

export const metadata: Metadata = {
  title: "Bella’s Bakery · a live frontdoorapp.co example",
  description:
    "A sample Frontdoor presence: website, menu, booking, and reviews, set up and run by frontdoorapp.co.",
  robots: { index: false, follow: false },
};

const hours: [string, string][] = [
  ["Mon – Fri", "7:00 AM – 6:00 PM"],
  ["Saturday", "8:00 AM – 6:00 PM"],
  ["Sunday", "8:00 AM – 2:00 PM"],
];

const galleryImgs = [
  "gallery4", "sourdough", "gallery5", "croissant", "gallery1", "cappuccino",
  "gallery6", "baguette", "gallery2", "multigrain", "gallery7", "coffee",
  "gallery3", "morningbun", "chai", "almond",
];

const reviews: { name: string; rating: number; when: string; text: string }[] = [
  { name: "Maria G.", rating: 5, when: "2 weeks ago", text: "The almond croissant is the best I’ve had outside of Paris. Worth the trip across town." },
  { name: "Devon R.", rating: 5, when: "1 month ago", text: "Booked a table for six through their page in seconds. Sourdough sells out fast, so get there early!" },
  { name: "Priya S.", rating: 4, when: "1 month ago", text: "Cozy spot, friendly staff, fantastic coffee. Only wish they were open later on Sundays." },
  { name: "Marcus T.", rating: 5, when: "3 weeks ago", text: "That morning bun. I dream about it. The cinnamon-and-orange thing they do should be illegal." },
  { name: "Lena K.", rating: 5, when: "2 months ago", text: "Been coming every Saturday for a year. The multigrain makes the best toast you’ll ever have." },
  { name: "Sam W.", rating: 4, when: "1 week ago", text: "Great cappuccino and a properly crusty baguette. Gets busy at 8am, but the line moves fast." },
  { name: "Joy A.", rating: 5, when: "2 months ago", text: "Booked a birthday brunch here. So accommodating, and the spread was absolutely gorgeous." },
  { name: "Hiro N.", rating: 5, when: "5 weeks ago", text: "The pour-over rotates weekly and they actually know what they’re brewing. Real coffee people." },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="text-amber-200">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

const nav = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Reservations" },
  { href: "#reviews", label: "Reviews" },
];

export default function DemoPage() {
  return (
    <div id="top" className="text-ink">
      {/* "this is a demo" chrome */}
      <div className="bg-ink-deep text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-2 text-xs sm:px-8">
          <span>
            🚪 A live example built &amp; run by <strong>frontdoorapp.co</strong>
          </span>
          <a href="/" className="shrink-0 font-semibold underline-offset-2 hover:underline">
            ← Back to frontdoorapp.co
          </a>
        </div>
      </div>

      {/* Bella's own site nav */}
      <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md dark:bg-[#0b0e14]/85">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-lg font-extrabold tracking-tight text-ink">
            Bella’s Bakery
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft sm:flex" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="#book"
              className="inline-flex h-9 items-center rounded-lg bg-ink px-3.5 text-sm font-semibold text-white transition hover:bg-ink-deep dark:bg-brand dark:hover:bg-brand-strong"
            >
              Book a table
            </a>
          </div>
        </div>
      </header>

      {/* Hero with cover photo */}
      <section className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/demo/cover.jpg"
          alt="Inside Bella’s Bakery"
          className="h-[44vh] min-h-72 w-full object-cover sm:h-[52vh]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-deep/90 via-ink-deep/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto max-w-5xl px-5 pb-7 sm:px-8">
            <div className="flex items-end gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/demo/profile.jpg"
                alt="Bella’s Bakery"
                className="h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-lg sm:h-24 sm:w-24"
              />
              <div className="pb-1">
                <OpenStatus />
                <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                  Bella’s Bakery
                </h1>
                <p className="mt-1 text-sm text-white/80 sm:text-base">
                  Artisan breads &amp; pastries · Portland, OR
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row [&>a]:w-full sm:[&>a]:w-auto">
              <a
                href="#book"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-strong"
              >
                Book a table
              </a>
              <a
                href="#menu"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-white/90 px-5 text-sm font-semibold text-ink-deep backdrop-blur transition hover:bg-white"
              >
                View menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About / hours / contact */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-ink">Baked from scratch, every morning.</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              A neighborhood bakery making naturally leavened breads and laminated pastries
              from scratch every day. Family-run since 2014. Pull up a chair, the coffee’s hot,
              and the sourdough’s still warm.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a href="tel:+15035550142" className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-brand/30">
                📞 (503) 555-0142
              </a>
              <a
                href="https://maps.google.com/?q=Portland+OR+bakery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-brand/30"
              >
                🧭 123 Baker St, Portland
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-cloud p-6">
            <h3 className="font-display text-base font-bold text-ink">
              Hours <span className="text-xs font-medium text-ink-soft">(UTC)</span>
            </h3>
            <dl className="mt-3 space-y-1.5 text-sm">
              {hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4">
                  <dt className="text-ink-soft">{day}</dt>
                  <dd className="font-medium text-ink">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Menu (interactive — click for details) */}
      <section id="menu" className="scroll-mt-24 border-b border-line bg-cloud">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold text-ink">Menu</h2>
          <p className="mt-1 text-ink-soft">Fresh daily. Tap any item for details.</p>
          <Menu />
        </div>
      </section>

      {/* Gallery — auto-scrolling marquee */}
      <section id="gallery" className="scroll-mt-24 overflow-hidden border-b border-line py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold text-ink">Gallery</h2>
          <p className="mt-1 text-ink-soft">A peek at the counter.</p>
        </div>
        <Marquee className="mt-6 gap-4 px-5 sm:px-8">
          {[...galleryImgs, ...galleryImgs].map((g, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${g}-${i}`}
              src={`/demo/${g}.jpg`}
              alt=""
              loading="lazy"
              draggable={false}
              className="h-48 w-72 shrink-0 rounded-2xl object-cover shadow-sm sm:h-56 sm:w-80"
            />
          ))}
        </Marquee>
      </section>

      {/* Reservations */}
      <section id="book" className="scroll-mt-24 border-b border-line bg-cloud">
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
          <h2 className="font-display text-3xl font-extrabold text-ink">Reserve a table</h2>
          <p className="mt-1 text-ink-soft">We hold tables for 15 minutes past your time.</p>
          <div className="mt-6 rounded-3xl border border-line bg-white p-6 sm:p-8">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Reviews — auto-scrolling marquee */}
      <section id="reviews" className="scroll-mt-24 overflow-hidden border-b border-line py-12">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl font-extrabold text-ink">Reviews</h2>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft">
              <Stars rating={5} /> 4.9 · 218 reviews
            </span>
          </div>
        </div>
        <Marquee className="mt-6 gap-4 px-5 sm:px-8">
          {[...reviews, ...reviews].map((r, i) => (
            <figure key={`${r.name}-${i}`} className="w-80 shrink-0 rounded-2xl border border-line bg-white p-5">
              <div className="flex items-center justify-between">
                <Stars rating={r.rating} />
                <figcaption className="text-xs text-ink-soft">{r.when}</figcaption>
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink">“{r.text}”</blockquote>
              <p className="mt-3 text-sm font-semibold text-ink">{r.name}</p>
            </figure>
          ))}
        </Marquee>
      </section>

      {/* Bakery footer + powered-by */}
      <footer className="bg-ink-deep text-white">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-display text-lg font-extrabold">Bella’s Bakery</p>
              <p className="mt-2 text-sm text-white/60">123 Baker Street, Portland, OR</p>
              <p className="text-sm text-white/60">(503) 555-0142 · hello@bellasbakery.example</p>
            </div>
            <div className="text-sm text-white/60">
              <p className="font-semibold text-white/80">Hours (UTC)</p>
              {hours.map(([day, time]) => (
                <p key={day}>
                  {day}: {time}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
            <p>© 2026 Bella’s Bakery</p>
            <a href="/#early-access" className="text-center font-medium text-white/70 transition hover:text-white sm:text-right">
              Powered by <strong className="text-white">frontdoorapp.co</strong>. Get this for your business →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
