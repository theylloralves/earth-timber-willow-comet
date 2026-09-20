import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GameCard } from "@/components/game-card";
import { Input } from "@/components/ui/input";
import { CATALOG, searchGames, type Genre, type Verdict } from "@/lib/games";
import { cn } from "@/lib/utils";
import { CATALOG_META } from "@/lib/catalog";

export const Route = createFileRoute("/games/")({ component: CatalogPage });

const VERDICTS: { id: Verdict | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "buy", label: "Buy" },
  { id: "wait", label: "Wait" },
  { id: "skip", label: "Skip" },
  { id: "soon", label: "Soon" },
];

const GENRES: (Genre | "All")[] = [
  "All", "Action", "RPG", "Soulslike", "Horror", "Adventure", "Shooter", "Platformer", "Co-op",
];

const SORTS = [
  { id: "value", label: "Best value" },
  { id: "score", label: "Best rated" },
  { id: "price", label: "Lowest price" },
  { id: "discount", label: "Biggest discount" },
  { id: "time", label: "Longest" },
  { id: "shortest", label: "Shortest" },
  { id: "newest", label: "Newest" },
] as const;

function CatalogPage() {
  const [q, setQ] = useState("");
  const [verdict, setVerdict] = useState<Verdict | "all">("all");
  const [genre, setGenre] = useState<Genre | "All">("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]["id"]>("value");

  const availableGenres = useMemo(() => {
    const genres = new Set(CATALOG.flatMap((g) => g.genres));
    return ["All", ...GENRES.filter((g) => g !== "All" && genres.has(g))] as (Genre | "All")[];
  }, []);

  const list = useMemo(() => {
    const filtered = searchGames(q).filter((g) => {
      if (verdict !== "all" && g.verdict !== verdict) return false;
      if (genre !== "All" && !g.genres.includes(genre)) return false;
      return true;
    });
    return [...filtered].sort((a, b) => {
      if (sort === "score") return b.quality - a.quality || a.cph - b.cph;
      if (sort === "price") return a.street - b.street || a.cph - b.cph;
      if (sort === "discount") {
        const aDiscount = a.msrp > 0 ? (a.msrp - a.street) / a.msrp : 0;
        const bDiscount = b.msrp > 0 ? (b.msrp - b.street) / b.msrp : 0;
        return bDiscount - aDiscount || a.cph - b.cph;
      }
      if (sort === "time") return b.hoursMain - a.hoursMain || a.cph - b.cph;
      if (sort === "shortest") return a.hoursMain - b.hoursMain || a.cph - b.cph;
      if (sort === "newest") return b.year - a.year || a.cph - b.cph;
      return a.cph - b.cph;
    });
  }, [q, verdict, genre, sort]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <section className="receipt-hero">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            PS5 / RECEIPT INDEX
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">The catalog.</h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {CATALOG.length} PS5 receipts. Search, filter and sort by the numbers that matter.
          </p>
        </div>
        <div className="receipt-stamp">{CATALOG.length}<span> titles</span></div>
      </section>

      <div className="mt-7 max-w-xl">
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
              verdict === v.id ? "border-fg bg-fg text-ink" : "border-line text-muted hover:text-fg",
            )}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {availableGenres.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGenre(g)}
            className={cn(
              "min-h-10 rounded-full border px-3 text-sm",
              genre === g ? "border-fg bg-fg text-ink" : "border-line text-muted hover:text-fg",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          <span className="font-medium text-fg">{list.length}</span>{" "}
          {list.length === 1 ? "receipt" : "receipts"} shown
        </p>
        <label className="flex items-center gap-3 text-sm text-muted">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="h-10 rounded-[var(--radius-sm)] border border-line bg-surface px-3 text-sm text-fg"
          >
            {SORTS.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
        Data: {CATALOG_META.dataMode} · updated {CATALOG_META.lastUpdated}
      </p>

      {list.length === 0 ? (
        <p className="mt-12 text-muted">Nothing matches. Clear a filter.</p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((game) => <GameCard key={game.slug} game={game} />)}
        </div>
      )}
    </main>
  );
}
