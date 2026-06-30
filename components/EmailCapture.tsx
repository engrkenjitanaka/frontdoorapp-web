"use client";

import { useState } from "react";

type EmailCaptureProps = {
  tone?: "light" | "dark";
  buttonLabel?: string;
};

type Status = "idle" | "loading" | "done" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCapture({
  tone = "light",
  buttonLabel = "Get early access",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [company, setCompany] = useState(""); // honeypot
  const [errorMsg, setErrorMsg] = useState("Something went wrong — please try again.");
  const isDark = tone === "dark";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, company }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
      setEmail("");
    } catch {
      setErrorMsg("Something went wrong — please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className={`flex items-center justify-center gap-2 rounded-2xl border px-5 py-4 text-center text-sm font-medium ${
          isDark
            ? "border-white/15 bg-white/10 text-white"
            : "border-brand/20 bg-mist text-ink"
        }`}
      >
        <span aria-hidden="true">✅</span>
        You’re on the list — we’ll be in touch the moment frontdoorapp.co opens.
      </div>
    );
  }

  const inputId = `email-${tone}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {/* Honeypot — hidden from real users; bots that fill it are dropped server-side. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@yourbusiness.com"
          autoComplete="email"
          className={`h-13 w-full min-w-0 rounded-2xl border px-4 text-base outline-none transition focus:ring-4 sm:flex-1 ${
            isDark
              ? "border-white/15 bg-white/10 text-white placeholder:text-white/50 focus:border-brand-glow focus:ring-brand/30"
              : "border-line bg-white text-ink placeholder:text-ink-soft/60 focus:border-brand focus:ring-brand/15"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-13 shrink-0 items-center justify-center rounded-2xl bg-brand px-6 text-base font-semibold text-white shadow-lg shadow-brand/25 transition active:scale-[0.98] hover:bg-brand-strong focus:outline-none focus:ring-4 focus:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : buttonLabel}
        </button>
      </div>
      <p className={`mt-3 text-sm ${isDark ? "text-white/60" : "text-ink-soft"}`}>
        {status === "error"
          ? errorMsg
          : "Join the early-access list. No spam, just a heads-up when we open the door."}
      </p>
    </form>
  );
}
