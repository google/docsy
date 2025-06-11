<div class="alert alert-primary">
Last updated at {{ index .Site.Data.navigation "generated_at" }}
from `{{ index .Site.Data.navigation "commit_sha" }}`.
</div>

{{ range .Site.Data.navigation.contexts }}

### {{ .title }}

<table>
<tr>
<th>Nav item</th>
<th>Sample URL</th>
<th>Conditions</th>
{{ range .items }}
{{ $group := . }}
<tr>
<td><strong>{{ .title }}</strong></td>
<td>{{ .link }}</td>
<td>
{{ range .tags }}
<span class="gl-label gl-label-text-light" style="--label-background-color: #428BCA; --label-inset-border: inset 0 0 0 2px #428BCA;">
<span class="gl-link gl-label-link">
<span class="gl-label-text">{{ . }}</span>
</span>
</span>
{{ end }}
</td>
</tr>
{{ range .items }}
<tr>
<td>{{ $group.title }} &gt; <strong>{{ .title }}</strong></td>
<td>{{ .link }}</td>
<td>
{{ range .tags }}
<span class="gl-label gl-label-text-light" style="--label-background-color: #428BCA; --label-inset-border: inset 0 0 0 2px #428BCA;">
<span class="gl-link gl-label-link">
<span class="gl-label-text">{{ . }}</span>
</span>
</span>
{{ end }}
</td>
</tr>
{{ end }}
{{ end }}
</table>
{{ end }}
