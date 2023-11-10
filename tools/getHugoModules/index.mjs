// Runs `hugo mod get <module>@<vers>` for Docsy module dependencies.
// Get dependencies versions from `package.json`.

import fs from 'fs';
import { execSync } from 'child_process';

let packageJson;

function updateHugoModuleFromNpmPackage(npmPackageName, hugoModuleRefAtV) {
  try {
    // Extract package version
    const packageVersion = packageJson.dependencies[npmPackageName];
    if (!packageVersion) {
      throw new Error(`${npmPackageName} not found in dependencies`);
    }

    // Execute the command
    const command = `hugo mod get ${hugoModuleRefAtV}${packageVersion}`;
    console.log(`Executing command: ${command}`);
    const output = execSync(command);

    // Log output
    console.log(output.toString());
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

try {
  // Read package.json
  const packageJsonData = fs.readFileSync('package.json', 'utf8');
  packageJson = JSON.parse(packageJsonData);
} catch (error) {
  console.error('Failed to read package.json:', error.message);
  process.exit(1);
}

const packagesToUpdate = [
  ['@fortawesome/fontawesome-free', 'github.com/FortAwesome/Font-Awesome@'],
  ['bootstrap', 'github.com/twbs/bootstrap@v']
];

packagesToUpdate.forEach(([npmPackageName, hugoModuleRefAtV]) => {
  updateHugoModuleFromNpmPackage(npmPackageName, hugoModuleRefAtV, packageJson);
});
