import { Wordmark } from "./Wordmark";

const REPO_URL = "https://github.com/engrkenjitanaka/frontdoorapp-web";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Wordmark tone="white" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Open the door to your business’s online presence. Set it up once, and
              focus on what you do best.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm" aria-label="Footer">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Frontdoor
            </span>
            <a href="#features" className="text-white/70 transition-colors hover:text-white">
              Features
            </a>
            <a href="#early-access" className="text-white/70 transition-colors hover:text-white">
              Early access
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>© 2026 Frontdoor · frontdoorapp.co</p>
          <p className="inline-flex items-center gap-2">
            <span aria-hidden="true">🚧</span> Early development — building in the open.
          </p>
        </div>
      </div>
    </footer>
  );
}
