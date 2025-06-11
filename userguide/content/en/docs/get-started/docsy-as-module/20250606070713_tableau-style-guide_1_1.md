---
title: Tableau Style Guide
doc_type: doc
doc_id: doc-846
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

Tableau’s robust visualization capability allows for more options and flexibility around customizing the look-and-feel for our dashboards. In order to create consistent front-end designs that are true to GitLab’s branding, we recommend following the tips and tricks, along with resources, provided below:

GitLab Branding Resource

The in-depth branding guidelines at GitLab provides instructions on leveraging company-specific images and colors for upholding our brand image in our work. For information on how to use logo images, please refer to the following links:

The company branding resource site also provides excellent guidance around data visualization. For example, the color palettes are useful in creating accurate coloring to charts via hex codes:

Please also refer to our Tableau Design folder (TBD) for files that can be used in adding branding elements to your Tableau dashboards. For example, our logo can be added to the upper left-hand corner of our dashboard, above the filter section that is using our GitLab color scheme.

Tableau Help

To create custom color palettes in Tableau, you can update the Preferences.tps file with the code (below under our Standard Color Palette section) to reflect your intended color scheme.

Please refer to the below sites for more instructions from Tableau around customizing texts and colors in workbooks:

Try to avoid using pie charts and use bar charts instead. The human eye is not well suited to easily grasp the difference in the sizes of the slices of the pie chart, a problem amplified with every added slice over two. If you must use pie charts, reserve them only for use cases where only two dimensional values need to be represented (although even there bar charts may be preferable).

For an in-depth explanation of the limitations of pie charts, please read Stephen Few’s excellent article.

<!-- Unsupported block type: image -->

GitLab’s brand approved colors can be found here. Custom color palettes can be created in Tableau Desktop by with the following steps:

For more information see Tableau’s Color Palette.

To round or not to round? Know your audience. Present numbers suitable for your target audience and analysis use cases.

For any numeric values of a 1000 million or more, be mindful of international differences in the definition of billion.

Fiscal Dates should be extracted from the DIM_DATE dimension table.

Date formats must adhere to the GitLab Writing Style Guidelines:

Data is prepared for presentation, or reporting, for a specific target audience and use case. Recorded Data is the basis for all Calculated Data.

Recorded data does not require special labeling, but Calculated data does. Calculated data should always be:
