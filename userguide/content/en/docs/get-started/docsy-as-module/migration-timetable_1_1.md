
### Timetable

<table>
<thead>
<tr>
<th>Status</th>
<th>Section</th>
<th>Total Pages</th>
<th>Markdown Pages</th>
<th>ERB Pages</th>
<th>Start</th>
<th>Finish</th>
</tr>
</thead>
<tbody>
{{ $sep := "," }}
{{ $csv := getCSV $sep "csv/timetable.csv" }}
{{ range $i, $r := after 1 $csv }}
<tr>
<td>{{ index . 0 | emojify }}</td>
<td><a href="#{{ index . 1 | anchorize  }}">{{ index . 1 }}</a></td>
<td>{{ index . 3 }}</td>
<td>{{ index . 4 }}</td>
<td>{{ index . 5 }}</td>
<td>{{ index . 6 }}</td>
<td>{{ index . 7 }}</td>
</tr>
{{ end }}
</tbody>
</table>

### Status Key

- {{ emojify ":zap:" }} - This content will be migrated on the start date indicated
- {{ emojify ":book:" }} -  This content is in the planning stages of its migration and the start and finish dates are guides only
- {{ emojify ":construction:" }} - This content is in the process of being migrated
- {{ emojify ":white_check_mark:" }} - This content has already been migrated to the new handbook

For more details see [the Handbook Roadmap]({{ ref . "roadmap" }}).
