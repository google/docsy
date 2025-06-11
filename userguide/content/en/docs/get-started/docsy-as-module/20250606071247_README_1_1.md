# [libs](/libs/) / shared

A set of shared TypeScript methods that can be used throughout Datawrapper, but mostly in client-side code that is compiled through rollup.

Import single functions:

```js
import purifyHtml from '@datawrapper/shared/purifyHtml';
```

Import entire package:

```js
import shared from '@datawrapper/shared';
shared.purifyHtml();
shared.httpReq();
```

## Adding new files

If you want to add a new file, you also need to add correct entries for this file to the exports field in `package.json`.
This is needed so that different environments that import the files can locate the correct module.
Take a look at how existing files are referenced in exports field in `package.json` and do the same for your new file.

## API reference

-   [\_\_(key, scope)](#__) ⇒ <code>string</code>
-   [area(vertices)](#area) ⇒ <code>number</code>
-   [arrayToObject(o)](#arrayToObject) ⇒ <code>object</code>
-   [autoTickFormat(column)](#autoTickFormat) ⇒ <code>string</code>
-   [autoTickFormatDate(range, precision)](#autoTickFormatDate) ⇒ <code>string</code>
-   [autoTickFormatNumber(range)](#autoTickFormatNumber) ⇒ <code>string</code>
-   [clone(object)](#clone) ⇒ <code>\*</code>
-   [colorLightness(hexColor)](#colorLightness) ⇒ <code>number</code>
-   [columnFormatter(numeral, column, metadata, axis)](#columnFormatter) ⇒ <code>function</code>
-   [columnNameToVariable(name)](#columnNameToVariable) ⇒ <code>string</code>
-   [combinations(input)](#combinations) ⇒ <code>Array.&lt;array&gt;</code>
-   [dateColumnFormatter(column)](#dateColumnFormatter) ⇒ <code>function</code>
-   [decodeHtml(input)](#decodeHtml) ⇒ <code>string</code>
-   [defaultColors(theme)](#defaultColors) ⇒ <code>\*</code>
-   [defaultOverlayTitle(vis, colName)](#defaultOverlayTitle) ⇒ <code>string</code>
-   ~~[deleteJSON(url, callback)](#deleteJSON) ⇒ <code>Promise</code>~~
-   [drawPattern(parameters)](#drawPattern)
-   [equalish(a, b)](#equalish) ⇒ <code>boolean</code>
-   [escapeHtml(unsafe)](#escapeHtml) ⇒ <code>string</code>
-   [estimateTextWidth(text, fontSize)](#estimateTextWidth) ⇒ <code>number</code>
-   ~~[fetchJSON(url, method, credentials, body, callback)](#fetchJSON) ⇒ <code>Promise</code>~~
-   [formatNumber(numeral, value, options)](#formatNumber) ⇒ <code>string</code>
-   [get(object, key, \_default)](#get) ⇒
-   ~~[getJSON(url, credentials, callback)](#getJSON) ⇒ <code>Promise</code>~~
-   [highlightTimer(action, delay)](#highlightTimer) ⇒ <code>object</code>
-   [httpReq(path, options)](#httpReq) ⇒ <code>Promise</code>
    -   [.delete()](#httpReq.delete)
    -   [.get()](#httpReq.get)
    -   [.head()](#httpReq.head)
    -   [.patch()](#httpReq.patch)
    -   [.post()](#httpReq.post)
    -   [.put()](#httpReq.put)
-   [isValidUrl(input)](#isValidUrl) ⇒ <code>boolean</code>
-   [kMeans(values, numCluster)](#kMeans) ⇒ <code>array.&lt;Array.&lt;number&gt;&gt;</code>
-   [loadScript(src, callback)](#loadScript)
-   [loadStylesheet(src, callback)](#loadStylesheet)
-   [moveToStart(array, predicate)](#moveToStart)
-   [normalizeAlphaNumKey(key)](#normalizeAlphaNumKey) ⇒ <code>string</code>
-   [normalizeNumKey(key)](#normalizeNumKey) ⇒ <code>number</code>
-   [numberColumnFormatter(numeral, config)](#numberColumnFormatter) ⇒ <code>function</code>
-   [observeFonts(fontsJSON, typographyJSON)](#observeFonts) ⇒ <code>Promise</code>
-   [opts](#opts) : <code>object</code>
-   ~~[patchJSON(url, body, callback)](#patchJSON) ⇒ <code>Promise</code>~~
-   [postEvent(chartId)](#postEvent) ⇒ <code>function</code>
-   ~~[postJSON(url, body, callback)](#postJSON) ⇒ <code>Promise</code>~~
-   [purifyHtml(input, allowed)](#purifyHtml) ⇒ <code>string</code>
-   ~~[putJSON(url, body, callback)](#putJSON) ⇒ <code>Promise</code>~~
-   [round(value, decimals)](#round) ⇒ <code>number</code>
-   [set(object, key, value)](#set) ⇒
-   [significantDimension(values, tolerance)](#significantDimension) ⇒ <code>number</code>
-   [smartRound(values, addPrecision, tolerance)](#smartRound) ⇒
-   [tailLength(value)](#tailLength) ⇒ <code>number</code>
-   [toFixed(value)](#toFixed) ⇒ <code>string</code>
-   [trackEvent(category, category, category, category)](#trackEvent)
-   [trackPageView(loadTime)](#trackPageView)
-   [truncate(str, start, end)](#truncate) ⇒ <code>string</code>

<a name="__" id="__"></a>

### \_\_(key, scope) ⇒ <code>string</code>

translates a message key. translations are originally stored in a
Google spreadsheet that we're pulling into Datawrapper using the
`scripts/update-translations` script, which stores them as `:locale.json`
files in the /locale folders (both in core as well as inside plugin folders)

for the client-side translation to work we are also storing the translations
in the global `window.dw.backend.__messages` object. plugins that need
client-side translations must set `"svelte": true` in their plugin.json

**Returns**: <code>string</code> - -- the translated text

| Param | Type                | Default                       | Description                                           |
| ----- | ------------------- | ----------------------------- | ----------------------------------------------------- |
| key   | <code>string</code> |                               | - the key to be translated, e.g. "signup / hed"       |
| scope | <code>string</code> | <code>&quot;core&quot;</code> | - the translation scope, e.g. "core" or a plugin name |

---

<a name="area" id="area"></a>

### area(vertices) ⇒ <code>number</code>

Computes the area of a polygon

**Returns**: <code>number</code> - -- polygon area, might be negative

| Param    | Type                             | Description                                     |
| -------- | -------------------------------- | ----------------------------------------------- |
| vertices | <code>Array.&lt;array&gt;</code> | - polygon vertices as [[x,y], [x,y], ...] array |

---

<a name="arrayToObject" id="arrayToObject"></a>

### arrayToObject(o) ⇒ <code>object</code>

This function fixes an uglyness when working with PHP backends.
in PHP, there is no distiction between arrays and objects, so
PHP converts an empty object {} to a empty array [].
When this empty array then ends up in client-side JS functions which
might start to assign values to the array using `arr.foo = "bar"`
which results in a data structure like this:

| Param | Type               | Description |
| ----- | ------------------ | ----------- |
| o     | <code>array</code> | the input   |

**Example**

```js
console.log(arr);
[]
  foo: "bar"
  length: 0
  <prototype>: Array []

console.log(arrayToObject(arr));
Object { foo: "bar" }
```

---

<a name="autoTickFormat" id="autoTickFormat"></a>

### autoTickFormat(column) ⇒ <code>string</code>

Convenient wrapper around autoTickFormatNumber and autoTickFormatDate.
Returns either a numeral.js or day.js format, depending on the column type.

**Returns**: <code>string</code> - -- a numeral|dayjs format string

| Param  | Type                | Description                                        |
| ------ | ------------------- | -------------------------------------------------- |
| column | <code>object</code> | - dw.column instance that is displayed on the axis |

---

<a name="autoTickFormatDate" id="autoTickFormatDate"></a>

### autoTickFormatDate(range, precision) ⇒ <code>string</code>

auto-detects a nice default axis tick format for date
columns based on the input range and precision

**Returns**: <code>string</code> - - day.js compatible format string

| Param     | Type                | Description                    |
| --------- | ------------------- | ------------------------------ | ------- | ----- | ---- | --- | ---- |
| range     | <code>array</code>  | [min, max] of the data         |
| precision | <code>string</code> | the input data precision (year | quarter | month | week | day | ...) |

**Example**

```js
import { autoTickFormatDate } from '@datawrapper/shared/autoTickFormat';
autoTickFormatDate([new Date(2000, 0, 1), new Date(2002, 0, 1)], 'quarter'); // 'YYYY|[Q]Q'
```

---

<a name="autoTickFormatNumber" id="autoTickFormatNumber"></a>

### autoTickFormatNumber(range) ⇒ <code>string</code>

auto-detects a nice default axis tick format for numeric
columns based on the input range

**Returns**: <code>string</code> - - numeral.js compatible format string

| Param | Type               | Description            |
| ----- | ------------------ | ---------------------- |
| range | <code>array</code> | [min, max] of the data |

**Example**

```js
import { autoTickFormatNumber } from '@datawrapper/shared/autoTickFormat';
autoTickFormatNumber([0, 100]); // '0,0.[00]'
autoTickFormatNumber([0.2, 0.7]); // '0,0.00[00]'
```

---

<a name="clone" id="clone"></a>

### clone(object) ⇒ <code>\*</code>

Clones an object

**Returns**: <code>\*</code> - - the cloned thing

| Param  | Type            | Description                     |
| ------ | --------------- | ------------------------------- |
| object | <code>\*</code> | the thing that should be cloned |

---

<a name="colorLightness" id="colorLightness"></a>

### colorLightness(hexColor) ⇒ <code>number</code>

Returns the Lab lightness value of a given hexidecimal
RGB color. Uses chroma-js to convert from Hex to Lab, but
only adds a few hundreds bytes to your build.

**Returns**: <code>number</code> - - the L*a*b lightness, between 0 (black) and 100 (white)

| Param    | Type                | Description                                         |
| -------- | ------------------- | --------------------------------------------------- |
| hexColor | <code>string</code> | the RGB color as hexadecimal string, e.g. "#330066" |

**Example**

```js
import colorLightness from '@datawrapper/shared/colorLightness';
colorLightness('#ff3399'); // 57.9
```

---

<a name="columnFormatter" id="columnFormatter"></a>

### columnFormatter(numeral, column, metadata, axis) ⇒ <code>function</code>

This function returns a formatting function based, given a column object,
a metadata object and the axis column name.

| Param    | Type                | Description                 |
| -------- | ------------------- | --------------------------- |
| numeral  | <code>object</code> | Numeral.js instance         |
| column   | <code>object</code> | the date column object      |
| metadata | <code>object</code> | the full metadata object    |
| axis     | <code>string</code> | the column name of the axis |

---

<a name="columnNameToVariable" id="columnNameToVariable"></a>

### columnNameToVariable(name) ⇒ <code>string</code>

converts a column name to a variable name that can be used in the custom
column editor. variable names can't contain spaces and special characters
and are also converted to lowercase.

**Returns**: <code>string</code> - -- variable name

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| name  | <code>string</code> | - name of the column |

**Example**

```js
import columnNameToVariable from '@datawrapper/shared/columnNameToVariable';

columnNameToVariable('GDP (per cap.)'); // gdp_per_cap
```

---

<a name="combinations" id="combinations"></a>

### combinations(input) ⇒ <code>Array.&lt;array&gt;</code>

computes all combinations of input elements

**Returns**: <code>Array.&lt;array&gt;</code> - -- array of combinations

| Param | Type                             | Description                                              |
| ----- | -------------------------------- | -------------------------------------------------------- |
| input | <code>Array.&lt;array&gt;</code> | - array of input objects, could be numbers, strings, etc |

**Example**

```js
// returns [['a','b'], ['a'], ['b']]
combinations(['a', 'b']);
```

**Example**

```js
// returns [[1,2,3], [1,2], [1,3], [1], [2,3], [2], [3]]
combinations([1, 2, 3]);
```

---

<a name="dateColumnFormatter" id="dateColumnFormatter"></a>

### dateColumnFormatter(column) ⇒ <code>function</code>

This function returns a date formatting function based on a
dw column object. The implementation is backwards-compatible with
our old Globalize-based date formatting, but uses dayjs under the
hood.

| Param  | Type                | Description            |
| ------ | ------------------- | ---------------------- |
| column | <code>object</code> | the date column object |

---

<a name="decodeHtml" id="decodeHtml"></a>

### decodeHtml(input) ⇒ <code>string</code>

Removes all html tags and decodes html entities like &nbsp;

| Param | Type                |
| ----- | ------------------- |
| input | <code>string</code> |

---

<a name="defaultColors" id="defaultColors"></a>

### defaultColors(theme) ⇒ <code>\*</code>

defines colors for the various chart elements like axis text, gridlines,
bar background etc. based on the theme background color, and some other optional theme parameters

**Returns**: <code>\*</code> - -- object with color definitions and `blendColor` function

| Param | Type            | Description              |
| ----- | --------------- | ------------------------ |
| theme | <code>\*</code> | - theme data for a chart |

**Example**

```js
// returns {"tickText":{"secondary":"#9d9d9d","primary":"#d9d9d9"},"series":"#f1f1f1","value":"#d9d9d9","axis":"#f1f1f1","gridline":"#707070","fallbackBaseColor":"#f1f1f1", blendColor: function}
defaultColors({ colors: { background: '#333333' } });
```

**Example**

```js
// returns {"tickText":{"secondary":"#ffffff","primary":"#ffffff"},"series":"#ffffff","value":"#fef2e4","axis":"#ffffff","gridline":"#fedeb5","fallbackBaseColor":"#ffffff"}
defaultColors({
    colors: {
        bgBlendRatios: { gridline: 0.5, tickText: { primary: 0, secondary: 0 } },
        chartContentBaseColor: '#ffffff',
        background: '#FCB716'
    }
});
```

---

<a name="defaultOverlayTitle" id="defaultOverlayTitle"></a>

### defaultOverlayTitle(vis, colName) ⇒ <code>string</code>

returns the overlays column title

| Param   | Type                |
| ------- | ------------------- |
| vis     | <code>object</code> |
| colName | <code>string</code> |

---

<a name="deleteJSON" id="deleteJSON"></a>

### ~~deleteJSON(url, callback) ⇒ <code>Promise</code>~~

**_Deprecated_**

Download and parse a remote JSON endpoint via DELETE. credentials
are included automatically
Use [httpReq](#httpReq) or [delete](#httpReq.delete) instead.

| Param    | Type                  |
| -------- | --------------------- |
| url      | <code>string</code>   |
| callback | <code>function</code> |

**Example**

```js
import { deleteJSON } from '@datawrapper/shared/fetch';

deleteJSON('http://api.example.org/chart/123').then(() => {
    console.log('deleted!');
});
```

---

<a name="drawPattern" id="drawPattern"></a>

### drawPattern(parameters)

draws a configurable pattern into an svg pattern def, so that it can be used as a fill

| Param      | Type            | Description                        |
| ---------- | --------------- | ---------------------------------- |
| parameters | <code>\*</code> | - style parameters for the pattern |

---

<a name="equalish" id="equalish"></a>

### equalish(a, b) ⇒ <code>boolean</code>

returns true if two numeric values are close enough

| Param | Type                |
| ----- | ------------------- |
| a     | <code>number</code> |
| b     | <code>number</code> |

**Example**

```js
// returns true
equalish(0.333333, 1 / 3);
```

**Example**

```js
// returns false
equalish(0.333, 1 / 3);
```

---

<a name="escapeHtml" id="escapeHtml"></a>

### escapeHtml(unsafe) ⇒ <code>string</code>

returns escaped HTML that can be used to display untrusted content

| Param  | Type                |
| ------ | ------------------- |
| unsafe | <code>string</code> |

---

<a name="estimateTextWidth" id="estimateTextWidth"></a>

### estimateTextWidth(text, fontSize) ⇒ <code>number</code>

returns the estimated width of a given text in Roboto.
this method has proven to be a good compromise between pixel-perfect
but expensive text measuring methods using canvas or getClientBoundingRect
and just multiplying the number of characters with a fixed width.

be warned that this is just a rough estimate of the text width. the
character widths will vary from typeface to typeface and may be
off quite a bit for some fonts (like monospace fonts).

| Param    | Type                | Description                                    |
| -------- | ------------------- | ---------------------------------------------- |
| text     | <code>string</code> | the text to measure                            |
| fontSize | <code>number</code> | the output font size (optional, default is 14) |

**Example**

```js
import estimateTextWidth from '@datawrapper/shared/estimateTextWidth';
// or import {estimateTextWidth} from '@datawrapper/shared';
const width = estimateTextWidth('my text', 12);
```

---

<a name="fetchJSON" id="fetchJSON"></a>

### ~~fetchJSON(url, method, credentials, body, callback) ⇒ <code>Promise</code>~~

**_Deprecated_**

Download and parse a remote JSON document. Use [httpReq](#httpReq) instead

| Param       | Type                                          | Description                                                      |
| ----------- | --------------------------------------------- | ---------------------------------------------------------------- |
| url         | <code>string</code>                           |                                                                  |
| method      | <code>string</code>                           | HTTP method, either GET, POST or PUT                             |
| credentials | <code>string</code> \| <code>undefined</code> | set to "include" if cookies should be passed along CORS requests |
| body        | <code>string</code>                           |                                                                  |
| callback    | <code>function</code>                         |                                                                  |

**Example**

```js
import { fetchJSON } from '@datawrapper/shared/fetch';
fetchJSON('http://api.example.org', 'GET', 'include');
```

---

<a name="formatNumber" id="formatNumber"></a>

### formatNumber(numeral, value, options) ⇒ <code>string</code>

special number formatting that can deal with microtypography
and "prepend currencies" (e.g., −$1234.57)

**Returns**: <code>string</code> - - the formatted number

| Param             | Type                | Description                            |
| ----------------- | ------------------- | -------------------------------------- |
| numeral           | <code>object</code> | Numeral.js instance                    |
| value             | <code>number</code> | the number to format                   |
| options           | <code>object</code> | options, see below                     |
| options.format    | <code>string</code> | numeral.js compatible number format    |
| options.prepend   | <code>string</code> | string to prepend to number            |
| options.append    | <code>string</code> | string to append to number             |
| options.minusChar | <code>string</code> | custom character to use for minus      |
| options.multiply  | <code>number</code> | multiply number before applying format |

**Example**

```js
// returns '1234.57'
formatNumber(numeral, 1234.567);
```

**Example**

```js
// returns '−$1234.57'
formatNumber(numeral, -1234.567, { prepend: '$' });
```

---

<a name="get" id="get"></a>

### get(object, key, \_default) ⇒

Safely access object properties without throwing nasty
`cannot access X of undefined` errors if a property along the
way doesn't exist.

**Returns**: the value

| Param     | Type                                                     | Description                                                        |
| --------- | -------------------------------------------------------- | ------------------------------------------------------------------ |
| object    |                                                          | the object which properties you want to acccess                    |
| key       | <code>String</code> \| <code>Array.&lt;String&gt;</code> | path to the property as a dot-separated string or array of strings |
| \_default | <code>\*</code>                                          | the fallback value to be returned if key doesn't exist             |

**Example**

```js
import get from '@datawrapper/shared/get';
const someObject = { key: { list: ['a', 'b', 'c'] } };
get(someObject, 'key.list[2]'); // returns 'c'
get(someObject, 'missing.key'); // returns undefined
get(someObject, 'missing.key', false); // returns false
```

---

<a name="getJSON" id="getJSON"></a>

### ~~getJSON(url, credentials, callback) ⇒ <code>Promise</code>~~

**_Deprecated_**

Download and parse a JSON document via GET.
Use [httpReq](#httpReq) or [get](#httpReq.get) instead.

| Param       | Type                                          | Description                                       |
| ----------- | --------------------------------------------- | ------------------------------------------------- |
| url         | <code>string</code>                           |                                                   |
| credentials | <code>string</code> \| <code>undefined</code> | optional, set to undefined to disable credentials |
| callback    | <code>function</code>                         |                                                   |

**Example**

```js
import { getJSON } from '@datawrapper/shared/fetch';
// use it callback style
getJSON('http://api.example.org', 'include', function (data) {
    console.log(data);
});
// or promise-style
getJSON('http://api.example.org').then(data => {
    console.log(data);
});
```

---

<a name="highlightTimer" id="highlightTimer"></a>

### highlightTimer(action, delay) ⇒ <code>object</code>

A delayed highlight setter

| Param  | Type                  | Description                                                                                |
| ------ | --------------------- | ------------------------------------------------------------------------------------------ |
| action | <code>function</code> | the highlight action callback                                                              |
| delay  | <code>int</code>      | how long something needs to be highlighted before the highlight triggers (in milliseconds) |

**Example**

```js
import { highlightTimer } from '@datawrapper/shared';
const myTimer = highlightTimer(value => {
    if (value) {
        selection.style('opacity', d => (d === value ? 1 : 0.3));
    } else {
        selection.style('opacity', 1);
    }
});

lines.on('mouseenter', d => myTimer.set(d));
chart.on('mouseleave', myTimer.clear);
```

---

<a name="httpReq" id="httpReq"></a>

### httpReq(path, options) ⇒ <code>Promise</code>

The response body is automatically parsed according
to the response content type.

**Returns**: <code>Promise</code> - promise of parsed response body or raw response

| Param           | Type                 | Description                                                        |
| --------------- | -------------------- | ------------------------------------------------------------------ |
| path            | <code>string</code>  | the url path that gets appended to baseUrl                         |
| options.body    | <code>object</code>  | raw body to be send with req                                       |
| options.payload | <code>object</code>  | raw JSON payload to be send with req (will overwrite options.body) |
| options.raw     | <code>boolean</code> | disable parsing of response body, returns raw response             |
| options.baseUrl | <code>string</code>  | base for url, defaults to dw api domain                            |
| options         | <code>\*</code>      | see documentation for window.fetch for additional options          |

**Example**

```js
import httpReq from '@datawrapper/shared/httpReq';
let res = await httpReq('/v3/charts', {
    method: 'post',
    payload: {
        title: 'My new chart'
    }
});
import { post } from '@datawrapper/shared/httpReq';
res = await post('/v3/charts', {
    payload: {
        title: 'My new chart'
    }
});
// send raw csv
await httpReq.put(`/v3/charts/${chartId}/data`, {
    body: csvData,
    headers: {
        'Content-Type': 'text/csv'
    }
});
```

-   [httpReq(path, options)](#httpReq) ⇒ <code>Promise</code>
    -   [.get()](#httpReq.get)
    -   [.patch()](#httpReq.patch)
    -   [.put()](#httpReq.put)
    -   [.post()](#httpReq.post)
    -   [.head()](#httpReq.head)
    -   [.delete()](#httpReq.delete)

---

<a name="httpReq.delete" id="httpReq.delete"></a>

#### httpReq.delete()

Like `httpReq` but with fixed http method DELETE

**See**: [httpReq](#httpReq)

---

<a name="httpReq.get" id="httpReq.get"></a>

#### httpReq.get()

Like `httpReq` but with fixed http method GET

**See**: [httpReq](#httpReq)

---

<a name="httpReq.head" id="httpReq.head"></a>

#### httpReq.head()

Like `httpReq` but with fixed http method HEAD

**See**: [httpReq](#httpReq)

---

<a name="httpReq.patch" id="httpReq.patch"></a>

#### httpReq.patch()

Like `httpReq` but with fixed http method PATCH

**See**: [httpReq](#httpReq)

---

<a name="httpReq.post" id="httpReq.post"></a>

#### httpReq.post()

Like `httpReq` but with fixed http method POST

**See**: [httpReq](#httpReq)

---

<a name="httpReq.put" id="httpReq.put"></a>

#### httpReq.put()

Like `httpReq` but with fixed http method PUT

**See**: [httpReq](#httpReq)

---

<a name="isValidUrl" id="isValidUrl"></a>

### isValidUrl(input) ⇒ <code>boolean</code>

checks if a given string is a valid URL

| Param | Type                |
| ----- | ------------------- |
| input | <code>string</code> |

---

<a name="kMeans" id="kMeans"></a>

### kMeans(values, numCluster) ⇒ <code>array.&lt;Array.&lt;number&gt;&gt;</code>

Performs one-dimensional k-means clustering on an array of
numbers. Useful for finding n groups of "similar values".

**Returns**: <code>array.&lt;Array.&lt;number&gt;&gt;</code> - - array of clusters

| Param      | Type                              | Description               |
| ---------- | --------------------------------- | ------------------------- |
| values     | <code>Array.&lt;number&gt;</code> | sorted array of numbers   |
| numCluster | <code>number</code>               | the desired cluster count |

**Example**

```js
import kMeans from '@datawrapper/shared/kMeans';

const values = [1, 1.1, 1.2, 2.1, 3, 3.1, 3.2, 3.3, 7, 7.1, 10];
// returns [[1, 1.1, 1.2, 2.1], [3, 3.1, 3.2, 3.3], [7, 7.1, 10]]
kMeans(values, 3);
```

---

<a name="loadScript" id="loadScript"></a>

### loadScript(src, callback)

injects a `<script>` element to the page to load a new JS script

| Param    | Type                  |
| -------- | --------------------- |
| src      | <code>string</code>   |
| callback | <code>function</code> |

**Example**

```js
import { loadScript } from '@datawrapper/shared/fetch';

loadScript('/static/js/library.js', () => {
    console.log('library is loaded');
});
```

---

<a name="loadStylesheet" id="loadStylesheet"></a>

### loadStylesheet(src, callback)

injects a `<link>` element to the page to load a new stylesheet

| Param    | Type                                              |
| -------- | ------------------------------------------------- |
| src      | <code>string</code> \| [<code>opts</code>](#opts) |
| callback | <code>function</code>                             |

**Example**

```js
import { loadStylesheet } from '@datawrapper/shared/fetch';

loadStylesheet('/static/css/library.css', () => {
    console.log('library styles are loaded');
});
```

---

<a name="moveToStart" id="moveToStart"></a>

### moveToStart(array, predicate)

Move an item to the start of an array based on a predicate. Modifies the array in place.

| Param     | Type                  | Description                                                                   |
| --------- | --------------------- | ----------------------------------------------------------------------------- |
| array     | <code>Array</code>    | the array to modify                                                           |
| predicate | <code>function</code> | all items matching the predicate will be moved to the start of the array, preserving their internal order. |

**Example**

```js
import { moveToStart } from '@datawrapper/shared';
const arr = [1, 2, 3, 4];
moveToStart(arr, n => n === 3);
console.log(arr); // [3, 1, 2, 4]
```

---

<a name="normalizeAlphaNumKey" id="normalizeAlphaNumKey"></a>

### normalizeAlphaNumKey(key) ⇒ <code>string</code>

normalize an alphanumerical key for less-strict matching (e.g. in maps)

**Returns**: <code>string</code> - - normalized key

| Param | Type                | Description        |
| ----- | ------------------- | ------------------ |
| key   | <code>string</code> | alphanumerical key |

---

<a name="normalizeNumKey" id="normalizeNumKey"></a>

### normalizeNumKey(key) ⇒ <code>number</code>

normalize a numerical key for less-strict matching (e.g. in maps)

**Returns**: <code>number</code> - - normalized key

| Param | Type                                       | Description   |
| ----- | ------------------------------------------ | ------------- |
| key   | <code>string</code> \| <code>number</code> | numerical key |

---

<a name="numberColumnFormatter" id="numberColumnFormatter"></a>

### numberColumnFormatter(numeral, config) ⇒ <code>function</code>

This function returns a number formatting function based on a
column configuration object stored in metadata.data.column-format.
The implementation is backwards-compatible with our old
Globalize-based number formatting, but uses numeral under the hood.

| Param   | Type                | Description                            |
| ------- | ------------------- | -------------------------------------- |
| numeral | <code>object</code> | Numeral.js instance                    |
| config  | <code>object</code> | the column configuration from metadata |

---

<a name="observeFonts" id="observeFonts"></a>

### observeFonts(fontsJSON, typographyJSON) ⇒ <code>Promise</code>

Function that returns a promise, that resolves when all fonts,
specified in fontsJSON and typographyJSON have been loaded.

| Param          | Type                                      |
| -------------- | ----------------------------------------- |
| fontsJSON      | <code>Object</code> \| <code>Array</code> |
| typographyJSON | <code>Object</code>                       |

---

<a name="opts" id="opts"></a>

### opts : <code>object</code>

**Properties**

| Name          | Type                    | Description                        |
| ------------- | ----------------------- | ---------------------------------- |
| src           | <code>string</code>     | stylesheet URL to load             |
| parentElement | <code>DOMElement</code> | DOM element to append style tag to |

---

<a name="patchJSON" id="patchJSON"></a>

### ~~patchJSON(url, body, callback) ⇒ <code>Promise</code>~~

**_Deprecated_**

| Param    | Type                  |
| -------- | --------------------- |
| url      | <code>string</code>   |
| body     | <code>string</code>   |
| callback | <code>function</code> |

**Example**

```js
import { patchJSON } from '@datawrapper/shared/fetch';

patchJSON(
    'http://api.example.org',
    JSON.stringify({
        query: 'foo',
        page: 12
    })
);
```

---

<a name="postEvent" id="postEvent"></a>

### postEvent(chartId) ⇒ <code>function</code>

Use this function to post event messages out of Datawrapper iframe embeds
to the parent website.

| Param   | Type                | Description                                     |
| ------- | ------------------- | ----------------------------------------------- |
| chartId | <code>string</code> | the chart id each message should be signed with |

**Example**

```js
import genPostEvent from '@datawrapper/shared/postEvent';
const postEvent = genPostEvent(chart.get('id'));
postEvent('bar:hover', { value: 123 });
```

---

<a name="postJSON" id="postJSON"></a>

### ~~postJSON(url, body, callback) ⇒ <code>Promise</code>~~

**_Deprecated_**

Download and parse a remote JSON endpoint via POST. credentials
are included automatically.
Use [httpReq](#httpReq) or [post](#httpReq.post) instead.

| Param    | Type                  |
| -------- | --------------------- |
| url      | <code>string</code>   |
| body     | <code>string</code>   |
| callback | <code>function</code> |

**Example**

```js
import { postJSON } from '@datawrapper/shared/fetch';

postJSON(
    'http://api.example.org',
    JSON.stringify({
        query: 'foo',
        page: 12
    })
);
```

---

<a name="purifyHtml" id="purifyHtml"></a>

### purifyHtml(input, allowed) ⇒ <code>string</code>

Remove all non-whitelisted html tags from the given string

**Returns**: <code>string</code> - - the cleaned html output

| Param   | Type                | Description                                                                                 |
| ------- | ------------------- | ------------------------------------------------------------------------------------------- |
| input   | <code>string</code> | dirty html input                                                                            |
| allowed | <code>string</code> | list of allowed tags, defaults to `<a><b><br><br/><i><strong><sup><sub><strike><u><em><tt>` |

---

<a name="putJSON" id="putJSON"></a>

### ~~putJSON(url, body, callback) ⇒ <code>Promise</code>~~

**_Deprecated_**

Download and parse a remote JSON endpoint via PUT. credentials
are included automatically
Use [httpReq](#httpReq) or [put](#httpReq.put) instead.

| Param    | Type                  |
| -------- | --------------------- |
| url      | <code>string</code>   |
| body     | <code>string</code>   |
| callback | <code>function</code> |

**Example**

```js
import { putJSON } from '@datawrapper/shared/fetch';

putJSON(
    'http://api.example.org',
    JSON.stringify({
        query: 'foo',
        page: 12
    })
);
```

---

<a name="round" id="round"></a>

### round(value, decimals) ⇒ <code>number</code>

rounds a value to a certain number of decimals

**Returns**: <code>number</code> - - rounded value

| Param    | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| value    | <code>number</code> | the value to be rounded |
| decimals | <code>number</code> | the number of decimals  |

**Example**

```js
import round from '@datawrapper/shared/round';
round(1.2345); // 1
round(1.2345, 2); // 1.23
round(12345, -2); // 12300
```

---

<a name="set" id="set"></a>

### set(object, key, value) ⇒

safely set object properties without throwing nasty
`cannot access X of undefined` errors if a property along the
way doesn't exist.

**Returns**: the value

| Param  | Type                                                     | Description                                                        |
| ------ | -------------------------------------------------------- | ------------------------------------------------------------------ |
| object |                                                          | the object which properties you want to acccess                    |
| key    | <code>String</code> \| <code>Array.&lt;String&gt;</code> | path to the property as a dot-separated string or array of strings |
| value  | <code>\*</code>                                          | the value to be set                                                |

---

<a name="significantDimension" id="significantDimension"></a>

### significantDimension(values, tolerance) ⇒ <code>number</code>

computes the significant dimension for a list of numbers
That's the number of decimals to which we can round the numbers
without loosing information

**Returns**: <code>number</code> - - number of significant dimensions (= the number of decimals)

| Param     | Type                              | Description                                        |
| --------- | --------------------------------- | -------------------------------------------------- |
| values    | <code>Array.&lt;number&gt;</code> | list of input numbers                              |
| tolerance | <code>number</code>               | percent of input values that we allow to "collide" |

**Example**

```js
import { significantDimension } from '@datawrapper/shared/significantDimension';
significantDimension([0, 10, 20, 30]); // -1
```

---

<a name="smartRound" id="smartRound"></a>

### smartRound(values, addPrecision, tolerance) ⇒

rounds an array of numbers to the least number of decimals
without loosing any information due to the rounding

**Returns**: the rounded values

| Param        | Type                | Description                                                                  |
| ------------ | ------------------- | ---------------------------------------------------------------------------- |
| values       | <code>array</code>  | the numbers to be rounded                                                    |
| addPrecision | <code>number</code> | force more precision (=numbers of decimals) to the rounding                  |
| tolerance    | <code>number</code> | the percent of uniq input values that we can tolerate to lose after rounding |

**Example**

```js
import { smartRound } from '@datawrapper/shared/smartRound';
smartRound([9, 10.5714, 12.1428, 13.7142]); // [9, 11, 12, 14]
smartRound([9, 10.5714, 12.1428, 12.4142]); // [9, 10.6, 12.1, 12.4]
```

---

<a name="tailLength" id="tailLength"></a>

### tailLength(value) ⇒ <code>number</code>

returns the length of the "tail" of a number, meaning the
number of meaningful decimal places

| Param | Type                |
| ----- | ------------------- |
| value | <code>number</code> |

**Example**

```js
// returns 3
tailLength(3.123);
```

**Example**

```js
// returns 2
tailLength(3.12999999);
```

---

<a name="toFixed" id="toFixed"></a>

### toFixed(value) ⇒ <code>string</code>

Automatically converts a numeric value to a string. this is better
than the default number to string conversion in JS which sometimes
produces ugly strings like "3.999999998"

| Param | Type                |
| ----- | ------------------- |
| value | <code>number</code> |

**Example**

```js
import toFixed from '@datawrapper/shared/toFixed';
// returns '3.1'
toFixed(3.100001);
```

---

<a name="trackEvent" id="trackEvent"></a>

### trackEvent(category, category, category, category)

tracks a custom event in Matomo

| Param    | Type                                       | Description               |
| -------- | ------------------------------------------ | ------------------------- |
| category | <code>string</code>                        | the event category        |
| category | <code>string</code>                        | the event action          |
| category | <code>string</code>                        | the event name            |
| category | <code>string</code> \| <code>number</code> | the event value, optional |

---

<a name="trackPageView" id="trackPageView"></a>

### trackPageView(loadTime)

tracks a custom page view in Matomo. Useful for single page
apps in Datawrapper, such as the locator maps UI. The page title
and URL are automatically detected using the window object.

| Param    | Type                | Description                                          |
| -------- | ------------------- | ---------------------------------------------------- |
| loadTime | <code>number</code> | optional page load time, has to be measured manually |

---

<a name="truncate" id="truncate"></a>

### truncate(str, start, end) ⇒ <code>string</code>

Shorten a string by removing characters from the middle

| Param | Type                | Description                           |
| ----- | ------------------- | ------------------------------------- |
| str   | <code>string</code> |                                       |
| start | <code>number</code> | characters to keep at start of string |
| end   | <code>number</code> | characters to keep at end off string  |

**Example**

```js
import truncate from '@datawrapper/shared/truncate';
// returns 'This is a…tring'
truncate('This is a very very long string');
```

---
