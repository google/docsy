---
title: DEX Core Web Vitals 
description: "This page provides an overview of Core Web Vitals, key metrics for optimizing website performance and user experience, and introduces various tools for monitoring and improving these metrics, including Google Analytics, Google Search Console, ContentKing, and DebugBear."
---

Core Web Vitals (CWV) are a set of performance metrics introduced by Google to measure key aspects of user experience on the web. These metrics focus on loading speed, interactivity, and visual stability, ensuring a smoother and more user-friendly experience. Understanding and optimizing Core Web Vitals is crucial for improving search rankings and enhancing user satisfaction.

## Key Metrics

1. Largest Contentful Paint (LCP): Measures loading performance. LCP represents the time it takes for the largest visible content element (e.g., image or block of text) to appear in the viewport.
   * Target: LCP should occur within 2.5 seconds of when the page first starts loading.
2. Cumulative Layout Shift (CLS): Measures visual stability. CLS tracks how much the layout shifts during the loading process. A page with minimal unexpected shifts provides a better experience.
   * Target: A CLS score of less than 0.1.
3. Interaction to Next Paint (INP): Measures interactivity. INP evaluates how quickly a webpage responds to user inputs, such as clicks or keyboard events.
   * Target: INP should be less than 200 milliseconds.

## Importance of Core Web Vitals

Core Web Vitals are part of Google’s overall page experience signals, which assess how users perceive their experience interacting with a web page. Websites that score well on Core Web Vitals tend to perform better in search rankings and offer improved user engagement. Ensuring these metrics are optimized can lead to reduced bounce rates, higher conversions, and better SEO performance.

## Tools for Monitoring Core Web Vitals

1. Google Analytics
Google Analytics is primarily used for tracking website visitors and understanding their behavior. While it doesn’t focus directly on Core Web Vitals, the tool is useful for tracking user engagement metrics, which can indirectly impact performance, such as bounce rates and session durations.
   * Use Cases: Track traffic, audience insights, user behavior, conversion tracking, e-commerce performance.
   * Core Web Vitals: While not explicitly tracked, user engagement metrics can reveal performance-related issues.
   * Cons: Data sampling may reduce accuracy, and real-time reports for custom metrics are limited.
2. Google Search Console
Google Search Console (GSC) is a crucial tool for tracking our website’s performance in Google Search. It offers specific insights into Core Web Vitals, allowing us to monitor LCP, CLS, and INP directly. GSC is especially helpful for identifying and fixing SEO-related issues that affect site visibility.
   * Use Cases: Track search performance, monitor indexing, submit sitemaps, identify SEO issues, track Core Web Vitals.
   * Core Web Vitals: Provides direct tracking for LCP, CLS, and INP.
   * Cons: Limited historical data and data updates are delayed by a day or two.
3. ContentKing
ContentKing is an SEO monitoring tool that provides real-time tracking of our site’s SEO health, including Core Web Vitals. It’s ideal for catching issues before they impact rankings and tracking on-page changes over time.
   * Use Cases: Real-time SEO monitoring, change tracking, on-page audits, team collaboration, Core Web Vitals monitoring.
   * Core Web Vitals: Tracks LCP, CLS, and INP directly.
   * Cons: Primarily focused on SEO; doesn’t provide detailed user behavior or traffic insights.
4. DebugBear
DebugBear is a performance monitoring tool tailored to track page speed and Core Web Vitals. It is designed for web developers and performance-focused users, providing deep insights into how various elements on the page affect load time and user experience.
   * Use Cases: Monitor Core Web Vitals, analyze page speed, simulate different network conditions, set performance alerts.
   * Core Web Vitals: Directly tracks LCP, CLS, and INP.
   * Cons: Lacks SEO and user traffic insights, limited integration with other tools.

## CWV Testing Procedure

When you makes changes that might affect CWV, it is crucial to perform before and after tests to measure the impact of those changes. Here’s the process:

1. **Contact Point:**

    * If you implement changes that could influence CWV metrics, contact [Miracle](https://gitlab.com/mirbanks) or [Hanif](https://gitlab.com/hsmith-watson) within the merge request (MR).
    * Clearly describe the nature of the change and why it might affect CWV.

2. **Before and After Testing:**

    * [Miracle](https://gitlab.com/mirbanks) or [Hanif](https://gitlab.com/hsmith-watson) will create a set of before and after tests to evaluate the impact of the changes on CWV.
    * Testing will be conducted on **3 URLs** that are representative of the site’s overall content and structure.
    * The tests will be carried out using **DebugBear**, a reliable tool for monitoring CWV. **Lighthouse in DevTools should not be used** as it is known for discrepancies and may not provide consistent or accurate results.
    * The goal is to compare the CWV metrics of these URLs before and after the change.

3. **Monitoring in Google Search Console:**
    * For significant changes, it may take approximately **one week** after the change is merged for Google Search Console to reflect the impact on CWV based on real user data.
    * Monitoring these metrics in Google Search Console helps to confirm whether the changes have had the desired effect on actual site users.

### Reporting and Follow-Up

* After the testing is completed, results will be documented and shared with the team.
* Any necessary adjustments or further optimizations based on the test results will be discussed and implemented accordingly.

### Best Practices

* Always initiate CWV testing for any changes that could impact loading performance, interactivity, or visual stability.
* Utilize DebugBear for reliable monitoring, avoiding the use of Lighthouse in DevTools due to its inconsistencies.
* Regularly monitor Google Search Console for any unexpected changes in CWV metrics.

By following these guidelines, we ensure that any changes made to the website are thoroughly tested for their impact on user experience, maintaining a high standard for CWV across all pages.
