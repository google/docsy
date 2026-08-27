{{/*
  Generates release summary links for the version specified in page params.

  Usage: {{% release-summary %}}

  The version is read from .Params.version in the page's front matter.
  The changelog label and #v anchor follow the blog post version when a matching
  release report exists (e.g. 0.15.1-dev → blog 2026/0.15.0 → changelog #v0.15.0).
*/ -}}

{{ $version := $.Page.Param "version" | string -}}
{{ $version = strings.TrimPrefix "v" $version -}}
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
{{/* Changelog anchor + label align with the resolved release-report version when a blog post exists */ -}}
{{ $changelogVersion := $version -}}
{{ $currentYear := now.Year -}}
{{ $years := slice $currentYear (add $currentYear -1) -}}
{{ range $ver := (slice $version $versionForBlog) -}}
  {{ if $blogPage }}{{ break }}{{ end -}}
  {{ range $years -}}
    {{ $postPath := printf "%d/%s" . $ver -}}
    {{ $candidate := $blogSection.GetPage $postPath -}}
    {{ if $candidate -}}
      {{ $blogPage = $candidate -}}
      {{ $changelogVersion = $ver -}}
      {{ break -}}
    {{ end -}}
  {{ end -}}
{{ end -}}

{{ $changelogUrlFragment := add "#v" $changelogVersion -}}
{{ $errorOnMissingBlogPost := and (not $blogPage) (not $isDevVersion) -}}
{{ if $errorOnMissingBlogPost -}}
  {{ if false -}}
    {{ errorf "%s: shortcode 'release-summary': blog post not found for version %q (tried %q) during years: %q"
        .Position $version (delimit (slice $version $versionForBlog) ", ") (delimit $years ", ") -}}
  {{ else -}}
    {{ $changelogUrlFragment = "" -}}
  {{ end -}}
{{ end -}}

{{ $changelogURL := printf "/project/about/changelog/%s" $changelogUrlFragment -}}
{{ $productionURL := .Site.Params.productionURL -}}

## Release summary

- [{{ with $blogPage }}{{ .Title }}{{ else }}Blog{{ end }}][blog]
- [Changelog v{{ $changelogVersion }}][changelog] entry

{{ if and (not $blogPage) (not $isDevVersion) -}}
<!--
  {{ printf "WARNING: shortcode 'release-summary': blog post not found for\n  version %q (tried %q) during years: %q\n"
       $version (delimit (slice $version $versionForBlog) ", ") (delimit $years ", ") -}}
-->
{{ end }}
[blog]: <{{ $productionURL }}{{ with $blogPage }}{{ .RelPermalink }}{{ else }}/blog/{{ end }}>
[changelog]: <{{ $productionURL }}{{ $changelogURL }}>
