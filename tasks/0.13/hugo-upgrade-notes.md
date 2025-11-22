---
title: Hugo 0.147.5 to 0.152.2 upgrade considerations
date: 2025-11-12
cSpell:ignore: hugo
---

> Notes for Docsy clients upgrading Hugo from 0.147.5 (Docsy 0.12.0) to 0.152.2
> (Docsy 0.13.0).

## Overview

Docsy 0.13.0 requires Hugo 0.152.2, upgraded from 0.147.5 in Docsy 0.12.0. This
represents a jump across several minor versions (0.148, 0.149, 0.150, 0.151,
0.152).

## Action required

**Review Hugo's release notes** for versions between 0.147.5 and 0.152.2:

- [Hugo releases](https://github.com/gohugoio/hugo/releases)
- Focus on versions: 0.148.x, 0.149.x, 0.150.x, 0.151.x, 0.152.x

## Known considerations

### Breaking changes

#### v0.152.0 - File mount validation tightened

In [v0.152.0](https://github.com/gohugoio/hugo/releases/tag/v0.152.2), Hugo
tightened source validation for file mounts. Module/theme mounts were restricted
to be local, which could break setups like:

```toml
[[module.mounts]]
source = '../../node_modules/bootstrap'
target = 'assets/vendor/bootstrap'
```

**Resolution in v0.152.2**: This was fixed in
[v0.152.2](https://github.com/gohugoio/hugo/releases/tag/v0.152.2). The above
pattern now works again, but going forward you can also use the more portable
form:

```toml
[[module.mounts]]
source = 'node_modules/bootstrap'
target = 'assets/vendor/bootstrap'
```

Hugo now treats `node_modules` as a special case: for themes/modules, it first
checks if the mounted source exists locally, and if not, tries relative to the
project root.

**Impact**: If you use file mounts in your Hugo configuration, especially those
referencing `node_modules` or other directories outside your project root,
review your mount configuration when upgrading to 0.152.x.

### Improvements and new features

#### v0.149.0 - TOC rendering improvements

[v0.149.0](https://github.com/gohugoio/hugo/releases/tag/v0.149.0) includes
several improvements to how ToC from Markdown gets rendered:

- Hugo Goldmark Extras are now applied when rendering TOC (see
  [#12605](https://github.com/gohugoio/hugo/issues/12605))
- TOC heading titles are now sanitized (see
  [#13401](https://github.com/gohugoio/hugo/issues/13401))

**Impact**: TOC rendering may look slightly different, but should be more
consistent and properly formatted.

#### v0.149.0 - New permalink tokens

Two new permalink tokens were added:

- `:sectionslug` - single section slug
- `:sectionslugs` - all section slugs

These are especially useful in multilingual Hugo projects.

#### v0.149.0 - Go 1.25

Hugo now builds with Go 1.25. This shouldn't affect end users directly, but may
affect those building Hugo from source.

### Deprecation notices

#### v0.149.0 - chromastyles command

The `--omitEmpty` flag on the `chromastyles` command is deprecated. A new
`--omitClassComments` flag was added instead.

### Other changes

- Various dependency updates across the 0.148-0.152 range
- Bug fixes for content creation, server rebuilds, and resource handling

## Testing recommendations

1. **Test in a separate branch** before upgrading production
2. **Build your site** and check for:
   - Template errors
   - Missing resources
   - Broken links
   - Layout issues
3. **Review build output** for deprecation warnings
4. **Test all site features** including:
   - Search functionality
   - Custom shortcodes
   - Custom layouts
   - Asset processing

## Resources

- [Hugo release notes](https://github.com/gohugoio/hugo/releases)
- [Hugo documentation](https://gohugo.io/documentation/)
- [Docsy 0.13.0 upgrade guide](/blog/2025/0.13.0/)

## Summary for Docsy clients

The main breaking change to be aware of is the file mount validation in v0.152.0
([#2347]), which was fixed in v0.152.2. Docsy 0.13.0 does not work with Hugo
0.152.0 or 0.152.1; if you use file mounts (especially for `node_modules`),
ensure you're using Hugo v0.152.2 or later.

[#2347]: https://github.com/google/docsy/issues/2347

The TOC rendering improvements in v0.149.0 may cause minor visual differences
but should improve consistency.

## References

- [Hugo releases](https://github.com/gohugoio/hugo/releases)
- [v0.152.2 release notes](https://github.com/gohugoio/hugo/releases/tag/v0.152.2)
- [v0.149.0 release notes](https://github.com/gohugoio/hugo/releases/tag/v0.149.0)
- [Docsy 0.13.0 upgrade guide](/blog/2025/0.13.0/)
