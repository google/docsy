# Example Output from Combination 4

OpenCensus used on server, OpenTelemetry (with **binary propagator**) used on
client. Propagation through `grpc-trace-bin` header.

## Client

Note: traceId **901c68f681e5a85a125b3dad82e51498**

```sh
$ npm run client:otel:binprop

> grpc-census-prop-example@0.9.0 client:otel:binprop /opentelemetry-js-contrib/examples/grpc-census-prop
> cross-env BINARY_PROPAGATOR=true node ./capitalize_client.js

PluginLoader#load: trying to load grpc@1.24.2
>  opentelemetry
Sleeping 5 seconds before shutdown to ensure all records are flushed.
(node:29834) DeprecationWarning: grpc.load: Use the @grpc/proto-loader module with grpc.loadPackageDefinition instead
{ traceId: '901c68f681e5a85a125b3dad82e51498',
  parentId: '070c69c837bbbd1e',
  name: 'grpc.rpc.Fetch/Capitalize',
  id: 'ecdf319bce919fde',
  kind: 2,
  timestamp: 1591295728961209,
  duration: 159530,
  attributes:
   { component: 'grpc',
     'grpc.method': '/rpc.Fetch/Capitalize',
     'grpc.kind': 2,
     'grpc.status_code': '0' },
  status: { code: 0 },
  events: [ { name: 'sent', attributes: undefined, time: [Array] } ] }
<  OPENTELEMETRY
traceid: 901c68f681e5a85a125b3dad82e51498
{ traceId: '901c68f681e5a85a125b3dad82e51498',
  parentId: undefined,
  name: 'tutorialsClient.capitalize',
  id: '070c69c837bbbd1e',
  kind: 0,
  timestamp: 1591295728960326,
  duration: 163145,
  attributes: {},
  status: { code: 0 },
  events: [] }
Completed.
```

## Server

Note: traceId **901c68f681e5a85a125b3dad82e51498**

```sh
$ npm run server:census

> grpc-census-prop-example@0.9.0 server:census /opentelemetry-js-contrib/examples/grpc-census-prop
> cross-env CENSUS_TRACER=true node ./capitalize_server.js

Metadata {
  _internal_repr:
   { 'grpc-trace-bin':
      [ Buffer [Uint8Array] [
          0,
          0,
          144,
          28,
          104,
          246,
          129,
          229,
          168,
          90,
          18,
          91,
          61,
          173,
          130,
          229,
          20,
          152,
          1,
          236,
          223,
          49,
          155,
          206,
          145,
          159,
          222,
          2,
          1 ] ],
     'user-agent': [ 'grpc-node/1.24.2 grpc-c/8.0.0 (linux; chttp2; ganges)' ] },
  flags: 0 }
traceid: 901c68f681e5a85a125b3dad82e51498
RootSpan: {traceId: 901c68f681e5a85a125b3dad82e51498, spanId: 63028b5ce96caec6, name: grpc.rpc.Fetch/Capitalize }
 ChildSpans:
  {spanId: d70a03f18955e762, name: tutorials.FetchImpl.capitalize}
```
