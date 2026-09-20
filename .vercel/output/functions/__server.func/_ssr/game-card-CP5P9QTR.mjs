import { n as hoursLabel, r as usd, t as cn } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as VERDICT_COPY } from "./games-Bu9jA68R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/game-card-CP5P9QTR.js
var import_jsx_runtime = require_jsx_runtime();
function CoverPlate({ title, cover, className }) {
	const mark = title.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean).slice(0, 3).map((w) => w[0]).join("").slice(0, 3).toUpperCase();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("cover-plate relative overflow-hidden rounded-[var(--radius-md)]", `cover-${cover}`, className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-30 bg-[radial-gradient(120%_80%_at_0%_0%,white,transparent_55%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-h-36 flex-col justify-between p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-[10px] tracking-[0.18em] uppercase opacity-70",
				children: "PS5"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-4xl font-medium leading-none tracking-tight",
				children: mark
			})]
		})]
	});
}
var tone = {
	buy: "bg-buy text-paper",
	wait: "bg-wait text-ink",
	skip: "bg-skip text-paper",
	soon: "bg-soon text-paper"
};
function VerdictBadge({ verdict, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-medium tracking-[0.16em]", tone[verdict], className),
		children: VERDICT_COPY[verdict].label
	});
}
function GameCard({ game }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/games/$slug",
		params: { slug: game.slug },
		className: "group flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface transition-[transform,border-color] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:border-muted active:scale-[0.99]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPlate, {
			title: game.title,
			cover: game.cover,
			className: "h-40 rounded-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg leading-snug tracking-tight",
						children: game.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictBadge, { verdict: game.verdict })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						game.year,
						" · ",
						game.genres[0]
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-baseline justify-between font-mono text-xs tabular-nums text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: game.street === 0 ? "Free" : usd(game.street) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						hoursLabel(game.hoursMain),
						" ·",
						" ",
						game.street === 0 ? "$0/hr" : `$${game.cph.toFixed(2)}/hr`
					] })]
				})
			]
		})]
	});
}
//#endregion
export { GameCard as t };
