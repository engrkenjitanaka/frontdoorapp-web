import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const nextConfig: NextConfig = {
  // Frontdoor landing page — Vercel auto-detects Next.js (zero config).
};

// withBotId wires the proxy rewrites used by the invisible BotID check
// (see app/api/waitlist + instrumentation-client.ts).
export default withBotId(nextConfig);
