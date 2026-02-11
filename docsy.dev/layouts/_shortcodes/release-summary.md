{{/*
  Generates release summary links for the version specified in page params.

  Usage: {{% release-summary %}}

  The version is read from .Params.version in the page's front matter.
*/ -}}

{{ $version := $.Page.Param "version" | string -}}
{{ $isDevVersion := strings.Contains $version "-dev" -}}
{{ if not $version -}}
  {{ errorf "%s: shortcode 'release-summary': version parameter not found in page or site params" .Position -}}
{{ end -}}

{{/* Same major.minor with patch 0, for blog lookup when there is no post for this patch (e.g. 0.14.1 → 0.14.0) */ -}}
{{ $parts := split $version "." -}}
{{ $versionForBlog := $version -}}
{{ if and (ge (len $parts) 3) (ne (index $parts 2) "0") -}}
  {{ $versionForBlog = printf "%s.%s.0" (index $parts 0) (index $parts 1) -}}
{{ end -}}

{{/* Get the blog section and search for a post: exact version first, then same release with patch 0 */ -}}
{{ $blogSection := $.Site.GetPage "/blog" -}}
{{ $blogPage := false -}}
{{ $currentYear := now.Year -}}
{{ $years := slice $currentYear (add $currentYear -1) -}}
{{ range $ver := (slice $version $versionForBlog) -}}
  {{ if $blogPage }}{{ break }}{{ end -}}
  {{ range $years -}}
    {{ $postPath := printf "%d/%s" . $ver -}}
    {{ $blogPage = $blogSection.GetPage $postPath -}}
    {{ if $blogPage }}{{ break }}{{ end -}}
  {{ end -}}
{{ end -}}

{{ if and (not $blogPage) (not $isDevVersion) -}}
  {{ errorf "%s: shortcode 'release-summary': blog post not found for version %q (tried %q) during years: %q"
      .Position $version (delimit (slice $version $versionForBlog) ", ") (delimit $years ", ") -}}
{{ end -}}

{{ $changelogURL := printf "/project/about/changelog/#v%s" $version -}}
{{ $productionURL := .Site.Params.productionURL -}}

## Release summary

- [{{ $blogPage.Title }}][blog-post]
- [Changelog v{{ $version }}][changelog] entry

[blog-post]: <{{ $productionURL }}{{ $blogPage.RelPermalink }}>
[changelog]: <{{ $productionURL }}{{ $changelogURL }}>
