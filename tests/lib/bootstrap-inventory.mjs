// Bootstrap class inventory shared by the two framework-class nets: the
// template scanner (../framework-classes.test.mjs) and the rendered-output
// net (../fixture-site/output-classes.test.mjs).

import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const bootstrapCss = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
  'theme/node_modules/bootstrap/dist/css/bootstrap.css',
);

// Class names Bootstrap's stylesheet defines: every `.name` token in selector
// text (text outside `{…}` blocks, comments stripped).
export function bootstrapClasses(css) {
  const selectorText = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\{[^{}]*\}/g, '{}');
  const classes = new Set();
  for (const m of selectorText.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) {
    classes.add(m[1]);
  }
  return classes;
}
