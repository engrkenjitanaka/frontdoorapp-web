type IconProps = { className?: string };

/** Right chevron for list rows. */
export function IconChevron({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Landing page — a browser window. */
export function IconWindow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="6.7" r="0.9" fill="currentColor" />
      <circle cx="8.7" cy="6.7" r="0.9" fill="currentColor" />
    </svg>
  );
}

/** Social media presence — speech bubble. */
export function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 4h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-9l-4 4v-4H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Business email — envelope. */
export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Analytics — ascending bars. */
export function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="13" width="4.5" height="8" rx="1.5" fill="currentColor" opacity="0.5" />
      <rect x="9.75" y="8.5" width="4.5" height="12.5" rx="1.5" fill="currentColor" opacity="0.75" />
      <rect x="16.5" y="3.5" width="4.5" height="17.5" rx="1.5" fill="currentColor" />
    </svg>
  );
}

/** Content generation — pencil. */
export function IconPencil({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M4 20l4-1L17.5 9.5a2 2 0 0 0 0-2.8l-.2-.2a2 2 0 0 0-2.8 0L5 16l-1 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M13.5 6.5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** Social media automation — loop arrows. */
export function IconRepeat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 12a6 6 0 0 1 6-6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 3l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12a6 6 0 0 1-6 6H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 21l-3-3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Natural-language automations — sparkle. */
export function IconSparkle({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M11 3l1.7 4.5L17 9.2l-4.3 1.7L11 15.4 9.3 10.9 5 9.2l4.3-1.7L11 3Z" fill="currentColor" />
      <path d="M17.5 13.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/** Platform support — lifebuoy. */
export function IconSupport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M14.3 9.7l3-3M6.7 17.3l3-3M14.3 14.3l3 3M6.7 6.7l3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
