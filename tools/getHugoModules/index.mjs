// Runs `hugo mod get <module>@<vers>` for Docsy module dependencies.
// Get dependencies versions from `package.json`.

import fs from 'fs';
import { execSync } from 'child_process';

const packageJson = readPackageJson();
let exitStatus = 0;

function getHugoModule(npmPkgNm, hugoModuleRefAtV) {
  try {
    // Extract module version
    const packageVersion = packageJson.dependencies[npmPkgNm];
    if (!packageVersion) {
      throw new Error(`${npmPkgNm} not found in dependencies`);
    }

    const command = `hugo mod get ${hugoModuleRefAtV}${packageVersion}`;
    console.log(`> ${command}`);
    const output = execSync(command);
    console.log(output.toString());
  } catch (error) {
    console.error('An error occurred:', error.message);
    exitStatus = 1;
  }
}

function readPackageJson() {
  try {
    const packageJsonData = fs.readFileSync('package.json', 'utf8');
    return JSON.parse(packageJsonData);
  } catch (error) {
    console.error('Failed to read package.json:', error.message);
    exit();
  }
}

const exit = () => process.exit(exitStatus);

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
