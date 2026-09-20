import { t as cn } from "./_ssr/utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as BookmarkCheck, i as Bookmark } from "./_libs/lucide-react.mjs";
import { a as buttonVariants, i as Button, n as Route } from "./_ssr/router-BFT4FZv5.mjs";
import { i as getGame, s as withMath, t as CATALOG } from "./_ssr/games-Bu9jA68R.mjs";
import { t as PaperReceipt } from "./_ssr/paper-receipt-P17qW2oM.mjs";
import { t as GameCard } from "./_ssr/game-card-CP5P9QTR.mjs";
import { t as useShelf } from "./_ssr/shelf-pwgdT3sS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-IWR5ItU_.js
var import_jsx_runtime = require_jsx_runtime();
function amazonSearch(title) {
	return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} PS5`)}`;
}
function bestBuySearch(title) {
	return `https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(`${title} PS5`)}`;
}
function BuyLinks({ title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: amazonSearch(title),
			target: "_blank",
			rel: "noreferrer",
			className: cn(buttonVariants({
				variant: "paper",
				size: "lg"
			}), "w-full"),
			children: "Check Amazon"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: bestBuySearch(title),
			target: "_blank",
			rel: "noreferrer",
			className: cn(buttonVariants({
				variant: "ghost",
				size: "lg"
			}), "w-full"),
			children: "Check Best Buy"
		})]
	});
}
function GamePage() {
	const { slug } = Route.useParams();
	const raw = getGame(slug);
	const shelf = useShelf();
	if (!raw) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl",
			children: "No receipt for that title"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/games",
			className: "mt-4 inline-block text-muted hover:text-fg",
			children: "Back to catalog"
		})]
	});
	const game = withMath(raw);
	const related = CATALOG.filter((g) => g.slug !== game.slug && g.genres.some((genre) => game.genres.includes(genre))).slice(0, 3);
	const saved = shelf.has(game.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
				children: game.genres.join(" · ")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
				children: game.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-lg text-muted leading-relaxed",
				children: game.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Quality",
						v: `${game.quality}/10`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Exclusive",
						v: game.exclusive ? "PS5" : "Multi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Year",
						v: String(game.year)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyLinks, { title: game.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					onClick: () => shelf.toggle(game.slug),
					className: "w-full",
					children: [saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-4" }), saved ? "On your shelf" : "Save to shelf"]
				})]
			}),
			related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Nearby receipts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game: g }, g.slug))
				})]
			}) : null
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperReceipt, {
			game,
			className: "lg:sticky lg:top-24 self-start"
		})]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[var(--radius-md)] border border-line bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-mono text-[10px] uppercase tracking-[0.16em] text-faint",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1 font-display text-xl tracking-tight",
			children: v
		})]
	});
}
//#endregion
export { GamePage as component };
