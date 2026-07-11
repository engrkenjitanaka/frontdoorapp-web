"use client";

import { useEffect, useRef } from "react";

/**
 * Auto-scrolling horizontal strip that is ALSO manually scrollable:
 * - touch / trackpad swipe scrolls natively (touch-action: pan-x)
 * - click-and-drag scrolls with the mouse
 * - press-and-hold pauses the auto-scroll (no pause on hover)
 * Auto-scroll backs off whenever the user is interacting or the strip is still
 * being scrolled (incl. touch momentum), then resumes once motion goes idle, so
 * it never fights the user's input. Children should be passed already duplicated
 * (two copies) for a seamless loop.
 */
export function Marquee({
  children,
  className = "",
  speed = 48,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const holding = useRef(false);
  const idleUntil = useRef(0);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = 0;
    // Track position as a float: scrollLeft rounds to an integer, so adding a
    // sub-pixel delta each frame would round away and never advance.
    let pos = el.scrollLeft;
    let applied = el.scrollLeft;

    const tick = (t: number) => {
      const dt = last ? t - last : 0;
      last = t;
      const busy = holding.current || t < idleUntil.current;
      if (busy) {
        pos = el.scrollLeft; // user is in control; stay in sync, don't move
      } else {
        const half = el.scrollWidth / 2;
        pos += speed * (dt / 1000);
        if (half > 0 && pos >= half) pos -= half;
        el.scrollLeft = pos;
        applied = el.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // A scroll we didn't produce (native swipe / momentum) → back off briefly.
    const onScroll = () => {
      if (Math.abs(el.scrollLeft - applied) > 2) idleUntil.current = performance.now() + 600;
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    holding.current = true; // hold to stop
    if (e.pointerType === "mouse") {
      const el = ref.current!;
      drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
      el.setPointerCapture?.(e.pointerId);
    }
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    ref.current!.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };
  const release = () => {
    drag.current.active = false;
    holding.current = false;
    idleUntil.current = performance.now() + 600; // let momentum settle before resuming
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
      onDragStart={(e) => e.preventDefault()}
      className={`flex cursor-grab touch-pan-x select-none overflow-x-auto overscroll-x-contain [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
