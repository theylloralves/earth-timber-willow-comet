import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { GameCard } from "@/components/game-card";
import { Button } from "@/components/ui/button";
import {
  CATALOG,
  rankedByValue,
  type GameMath,
  type Mood,
} from "@/lib/games";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/picks")({ component: PicksPage });

const LISTS: { title: string; blurb: string; games: GameMath[] }[] = [
  {
    title: "Best value",
    blurb: "Lowest cost per hour among games worth buying.",
    games: rankedByValue(CATALOG.filter((g) => g.verdict === "buy")).slice(0, 4),
  },
  {
    title: "Wait for a sale",
    blurb: "Good games wearing the wrong price tag.",
    games: CATALOG.filter((g) => g.verdict === "wait").slice(0, 4),
  },
  {
    title: "Skip",
    blurb: "The honest pile. Keep your money.",
    games: CATALOG.filter((g) => g.verdict === "skip").slice(0, 4),
  },
  {
    title: "Weekend games",
    blurb: "Fifteen hours or less, still worth the time.",
    games: CATALOG.filter(
      (g) => g.hoursMain <= 15 && g.quality >= 8 && !g.comingSoon,
    ).slice(0, 4),
  },
];

const BUDGETS = [
  { id: "low", label: "Under $25", max: 25 },
  { id: "mid", label: "$25–40", max: 40 },
  { id: "full", label: "Up to $70", max: 70 },
] as const;

const LENGTHS = [
  { id: "weekend", label: "A weekend", max: 15 },
  { id: "week", label: "A week", max: 35 },
  { id: "sink", label: "A long sink", max: 999 },
] as const;

const MOODS: { id: Mood; label: string }[] = [
  { id: "story", label: "Story" },
  { id: "challenge", label: "Challenge" },
  { id: "friends", label: "With friends" },
  { id: "chill", label: "Chill" },
  { id: "scare", label: "Scare me" },
];

function PicksPage() {
  const [budget, setBudget] = useState<(typeof BUDGETS)[number]["id"]>("mid");
  const [length, setLength] = useState<(typeof LENGTHS)[number]["id"]>("week");
  const [mood, setMood] = useState<Mood>("story");

  const picks = useMemo(() => {
    const b = BUDGETS.find((x) => x.id === budget)!;
    const l = LENGTHS.find((x) => x.id === length)!;
    return rankedByValue(
      CATALOG.filter((g) => {
        if (g.comingSoon) return false;
        if (g.street > b.max) return false;
        if (g.hoursMain > l.max) return false;
        if (length === "sink" && g.hoursMain < 30) return false;
        if (!g.moods.includes(mood)) return false;
        return g.quality >= 6;
      }),
    ).slice(0, 3);
  }, [budget, length, mood]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">Picks</h1>
      <p className="mt-3 max-w-xl text-muted">
        Answer three questions. Get three receipts. No algorithm watching you — just filters.
      </p>

      <section className="mt-10 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:p-6">
        <Field label="Budget">
          {BUDGETS.map((b) => (
            <Chip
              key={b.id}
              active={budget === b.id}
              onClick={() => setBudget(b.id)}
              label={b.label}
            />
          ))}
        </Field>
        <Field label="Time">
          {LENGTHS.map((item) => (
            <Chip
              key={item.id}
              active={length === item.id}
              onClick={() => setLength(item.id)}
              label={item.label}
            />
          ))}
        </Field>
        <Field label="Mood">
          {MOODS.map((item) => (
            <Chip
              key={item.id}
              active={mood === item.id}
              onClick={() => setMood(item.id)}
              label={item.label}
            />
          ))}
        </Field>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {picks.length === 0 ? (
            <p className="text-sm text-muted sm:col-span-3">
              Nothing fits. Loosen the budget or the hours.
            </p>
          ) : (
            picks.map((g) => <GameCard key={g.slug} game={g} />)
          )}
        </div>
      </section>

      <div className="mt-16 space-y-14">
        {LISTS.map((list) => (
          <section key={list.title}>
            <h2 className="font-display text-3xl tracking-tight">{list.title}</h2>
            <p className="mt-2 text-sm text-muted">{list.blurb}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {list.games.map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <Link to="/games">
          <Button variant="ghost">Full catalog</Button>
        </Link>
      </div>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-full border px-3 text-sm",
        active ? "border-fg bg-fg text-ink" : "border-line text-muted hover:text-fg",
      )}
    >
      {label}
    </button>
  );
}
