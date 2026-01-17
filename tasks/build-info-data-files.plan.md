---
name: Build Info Data Files Implementation
overview:
  'Refactor the Netlify build info shortcode to use Hugo data files with a
  schema/fallback pattern: committed `buildInfo.yaml` with placeholder values,
  and generated `buildInfoRuntime.yaml` at CI/CD time that overrides the schema
  when present.'
todos:
  - id: create-schema-file
    content:
      Create docsy.dev/data/buildInfo.yaml with placeholder values and schema
      documentation
    status: pending
  - id: create-generator-script
    content:
      Create docsy.dev/scripts/generate-build-info.sh to generate
      buildInfoRuntime.yaml from env vars
    status: pending
  - id: update-shortcode
    content:
      Update layouts/_shortcodes/td/site-build-info/netlify.md to use data files
      instead of os.Getenv
    status: pending
  - id: update-gitignore
    content: Add data/buildInfoRuntime.yaml to docsy.dev/.gitignore
    status: pending
  - id: update-netlify-config
    content:
      Update docsy.dev/netlify.toml build commands to run generator script
      before Hugo
    status: pending
  - id: remove-security-config
    content:
      Remove security.funcs.getenv section from docsy.dev/hugo.yaml (optional
      cleanup)
    status: pending
cSpell:ignore: docsy funcs
---

# Build Info Data Files Implementation

## Overview

Replace environment variable access with Hugo data files using a schema/fallback
pattern:

- **`data/buildInfo.yaml`** - Committed schema file with placeholder/default
  values
- **`data/buildInfoRuntime.yaml`** - Generated at runtime by CI/CD, gitignored
- Shortcode uses runtime data if available, otherwise falls back to schema

## Benefits

- Removes need for Hugo security config (`security.funcs.getenv`)
- Easier local testing (schema provides defaults)
- Clear separation between defaults and runtime values
- Works consistently across all environments

## Implementation Steps

### 1. Create Schema Data File

**File:** `docsy.dev/data/buildInfo.yaml`

- Contains all build info fields with placeholder/default values
- Committed to repository
- Serves as documentation of the schema and provides local dev defaults

### 2. Create Runtime Data File Generator Script

**File:** `docsy.dev/scripts/generate-build-info.sh`

- Reads Netlify environment variables (or any CI env vars)
- Generates `data/buildInfoRuntime.yaml` with actual build values
- Handles missing env vars gracefully (uses defaults or empty values)
- Can be run manually for local testing

### 3. Update Shortcode

**File:** `layouts/_shortcodes/td/site-build-info/netlify.md`

- Replace `os.Getenv` calls with data file access
- Use pattern:
  `{{ $buildInfo := .Site.Data.buildInfoRuntime | default .Site.Data.buildInfo }}`
- Access fields via `$buildInfo.branch`, `$buildInfo.buildID`, etc.
- Maintains same output format and behavior

### 4. Update Gitignore

**File:** `docsy.dev/.gitignore`

- Add `data/buildInfoRuntime.yaml` to ignore list

### 5. Update Netlify Build Configuration

**File:** `docsy.dev/netlify.toml`

- Modify build command to generate runtime data file before Hugo runs
- Update both `[build]` and `[context.production]` commands

### 6. Remove Security Config (Optional)

**File:** `docsy.dev/hugo.yaml`

- Remove or comment out `security.funcs.getenv` section (lines 156-160)
- Remove TODO comment about data files

### 7. Update Test Script

**File:** `docsy.dev/scripts/test-netlify-env.sh`

- Optionally update to generate `buildInfoRuntime.yaml` instead of just setting
  env vars
- Or keep as-is for testing the generator script

## Data File Structure

Both files will have the same structure:

```yaml
branch: 'main'
buildID: ''
commitRef: ''
deployID: ''
isNetlifyBuilt: false
isPR: false
reviewID: ''
context: 'local'
```

Schema file uses placeholder values, runtime file uses actual CI/CD values.

## Hugo Template Pattern

The shortcode will use:

```go-html-template
{{ $buildInfo := .Site.Data.buildInfoRuntime | default .Site.Data.buildInfo }}
{{ $branch := $buildInfo.branch | default "" }}
{{ $buildID := $buildInfo.buildID | default "" }}
// ... etc
```

This automatically prefers runtime data when available, falls back to schema
otherwise.

## Testing Strategy

- Local: Schema file provides defaults, shortcode works without runtime file
- CI/CD: Generator script creates runtime file, shortcode uses actual build
  values
- Manual testing: Can generate runtime file locally using test script
