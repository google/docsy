**Column** is the base class for data columns (sometimes also called data series) in Datawrapper. A column has a *column type* and stores a list of values as *rows*. Also they support common computations such as calculating the sum and the range of the data it holds.

```js
import Column from '@datawrapper/chart-core/lib/dw/dataset/column.js;
const col = Column('my column', values);
```

<a name="dw_column" href="Column#wiki-dw_column">#</a> <b>column</b>(<i>name</i>, <i>rows</i>, <i>type</i>)

Instantiates a new column with the name *name* and the data *rows*. Specifying the *type* is optional, if not provided the type will be guessed. Usually you don't need to instantiate columns yourself as they provided by the [dataset](Dataset).

## Operating on columns

<a name="column_name" href="Column#wiki-column_name">#</a> column.<b>name</b>(<i>name</i>)

If called with no arguments, returns the internal name of the column. If you provide the *name* argument, it will be set as new column name. Setting the column name is intended for configuration persistence and should not be used for presentation (use the column.<b>title</b> method for that purpose).

<a name="column_title" href="Column#wiki-column_title">#</a> column.<b>title</b>(<i>title</i>)

If called with no arguments, returns the human-readable title of the column. If the *title* was not set, returns the *name* of the column. If you provide the *title* argument, it will be set as new column title. Setting the column title is intended for presentation.

<a name="column_length" href="Column#wiki-column_length">#</a> column.<b>length</b>

Returns the number of rows in the column.

<a name="column_val" href="Column#wiki-column_val">#</a> column.<b>val</b>(<i>index</i>)

Returns the parsed value in row *index*. The value will be parsed by the [column type](Column#column-types) whenever you call this function. To make our lives easier, you can use negative indexes to get values from the end of the rows, e.g. ``column.val(-1)`` for the last value.

```javascript
var first = column.val(0);
var last = column.val(column.length-1);
// this also works:
last = column.val(-1);
```

<a name="column_values" href="Column#wiki-column_values">#</a> column.<b>values</b>()

Returns the parsed values as an array.

<a name="column_each" href="Column#wiki-column_each">#</a> column.<b>each</b>(<i>func</i>)

Applies a function over all parsed values. This invokes a simple for loop over all rows and calls *func* with the arguments *value* and *index*.

```javascript
sum = 0;
column.each(function(value, index) {
   sum += value;
});
// note that you can also use this:
sum = column.total();
```

<a name="column_type" href="Column#wiki-column_type">#</a> column.<b>type</b>(<i>asObjectorNewType</i>)

If called without an argument **type** returns the column type as string, which would be either *text*, *number* or *date*. If called with *true* as first argument the column type is returned as [object](Column Types). If called with a string as first argument ``type()`` will set a new column type.

```javascript
datecolumn.type()  // returns column type as string, eg. 'date'
datecolumn.type(true);  // returns column type as object, eg. dw.column.types.date()
datecolumn.type('text');  // sets the column type to 'text'
```

<a name="column_raw" href="Column#wiki-column_raw">#</a> column.<b>raw</b>(<i>row</i>, <i>newValue</i>)

If called without any arguments *raw()* returns an array of all the raw, unparsed values stored in the column. If you provide only the <i>row</i> argument you will only get the raw value of this row. If <i>newValue</i> is also provided the function will set it as new value.

<a name="column_range" href="Column#wiki-column_range">#</a> column.<b>range</b>()

Returns an array with the minimum and maximum of all values in the column. Only works for column types that are convertable to numbers (which is true if they implement the toNum() function).

<a name="column_total" href="Column#wiki-column_total">#</a> column.<b>total</b>()

Returns the sum of all values in the column. Only works for column types that are convertable to numbers (which is true if they implement the toNum() function).

<a name="column_filterRows" href="Column#wiki-column_filterRows">#</a> column.<b>filterRows</b>(<i>indexes</i>)

Temporarily removes all rows whose index is not within the array *indexes*. A copy of the original rows is stored for reference. If called without arguments, ``filterRows`` restores the original rows.

<a name="column_indexOf" href="Column#wiki-column_indexOf">#</a> column.<b>indexOf</b>(<i>value</i>)

Returns the index of the row with given *value* or -1 if the value was not found in the column.
