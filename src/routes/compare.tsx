import { createFileRoute } from "@tanstack/react-router";
import { ArrowRightLeft, BadgeDollarSign, Clock3, Star } from "lucide-react";
import { PaperReceipt } from "@/components/paper-receipt";
import { CATALOG, getGame, type GameMath, withMath } from "@/lib/games";
import { usd } from "@/lib/utils";

type CompareSearch = { a?: string; b?: string };

export const Route = createFileRoute("/compare")({
  validateSearch: (search: Record<string, unknown>): CompareSearch => ({
    a: typeof search.a === "string" ? search.a : undefined,
    b: typeof search.b === "string" ? search.b : undefined,
  }),
  component: ComparePage,
});

function ComparePage() {
  const { a, b } = Route.useSearch();
  const navigate = Route.useNavigate();
  const left = a ? getGame(a) : undefined;
  const right = b ? getGame(b) : undefined;
  const leftMath = left ? withMath(left) : undefined;
  const rightMath = right ? withMath(right) : undefined;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">Compare</h1>
      <p className="mt-3 max-w-xl text-muted">
        Two receipts, same counter. Pick any pair from the catalog.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <SelectGame
          label="Game A"
          value={a ?? ""}
          exclude={b}
          onChange={(slug) => navigate({ search: { a: slug || undefined, b } })}
        />
        <SelectGame
          label="Game B"
          value={b ?? ""}
          exclude={a}
          onChange={(slug) => navigate({ search: { a, b: slug || undefined } })}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {leftMath ? <PaperReceipt game={leftMath} /> : <EmptySlot label="Choose game A" />}
        {rightMath ? <PaperReceipt game={rightMath} /> : <EmptySlot label="Choose game B" />}
      </div>

      {leftMath && rightMath ? <ComparisonNotes left={leftMath} right={rightMath} /> : null}
    </main>
  );
}

function ComparisonNotes({ left, right }: { left: GameMath; right: GameMath }) {
  const valueWinner =
    left.cph === right.cph ? "It is a tie" : left.cph < right.cph ? left.title : right.title;
  const timeWinner =
    left.hoursMain === right.hoursMain
      ? "It is a tie"
      : left.hoursMain > right.hoursMain
        ? left.title
        : right.title;
  const scoreWinner =
    left.quality === right.quality
      ? "It is a tie"
      : left.quality > right.quality
        ? left.title
        : right.title;
  return (
    <section className="mt-8 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <ArrowRightLeft className="size-4 text-muted" />
        <h2 className="font-display text-2xl tracking-tight">At a glance</h2>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <CompareStat
          icon={<BadgeDollarSign />}
          label="Better value"
          winner={valueWinner}
          detail={`${left.title} ${usd(left.street)} / ${left.hoursMain}h · ${right.title} ${usd(right.street)} / ${right.hoursMain}h`}
        />
        <CompareStat
          icon={<Clock3 />}
          label="More main-story time"
          winner={timeWinner}
          detail={`${left.hoursMain}h vs ${right.hoursMain}h`}
        />
        <CompareStat
          icon={<Star />}
          label="Higher receipt score"
          winner={scoreWinner}
          detail={`${left.quality}/10 vs ${right.quality}/10`}
        />
      </div>
    </section>
  );
}

function CompareStat({
  icon,
  label,
  winner,
  detail,
}: {
  icon: React.ReactNode;
  label: string;
  winner: string;
  detail: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-faint">
        {icon}
        <p className="font-mono text-[10px] uppercase tracking-[0.14em]">{label}</p>
      </div>
      <p className="mt-2 font-display text-lg tracking-tight">{winner}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p>
    </div>
  );
}

function SelectGame({
  label,
  value,
  exclude,
  onChange,
}: {
  label: string;
  value: string;
  exclude?: string;
  onChange: (slug: string) => void;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-surface px-3 text-sm text-fg"
      >
        <option value="">Select a game</option>
        {CATALOG.filter((g) => g.slug !== exclude).map((g) => (
          <option key={g.slug} value={g.slug}>
            {g.title}
          </option>
        ))}
      </select>
    </label>
  );
}

function EmptySlot({ label }: { label: string }) {
  return (
    <div className="flex min-h-72 items-center justify-center rounded-[var(--radius-xl)] border border-dashed border-line text-sm text-muted">
      {label}
    </div>
  );
}
