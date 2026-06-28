import { Wordmark } from "./Wordmark";

const navLinks = [
  { href: "#problem", label: "Why Frontdoor" },
  { href: "#features", label: "Features" },
  { href: "#early-access", label: "Early access" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          aria-label="Frontdoor — back to top"
          className="rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
        >
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#early-access"
          className="inline-flex h-10 items-center justify-center rounded-xl bg-ink px-4 text-sm font-semibold text-white transition hover:bg-ink-deep focus:outline-none focus-visible:ring-4 focus-visible:ring-ink/20"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}
