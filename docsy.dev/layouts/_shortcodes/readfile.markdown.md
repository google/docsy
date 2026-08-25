{{/* Markdown-output variant of the theme's readfile shortcode: emit literal
  file content (fenced when code=true) instead of falling back to the HTML
  template, which would inject Chroma markup into the Markdown alternate. */ -}}

{{ $f := cond .IsNamedParams (.Get "file") (.Get 0) -}}
{{ $filepath := cond (strings.HasPrefix $f "/") $f (printf "/%s%s" .Page.File.Dir $f) -}}

{{ if fileExists $filepath -}}
{{ $content := os.ReadFile $filepath | strings.TrimRight "\n" -}}
{{ if eq (.Get "code") "true" -}}
```{{ .Get "lang" }}
{{ $content }}
```
{{ else -}}
{{ $content }}
{{ end -}}
{{ else if eq (.Get "draft") "true" -}}
_The file `{{ $filepath }}` was not found._
{{ else -}}
{{ errorf "Shortcode %q: file %q not found at %s" .Name $filepath .Position -}}
{{ end -}}
