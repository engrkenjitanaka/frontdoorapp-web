import {
  IconWindow,
  IconChat,
  IconMail,
  IconChart,
  IconPencil,
  IconRepeat,
  IconSparkle,
  IconSupport,
} from "./icons";

const services = [
  {
    title: "Landing Page",
    body: "Business info, hours, contact, Google Maps, menus, services, and social media links, all on one clean page.",
    icon: <IconWindow className="h-6 w-6" />,
  },
  {
    title: "Social Media Presence",
    body: "Facebook, Instagram, X / Twitter, and your Google Business Profile, set up and verified.",
    icon: <IconChat className="h-6 w-6" />,
  },
  {
    title: "Business Email",
    body: "Custom-domain email, with migration and deliverability handled for you.",
    icon: <IconMail className="h-6 w-6" />,
  },
  {
    title: "Analytics",
    body: "A traffic & visibility dashboard that shows where your customers actually come from.",
    icon: <IconChart className="h-6 w-6" />,
  },
  {
    title: "Content Generation",
    body: "On-brand service and product posts, written for you and ready to publish.",
    icon: <IconPencil className="h-6 w-6" />,
  },
  {
    title: "Social Media Automation",
    body: "Auto-posting across platforms and draft-first replies, so your channels stay active.",
    icon: <IconRepeat className="h-6 w-6" />,
  },
  {
    title: "Natural-language Automations",
    body: "Run things by simply asking: calendar, email search, and analysis on command.",
    icon: <IconSparkle className="h-6 w-6" />,
  },
  {
    title: "Platform Support",
    body: "A human team for the hard parts, plus onboarding and ongoing help.",
    icon: <IconSupport className="h-6 w-6" />,
  },
];

export function Features() {
  return (
    <section id="included" className="border-t border-line bg-cloud py-14 sm:py-18">
      <div className="reveal mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            What’s included
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Your entire presence, handled.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Everything customers need to find, trust, and reach you, built and run by
            frontdoorapp.co.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
