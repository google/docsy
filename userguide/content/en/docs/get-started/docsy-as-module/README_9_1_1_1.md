# markdownlint-cli2-formatter-pretty

> An output formatter for [`markdownlint-cli2`][markdownlint-cli2] that looks
> like `markdownlint-cli2-formatter-default` with color and clickable links.

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

## Install

```bash
npm install markdownlint-cli2-formatter-pretty --save-dev
```

## Use

To enable this formatter, use the following `.markdownlint-cli2.jsonc`:

```json
{
  "outputFormatters": [
    [ "markdownlint-cli2-formatter-pretty" ]
  ]
}
```

Many terminals support color (implemented by [chalk][chalk]), but support for
clickable links (implemented by [terminal-link][terminal-link]) is not as
widespread. Where possible, rule names in output are rendered as clickable links
with information about the rule.

To append informational links to the output instead (which may be clickable):

```json
{
  "outputFormatters": [
    [ "markdownlint-cli2-formatter-pretty", { "appendLink": true } ]
  ]
}
```

## Example

<!-- markdownlint-disable line-length no-inline-html no-space-in-code -->

<pre style="background:black">
<span style="color:purple">dir/about.md</span><span style="color:teal">:</span><span style="color:green">1</span><span style="color:teal">:</span><span style="color:green">1</span><span style="color:white"> </span><span style="color:yellow">MD021/no-multiple-space-closed-atx</span><span style="color:white"> Multiple spaces inside hashes on closed atx style heading</span><span style="color:yellow"> [Context: &quot;#  About  #&quot;]</span><span style="color:white">
</span><span style="color:purple">dir/about.md</span><span style="color:teal">:</span><span style="color:green">4</span><span style="color:white"> </span><span style="color:yellow">MD032/blanks-around-lists</span><span style="color:white"> Lists should be surrounded by blank lines</span><span style="color:yellow"> [Context: &quot;1. List&quot;]</span><span style="color:white">
</span><span style="color:purple">dir/about.md</span><span style="color:teal">:</span><span style="color:green">5</span><span style="color:teal">:</span><span style="color:green">1</span><span style="color:white"> </span><span style="color:yellow">MD029/ol-prefix</span><span style="color:white"> Ordered list item prefix</span><span style="color:yellow"> [Expected: 2; Actual: 3; Style: 1/2/3]</span><span style="color:white">
</span><span style="color:purple">dir/subdir/info.md</span><span style="color:teal">:</span><span style="color:green">1</span><span style="color:white"> </span><span style="color:yellow">MD022/blanks-around-headings/blanks-around-headers</span><span style="color:white"> Headings should be surrounded by blank lines</span><span style="color:yellow"> [Expected: 1; Actual: 0; Below] [Context: &quot;## Information&quot;]</span><span style="color:white">
</span><span style="color:purple">dir/subdir/info.md</span><span style="color:teal">:</span><span style="color:green">1</span><span style="color:white"> </span><span style="color:yellow">MD041/first-line-heading/first-line-h1</span><span style="color:white"> First line in a file should be a top-level heading</span><span style="color:yellow"> [Context: &quot;## Information&quot;]</span><span style="color:white">
</span><span style="color:purple">dir/subdir/info.md</span><span style="color:teal">:</span><span style="color:green">2</span><span style="color:teal">:</span><span style="color:green">6</span><span style="color:white"> </span><span style="color:yellow">MD038/no-space-in-code</span><span style="color:white"> Spaces inside code span elements</span><span style="color:yellow"> [Context: &quot;` code1`&quot;]</span><span style="color:white">
</span><span style="color:purple">dir/subdir/info.md</span><span style="color:teal">:</span><span style="color:green">2</span><span style="color:teal">:</span><span style="color:green">20</span><span style="color:white"> </span><span style="color:yellow">MD038/no-space-in-code</span><span style="color:white"> Spaces inside code span elements</span><span style="color:yellow"> [Context: &quot;`code2 `&quot;]</span><span style="color:white">
</span><span style="color:purple">dir/subdir/info.md</span><span style="color:teal">:</span><span style="color:green">4</span><span style="color:white"> </span><span style="color:yellow">MD012/no-multiple-blanks</span><span style="color:white"> Multiple consecutive blank lines</span><span style="color:yellow"> [Expected: 1; Actual: 2]</span><span style="color:white">
</span><span style="color:purple">viewme.md</span><span style="color:teal">:</span><span style="color:green">3</span><span style="color:teal">:</span><span style="color:green">10</span><span style="color:white"> </span><span style="color:yellow">MD009/no-trailing-spaces</span><span style="color:white"> Trailing spaces</span><span style="color:yellow"> [Expected: 0 or 2; Actual: 1]</span><span style="color:white">
</span><span style="color:purple">viewme.md</span><span style="color:teal">:</span><span style="color:green">5</span><span style="color:white"> </span><span style="color:yellow">MD012/no-multiple-blanks</span><span style="color:white"> Multiple consecutive blank lines</span><span style="color:yellow"> [Expected: 1; Actual: 2]</span><span style="color:white">
</span><span style="color:purple">viewme.md</span><span style="color:teal">:</span><span style="color:green">6</span><span style="color:white"> </span><span style="color:yellow">MD025/single-title/single-h1</span><span style="color:white"> Multiple top-level headings in the same document</span><span style="color:yellow"> [Context: &quot;# Description&quot;]</span><span style="color:white">
</span><span style="color:purple">viewme.md</span><span style="color:teal">:</span><span style="color:green">12</span><span style="color:teal">:</span><span style="color:green">1</span><span style="color:white"> </span><span style="color:yellow">MD019/no-multiple-space-atx</span><span style="color:white"> Multiple spaces after hash on atx style heading</span><span style="color:yellow"> [Context: &quot;##  Summary&quot;]</span><span style="color:white">
</span><span style="color:purple">viewme.md</span><span style="color:teal">:</span><span style="color:green">14</span><span style="color:teal">:</span><span style="color:green">14</span><span style="color:white"> </span><span style="color:yellow">MD047/single-trailing-newline</span><span style="color:white"> Files should end with a single newline character
</span></pre>

[chalk]: https://github.com/chalk/chalk
[license-image]: https://img.shields.io/npm/l/markdownlint-cli2-formatter-pretty.svg
[license-url]: https://opensource.org/licenses/MIT
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[npm-image]: https://img.shields.io/npm/v/markdownlint-cli2-formatter-pretty.svg
[npm-url]: https://www.npmjs.com/package/markdownlint-cli2-formatter-pretty
[terminal-link]: https://github.com/sindresorhus/terminal-link
