// Refreshes the scripts.html goldens (see scripts-golden.test.mjs).

import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildScriptsFixtures,
  extractScriptRegion,
  goldenDir,
  mainBundlePath,
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
      extractScriptRegion(build.publicFile(page)),
    );
    console.log(`wrote ${file}`);
  }
  writeFileSync(
    path.join(goldenDir, `${name}--main.js.txt`),
    build.publicFile(mainBundlePath(build.publicFile('index.html'))),
  );
  console.log(`wrote ${name}--main.js.txt`);
}
