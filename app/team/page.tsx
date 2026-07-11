import type { Metadata } from "next";
import { IconChevron } from "@/components/icons";

export const metadata: Metadata = {
  title: "Meet the team · frontdoorapp.co",
  description:
    "The people behind frontdoorapp.co — the specialists who set up and run your business's digital presence.",
};

type Member = {
  slug: string;
  name: string;
  role: string;
  blurb: string;
  photo: string;
  tags: string[];
};

const team: Member[] = [
  {
    slug: "cheyserr",
    name: "Cheyserr Alejado",
    role: "Virtual Assistant · Admin, CRM & Lead Generation",
    blurb:
      "Keeps daily operations organized for founders and clinic owners: CRM upkeep, lead follow-ups, and client communication, handled accurately on US hours.",
    photo: "/team/cheyserr.png",
    tags: ["Healthcare-fluent", "CRM & data", "Lead generation"],
  },
];

export default function TeamPage() {
  return (
    <div className="bg-cloud">
      {/* Intro */}
      <section className="border-b border-line">
        <div className="reveal mx-auto max-w-6xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">Our team</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-extrabold text-ink sm:text-5xl">
            Meet the people behind your front door.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            frontdoorapp.co is a done-for-you service, which means real specialists do the work.
            Here are the people who set up and run your digital presence.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <a
                key={m.slug}
                href={`/team/${m.slug}`}
                className="group flex flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
              >
                <div className="flex items-center gap-4">
                  <span className="relative inline-flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-mist ring-1 ring-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full scale-110 object-cover object-top"
                    />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-extrabold text-ink">{m.name}</h2>
                    <p className="mt-1 text-sm font-medium text-brand">{m.role}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ink-soft">{m.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-brand-strong"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  View profile
                  <IconChevron className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
