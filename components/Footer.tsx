import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div className="max-w-sm">
          <Wordmark tone="white" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Open the door to your business’s online presence. We set it up and keep it
            running, so you can focus on what you do best.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href="/team"
            className="font-medium text-white/70 transition-colors hover:text-white"
          >
            Meet the team
          </a>
          <p className="text-white/50">© 2026 frontdoorapp.co</p>
        </div>
      </div>
    </footer>
  );
}
