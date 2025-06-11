<h1>Site configuration forms</h1>

In addition to the [usual Jekyll configuration options](https://jekyllrb.com/docs/configuration/), there are many options specific to Open SDG. These are detailed on the [site configuration page](configuration.md). **All of these settings go in the `_data/site_config.yml` file or you can make changes to these settings using the site configuration forms.**

New site configuration forms have been developed to be as user friendly as possible.

This document covers when and how to use the site configuration forms to make configuration changes to your site.

### When to use

There are two ways of updating to your `site_config.yml` file in order to make configuration changes to your site: 

* You can edit the `_data/site_config.yml` file directly, or 
* You can use the site configuration forms via your staging site.
  
You can use either method at any time for any change. 

The site configuration forms have been created to make changes to your site more user-friendly. It may be quicker for you to use the user-friendly site configuration forms than editing the file directly. Or, it might be quicker for you to edit the directly file instead. This may depend on your experience and personal preference and the choice is yours.

By using the site configuration forms, you remove the risk of any syntax errors that may occur from editing the file directly. This may be preferential for users without much developer or GitHub experience. 

### How to use

You can access the site configuration forms by going to your staging site and in the footer menu at the bottom of any page, click "Configuration".

From here you can navigate around the forms depending on what setting you would like to change. Every setting has its own section which may consist of checkboxes, text boxes, drop-downs, toggles and list items. You can interact with each of them to update any settings from the default. There is more information provided to give context and guidance for each setting which can be accessed by clicking on the drop-down at the bottom of each setting. You can also use the search function to find a specific setting.

For example, if you wanted to change your country name on the site, you would: 

1. Click on the "General" menu item.
1. Find the "Country" setting on that page.
1. Read more about the setting by clicking on the more information drop-down at the bottom of that setting.
1. Type in the name of your country/region/locality etc. in the text box for that setting.
1. Change any other settings in a similar way, depending on their format.

Once you have made the desired changes within the site configuration forms:

1. Click the green "Download Configuration" button above the configuration menu.  
1. You will receive a file download called "site_config.yml". 
1. Click on the green "Go to Repository" button to the right of it, and it will take you to your site repository on GitHub.
1. Upload the downloaded "site_config.yml" file by dragging it onto the page.
1. Scroll down and press "Commit changes".

If you are ready to test your changes, merge your feature branch to the "develop" branch and you can view them on your staging site to check they look as expected and you are happy with them. 

If you are not happy, go back to the configuration forms and alter/change back following the same steps. Once happy with the changes on the staging site, make sure to merge "develop" to "master" to see these changes on your production site.
   
