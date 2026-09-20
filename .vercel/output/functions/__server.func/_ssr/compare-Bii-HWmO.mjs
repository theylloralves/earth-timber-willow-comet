import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$6 } from "./router-BFT4FZv5.mjs";
import { i as getGame, s as withMath, t as CATALOG } from "./games-Bu9jA68R.mjs";
import { t as PaperReceipt } from "./paper-receipt-P17qW2oM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-Bii-HWmO.js
var import_jsx_runtime = require_jsx_runtime();
function ComparePage() {
	const { a, b } = Route$6.useSearch();
	const navigate = Route$6.useNavigate();
	const left = a ? getGame(a) : void 0;
	const right = b ? getGame(b) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Compare"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Two receipts, same counter. Pick any pair from the catalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGame, {
					label: "Game A",
					value: a ?? "",
					exclude: b,
					onChange: (slug) => navigate({ search: {
						a: slug || void 0,
						b
					} })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGame, {
					label: "Game B",
					value: b ?? "",
					exclude: a,
					onChange: (slug) => navigate({ search: {
						a,
						b: slug || void 0
					} })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-6 lg:grid-cols-2",
				children: [left ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperReceipt, { game: withMath(left) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptySlot, { label: "Choose game A" }), right ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperReceipt, { game: withMath(right) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptySlot, { label: "Choose game B" })]
			})
		]
	});
}
function SelectGame({ label, value, exclude, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-2 h-11 w-full rounded-[var(--radius-sm)] border border-line bg-surface px-3 text-sm text-fg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Select a game"
			}), CATALOG.filter((g) => g.slug !== exclude).map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: g.slug,
				children: g.title
			}, g.slug))]
		})]
	});
}
function EmptySlot({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-72 items-center justify-center rounded-[var(--radius-xl)] border border-dashed border-line text-sm text-muted",
		children: label
	});
}
//#endregion
export { ComparePage as component };
