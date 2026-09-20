import { t as cn } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as buttonVariants } from "./router-BFT4FZv5.mjs";
import { a as rankedByValue, i as getGame, s as withMath, t as CATALOG } from "./games-Bu9jA68R.mjs";
import { t as PaperReceipt } from "./paper-receipt-P17qW2oM.mjs";
import { t as GameCard } from "./game-card-CP5P9QTR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uz3PtVGS.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const ragnarok = withMath(getGame("god-of-war-ragnarok"));
	const best = rankedByValue(CATALOG.filter((g) => g.verdict === "buy")).slice(0, 4);
	const sales = [...CATALOG].filter((g) => g.discounted && !g.comingSoon).sort((a, b) => a.street - b.street).slice(0, 4);
	const coming = CATALOG.find((g) => g.slug === "gta-6");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stagger-in max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted",
						children: "PS5 · Cost per hour"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-[2.4rem] leading-[1.05] tracking-[-0.03em] sm:text-5xl",
						children: "A $70 game that lasts 12 hours costs $5.83 an hour."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted sm:text-lg",
						children: "A $20 game that lasts 40 hours costs fifty cents. This is the receipt — street price, hours, and a verdict. No streamers. No unboxings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/games",
							className: cn(buttonVariants({
								variant: "paper",
								size: "lg"
							})),
							children: ["Open the catalog", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/math",
							className: cn(buttonVariants({
								variant: "ghost",
								size: "lg"
							})),
							children: "Run the math"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperReceipt, { game: ragnarok })]
		}),
		coming ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
						children: "Coming Nov 19, 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 font-display text-2xl tracking-tight",
						children: [coming.title, " is still a guess"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-muted",
						children: coming.note
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/games/$slug",
					params: { slug: coming.slug },
					className: cn(buttonVariants({
						variant: "ghost",
						size: "md"
					}), "self-start"),
					children: "See the estimate"
				})]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
					children: "Best receipts"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight",
					children: "Lowest cost per hour"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/picks",
					className: "text-sm text-muted hover:text-fg",
					children: "All picks"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: best.map((game) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game }, game.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
					children: "Already cheap"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl tracking-tight",
					children: "Deep street prices"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: sales.map((game) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game }, game.slug))
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
