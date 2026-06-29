# Lychee link-checking tools

Cached link checking for a Docsy site with [Lychee][]. Two tools:

- **`lychee-norm-cache`** — run lychee over your built `public/` output, then
  normalize `.lycheecache` so reruns and commits stay byte stable.
- **`refcache`** — inspect and prune that `.lycheecache` (the "refcache"): list
  the oldest entries, prune a count or percentage, or print a summary.

With a committed `lychee.toml` and `.lycheecache`, these give a Docsy-based site
a self-contained, cached link-checking setup.

## Requirements

- The [lychee][Lychee] binary on your `PATH`.
- A `lychee.toml` at your site root (lychee's config and ignore rules).
- A built site under `public/` (run your site build first).
- Optional: the [`gh`][gh] CLI — `lychee-norm-cache` bridges its token to lychee
  to raise the github.com rate limit when `GITHUB_TOKEN` isn't already set.

## Usage

For a site that installs Docsy as an npm package, the bins are on your project's
`PATH`:

```sh
npx lychee-norm-cache    # check links, then sort/normalize the cache
npx refcache --summary   # cache stats (count, oldest, status, ages)
```

`lychee-norm-cache` runs in the current directory (your site root) and forwards
any extra arguments to lychee. Run either tool with `--help` for its full
options, and `lychee --help` for the link-checking flags `lychee-norm-cache`
forwards (e.g. `--offline`, `--max-cache-age 0`).

For a Hugo module or Git submodule install, run the tools directly:

```sh
node DOCSY_DIR/scripts/lychee/check/index.mjs
node DOCSY_DIR/scripts/lychee/refcache/index.mjs --summary
```

Here `DOCSY_DIR` is your Docsy install directory: `themes/docsy` for a Git
submodule, or the path printed by
`go list -m -f '{{.Dir}}' github.com/google/docsy` for a Hugo module.

<!-- prettier-ignore-start -->
[Lychee]: https://github.com/lycheeverse/lychee
[gh]: https://cli.github.com/
<!-- prettier-ignore-end -->
