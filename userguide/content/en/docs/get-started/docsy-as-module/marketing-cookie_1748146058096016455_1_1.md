---
title: Marketing Cookies
description: "Learn more about how Digital Experience uses browser cookies."
---

The Digital Experience team use the `gitlab_user` and `gitlab_tier` cookies as a tool to customize content on the `about.gitlab.com` domain. These cookies are set when a user logs into GitLab.com. Both of these cookies expires with the session, or after 2 weeks (whichever comes first).

* The `gitlab_user` cookie determines if a user has an active sesssion within the GitLab product. If they do, this cookie will be present.

* The `gitlab_tier` cookie contains information for which unique tiers a user belongs to (Free, Premium, and/or Ultimate). This is the only user data that is being passed. **No other user data is passed**.  
  * Note that this cookie is in active development. This is the desired behavior. It currently includes owners of namespaces, but will expand to all users.

This implementation is on the [GitLab product project](https://gitlab.com/gitlab-org/gitlab) for the Enterprise Edition of the product. Thus, it will exist in the `gitlab.com` domain, and it will propagate down to all project subdomains, including about.gitlab.com. The cookies do not work in review apps for other projects such as within Buyer Experience or Blog, so keep that in mind when developing for personalization in the Digital Experience team. If you want to verify that features are being rolled out appropriately, reach out to Matketing Analytics to see if the breakdown looks correct from their end.  

For more information, read the [docs on that](https://docs.gitlab.com/ee/user/profile/#cookies-used-for-sign-in).

Note that this cookie can sometimes not show up for GitLab team members. This does not affect production. Make sure to check with Marketing analytics to see the user breakdown between authenticated and non-authenticated users.

## Related MRs

* `gitlab_tier` MVC 1 MR: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/151323>
* Updating marketing cookie to `gitlab_user`: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131072>
* Setting marketing cookie for logged in users `about_gitlab_active_user`: <https://gitlab.com/gitlab-org/gitlab/-/merge_requests/113761>

 <figure class="video_container">
   <iframe src="https://www.youtube.com/embed/Nm8wWtoBCTc" frameborder="0" allowfullscreen="true"> </iframe>
 </figure>

## How to use the cookies in the Buyer Experience repo

Use this [library](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/-/blob/main/lib/getCookieValue.ts?ref_type=heads) by passing the name of any available cookie that the client is able to parse:

```js
import getCookieValue from '~/lib/getCookieValue';
```

Then, you can use that function to update the component during any lifecycle after the `mounted` hook, depending on your intended functionality.

```js
export default Vue.extend({
// ...
data() {
    return {
      knownSignIn: false,
    };
  },
mounted() {
  const signedInCookieName = 'gitlab_user';
  this.knownSignIn = getCookieValue(signedInCookieName) ? true : false;
},
// ... 
})
```

Note that any of this logic is done client side, so we caution against doing extensive DOM manipulation in this manner. This is a constraint that impacts web performance.
