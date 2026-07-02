import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmailCapture } from "@/components/EmailCapture";

describe("EmailCapture", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("rejects an invalid email inline and never calls the API", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<EmailCapture />);

    await user.type(screen.getByLabelText("Email address"), "not-an-email");
    await user.click(screen.getByRole("button", { name: /get early access/i }));

    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts a valid email (with empty honeypot) and shows success", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<EmailCapture />);

    await user.type(screen.getByLabelText("Email address"), "owner@shop.com");
    await user.click(screen.getByRole("button", { name: /get early access/i }));

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/waitlist",
      expect.objectContaining({ method: "POST" }),
    );
    const body = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(body).toEqual({ email: "owner@shop.com", company: "" });
    expect(await screen.findByText(/on the list/i)).toBeInTheDocument();
  });

  it("surfaces an error when the server responds non-ok", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    const user = userEvent.setup();
    render(<EmailCapture />);

    await user.type(screen.getByLabelText("Email address"), "owner@shop.com");
    await user.click(screen.getByRole("button", { name: /get early access/i }));

    expect(
      await screen.findByText("Something went wrong. Please try again."),
    ).toBeInTheDocument();
  });
});
