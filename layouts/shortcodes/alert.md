{{ $color := .Get "color" | default "primary" -}}

<div class="alert alert-{{ $color }}" role="alert">
{{ with .Get "title" -}}
  <div class="alert-heading">
    {{- . | safeHTML -}}
  </div>
{{- end -}}
{{/* Do **not** remove this comment! It ends previous HTML block; see https://spec.commonmark.org/0.30/#html-blocks, 7. */}}
{{ .Inner }}
</div>
