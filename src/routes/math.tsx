import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CATALOG } from "@/lib/games";
import { usd } from "@/lib/utils";

export const Route = createFileRoute("/math")({ component: MathPage });

function MathPage() {
  const [price, setPrice] = useState("70");
  const [hours, setHours] = useState("20");
  const [target, setTarget] = useState("3");

  const parsedPrice = Number(price) || 0;
  const parsedHours = Number(hours) || 0;
  const cph = parsedHours > 0 ? parsedPrice / parsedHours : 0;
  const parsedTarget = Number(target) || 0;
  const fairPrice = parsedHours > 0 && parsedTarget > 0 ? parsedHours * parsedTarget : 0;

  const nearby = useMemo(() => {
    if (!cph) return [];
    return [...CATALOG]
      .filter((g) => !g.comingSoon)
      .sort((a, b) => Math.abs(a.cph - cph) - Math.abs(b.cph - cph))
      .slice(0, 4);
  }, [cph]);

  const verdict =
    parsedHours <= 0
      ? "Enter hours."
      : cph <= 1.5
        ? "Buy. That's cheap entertainment."
        : cph <= 3
          ? "Reasonable if you like the game."
          : cph <= 5
            ? "Wait for a sale unless it's a favorite."
            : "You're paying for the box, not the hours.";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">The math</h1>
      <p className="mt-3 text-muted leading-relaxed">
        Price divided by hours in the main story. That's the whole site. Plug in any game — even one
        we don't list.
      </p>

      <form
        className="mt-8 grid gap-4 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:grid-cols-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Price (USD)
          </span>
          <input
            type="number"
            min={0}
            inputMode="decimal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-bg px-3 text-sm"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Hours (main story)
          </span>
          <input
            type="number"
            min={0}
            inputMode="decimal"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-bg px-3 text-sm"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Your max $ / hour
          </span>
          <input
            type="number"
            min={0}
            step="0.25"
            inputMode="decimal"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-bg px-3 text-sm"
          />
        </label>
      </form>

      <div className="receipt-paper mt-6 rounded-[var(--radius-xl)] px-6 py-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-55">Your receipt</p>
        <p className="mt-4 font-display text-5xl tabular-nums tracking-[-0.03em]">
          {parsedHours <= 0 ? "—" : `$${cph.toFixed(2)}`}
          <span className="ml-2 text-lg opacity-50">/ hour</span>
        </p>
        <p className="mt-4 text-sm leading-relaxed opacity-80">{verdict}</p>
        {fairPrice > 0 ? (
          <p className="mt-3 text-sm leading-relaxed opacity-65">
            At your limit, a {parsedHours}h game is worth up to <strong>{usd(fairPrice)}</strong> to
            you.
          </p>
        ) : null}
      </div>

      {nearby.length > 0 ? (
        <section className="mt-10">
          <h2 className="font-display text-2xl tracking-tight">Nearby in the catalog</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {nearby.map((g) => (
              <li key={g.slug} className="flex items-baseline justify-between gap-4 py-3">
                <span>{g.title}</span>
                <span className="font-mono text-xs tabular-nums text-muted">
                  {usd(g.street)} · ${g.cph.toFixed(2)}/hr
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
