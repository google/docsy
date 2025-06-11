# markdownlint-cli2-formatter-codequality

> An output formatter for [`markdownlint-cli2`][markdownlint-cli2] that writes
> results to a [GitLab Code Quality report artifact][gitlab] [JSON][json] file
> (a subset of the [CodeClimate specification][codeclimate])

[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

## Install

```bash
npm install markdownlint-cli2-formatter-codequality --save-dev
```

## Use

For the default output file name of `"markdownlint-cli2-codequality.json"`, use
the following `.markdownlint-cli2.jsonc`:

```json
{
  "outputFormatters": [
    [ "markdownlint-cli2-formatter-codequality" ]
  ]
}
```

To customize the output file name, use the following `.markdownlint-cli2.jsonc`:

```json
{
  "outputFormatters": [
    [ "markdownlint-cli2-formatter-codequality", { "name": "custom-name.json" } ]
  ]
}
```

## Use in GitLab CI

```yaml
markdownlint:
  stage: lint
  image:
    name: davidanson/markdownlint-cli2:<version>
    entrypoint: [""]
  script:
    - markdownlint-cli2 "**/*.md"
  artifacts:
    when: always
    expire_in: 1 week
    reports:
      codequality: markdownlint-cli2-codequality.json

```

## Example Output

```json
[
  {
    "type": "issue",
    "check_name": "MD009/no-trailing-spaces",
    "description": "MD009/no-trailing-spaces: Trailing spaces [Expected: 0 or 2; Actual: 1]",
    "severity": "minor",
    "fingerprint": "f34a01e4a119d7df262993933665d4c97cc601702eeca2814ccad9606a3ccb48",
    "location": {
      "path": "viewme.md",
      "lines": {
        "begin": 3
      }
    }
  },
  {
    "type": "issue",
    "check_name": "MD012/no-multiple-blanks",
    "description": "MD012/no-multiple-blanks: Multiple consecutive blank lines [Expected: 1; Actual: 2]",
    "severity": "minor",
    "fingerprint": "a3d9b647ce8d929904e64fbbb0a47223617e8985d0a4d31e674b22f919f736fb",
    "location": {
      "path": "viewme.md",
      "lines": {
        "begin": 5
      }
    }
  },
  {
    "type": "issue",
    "check_name": "MD025/single-title/single-h1",
    "description": "MD025/single-title/single-h1: Multiple top-level headings in the same document",
    "severity": "minor",
    "fingerprint": "ef26889ac26be010b8bb6d2bd8c846c70bccf90506c0adffb763bef774f93f80",
    "location": {
      "path": "viewme.md",
      "lines": {
        "begin": 6
      }
    }
  },
  {
    "type": "issue",
    "check_name": "MD019/no-multiple-space-atx",
    "description": "MD019/no-multiple-space-atx: Multiple spaces after hash on atx style heading",
    "severity": "minor",
    "fingerprint": "244fe04169875709c7854fc0ddef5c2639aa57bad8a9319e3a9ed6a5f8504c89",
    "location": {
      "path": "viewme.md",
      "lines": {
        "begin": 12
      }
    }
  },
  {
    "type": "issue",
    "check_name": "MD047/single-trailing-newline",
    "description": "MD047/single-trailing-newline: Files should end with a single newline character",
    "severity": "minor",
    "fingerprint": "bf74eade0ee3301ccaa826907651e0d6925b60d517e1110c29b081c7b6ce1acf",
    "location": {
      "path": "viewme.md",
      "lines": {
        "begin": 14
      }
    }
  }
]
```

[codeclimate]: https://github.com/codeclimate/platform/blob/master/spec/analyzers/SPEC.md#data-types
[gitlab]: https://docs.gitlab.com/ee/ci/testing/code_quality.html#implementing-a-custom-tool
[json]: https://wikipedia.org/wiki/JSON
[license-image]: https://img.shields.io/npm/l/markdownlint-cli2-formatter-codequality.svg
[license-url]: https://opensource.org/licenses/MIT
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
[npm-image]: https://img.shields.io/npm/v/markdownlint-cli2-formatter-codequality.svg
[npm-url]: https://www.npmjs.com/package/markdownlint-cli2-formatter-codequality
