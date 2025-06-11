# Changelog

## [0.13.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.12.2...instrumentation-runtime-node-v0.13.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* chore!: Update to 2.x and 0.200.x @opentelemetry/* packages from opentelemetry-js.git per [2.x upgrade guide](https://github.com/open-telemetry/opentelemetry-js/blob/main/doc/upgrade-to-2.x.md)
  * The minimum supported Node.js has been raised to ^18.19.0 || >=20.6.0. This means that support for Node.js 14 and 16 has been dropped.
  * The minimum supported TypeScript version has been raised to 5.0.4.
  * The compilation target for transpiled TypeScript has been raised to ES2022 (from ES2017).

### Bug Fixes

* **deps:** update otel core experimental to ^0.57.2 ([#2716](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2716)) ([d2a9a20](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/d2a9a20f1cd8c46c842e18490a4eba36fd71c2da))


### Miscellaneous Chores

* update to JS SDK 2.x ([#2738](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2738)) ([7fb4ba3](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/7fb4ba3bc36dc616bd86375cfd225722b850d0d5))

## [0.12.2](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.12.1...instrumentation-runtime-node-v0.12.2) (2025-02-19)


### Bug Fixes

* **deps:** update otel core experimental to ^0.57.1 ([#2687](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2687)) ([5e20fe2](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/5e20fe2f450a1be4ea100e8a6d196e33ccff0cda))

## [0.12.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.12.0...instrumentation-runtime-node-v0.12.1) (2025-01-09)


### Bug Fixes

* **instrumentation-runtime-node:** use the correct unit for eventloop.utilization ([#2631](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2631)) ([3350583](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/3350583fd4b0b2e08ed20429bfc5409d537d7a9d))

## [0.12.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.11.0...instrumentation-runtime-node-v0.12.0) (2024-12-18)


### Features

* **deps:** update deps matching '@opentelemetry/*' ([#2608](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2608)) ([aa46705](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/aa46705d2fd1bd5ee6d763ac8cd73a7630889d34))

## [0.11.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.10.0...instrumentation-runtime-node-v0.11.0) (2024-12-04)


### Features

* **deps:** update deps matching '@opentelemetry/*' ([#2582](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2582)) ([5df02cb](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/5df02cbb35681d2b5cce359dda7b023d7bf339f2))

## [0.10.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.9.0...instrumentation-runtime-node-v0.10.0) (2024-11-18)


### Features

* **deps:** update deps matching '@opentelemetry/*' ([#2535](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2535)) ([5223a6c](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/5223a6ca10c5930cf2753271e1e670ae682d6d9c))

## [0.9.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.8.0...instrumentation-runtime-node-v0.9.0) (2024-11-07)


### ⚠ BREAKING CHANGES

* **instrumentation-runtime-node:** add prom-client-metrics ([#2136](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2136))

### Features

* **instrumentation-runtime-node:** add prom-client-metrics ([#2136](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2136)) ([80d0c74](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/80d0c74f8cafdfce681ef39e6cea103dca4e4ccd))

## [0.8.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.7.0...instrumentation-runtime-node-v0.8.0) (2024-10-25)


### Features

* update "@opentelemetry/*" dependencies to 1.27.0/0.54.0 ([2822511](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/2822511a8acffb875ebd67ff2cf95980a9ddc01e))

## [0.7.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.6.0...instrumentation-runtime-node-v0.7.0) (2024-09-02)


### Features

* update deps matching "@opentelemetry/" ([9fa058e](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/9fa058ebb919de4e2a4e1af95b3c792c6ea962ac))

## [0.6.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.5.0...instrumentation-runtime-node-v0.6.0) (2024-07-03)


### ⚠ BREAKING CHANGES

* export instrumentations only as named export ([#2296](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2296))
* standardize supported versions and set upper bound limit ([#2196](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2196))

### Bug Fixes

* export instrumentations only as named export ([#2296](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2296)) ([0ed4038](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/0ed40384287a8d06549c2a9c98a26ea9b068c472))
* standardize supported versions and set upper bound limit ([#2196](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2196)) ([01c28ae](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/01c28ae016ed32f9968e52bc91e3e3700dcef82e))

## [0.5.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.4.0...instrumentation-runtime-node-v0.5.0) (2024-06-06)


### Features

* update otel core dependencies ([#2257](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2257)) ([71c15d5](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/71c15d597276773c19c16c1117b8d151892e5366))

## [0.4.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.3.0...instrumentation-runtime-node-v0.4.0) (2024-04-25)


### Features

* **deps:** update otel-js to 0.51.0 ([80cbee7](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/80cbee73130c65c8ccd78384485a7be8d2a4a84b))
* remove generic type from instrumentations ([80cbee7](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/80cbee73130c65c8ccd78384485a7be8d2a4a84b))


### Bug Fixes

* revert modifications to Apache license ([#2105](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2105)) ([4590c8d](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/4590c8df184bbcb9bd67ce1111df9f25f865ccf2))

## [0.3.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.2.1...instrumentation-runtime-node-v0.3.0) (2024-04-03)


### Features

* **deps:** update otel-js to 1.23.0/0.50.0 ([#2076](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2076)) ([d5f079b](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/d5f079b3992395dcfb3b791c9fdaeefd6d6526f8))


### Bug Fixes

* **instrumentation-runtime-node:** mixin default config in constructor ([#2036](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2036)) ([146edfa](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/146edfa89bef0b1405d573c7373af10d90639c2a))

## [0.2.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.2.0...instrumentation-runtime-node-v0.2.1) (2024-03-11)


### Bug Fixes

* **instrumentation-runtime-node:** use TestMetricReader, unref timer ([#1965](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1965)) ([e24797e](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/e24797e4211b4b39a55b1549e113a425226806b8))

## [0.2.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/instrumentation-runtime-node-v0.1.0...instrumentation-runtime-node-v0.2.0) (2024-03-06)


### ⚠ BREAKING CHANGES

* **instrumentaiton-runtime-node:** rename exported instrumentation to match package name ([#1989](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1989))

### Features

* **deps:** update otel-js to 1.22.0/0.49.1 ([edc426b](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/edc426b348bc5f45ff6816bcd5ea7473251a05df))


### Bug Fixes

* **instrumentaiton-runtime-node:** rename exported instrumentation to match package name ([#1989](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1989)) ([fef1b36](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/fef1b3677bf6d0ecab371903136bfa726e01c1ad))
