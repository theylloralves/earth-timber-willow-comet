import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function usd(n: number) {
  if (n === 0) return "$0";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: n % 1 === 0 ? 0 : 2,
  });
}

export function hoursLabel(n: number) {
  if (n >= 100) return `${Math.round(n)}h`;
  if (n % 1 === 0) return `${n}h`;
  return `${n.toFixed(0)}h`;
}
