{{/* Markdown-output variant of docsy-schema: a plain fenced block. */ -}}
{{ $path := printf "docsy-schema/%s" (.Get 0) -}}
{{ with resources.Get $path -}}
```yaml
{{ strings.TrimRight "\n" .Content }}
```
{{ else -}}
{{ errorf "Shortcode %q: schema file %q not found at %s" .Name $path .Position -}}
{{ end -}}
