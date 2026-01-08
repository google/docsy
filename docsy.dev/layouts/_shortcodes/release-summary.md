{{/*
  Generates release summary links for the version specified in page params.

  Usage: {{% release-summary %}}

  The version is read from .Params.version in the page's front matter.
*/ -}}

{{ $version := $.Page.Param "version" | string -}}
{{ if not $version -}}
  {{ errorf "%s: shortcode 'release-summary': version parameter not found in page or site params" .Position -}}
{{ end -}}

{{/* Get the blog section index page and search for a post matching the version */ -}}
{{ $blogSection := $.Site.GetPage "/blog" -}}
{{ $blogPage := false -}}
{{ $currentYear := now.Year -}}
{{ $years := slice $currentYear (add $currentYear -1) -}}
{{ range $years -}}
  {{ $postPath := printf "%d/%s" . $version -}}
  {{ $blogPage = $blogSection.GetPage $postPath -}}
  {{ if $blogPage }}{{ break }}{{ end -}}
{{ end -}}

{{ if not $blogPage -}}
  {{ errorf "%s: shortcode 'release-summary': blog post not found for version %q during years: %q"
      .Position $version (delimit $years ", ") -}}
{{ end -}}

{{ $changelogURL := printf "/site/changelog/#v%s" $version -}}
{{ $productionURL := .Site.Params.productionURL -}}

## Release summary

- [{{ $blogPage.Title }}][blog-post]
- [Changelog v{{ $version }}][changelog] entry

[blog-post]: <{{ $productionURL }}{{ $blogPage.RelPermalink }}>
[changelog]: <{{ $productionURL }}{{ $changelogURL }}>
