import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { GameCard } from "@/components/game-card";
import { PaperReceipt } from "@/components/paper-receipt";
import { buttonVariants } from "@/components/ui/button";
import { CATALOG, getGame, rankedByValue, withMath } from "@/lib/games";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const ragnarok = withMath(getGame("god-of-war-ragnarok")!);
  const best = rankedByValue(CATALOG.filter((g) => g.verdict === "buy")).slice(0, 4);
  const sales = [...CATALOG].filter((g) => g.discounted && !g.comingSoon).sort((a, b) => a.street - b.street).slice(0, 4);
  const coming = CATALOG.find((g) => g.slug === "gta-6");

  return (
    <main>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
          <div className="stagger-in max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted"><Sparkles className="size-3" /> PS5 price reality check</div>
            <h1 className="mt-5 font-display text-[2.65rem] leading-[1.02] tracking-[-0.035em] sm:text-6xl">What is this game really costing you?</h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">Receipt turns price and playtime into one simple number: cost per hour. Compare games without hype, faces, or influencer noise.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/games" className={cn(buttonVariants({ variant: "paper", size: "lg" }))}>Browse {CATALOG.length} games <ArrowRight className="size-4" /></Link>
              <Link to="/math" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>Run the math</Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-line pt-5">
              <HeroStat value={String(CATALOG.length)} label="PS5 games" /><HeroStat value="$/hr" label="core metric" /><HeroStat value="0 hype" label="the rule" />
            </div>
          </div>
          <PaperReceipt game={ragnarok} />
        </div>
      </section>
      <section className="bg-surface/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Search the receipt</p><p className="mt-1 text-sm text-muted">Find a title, then inspect the math.</p></div>
          <Link to="/games" className={cn(buttonVariants({ variant: "ghost", size: "md" }), "self-start")}><Search className="size-4" /> Search catalog</Link>
        </div>
      </section>
      {coming ? <section className="border-y border-line"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Coming Nov 19, 2026</p><h2 className="mt-2 font-display text-2xl tracking-tight">{coming.title} is still a guess</h2><p className="mt-2 max-w-xl text-sm text-muted">{coming.note}</p></div><Link to="/games/$slug" params={{ slug: coming.slug }} className={cn(buttonVariants({ variant: "ghost", size: "md" }), "self-start")}>See the estimate</Link></div></section> : null}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><div className="flex items-end justify-between gap-4"><div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Best receipts</p><h2 className="mt-2 font-display text-3xl tracking-tight">Lowest cost per hour</h2></div><Link to="/picks" className="text-sm text-muted hover:text-fg">All picks</Link></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{best.map((game) => <GameCard key={game.slug} game={game} />)}</div></section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Already cheap</p><h2 className="mt-2 font-display text-3xl tracking-tight">Deep street prices</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{sales.map((game) => <GameCard key={game.slug} game={game} />)}</div></section>
    </main>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return <div><p className="font-display text-xl tracking-tight">{value}</p><p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-faint">{label}</p></div>;
}
