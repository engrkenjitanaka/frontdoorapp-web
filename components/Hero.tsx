import { EmailCapture } from "./EmailCapture";
import { PresenceCard } from "./PresenceCard";

const trust = ["No website needed", "Ready in minutes", "Grows with you"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_-10%,var(--color-mist),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-mist px-3.5 py-1.5 text-sm font-semibold text-brand-strong">
            <span aria-hidden="true">🚪</span> Now in early access
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Your business’s digital <span className="text-brand">front door</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Set up once, focus on what you do best. Frontdoor brings your website,
            links, hours, and reviews — your whole online presence — into one clean
            page that’s simple to manage.
          </p>

          <div className="mt-8 max-w-lg">
            <EmailCapture />
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink-soft">
            {trust.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="text-brand" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-6">
          <PresenceCard />
        </div>
      </div>
    </section>
  );
}
