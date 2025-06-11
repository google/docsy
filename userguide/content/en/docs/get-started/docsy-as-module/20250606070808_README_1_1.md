# Gavarnie

Preconfigured and ready-to-use features designed to help you kickstart your full-stack NuxtHub project **quickly**.

[Read the announcement](https://soubiran.dev/posts/introducing-gavarnie-launch-your-saas-with-nuxt-and-assurance)

[⛰️ Gavarnie in action](https://gavarnie.barbapapazes.dev)

> [!NOTE]
> My aim with Gavarnie is not just to create another starter kit, but to contribute to the initiative of advancing Nuxt and NuxtHub.
> Therefore, Gavarnie serves as a starting point, rather than an end, and it's up to us to foster its development. Please join me in enhancing it.

<!-- automd:fetch url="gh:barbapapazes/barbapapazes/main/automd/support-my-work.md" -->

> [!NOTE]
> If you find this project useful, please consider [supporting my work via GitHub Sponsors](https://github.com/sponsors/barbapapazes)! 💜

<!-- /automd -->

[![Deploy to NuxtHub](https://hub.nuxt.com/button.svg)](https://hub.nuxt.com/new?template=gavarnie)

Crafted with [Nuxt UI Pro](https://ui.nuxt.com/pro), [NuxtHub](https://hub.nuxt.com), [Nuxt Auth Utils](https://github.com/atinux/nuxt-auth-utils), and [Nuxt Security](https://nuxt.com/modules/security).

## Features

- 🎨 **Nuxt UI**: Design stunning and responsive user interfaces swiftly with Nuxt UI
- 💻 **NuxtHub**: Access an extensive array of full-stack capabilities with NuxtHub
- 🔑 **Nuxt Auth Utils**: Simplified social authentication using Nuxt Auth Utils, seamlessly integrated with NuxtHub
- 🚪 **Login & Signup**: Comes with built-in login and signup pages
- 🧑 **Profile**: Ready-to-use profile page, with email modification and account removal options.

<!-- automd:fetch url="gh:barbapapazes/barbapapazes/main/automd/development.md" -->

## Development

<details>

<summary>Local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`

</details>

<!-- /automd -->

Set up a `.env` file based on the `.env.example` template. Modify the values as necessary.

Launch the development server with:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Production

This application is intended for deployment on [Cloudflare](https://cloudflare.com). You can effortlessly utilize [NuxtHub Admin](https://hub.nuxt.com/docs/getting-started/deploy#nuxthub-admin) for a smooth deployment process or use the CLI:

```bash
npx nuxthub deploy
```

You will also need a [Nuxt UI Pro License](https://ui.nuxt.com/pro) to build the application for production.

<!-- automd:fetch url="gh:barbapapazes/barbapapazes/main/automd/license.md" -->

## License

Published under the [MIT](./LICENSE) license.

<!-- /automd -->
