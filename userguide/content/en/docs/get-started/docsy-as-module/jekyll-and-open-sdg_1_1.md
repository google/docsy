<h1>Jekyll and Open SDG</h1>

Jekyll is a popular, free and open source static website generator which works like a content management system such as [Drupal](https://www.drupal.org/) and [WordPress](https://wordpress.com/). However, unlike those systems, Jekyll generates at build-time rather than at request-time. Jekyll creates static websites with some templating abilities. In this way, Jekyll is similar to other static site generators, like [Next.js](https://nextjs.org/) and [Hugo](https://gohugo.io/).

## Advantages of static sites

The Open SDG platform is built with Jekyll and therefore gets all the advantages of using a static site generator.

### Simple to maintain 

Given that static websites are just a set of files, the capability requirements of the server are lowered compared to that of a dynamic website, and therefore its simpler create and maintain. The web server need only be capable of serving those files. 

### Speed 

As the server is simply returning/sending files when they are requested and nothing has to be dynamically generated, there is less processing. Jekyll-based websites load much faster compared to dynamically generated pages, which are generated at request-time and require interaction with the backend database. 

### Stability 

The dynamic website server involves several software components working together, and if any one component fails the website will fail to be served properly. By contrast a web server, such as one provided by Jekyll, serves only static files so is less likely to fail. 

### Security 

Security risks such as SQL injection attacks are impossible on a static website since there is no dynamic database that an attacker can exploit. 

### Version-controlled 

Static sites are a collection of files, which makes them easy to maintain using open-source version-control software like Git. Free services like Github.com are a perfect tool for any static site.

## Disadvantages of static sites

### No Graphical Interface 

Jekyll is a command-line tool, which could be difficult to use for non-technical users. Although graphical user interfaces for the management of Jekyll do exist, one is not used for Open SDG.  

### Long build time 

Open SDG platforms can take several minutes to build. Slow build times can slow down development (especially when debugging) because the developer has to wait for the build to complete before they can see the result. 

