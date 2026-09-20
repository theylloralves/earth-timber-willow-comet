import { Link } from "@tanstack/react-router";
import { CoverPlate } from "@/components/cover-plate";
import { VerdictBadge } from "@/components/verdict-badge";
import type { GameMath } from "@/lib/games";
import { hoursLabel, usd } from "@/lib/utils";

export function GameCard({ game }: { game: GameMath }) {
  return (
    <Link
      to="/games/$slug"
      params={{ slug: game.slug }}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface transition-[transform,border-color] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:border-muted active:scale-[0.99]"
    >
      <CoverPlate title={game.title} cover={game.cover} className="h-40 rounded-none" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg leading-snug tracking-tight">{game.title}</h3>
          <VerdictBadge verdict={game.verdict} />
        </div>
        <p className="text-sm text-muted">
          {game.year} · {game.genres[0]}
        </p>
        <div className="mt-auto flex items-baseline justify-between font-mono text-xs tabular-nums text-muted">
          <span>{game.street === 0 ? "Free" : usd(game.street)}</span>
          <span>
            {hoursLabel(game.hoursMain)} ·{" "}
            {game.street === 0 ? "$0/hr" : `$${game.cph.toFixed(2)}/hr`}
          </span>
        </div>
      </div>
    </Link>
  );
}
