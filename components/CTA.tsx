import { EmailCapture } from "./EmailCapture";

export function CTA() {
  return (
    <section id="early-access" className="border-t border-line bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand/15 bg-linear-to-b from-mist to-white px-6 py-12 text-center shadow-xl shadow-brand/5 sm:px-12 sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-semibold text-ink-soft shadow-sm">
            <span aria-hidden="true">🚧</span> Early development
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-ink sm:text-4xl">
            Be first through the door.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Frontdoor is just getting started. Join the early-access list and we’ll let
            you know the moment it’s ready — and you’ll help shape what it becomes.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <EmailCapture buttonLabel="Join the list" />
          </div>
        </div>
      </div>
    </section>
  );
}
