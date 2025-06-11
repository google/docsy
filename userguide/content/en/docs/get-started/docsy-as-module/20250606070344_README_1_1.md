# OpenTelemetry Plugin React Load

[![NPM Published Version][npm-img]][npm-url]
[![Apache License][license-image]][license-image]

This module provides automatic instrumentation for *React lifecycles* for Web applications, which may be loaded using the [`@opentelemetry/sdk-trace-web`](https://www.npmjs.com/package/@opentelemetry/sdk-trace-web) package.

If total installation size is not constrained, it is recommended to use the [`@opentelemetry/auto-instrumentations-web`](https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-web) bundle with [`@opentelemetry/sdk-trace-web`](https://www.npmjs.com/package/@opentelemetry/sdk-trace-web) for the most seamless instrumentation experience.

Compatible with OpenTelemetry JS API and SDK `1.0+`.

## Status

| Maturity                                 | [Component Owner](../../../.github/component_owners.yml) | Compatibility         |
| ---------------------------------------- | -------------------------------------------------------- | --------------------- |
| [Unmaintained](../../../CONTRIBUTING.md) | N/A                                                      | API 1.0+<br/>SDK 1.0+ |

## Installation

```bash
npm install --save @opentelemetry/plugin-react-load
```

## Usage

```js
import { BaseOpenTelemetryComponent } from '@opentelemetry/plugin-react-load';

// Set once for the entire plugin
BaseOpenTelemetryComponent.setLogger(logger);
BaseOpenTelemetryComponent.setTracer('name', 'version');
```

To instrument components, extend `BaseOpenTelemetryComponent`:

```js
import { BaseOpenTelemetryComponent } from '@opentelemetry/plugin-react-load';

export class Component1 extends BaseOpenTelemetryComponent { ... }
```

See [/examples/react-load](https://github.com/open-telemetry/opentelemetry-js-contrib/tree/main/examples/react-load) for a short example.

## Semantic Conventions

This package does not currently generate any attributes from semantic conventions.

## Useful links

- For more information on OpenTelemetry, visit: <https://opentelemetry.io/>
- For more about OpenTelemetry JavaScript: <https://github.com/open-telemetry/opentelemetry-js>
- For help or feedback on this project, join us in [GitHub Discussions][discussions-url]

## License

Apache 2.0 - See [LICENSE][license-url] for more information.

[discussions-url]: https://github.com/open-telemetry/opentelemetry-js/discussions
[license-url]: https://github.com/open-telemetry/opentelemetry-js-contrib/blob/main/LICENSE
[license-image]: https://img.shields.io/badge/license-Apache_2.0-green.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@opentelemetry/plugin-react-load
[npm-img]: https://badge.fury.io/js/%40opentelemetry%2Fplugin-react-load.svg
