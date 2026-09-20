import { n as hoursLabel, r as usd, t as cn } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as PLAT_COPY, r as VERDICT_COPY } from "./games-Bu9jA68R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paper-receipt-P17qW2oM.js
var import_jsx_runtime = require_jsx_runtime();
function Row({ k, v, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4 py-2 font-mono text-[13px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "uppercase tracking-[0.14em] text-[10px] opacity-60",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("tabular-nums", strong && "font-medium"),
			children: v
		})]
	});
}
function PaperReceipt({ game, className }) {
	const copy = VERDICT_COPY[game.verdict];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("receipt-paper relative overflow-hidden rounded-[var(--radius-xl)] px-6 py-7 sm:px-8", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[10px] uppercase tracking-[0.22em] opacity-55",
				children: "Receipt · PS5 · Store copy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-display text-[1.85rem] leading-[1.1] tracking-[-0.03em] sm:text-[2.15rem]",
				children: game.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm opacity-60",
				children: [
					game.year,
					" · ",
					game.publisher,
					game.exclusive ? " · PS5 exclusive" : "",
					game.estimated ? " · hours estimated" : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-6 opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Sticker",
						v: game.msrp === 0 ? "Included" : usd(game.msrp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Street",
						v: game.street === 0 ? "Free" : usd(game.street),
						strong: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Main story",
						v: hoursLabel(game.hoursMain)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Plus extras",
						v: hoursLabel(game.hoursExtra)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Completion",
						v: hoursLabel(game.hoursComp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Platinum",
						v: PLAT_COPY[game.plat]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-3 opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] uppercase tracking-[0.16em] opacity-55",
					children: "Cost / hour"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-4xl tabular-nums leading-none tracking-[-0.03em]",
					children: game.street === 0 ? "$0" : `$${game.cph.toFixed(2)}`
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("rotate-[-8deg] rounded-[var(--radius-sm)] border-2 px-3 py-1.5 font-display text-lg tracking-wide", game.verdict === "buy" && "border-buy text-buy", game.verdict === "wait" && "border-wait text-wait", game.verdict === "skip" && "border-skip text-skip", game.verdict === "soon" && "border-soon text-soon"),
					children: copy.label
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed opacity-70",
				children: copy.line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed",
				children: game.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 font-mono text-[10px] uppercase tracking-[0.18em] opacity-45",
				children: [
					"No. ",
					game.slug.slice(0, 8).toUpperCase(),
					" · Typical US street · Not live inventory"
				]
			})
		]
	});
}
//#endregion
export { PaperReceipt as t };
