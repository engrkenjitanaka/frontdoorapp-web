import { DoorMark } from "./DoorMark";

export function Mission() {
  return (
    <section className="relative overflow-hidden bg-ink-deep py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_30%,rgba(96,165,250,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
          <DoorMark className="h-8 w-8 text-white" lineClassName="text-brand-glow" />
        </div>
        <p className="text-sm font-bold uppercase tracking-widest text-brand-glow">
          The goal
        </p>
        <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
          Spend less time managing your online presence — and more time on your{" "}
          <span className="text-brand-glow">actual business</span>.
        </h2>
      </div>
    </section>
  );
}
