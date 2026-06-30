const channels = [
  "Website",
  "Facebook",
  "Instagram",
  "X / Twitter",
  "Google Business Profile",
  "Business email",
  "Reviews",
  "Analytics",
  "Content",
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-line bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brand">
          The problem
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          A digital presence is table stakes. Building one shouldn’t be your job.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Website, social media, reviews, business email, content — it’s how customers find
          and trust you. But pulling it together means stitching 6+ tools, hiring a
          freelancer, or doing nothing at all.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          It’s a tax on the people least equipped to pay it — the ones who just want to
          run their business.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-5 sm:px-8">
        <div className="flex flex-wrap justify-center gap-2.5">
          {channels.map((item) => (
            <span
              key={item}
              className="rounded-xl border border-line bg-cloud px-3.5 py-2 text-sm font-medium text-ink-soft"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-ink-soft">
          6+ tools to stitch together. Or a freelancer. Or nothing at all.
        </p>
      </div>
    </section>
  );
}
