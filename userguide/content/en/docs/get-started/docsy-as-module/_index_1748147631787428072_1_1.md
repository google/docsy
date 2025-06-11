---
title: "Tableau Style Guide"
description: "Tableau Style Guide"
---

---

## Overall Look and Feel

Tableau's robust visualization capability allows for more options and flexibility around customizing the look-and-feel for our dashboards. In order to create consistent front-end designs that are true to GitLab's branding, we recommend following the tips and tricks, along with resources, provided below:

**[GitLab Branding Resource](https://design.gitlab.com/brand/overview/)**

The in-depth branding guidelines at GitLab provides instructions on leveraging company-specific images and colors for upholding our brand image in our work. For information on how to use logo images, please refer to the following links:

- [Core logo](https://design.gitlab.com/brand-logo/core-logo/)
- [Logomark](https://design.gitlab.com/brand-logo/logomark/)
- [Branded lockups](https://design.gitlab.com/brand-logo/branded-lockups/)

The company branding resource site also provides excellent guidance around [data visualization](https://design.gitlab.com/data-visualization/overview/). For example, the color palettes are useful in creating accurate coloring to charts via hex codes:

- [Color](https://design.gitlab.com/data-visualization/color/)
- [Charts](https://design.gitlab.com/data-visualization/charts/)

Please also refer to our Tableau Design folder (TBD) for files that can be used in adding branding elements to your Tableau dashboards. For [example](https://drive.google.com/file/d/1N-6fCA8WTOmNLv3D2hr_zA4fhl4zBS8p/view?usp=sharing), our logo can be added to the upper left-hand corner of our dashboard, above the filter section that is using our GitLab color scheme.

**Tableau Help**

To create custom color palettes in Tableau, you can update the Preferences.tps file with the code (below under our Standard Color Palette section) to reflect your intended color scheme.

Please refer to the below sites for more instructions from Tableau around customizing texts and colors in workbooks:

- [Creating Custom Palettes](https://help.tableau.com/current/pro/desktop/en-us/formatting_create_custom_colors.htm)
- [Format Text](https://help.tableau.com/current/pro/desktop/en-us/formatting_fonts_beta.htm)
- [Use Custom Fonts](https://help.tableau.com/current/pro/desktop/en-us/formatting_create_custom_fonts.htm)

### Choosing the Right Chart

#### Pie charts

Try to avoid using pie charts and use bar charts instead. The human eye is not well suited to easily grasp the difference in the sizes of the slices of the pie chart, a problem amplified with every added slice over two. If you must use pie charts, reserve them only for use cases where only two dimensional values need to be represented (although even there bar charts may be preferable).

For an in-depth explanation of the limitations of pie charts, please read Stephen Few's excellent [article](https://www.perceptualedge.com/articles/visual_business_intelligence/save_the_pies_for_dessert.pdf).

## Colors, Labels, and Data Values

### Standard Color Palette

![GitLab Branded Tableau Color Palette](/images/handbook/enterprise-data/platform/tableau/gitlab_tableau_color_palette.png)

GitLab's brand approved colors can be found [here](https://design.gitlab.com/data-visualization/color/). Custom color palettes can be created in Tableau Desktop by with the following steps:

1. In the your laptop Documents folder go to `My Tableau Repository` and locate the **Preferences.tps** file.
2. Open the file with a preferred text editor such as TextEdit or Visual Studio Code.
3. Enter the desired colors for your palette into the Preferences file as follows:

    <details>
    <summary>Example palettes: **Preferences.tps** file</summary>

    ```xml
    <?xml version='1.0'?>
    <workbook>
    <preferences>

    <color-palette name="GitLab Brand Design" type="regular" >
    <color>#FFFFFF</color>
    <color>#171321</color>
    <color>#FCA326</color>
    <color>#FC6D26</color>
    <color>#E24329</color>
    <color>#A989F5</color>
    <color>#7759C2</color>
    <color>#CEB3EF</color>
    <color>#5943B6</color>
    <color>#2F2A6B</color>
    <color>#232150</color>
    <color>#FDF1DD</color>
    <color>#FFB9C9</color>
    <color>#C5F4EC</color>
    <color>#6FDAC9</color>
    <color>#10B1B1</color>
    <color>#D1D0D3</color>
    <color>#A2A1A6</color>
    <color>#74717A</color>
    <color>#45424D</color>
    <color>#2B2838</color>
    </color-palette>

    <color-palette name="GitLab Palette 1" type="regular">
    <color>#2078D0</color>
    <color>#2D9ED8</color>
    <color>#FCA326</color>
    <color>#FFCC02</color>
    <color>#1DA855</color>
    <color>#A989F5</color>
    <color>#6B4FBB</color>
    <color>#FC6D26</color>
    <color>#B7D5F4</color>
    <color>#E24329</color>
    <color>#7759C2</color>
    <color>#6FDAC9</color>
    <color>#ff9d73</color>
    <color>#AEA5D6</color>
    <color>#5829CB</color>
    <color>#54448A</color>
    <color>#F9980D</color>
    <color>#FF675F</color>
    <color>#CEB3EF</color>
    <color>#E38701</color>
    <color>#FB722D</color>
    <color>#4CEACC</color>
    <color>#FFD1BF</color>
    <color>#FFB9C9</color>
    <color>#D0C5E2</color>
    <color>#D1D0D3</color>
    <color>#BFBFBF</color>
    <color>#A2A1A6</color>
    <color>#74717A</color>
    <color>#45424D</color>
    </color-palette>

    <color-palette name="GitLab Palette 1 Darker" type="regular">
    <color>#075FB6</color>
    <color>#1485BF</color>
    <color>#E4890C</color>
    <color>#E6B200</color>
    <color>#048F3C</color>
    <color>#9070DC</color>
    <color>#5236A1</color>
    <color>#E3540E</color>
    <color>#E6B8A6</color>
    <color>#C82911</color>
    <color>#5F40A9</color>
    <color>#55C2B0</color>
    <color>#E68359</color>
    <color>#958CBD</color>
    <color>#E6A0B0</color>
    <color>#3A2B71</color>
    <color>#E07F00</color>
    <color>#E64D46</color>
    <color>#B59BD6</color>
    <color>#CB6F00</color>
    <color>#E25914</color>
    <color>#33D1B2</color>
    <color>#9EBCDB</color>
    <color>#3F0FB2</color>
    <color>#B7ACC9</color>
    <color>#B8B7BA</color>
    <color>#A6A6A6</color>
    <color>#89888C</color>
    <color>#5A5862</color>
    <color>#2B2934</color>
    </color-palette>

    <color-palette name="GitLab Oranges Purples Greys" type="regular">
    <color>#e24329</color>
    <color>#FCA326</color>
    <color>#fc6d26</color>
    <color>#7759c2</color>
    <color>#b693f0</color>
    <color>#54448A</color>
    <color>#B3B1B6</color>
    <color>#171321</color>
    <color>#45404B</color>
    </color-palette>

    <color-palette name="Transparent" type="regular">
    <color>#FFFFFF00</color>
    </color-palette>

    </preferences>
    </workbook>
    ```

    </details>

4. Save **Preferences.tps** file and close
5. Restart Tableau and the palette should now be available at the bottom of the list

For more information see [Tableau's Color Palette](https://help.tableau.com/current/pro/desktop/en-us/formatting_create_custom_colors.htm).

### Rounding

To round or not to round? Know your audience. Present numbers suitable for your target audience and analysis use cases.

- Executive-level charts do not normally require multiple digits of precision and rounding to the nearest ten, hundred, or thousand is sufficient.
- Depending on the chart, 1 or 2 significant digits on percentages may be required for totals to equal 100%.
- In general except for currency, numbers should be displayed in their full form.

### Currency

- All currency is presented in USD.
- At $10,000 and above, each `000` is replaced with a k; example $10k instead of $10,000.
- At $1,000,000 and above, each `000,000` is replaced with a m; example $10m instead of $10,000,000.

For any numeric values of a 1000 million or more, be mindful of international differences in the [definition of billion](https://pages.ucsd.edu/~dkjordan/cgi-bin/moreabout.pl?tyimuh=bignum).

### Data and Time

Fiscal Dates should be extracted from the DIM_DATE dimension table.

Date formats must adhere to the [GitLab Writing Style Guidelines](/handbook/communication/#writing-style-guidelines):

- Dates are yyyy-mm-dd
- Time is presented as a 24 hour clock using UTC
- Fiscal Quarter is Qn, example Q1
- Fiscal Year is FYyy, example FY21. 2021 would denote the calendar year.
- Fiscal Year and Quarter is FYyy-Qn, example FY21-Q2

### Recorded and Calculated Data

Data is prepared for presentation, or reporting, for a specific target audience and use case. **Recorded Data** is the basis for all **Calculated Data**.

```mermaid
graph LR;
 A[(Recorded Data)] --> B(Target Audience & Use Case);
 B --> |Estimation Factor| C[Estimated];
 B --> |Most-likely Scenarios| D[Forecasted];
 B --> |What-if Scenarios| E[Predicted];
```

- **Recorded Data** - "Factual" data which originates from a verifiable source and observable events. To aid in verification, recorded data commonly includes audit metadata such as the name of data creator/source, the date and time of data capture, and the location where the event occurred.
- **Estimated Data** - calculated data based on Recorded data plus an Estimation Factor. The Estimation Factor is typically based on historical data trends over a meaningful and relevant period of time. [Estimation](https://en.wikipedia.org/wiki/Estimation) is widely used across all industries and domains.
- **Forecasted Data** - calculated data based on historical Recorded data plus assessments based on "most-likely" future scenarios. [Forecasting](https://en.wikipedia.org/wiki/Forecasting) is commonly used in Financial Planning.
- **Predicted Data** - calculated data based on historical Recorded data plus assessments based on "what-if" future scenarios.

#### Presentation

Recorded data does not require special labeling, but Calculated data does. Calculated data should *always* be:

- clearly labeled, such as in the chart title and legend (E.g. use "Estimated Seats" instead of "Seats")
- clearly identified in the chart elements (E.g. use different line styles when mixing Calculation types on the same chart)
