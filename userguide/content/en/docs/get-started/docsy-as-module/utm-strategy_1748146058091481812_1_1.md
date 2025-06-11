---
title: "Developer Relations workflow: UTM Tracking Strategy"
---

## <i class="" id="overview"></i> Overview

The purpose of this page is to outline the UTM strategy of the Community team and how it drives dashboards of the team in Sisense. This strategy is designed inline with [Marketing UTM Strategy](/handbook/marketing/utm-strategy/) and reviewed by the Marketing Strategy & Analytics team.

## <i class="" id="utm-usecases"></i> Use Cases

- Workshop with referral to a marketing website for more resources or reference
- Free Trial sign-up suggestions during presentations
- Referencing surveys, blog posts, release posts or any other Content
- Referencing Documentation pages

### Campaign manager

[CommunityApps](https://campaign-manager.gitlab.com) makes using working with this UTM Strategy easier, you can learn more in the CommunityApps [User Guide](/handbook/marketing/developer-relations/community-apps/campaign-manager/).

## <i class="" id="utm-parameters"></i> UTM Parameters

UTM Parameters are used to track how a user got to a website, their transition through the website and at what point they existed. For the community team, UTM parameters will help use measure the impact of engagements with the community in driving contributions to GitLab and subscriptions. Choice of UTM parameters is restricted to certain values and managed by the MS & A team. Maintaining standards is essential for data to get to the right destination in Google Analytics and Sisense. The UTM parameters for agreed on for community team are as follows.

| Name              |   Parameter        |  Community  Values  | Description   |
|-------------------|----------------|--------------------|---------------|
| Campaign Name     | utm_campaign   |  `community`                 | The medium is the overarching channel bucket like paidsearch, social, or sponsorship. It answers the question of "how did they come to us?". For the community team, it helps identify metrics for the team and used in instrumenting necessary dashboards in Sisense. If you are engaging under another campaign, please liaise with the DRIs of the campaign for the right `utm_campaign` or the MS & A team. |
| Campaign Source   | utm_source     | mailjet, twitter, linkedin, stack overflow, etc. See [UTM Generator Picklist for more](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=3) | The source-based URL parameter can tell you which website is sending the traffic. The source is a further "slicing" of overall channels. It answers the question of "how did they come to us?" but with more granular details than utm_medium. Examples include demandbase, twitter, or market. |
| Campaign Medium   | utm_medium     |  display, email, social | The medium is the overarching channel bucket like paidsearch, social, or sponsorship. It answers the question of "how did they come to us?". |
| Campaign Content  | utm_content    |  | This parameter is used to identify the specific campaign a community DRI is using the UTM tracking for and used to separate reporting for different campaigns of the team in Sisense. To further make it easier, the MS&A team will have approved using prefixes to enable filtering of tracking by programs. i.e. `de_`, `edu_`, `oss_`, `code_`, `heroes_` will be used to filter each program results.|
| Campaign Budget   | utm_budget     |  cmty | Indicates which budget is used for the campaign promotion. |

## <i class="" id="compulsory-utm-codes"></i> Compulsory fields

For results to get to the right dashboards, it is necessary to set the right UTM parameters. The compulsory parameters are:

- `utm_campaign=community`
- `utm_budget=cmty`

The values of these parameters should not be changed. Optional but necessary parameters with example values are

- `utm_source=linkedin`
- `utm_medium=social`
- `utm_content=de_gitlab_release`

## <i class="" id="example-utm-codes"></i> Examples

Example 1: https://about.gitlab.com/releases/2022/11/22/gitlab-15-6-released/?utm_campaign=community&utm_source=linkedin&utm_medium=social&utm_content=de_gitlab_release&utm_budget=cmty

- utm_campaign=community : default campaign code for the community team
- utm_source=linkedin : Where visit is coming from
- utm_medium=social : broader identification of where they are coming from
- utm_content=de_gitlab_release : de_ to identify the DevEvangelism team, we can also have edu_, oss_, code_, heros_, etc.
- utm_budget=cmty : Identifies Community team as the owner of the budget.

Example 2: https://about.gitlab.com/releases/2022/11/22/gitlab-15-6-released/?utm_campaign=community&utm_source=mailjet&utm_medium=email&utm_content=newsletter_gitlab_release&utm_budget=cmty

Example 3: https://about.gitlab.com/releases/2022/11/22/gitlab-15-6-released/?utm_campaign=community&utm_source=qrcode&utm_medium=display&utm_content=edu_mit_workshop_slide&utm_budget=cmty

## <i class="" id="best-practices-utm-codes"></i> Best Practices

- Use URL shortening for URLs with UTM parameters
- Use the right `utm_source` & `utm_medium` to get best results in identifying where visitors came from, see [UTM Generator Picklist](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=3) for a full list of available options.
- Use the right prefixes for `utm_content` and only use underscore for the extra text you will add.

## <i class="" id="dashboards-utm-codes"></i> Dashboards

TBD

## UTM Generator

```html
<div>
    <table>
        <tr width="35%">
            <td> Link: </td>
            <td> <input class='utm_generator' type="text" id="utm_link" /></td>
        </tr>
        <tr>
            <td> Where will you be sharing it: </td>
            <td>
                <select class='utm_generator' id="utm_where" >
                    <option value="social-linkedin">LinkedIn</option>
                    <option value="social-twitter">Twitter</option>
                    <option value="display-blog">Blog Post</option>
                    <option value="display-partner">Partner Website</option>
                    <option value="display">Physical assets</option>
                    <option value="email">Newsletter</option>
                </select>

            </td>
        </tr>
        <tr>
            <td> What Program is the DRI for Campaign: </td>
            <td>
                <select class='utm_generator' id="utm_who" >
                    <option value="oss">Open Source</option>
                    <option value="edu">Education</option>
                    <option value="de">Developer Evangelism</option>
                    <option value="code">Code Contributor</option>
                </select>

            </td>
        </tr>
        <tr>
            <td> Unique Campaign Identifier </td>
            <td> <input class='utm_generator' type="text" id="utm_unique_code" /></td>
        </tr>
        <tr>
            <td style="text-align: right;"> <button class='btn btn-primary' id='generate_utm'>Generate</button> </td>
            <td> Result: <p id='utm_generator_result' style='background-color:#ecdcc2; color:#ff0000; padding:10px'> </p> </td>
        </tr>
    </table>

</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script>
    $( document ).ready(function(){
        $('#generate_utm').on("click", function(){
            var link = $('#utm_link').val();
            var source = $('#utm_where').val();
            var dri = $('#utm_who').val();
            var unique_code = $('#utm_unique_code').val();

            var result = link + '?utm_campaign=community&utm_budget=cmty&';

            switch(source){
                case 'social-linkedin':
                    result = result + 'utm_medium=social&utm_source=linkedin'
                    break;
                case 'social-twitter':
                    result = result + 'utm_medium=social&utm_source=twitter'
                    break;
                case 'display-blog':
                    result = result + 'utm_medium=display&utm_source=blog'
                    break;
                case 'display-blog':
                    result = result + 'utm_medium=display&utm_source=blog'
                    break;
                case 'display-blog':
                    result = result + 'utm_medium=display&utm_source=partner'
                    break;
                case 'display':
                    result = result + 'utm_medium=display'
                    break;
                default:
                    result = result + 'utm_medium=social&utm_source=linkedin'
                    break;
            }

            result = result + '&utm_content='+dri+'_'+unique_code;

            $('#utm_generator_result').text(result)

        })
    });
</script>
```
