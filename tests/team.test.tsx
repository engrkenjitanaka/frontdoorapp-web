import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import TeamPage from "@/app/team/page";
import CheyserrPage from "@/app/team/cheyserr/page";
import KenjiPage from "@/app/team/kenji/page";
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
    expect(screen.getByRole("heading", { name: /Meet the people behind your frontdoor/i })).toBeInTheDocument();
  });

  it("has a Cheyserr Alejado card linking to /team/cheyserr", () => {
    render(<TeamPage />);
    const card = screen.getByRole("link", { name: /Cheyserr Alejado/ });
    expect(card).toHaveAttribute("href", "/team/cheyserr");
  });

  it("lists Kenji Tanaka as the first card", () => {
    render(<TeamPage />);
    const cards = screen
      .getAllByRole("link")
      .filter((a) => /^\/team\/[a-z]+$/.test(a.getAttribute("href") ?? ""));
    expect(cards[0]).toHaveAttribute("href", "/team/kenji");
    expect(cards[0]).toHaveAccessibleName(/Kenji Tanaka/);
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

describe("/team/kenji profile", () => {
  it("renders the hero headline and all six services", () => {
    render(<KenjiPage />);
    expect(screen.getByRole("heading", { name: /Your frontdoor stays open/i })).toBeInTheDocument();
    for (const title of [
      "Reliability & SRE",
      "Kubernetes & Containers",
      "CI/CD & Automation",
      "Observability",
      "Infrastructure as Code",
      "Databases at Scale",
    ]) {
      // Some titles (Observability, CI/CD) also appear as tech-stack categories,
      // so allow more than one heading match.
      expect(screen.getAllByRole("heading", { name: title }).length).toBeGreaterThan(0);
    }
  });

  it("has a mailto contact and a safe GitHub link", () => {
    render(<KenjiPage />);
    const email = screen.getAllByRole("link", { name: /Get in touch/i })[0];
    expect(email).toHaveAttribute("href", expect.stringContaining("mailto:engr.kenjitanaka@gmail.com"));
    const gh = screen.getAllByRole("link", { name: /GitHub/i })[0];
    expect(gh).toHaveAttribute("href", "https://github.com/engrkenjitanaka");
    expect(gh).toHaveAttribute("target", "_blank");
    expect(gh).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("does not link a personal website", () => {
    render(<KenjiPage />);
    expect(screen.queryByText(/engineerkenji\.com/i)).not.toBeInTheDocument();
  });

  it("makes each certification a clickable Credly link (new tab, safe rel)", () => {
    render(<KenjiPage />);
    const cert = screen.getByRole("link", { name: /Terraform Associate/i });
    expect(cert).toHaveAttribute("href", expect.stringContaining("credly.com/badges/"));
    expect(cert).toHaveAttribute("target", "_blank");
    expect(cert).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("has no em-dashes in the rendered copy", () => {
    const { container } = render(<KenjiPage />);
    expect(container.textContent).not.toContain("—");
  });
});
