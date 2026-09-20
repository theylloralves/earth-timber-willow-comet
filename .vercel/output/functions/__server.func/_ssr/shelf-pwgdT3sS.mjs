import { i as __toESM } from "../_runtime.mjs";
import { z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shelf-pwgdT3sS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var KEY = "receipt-shelf";
function read() {
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string") : [];
	} catch {
		return [];
	}
}
function useShelf() {
	const [slugs, setSlugs] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setSlugs(read());
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(KEY, JSON.stringify(slugs));
	}, [slugs, ready]);
	function toggle(slug) {
		setSlugs((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
	}
	return {
		slugs,
		ready,
		has: (slug) => slugs.includes(slug),
		toggle,
		count: slugs.length
	};
}
//#endregion
export { useShelf as t };
