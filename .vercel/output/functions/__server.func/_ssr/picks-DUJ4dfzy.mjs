import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-DwIgQEUI.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Button } from "./router-BFT4FZv5.mjs";
import { a as rankedByValue, t as CATALOG } from "./games-Bu9jA68R.mjs";
import { t as GameCard } from "./game-card-CP5P9QTR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/picks-DUJ4dfzy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LISTS = [
	{
		title: "Best value",
		blurb: "Lowest cost per hour among games worth buying.",
		games: rankedByValue(CATALOG.filter((g) => g.verdict === "buy")).slice(0, 4)
	},
	{
		title: "Wait for a sale",
		blurb: "Good games wearing the wrong price tag.",
		games: CATALOG.filter((g) => g.verdict === "wait").slice(0, 4)
	},
	{
		title: "Skip",
		blurb: "The honest pile. Keep your money.",
		games: CATALOG.filter((g) => g.verdict === "skip").slice(0, 4)
	},
	{
		title: "Weekend games",
		blurb: "Fifteen hours or less, still worth the time.",
		games: CATALOG.filter((g) => g.hoursMain <= 15 && g.quality >= 8 && !g.comingSoon).slice(0, 4)
	}
];
var BUDGETS = [
	{
		id: "low",
		label: "Under $25",
		max: 25
	},
	{
		id: "mid",
		label: "$25–40",
		max: 40
	},
	{
		id: "full",
		label: "Up to $70",
		max: 70
	}
];
var LENGTHS = [
	{
		id: "weekend",
		label: "A weekend",
		max: 15
	},
	{
		id: "week",
		label: "A week",
		max: 35
	},
	{
		id: "sink",
		label: "A long sink",
		max: 999
	}
];
var MOODS = [
	{
		id: "story",
		label: "Story"
	},
	{
		id: "challenge",
		label: "Challenge"
	},
	{
		id: "friends",
		label: "With friends"
	},
	{
		id: "chill",
		label: "Chill"
	},
	{
		id: "scare",
		label: "Scare me"
	}
];
function PicksPage() {
	const [budget, setBudget] = (0, import_react.useState)("mid");
	const [length, setLength] = (0, import_react.useState)("week");
	const [mood, setMood] = (0, import_react.useState)("story");
	const picks = (0, import_react.useMemo)(() => {
		const b = BUDGETS.find((x) => x.id === budget);
		const l = LENGTHS.find((x) => x.id === length);
		return rankedByValue(CATALOG.filter((g) => {
			if (g.comingSoon) return false;
			if (g.street > b.max) return false;
			if (g.hoursMain > l.max) return false;
			if (length === "sink" && g.hoursMain < 30) return false;
			if (!g.moods.includes(mood)) return false;
			return g.quality >= 6;
		})).slice(0, 3);
	}, [
		budget,
		length,
		mood
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl tracking-tight",
				children: "Picks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Answer three questions. Get three receipts. No algorithm watching you — just filters."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 rounded-[var(--radius-xl)] border border-line bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Budget",
						children: BUDGETS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: budget === b.id,
							onClick: () => setBudget(b.id),
							label: b.label
						}, b.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Time",
						children: LENGTHS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: length === item.id,
							onClick: () => setLength(item.id),
							label: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Mood",
						children: MOODS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							active: mood === item.id,
							onClick: () => setMood(item.id),
							label: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-3",
						children: picks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted sm:col-span-3",
							children: "Nothing fits. Loosen the budget or the hours."
						}) : picks.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game: g }, g.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-14",
				children: LISTS.map((list) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl tracking-tight",
						children: list.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: list.blurb
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: list.games.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GameCard, { game: g }, g.slug))
					})
				] }, list.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/games",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						children: "Full catalog"
					})
				})
			})
		]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[10px] uppercase tracking-[0.16em] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 flex flex-wrap gap-2",
			children
		})]
	});
}
function Chip({ active, onClick, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("min-h-10 rounded-full border px-3 text-sm", active ? "border-fg bg-fg text-ink" : "border-line text-muted hover:text-fg"),
		children: label
	});
}
//#endregion
export { PicksPage as component };
