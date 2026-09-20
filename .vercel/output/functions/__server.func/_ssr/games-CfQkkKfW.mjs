import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as searchGames, t as CATALOG } from "./games-Bu9jA68R.mjs";
import { t as GameCard } from "./game-card-CP5P9QTR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/games-CfQkkKfW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-[var(--radius-sm)] border border-line bg-surface px-3 text-sm text-fg placeholder:text-faint", "transition-[border-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg/30", className),
		...props
	});
}
var VERDICTS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "buy",
		label: "Buy"
	},
	{
		id: "wait",
		label: "Wait"
	},
	{
		id: "skip",
		label: "Skip"
	},
	{
		id: "soon",
		label: "Soon"
	}
];
var GENRES = [
	"All",
	"Action",
	"RPG",
	"Soulslike",
	"Horror",
	"Adventure",
	"Shooter",
	"Platformer",
	"Co-op"
];
function CatalogPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [verdict, setVerdict] = (0, import_react.useState)("all");
	const [genre, setGenre] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => {
		return searchGames(q).filter((g) => {
			if (verdict !== "all" && g.verdict !== verdict) return false;
			if (genre !== "All" && !g.genres.includes(genre)) return false;
			return true;
		});
	}, [
		q,
		verdict,
		genre
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-[11px] uppercase tracking-[0.18em] text-muted",
				children: [CATALOG.length, " games"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Catalog"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Filter by verdict, genre, or name. Prices are typical US street, not a live feed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search title or publisher",
					"aria-label": "Search games"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: VERDICTS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setVerdict(v.id),
					className: cn("min-h-10 rounded-full border px-3 text-sm", verdict === v.id ? "border-fg bg-fg text-ink" : "border-line text-muted hover:text-fg"),
					children: v.label
				}, v.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: GENRES.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setGenre(g),
					className: cn("min-h-10 rounded-full border px-3 text-sm", genre === g ? "border-fg bg-fg text-ink" : "border-line text-muted hover:text-fg"),
					children: g
				}, g))
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-12 text-muted",
				children: "Nothing matches. Clear a filter."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((game) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game }, game.slug))
			})
		]
	});
}
//#endregion
export { CatalogPage as component };
