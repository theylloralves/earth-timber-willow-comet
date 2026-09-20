export const CATALOG_META = {
  name: "Receipt",
  platform: "PS5",
  version: "1.2",
  dataMode: "static-fallback",
  lastUpdated: "2026-09-20",
  priceNote: "US street prices are editorial reference values, not live store quotes.",
  updateReady: true,
  provider: "optional-remote-json",
} as const;

export type CatalogMeta = typeof CATALOG_META;
