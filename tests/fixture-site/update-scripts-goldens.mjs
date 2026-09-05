// Refreshes the scripts.html goldens (see scripts-golden.test.mjs).

import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildScriptsFixtures,
  byteGoldens,
  canonicalRegion,
  extractScriptRegion,
  goldenDir,
  scriptPath,
} from './lib/scripts-goldens.mjs';

mkdirSync(goldenDir, { recursive: true });

for (const { name, build, pages } of buildScriptsFixtures()) {
  if (build.status !== 0) {
    console.error(`build failed for ${name}:\n${build.stderr}`);
    process.exit(1);
  }
  for (const page of pages) {
    const file = `${name}--${page.replaceAll('/', '-')}.txt`;
    writeFileSync(
      path.join(goldenDir, file),
      canonicalRegion(extractScriptRegion(build.publicFile(page))),
    );
    console.log(`wrote ${file}`);
  }
  for (const golden of byteGoldens) {
    const html = build.publicFile(golden.page);
    const file = path.join(goldenDir, `${name}--${golden.name}.txt`);
    if (!golden.re.test(html)) {
      rmSync(file, { force: true });
      continue;
    }
    writeFileSync(file, build.publicFile(scriptPath(html, golden)));
    console.log(`wrote ${name}--${golden.name}.txt`);
  }
}
