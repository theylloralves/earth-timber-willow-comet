export function amazonSearch(title: string) {
  const q = encodeURIComponent(`${title} PS5`);
  return `https://www.amazon.com/s?k=${q}`;
}

export function bestBuySearch(title: string) {
  const q = encodeURIComponent(`${title} PS5`);
  return `https://www.bestbuy.com/site/searchpage.jsp?st=${q}`;
}
