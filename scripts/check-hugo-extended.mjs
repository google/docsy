import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const manifest = JSON.parse(
  fs.readFileSync(path.join(repoRoot, 'docsy.dev/package.json'), 'utf8'),
);
const expected = manifest.devDependencies['hugo-extended'];
const cli = path.join(repoRoot, 'node_modules/hugo-extended/dist/cli.mjs');
const result = spawnSync(process.execPath, [cli, 'version'], {
  encoding: 'utf8',
});
const output = `${result.stdout ?? ''}${result.stderr ?? ''}`.trim();

if (output) console.log(output);
if (result.status !== 0) process.exit(result.status ?? 1);

const escaped = expected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
if (!new RegExp(`^hugo v${escaped}(?:-\\S+)?\\+extended\\b`).test(output)) {
  console.error(`Expected Hugo v${expected}+extended`);
  process.exit(1);
}
