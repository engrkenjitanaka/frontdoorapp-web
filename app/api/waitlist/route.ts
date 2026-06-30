import { checkBotId } from "botid/server";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  // 1) Invisible bot check (Vercel BotID — no captcha for real users).
  const { isBot } = await checkBotId();
  if (isBot) {
    return NextResponse.json({ error: "Access denied." }, { status: 403 });
  }

  let body: { email?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // 2) Honeypot: real users leave `company` empty. Pretend success, store nothing.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // 3) Server-side validation.
  const email = String(body.email ?? "").trim().toLowerCase();
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  // 4) Store. Sorted set dedupes by email and keeps signup time (view in the Upstash console).
  try {
    const redis = Redis.fromEnv();
    await redis.zadd("waitlist", { score: Date.now(), member: email });
  } catch (err) {
    console.error("waitlist store failed:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
