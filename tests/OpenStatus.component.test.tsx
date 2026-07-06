import { describe, it, expect, afterEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { OpenStatus } from "@/components/demo/OpenStatus";

// Guards the homepage/demo consistency: both render <OpenStatus>, so the pill
// (homepage PresenceCard) reflects the same clock the demo overlay does.
describe("OpenStatus component", () => {
  afterEach(() => vi.useRealTimers());

  it("pill+compact shows 'Closed' outside hours", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-02T20:00:00Z")); // Thu 20:00 UTC → closed
    render(<OpenStatus variant="pill" compact />);
    expect(screen.getByText("Closed")).toBeInTheDocument();
    expect(screen.queryByText("Open now")).not.toBeInTheDocument();
  });

  it("pill+compact shows 'Open now' during hours", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-02T10:00:00Z")); // Thu 10:00 UTC → open
    render(<OpenStatus variant="pill" compact />);
    expect(screen.getByText("Open now")).toBeInTheDocument();
  });

  it("overlay shows the full label with the closing time", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-07-02T10:00:00Z")); // Thu 10:00 UTC → open
    render(<OpenStatus />);
    expect(screen.getByText("Open now · closes 6:00 PM UTC")).toBeInTheDocument();
  });
});
