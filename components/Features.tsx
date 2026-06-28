import { DoorMark } from "./DoorMark";
import { IconBolt, IconGrid, IconGrowth } from "./icons";

const features = [
  {
    title: "One home for your presence",
    body: "A clean, professional page that represents your business online — the first thing people see when they look you up.",
    icon: <DoorMark className="h-6 w-6" lineClassName="" />,
  },
  {
    title: "Streamlined setup",
    body: "Get up and running quickly, without wrestling with multiple tools or technical know-how. Add your details and you’re live.",
    icon: <IconBolt className="h-6 w-6" />,
  },
  {
    title: "Everything in one place",
    body: "Manage your key business info, links, and updates from a single, simple dashboard — no more juggling accounts.",
    icon: <IconGrid className="h-6 w-6" />,
  },
  {
    title: "Built to grow with you",
    body: "Start simple and add more as your business needs it. Frontdoor grows right alongside you.",
    icon: <IconGrowth className="h-6 w-6" />,
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-line bg-cloud py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            What Frontdoor does
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Everything your presence needs, in one place.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Frontdoor brings your business’s online presence together and keeps it
            simple to manage — so you can spend your time elsewhere.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5 sm:p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{feature.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
