{{/*

@param {string} [0/team] Netlify App team name.
@param {string} [1/repoURL] The repository URL, optional. Defaults to site param `github_repo`.

*/ -}}

{{ $scName := "site-build-info/netlify" -}}

{{ $team := .Get 0 | default (.Get "team") -}}

{{ if not $team -}}
  {{ warnf "%s: shortcode %q: parameter 0 ('team') is missing" .Position $scName -}}
{{ end -}}

{{ $repoURL := .Get 1 | default (.Get "repoURL") | default (.Page.Param "github_repo") -}}

{{ if not $repoURL -}}
  {{ $msg := add
    "parameter 1 ('repoURL') is missing and "
    "site param 'github_repo' is not defined."
  -}}
  {{ warnf "%s: shortcode %q: %s" .Position $scName $msg -}}
{{ else if hasSuffix $repoURL "/" -}}
  {{ $repoURL = strings.TrimSuffix $repoURL "/" -}}
{{ end -}}

{{ $branch := os.Getenv "BRANCH" -}}
{{ $buildID := os.Getenv "BUILD_ID" -}}
{{ $commitRef := os.Getenv "COMMIT_REF" -}}
{{ $deployID := os.Getenv "DEPLOY_ID" -}}
{{ $isNetlifyBuilt := os.Getenv "NETLIFY" | default false -}}
{{ $isPR := os.Getenv "PULL_REQUEST" -}}
{{ $reviewID := os.Getenv "REVIEW_ID" -}}
{{ $now := now -}}

Netlify build information:

| Attribute | Value |
|---|---|
Netlify built | `{{ $isNetlifyBuilt }}`
{{/**/ -}}

{{/*Don't show timestamp for local builds to avoid affecting site diffs. */ -}}
{{ with $isNetlifyBuilt -}}
  Date/time[^date] | {{ $now.Format "2006-01-02 15:04 MST" }}[^local-time]
{{ end -}}
{{/**/ -}}

{{ with $buildID -}}
  ID | `{{.}}`
{{ end -}}
{{/**/ -}}

{{ with $deployID -}}
  Deploy log | [{{ . }}](https://app.netlify.com/teams/{{ $team }}/builds/{{ . }})
{{ end -}}
{{/**/ -}}

{{ with $reviewID -}}
  Build context |
  {{- if $isPR -}}
    [PR #{{ . }}]({{ $repoURL }}/pull/{{ . }})
  {{ else -}}
    merge `{{ . }}`
  {{ end -}}
{{ end -}}
{{/**/ -}}

Deploy context | {{ os.Getenv "CONTEXT" | default "local" }}
{{/**/ -}}

{{ with $commitRef -}}
  Commit | [@{{substr . 0 7  }}]({{ $repoURL }}/commit/{{ . }})
{{ end -}}
{{/**/ -}}

{{ with $branch -}}
  Branch | `{{ . }}`
{{ end -}}
{{/*End of table*/}}

[^date]: Approximate build timestamp.
[^local-time]: In your timezone: <span id="local-time">unknown</span>.

<script>
document.addEventListener("DOMContentLoaded", function() {
  var options = { hour: '2-digit', hour12: false, minute: '2-digit', timeZoneName: 'short' };
  var buildDate = new Date("{{ $now.Format "2006-01-02T15:04:05Z07:00" }}");
  document.getElementById("local-time").innerText = buildDate.toLocaleString(undefined, options);
});
</script>
