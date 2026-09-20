import type { CoverTone } from "@/lib/games";
import { cn } from "@/lib/utils";

export function CoverPlate({ title, cover, className }: { title: string; cover: CoverTone; className?: string }) {
  const words = title.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean);
  const mark = words.slice(0, 3).map((w) => w[0]).join("").slice(0, 3).toUpperCase();

  return (
    <div className={cn("cover-plate relative overflow-hidden rounded-[var(--radius-md)] border border-black/10", "cover-" + cover, className)} role="img" aria-label={title + " PS5 cover"}>
      <div className="absolute -right-8 -top-8 size-32 rounded-full border border-current/20 opacity-40" />
      <div className="absolute -bottom-16 -left-10 size-40 rounded-full border border-current/20 opacity-30" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,.08)_48%,transparent_49%,transparent_100%)]" />
      <div className="relative flex h-full min-h-36 flex-col justify-between p-3">
        <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] opacity-70"><span>PS5</span><span>RECEIPT</span></div>
        <div><span className="block font-mono text-[10px] uppercase tracking-[0.18em] opacity-65">{words.slice(0, 2).join(" ")}</span><span className="mt-1 block font-display text-4xl font-medium leading-none tracking-tight">{mark}</span></div>
      </div>
    </div>
  );
}
