---
title: "Autogenerating comparison infographics using Figma"
---

## Why

Automatically generating comparison infographics means that the grphic creation is data driven. The value of this is a few things:

* efficiency and quality - it is **far** more efficient and **far** less error prone to auto generate graphics than to have individuals hand creating each graphic
* scale - hand creation of each graphic does not scale. We are looking at generating over 80 different detailed images based on a lot of data, each one with over 106 touch points.
* iteration - as the infographic needs evolve being able to auto generate (and re-generate) the graphs means that we can iterate without heavy nearly as heavy a cost

## Steps

1. Prep the data
   1. Raw Data
      1. Here's the [spreadsheet we are collecting the raw comparison analysis](https://docs.google.com/spreadsheets/d/1Dd1wraHGVM21L942PsYxNj8Czfvq9XO7ysG1Gge5YEk/edit?ts=5f4996cc#gid=90532820) (GitLab viewable only)
      1. Data entry is being done on the `Comparison DATA ENTRY Sheet` tab. **Please DO NOT add or delete columns to this sheet unless at the far right. Doing so will throw off all the other sheets**.
      1. Once you've filled in the data on the DATA ENTRY tab, switch over to the `FIGMA_DATA-Focus-Sync` tab. This is the data represented for Figma consumption.
      1. For your entries you wish to graph, make sure that
         * there is logo image in the "Logo" row (3), and that the data in the cell is a URL that ends in either `.png` or `.jpg`. If it's anything else then the plugin we are using will go into an endless read loop.
         * The "Competitor" row (2) has the proper name in it. This is the name as it will appear in the infographic. Make sure it has proper capitalization, spacing, etc. If you are doing a lot of them you can copy down from row 1, then run a title-case add-on, and find/replace to ditch "-"s' and "_"s'.
      1. Your data is now ready to go. For each competitor you wish to generate a graph for, copy from the "Competitor" row (2) down to the end of the column of data (currently row 110), and then. . . .
   1. Staged data
       1. Create a copy of the file [Infographic Autogen – Working File - Template](https://docs.google.com/spreadsheets/d/1f1tsutSVxVIPU4FnYp8jnRIg1XafvXONO3tIBNb_N2A/edit?usp=sharing).
       1. Make sure that your file is **world readable**. This is required for the plugin to work.
       1. Make a copy of the tab `Template-EDIT A COPY` (new tab name doesn't matter, but I use "runX" and increment X).
       1. Make sure this tab is the first one in the list.
       1. **Paste** your copied competitor info into the new tab, in the following way:
          1. In the first empty column, place your curor in the "logo1" row (4).
          1. Right click => "Paste special" => "Paste values only"
       1. As a sanity check, the row "overview-percent" (6) should have a percentage pasted into it.
       1. Copy the competitor name into "Competitor1 - Competitor3" rows (1-3).
       1. Copy the logo URL into the "logo1" row (4) and "logo2" row (5).
1. Prep Figma
   1. Set up your template file
      1. You can create as many competitor infographs at once as youd like, you just need to make sure that your Figma file templates matches that number.
      1. Open the Figma file [GitLab vs. Campaign - Infograph Creation Template](https://www.figma.com/file/2HuDUksjDrflFNj4pQKSjG/GitLab-vs.-Campaign-Infograph-Creation-Template) - **this is a read-only file**
      1. Make a copy of the file into your local Figma workspace
      1. In this file, there are `pages` on the left. Right click on the page `GitLab vs. Competitor Template, v2`.
      1. Select to "Duplicate Page".
      1. Immediately rename the new page so thing don't get confusing. (I use "Run X" and increment X)
      1. On the new page
         1. Go to the lower left pane and find the object named "competitor-vs-gitlab". Unlock it (icon on the right).
         1. Make as many copies of the whole infograph (the "competitor-vs-gitlab" object) as you need. *hint* there are two pre-setup templates (pages) you can start with instead, with 6 and 12 infographs)
      1. Your Figma file is ready to import into
   1. Install the plugin
       1. This all works via an amazing Figma plugin called [Google Sheets Sync](https://www.figma.com/community/plugin/735770583268406934/Google-Sheets-Sync). <-------- Click on this link from your browser session also logged into FIgma to install it into your Figma instance.
       1. That's that. Not so hard huh?
1. Run the autogen
   1. Make sure in Figma you are showing the page you want to generate with
   1. Go to the Figma "hamburger" menu (top left, 3 parallel horizontal lines)
   1. Select "Plugins" => "Google Sheets Sync"
   1. In the dialog that pops up, where it says "Enter Sheets shareable link here", paste the URL of your stage file (created earlier). **reminder** this file needs to be world readable.
   1. Set the pulldown selection to `Update current selection only`
   1. Click on the "Fetch & sync" button.
   1. Watch the magic happen . . .
   1. You might need to tweak the logo sizes and Competitor name a little in the header area, based on the input sizes of those items.
1. Get and use the results
   1. Export the resiults
      1. Once the infograph is generated, go back to the left pannel and change each object name ("competitor-vs-gitlab") to reflect the competitor name on that infograph (click on it in the left pannel and see which infograph gets selected).
      1. Make sure nothing is selected (click on the background)
      1. Go to the "hamburger" menu
      1. Select "File" => "Export"
      1. In the box that pops up, select only the "competitor-vs-gitlab" images
      1. Click the "Export" button and save the file somewhere on your hard drive.
   1. Use the results
      1. Unzip the file to get the folder of all exported images
      1. The resulting images are too big for our comparison page purposes, so we'll resize them
         1. On Mac, open a Terminal and go into the folder
         1. In the terminal run the command `sips -Z 1081 *.jpg`
         1. This will convert each file to 1081x1080 (LxW)
      1. Upload the images to wherever you need them to be used

## Videos

* [How this ends up working](https://youtu.be/zUJH0aK41xE)
* [How to do it (above steps in video)](https://youtu.be/2hR0guFTtPI)

## The magical Google Sheets Sync Figma plugin

* [Plugin page](https://www.figma.com/community/plugin/735770583268406934/Google-Sheets-Sync)
* [Plugin documentation](https://www.figma.com/proto/VtXf9HikcehWB7FJrJmApl/Google-Sheets-Sync-%E2%80%93-Documentation?scaling=min-zoom&node-id=3%3A2)
