import { createFileRoute, Link } from "@tanstack/react-router";
import { GameCard } from "@/components/game-card";
import { CATALOG } from "@/lib/games";
import { useShelf } from "@/lib/shelf";
import { usd } from "@/lib/utils";

export const Route = createFileRoute("/shelf")({ component: ShelfPage });

function ShelfPage() {
  const shelf = useShelf();
  const games = CATALOG.filter((g) => shelf.slugs.includes(g.slug));
  const total = games.reduce((sum, g) => sum + g.street, 0);
  const hours = games.reduce((sum, g) => sum + g.hoursMain, 0);
  const cph = hours > 0 ? total / hours : 0;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">Shelf</h1>
      <p className="mt-3 max-w-xl text-muted">
        Saved on this device. Nobody else sees it. No account.
      </p>

      {shelf.ready && games.length === 0 ? (
        <div className="mt-12 rounded-[var(--radius-xl)] border border-line bg-surface px-5 py-10 text-center">
          <p className="text-muted">Empty. Open a receipt and save it.</p>
          <Link to="/games" className="mt-4 inline-block text-sm text-fg underline">
            Browse the catalog
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-3 gap-3 rounded-[var(--radius-lg)] border border-line bg-surface p-4">
            <Stat k="Games" v={String(games.length)} />
            <Stat k="Street total" v={usd(total)} />
            <Stat k="Blended" v={hours ? `$${cph.toFixed(2)}/hr` : "—"} />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((g) => (
              <GameCard key={g.slug} game={g} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">{k}</p>
      <p className="mt-1 font-display text-xl tabular-nums tracking-tight">{v}</p>
    </div>
  );
}
