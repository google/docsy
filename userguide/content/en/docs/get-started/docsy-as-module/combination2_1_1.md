# Example Output from Combination 2

OpenTelemetry (with **binary propagator**) used on server, OpenCensus used
on client. Propagation through `grpc-trace-bin` header.

## Client

Note: traceId **1565fbb4d6f042d8880bedb509bf6f2e**

```sh
$ npm run client:census

> grpc-census-prop-example@0.9.0 client:census /opentelemetry-js-contrib/examples/grpc-census-prop
> cross-env CENSUS_TRACER=true node ./capitalize_client.js

>  opentelemetry
Sleeping 5 seconds before shutdown to ensure all records are flushed.
(node:14866) DeprecationWarning: grpc.load: Use the @grpc/proto-loader module with grpc.loadPackageDefinition instead
<  OPENTELEMETRY
RootSpan: {traceId: 1565fbb4d6f042d8880bedb509bf6f2e, spanId: a5ccb3c920a18ace, name: tutorialsClient.capitalize }
 ChildSpans:
  {spanId: c92c3b3f955cdce1, name: grpc.rpc.Fetch/Capitalize}
Completed.
```

## Server

Note: traceId **1565fbb4d6f042d8880bedb509bf6f2e**

```sh
$ npm run server:otel:binprop

> grpc-census-prop-example@0.9.0 server:otel:binprop /opentelemetry-js-contrib/examples/grpc-census-prop
> cross-env BINARY_PROPAGATOR=true node ./capitalize_server.js

PluginLoader#load: trying to load grpc@1.24.2
Metadata {
  _internal_repr:
   { 'grpc-trace-bin':
      [ Buffer [Uint8Array] [
          0,
          0,
          21,
          101,
          251,
          180,
          214,
          240,
          66,
          216,
          136,
          11,
          237,
          181,
          9,
          191,
          111,
          46,
          1,
          201,
          44,
          59,
          63,
          149,
          92,
          220,
          225,
          2,
          1 ] ],
     'user-agent': [ 'grpc-node/1.24.2 grpc-c/8.0.0 (linux; chttp2; ganges)' ] },
  flags: 0 }
traceid: 1565fbb4d6f042d8880bedb509bf6f2e
{ traceId: '1565fbb4d6f042d8880bedb509bf6f2e',
  parentId: '891bd1ebb5e44ec8',
  name: 'tutorials.FetchImpl.capitalize',
  id: '61a1c3bce0364fe2',
  kind: 1,
  timestamp: 1591295467649290,
  duration: 101304,
  attributes: {},
  status: { code: 0 },
  events: [] }
{ traceId: '1565fbb4d6f042d8880bedb509bf6f2e',
  parentId: 'c92c3b3f955cdce1',
  name: 'grpc.rpc.Fetch/Capitalize',
  id: '891bd1ebb5e44ec8',
  kind: 1,
  timestamp: 1591295467645184,
  duration: 106431,
  attributes:
   { 'grpc.kind': 1, component: 'grpc', 'grpc.status_code': '0' },
  status: { code: 0 },
  events:
   [ { name: 'received', attributes: undefined, time: [Array] } ] }
```
