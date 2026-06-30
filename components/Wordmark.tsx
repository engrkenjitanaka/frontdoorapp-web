type WordmarkProps = {
  className?: string;
  tone?: "ink" | "white";
};

/**
 * Text wordmark — "frontdoorapp.co" with ".co" in brand blue, matching the
 * brand lockup. Used where the full logo image isn't ideal (e.g. the dark footer).
 */
export function Wordmark({ className = "", tone = "ink" }: WordmarkProps) {
  const isWhite = tone === "white";
  return (
    <span
      className={`font-display text-xl font-extrabold tracking-tight ${
        isWhite ? "text-white" : "text-ink"
      } ${className}`}
    >
      frontdoorapp<span className={isWhite ? "text-brand-glow" : "text-brand"}>.co</span>
    </span>
  );
}
