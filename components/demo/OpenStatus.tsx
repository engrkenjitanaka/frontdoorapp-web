"use client";

import { useEffect, useState } from "react";

// Bella's opening hours in UTC, by day of week (0 = Sun … 6 = Sat), minutes from midnight.
// (This demo pins the store to UTC; a real Frontdoor site would store the business's tz.)
const HOURS: Record<number, { open: number; close: number } | undefined> = {
  0: { open: 8 * 60, close: 14 * 60 }, // Sun 8:00 AM – 2:00 PM
  1: { open: 7 * 60, close: 18 * 60 }, // Mon 7:00 AM – 6:00 PM
  2: { open: 7 * 60, close: 18 * 60 },
  3: { open: 7 * 60, close: 18 * 60 },
  4: { open: 7 * 60, close: 18 * 60 },
  5: { open: 7 * 60, close: 18 * 60 },
  6: { open: 8 * 60, close: 18 * 60 }, // Sat 8:00 AM – 6:00 PM
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function fmt(mins: number) {
  const h = Math.floor(mins / 60) % 24;
  const period = h < 12 ? "AM" : "PM";
  const hh = ((h + 11) % 12) + 1;
  return `${hh}:${String(mins % 60).padStart(2, "0")} ${period}`;
}

// Compares "now" (as a UTC instant, derived from the visitor's clock) against the
// store's UTC hours, so it's correct regardless of where the visitor is.
export function status(now: Date): { open: boolean; label: string } {
  const day = now.getUTCDay();
  const mins = now.getUTCHours() * 60 + now.getUTCMinutes();
  const today = HOURS[day];

  if (today && mins >= today.open && mins < today.close) {
    return { open: true, label: `Open now · closes ${fmt(today.close)} UTC` };
  }
  if (today && mins < today.open) {
    return { open: false, label: `Closed · opens ${fmt(today.open)} UTC` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = HOURS[d];
    if (h) return { open: false, label: `Closed · opens ${DAYS[d]} ${fmt(h.open)} UTC` };
  }
  return { open: false, label: "Closed" };
}

type OpenStatusProps = {
  // "overlay" sits on the demo's photo hero (white text); "pill" sits on a light
  // card (the homepage PresenceCard). Both share the same open/closed computation.
  variant?: "overlay" | "pill";
  // Compact drops the "· closes … UTC" detail — for tight badges like the hero card.
  compact?: boolean;
};

export function OpenStatus({ variant = "overlay", compact = false }: OpenStatusProps) {
  // Computed after mount so SSR/hydration match and it reflects the visitor's current time.
  const [state, setState] = useState<{ open: boolean; label: string } | null>(null);
  useEffect(() => {
    setState(status(new Date()));
  }, []);

  const label = state ? (compact ? (state.open ? "Open now" : "Closed") : state.label) : "Hours in UTC";

  if (variant === "pill") {
    const tone = state
      ? state.open
        ? "bg-emerald-50 text-emerald-700"
        : "bg-rose-50 text-rose-700"
      : "bg-cloud text-ink-soft";
    const dot = state ? (state.open ? "bg-emerald-500" : "bg-rose-500") : "bg-ink-soft/40";
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        {label}
      </span>
    );
  }

  const dot = state ? (state.open ? "bg-emerald-400" : "bg-rose-400") : "bg-white/50";
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
