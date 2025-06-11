### Expressjs
- install node first
- setUp a basic package.json
```bash
npm init -y
```
- install library
```bash
npm i express
```
- install nodemon library and save it as a dev dependency, it allows you to easily restart the server whenever we make changes
```bash
npm i --save-dev nodemon
```
- in your package.json
```json
"scripts": {
    "startDev": "nodemon server.js"
}
```
then
```bash
npm run starDev
```
- now whenever you save your server.js file, it will automatically restart the srever
