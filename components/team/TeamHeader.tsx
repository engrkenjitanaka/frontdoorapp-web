import Image from "next/image";
import { ThemeToggle } from "../ThemeToggle";

/**
 * Header for the /team routes. Same brand furniture as the site Header, but the
 * logo returns to the homepage (these aren't the single-page-anchor context) and
 * the nav points at the team index.
 */
export function TeamHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md transition-colors dark:bg-[#0b0e14]/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="/"
          aria-label="frontdoorapp.co, home"
          className="rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
        >
          <Image
            src="/logo-lockup.png"
            alt="frontdoorapp.co"
            width={1543}
            height={322}
            priority
            className="h-8 w-auto transition sm:h-9 dark:brightness-0 dark:invert"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          <a href="/team" className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            Meet the team
          </a>
          <a href="/#included" className="text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            What’s included
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/#early-access"
            className="inline-flex h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-semibold text-white transition hover:bg-ink-deep active:scale-[0.97] focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/20 dark:bg-brand dark:hover:bg-brand-strong"
          >
            Get early access
          </a>
        </div>
      </div>
    </header>
  );
}
