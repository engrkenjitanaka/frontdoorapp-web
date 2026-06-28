type IconProps = { className?: string };

/** Streamlined setup — a quick bolt. */
export function IconBolt({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M13 2.5 L5 13.4 H10.6 L9.5 21.5 L19 9.8 H13.1 L13 2.5 Z" fill="currentColor" />
    </svg>
  );
}

/** Everything in one place — a tidy 2x2 dashboard. */
export function IconGrid({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" />
    </svg>
  );
}

/** Built to grow — ascending bars. */
export function IconGrowth({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="13" width="4.5" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
      <rect x="9.75" y="8.5" width="4.5" height="12.5" rx="1.5" fill="currentColor" opacity="0.75" />
      <rect x="16.5" y="3.5" width="4.5" height="17.5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/** Small right chevron for list rows. */
export function IconChevron({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
