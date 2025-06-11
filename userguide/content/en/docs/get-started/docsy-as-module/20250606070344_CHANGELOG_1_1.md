# Changelog

## [0.32.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.31.1...plugin-react-load-v0.32.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* chore!: Update to 2.x and 0.200.x @opentelemetry/* packages from opentelemetry-js.git per [2.x upgrade guide](https://github.com/open-telemetry/opentelemetry-js/blob/main/doc/upgrade-to-2.x.md)
  * The minimum supported Node.js has been raised to ^18.19.0 || >=20.6.0. This means that support for Node.js 14 and 16 has been dropped.
  * The minimum supported TypeScript version has been raised to 5.0.4.
  * The compilation target for transpiled TypeScript has been raised to ES2022 (from ES2017).

### Bug Fixes

* **deps:** update otel core experimental to ^0.57.2 ([#2716](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2716)) ([d2a9a20](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/d2a9a20f1cd8c46c842e18490a4eba36fd71c2da))


### Miscellaneous Chores

* update to JS SDK 2.x ([#2738](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2738)) ([7fb4ba3](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/7fb4ba3bc36dc616bd86375cfd225722b850d0d5))

## [0.31.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.31.0...plugin-react-load-v0.31.1) (2025-02-19)


### Bug Fixes

* **deps:** update all patch versions ([#2413](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2413)) ([1a55420](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/1a55420d8c00ca998b57270df77857c48ebbe8d7))

## [0.31.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.30.1...plugin-react-load-v0.31.0) (2024-09-02)


### Features

* update deps matching "@opentelemetry/" ([9fa058e](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/9fa058ebb919de4e2a4e1af95b3c792c6ea962ac))

## [0.30.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.30.0...plugin-react-load-v0.30.1) (2024-04-25)


### Bug Fixes

* revert modifications to Apache license ([#2105](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/2105)) ([4590c8d](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/4590c8df184bbcb9bd67ce1111df9f25f865ccf2))

## [0.30.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.29.1...plugin-react-load-v0.30.0) (2023-11-13)


### Features

* add esnext target for web instrumentations ([#1776](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1776)) ([2698bb1](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/2698bb1a5a4de5a5c6272643d6e50180db874d64))

## [0.29.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.29.0...plugin-react-load-v0.29.1) (2023-08-14)


### Bug Fixes

* Revert "feat(minification): Add importHelpers and tslib as a dependency ([#1545](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1545))" ([#1611](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1611)) ([e5bca5f](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/e5bca5fe5b27adc59c8de8fe4087d38b69d93bd4))

## [0.29.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.28.2...plugin-react-load-v0.29.0) (2023-07-12)


### Features

* **minification:** Add importHelpers and tslib as a dependency ([#1545](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1545)) ([65f612e](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/65f612e35c4d67b9935dc3a9155588b35d915482))

## [0.28.2](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.28.1...plugin-react-load-v0.28.2) (2023-05-16)


### Bug Fixes

* **eslint-config:** replace gts with prettier and eslint ([#1439](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1439)) ([2571c37](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/2571c371be1b5738442200cab2415b6a04c32aab))

## [0.28.1](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.28.0...plugin-react-load-v0.28.1) (2022-11-02)


### Bug Fixes

* address webpack memory issue for browser tests ([#1264](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1264)) ([c7f08fe](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/c7f08fed51bca68b0c522769c3c589102b98ec93))
* separate public and internal types for all instrumentations ([#1251](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/1251)) ([e72ea58](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/e72ea58cfb888a90590970f63d3a042a8ea3aaf2))

## [0.28.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.27.0...plugin-react-load-v0.28.0) (2022-06-08)


### Features

* update core dependencies stable ^1.3.1 experimental ^0.29.2 ([141b155](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/141b155e344980b51264e26b26c117b2113bcef6))

## [0.27.0](https://github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.26.1...plugin-react-load-v0.27.0) (2022-05-14)


### Features

* add supported node versions for all packages ([#973](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/973)) ([baaacbd](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/baaacbdd35ca4baab0afae64647aa8c0380ee4b7))
* remove colors dependency ([#943](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/943)) ([b21b96c](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/b21b96c1a3a4f871370f970d6b2825f00e1fe595)), closes [#826](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/826)
* update webpack outside of examples ([#963](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/963)) ([9a58648](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/9a586480ed6a7677fb1283a61d05540345c52617))
* use Otel SDK 1.2/0.28 ([#984](https://github.com/open-telemetry/opentelemetry-js-contrib/issues/984)) ([098c2ed](https://github.com/open-telemetry/opentelemetry-js-contrib/commit/098c2ed6f9c5ab7bd865685018c0777245aab3b7))

### [0.26.1](https://www.github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.26.0...plugin-react-load-v0.26.1) (2022-01-24)


### Bug Fixes

* fix CI by forcing colors@1.4.0 ([#825](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/825)) ([0ec9f08](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/0ec9f080520fe0f146a915a656300ef53a151ace))
* rename lerna's --include-filtered-dependencies option ([#817](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/817)) ([cf268e7](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/cf268e7a92b7800ad6dbec9ca77466f9ee03ee1a))

## [0.26.0](https://www.github.com/open-telemetry/opentelemetry-js-contrib/compare/plugin-react-load-v0.25.0...plugin-react-load-v0.26.0) (2021-10-22)


### Features

* support API and SDK 1.0 ([#706](https://www.github.com/open-telemetry/opentelemetry-js-contrib/issues/706)) ([096b694](https://www.github.com/open-telemetry/opentelemetry-js-contrib/commit/096b694bbc3079f0ab4ee0462869b10eb8185202))
