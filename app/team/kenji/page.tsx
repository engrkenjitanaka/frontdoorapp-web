import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenji Tanaka · Senior Site Reliability Engineer · frontdoorapp.co",
  description:
    "Kenji Tanaka — the senior site reliability engineer behind frontdoorapp.co. Keeps the platform that runs your digital presence fast, secure, and online around the clock.",
};

/* ---- Icons (brand-styled) ---- */
const iconCls = "h-6 w-6";
const IconShield = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
);
const IconBox = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="M3.27 6.96 12 12l8.73-5.04" /><path d="M12 22V12" /></svg>
);
const IconGit = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="9" r="3" /><path d="M18 12a6 6 0 0 1-6 6H6" /><path d="M6 9v6" /></svg>
);
const IconActivity = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);
const IconTerminal = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3" /><path d="M13 15h4" /></svg>
);
const IconDatabase = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" /></svg>
);
const IconLock = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const IconZap = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const IconEye = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
);
const IconGauge = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M12 14a2 2 0 0 0 2-2c0-1-2-5-2-5s-2 4-2 5a2 2 0 0 0 2 2z" /><path d="M4.5 18a9 9 0 1 1 15 0" /></svg>
);
const IconArrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const IconExternal = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
);

const services = [
  { icon: IconShield, title: "Reliability & SRE", desc: "SLOs, error budgets, on-call, and blameless incident response that keeps systems calm under load." },
  { icon: IconBox, title: "Kubernetes & Containers", desc: "Cluster design and migrations, Docker, and Istio service mesh for workloads that scale cleanly." },
  { icon: IconGit, title: "CI/CD & Automation", desc: "Streamlined pipelines with Jenkins and GitHub Actions so teams ship fast and safely." },
  { icon: IconActivity, title: "Observability", desc: "Metrics, logs, and traces with Prometheus, Grafana, and Elasticsearch. Dashboards and alerts that catch it early." },
  { icon: IconTerminal, title: "Infrastructure as Code", desc: "Reproducible infrastructure on AWS with Terraform and secrets managed in Vault." },
  { icon: IconDatabase, title: "Databases at Scale", desc: "Tuning and operating Cassandra and Aurora clusters for throughput and resilience." },
];

const experience = [
  { role: "Senior Site Reliability Engineer", org: "Quicknode", when: "2025 – present", body: "Keeping a high-throughput Web3 infrastructure platform fast and dependable, with a focus on automation, observability, and infrastructure that scales without drama." },
  { role: "Senior Site Reliability Engineer", org: "Bitcoin.com", when: "2021 – 2025", body: "Founded the SRE team and its practice. Led Kubernetes migrations, optimized database clusters, designed observability platforms, and streamlined CI/CD pipelines across the org." },
];

const aboutPoints = [
  { icon: IconZap, title: "Automation over toil", body: "I script the repetitive work away, so frontdoorapp.co can onboard every business on one reliable, automated backbone instead of hand-built setups." },
  { icon: IconEye, title: "Observable by default", body: "Metrics, logs, and traces on everything we run, so a hiccup on any customer’s presence surfaces to me, not to them." },
  { icon: IconGauge, title: "Calm under load", body: "SLOs, error budgets, and blameless incident response. Traffic spikes and busy launch days are planned for, not fire-fought." },
];

const outcomes = [
  { icon: IconShield, title: "Always open", desc: "SLOs, fast recovery, and calm incident response keep your site, inbox, and pages live, so customers never find a closed door." },
  { icon: IconActivity, title: "Fast, everywhere", desc: "Tuned infrastructure and clean pipelines mean pages load quickly and updates ship without downtime." },
  { icon: IconLock, title: "Secure and recoverable", desc: "Hardened systems, managed secrets, and backups keep your presence and its data safe, whatever happens." },
];

const certGroups = [
  {
    org: "Amazon Web Services",
    items: [
      { name: "Solutions Architect – Professional", url: "https://www.credly.com/badges/383d210b-95e5-40f4-959b-c73508fe9282" },
      { name: "Solutions Architect – Associate", url: "https://www.credly.com/badges/b292d988-21bc-45f9-9d50-0d097df484da" },
      { name: "SysOps Administrator – Associate", url: "https://www.credly.com/badges/79745881-c9eb-4cb6-b3ad-c721e7524ac0" },
      { name: "Developer – Associate", url: "https://www.credly.com/badges/38593f7b-7ff6-4530-a08e-cf172d7973a2" },
      { name: "Cloud Practitioner", url: "https://www.credly.com/badges/fd4a2b60-f8f6-4d55-9b66-b4fe9358e995" },
    ],
  },
  {
    org: "HashiCorp",
    items: [
      { name: "Terraform Associate", url: "https://www.credly.com/badges/a88088d1-eb80-4957-a836-e441bf4a50be" },
      { name: "Vault Associate", url: "https://www.credly.com/badges/38a92390-af1c-45c8-bd6d-bee97a39dae4" },
    ],
  },
  {
    org: "Cisco",
    items: [{ name: "CCNA", url: "https://www.credly.com/badges/cf99399f-8515-4931-b818-3064aba26311" }],
  },
  {
    org: "Microsoft",
    items: [
      { name: "Azure Administrator", url: "https://www.credly.com/badges/a9c5f30b-733a-41e5-888f-5b01cfda6c11" },
      { name: "Azure Fundamentals", url: "https://www.credly.com/badges/084c4ef2-c7ac-4a08-a6ca-2ba21f2d8563" },
      { name: "Azure AI Fundamentals", url: "https://www.credly.com/badges/0efdc725-cc43-4cdb-8376-df0a6c8755c0" },
      { name: "Azure Data Fundamentals", url: "https://www.credly.com/badges/0f65ea15-39ff-4b9d-93e2-2d4469115609" },
    ],
  },
];

const MAILTO = "mailto:engr.kenjitanaka@gmail.com?subject=Reaching%20out%20via%20frontdoorapp.co";
const GITHUB = "https://github.com/engrkenjitanaka";

export default function KenjiPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-14">
          <a href="/team" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
            ← Meet the team
          </a>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 md:grid-cols-[1.15fr_.85fr] md:gap-14">
            <div className="reveal order-2 md:order-1">
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Senior Site Reliability Engineer
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                Your frontdoor stays open.{" "}
                <span className="text-brand">Reliably, at any scale.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Hi, I’m <span className="font-semibold text-brand">Kenji</span>, the site reliability engineer behind frontdoorapp.co. While the team
                builds your website, inbox, and social presence, I keep the platform underneath it
                fast, secure, and online around the clock, so your frontdoor never has an off day.
                Automate the toil, measure everything, stay calm under load: to me, SRE isn’t a job
                title, it’s how a platform earns trust.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={MAILTO} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-strong active:scale-[0.98]">
                  Get in touch {IconArrow}
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-brand/40 active:scale-[0.98]">
                  View GitHub {IconExternal}
                </a>
              </div>
            </div>

            <div className="reveal order-1 md:order-2">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-x-6 bottom-0 top-10 rounded-[2.5rem] bg-mist" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-2xl shadow-ink/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/team/kenji.png" alt="Kenji Tanaka" className="aspect-square w-full object-cover" />
                </div>
              </div>
              <p className="mx-auto mt-5 max-w-xs text-center text-sm text-ink-soft">
                The reason your site never goes down at 2am.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-ink-deep text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
          <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
            More than half a decade in Site Reliability Engineering.
          </p>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/60">
            Keeping high-throughput platforms fast, secure, and online, so the teams building on top
            of them can move fast.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-line">
        <div className="reveal mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">What I do</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              Keep it reliable, observable, and fast.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-ink/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-brand transition duration-300 group-hover:bg-brand group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-cloud">
        <div className="reveal mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Experience</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Where I’ve run production</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Years of keeping high-throughput platforms fast and dependable, and building the teams
              and systems that make that repeatable.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {experience.map((e) => (
              <div key={e.org} className="group rounded-2xl border border-line bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-brand">
                    <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                    {e.org}
                  </span>
                  <span className="text-xs font-medium text-ink-soft">{e.when}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-ink">{e.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">About</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">How I keep your <span className="text-brand">frontdoor</span> dependable</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              I came up through electronics engineering into the space between code and
              infrastructure, and spent more than half a decade running production for a
              high-throughput platform. That taught me that{" "}
              <strong className="font-semibold text-ink">reliability is a feature</strong>, not an
              afterthought, and that the best incident is the one that never pages anyone.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              That’s what frontdoorapp.co runs on. When we tell a business their whole online
              presence will stay live on autopilot, someone has to make that true. I keep the
              platform behind it{" "}
              <strong className="font-semibold text-ink">automated, observable, and calm under load</strong>,
              so every customer’s frontdoor is open when theirs come knocking.
            </p>
          </div>
          <div className="reveal grid gap-4 self-start">
            {aboutPoints.map((p) => (
              <div key={p.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2.5 text-base font-bold text-ink">
                  <span className="text-brand">{p.icon}</span>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT THIS MEANS FOR FRONTDOORAPP */}
      <section className="bg-cloud">
        <div className="reveal mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Reliability</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">What that means for your <span className="text-brand">frontdoor</span></h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              The reliability work is invisible when it’s done right. Here’s what it buys the
              businesses on frontdoorapp.co.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-brand">{o.icon}</div>
                <h3 className="mt-5 text-lg font-bold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-b border-line">
        <div className="reveal mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Certifications</p>
            <h2 className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">Verified credentials</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">Cloud, infrastructure, and networking credentials from AWS, HashiCorp, Cisco, and Microsoft, each verifiable on Credly.</p>
          </div>
          <div className="space-y-4">
            {certGroups.map((group) => (
              <div key={group.org} className="flex flex-col gap-2 border-t border-line pt-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-5">
                <p className="shrink-0 text-xs font-bold uppercase tracking-widest text-ink-soft sm:w-36">{group.org}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((c) => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-sm font-medium text-ink transition hover:border-brand/40 hover:text-brand focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
                    >
                      {c.name}
                      <span className="text-ink-soft transition-colors group-hover:text-brand">{IconExternal}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-ink-deep text-white">
        <div className="reveal mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-glow">Contact</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Let’s build something reliable.</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Working on hard infrastructure, scaling, or reliability problems? I’m always up for a
              good systems conversation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={MAILTO} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-strong active:scale-[0.98]">
                Get in touch {IconArrow}
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15 active:scale-[0.98]">
                View GitHub {IconExternal}
              </a>
            </div>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-8 border-t border-white/15 pt-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Email</p>
              <a href={MAILTO} className="mt-1.5 block break-words text-sm text-white/90 transition hover:text-brand-glow">engr.kenjitanaka@gmail.com</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">GitHub</p>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="mt-1.5 block break-words text-sm text-white/90 transition hover:text-brand-glow">@engrkenjitanaka</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Based in</p>
              <p className="mt-1.5 text-sm text-white/90">Greater Tokyo Area</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Focus</p>
              <p className="mt-1.5 text-sm text-white/90">Site Reliability</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
