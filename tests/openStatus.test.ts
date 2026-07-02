import { describe, it, expect } from "vitest";
import { status, fmt } from "@/components/demo/OpenStatus";

// Reference UTC weekdays used below:
//   2026-07-02 Thu · 2026-07-04 Sat · 2026-07-05 Sun · 2026-07-06 Mon
// Bella's UTC hours: Mon–Fri 7:00–18:00, Sat 8:00–18:00, Sun 8:00–14:00.

describe("fmt", () => {
  it("formats minutes-from-midnight as 12-hour time", () => {
    expect(fmt(7 * 60)).toBe("7:00 AM");
    expect(fmt(11 * 60 + 30)).toBe("11:30 AM");
    expect(fmt(12 * 60)).toBe("12:00 PM");
    expect(fmt(14 * 60)).toBe("2:00 PM");
    expect(fmt(18 * 60)).toBe("6:00 PM");
    expect(fmt(0)).toBe("12:00 AM");
  });
});

describe("status", () => {
  it("is open during weekday hours", () => {
    const s = status(new Date("2026-07-02T10:00:00Z")); // Thu 10:00
    expect(s.open).toBe(true);
    expect(s.label).toBe("Open now · closes 6:00 PM UTC");
  });

  it("is open exactly at opening minute, closed exactly at closing minute", () => {
    expect(status(new Date("2026-07-02T07:00:00Z")).open).toBe(true);
    expect(status(new Date("2026-07-02T18:00:00Z")).open).toBe(false);
  });

  it("after close, points to the next day's opening", () => {
    const s = status(new Date("2026-07-02T20:00:00Z")); // Thu 20:00
    expect(s.open).toBe(false);
    expect(s.label).toBe("Closed · opens Fri 7:00 AM UTC");
  });

  it("before open, points to today's opening (no day name)", () => {
    const s = status(new Date("2026-07-02T05:00:00Z")); // Thu 05:00
    expect(s.open).toBe(false);
    expect(s.label).toBe("Closed · opens 7:00 AM UTC");
  });

  it("uses Saturday hours (8–6)", () => {
    const s = status(new Date("2026-07-04T09:00:00Z")); // Sat 09:00
    expect(s.open).toBe(true);
    expect(s.label).toBe("Open now · closes 6:00 PM UTC");
  });

  it("uses Sunday hours (open until 2 PM)", () => {
    expect(status(new Date("2026-07-05T10:00:00Z")).label).toBe("Open now · closes 2:00 PM UTC");
  });

  it("Sunday after 2 PM is closed and points to Monday", () => {
    const s = status(new Date("2026-07-05T15:00:00Z")); // Sun 15:00
    expect(s.open).toBe(false);
    expect(s.label).toBe("Closed · opens Mon 7:00 AM UTC");
  });
});
