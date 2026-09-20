import type { Verdict } from "@/lib/games";
import { VERDICT_COPY } from "@/lib/games";
import { cn } from "@/lib/utils";

const tone: Record<Verdict, string> = {
  buy: "bg-buy text-paper",
  wait: "bg-wait text-ink",
  skip: "bg-skip text-paper",
  soon: "bg-soon text-paper",
};

export function VerdictBadge({
  verdict,
  className,
}: {
  verdict: Verdict;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.16em]",
        tone[verdict],
        className,
      )}
    >
      {VERDICT_COPY[verdict].label}
    </span>
  );
}
