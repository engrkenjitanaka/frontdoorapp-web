type WordmarkProps = {
  className?: string;
  tone?: "ink" | "white";
};

/**
 * Text wordmark — "Frontdoor" with "door" in brand blue, matching the brand
 * lockup. Used where the full logo image isn't ideal (e.g. the dark footer).
 */
export function Wordmark({ className = "", tone = "ink" }: WordmarkProps) {
  const isWhite = tone === "white";
  return (
    <span
      className={`font-display text-xl font-extrabold tracking-tight ${
        isWhite ? "text-white" : "text-ink"
      } ${className}`}
    >
      Front<span className={isWhite ? "text-brand-glow" : "text-brand"}>door</span>
    </span>
  );
}
