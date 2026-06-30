import { IconWindow, IconRepeat, IconSupport } from "./icons";

const steps = [
  {
    n: "01",
    title: "We set it up",
    body: "We handle the hard one-time work — domain and DNS, claiming your accounts, migrating your email, capturing your brand voice, and seeding your first content.",
    icon: <IconWindow className="h-6 w-6" />,
  },
  {
    n: "02",
    title: "Automation keeps it running",
    body: "Once you’re live, automation does the recurring work — posting across channels, drafting replies, and keeping your details current — so your presence stays fresh without you.",
    icon: <IconRepeat className="h-6 w-6" />,
  },
  {
    n: "03",
    title: "A human team has your back",
    body: "For anything that needs a person, our team handles the hard parts — onboarding and ongoing help, so you’re never stuck.",
    icon: <IconSupport className="h-6 w-6" />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-t border-line bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Set up for you. Run on autopilot.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            We do the hard one-time work, automation handles the rest, and a human team
            steps in for anything tricky.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-line bg-cloud p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-brand">
                  {step.icon}
                </span>
                <span className="font-display text-sm font-bold text-brand/70">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
