import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GameCard } from "@/components/game-card";
import { Input } from "@/components/ui/input";
import { CATALOG, searchGames, type Genre, type Verdict } from "@/lib/games";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/games/")({ component: CatalogPage });

const VERDICTS: { id: Verdict | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "buy", label: "Buy" },
  { id: "wait", label: "Wait" },
  { id: "skip", label: "Skip" },
  { id: "soon", label: "Soon" },
];

const GENRES: (Genre | "All")[] = [
  "All",
  "Action",
  "RPG",
  "Soulslike",
  "Horror",
  "Adventure",
  "Shooter",
  "Platformer",
  "Co-op",
];

function CatalogPage() {
  const [q, setQ] = useState("");
  const [verdict, setVerdict] = useState<Verdict | "all">("all");
  const [genre, setGenre] = useState<Genre | "All">("All");

  const list = useMemo(() => {
    return searchGames(q).filter((g) => {
      if (verdict !== "all" && g.verdict !== verdict) return false;
      if (genre !== "All" && !g.genres.includes(genre)) return false;
      return true;
    });
  }, [q, verdict, genre]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        {CATALOG.length} games
      </p>
      <h1 className="mt-2 font-display text-4xl tracking-tight">Catalog</h1>
      <p className="mt-3 max-w-xl text-muted">
        Filter by verdict, genre, or name. Prices are typical US street, not a live feed.
      </p>

      <div className="mt-8 max-w-md">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search title or publisher"
          aria-label="Search games"
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {VERDICTS.map((v) => (
          <button
            key={v.id}
            type="button"
            onClick={() => setVerdict(v.id)}
            className={cn(
              "min-h-10 rounded-full border px-3 text-sm",
              verdict === v.id
                ? "border-fg bg-fg text-ink"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {GENRES.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGenre(g)}
            className={cn(
              "min-h-10 rounded-full border px-3 text-sm",
              genre === g
                ? "border-fg bg-fg text-ink"
                : "border-line text-muted hover:text-fg",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-muted">Nothing matches. Clear a filter.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      )}
    </main>
  );
}
