import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-DwIgQEUI.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function usd(n) {
	if (n === 0) return "$0";
	return n.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: n % 1 === 0 ? 0 : 2
	});
}
function hoursLabel(n) {
	if (n >= 100) return `${Math.round(n)}h`;
	if (n % 1 === 0) return `${n}h`;
	return `${n.toFixed(0)}h`;
}
//#endregion
export { hoursLabel as n, usd as r, cn as t };
