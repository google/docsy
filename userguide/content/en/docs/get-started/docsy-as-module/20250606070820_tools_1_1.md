# tools

### Blogger, Wix, and Squarespace

are website-building platforms, each offering tools for creating and managing websites or blogs. Here’s a quick overview of what each of them is:

1. **Blogger**: A free blogging platform owned by Google, designed for straightforward blogging without extra features. It's a good choice if you want a simple, no-cost way to publish written content online, but it has limited design options and customization.

2. **Wix**: A website builder that uses a drag-and-drop editor, allowing users to create websites by arranging elements on the page without needing coding skills. Wix is versatile and offers templates for various website types, including blogs, small business sites, and even e-commerce.

3. **Squarespace**: A premium website builder known for its sleek, professionally designed templates. Squarespace is popular with creatives, small business owners, and anyone looking to create a visually appealing, polished website. It includes blogging and e-commerce features, with a more refined look and built-in tools for SEO and marketing. 

Each platform has its strengths, making them suitable for different purposes—from basic blogs to full-featured websites.

### Google PageSpeed Insights, Lighthouse and Chrome DevTools
- Monitor core vital metrics performance and get specific suggestions for improvement.

### Content Delivery Network (CDN)
CDNs store copies of your site’s content on servers around the world, reducing load times by serving resources from locations close to the user.

### web workers
simple means for web content to run scripts in background threads.

### Let’s Encrypt
Obtain an SSL/TLS certificate from a reputable certificate authority (CA) and configure it on your server. Many hosting providers offer free SSL certificates (such as Let’s Encrypt) and make setup easy.

Implement Content Security Policy (CSP)

### content security policy

A **CSP** is a security feature that helps prevent cross-site scripting and other code injection attacks by specifying which resources (e.g., scripts, images) are allowed to load on your site.

**How to implement**: Configure CSP headers in your server settings to allow only trusted domains to load resources. For example, setting policies like `script-src 'self'` ensures that only scripts from your domain are executed.

### Google’s Mobile-Friendly Test
This tool checks if a page is mobile-friendly and provides specific recommendations for improvements.

### **google trends**
helps you to know what people are interested in

### **Crunchbase**
provides information about businesses

### Google Analytics
If your site is set up with Google Analytics, you can track page load times under Behavior > Site Speed > Page Timings. While Google Analytics doesn't directly give you percentiles, you can export the data and calculate the 75th percentile manually.

### Google Lighthouse (or PageSpeed Insights)
Both tools offer performance metrics like First Contentful Paint (FCP) and Largest Contentful Paint (LCP) with percentile scores, and you can see metrics segmented by mobile and desktop.

### WebPageTest
This tool provides in-depth performance metrics for individual pages, often segmented by various percentile markers, including the 75th percentile.

### Real User Monitoring (RUM) tools
Tools like **New Relic**, **Datadog**, **Dynatrace**, or **SpeedCurve** provide real-user data across many devices and networks. These tools can automatically calculate and display the 75th percentile of various metrics, segmented by device type (mobile or desktop).

### Accelerated Mobile Pages (AMP)
It is an Open Source Framework that was launched as a joint initiative by Google and several other technology and publishing companies. With AMP, it is possible to create simple mobile websites that load almost instantly