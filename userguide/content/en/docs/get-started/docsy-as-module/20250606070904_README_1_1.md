## GeoDataViz Toolkit - Colours

The use of colour is very often fundamental to the success of a data visualisation. Colour can help with many elements of your design from improving visual contrast to simply catching the eye. Careful use of colour enhances clarity, aids storytelling and draws a viewer into your dataset. Poor use of colour can obscure data, or even mislead.

## GeoDataViz Colour Palettes

These colour palettes have been selected to offer a good range of options depending on your data. We have carefully considered [colour vision deficiencies](https://en.wikipedia.org/wiki/Color_blindness) and each colour scheme has been tested for compatibility. These colours take inspiration from other people's great work, OS' history and our own experiences.

## Update 01/05/2024

We have recently added two new CVD friendly diverging colour palettes and a new CVD Red/Amber/Green colour pallet which you can find when downloading GDV colour palettes v0.8.pdf

_You can view and download the colour palette PDF from this repository. You can also use the JSON to reference the colours in your web projects._

![Colour palettes](https://raw.githubusercontent.com/OrdnanceSurvey/GeoDataViz-Toolkit/master/img/Colour-palettes-2.png)

## QGIS XML File

We have now added a QGIS XML file (OS GeoDataViz Colours & Symbols (QGIS).xml) to this repo which you can load into QGIS and access all the colours and symbols from the toolkit.

- Download the toolkit.
- Copy the folder GDV Symbols to C:\Program Files\QGIS xxxx\apps\qgis-ltr\svg, where xxxx represents whatever version of QGIS you are running).
- Open QGIS.
- Settings > Style Manager.
- Import/Export > Import.
- Import from File > Navigate to location of XML > Open > Add to favourites > Remove or add any additional tag(s) > Select All > Import
- GDV can be found under Tags

## ESRI Style File

We have now added an ArcGIS Pro style or .stylx file (OS GeoDataViz Colours (ESRI).stylx) to this repo which you can load into ArcGIS Pro and access all the colours from the palette.

## Using these colour palettes

Which colours you use will be determined by what type of data you are visualising. Here is a guide to choosing the right palette:

**Qualitative** - Use these colour schemes to represent different categories of data. For example, a qualitative scheme is a good choice for showing different types of Points of Interest.

**Red, Amber, Green** - Use these colours to represent a RAG status or [traffic light rating system](https://en.wikipedia.org/wiki/Traffic_light_rating_system). For example, you may use these colours to represent the operational status of lamp posts.

**Sequential** - These colour schemes are ideal for data that follows an order, often numeric ranging from low to high. We have single hue and multi-hue options but they are all ordered by a difference in lightness/saturation. For example, you may use a sequential colour scheme to show counts within a hexagonal grid.

**Diverging** - Use these colour schemes to highlight values that are above and below an interesting mid-point in quantitative data. Two sequential colour ramps emanate from the neutral colour in the middle which often represents zero or an average value. This is a great way to show data values that differ greatly from the norm. For example, you may use a diverging colour scheme to show population change.

## Other useful resources

[Using blend modes and opacity levels](https://www.ordnancesurvey.co.uk/blog/2017/02/carto-tips-using-blend-modes-opacity-levels/) - This blog post explores opacity levels and blend modes and shows some examples of how we can use them together to create effective visualisations.

[ColorBrewer](http://colorbrewer2.org/#type=sequential&amp;scheme=BuGn&amp;n=3) - is a great tool for selecting colour schemes that are specific to maps, especially helpful when mapping various classes of data.

[Adobe Color CC](https://color.adobe.com/create/color-wheel) - is an excellent application for generating colour themes and allows you to experiment quickly with colour variations and browse themes from the user community.

[hailpixel](https://color.hailpixel.com/) - is a wonderful browser-based colour picker from designer Devin Hunt that allows you to create colour swatches with ease.  It&#39;s also really fun to use!

[0 to 255](http://www.0to255.com/) - lets you pick between different shades of one colour which makes it ideal for choosing sequential schemes.

[Subtleties of color](https://earthobservatory.nasa.gov/blogs/elegantfigures/2013/08/05/subtleties-of-color-part-1-of-6/) - This is a fantastic 6-part series of articles about the use of colour in dataviz.

[Choosing colour for choropleth maps](http://academy.datawrapper.de/article/117-color-palette-for-your-map) - This is a fantastic, helpful article from Lisa Charlotte Rost at Datawrapper.

[The viridis colour palettes](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html) - These fantastic colour schemes help &quot;make plots that are pretty, better represent your data, easier to read by those with colorblindness, and print well in grey scale.&quot;

[HEX to RGB converter](https://www.webpagefx.com/web-design/hex-to-rgb/) - Use this tool to quickly convert hex colour codes into RGB values.

[Colour Scale in Data Viz](https://blog.datawrapper.de/which-color-scale-to-use-in-data-vis/) - A great 4 part blog from Lisa Rost at Datwrapper explaining what colour scale to use when creating data visualisations.

## Feedback

If you have any feedback about these colour palettes then please raise an issue on this repository.

Thank you

OS GeoDataViz team
