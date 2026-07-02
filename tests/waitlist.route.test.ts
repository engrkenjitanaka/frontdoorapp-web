import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the two external dependencies of the route before importing it.
const zadd = vi.fn();
vi.mock("botid/server", () => ({ checkBotId: vi.fn() }));
vi.mock("@upstash/redis", () => ({ Redis: vi.fn(() => ({ zadd })) }));

import { checkBotId } from "botid/server";
import { POST } from "@/app/api/waitlist/route";

const post = (body: unknown, raw?: string) =>
  POST(
    new Request("http://localhost/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw ?? JSON.stringify(body),
    }),
  );

describe("POST /api/waitlist", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, "error").mockImplementation(() => {});
    (checkBotId as ReturnType<typeof vi.fn>).mockResolvedValue({ isBot: false });
    process.env.frontdoorapp_KV_REST_API_URL = "https://example.upstash.io";
    process.env.frontdoorapp_KV_REST_API_TOKEN = "test-token";
  });

  it("blocks bots with 403 and stores nothing", async () => {
    (checkBotId as ReturnType<typeof vi.fn>).mockResolvedValue({ isBot: true });
    const res = await post({ email: "a@b.com" });
    expect(res.status).toBe(403);
    expect(zadd).not.toHaveBeenCalled();
  });

  it("rejects an invalid email with 400", async () => {
    const res = await post({ email: "nope" });
    expect(res.status).toBe(400);
    expect(zadd).not.toHaveBeenCalled();
  });

  it("silently 200s but stores nothing when the honeypot is filled", async () => {
    const res = await post({ email: "a@b.com", company: "Acme Inc" });
    expect(res.status).toBe(200);
    expect(zadd).not.toHaveBeenCalled();
  });

  it("stores a valid, lowercased email and returns 200", async () => {
    const res = await post({ email: "Owner@Shop.COM" });
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
    expect(zadd).toHaveBeenCalledWith(
      "waitlist",
      expect.objectContaining({ member: "owner@shop.com" }),
    );
  });

  it("returns 500 when the storage env vars are missing", async () => {
    delete process.env.frontdoorapp_KV_REST_API_URL;
    delete process.env.UPSTASH_REDIS_REST_URL;
    const res = await post({ email: "a@b.com" });
    expect(res.status).toBe(500);
    expect(zadd).not.toHaveBeenCalled();
  });

  it("returns 400 for malformed JSON", async () => {
    const res = await post(undefined, "{ not json");
    expect(res.status).toBe(400);
  });
});
