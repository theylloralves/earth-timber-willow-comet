import { i as __toESM } from "../_runtime.mjs";
import { r as usd } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as CATALOG } from "./games-Bu9jA68R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/math-Bb7JtuEh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MathPage() {
	const [price, setPrice] = (0, import_react.useState)("70");
	const [hours, setHours] = (0, import_react.useState)("20");
	const parsedPrice = Number(price) || 0;
	const parsedHours = Number(hours) || 0;
	const cph = parsedHours > 0 ? parsedPrice / parsedHours : 0;
	const nearby = (0, import_react.useMemo)(() => {
		if (!cph) return [];
		return [...CATALOG].filter((g) => !g.comingSoon).sort((a, b) => Math.abs(a.cph - cph) - Math.abs(b.cph - cph)).slice(0, 4);
	}, [cph]);
	const verdict = parsedHours <= 0 ? "Enter hours." : cph <= 1.5 ? "Buy. That's cheap entertainment." : cph <= 3 ? "Reasonable if you like the game." : cph <= 5 ? "Wait for a sale unless it's a favorite." : "You're paying for the box, not the hours.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "The math"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted leading-relaxed",
				children: "Price divided by hours in the main story. That's the whole site. Plug in any game — even one we don't list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 grid gap-4 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:grid-cols-2",
				onSubmit: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
						children: "Price (USD)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 0,
						inputMode: "decimal",
						value: price,
						onChange: (e) => setPrice(e.target.value),
						className: "mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-bg px-3 text-sm"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
						children: "Hours (main story)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 0,
						inputMode: "decimal",
						value: hours,
						onChange: (e) => setHours(e.target.value),
						className: "mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-bg px-3 text-sm"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "receipt-paper mt-6 rounded-[var(--radius-xl)] px-6 py-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] opacity-55",
						children: "Your receipt"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 font-display text-5xl tabular-nums tracking-[-0.03em]",
						children: [parsedHours <= 0 ? "—" : `$${cph.toFixed(2)}`, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-lg opacity-50",
							children: "/ hour"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed opacity-80",
						children: verdict
					})
				]
			}),
			nearby.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Nearby in the catalog"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-line border-y border-line",
					children: nearby.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline justify-between gap-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: g.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs tabular-nums text-muted",
							children: [
								usd(g.street),
								" · $",
								g.cph.toFixed(2),
								"/hr"
							]
						})]
					}, g.slug))
				})]
			}) : null
		]
	});
}
//#endregion
export { MathPage as component };
