import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import React from "react";

// Unmount React trees between tests so queries don't see stale DOM.
afterEach(() => cleanup());

// next/image needs the Next runtime; swap it for a plain <img> so any
// image-using component renders in jsdom.
vi.mock("next/image", () => ({
  default: ({ priority: _priority, fill: _fill, ...props }: Record<string, unknown>) =>
    React.createElement("img", props),
}));
