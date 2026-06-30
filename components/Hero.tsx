import { EmailCapture } from "./EmailCapture";
import { PresenceCard } from "./PresenceCard";

const trust = ["Done for you", "Live in days", "Runs on autopilot"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_-10%,var(--color-mist),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(var(--color-line)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-10 lg:pb-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-mist px-3.5 py-1.5 text-sm font-semibold text-brand-strong">
            <span aria-hidden="true">🚪</span> Now in early access
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] text-ink sm:text-5xl lg:text-[3.25rem]">
            You do what you do best.{" "}
            <span className="text-brand">We make the world see it.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            The managed digital presence for businesses.{" "}
            <span className="font-semibold text-ink">Set up for you, run on autopilot.</span>{" "}
            We build your website, social media, business email, reviews, and content into one
            front door, then keep it all running.
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
