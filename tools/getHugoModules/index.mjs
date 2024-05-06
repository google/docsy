// Runs `hugo mod get <module>@<vers>` for Docsy module dependencies.
// It gets dependency versions from `package.json`.

import fs from 'fs';
import { execSync } from 'child_process';

const packageJson = readPackageJson();
let exitStatus = 0;

const exit = () => process.exit(exitStatus);

function getHugoModule(npmPkgNm, hugoModuleRefAtV) {
  try {
    // Extract module version
    const pkgVers = packageJson.dependencies[npmPkgNm];
    if (!pkgVers) {
      throw new Error(`${npmPkgNm} not found in dependencies`);
    }
    if (!/^\d/.test(pkgVers)) {
      const msg = `${npmPkgNm} version must be exact (start with a number), not: ${pkgVers}`;
      throw new Error(msg);
    }

    const command = `npx hugo mod get ${hugoModuleRefAtV}${pkgVers}`;
    console.log(`> ${command}`);
    const output = execSync(command);
    console.log(output.toString());
  } catch (error) {
    console.error(`ERROR: ${error.message}\n`);
    exitStatus = 1;
  }
}

function readPackageJson() {
  try {
    const packageJsonData = fs.readFileSync('package.json', 'utf8');
    return JSON.parse(packageJsonData);
  } catch (error) {
    console.error('FAILED to read package.json:', error.message);
    exit();
  }
}

const packagesToUpdate = [
  // NPM package name, `Hugo module name@` optionally follow by `v` if needed
  ['@fortawesome/fontawesome-free', 'github.com/FortAwesome/Font-Awesome@'],
  ['bootstrap', 'github.com/twbs/bootstrap@v']
];

packagesToUpdate.forEach(([npmPkgNm, hugoModuleRefAtV]) => {
  getHugoModule(npmPkgNm, hugoModuleRefAtV, packageJson);
});

exit();

// cSpell:ignore hugo twbs
