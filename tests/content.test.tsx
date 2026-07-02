import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Features } from "@/components/Features";

const SERVICES = [
  "Landing Page",
  "Social Media Presence",
  "Business Email",
  "Analytics",
  "Content Generation",
  "Social Media Automation",
  "Natural-language Automations",
  "Platform Support",
];

describe("Features section", () => {
  it("renders all eight included services", () => {
    render(<Features />);
    for (const title of SERVICES) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("says Business Email covers newsletters and campaigns", () => {
    render(<Features />);
    expect(screen.getByText(/newsletters and email campaigns/i)).toBeInTheDocument();
  });

  it("has no em-dashes in the rendered copy", () => {
    const { container } = render(<Features />);
    expect(container.textContent).not.toContain("—");
  });
});
