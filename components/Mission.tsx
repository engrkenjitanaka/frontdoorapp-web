export function Mission() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_30%,rgba(96,165,250,0.16),transparent_70%)]"
      />

      <div className="reveal relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-glow">
          The promise
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
          One frontdoor, every channel.{" "}
          <span className="text-brand-glow">Near-zero effort from you</span>.
        </h2>
      </div>
    </section>
  );
}
