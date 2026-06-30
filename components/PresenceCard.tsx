import Image from "next/image";
import { IconChevron } from "./icons";

const links = [
  { label: "Visit our website", icon: "🌐" },
  { label: "See the menu", icon: "🥐" },
  { label: "Book a table", icon: "📅" },
  { label: "Read our reviews", icon: "⭐" },
];

/**
 * Decorative mock of a Frontdoor "presence" page for a sample business.
 * Purely illustrative, so it's hidden from assistive tech.
 */
export function PresenceCard() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm animate-float">
      <div className="absolute -right-3 -top-3 z-10 flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-lg shadow-ink/10">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Live in minutes
      </div>

      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-2xl shadow-ink/10">
        <div className="h-24 bg-linear-to-br from-brand via-brand-light to-brand-glow" />

        <div className="px-6 pb-6">
          <div className="-mt-10 mb-4 flex items-end justify-between">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-linear-to-br from-amber-400 to-orange-500 font-display text-2xl font-extrabold text-white shadow-md">
              BB
            </div>
            <span className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open now
            </span>
          </div>

          <h3 className="font-display text-xl font-extrabold text-ink">Bella’s Bakery</h3>
          <p className="mt-1 text-sm text-ink-soft">Artisan breads &amp; pastries · Portland, OR</p>

          <div className="mt-5 space-y-2.5">
            {links.map((link) => (
              <div
                key={link.label}
                className="flex items-center gap-3 rounded-xl border border-line bg-cloud px-4 py-3 text-sm font-medium text-ink"
              >
                <span>{link.icon}</span>
                {link.label}
                <IconChevron className="ml-auto h-4 w-4 text-ink-soft" />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5 border-t border-line pt-4 text-xs font-medium text-ink-soft">
            <span>Powered by</span>
            <Image
              src="/logo-lockup.png"
              alt="frontdoorapp.co"
              width={1520}
              height={400}
              className="h-4 w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
