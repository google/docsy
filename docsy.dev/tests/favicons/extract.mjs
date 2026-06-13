// Pages to snapshot. Favicons come from a global partial, so one page suffices.
export const pages = ['index.html'];

const isIcon = (tag) => /\brel="[^"]*(icon|manifest)/i.test(tag);

// Favicon/app-icon/manifest `<link>` tags, verbatim and in document order.
export function extractFaviconLinks(html) {
  const links = (html.match(/<link\b[^>]*>/gi) ?? []).filter(isIcon);
  return links.length ? `${links.join('\n')}\n` : '';
}
