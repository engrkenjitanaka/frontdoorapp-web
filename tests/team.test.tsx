import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import TeamPage from "@/app/team/page";
import CheyserrPage from "@/app/team/cheyserr/page";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("has a 'Meet the team' link pointing to /team", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Meet the team" })).toHaveAttribute("href", "/team");
  });
});

describe("/team page", () => {
  it("shows the intro heading", () => {
    render(<TeamPage />);
    expect(screen.getByRole("heading", { name: /Meet the people behind your front door/i })).toBeInTheDocument();
  });

  it("has a Cheyserr Alejado card linking to /team/cheyserr", () => {
    render(<TeamPage />);
    const card = screen.getByRole("link", { name: /Cheyserr Alejado/ });
    expect(card).toHaveAttribute("href", "/team/cheyserr");
  });

  it("has no em-dashes in the rendered copy", () => {
    const { container } = render(<TeamPage />);
    expect(container.textContent).not.toContain("—");
  });
});

describe("/team/cheyserr profile", () => {
  it("renders the hero headline and all five services", () => {
    render(<CheyserrPage />);
    expect(screen.getByRole("heading", { name: /Delegate the details/i })).toBeInTheDocument();
    for (const title of [
      "CRM & Data Management",
      "Scheduling & Calendar Management",
      "Client Communication & Support",
      "Lead Follow-ups & Outreach",
      "Admin & Operational Support",
    ]) {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
  });

  it("exposes the contact email and a downloadable résumé", () => {
    render(<CheyserrPage />);
    expect(screen.getByRole("link", { name: "alejadocheyserr@gmail.com" })).toHaveAttribute(
      "href",
      "mailto:alejadocheyserr@gmail.com",
    );
    const resume = screen.getAllByRole("link", { name: /Download résumé/i })[0];
    expect(resume).toHaveAttribute("href", "/team/cheyserr-resume.pdf");
  });

  it("renders the FAQ questions", () => {
    render(<CheyserrPage />);
    expect(screen.getByText(/What hours do you work\?/)).toBeInTheDocument();
    expect(screen.getByText(/How do we get started\?/)).toBeInTheDocument();
  });

  it("has no em-dashes in the rendered copy", () => {
    const { container } = render(<CheyserrPage />);
    expect(container.textContent).not.toContain("—");
  });
});
