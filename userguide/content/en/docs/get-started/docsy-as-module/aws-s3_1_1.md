<h1>Amazon Web Services S3</h1>

Amazon Web Services (AWS) provides a product called S3, which is first and foremost a file storage and delivery service. It's main functions are to:

1. store files
1. receive requests for those files
1. deliver the requested files to the requester

S3 has become a popular choice for hosting static websites, which makes it an appropriate option for hosting the Open SDG pltaform.

## Pros

* AWS is popular enough to have achieved "ecosystem" status, which means that there are many tools, tutorials, and libraries devoted to supporting it.
* Despite S3 not being free, it is noticeably cheaper than paying for a traditional webserver. One site on S3 is typically less than $3/month.
* S3 integrates well (as you might expect) with other relevant AWS offerings, such as CloudFront (content delivery network), Route 53 (DNS services), and Certificate Manager (SSL services).

## Cons

* AWS S3 is not free, as mentioned above.
* The one-time initial set-up is a bit involved.

## Domain name

Out of the box, your AWS S3 site will be viewable at a default AWS domain name. This might be something similar to: "http://www.my-bucket-name.org.s3-website-us-east-1.amazonaws.com/".

This URL can be customised, of course, to any domain you own. More details are available in this [official Amazon S3 documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html).

## Set-up

As mentioned, the initial one-time setup of a static website on AWS S3 is somewhat involved. It is the subject of many blog posts, videos, and tutorials attempting to make it easier. The most authoritative source of guidance would be [Amazon's own documentation](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html). Of particular use would be this [official Amazon example walkthrough](https://docs.aws.amazon.com/AmazonS3/latest/dev/HostingWebsiteOnS3Setup.html). Plenty of third-party guides and videos are available online as well, but try to use the most recent ones, since Amazon has changed their interface over the years.

## Automation

Automating your deployments to S3 will require leveraging the Python package `awscli`. Here is an example of installing this package:

`sudo pip install awscli`.

And here is an example of using this package to push a folder to S3:

`aws s3 sync --acl public-read --sse --delete /path/to/my/files s3://www.name-of-my-bucket.org`

This command relies on some "environment variables" which can be set up in your CI tool: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`. The values of these variables can be found in a `credentials.csv` file that is downloaded in the course of the S3 setup.
