type DoorMarkProps = {
  className?: string;
  /** Tailwind text-color class applied to the motion lines. */
  lineClassName?: string;
};

/**
 * The Frontdoor "open door + motion lines" mark, drawn as crisp vector.
 * The door/frame inherit `currentColor`; the motion lines use `lineClassName`.
 */
export function DoorMark({ className, lineClassName = "text-brand" }: DoorMarkProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      {/* doorway frame */}
      <rect
        x="23"
        y="9"
        width="16"
        height="30"
        rx="2.4"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      {/* open door panel */}
      <path d="M23 10.6 L13.8 14 V34 L23 37.4 Z" fill="currentColor" />
      {/* knob */}
      <circle cx="16.3" cy="24" r="1.5" className="fill-white" />
      {/* motion lines */}
      <g className={lineClassName} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <line x1="5" y1="17.5" x2="11" y2="17.5" />
        <line x1="7.5" y1="24" x2="13" y2="24" />
        <line x1="4" y1="30.5" x2="9.5" y2="30.5" />
      </g>
    </svg>
  );
}
