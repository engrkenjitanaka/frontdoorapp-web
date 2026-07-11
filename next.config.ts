import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

// Defense-in-depth security response headers, applied to every route.
// CSP allows 'unsafe-inline' for scripts/styles because the app ships one
// trusted inline script (the no-flash theme setter in app/layout.tsx) and
// Next/Tailwind inline styles; there are no XSS sinks and no user-generated
// HTML. BotID and the waitlist run same-origin (withBotId proxy), so 'self'
// covers script/connect. Tighten to nonces if a dynamic server layer is added.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  // Frontdoor landing page — Vercel auto-detects Next.js (zero config).
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

// withBotId wires the proxy rewrites used by the invisible BotID check
// (see app/api/waitlist + instrumentation-client.ts).
export default withBotId(nextConfig);
