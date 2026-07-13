import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheyserr Alejado · Virtual Assistant · frontdoorapp.co",
  description:
    "Cheyserr Alejado — virtual assistant for founders and clinic owners. Admin, CRM upkeep, lead generation, and client communication, handled accurately on US hours.",
};

/* ---- Icons (brand-styled, matching the site's icon set) ---- */
const iconCls = "h-6 w-6";
const IconUsers = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const IconCalendar = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
);
const IconMailIn = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const IconTrend = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const IconClipboard = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={iconCls} aria-hidden="true"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="m9 14 2 2 4-4" /></svg>
);
const IconHeart = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>
);
const IconBolt = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const IconCheck = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
);
const IconArrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const IconDownload = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);
const IconChevronDown = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
);

const stats = [
  { h: "6 roles", p: "across executive support, admin, lead generation and training" },
  { h: "3 industries", p: "healthcare, education and service businesses" },
  { h: "Nursing background", p: "patient-facing language and sensitive data handled with care" },
  { h: "US hours", p: "flexible coverage matched to your schedule" },
];

const services = [
  { icon: IconUsers, title: "CRM & Data Management", desc: "Accurate updates, clean data, and organized systems you can rely on." },
  { icon: IconCalendar, title: "Scheduling & Calendar Management", desc: "Appointments, meetings, and calendars, handled with care." },
  { icon: IconMailIn, title: "Client Communication & Support", desc: "Timely, professional replies that keep clients happy and informed." },
  { icon: IconTrend, title: "Lead Follow-ups & Outreach", desc: "Consistent follow-ups that turn leads into loyal clients." },
  { icon: IconClipboard, title: "Admin & Operational Support", desc: "From inbox to reports, I keep your daily operations smooth and stress-free." },
];

const experience = [
  { role: "Training Supervisor", org: "GoPro & Concentrix", body: "Coordinated vendors on logistics and scheduling, ran planning and reporting, delivered business review presentations, screened applicants, and managed team performance. Executive-level coordination that maps directly to high-level VA support.", tags: ["Executive support", "Reporting", "Vendor coordination"] },
  { role: "Training & Hiring Manager", org: "Medical VA company", body: "Hired and trained healthcare professionals for remote VA roles, covering onboarding, skills training, and process guidance. I know what great VA work looks like because I taught it.", tags: ["Healthcare", "Onboarding", "Coaching"] },
  { role: "Admin Virtual Assistant", org: "Mathnasium of Killarney", body: "Student data updates, appointment scheduling, and document checking to support daily center operations, with a focus on accuracy and consistent communication.", tags: ["Scheduling", "Data accuracy"] },
  { role: "Lead Generation Specialist", org: "Showtech", body: "Supported business development end to end: prospecting, lead research, live cold calls, and email outreach.", tags: ["Cold calling", "Prospecting", "Outreach"] },
  { role: "Social Media Manager", org: "Edillon Multi-Specialty Clinics · Salon Suites of San Antonio · Spencer’s Kitchen", body: "Managed content, brand communication, and community engagement for three US businesses, including a medical clinic, where healthcare-appropriate messaging was non-negotiable.", tags: ["Content planning", "Community engagement"] },
  { role: "Customer & Finance Support", org: "BPO, large US accounts", body: "Years of experience resolving billing inquiries, disputes, and general concerns for major accounts, plus training and coaching the teams who did the same.", tags: ["Billing", "Dispute resolution", "Team coaching"] },
];

const aboutPoints = [
  { icon: IconHeart, title: "Healthcare-fluent", body: "A nursing background means patient-facing language, privacy, and sensitive information are second nature, not a learning curve." },
  { icon: IconBolt, title: "Fast tool learner", body: "GoHighLevel, Mailchimp, ClickUp, Salesforce, and whatever your stack is. I adapt to your systems, not the other way around." },
  { icon: IconCheck, title: "Trainer’s discipline", body: "I’ve onboarded and coached whole teams, so I document processes as I work. You get SOPs, not mystery workflows." },
];

const coreTools = [
  { logo: "ghl.png", name: "GoHighLevel", sub: "CRM & funnels" },
  { logo: "mailchimp.svg", name: "Mailchimp", sub: "Email marketing" },
  { logo: "googleworkspace.png", name: "Google Workspace", sub: "Docs & ops" },
  { logo: "clickup.png", name: "ClickUp", sub: "Project mgmt" },
  { logo: "salesforce.svg", name: "Salesforce", sub: "CRM" },
];

const toolkit = [
  { cat: "CRM, Funnels & Marketing", pills: ["GoHighLevel", "Salesforce", "ActiveCampaign", "Mailchimp", "Kajabi", "Thinkific"] },
  { cat: "Website & Content", pills: ["WordPress", "Elementor", "GoDaddy Builder", "Wix", "Canva", "CapCut"] },
  { cat: "Productivity & Docs", pills: ["Google Workspace", "Microsoft 365", "Slack", "Zoom", "Loom", "ClickUp"] },
  { cat: "Ads & Social", pills: ["Meta Ads Manager", "TikTok Ads Manager", "Facebook & Instagram"] },
  { cat: "Operations & Tracking", pills: ["ActivTrak", "Lead tracking sheets", "SOP documentation", "Workflow tracking"] },
  { cat: "AI Tools", pills: ["ChatGPT", "Claude", "Gemini"] },
];

const faqs = [
  { q: "What hours do you work?", a: "US timezone hours, flexible to fit your schedule, whether that’s East Coast mornings or West Coast afternoons. We agree on core overlap hours during the discovery call." },
  { q: "Do you have real healthcare experience?", a: "Yes. A nursing background, social media management for a multi-specialty medical clinic, and a role hiring and training healthcare professionals as remote medical VAs. Patient-appropriate communication is second nature." },
  { q: "What if you don’t know our tools?", a: "I’ve worked across GoHighLevel, Mailchimp, Salesforce, ClickUp, and more, and I pick up new systems quickly on my own time. If your stack is unusual, I’ll learn it during the trial week at no risk to you." },
  { q: "Part-time or full-time?", a: "Both. Most clients start part-time with a defined task list and expand as trust builds. Tell me what you need covered and we’ll shape the engagement around it." },
  { q: "How do we get started?", a: "Email me what’s slipping through the cracks. We’ll book a short discovery call, pick the first tasks to hand off, and start with a trial week so you can see the work before committing." },
];

const MAILTO = "mailto:alejadocheyserr@gmail.com?subject=Discovery%20call%20with%20Cheyserr";

export default function CheyserrPage() {
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
                Virtual Assistant · Admin, CRM &amp; Lead Generation
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                Delegate the details.{" "}
                <span className="text-brand">Drive the growth.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                Hi, I’m <span className="font-semibold text-brand">Cheyserr</span>! I provide specialized administrative support for healthcare and
                service-based businesses. From CRM updates and lead follow-ups to smooth client
                communication, I keep your daily operations organized. Delegate the details to me,
                and get your time back to focus on the big picture.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row [&>a]:w-full sm:[&>a]:w-auto">
                <a href={MAILTO} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-strong active:scale-[0.98]">
                  Book a discovery call {IconArrow}
                </a>
                <a href="/team/cheyserr-resume.pdf" download className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white px-6 text-sm font-semibold text-ink transition hover:border-brand/40 active:scale-[0.98]">
                  Download résumé {IconDownload}
                </a>
              </div>
            </div>

            <div className="reveal order-1 md:order-2">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-x-6 bottom-0 top-10 rounded-[2.5rem] bg-mist" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white shadow-2xl shadow-ink/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/team/cheyserr.png" alt="Cheyserr Alejado" className="aspect-square w-full object-cover object-top" />
                </div>
              </div>
              <p className="mx-auto mt-5 max-w-xs text-center text-sm text-ink-soft">
                Built on a nursing background, hands-on experience with medical clinics, and proven
                expertise training remote medical VAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-ink-deep text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.h} className="border-l border-white/15 pl-4">
              <p className="font-display text-xl font-bold">{s.h}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-line">
        <div className="reveal mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">How I can help</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
              I handle the behind-the-scenes, so you can focus on what matters.
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
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Where I’ve done this before</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              From supervising training teams to running lead lists, the same skills your business
              needs, proven in real roles.
            </p>
          </div>
          <ol className="mt-12 max-w-3xl space-y-0 border-l border-line">
            {experience.map((e) => (
              <li key={e.role} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand bg-cloud" aria-hidden="true" />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-bold text-ink">{e.role}</h3>
                  <span className="text-sm font-semibold text-brand">{e.org}</span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{e.body}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink-soft">{t}</span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">About</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Why clients hand me the keys</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              I started in nursing, moved into BPO customer and finance support, and worked my way
              up to supervising training teams. That path taught me two things most VAs never get:{" "}
              <strong className="font-semibold text-ink">how to handle sensitive, patient-facing communication</strong>, and{" "}
              <strong className="font-semibold text-ink">how to run operations for other people at scale</strong>.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Today I bring that to founders and clinic owners who need someone dependable in the
              background, someone who picks up new tools fast, documents what she does, and keeps
              daily operations running <strong className="font-semibold text-ink">without hand-holding</strong>.
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

      {/* TOOLS */}
      <section className="bg-cloud">
        <div className="reveal mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">Tools</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Systems I work in every day</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              The core stack I reach for most, plus a deeper toolkit ready when a project needs it.
              New platform? I’ll learn it on my own time, not yours.
            </p>
          </div>

          <p className="mt-10 text-xs font-bold uppercase tracking-widest text-ink-soft">Core stack</p>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {coreTools.map((t) => (
              <div key={t.name} className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-cloud p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/team/tools/${t.logo}`} alt="" className="h-full w-full object-contain" loading="lazy" />
                </span>
                <span className="mt-3 text-sm font-semibold text-ink">{t.name}</span>
                <span className="text-xs text-ink-soft">{t.sub}</span>
              </div>
            ))}
            <div className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg">
              <span className="flex h-11 items-center justify-center gap-1.5 rounded-xl border border-line bg-cloud px-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/team/tools/chatgpt.svg" alt="" className="h-5 w-5 object-contain" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/team/tools/claude.svg" alt="" className="h-5 w-5 object-contain" loading="lazy" />
              </span>
              <span className="mt-3 text-sm font-semibold text-ink">ChatGPT &amp; Claude</span>
              <span className="text-xs text-ink-soft">AI workflow</span>
            </div>
          </div>

          <p className="mt-12 text-xs font-bold uppercase tracking-widest text-ink-soft">Full toolkit</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((g) => (
              <div key={g.cat} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
                <h3 className="text-sm font-bold text-ink">{g.cat}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.pills.map((p) => (
                    <span key={p} className="rounded-full border border-line bg-cloud px-2.5 py-1 text-xs font-medium text-ink-soft">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-line">
        <div className="reveal mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">FAQ</p>
            <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">Questions clients usually ask</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-line bg-white px-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  {IconChevronDown}
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-ink-deep text-white">
        <div className="reveal mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-glow">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Ready to get your time back?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Tell me what’s slipping through the cracks, and I’ll reply within one business day with
            how I’d handle it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center [&>a]:w-full sm:[&>a]:w-auto">
            <a href={MAILTO} className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-strong active:scale-[0.98]">
              Book a discovery call {IconArrow}
            </a>
            <a href="/team/cheyserr-resume.pdf" download className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15 active:scale-[0.98]">
              Download résumé {IconDownload}
            </a>
          </div>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-8 border-t border-white/15 pt-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Email</p>
              <a href="mailto:alejadocheyserr@gmail.com" className="mt-1.5 block break-words text-sm text-white/90 transition hover:text-brand-glow">alejadocheyserr@gmail.com</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Phone / WhatsApp</p>
              <a href="tel:+639271139529" className="mt-1.5 block text-sm text-white/90 transition hover:text-brand-glow">+63 927 113 9529</a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Based in</p>
              <p className="mt-1.5 text-sm text-white/90">Polomolok, Philippines</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50">Working hours</p>
              <p className="mt-1.5 text-sm text-white/90">US timezone, flexible</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
