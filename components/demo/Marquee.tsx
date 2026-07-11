"use client";

import { useEffect, useRef } from "react";

/**
 * Auto-scrolling horizontal strip that is ALSO manually scrollable:
 * - touch / trackpad swipe scrolls natively (touch-action: pan-x)
 * - click-and-drag scrolls with the mouse
 * - press and hold pauses the auto-scroll (no pause on hover)
 * Children should be passed already duplicated (two copies) for a seamless loop.
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
  const paused = useRef(false);
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
      if (!paused.current) {
        if (Math.abs(el.scrollLeft - applied) > 2) pos = el.scrollLeft; // user scrolled
        const half = el.scrollWidth / 2;
        pos += speed * (dt / 1000);
        if (half > 0 && pos >= half) pos -= half;
        el.scrollLeft = pos;
        applied = el.scrollLeft;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    paused.current = true; // hold to stop
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
    paused.current = false;
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
