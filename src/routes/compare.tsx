import { createFileRoute } from "@tanstack/react-router";
import { PaperReceipt } from "@/components/paper-receipt";
import { CATALOG, getGame, withMath } from "@/lib/games";

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
        {left ? (
          <PaperReceipt game={withMath(left)} />
        ) : (
          <EmptySlot label="Choose game A" />
        )}
        {right ? (
          <PaperReceipt game={withMath(right)} />
        ) : (
          <EmptySlot label="Choose game B" />
        )}
      </div>
    </main>
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
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {label}
      </span>
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
