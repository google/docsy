**Dataset** is the base class for datasets in Datawrapper. A dataset basically contains of a set of [columns](Column) and provides a few convenient functions.

Datasets are usually constructed by a [data source](Data-Sources).

```javascript
datasource.dataset().done(function(dataset) {
    console.log(dataset.columns());
});
```

<a name="dw_dataset" href="Dataset#wiki-dw_dataset">#</a> dw.<b>dataset</b>(<i>columns</i>, <i>options</i>)

### Operating on datasets

<a name="dataset_columns" href="Dataset#wiki-dataset_columns">#</a> dataset.<b>columns</b>()

Returns an array of all [columns](Column) in the dataset.

<a name="dataset_column" href="Dataset#wiki-dataset_column">#</a> dataset.<b>column</b>(<i>indexOrName</i>)

Returns the column with the specified *index*. If instead of a Number a string is given, the column with the specified name is returned instead. Will throw an exception if the given column name or index is not found in the dataset.

<a name="dataset_numColumns" href="Dataset#wiki-dataset_numColumns">#</a> dataset.<b>numColumns</b>()

Returns the number of columns.

<a name="dataset_numRows" href="Dataset#wiki-dataset_numRows">#</a> dataset.<b>numRows</b>()

Returns the number of rows of the first column.

<a name="dataset_eachColumn" href="Dataset#wiki-dataset_eachColumn">#</a> dataset.<b>eachColumn</b>(<i>func</i>)

Applies a function over all columns values. This invokes a loop over all columns and calls *func* with the arguments *column* and *index*.

<a name="dataset_eachRow" href="Dataset#wiki-dataset_eachRow">#</a> dataset.<b>eachRow</b>(<i>func</i>)

Applies the function once for all rows in the dataset. This invokes a loop over all rows and calls *func* with the argument *index*.

<a name="dataset_hasColumn" href="Dataset#wiki-dataset_hasColumn">#</a> dataset.<b>hasColumn</b>(<i>indexOrName</i>)

Returns ``true`` if a column with the specified name or index exists. Otherwise returns ``false``.

<a name="dataset_toCSV" href="Dataset#wiki-dataset_toCSV">#</a> dataset.<b>toCSV</b>()

Returns a valid CSV representation of the dataset (as string).

<a name="dataset_filterColumns" href="Dataset#wiki-dataset_filterColumns">#</a> dataset.<b>filterColumns</b>(<i>ignore</i>)

Removes all columns from the dataset whose names are present as keys in the *ignore* object.

```
// removes the column with the name "UK":
dataset.filterColumns({ "UK": true });
```

<a name="dataset_add" href="Dataset#wiki-dataset_add">#</a> dataset.<b>add</b>(<i>column</i>)

Adds a new column to the dataset.

```
dataset.add(column);
```

<a name="dataset_reset" href="Dataset#wiki-dataset_reset">#</a> dataset.<b>reset</b>()

Resets the dataset to its initial state. This revokes the effect of preceding calls to *add* or *filterColumns*.

<a name="dataset_list" href="Dataset#wiki-dataset_list">#</a> dataset.<b>list</b>()

Returns the dataset as simple list of JavaScript objects.

