### npm Scripts
- an npm script is a convenient way to bundle common commands for use in a project
- they are typically entered in the command line in order to do something with the application
- npm scripts are stored in a project's package.json file giving access to everyone who has access to the codebase
- they also ensure that everyone is using the same command with the same options
- common use cases for npm scripts include building your project, starting a development server, compiling Css, linting and minifying
- npm scripts are executed using the command npm run scritpName
```json
{
    "scripts": {
        "start": "node index.js"
    }
}
```
```bash
npm run start
```