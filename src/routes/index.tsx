import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { GameCard } from "@/components/game-card";
import { PaperReceipt } from "@/components/paper-receipt";
import { buttonVariants } from "@/components/ui/button";
import { CATALOG, getGame, rankedByValue, withMath } from "@/lib/games";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const ragnarok = withMath(getGame("god-of-war-ragnarok")!);
  const best = rankedByValue(CATALOG.filter((g) => g.verdict === "buy")).slice(0, 4);
  const sales = [...CATALOG]
    .filter((g) => g.discounted && !g.comingSoon)
    .sort((a, b) => a.street - b.street)
    .slice(0, 4);
  const coming = CATALOG.find((g) => g.slug === "gta-6");

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
        <div className="stagger-in max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            PS5 · Cost per hour
          </p>
          <h1 className="mt-4 font-display text-[2.4rem] leading-[1.05] tracking-[-0.03em] sm:text-5xl">
            A $70 game that lasts 12 hours costs $5.83 an hour.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            A $20 game that lasts 40 hours costs fifty cents. This is the receipt —
            street price, hours, and a verdict. No streamers. No unboxings.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/games"
              className={cn(buttonVariants({ variant: "paper", size: "lg" }))}
            >
              Open the catalog
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/math"
              className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}
            >
              Run the math
            </Link>
          </div>
        </div>
        <PaperReceipt game={ragnarok} />
      </section>

      {coming ? (
        <section className="border-y border-line bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Coming Nov 19, 2026
              </p>
              <h2 className="mt-2 font-display text-2xl tracking-tight">
                {coming.title} is still a guess
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted">{coming.note}</p>
            </div>
            <Link
              to="/games/$slug"
              params={{ slug: coming.slug }}
              className={cn(buttonVariants({ variant: "ghost", size: "md" }), "self-start")}
            >
              See the estimate
            </Link>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Best receipts
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight">Lowest cost per hour</h2>
          </div>
          <Link to="/picks" className="text-sm text-muted hover:text-fg">
            All picks
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {best.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Already cheap
        </p>
        <h2 className="mt-2 font-display text-3xl tracking-tight">Deep street prices</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sales.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}
