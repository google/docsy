# responsiveness

### liquid layout
it is when you assign percentages for your column widths instead of fixed width, while a liquid layout can look good across a wide range of widths, it worsens at the extremes(very narrow and very wide screens)

### responsive design
- responsive web design is a mashup of media queries and liquid layout 

**three criteria for responsive design**:

- Fluid grids
- Fluid media
- Media queries

### meta element for viewport
Browsers on mobile phones had to deal with websites that were designed with fixed-width layouts for wider screens. By default mobile browsers assumed that 980 pixels was the width that people were designing for (and they weren't wrong). So even if you used a liquid layout, the browser would apply a width of 980 pixels and then scale the rendered web page down to the actual width of the screen.

If you use responsive design, you need to tell the browser not to do that scaling. You can do that with a meta element in the head of the web page:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```
There are two values, separated by commas. The first one is `width=device-width`. This tells the browser to assume the width of the website is the same as the width of the device (instead of assuming the width of the website is 980 pixels). The second value is `initial-scale=1`. This tells the browser how much or how little scaling to do. With a responsive design, you don't want the browser to do any scaling at all.

![](images-two-mobile-phones-6d335a19e1c9c_1440.png)

### REF
read this [ref](https://web.dev/learn/design/welcome?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fdesign%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fdesign%2Fwelcome)