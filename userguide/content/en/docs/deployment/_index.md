---
title: Previews and Deployment
weight: 7
description: Deploying your Docsy site.
---

There are multiple possible options for deploying a Hugo site, including Netlify, Firebase Hosting, Bitbucket with Aerobatic, and more; you can read about them all in [Hosting and Deployment](https://gohugo.io/hosting-and-deployment/). Hugo also makes it easy to deploy your site locally for quick previews of your content.

## Serving your site locally

Depending on your deployment choice you may want to serve your site locally during development to preview content changes. To serve your site locally:

1. Ensure you have an up to date local copy of your site files cloned from your repo.

1. Ensure you have the tools described in [Prerequisites and installation](/docs/get-started/docsy-as-module/installation-prerequisites) installed on your local machine, including `postcss-cli` (you'll need it to generate the site resources the first time you run the server).
1. Run the `hugo server` command in your site root. By default your site will be available at <http://localhost:1313>.

Now that you're serving your site locally, Hugo will watch for changes to the content and automatically refresh your site. If you have more than one local git branch, when you switch between git branches the local website reflects the files in the current branch.

## Build environments and indexing

By default, Hugo sites built with `hugo` (rather than served locally with `hugo server`) have the Hugo build environment `production`. Deployed Docsy sites with `production` builds can be indexed by search engines, including [Google Custom Search Engines](/docs/adding-content/search/#configure-search-with-a-google-custom-search-engine). Production builds also have optimized JavaScript and CSS for live deployment (for example, minified JS rather than the more legible original source).

If you do not want your deployed site to be indexed by search engines (for example if you are still developing your live site), or if you want to build a development version of your site for offline analysis, you can set your Hugo build environment to something else such as `development` (the default for local deploys with `hugo server`), `test`, or another environment name of your choice.

The simplest way to set this is by using the `-e` flag when specifying or running your `hugo` command, as in the following example:

```
hugo -e development
```

## Deployment with Netlify

We recommend using [Netlify](https://www.netlify.com/) as a particularly simple way to serve your site from your Git provider (GitHub, GitLab, or BitBucket), with [continuous deployment](https://www.netlify.com/docs/continuous-deployment/), previews of the generated site when you or your users create pull requests against the doc repo, and more. Netlify is free to use for Open Source projects, with premium tiers if you require greater support.

Before deploying with Netlify, make sure that you've pushed your site source to your chosen GitHub (or other provider) repo, following any setup instructions in [Using the theme](/docs/get-started/docsy-as-module).

Then follow the instructions in [Host on Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/) to set up a Netlify account (if you don't have one already) and authorize access to your GitHub or other Git provider account. Once you're logged in:

1. Click **New site from Git**.
1. Click your chosen Git provider, then choose your site repo from your list of repos.
1. In the **Deploy settings** page:
   1. Specify your **Build command**. The exact build command depends on how you have chosen to use Docsy:
      * If you are using Docsy as a [Git submodule](/docs/get-started/other-options/#option-1-docsy-as-a-git-submodule), specify `cd themes/docsy && git submodule update -f --init && cd ../.. && hugo`. You need to specify this rather than just `hugo` so that Netlify can use the theme's submodules.
      * If you are using Docsy as a [Hugo module](/docs/get-started/docsy-as-module/) or NPM package, you can just specify `hugo`.
   3. Click **Show advanced**.
   4. In the **Advanced build settings** section, click **New variable**.
   5. Specify `NODE_VERSION` as the **Key** for the new variable, and set its **Value** to the [latest LTS version](https://nodejs.org/en/download/) of node.js (minimum recommended version: `v20.x`).
   6. In the **Advanced build settings** section, click **New variable**.
   7. Specify `HUGO_VERSION` as the **Key** for the new variable, and set its **Value** to the [latest version](https://github.com/gohugoio/hugo/releases) of Hugo (minimum recommended version: `0.125.4`).
   8. In the **Advanced build settings** section, click **New variable** again.
   9. Specify `GO_VERSION` as the **Key** for the new variable, and set its **Value** to the [latest version](https://go.dev/dl/) of Go (minimum recommended version: `1.21`).

   If you don't want your site to be indexed by search engines, you can add an environment flag to your build command to specify a non-`production` environment, as described in [Build environments and indexing](#build-environments-and-indexing).
1. Click **Deploy site**.

{{% alert title="Note" color="primary" %}}
Netlify uses your site repo's `package.json` file to install any JavaScript dependencies (like `postcss`) before building your site. If you haven't just copied our example site's version of this file, make sure that you've specified all our [prerequisites](/docs/get-started/docsy-as-module/installation-prerequisites/#install-postcss).

For example, if you want to use a version of `postcss-cli` later than version 8.0.0, you need to ensure that your `package.json` also specifies `postcss` separately:

```
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss-cli": "^11.0.0",
    "postcss": "^8.4.38"
  }
```

{{% /alert %}}

Alternatively, you can follow the same instructions but specify your **Deploy settings** in a [`netlify.toml` file](https://docs.netlify.com/configure-builds/file-based-configuration/) in your repo rather than in the **Deploy settings** page. You can see an example of this in the [Docsy theme repo](https://github.com/google/docsy/blob/main/netlify.toml) (though note that the build command here is a little unusual because the Docsy user guide is *inside* the theme repo).

If you have an existing deployment you can view and update the relevant information by selecting the site from your list of sites in Netlify, then clicking **Site settings** - **Build and deploy**. Ensure that **Ubuntu Focal 20.04** is selected in the **Build image selection** section - if you're creating a new deployment this is used by default. You need to use this image to run the extended version of Hugo.

## Deployment on GitHub Pages

If your repo is hosted on [GitHub](https://github.com), a simple option is to serve your site with [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages). GitHub Pages lets you create project, user, and organization sites; for a project site, your site URL will be `http(s)://<username>.github.io/<repository_name>`, custom domains are also supported. GitHub Pages come with [continuous deployment](https://docs.github.com/en/actions/deployment/about-deployments/about-continuous-deployment) using GitHub actions, while the [marketplace for actions](https://github.com/marketplace/actions) has useful tools for spell and link checking, deploy previews, and more. Using your existing GitHub account, you can start by using the free plan for publicly available repositories, with premium tiers available for business use cases.

The Docsy example site repo provides a [workflow file](https://github.com/google/docsy-example/blob/master/.github/workflows/deploy-github-pages.yml) that you can use when deploying to GitHub Pages. If you used the example site as template for your new site as described [here](https://www.docsy.dev/docs/get-started/docsy-as-module/example-site-as-template/), you may already have this file in your repo, if not the instructions below show you how to create your own workflow file.

Before deploying on GitHub Pages, make sure that you've pushed your site source to your chosen GitHub repo, following any setup instructions in [Using the theme](/docs/get-started/docsy-as-module).

{{% alert title="Correct baseURL setting" color="primary" %}}
Make sure to correctly set your site's `baseURL`, either via hugo's `--baseURL '…'` command line parameter or inside your your `hugo.toml`/`hugo.yaml`/`hugo.json` configuration file. When deploying to GitHub pages your `baseURL` needs to be set to `https://<USERNAME>.github.io/<repository_name>`, otherwise your site layout will be broken.
{{% /alert %}}

1. With GitHub Pages, a site is published to the branch `gh-pages` and served from there by default. You must create this branch first, either in the GitHub web interface or via command line (at the root of your local repo clone):

    ```console
    $ git checkout -b gh-pages
    Switched to a new branch 'gh-pages'
    ```

1. Push this local branch to your repo:

    ```console
    $ git push --set-upstream origin gh-pages
     details omitted …
     * [new branch]      new -> new
    branch 'gh-pages' set up to track 'origin/gh-pages'.
    ```

1. Switch back to the `main` (or `work`) branch of your repo:

    ```console
    $ git checkout main
    Switched to branch 'main'

    ```

1. Check if you already have the workflow file `.github/workflows/deploy-github-pages.yml` in your repo. If this file doesn't exist, do the following:

    1. Create a new empty workflow file from the root of your repo, as follows:

       ```console
       $ mkdir -p .github/workflows
       $ touch .github/workflows/deploy-github-pages.yml
       ```


    1. Open the file in an editor of your choice, paste in the code below, and save the file:

       ```yaml
       name: Deployment to GitHub Pages

       on:
         workflow_dispatch:
         push:
           branches:
             - main  # <-- specify the branch you want to deploy from
         pull_request:

       env:
         REPO_NAME: ${{ github.event.repository.name }}
         REPO_OWNER: ${{ github.repository_owner }}

       jobs:
         deploy:
           runs-on: ubuntu-22.04
           concurrency:
             group: ${{ github.workflow }}-${{ github.ref }}
           steps:
             - uses: actions/checkout@v4
               with:
                 fetch-depth: 0         # Fetch all history for .GitInfo and .Lastmod

             - name: Setup Hugo
               uses: peaceiris/actions-hugo@v3
               with:
                 hugo-version: '0.125.5'
                 extended: true

             - name: Setup Node
               uses: actions/setup-node@v4
               with:
                 node-version: '20'
                 cache: 'npm'
                 cache-dependency-path: '**/package-lock.json'

             - run: npm ci
             - run: hugo --baseURL https://${REPO_OWNER}.github.io/${REPO_NAME} --minify

             - name: Deploy
               uses: peaceiris/actions-gh-pages@v4
               if: ${{ github.ref == 'refs/heads/main' }} # <-- specify same branch as above here
               with:
                 github_token: ${{ secrets.GITHUB_TOKEN }}
       ```

   1. Add the file to the staging area, commit your change and push the change to your remote GitHub repo:

       ```console
       $ git add .github/workflows/deploy-github-pages.yml
       $ git commit -m "Adding workflow file for site deployment"
       $ git push origin
       ```

1. In your browser, make sure you are logged into your GitHub account. In your repo  **Settings**, select **Pages**.

    1. Under **Build and deployment**, select **Deploy from a branch** in the **source** dropdown.

    2. From the **branch** dropdown, select **gh-page** as branch where the site is built from.

    3. From the **folder** dropdown, select **/(root)** as root directory.

That's it! Your deployment workflow for your site is configured.

Any future push to the branch specified in your workflow file will now trigger the action workflow defined in the workflow file. Additionally, you can trigger the deployment manually by using GitHub web UI.

Once you push to your repo, you can see the progress of the triggered workflow in the **Actions** tab of the the GitHub web UI:

```
URL 'Repo actions': https://github.com/<username>/<repository_name>/actions
```

After the first successful deployment, a new environment `github-pages` is added to your repo. This is shown at the right of your repo main view (below **Releases** and **Packages**). When you click on this environment, a list of deployments is displayed:

```
URL 'Repo deployments': https://github.com/<username>/<repository_name>/deployments/
```

You can find out more in [Hosting on GitHub]( https://gohugo.io/hosting-and-deployment/hosting-on-github/) in the Hugo documentation.

For advanced use cases, the [`hugo-action`](https://github.com/peaceiris/actions-hugo) used inside the workflow file has more configuration options, which are well [documented](https://github.com/marketplace/actions/hugo-setup).


## Deployment with Amazon S3 + Amazon CloudFront

There are several options for publishing your web site using [Amazon Web Services](https://aws.amazon.com), as described in this [blog post](https://adrianhall.github.io/cloud/2019/01/31/which-aws-service-for-hosting/). This section describes the most basic option, deploying your site using an S3 bucket and activating the CloudFront CDN (content delivery network) to speed up the delivery of your deployed contents.

1. After your [registration](https://portal.aws.amazon.com/billing/signup#/start) at AWS, create your S3 bucket, connect it with your domain, and add it to the CloudFront CDN. This [blog post](https://www.noorix.com.au/blog/how-to/hosting-static-website-with-aws-s3-cloudfront/) has all the details and provides easy to follow step-by-step instructions for the whole procedure.
1. Download and install the latest version 2 of the AWS [Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/get-started-install.html) (CLI). Then configure your CLI instance by issuing the command `aws configure` (make sure you have your AWS Access Key ID and your AWS Secret Access Key at hand):

   ```
   $ aws configure
   AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
   AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
   Default region name [None]: eu-central-1
   Default output format [None]:
   ```

1. Check the proper configuration of your AWS CLI by issuing the command `aws s3 ls`, this should output a list of your S3 bucket(s).

1. Inside your `hugo.toml`/`hugo.yaml`/`hugo.json`, add a `[deployment]` section like this one:

    {{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[deployment]
[[deployment.targets]]
name = "aws"
URL = "s3://www.your-domain.tld"
cloudFrontDistributionID = "E9RZ8T1EXAMPLEID"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
deployment:
  targets:
    - name: aws
      URL: 's3://www.your-domain.tld'
      cloudFrontDistributionID: E9RZ8T1EXAMPLEID
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "deployment": {
    "targets": [
      {
        "name": "aws",
        "URL": "s3://www.your-domain.tld",
        "cloudFrontDistributionID": "E9RZ8T1EXAMPLEID"
      }
    ]
  }
}
{{< /tab >}}
    {{< /tabpane >}}

1. Run the command `hugo --gc --minify` to render the site's assets into the `public/` directory of your Hugo build environment.
1. Use Hugo's built-in `deploy` command to deploy the site to S3:

   ```
   hugo deploy
   Deploying to target "aws" (www.your-domain.tld)
   Identified 77 file(s) to upload, totaling 5.3 MB, and 0 file(s) to delete.
   Success!
   Invalidating CloudFront CDN...
   Success!
   ```

   As you can see, issuing the `hugo deploy` command automatically [invalidates](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html) your CloudFront CDN cache.

1. That's all you need to do! From now on, you can easily deploy to your S3 bucket using Hugo's built-in `deploy`command!

For more information about the Hugo `deploy` command, including command line options, see this [synopsis](https://gohugo.io/commands/hugo_deploy). In particular, you may find the `--maxDeletes int` option or the `--force` option (which forces upload of all files) useful.

{{% alert title="Automated deployment with GitHub actions" color="primary" %}}
If the source of your site lives in a GitHub repository, you can use [GitHub Actions](https://docs.github.com/en/actions) to deploy the site to your S3 bucket as soon as you commit changes to your GitHub repo. Setup of this workflow is described in this [blog post](https://capgemini.github.io/development/Using-GitHub-Actions-and-Hugo-Deploy-to-Deploy-to-AWS/).
{{% /alert %}}

{{% alert title="Handling aliases" color="primary" %}}
If you are using [aliases](https://gohugo.io/content-management/urls/#aliases) for URL management, you should have a look at this [blog post](https://blog.cavelab.dev/2021/10/hugo-aliases-to-s3-redirects/). It explains how to turn aliases into proper `301` redirects when using Amazon S3.
{{% /alert %}}

If S3 does not meet your needs, consider AWS [Amplify Console](https://aws.amazon.com/amplify/console/). This is a more advanced continuous deployment (CD) platform with built-in support for the Hugo static site generator. A [starter](https://gohugo.io/hosting-and-deployment/hosting-on-aws-amplify/) can be found in Hugo's official docs.
