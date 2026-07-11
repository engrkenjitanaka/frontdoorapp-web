"use client";

import { useEffect, useState } from "react";

// Every 30 min across opening hours (7:00 AM – 5:30 PM).
const TIMES = Array.from({ length: 22 }, (_, i) => {
  const mins = 7 * 60 + i * 30;
  const h = Math.floor(mins / 60);
  const period = h < 12 ? "AM" : "PM";
  const hh = ((h + 11) % 12) + 1;
  return `${hh}:${String(mins % 60).padStart(2, "0")} ${period}`;
});

const inputCls =
  "h-12 w-full min-w-0 rounded-xl border border-line bg-white px-3.5 text-base text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

const fmt = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function BookingForm() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [minDate, setMinDate] = useState("");

  // Default the reservation to tomorrow (and disallow past dates). Done after
  // mount so the static prerender and the client agree (no hydration mismatch).
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    setMinDate(fmt(today));
    setDate(fmt(tomorrow));
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true); // Demo only — nothing is actually booked.
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-400/25 dark:bg-emerald-400/10">
        <div className="text-2xl" aria-hidden="true">
          ✅
        </div>
        <p className="mt-2 font-display text-lg font-bold text-ink">
          Table requested{name ? `, ${name.split(" ")[0]}` : ""}!
        </p>
        <p className="mt-1 text-sm text-ink-soft">
          Bella’s would text you a confirmation shortly. (This is a demo, so nothing was
          actually booked.)
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-4 text-sm font-semibold text-brand transition hover:text-brand-strong"
        >
          ← Make another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Date</span>
        <input
          type="date"
          required
          min={minDate}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`${inputCls} appearance-none`}
          aria-label="Reservation date"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Time</span>
        <select required defaultValue="9:00 AM" className={inputCls} aria-label="Reservation time">
          {TIMES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Party size</span>
        <select required defaultValue="2" className={inputCls} aria-label="Party size">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-ink">Your name</span>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className={inputCls}
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 items-center justify-center rounded-xl bg-brand px-6 text-base font-semibold text-white shadow-lg shadow-brand/25 transition active:scale-[0.98] hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand/30 sm:col-span-2"
      >
        Request a table
      </button>
    </form>
  );
}
