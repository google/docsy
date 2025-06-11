### implementing SEO 
- assess if google can see you site first using `site: your website` in google search bar

- **create helpful, reliable, people-first content**
    - original information, comprehensive description, beyond the obvious
    - additional value is added to web scrapped content
    - main heading and titles are descriptive without exaggerating
    - make the page trust worthy and the author or organization is clear by having `about` page
    - create your pages as if you want for users to consider bookmarking or recommending it
    - no spelling or sylestic issues
    - no easily verified factual errors
- **provide good page experience**
    - page should load quickly **< 2.5 second**,  Use formats like **WebP** and **compress** images
    - Optimize JavaScript to reduce blocking elements.
        - Inline critical CSS and defer non-critical JavaScript so they don’t block the rendering of the main content.
        - remove unused code, splitting code, and only loading what is needed initially.
        - Use asynchronous loading
        - Optimize main thread work: using **web worker**
    - Use techniques like lazy loading and caching.
        - Delay loading images or resources that are not immediately visible.
        - reduce the time it takes for the server to respond to requests by optimizing back-end processes, using caching, and upgrading hosting if necessary
    - first input delay should be **< 100millisecond**
    - specify images height and width to avoid unexpected shift of content
    - reserve space for ads on the website to avoid them pushing content down
    - `font-display: swap` in CSS helps to avoid the flash of unstyled text (FOUT) by displaying a fallback font until the main font loads.
    - Monitor performance regularly with tools like **Google PageSpeed Insights** or **Lighthouse**.
    - use https, secure cookies e:i `Secure` attribute to true and `HttpOnly` to avoid cross site scripting attacks
    - implement content security policy (CSP)
    - use secure headers e:i
        - `Strict-Transport-Security (HSTS):` Forces browsers to connect only via HTTPS.
        - `X-Content-Type-Options`: Prevents browsers from interpreting files as a different MIME type than declared.
        - `X-Frame-Options` Prevents your site from being embedded in iframes, reducing the risk of clickjacking attacks.
        - `X-XSS-Protection` Enables browser-based XSS protection.
    -  Enforcing strong password policies, multi-factor authentication, and session expiration for logged-in users.
    - remember **Google’s mobile-first indexing means that the mobile version of your site is the primary version it considers for search rankings.**
    - Use CSS media queries for responsiveness design
    - Text: Ensure font sizes are large enough to read on smaller screens. A base font size of at least 16px is often recommended.
    - Buttons and links: Make buttons and links large and well-spaced for easy tapping. Use at least 48px x 48px for clickable elements to avoid accidental clicks.
    - a hamburger menu (☰) or similar compact design for website navigation
    -  Use responsive images (like `srcset` in HTML), **lazy loading** for off-screen images, and modern formats like **WebP** to reduce file sizes.
    - Use Google’s Mobile-Friendly Test: This tool checks if a page is mobile-friendly and provides specific recommendations for improvements.
    - avoid large pop-ups, ads pop-ups, or overlays that cover the main content
    - reduce ads
    - Ensure Ads are Relevant and Non-Deceptive
    - Use Smaller Banners or Pop-Ups
    - give users a chance to engage with your content before displaying any pop-ups or offers.
    - **Make Interstitials Easy to Dismiss**
    - Use only minimal pop-ups on mobile, and prioritize content-first design.
    Keep consistent **margins** and **padding** to separate different sections.
    - Use **headings**, **subheadings**, and **bullet points** to break down content and make it scannable.
    - Use **larger fonts** for the main headings (H1) and important text.
    - Apply **contrast** to make key content stand out (e.g., dark text on a light background).
    - Differentiate sections using **background colors** or **borders** to visually group related content.
    - calculate P75

### crawling and indexing
- don't worry about file types as google supports almost all of the file types and formats
- filetype:pdf something, would show you results of only the specified file format
- use readable, Simple, descriptive words rather than long ID numbers in your URLs.
- Use UTF-8 encoding as necessary. e:g `https://example.com/%D9%86%D8%B9%D9%86%D8%A7%D8%B9/%D8%A8%D9%82%D8%A7%D9%84%D8%A9` for Arabic characters in the URL **NOT** `https://example.com/نعناع`
- avoid Unreadable, long ID numbers in the URL
- Don't use fragments to change the content of a page e:i `#` in url to redirect the view of the page to specific section, as Google generally doesn't support URL fragments. If you're using JavaScript to change content, use the [History API](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics#use-history-api) instead
- Consider using hyphens to separate words in your URLs, as it helps users and search engines identify concepts in the URL more easily. We recommend that you use hyphens (-) instead of underscores (_) in your URLs.
- avoid Words in the URL joined together e:g `/greendress`
- for URL params, an equal sign (=) to separate key-value pairs and add additional parameters with an ampersand (&)
- Using a comma (,) to list multiple values for the same key
- avoid Using a colon : to separate key-value pairs and brackets [ ] to add additional parameters
- avoid complex URL with multiple parameters
- Canonical Tags to identify the primary URL for duplicate content, e:i for routes that has multiple forms (e:g /category/shoes/red /category/shoes/green)
- **Parameter Management in Google Search Console**: Use Search Console to tell Google which parameters to ignore.
- **Robots.txt and Noindex Tags**: Block pages or sections that are not valuable to search engines (like endless calendar dates) using `robots.txt` or `<meta name="robots" content="noindex">`.
- avoid the use of session IDs in URLs. Consider using cookies instead.
- if upper and lower case text in a URL is treated the same by the web server, convert all text to the same case so it is easier for Google to determine that URLs reference the same page.
- Whenever possible, shorten URLs by trimming unnecessary parameters.
- If your site has an infinite calendar, add a nofollow attribute to links to dynamically created future calendar pages.
- Check your site for broken relative links.
- use `<a>` tag with `href` attr so google can crawl and index you pages
- use logical link text reflecting the page that you link to
- As a fallback, Google can use the title attribute as anchor text if the <a> element is for some reason empty.
`<a href="https://example.com/ghost-pepper-recipe" title="how to pickle ghost peppers"></a>`
- For images as links, Google uses the alt attribute of the img element as anchor text, so be sure to add descriptive alt text to your images:
`<a href="/add-to-cart.html"><img src="enchiladas-in-shopping-cart.jpg" alt="add enchiladas to your cart"/></a>`
- internal links used wisely, meaningful, concise and not to many links in one page so user can know the next step
- **You might need a sitemap if:**
    - Your site is large. 
    - Your site is new and has few external links to it. 
    - Your site has a lot of rich media content (video, images) or is shown in Google News.

### mobile first-indexing considerations
- don't show less information on your mobile version
- dont' use these metatags
```html
<meta name="robots" content="noindex">
<meta name="googlebot" content="noindex">
```
- respnsive mobile friendly website with the same URLs in all devices
- identify the language of your page by using the lang attribute on the html element.
- Use the same robots meta tags on the mobile and desktop site.
- Don't lazy-load primary content upon user interaction.
- Let Google crawl your resources
- Make sure that your mobile site contains the same content as your desktop site
- Use the same clear and meaningful headings on the mobile site as you do on the desktop site.
- Put the same metadata on both versions of your site

### title
- every page on your site has a title specified in the `<title>` element.
- Write descriptive and concise text for your `<title>` elements.
- Avoid vague descriptors like "Home" for your home page, or "Profile" for a specific person's profile.
- `avoid unnecessarily long or verbose text in your `<title>`
- Avoid keyword stuffing
-  dynamically update the <title> element to better reflect the actual content of the page.
- Brand your titles concisely. The <title> element on your site's home page is a reasonable place to include some additional information about your site. For example: `<title>ExampleSocialSite, a place for people to meet and mingle</title>`
- Consider ensuring that your main title is distinctive from other text on a page and stands out as being the most prominent on the page (for example, using a larger font, putting the title text in the first visible <h1> element on the page, etc).
- Use the same language and writing system as the primary content on your pages e:g  if a page is written in Hindi, make sure to also write the <title> element in Hindi
- avoid Half-empty <title> elements
- avoid obsolet titles e:g 2012 something, but change to recent date
- avoid titles that don't reflect the actual content of the website
- make your main title clear for crawlers, don't sue alot of h1 or make somehting bigger than the main title


- The `og:title` tag is an Open Graph meta tag used in HTML to define the title of a web page when it is shared on social media platforms like Facebook, LinkedIn, and Twitter. By specifying `og:title`, you can control what title will appear in the preview link when someone shares your page. This can help make shared content more engaging and improve click-through rates.

Here's how you might use `og:title` in your HTML:

```html
<head>
  <meta property="og:title" content="Your Page Title Here" />
</head>
```

Replace `"Your Page Title Here"` with the actual title you want to display. Adding `og:title` is especially useful for branding and consistency, ensuring your title appears the same across all platforms that support Open Graph tags.

### ai google overview
There is nothing special for creators to do to be considered other than to follow our regular guidance for appearing in search, as covered in Google Search Essentials.
