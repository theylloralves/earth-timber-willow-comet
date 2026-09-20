import { r as usd } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CATALOG } from "./games-Bu9jA68R.mjs";
import { t as GameCard } from "./game-card-CP5P9QTR.mjs";
import { t as useShelf } from "./shelf-pwgdT3sS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shelf-Bx-n5W6u.js
var import_jsx_runtime = require_jsx_runtime();
function ShelfPage() {
	const shelf = useShelf();
	const games = CATALOG.filter((g) => shelf.slugs.includes(g.slug));
	const total = games.reduce((sum, g) => sum + g.street, 0);
	const hours = games.reduce((sum, g) => sum + g.hoursMain, 0);
	const cph = hours > 0 ? total / hours : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Shelf"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Saved on this device. Nobody else sees it. No account."
			}),
			shelf.ready && games.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-[var(--radius-xl)] border border-line bg-surface px-5 py-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Empty. Open a receipt and save it."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/games",
					className: "mt-4 inline-block text-sm text-fg underline",
					children: "Browse the catalog"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid grid-cols-3 gap-3 rounded-[var(--radius-lg)] border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Games",
						v: String(games.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Street total",
						v: usd(total)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Blended",
						v: hours ? `$${cph.toFixed(2)}/hr` : "—"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: games.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game: g }, g.slug))
			})] })
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-[10px] uppercase tracking-[0.14em] text-faint",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-display text-xl tabular-nums tracking-tight",
		children: v
	})] });
}
//#endregion
export { ShelfPage as component };
