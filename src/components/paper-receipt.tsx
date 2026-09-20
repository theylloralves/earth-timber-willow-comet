import type { GameMath } from "@/lib/games";
import { PLAT_COPY, VERDICT_COPY } from "@/lib/games";
import { hoursLabel, usd } from "@/lib/utils";
import { cn } from "@/lib/utils";

function Row({
  k,
  v,
  strong,
}: {
  k: string;
  v: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2 font-mono text-[13px]">
      <span className="uppercase tracking-[0.14em] text-[10px] opacity-60">{k}</span>
      <span className={cn("tabular-nums", strong && "font-medium")}>{v}</span>
    </div>
  );
}

export function PaperReceipt({
  game,
  className,
}: {
  game: GameMath;
  className?: string;
}) {
  const copy = VERDICT_COPY[game.verdict];
  return (
    <article
      className={cn(
        "receipt-paper relative overflow-hidden rounded-[var(--radius-xl)] px-6 py-7 sm:px-8",
        className,
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-55">
        Receipt · PS5 · Store copy
      </p>
      <h2 className="mt-5 font-display text-[1.85rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.15rem]">
        {game.title}
      </h2>
      <p className="mt-2 text-sm opacity-60">
        {game.year} · {game.publisher}
        {game.exclusive ? " · PS5 exclusive" : ""}
        {game.estimated ? " · hours estimated" : ""}
      </p>

      <div className="hairline mt-6 opacity-40" />

      <div className="mt-2">
        <Row k="Sticker" v={game.msrp === 0 ? "Included" : usd(game.msrp)} />
        <Row k="Street" v={game.street === 0 ? "Free" : usd(game.street)} strong />
        <Row k="Main story" v={hoursLabel(game.hoursMain)} />
        <Row k="Plus extras" v={hoursLabel(game.hoursExtra)} />
        <Row k="Completion" v={hoursLabel(game.hoursComp)} />
        <Row k="Platinum" v={PLAT_COPY[game.plat]} />
      </div>

      <div className="hairline my-3 opacity-40" />

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-55">
            Cost / hour
          </p>
          <p className="mt-1 font-display text-4xl tabular-nums leading-none tracking-[-0.03em]">
            {game.street === 0 ? "$0" : `$${game.cph.toFixed(2)}`}
          </p>
        </div>
        <div
          className={cn(
            "rotate-[-8deg] rounded-[var(--radius-sm)] border-2 px-3 py-1.5 font-display text-lg tracking-wide",
            game.verdict === "buy" && "border-buy text-buy",
            game.verdict === "wait" && "border-wait text-wait",
            game.verdict === "skip" && "border-skip text-skip",
            game.verdict === "soon" && "border-soon text-soon",
          )}
        >
          {copy.label}
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed opacity-70">{copy.line}</p>
      <p className="mt-3 text-sm leading-relaxed">{game.note}</p>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] opacity-45">
        No. {game.slug.slice(0, 8).toUpperCase()} · Typical US street · Not live inventory
      </p>
    </article>
  );
}
