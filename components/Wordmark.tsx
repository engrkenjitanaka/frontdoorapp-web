import { DoorMark } from "./DoorMark";

type WordmarkProps = {
  className?: string;
  tone?: "ink" | "white";
};

export function Wordmark({ className = "", tone = "ink" }: WordmarkProps) {
  const isWhite = tone === "white";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <DoorMark
        className={`h-7 w-7 shrink-0 ${isWhite ? "text-white" : "text-ink"}`}
        lineClassName={isWhite ? "text-brand-glow" : "text-brand"}
      />
      <span
        className={`font-display text-xl font-extrabold tracking-tight ${
          isWhite ? "text-white" : "text-ink"
        }`}
      >
        frontdoorapp
        <span className={isWhite ? "text-brand-glow" : "text-brand"}>.co</span>
      </span>
    </span>
  );
}
