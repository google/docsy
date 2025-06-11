<h1>GitHub Pages</h1>

GitHub's "GitHub Pages" is a great hosting option for Open SDG, because GitHub is already a central component of the platform. The way GitHub Pages works is fairly simple: GitHub will serve your files as a website, for free. All you need to do is push them to a branch called `gh-pages`.

## Pros

* GitHub Pages is free
* There is no set-up involved
* The "github.io" domain names include a built-in SSL certificate (HTTPS)

## Cons

There aren't many downsides to GitHub Pages, which is why it is the recommended hosting option in Open SDG.

## Domain name

Out of the box, your GitHub Pages site will available at a pre-defined URL, according to your Github organisation and the repository name. If your Github organisation is "foo" and your repository name is "bar", then your GitHub Pages website will be available at `https://foo.github.io/bar`.

You can also [customise the URL](https://help.github.com/articles/using-a-custom-domain-with-github-pages/) to any domain that you own.

## Set-up

As mentioned above, there is no special set-up involved in GitHub Pages, since we are already using GitHub to host the repositories.

## Automation

The [site starter](https://github.com/open-sdg/open-sdg-site-starter) and [data starter](https://github.com/open-sdg/open-sdg-data-starter) repositories both include a "GitHub Actions" [workflow](https://github.com/open-sdg/open-sdg-site-starter/blob/develop/.github/workflows/deploy-to-staging.yml) to help use GitHub Pages for hosting. Using GitHub Pages for the "production" environment can be accomplished by having a second GitHub organisation. An overview of production deployment is available in the [production documentation](production.md), and details of using GitHub Pages for a production environment is available in the [GitHub Pages production documentation](github-pages-production.md).

The main hurdle in automating deployments to GitHub Pages is setting up the SSH keys or "access tokens" to allow your automation tool to write to the GitHub repository. For a detailed walk-through of this, see the [Quick Start](../quick-start.md).
