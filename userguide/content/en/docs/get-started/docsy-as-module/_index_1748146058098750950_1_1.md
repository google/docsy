---
title: "Search Marketing"
description: "The Search Marketing focuses on growing revenue for GitLab by increasing traffic and improving conversion rates on GitLab's public websites"
---

## Search Marketing

The Search Marketing team focuses on helping grow revenue for GitLab by increasing traffic to GitLab public websites and improving conversion paths for visitors to become MQLs (Marketing Qualified Leads). We use research and data to help improve organic discovery and make sure our offers match visitor expectations across about.gitlab.com.

## Meet the Search Marketing team

[**Niall Cregan**](/handbook/company/team/#niallcregan)

* Title: Search Marketing Manager
* GitLab handle: ncregan
* Slack handle: @Niall Cregan

[**Hanif Smith-Watson**](/handbook/company/team/#hsmith-watson)

* Title: Search Marketing Manager
* GitLab handle: hsmith-watson
* Slack handle: @Hanif Smith-Watson

## Areas we focus

* Organic discovery
  * site health for about.gitlab.com
  * keyword research
  * search architecture
* [Marketing website analytics](/handbook/marketing/inbound-marketing/search-marketing/analytics/)
* [Testing changes to improve conversion](/handbook/marketing/inbound-marketing/search-marketing/testing/)
  * on page CTAs (call to action)
  * A/B testing

## Total conversion rate

The Search Marketing team focuses on growing revenue for GitLab by increasing traffic that generates new accounts for sales and our self-service workflows. To arrive at our total conversion rate we divide unqiue form submit events by unique pagevies on about.gitlab.com.

We publish our total conversion rate monthly in dataStudio.

<iframe width="600" height="450" src="https://datastudio.google.com/embed/reporting/0f5619db-31e3-4a48-8942-5c997367849d/page/4dMdB" frameborder="0" style="border:0" allowfullscreen></iframe>

## Tools we maintain

* [Google Analytics](https://analytics.google.com/analytics/web/): Google Analytics lets you measure your advertising ROI as well as track your Flash, video, and social networking sites and applications.
* [Hotjar](https://www.hotjar.com/): Hotjar is a powerful tool that reveals the online behavior and voice of your users. By combining both Analysis and Feedback tools, Hotjar gives you the 'big picture' of how to improve your site's user experience and performance/conversion rates.
* [Google Optimize](https://optimize.google.com/optimize/home/): Google Website Optimizer was a free website optimization tool that helped online marketers and webmasters increase visitor conversion rates and overall visitor satisfaction by continually testing different combinations of website content.
* [Sitebulb](/handbook/marketing/inbound-marketing/search-marketing/sitebulb/): Sitebulb is a  website auditing tool for search engine optimization.

### Organic discovery

Most people entering gitlab.com and all sub-domains start their journey on a search engine. Our team's goal is to help them discover the most relevant and accurate match for their query.

We don't engage in any dark patterns to trick people or search engine bots. We focus on improving the technical signals our site sends by limiting broken pages, adding redirects, updating metadata, removing duplicate content, and providing relevant research to teams across GitLab. The rest of this page is devoted to the processes we follow to improve overall organic discovery.

### SEO slack channel

If you notice something in search and have a question about why it is happening, bring your questions to [#seo-improvement](https://gitlab.slack.com/archives/CPAPAKKA7). The Search Marketing team is active there and happy to investigate search issues.

### Setting canonical URLs

When search engines crawl multiple versions of a page they see them all as duplicates, unless you set a [canonical version](https://support.google.com/webmasters/answer/139066?hl=en). On about.gitlab.com we use `canonical_path` to add this tag to pages. To add this to a page add `canonical_path` to the frontmatter with the page path. It should look something like this

```yaml
canonical_path: "/sub-folder/page/"
```

In the past we set canonicals automatically across all of about.gitlab.com, but this led to some problems when a page moved. We saw lots of issues in the handbook because a page moved, but the canonical for the content was still set as a different page. This is why we manually manage canonicals for now. As we move the monorepo project forward and split out the blog and handbook from the marketing site we may add more automated canonical management.

### Links on about.gitlab.com

We should link to resources that will help our readers. Be sure to include links to blog posts, guides, and other reference material. You can also include links to company or product websites if they are relevant to your topic. These links do not need to be "nofollowed" if they are informational.

However, we should use [Google's guidelines on nofollowing links](https://webmasters.googleblog.com/2016/03/best-practices-for-bloggers-reviewing.html) when we exchange a link for a product or service. It's also a best practice to ask for a nofollow link when we sponsor and disclose our links to sponsored content.

### Website Health Check

Regular website health checks should be performed. These checks are meant to ensure that there are no issues with the website that could cause issues with traffic to the site. These are the following things to check to ensure the health of the site:

* [Google Search Console](https://search.google.com/search-console/welcome?hl=en)
* [Google Analytics](https://analytics.google.com/analytics/web/)

Issues to look for in each of these tools:

* **Google Search Console**: Check the dashboard and messages for any important notifications regarding the website. Also check under `Search Traffic` > `Manual Actions` for any URLs that have been identified as spam or harmful content. Forward security warnings to the Abuse team and follow the [DMCA complaint process](/handbook/support/workflows/dmca/) with the support team.
* **Google Analytics**: Compare organic site traffic from the most previous week compared to the previous week and look for any large fluctuations.

### Using robots metadata to manage search index

There are times we need to keep pages out of search indexes. For example, we might duplicate most of a page to improve conversion for an ad campaign. It's relatively rare to use this, but it's an important tool that helps us increase organic reach and paid advertising efficiency.

All pages are set to `meta name="robots" content="index, follow"` by default. To exclude a page from the index add `noindex: true` to the frontmatter, and this will set the robots metadata to `meta name="robots" content="noindex, follow"`.

### about.gitlab.com redirects

Occasionally we need to change URL structures of the website, and we want to make sure that people can find pages they need. We use 301 redirects to send people to the right URL when it's appropriate.

#### about.gitlab.com redirect policy

We will redirect URLs included in Google's search index. A simple test to see if a page is indexed is to search for the URL with a site modifier, `site:url`, using Google.

We want to reduce the number of internal redirects, which means we need to update links across about.gitlab.com when we change URLs. When you request a redirect please indicate whether or not you were able to search across about.gitlab.com and update the links for a page you're moving.

#### Request an about.gitlab.com redirect

The Digital Marketing Programs team can set up and manage all redirects for about.gitlab.com.

To redirect an outdated page, open an issue with the [set up a new redirect template in the Growth Marketing project](https://gitlab.com/gitlab-com/marketing/growth-marketing/growth/issues/new?issuable_template=set-up-a-new-redirect). You'll need to provide the following:

* Old URL that needs to be redirected
* New URL where users should now be sent
* Were you able to update existing links to the old URL across about.gitlab.com?

If you have any questions or concerns regarding your redirect request, ask for help in the [#inbound-mktg](https://gitlab.slack.com/archives/C012U3CASJ2) channel on Slack.

#### Redirect process documentation

The Digital Marketing Programs team uses these [technical details for the redirect process](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/redirects_on_about_gitlab_com.md) on about.gitlab.com.
