### ES Moduele
- at the time node.js was created there was no built-in module system in js
- nodejs defaulted to CommonJs as its moudle system
- as of ES15, js does have a standardized module system as part of itself
- that module system is called ES modules
- instead of module.exports we use <mark>export</mark> keyword
- export can be <mark>default</mark> or <mark>named</mark>
- we import the exported variables or functions unig the <mark>import</mark> keyword
- if it is a default export we can assign any name while importing
- if it is a named export the import must be the same

```mjs
// add.mjs
const add = (a, b) {
    return a + b;
}
export default add;
// main.mjs
import add from "./add.mjs"
```
```mjs
// or
export default (a, b) => {

}
```
```mjs
export default {
    add,
    subtract
}
// main.mjs
import math from "./math.mjs"
math.add(), math.subtract()
// destructing
const {add, sub} = math
add()
sub()
```
```mjs
import {add, subtrcat} from math
```
