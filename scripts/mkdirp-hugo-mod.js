// Helper script to create empty Hugo-module directories for Docsy dependencies
// listed in `go.mod`. This is necessary for projects not using Hugo modules. For
// details, see
// https://www.docsy.dev/docs/get-started/other-options/#docsy-npm-install-side-effect

const fs = require('fs');
const path = require('path');

if (process.env.DOCSY_MKDIR_HUGO_MOD_SKIP) {
  console.log("DOCSY_MKDIR_HUGO_MOD_SKIP is set. Skipping directory creation.");
  process.exit(0);
}

const modulePathPrefix = process.argv[2] || '..';
console.log(
  `Creating empty directories under MODULE_PATH_PREFIX: ${modulePathPrefix}
  which resolves to: ${path.resolve(modulePathPrefix)}\n`
);

// Extract module paths from `go.mod`, assuming the dependencies appear in the form:
//
// require (
//   github.com/...
//   ...
// )
function extractModulePaths() {
  const goModPath = path.join(__dirname, '..', 'go.mod');

  let directories = [];
  try {
    const goModContent = fs.readFileSync(goModPath, 'utf8');
    const lines = goModContent.split('\n');
    lines.forEach((line) => {
      line = line.trim();
      if (!line.startsWith('github.com')) return;
      const modulePath = line.split(' ')[0];
      directories.push(modulePath);
    });
  } catch (error) {
    console.error(`Error reading go.mod file: ${error.message}`);
    process.exit(1);
  }
  return directories;
}

function createDirectory(targetPath) {
  if (!fs.existsSync(targetPath)) {
    console.log(`+ Creating directory ${targetPath}`);
    fs.mkdirSync(targetPath, { recursive: true });
  } else {
    console.log(`> Directory already exists: ${targetPath}`);
  }
}

const directories = extractModulePaths();
directories.forEach((dir) => {
  const targetPath = path.join(modulePathPrefix, dir);
  createDirectory(targetPath);
});
