# Overview

The React Load plugin provides auto-instrumentation for react lifecycle methods.
This example uses the plugin and exports them to the console.

The example will show traces belong to the mounting, updating, and unmounting flows as defined by React 16.4+.

## Installation

```sh
# from this directory
npm install
```

## Run the example

Run docker

```sh
# from this directory
npm run docker:start
```

Run app

```sh
# from this directory
npm run build
npm start
```

By default, the application runs on port 3000.

Open Zipkin page at <http://localhost:9411/zipkin/> - you should be able to see the spans in zipkin

## Screenshots of traces

Take note of the parent-child relationships.

### First load

Upon loading, <http://localhost:3000> mounting spans will be exported
<p align="center"><img alt="span data showing parentId" src="./images/mounting.png?raw=true"/></p>
<p align="center"><img alt="Zipkin UI showing trace" src="./images/zipkin-mounting.png?raw=true"/></p>

### Pressing 'Enter'

Here we can see the previous component unmounting and the new component mounting.
<p align="center"><img alt="span data showing parentId" src="./images/redirect.png?raw=true"/></p>
<p align="center"><img alt="Zipkin UI showing trace" src="./images/zipkin-redirect.png?raw=true"/></p>
<p align="center"><img alt="Zipkin UI showing trace" src="./images/zipkin-redirect2.png?raw=true"/></p>

### Pressing 'Make Request'

While in loading state:
<p align="center"><img alt="span data showing parentId" src="./images/updating.png?raw=true"/></p>
<p align="center"><img alt="Zipkin UI showing trace" src="./images/zipkin-updating.png?raw=true"/></p>

After a few seconds (when the request is fulfilled):
<p align="center"><img alt="span data showing parentId" src="./images/updating2.png?raw=true"/></p>
<p align="center"><img alt="Zipkin UI showing trace" src="./images/zipkin-updating2.png?raw=true"/></p>

Since the example adds in a delay to the request, we can see that reflected in the duration of some spans:
<p align="center"><img alt="span data showing duration value" src="./images/duration.png?raw=true"/></p>

## Useful links

- For more information on OpenTelemetry, visit: [opentelemetry.io][otel]
- For more information on OpenTelemetry for Node.js, visit: [@opentelemetry/sdk-trace-node][otel-node]

## LICENSE

Apache 2.0 - See [LICENSE][license-url] for more information.

[license-url]: https://github.com/open-telemetry/opentelemetry-js-contrib/blob/main/LICENSE
[otel]: https://opentelemetry.io/
[otel-node]: https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-sdk-trace-node
