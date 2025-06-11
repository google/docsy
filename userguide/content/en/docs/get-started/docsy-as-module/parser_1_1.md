# Reference

* [!()](#!)
* [ABS()](#ABS) ⇒ <code>number</code>
* [ACOS()](#ACOS) ⇒ <code>number</code>
* [ASIN()](#ASIN) ⇒ <code>number</code>
* [ATAN()](#ATAN) ⇒ <code>number</code>
* [ATAN2()](#ATAN2) ⇒ <code>number</code>
* [CEIL()](#CEIL) ⇒ <code>number</code>
* [CONCAT()](#CONCAT) ⇒ <code>string</code>
* [COS()](#COS) ⇒ <code>number</code>
* [DATE(number, number, number)](#DATE) ⇒ <code>date</code>
* [DATEDIFF(date, date)](#DATEDIFF) ⇒ <code>number</code>
* [DAY(date)](#DAY) ⇒ <code>number</code>
* [EVERY(array, function)](#EVERY) ⇒ <code>boolean</code>
* [EXP()](#EXP) ⇒ <code>number</code>
* [FILTER(function, array)](#FILTER) ⇒ <code>array</code>
* [FIND(array, function)](#FIND) ⇒ <code>\*</code>
* [FLOOR()](#FLOOR) ⇒ <code>number</code>
* [FOLD(function, *, array)](#FOLD) ⇒
* [HOURS(date)](#HOURS) ⇒ <code>number</code>
* [IF(boolean, expr, expr)](#IF)
* [INDEXOF(array, *)](#INDEXOF) ⇒ <code>number</code>
* [ISNULL()](#ISNULL) ⇒ <code>boolean</code>
* [JOIN(array, string, string)](#JOIN) ⇒ <code>string</code>
* [LENGTH()](#LENGTH) ⇒ <code>number</code>
* [LG()](#LG) ⇒ <code>number</code>
* [LN()](#LN) ⇒ <code>number</code>
* [LOG()](#LOG) ⇒ <code>number</code>
* [LOG10()](#LOG10) ⇒ <code>number</code>
* [LOG2()](#LOG2) ⇒ <code>number</code>
* [LOWER()](#LOWER) ⇒ <code>string</code>
* [MAP(function, array)](#MAP) ⇒ <code>array</code>
* [MAX()](#MAX) ⇒ <code>number</code>
* [MEAN()](#MEAN) ⇒ <code>number</code>
* [MEDIAN()](#MEDIAN) ⇒ <code>number</code>
* [MIN()](#MIN) ⇒ <code>number</code>
* [MINUTES(date)](#MINUTES) ⇒ <code>number</code>
* [MONTH(date)](#MONTH) ⇒ <code>number</code>
* [NOT()](#NOT) ⇒ <code>boolean</code>
* [NUMBER()](#NUMBER) ⇒ <code>number</code>
* [PLUCK(array, string)](#PLUCK) ⇒ <code>array</code>
* [POW()](#POW) ⇒ <code>number</code>
* [PROPER()](#PROPER) ⇒ <code>string</code>
* [RANDOM(number)](#RANDOM) ⇒ <code>number</code>
* [RANGE(number, number, number)](#RANGE) ⇒ <code>array</code>
* [REPLACE(string, string, string)](#REPLACE) ⇒ <code>string</code>
* [REPLACE_REGEX(string, string, string)](#REPLACE_REGEX) ⇒ <code>string</code>
* [ROUND()](#ROUND) ⇒ <code>number</code>
* [SECONDS(date)](#SECONDS) ⇒ <code>number</code>
* [SIN()](#SIN) ⇒ <code>number</code>
* [SLICE(array, number, number)](#SLICE) ⇒ <code>array</code>
* [SOME(array, function)](#SOME) ⇒ <code>boolean</code>
* [SORT(array, boolean, string)](#SORT) ⇒ <code>array</code>
* [SPLIT(string, string)](#SPLIT) ⇒ <code>array</code>
* [SQRT()](#SQRT) ⇒ <code>number</code>
* [SUBSTR(string, number, number)](#SUBSTR) ⇒ <code>string</code>
* [SUM()](#SUM) ⇒ <code>number</code>
* [TAN()](#TAN) ⇒ <code>number</code>
* [TEXT()](#TEXT) ⇒ <code>string</code>
* [TIMEDIFF(date, date)](#TIMEDIFF) ⇒ <code>number</code>
* [TITLE()](#TITLE) ⇒ <code>string</code>
* [TRIM()](#TRIM) ⇒ <code>string</code>
* [TRUNC()](#TRUNC) ⇒ <code>number</code>
* [UPPER()](#UPPER) ⇒ <code>string</code>
* [WEEKDAY(date)](#WEEKDAY) ⇒ <code>number</code>
* [YEAR(date)](#YEAR) ⇒ <code>number</code>


<a name="!"></a>

## !()
Alias for [NOT](#NOT)

<a name="ABS"></a>

## ABS() ⇒ <code>number</code>
Absolute number

```js
ABS -10 // 10
```
<a name="ACOS"></a>

## ACOS() ⇒ <code>number</code>
Arcus cosine (inverse trigonometric function)

<a name="ASIN"></a>

## ASIN() ⇒ <code>number</code>
Arcus sine (inverse tigonometric function)

<a name="ATAN"></a>

## ATAN() ⇒ <code>number</code>
Arcus tangent (inverse trigonometric function)

<a name="ATAN2"></a>

## ATAN2() ⇒ <code>number</code>
Computes the atan2, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2

```js
ATAN2(2,3) // 8
ATAN2(4,2) // 16
```
<a name="CEIL"></a>

## CEIL() ⇒ <code>number</code>
Round number to next largest integer

**See**: [FLOOR](#FLOOR), [ROUND](#ROUND), [TRUNC](#TRUNC)  
```js
CEIL 2.3 // 3
CEIL(2.7) // 3
```
<a name="CONCAT"></a>

## CONCAT() ⇒ <code>string</code>
Concatenate two or more strings

```js
CONCAT("<b>", name, "</b>")
```
<a name="COS"></a>

## COS() ⇒ <code>number</code>
Cosine (trigonometric function)

```js
COS PI
COS(PI)
```
<a name="DATE"></a>

## DATE(number, number, number) ⇒ <code>date</code>
Constructs a new date object


| Param | Description |
| --- | --- |
| number | year |
| number | month |
| number | day |

```js
DATE(2020, 1, 1) // January 1st, 2020
```
<a name="DATEDIFF"></a>

## DATEDIFF(date, date) ⇒ <code>number</code>
Computes the  number of days between two dates

**See**: [TIMEDIFF](#TIMEDIFF)  

| Param | Description |
| --- | --- |
| date | the input date 1 |
| date | the input date to substract from |

```js
DATEDIFF(date1, date2)
```
<a name="DAY"></a>

## DAY(date) ⇒ <code>number</code>
Returns the day of a date (1-31)

**See**: [WEEKDAY](#WEEKDAY),[YEAR](#YEAR),[MONTH](#MONTH),[DAY](#DAY)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
DAY(DATE(2020, 6, 1)) // 1
```
<a name="EVERY"></a>

## EVERY(array, function) ⇒ <code>boolean</code>
Returns TRUE if the test function is TRUE for every element in the arrat

**See**: [SOME](#SOME)  

| Param | Description |
| --- | --- |
| array | the input array |
| function | the test function |

```js
EVERY([5,8,4,7,3], f(d) = d > 2) // true
EVERY([5,8,4,7,3], f(d) = d < 6) // false
```
<a name="EXP"></a>

## EXP() ⇒ <code>number</code>
Returns `e^x` where `e` is the Euler's number

```js
LOG(EXP(4)) // 4
```
<a name="FILTER"></a>

## FILTER(function, array) ⇒ <code>array</code>
Filter elements of an array using a function


| Param | Description |
| --- | --- |
| function | the function to test elements |
| array | the input array |

```js
FILTER(f(x) = x > 2, [1, 2, 0, 3, -1, 5]) // [3, 5]
FILTER(f(x) = x >= 2, [1, 2, 0, 3, -1, 5]) // [2, 3, 5]
```
<a name="FIND"></a>

## FIND(array, function) ⇒ <code>\*</code>
Returns the first element of an array for which the test function returns true

**See**: [INDEXOF](#INDEXOF)  

| Param | Description |
| --- | --- |
| array | the input array of objects |
| function | test function |

```js
FIND([1,2,3,4,5,6], f(d) = d > 3) // 4
```
<a name="FLOOR"></a>

## FLOOR() ⇒ <code>number</code>
Round number to the next smallest integer

**See**: [CEIL](#CEIL), [ROUND](#ROUND), [TRUNC](#TRUNC)  
```js
FLOOR 2.3 // 2
FLOOR 2.7 // 2
FLOOR -5.05 // -6
```
<a name="FOLD"></a>

## FOLD(function, *, array) ⇒
Fold array into a single value, good for more complex aggregations


| Param | Description |
| --- | --- |
| function | the function to call |
| * | intial value |
| array | the input array |

```js
FOLD(f(a,b) = a * b, 1, [1,2,3,4,5]) // 120
```
<a name="HOURS"></a>

## HOURS(date) ⇒ <code>number</code>
Returns the hours of a date (0-23)

**See**: [DAY](#DAY),[MINUTES](#MINUTES),[SECONDS](#SECONDS)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
HOURS(time)
```
<a name="IF"></a>

## IF(boolean, expr, expr)
if-else statement


| Param | Description |
| --- | --- |
| boolean | condition |
| expr | yay   expression to use if condition is `TRUE` |
| expr | nay   expression to use if condition is `FALSE` |

```js
IF(temp_diff > 0, "hotter", "colder")
// note: you can also use the shorthand ? notaton:
temp_diff > 0 ? "hotter" : "colder"
```
<a name="INDEXOF"></a>

## INDEXOF(array, *) ⇒ <code>number</code>
Returns the index of the first occurance of an element in an array (or -1 if it's not in the array)

**See**: [FIND](#FIND)  

| Param | Description |
| --- | --- |
| array | the input array of objects |
| * | target |

```js
INDEXOF(['a', 'b', 'c'], 'b') // 1
INDEXOF(['a', 'b', 'c'], 'd') // -1
```
<a name="ISNULL"></a>

## ISNULL() ⇒ <code>boolean</code>
Checks if an expression is NULL

```js
ISNULL 0 // false
ISNULL NULL // true*
```
<a name="JOIN"></a>

## JOIN(array, string, string) ⇒ <code>string</code>
Join array elements into a string


| Param | Description |
| --- | --- |
| array | the input array |
| string | the glue string |
| string | alternative glue string for the last join (optional) |

```js
JOIN(['USA', 'Canada', 'Mexico'], ', ') // 'USA, Canada, Mexico'
JOIN(['USA', 'Canada', 'Mexico'], ', ', ', and ') // 'USA, Canada, and Mexico'
```
<a name="LENGTH"></a>

## LENGTH() ⇒ <code>number</code>
Returns the length of an array or strng

```js
LENGTH 'hello' // 5
LENGTH [1,2,3] // 3
```
<a name="LG"></a>

## LG() ⇒ <code>number</code>
Alias for [LOG10](#LOG10)

<a name="LN"></a>

## LN() ⇒ <code>number</code>
Alias for [LOG](#LOG)

<a name="LOG"></a>

## LOG() ⇒ <code>number</code>
Returns the natural logarithm (base `e`) of a number

```js
LOG x
```
<a name="LOG10"></a>

## LOG10() ⇒ <code>number</code>
Returns the base 10 logarithm of a number

```js
LOG10 10 // 1
LOG10(100) // 2
LOG10(1000) // 3
```
<a name="LOG2"></a>

## LOG2() ⇒ <code>number</code>
Returns the base 2 logarithm of a number

```js
LOG2 8 // 3
```
<a name="LOWER"></a>

## LOWER() ⇒ <code>string</code>
Lowercase a string

**See**: [UPPER](#UPPER), [TITLE](#TITLE), [PROPER](#PROPER)  
```js
LOWER("Hello World") // 'hello world'
```
<a name="MAP"></a>

## MAP(function, array) ⇒ <code>array</code>
Evaluate function for each element in an array


| Param | Description |
| --- | --- |
| function | the function to call |
| array | the input array |

```js
MAP(UPPER, ['USA', 'Canada', 'Mexico']) // ['USA', 'CANADA', 'MEXICO']
MAP(f(s) = SUBSTR(s, 0, 2), ['USA', 'Canada', 'Mexico']) // ['US', 'Ca', 'Me']
```
<a name="MAX"></a>

## MAX() ⇒ <code>number</code>
Returns the largest of the given numbers

```js
MAX(1,2,3) // 3
MAX([1,2,3]) // 3
```
<a name="MEAN"></a>

## MEAN() ⇒ <code>number</code>
Returns the average of the given numbers

**See**: [MEDIAN](#MEDIAN)  
```js
MEAN(1,2,4,8) // 3.75
MEAN([1,2,4,8]) // 3.75
```
<a name="MEDIAN"></a>

## MEDIAN() ⇒ <code>number</code>
Returns the median of the given numbers

**See**: [MEAN](#MEAN)  
```js
MEDIAN(1,2,4,8) // 3
MEDIAN([1,2,4,8]) // 3
```
<a name="MIN"></a>

## MIN() ⇒ <code>number</code>
Returns the smallest of the given numbers

```js
MIN(1,2,3) // 1
MIN([1,2,3]) // 1
```
<a name="MINUTES"></a>

## MINUTES(date) ⇒ <code>number</code>
Returns the minutes of a date (0-59)

**See**: [HOURS](#HOURS),[SECONDS](#SECONDS)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
MINUTES(time)
```
<a name="MONTH"></a>

## MONTH(date) ⇒ <code>number</code>
Returns the month of a date (1-12)

**See**: [YEAR](#YEAR),[DAY](#DAY)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
MONTH(DATE(2020, 6, 1)) // 6
```
<a name="NOT"></a>

## NOT() ⇒ <code>boolean</code>
Negates a boolean expression

```js
NOT 3 > 5 // true
```
<a name="NUMBER"></a>

## NUMBER() ⇒ <code>number</code>
Converts a value to a number

**See**: [TEXT](#TEXT)  
```js
NUMBER '12.5' // 12.5
```
<a name="PLUCK"></a>

## PLUCK(array, string) ⇒ <code>array</code>
Extract values from an array of objects


| Param | Description |
| --- | --- |
| array | the input array of objects |
| string | the key |

```js
PLUCK(countries, 'name')
PLUCK(countries, 'population')
```
<a name="POW"></a>

## POW() ⇒ <code>number</code>
Computes the power of a number

```js
POW(2,3) // 8
POW(4,2) // 16
```
<a name="PROPER"></a>

## PROPER() ⇒ <code>string</code>
Convert a string to title-case. Like `TITLE`, but better for names.

**See**: [TITLE](#TITLE)  
```js
PROPER("hello WoRLd") // 'Hello World'
PROPER("2-WAY STREET") // '2-Way Street'
PROPER("baron lloyd-webber") // 'Baron Lloyd-Webber'
```
<a name="RANDOM"></a>

## RANDOM(number) ⇒ <code>number</code>
Generate a random real number between 0 and 1 when used without arguments, or between 0 and the passed number


| Param | Description |
| --- | --- |
| number | max value (optional) |

```js
RANDOM()
RANDOM(100)
```
<a name="RANGE"></a>

## RANGE(number, number, number) ⇒ <code>array</code>
Creates an array of numbers


| Param | Description |
| --- | --- |
| number | start value |
| number | stop value (not included) |
| number | step to increment each |

```js
RANGE(0,5) // [0,1,2,3,4]
RANGE(0,5,2) // [0,2,4]
RANGE(0,1,0.25) // [0,0.25,0.5,0.75]
```
<a name="REPLACE"></a>

## REPLACE(string, string, string) ⇒ <code>string</code>
Replaces all occurances of a string with another string

**See**: [REPLACE_REGEX](#REPLACE_REGEX)  

| Param | Description |
| --- | --- |
| string | the input string |
| string | the search string |
| string | the replacement string or function |

```js
REPLACE("hello name", "name", "world") // 'hello world'
REPLACE("hello name", "name", TITLE) // 'hello Name'
REPLACE("hello name", "name", f(d) = CONCAT("<b>", d, "</b>")) // 'hello <b>name</b>'
```
<a name="REPLACE_REGEX"></a>

## REPLACE\_REGEX(string, string, string) ⇒ <code>string</code>
Like REPLACE, but interprets the search string as regular expression

**See**: [REPLACE](#REPLACE)  

| Param | Description |
| --- | --- |
| string | the input string |
| string | the search regex |
| string | the replacement string or function |

```js
REPLACE_REGEX("hello 123 world", "[0-9]", '#') // 'hello #### world'
REPLACE_REGEX("hello 123 world", "[0-9]+", '#') // 'hello # world'
```
<a name="ROUND"></a>

## ROUND() ⇒ <code>number</code>
Rounds a number (to a given number of decimals)

**See**: [FLOOR](#FLOOR), [CEIL](#CEIL)  
```js
ROUND(3.1415) // 3
ROUND(3.1415, 2) // 3.14
```
<a name="SECONDS"></a>

## SECONDS(date) ⇒ <code>number</code>
Returns the seconds of a date (0-59)

**See**: [HOURS](#HOURS),[MINUTES](#MINUTES)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
SECONDS(time)
```
<a name="SIN"></a>

## SIN() ⇒ <code>number</code>
Sine (trigonometric function)

```js
SIN PI
SIN(PI)
```
<a name="SLICE"></a>

## SLICE(array, number, number) ⇒ <code>array</code>
Slice an array (extract a part of array)


| Param | Description |
| --- | --- |
| array | the input array |
| number | start index |
| number | end index |

```js
SLICE([1,2,3,4,5], 1) // [2,3,4,5]
SLICE([1,2,3,4,5], 1,3) // [2,3]
SLICE([1,2,3,4,5], -2) // [4,5]
```
<a name="SOME"></a>

## SOME(array, function) ⇒ <code>boolean</code>
Returns `true` if the test function is `true` for at least one element in the arrat

**See**: [EVERY](#EVERY)  

| Param | Description |
| --- | --- |
| array | the input array |
| function | the test function |

```js
SOME([5,8,4,7,3], f(d) = d > 2) // true
SOME([5,8,4,7,3], f(d) = d < 6) // true
SOME([5,8,4,7,3], f(d) = d < 2) // false
```
<a name="SORT"></a>

## SORT(array, boolean, string) ⇒ <code>array</code>
Sort an array ascending or descending


| Param | Description |
| --- | --- |
| array | the input array |
| boolean | true for ascending, false for descending |
| string | key to sort by (optional) |

```js
SORT([5,2,4,1]) // [1,2,4,5]
SORT(countries, false, 'population')
```
<a name="SPLIT"></a>

## SPLIT(string, string) ⇒ <code>array</code>
Splits a string into an array


| Param | Description |
| --- | --- |
| string | the input string |
| string | the separator string |

```js
SPLIT("hello world", " ") // ['hello', 'world']
```
<a name="SQRT"></a>

## SQRT() ⇒ <code>number</code>
Computes the square root

```js
SQRT 9 // 3
SQRT(9) // 3
```
<a name="SUBSTR"></a>

## SUBSTR(string, number, number) ⇒ <code>string</code>
Extracts a part of a string


| Param | Description |
| --- | --- |
| string | the input string |
| number | start |
| number | end |

```js
SUBSTR("This is fine", 5,7) // 'is'
```
<a name="SUM"></a>

## SUM() ⇒ <code>number</code>
Returns the sum of the given numbers

```js
SUM(1,2,3) // 6
SUM([1,2,3]) // 6
```
<a name="TAN"></a>

## TAN() ⇒ <code>number</code>
Tangent (trigonometric function)

```js
TAN PI
TAN(PI)
```
<a name="TEXT"></a>

## TEXT() ⇒ <code>string</code>
Converts a value to a string

**See**: [NUMBER](#NUMBER)  
```js
TEXT 12.5 // '12.5'
```
<a name="TIMEDIFF"></a>

## TIMEDIFF(date, date) ⇒ <code>number</code>
Computes the  number of seconds between two dates

**See**: [DATEDIFF](#DATEDIFF)  

| Param | Description |
| --- | --- |
| date | the input date 1 |
| date | the input date to substract from |

```js
TIMEDIFF(date1, date2)
```
<a name="TITLE"></a>

## TITLE() ⇒ <code>string</code>
Convert a string to title-case. Like `PROPER`, but better for headlines.

**See**: [PROPER](#PROPER)  
```js
TITLE("hello WoRLd") // 'Hello World'
TITLE("2-WAY STREET") // '2-way Street'
TITLE("baron lloyd-webber") // 'Baron Lloyd-webber'
```
<a name="TRIM"></a>

## TRIM() ⇒ <code>string</code>
Removes whitespaces at the beginning and end of a string

```js
TRIM("  hello ") // 'hello'
```
<a name="TRUNC"></a>

## TRUNC() ⇒ <code>number</code>
Returns the integer part of a number by removing any fractional digits

**See**: [CEIL](#CEIL), [ROUND](#ROUND), [FLOOR](#FLOOR)  
```js
TRUNC 5.05 // 5
TRUNC -5.05 // -5
```
<a name="UPPER"></a>

## UPPER() ⇒ <code>string</code>
Uppercase a string

**See**: [LOWER](#LOWER), [TITLE](#TITLE), [PROPER](#PROPER)  
```js
UPPER("Hello World") // 'HELLO WORLD'
```
<a name="WEEKDAY"></a>

## WEEKDAY(date) ⇒ <code>number</code>
Returns the weekday of a date (0 = Sunday, 1 = Monday, etc)

**See**: [DAY](#DAY)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
WEEKDAY(DATE(2020, 5, 10)) // 0
```
<a name="YEAR"></a>

## YEAR(date) ⇒ <code>number</code>
Returns the year of a date

**See**: [MONTH](#MONTH),[DAY](#DAY)  

| Param | Description |
| --- | --- |
| date | the input date |

```js
YEAR(DATE(2020, 1, 1)) // 2020
```
