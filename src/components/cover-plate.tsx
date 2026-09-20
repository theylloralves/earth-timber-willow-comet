import type { CoverTone } from "@/lib/games";
import { cn } from "@/lib/utils";

export function CoverPlate({
  title,
  cover,
  className,
}: {
  title: string;
  cover: CoverTone;
  className?: string;
}) {
  const mark = title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <div
      className={cn(
        "cover-plate relative overflow-hidden rounded-[var(--radius-md)]",
        `cover-${cover}`,
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(120%_80%_at_0%_0%,white,transparent_55%)]" />
      <div className="relative flex h-full min-h-36 flex-col justify-between p-3">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-70">
          PS5
        </span>
        <span className="font-display text-4xl font-medium leading-none tracking-tight">
          {mark}
        </span>
      </div>
    </div>
  );
}
