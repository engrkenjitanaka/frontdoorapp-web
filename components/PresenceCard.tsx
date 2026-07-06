import Image from "next/image";
import { IconChevron } from "./icons";
import { OpenStatus } from "./demo/OpenStatus";

const links = [
  { label: "Visit our website", icon: "🌐", href: "/demo" },
  { label: "See the menu", icon: "🥐", href: "/demo#menu" },
  { label: "Book a table", icon: "📅", href: "/demo#book" },
  { label: "Read our reviews", icon: "⭐", href: "/demo#reviews" },
];

/**
 * Decorative mock of a Frontdoor "presence" page for a sample business.
 * Purely illustrative, so it's hidden from assistive tech.
 */
export function PresenceCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm animate-float">
      <div className="absolute -right-3 -top-3 z-10 flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-lg shadow-ink/10">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Live in minutes
      </div>

      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-2xl shadow-ink/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/demo/cover.jpg" alt="" className="h-24 w-full object-cover" />

        <div className="px-6 pb-6">
          <div className="-mt-10 mb-4 flex items-end justify-between">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/demo/profile.jpg"
              alt="Bella’s Bakery"
              className="h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-md"
            />
            <span className="mb-1">
              <OpenStatus variant="pill" compact />
            </span>
          </div>

          <h3 className="font-display text-xl font-extrabold text-ink">Bella’s Bakery</h3>
          <p className="mt-1 text-sm text-ink-soft">Artisan breads &amp; pastries · Portland, OR</p>

          <div className="mt-5 space-y-2.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 rounded-xl border border-line bg-cloud px-4 py-3 text-sm font-medium text-ink transition hover:border-brand/40 hover:bg-white"
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
                <IconChevron className="ml-auto h-4 w-4 text-ink-soft" />
              </a>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5 border-t border-line pt-4 text-xs font-medium text-ink-soft">
            <span>Powered by</span>
            <Image
              src="/logo-lockup.png"
              alt="frontdoorapp.co"
              width={1543}
              height={322}
              className="h-4 w-auto dark:brightness-0 dark:invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
