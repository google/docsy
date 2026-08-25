// The agent-support page embeds the AFDocs scorecard via readfile. The
// site-local readfile.markdown.md shortcode variant owns the Markdown-side
// contract: the theme's HTML-only template would inject Chroma markup into
// the Markdown alternate (the agent-facing variant of this agent-support
// page). These assertions pin the embed's semantic contract in both output
// formats.

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const publicDir = new URL('../../public/docs/content/agent-support/', import.meta.url);
const artifact = readFileSync(
  new URL('../../content/en/docs/content/agent-support/afdocs-scorecard.txt', import.meta.url),
  'utf8',
).replace(/\n+$/, '');

test('scorecard artifact carries a score line', () => {
  assert.ok(artifact.includes('Overall Score:'), 'scorecard artifact has an Overall Score line');
});

test('markdown alternate embeds the scorecard verbatim in a text fence', () => {
  const md = readFileSync(new URL('index.md', publicDir), 'utf8');
  assert.ok(
    md.includes('```text\n' + artifact + '\n```'),
    'scorecard appears verbatim inside a text fence in index.md',
  );
});

test('HTML page renders the scorecard as highlighted code', () => {
  const html = readFileSync(new URL('index.html', publicDir), 'utf8');
  assert.ok(html.includes('data-lang="text"'), 'HTML carries a text-language code block');
  assert.ok(
    html.includes('Agent-Friendly Docs Scorecard'),
    'HTML carries the scorecard title',
  );
});
