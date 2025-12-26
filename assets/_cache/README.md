This `_cache` folder contains cached copies of external dependencies used for
build-time validation.

## Purpose

Files in this folder are used to validate that external dependencies (like
Bootstrap) haven't changed in ways that would break our patches or workarounds.

## Current Contents

- `bootstrap/scrollspy-method.js` - Cached copy of Bootstrap's
  `_initializeTargetsAndObservables()` method
- `bootstrap/scrollspy-method-patched.js` - Result of applying `method.patch` to
  `scrollspy-method.js`
- `bootstrap/method.patch` - Standard unified diff patch file

## Maintenance

These files are automatically updated by the `_prepare:scrollspy-patch` script
(called via `npm run _prepare`). The CI/CD pipeline validates that these files
match what's committed.

DO NOT manually edit these files unless updating the patch. For details, see
`scripts/scrollspy-patch/README.md`.
