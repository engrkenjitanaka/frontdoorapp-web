const scattered = [
  "Website",
  "Google listing",
  "Instagram",
  "Facebook",
  "Yelp reviews",
  "Opening hours",
  "Online booking",
  "Email list",
];

export function Problem() {
  return (
    <section id="problem" className="border-t border-line bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-brand">
          The problem
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
          Being online shouldn’t be a second job.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Most business owners are great at their craft — but stretched thin when it
          comes to the digital world. Websites, listings, social links, reviews, and
          everything else that makes a business look credible online.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Piecing it all together — or paying several different services to — is
          time-consuming and easy to neglect. The result: great businesses getting
          left behind, simply because keeping up online became a job of its own.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl px-5 sm:px-8">
        <div className="flex flex-wrap justify-center gap-2.5">
          {scattered.map((item) => (
            <span
              key={item}
              className="rounded-xl border border-line bg-cloud px-3.5 py-2 text-sm font-medium text-ink-soft"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-ink-soft">
          Eight tabs. Five logins. One overwhelmed owner.
        </p>
      </div>
    </section>
  );
}
