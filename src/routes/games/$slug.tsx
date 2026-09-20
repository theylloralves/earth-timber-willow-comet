import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, CircleDollarSign, Clock3, Star } from "lucide-react";
import { BuyLinks } from "@/components/buy-links";
import { CoverPlate } from "@/components/cover-plate";
import { GameCard } from "@/components/game-card";
import { PaperReceipt } from "@/components/paper-receipt";
import { Button } from "@/components/ui/button";
import { CATALOG, getGame, withMath } from "@/lib/games";
import { useShelf } from "@/lib/shelf";
import { usd } from "@/lib/utils";

export const Route = createFileRoute("/games/$slug")({ component: GamePage });

function GamePage() {
  const { slug } = Route.useParams();
  const raw = getGame(slug);
  const shelf = useShelf();

  if (!raw) return <main className="mx-auto max-w-xl px-4 py-20 text-center"><h1 className="font-display text-3xl">No receipt for that title</h1><Link to="/games" className="mt-4 inline-block text-muted hover:text-fg">Back to catalog</Link></main>;

  const game = withMath(raw);
  const related = CATALOG.filter((g) => g.slug !== game.slug && g.genres.some((genre) => game.genres.includes(genre))).slice(0, 3);
  const saved = shelf.has(game.slug);

  return (
    <main className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:py-14">
      <div>
        <CoverPlate title={game.title} cover={game.cover} className="mb-6 h-56 sm:h-72" />
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{game.genres.join(" · ")}</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">{game.title}</h1>
        <p className="mt-4 max-w-lg text-muted leading-relaxed">{game.note}</p>
        <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"><Stat k="Quality" v={game.quality + "/10"} /><Stat k="Exclusive" v={game.exclusive ? "PS5" : "Multi"} /><Stat k="Year" v={String(game.year)} /></dl>
        <section className="mt-8 rounded-[var(--radius-lg)] border border-line bg-surface p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">Purchase guide</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <GuideMetric icon={<CircleDollarSign />} label="Fair price" value={usd(game.fairPrice)} detail={game.priceDelta <= 0 ? "At or below our target" : usd(game.priceDelta) + " above target"} />
            <GuideMetric icon={<Clock3 />} label="Main story" value={game.hoursMain + "h"} detail={game.hoursExtra + "h with extras"} />
            <GuideMetric icon={<Star />} label="Receipt score" value={game.quality + "/10"} detail={game.estimated ? "Estimate — not a review" : "Overall quality, not user score"} />
          </div>
          <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">Target price is a practical ceiling based on main-story time and our quality score. It is not a live deal alert or a promise of availability.</p>
        </section>
        <div className="mt-8 flex flex-col gap-3"><BuyLinks title={game.title} /><Button variant="ghost" onClick={() => shelf.toggle(game.slug)} className="w-full">{saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}{saved ? "On your shelf" : "Save to shelf"}</Button></div>
        {related.length > 0 ? <div className="mt-12"><h2 className="font-display text-2xl tracking-tight">Nearby receipts</h2><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{related.map((g) => <GameCard key={g.slug} game={g} />)}</div></div> : null}
      </div>
      <PaperReceipt game={game} className="lg:sticky lg:top-24 self-start" />
    </main>
  );
}
function Stat({ k, v }: { k: string; v: string }) { return <div className="rounded-[var(--radius-md)] border border-line bg-surface px-4 py-3"><dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">{k}</dt><dd className="mt-1 font-display text-xl tracking-tight">{v}</dd></div>; }
function GuideMetric({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail: string }) { return <div><div className="flex items-center gap-2 text-faint">{icon}<p className="font-mono text-[10px] uppercase tracking-[0.14em]">{label}</p></div><p className="mt-2 font-display text-2xl tracking-tight">{value}</p><p className="mt-1 text-xs leading-relaxed text-muted">{detail}</p></div>; }
