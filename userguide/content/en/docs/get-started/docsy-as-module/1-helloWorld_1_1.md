```bash
node -v # to verify installation
node
```
`node` command open the node interactive shell, it is called Node REPL as it **READ** js code the user type **EVALUATE** the result of interpreting the line of code **PRINT** the output to user and **LOOP** unitll the user signaling to quit (ctrl + C)
**to run your js file using node:**
```bash
node fileName.js # or
node fileName
```

### Browser VS Nodejs

- in the browser most of the time what you are doing is interacting with the DOM or other Web Platform APIs like Cookies, but in node js you don't have the document, window and all the other objects that are provided by the browser
- in the browser we don't have all the nice APIs that Node js provides through its modules, for example the filesystem access functionality
- with node js you control the environment, you know your application dependencies version and all other needed libraries versions
- with a browser you are at the mercy of what the users choose e:g if he use internet explorer that means more work for us to do

### Modules
- it is an encapsulated and resuable chunk of code that has its own context
- in nodejs each file is treated as separate module

##### Types of modules
1. **local modules**: modules that we create in our application
2. **Built-in modules**: modules that node js ships with out of the box
3. **Third Party modules**: written by other developers that we can use in our application

### common js modules way
```cjs
// add.js
const add = (a, b) => {
    return a + b;
}
// index.js
require("./path/to/add.js")
```
> [!NOTE]
> - when you import a module all of it's code get executed
> - when you use require function you are simply just saying to the interpreter execute this module code (that you will require()) in your file that will be executed using node
> - right way is to use <mark>modules.export</mark>

```js
// add.js
const add = (a, b) => {
    return a + b;
}
module.exports = add;

// index.js
const add = require("./add");
```
- when you use module.exports and assign a function value to it, then require the file containing that function using require, the function that module.exports has it's value is the one that will be required (imported)
