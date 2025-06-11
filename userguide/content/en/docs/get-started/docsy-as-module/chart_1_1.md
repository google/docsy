> this documentation is partly outdated

**Chart** is the core class for each Datawrapper chart. The concept of charts and visualizations might be confusing, so please read on to get the idea: A *chart* is an abstract wrapper around the [dataset](Dataset) and the ...

### Initializing charts

```javascript
var chart = dw.chart(attributes);
```

### Operating on charts

<a name="chart_get" href="Chart#wiki-chart_get">#</a> chart.<b>get</b>()

Retrieves one of the direct attributes of a chart (such as *id* or *type*) as well as any of the settings stored in the metadata JSON field.

```js
const { id, title } = chart.get();
```

<a name="chart_getmetadata" href="Chart#wiki-chart_get">#</a> chart.<b>getMetadata</b>(<i>key</i>, <i>default</i>)

Retrieves a value stored in the metadata JSON field.

```js
const showHeader = chart.getMetadata('visualize.showHeader', true);
```

<a name="chart_set" href="Chart#wiki-chart_set">#</a> chart.<b>set</b>(<i>state</i>)

Overrides one of the direct attributes of a chart (such as *id* or *type*) as well as any of the settings stored in the metadata JSON field. Note that the changes are not automatically synchronized with the data model on the server.

```javascript
chart.set({ type: 'bar-chart' });
```

In order to synchronize the attributes you need to listen to change events and then update your data source accordingly. In Datawrapper we use [dw.backend.syncChart](Synchronizing charts with UI elements) for that.

<a name="chart_setmetadata" href="Chart#wiki-chart_get">#</a> chart.<b>setMetadata</b>(<i>key</i>, <i>value</i>)

Stores a value in the metadata JSON field.

```js
chart.setMetadata('visualize.showHeader', false);
```


<a name="chart_onChange" href="Chart#wiki-chart_onChange">#</a> chart.<b>onChange</b>(<i>callback</i>)

Executes the *callback* function every time the chart attributes have been changed.

```javascript
chart.onChange(function(chart, key, value) {
   console.log('The value of '+key+' has been changed to '+value);
});
chart.set('title', 'Foo');
// logs "The value of title has been changed to Foo"
```

<a name="chart_observe" href="Chart#wiki-chart_observe">#</a> chart.<b>observe</b>(<i>callback</i>)

Executes the *callback* function every time the chart attributes have been changed. The difference to *onChange* is that the execution is throttled for 100ms so that several consecutive changes are grouped into one call.

```javascript
chart.observe(function(chart, changes) {
   console.log(changes);
});
chart.set('title', 'Foo');
chart.set('type', 'line-chart');
// logs [{ key: "title", value: "Foo"}, { key: "type", value: "line-chart"}]
```
<a name="chart_load" href="Chart#wiki-chart_load">#</a> chart.<b>load</b>([csvData])

Loads the chart data. Uses a [datasource](Datasource) to fetch some data, for instance from a CSV file, and convert it into a [dataset](Dataset). Returns a deferred. If you provide the *csvData* argument it will be used as csv data instead of loading it from file. Note that you can also pass the dataset directly via [chart.dataset()](#chart_dataset).

```javascript
chart.load().done(function() {
   // yay, the data has been loaded!
});
```

<a name="chart_loaded" href="Chart#wiki-chart_loaded">#</a> chart.<b>loaded</b>(<i>callback</i>)

If the dataset has been loaded already, this will immediately call the *callback* function with the chart as first argument. Otherwise the callback will be kept and executed as soon the dataset has been loaded.

<a name="chart_reload" href="Chart#wiki-chart_reload">#</a> chart.<b>reload</b>()

After a chart has been [loaded](#wiki-chart_load) once, it can be reloaded without having to download the data source again. Returns a deferred.

```javascript
chart.load().done(function() {
   // chart has been loaded
   chart.reload();
});
```

<a name="chart_dataset" href="Chart#wiki-chart_dataset">#</a> chart.<b>dataset</b>([<i>dataset</i>])

If called without any argument, this function returns the loaded [dataset](Dataset), including any changes stored in the chart metadata (such as data changes). If you provide the *dataset* argument the function sets it as new chart dataset and returns the chart instance.

```js
chart.dataset();  // returns the chart dataset
chart.dataset(ds);  // sets ds as new dataset
chart.dataset(true);  // returns the chart dataset after re-applying changes, column sorting etc
```

<a name="chart_theme" href="Chart#wiki-chart_theme">#</a> chart.<b>theme</b>(<i>theme</i>)

Gets or sets the theme.

```javascript
chart.theme(dw.theme('default'));
```

<a name="chart_vis" href="Chart#wiki-chart_vis">#</a> chart.<b>vis</b>(<i>visualization</i>)

Gets or sets the visualization.

```javascript
var lineChart = new Datawrapper.Visualization.LineChart();
// initialize line chart...
chart.vis(lineChart);
```

<a name="chart_columnFormatter" href="Chart#wiki-chart_columnFormatter">#</a> chart.<b>columnFormatter</b>(<i>column</i>)

Returns a function to convert values of a given column into nicely formatted strings. The behavior of the format function usually depends on the column type, the locale, the data input precision and user preferences (as set in descripe step in chart editor).

```javascript
var dateColumn = chart.dataset().column('TIME'),
    formatter = chart.columnFormatter(dateColumn);

dateColumn.each(function(date) {
    console.log(formatter(date));
});
```

By default the formatter function uses the short format (the formatted number without prepending and appending any text). To get the long format you need to pass true a second parameter.

```javascript
formatter(value); // short format, e.g. "12.3"
formatter(value, true); // long format, e.g. "USD 12.3"
```  