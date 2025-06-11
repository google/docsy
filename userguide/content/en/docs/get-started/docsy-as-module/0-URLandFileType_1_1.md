# Crawling and Indexing

1. **file types**
- Google can index the content of most types of pages and files
- read [this](https://developers.google.com/search/docs/crawling-indexing/indexable-file-types) for complete reference of supported file types
- filetype:pdf something, would show you results of only the specified file format

2. **URL structure**
- use readable words rather than long ID numbers in your URLs.
- avoid complex URLs

Sure! Let's look at some examples to understand how complex URLs with multiple parameters can confuse search engine crawlers and impact your site's indexing.

### Example 1: Multiple URLs for the Same Content
Imagine you have a product page on an e-commerce site. Ideally, it would have a simple URL, like:

- `https://example.com/product/shoes`

But if you add parameters for things like tracking or sorting, you might end up with different URLs that technically lead to the same product page:

- `https://example.com/product/shoes?color=blue`
- `https://example.com/product/shoes?ref=google`
- `https://example.com/product/shoes?ref=facebook&sort=price`
- `https://example.com/product/shoes?color=blue&size=9&ref=twitter`

All of these URLs point to the same product, but the crawler sees them as unique. If Googlebot finds hundreds of these variations, it might waste time crawling them, thinking each is a new page. This could leave less time to crawl other, unique pages on your site.

### Example 2: Filtering Options Creating Duplicate Content
Say you have a blog, and users can filter posts by categories, tags, or sort order. Here’s a simple blog page URL:

- `https://example.com/blog`

But with filters applied, you might see URLs like:

- `https://example.com/blog?sort=recent`
- `https://example.com/blog?category=tech&tag=AI`
- `https://example.com/blog?category=tech&tag=AI&sort=popular`
- `https://example.com/blog?sort=recent&page=3`

These variations don’t create new content but rather different ways to view the same content. Googlebot might crawl each of these pages separately, thinking they’re unique, consuming extra resources and potentially missing other important pages on your site.

### Why This is a Problem for Googlebot
With many complex URLs pointing to similar content, Googlebot can become "stuck" in loops, crawling different URL variations instead of focusing on unique pages. This can:

1. **Use up your crawl budget**: Search engines have a limited amount of time they’ll spend on each site. If Googlebot spends time on unnecessary URL variations, it might not reach all your important pages.
   
2. **Cause duplicate content issues**: Having multiple URLs with similar content can make it harder for search engines to determine which version to show in search results, potentially hurting your search rankings.

### How to Fix It
- **Use Canonical Tags**: Set a "canonical" URL to tell Google which version is the main one.
- **Minimize Parameters**: Avoid unnecessary parameters in URLs whenever possible.
- **Set URL Parameters in Google Search Console**: If some parameters don’t change the page content (like tracking codes), you can tell Google to ignore them.

Keeping URLs clean and simple helps Googlebot efficiently crawl and index your site, ensuring that users find the right content in search results.

When a website dynamically generates documents, small changes like counters, timestamps, or advertisements can lead to multiple versions of a page being created. Each version might look slightly different but essentially contains the same content. This can cause search engines to crawl and index the same content multiple times under different URLs, which is inefficient and can hurt SEO.

Here are some common scenarios with examples:

### 1. **Dynamic Changes (Counters, Timestamps, Advertisements)**
   - If a page includes a timestamp or counter that updates every time someone visits, each version of the page could appear unique to search engines.
   - **Example**: `https://example.com/article?id=123&timestamp=1609459200`
   - Even though the content is the same, if the timestamp changes with every visit, it creates a new URL that search engines might crawl as though it’s a different page.

### 2. **Problematic Parameters (e.g., Session IDs)**
   - Some websites use session IDs in the URL to track individual users. These session IDs create unique URLs for each user, even if they’re all viewing the same page. This leads to many duplicate URLs.
   - **Example**: `https://example.com/product/shoes?sessionid=abc123`
   - Every time a new user accesses the page, the session ID changes (e.g., `?sessionid=def456`), creating new URLs that clutter search engine indexing.

### 3. **Sorting Parameters**
   - Large sites often allow users to sort items by different attributes, such as price, popularity, or newest arrivals. Each sorting option can generate a different URL for the same content.
   - **Example**: 
     - `https://example.com/products/shoes?sort=price`
     - `https://example.com/products/shoes?sort=popularity`
     - `https://example.com/products/shoes?sort=newest`
   - Here, each sorting option produces a new URL for essentially the same set of products, which can lead to multiple duplicate pages indexed by search engines.

### **How to Handle These Issues**
To prevent search engines from indexing multiple URLs with duplicate content:

1. **Canonical Tags**: Use canonical tags to specify the preferred URL for the content, which helps consolidate all duplicate URLs under a single version.
2. **Parameter Management**: Configure Google Search Console to ignore specific parameters (like session IDs or sorting parameters) that don’t change the main content.
3. **URL Structure**: Avoid using session IDs or dynamic parameters directly in URLs if possible, and opt for static URLs.

This ensures search engines focus on indexing only the unique content on your site, improving site performance in search results and making it easier for users to find your content.

When URLs contain irrelevant parameters or link to dynamically generated content with no restrictions, it can create problems for search engines, such as unnecessary duplication, infinite crawling loops, and broken links. Here’s a closer look at each scenario:

### 1. **Irrelevant Parameters in URLs (e.g., Referral Parameters)**
   - Referral parameters (like those tracking which source led the user to the page) do not change the content but create multiple URLs for the same page.
   - **Example**: `https://example.com/product/shoes?ref=facebook`, `https://example.com/product/shoes?ref=twitter`
   - Each URL has the same content, but referral parameters cause search engines to see multiple versions. This duplicates URLs and clutters search engine indexing.

   **Solution**: Use canonical tags to point to the main URL (e.g., `https://example.com/product/shoes`) and configure Google Search Console to ignore parameters that don’t alter content.

### 2. **Calendar Issues**
   - Dynamic calendars often generate infinite links to future or past dates, especially on sites like event pages or blog archives.
   - **Example**: A calendar with a URL like `https://example.com/events?date=2024-01-01` could have links to `2024-01-02`, `2024-01-03`, and so on indefinitely, leading to an endless list of URLs.
   - Search engines might crawl these URLs for each day, wasting resources on URLs that don’t add unique value or are irrelevant (e.g., empty past/future dates).

   **Solution**: Implement limits to restrict calendar links to relevant date ranges (e.g., only upcoming events for a few months) and use `robots.txt` to block these pages if they’re not useful for search indexing.

### 3. **Broken Relative Links Leading to Infinite Loops**
   - Sometimes, broken relative links (links that don't use the full path) can cause an infinite loop in site structure if they accidentally include repeated path elements.
   - **Example**: A link on `https://example.com/category/` mistakenly points to `../category/category/category/...`, creating an endless chain that crawlers follow.
   - This often happens due to incorrect link paths and can lead search engines into infinite crawling loops, impacting site performance and potentially causing parts of the site to be missed in indexing.

   **Solution**: Use absolute paths (like `https://example.com/page`) instead of relative paths when possible, or carefully validate relative links. Regularly audit your site for broken links and set up 404 or 301 redirects for invalid URLs.

### **General Tips for Managing These Issues**
   - **Canonicalization**: Use canonical tags to identify the primary URL for duplicate content, especially if parameters don’t change the content.
   - **Parameter Management in Google Search Console**: Use Search Console to tell Google which parameters to ignore.
   - **Robots.txt and Noindex Tags**: Block pages or sections that are not valuable to search engines (like endless calendar dates) using `robots.txt` or `<meta name="robots" content="noindex">`.

By carefully managing URLs and minimizing irrelevant parameters or infinite loops, you help ensure that search engines can efficiently crawl, index, and rank the most important parts of your site. This approach improves SEO and helps users find your site’s valuable content more easily.