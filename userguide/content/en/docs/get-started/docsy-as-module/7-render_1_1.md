### view engine
- for render to worke install view engine either js or pug
```bash
npm i ejs
```
```js
app.set('view engine', 'ejs')
```
- and now name your html files with the extension .ejs instead of .html
- install EJS language support in Vs
- you can pass data with render to your views
```js
res.render('index', {name: "mostafa abokhadra"})
```
- in you .ejs file
```html
<% name %>
```
- if name is not defined you will get an error, so instead use 
```html
<% locals.name || "default" %>
```