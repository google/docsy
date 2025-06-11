<h1>Platform updates</h1>

For a more technical list of platform changes, see [the change log](changelog.md).

## 2.3.0

1 March 2024

* New site configuration forms
* iframe-friendly versions of each indicator can be created
* Observation attributes can be displayed on charts, tables and maps
* 'Out of scope' can be removed from disaggregation status
* Ruby 3 upgrade enabled
* Country name translated in table header​ and header columns pinned
* Added units and series columns to data download files​
* Improvements to checkbox selection on indicator pages​
* data_start_values on maps: geographical fields now ignored​
* Graph annotation label position functionality improved​
* Improvements to screenreader and voice control functionality​
* DataSchemaInputSdmxDsd allowed as a data schema
* Bugfixes for some maps and series not appearing

## 2.2.0

26 April 2023

* Feature for tagging indicator data as "proxy"
* More granular control over disaggregations on maps
* High-resolution chart image downloads
* SEO improvements: custom meta tags on any page, and custom headings on goal pages
* Design enhancement on reporting status pages - SDG image on overall
* Bugfixes for reporting status label, data edit page, and third-party dependencies

## 2.1.0

7 November 2022

* Improvements, bugfix, and design updates to the map feature
* Improved support for long unit-of-measurement labels
* New features for metadata section: relative links, placeholders, related indicators, and publications
* Accessibility fixes: clearer button/link labels, high-contrast support for cookie modal, better focus outline
* Security updates for jQuery and Lodash libraries
* New features for goal pages: re-design of the indicator progress feature, custom header text per goal
* Support for data rounding logic per indicator

## 2.0.0

24 June 2022

* Major upgrade: remove deprecated code and settings
* Remove support for Internet Explorer
* Disaggregation on maps
* Consistent breadcrumbs across all pages
* Improve support for users without JavaScript
* Design improvements for navigation, tables, search, cards, map legend, and mobile
* Support for referencing site configuration within translations
* Add back-to-top links to goals, indicators, status pages
* Accessibility improvements to indicator tags for better color contrast

## 1.8.0

31 March 2022

* Optionally preview Open SDG 2.0.0 (next major release)
* Support for Bootstrap 5 and Chart.js 3
* Display time-series attributes in footer below charts/tables
* Dynamic display of unit of measurement in footer below charts/tables
* Dynamic chart types per unit/series
* Dynamic footer fields per unit/series

## 1.7.0

13 January 2022

* Ignore specified disaggregation columns
* Control the order of the indicator tabs (chart/table/map/etc)
* Layout for page-not-found (404) pages
* Custom footer fields beneath chart/table

## 1.6.0

9 November 2021

* Metadata report on data dashboard
* Reporting progress on goal and indicator pages
* Option to hide some reporting status types
* Configurable favicon settings
* Design improvements for categories, tags, and status
* Target lines (eg, "2030 Target") on indicator data tables

## 1.5.0

15 September 2021

* Cookie consent form
* New ways to embed Google Analytics
* Remove 2 third-party services: Google Webfonts and ShareThis
* Option to hide units-of-measurement toggle when there is only one
* Option to hide series toggle when there is only one
* Left-aligned graph titles
* Optional graph labels for the X axis
* More transparency for graph tooltips
* Setting for 2030 target lines on graphs
* Setting for series break lines on graphs
* Support for unlinked "placeholder" indicators
* Support for non-numeric goal IDs

## 1.4.0

15 July 2021

* Configurable and multilingual logos
* Accessibility improvements in the mapping feature
* Usability improvements on line charts
* Built-in forms for editing configuration, metadata, and data
* Darker font color for main navigation
* Optional single-icon high-contrast toggle
* Simplify disaggregation controls
* Improved handling of hierarchical disaggregation
* Microsoft Word metadata input
* SDMX metadata input and output
* Added control over SDMX data output
* PxWeb and JSON-Stat data inputs
* Streamlined and simplified quick-start

## 1.3.0

11 March 2021

* Multiple fixes and improvements for high-contrast mode
* Fix for searching by indicator ID
* New color scheme for charts, for optimal contrast
* Fixes and improvements to the "Sources" tab
* Remove horizontal chart grid lines, for cleaner chart display
* Style improvements for display of "tags" on goal pages
* Reset button for config forms
* Style improvements for news layout
* Control decimal places per indicator/unit/series
* Control decimal separator site-wide
* Accessibility fixes on the reporting status page
* HTML 'lang' attribute reflects current language
* Map data now uses rounding function
* Better support for SVG images
* Show units in chart tooltips
* Improvements to hierarchical sorting of disaggregation controls
* Improvements for SDMX input support
* Series support: users see only units/fields for the selected series
* Optional dropdowns in the main menu
* Consistent color-assignments for disaggregations on chart
* Optional left-aligned header
* Improvements to search styles and behavior
* Optional previous/next navigation for indicators and goals
* Standalone indicators (such as for COVID-19 statistics)

## 1.2.0

1 December 2020

This release includes the following:

* Improved keyboard navigation across the platform, such as in charts, tabs, and maps
* Improved screenreader support across the platform, such as with disaggregation controls on indicator pages
* Improved accessibility through unique page titles and more semantic HTML markup
* Design and user-experience improvements for buttons, links, breadcrumbs, and "focus" treatment
* Darker text color for better contrast
* Better support for Windows high-contrast mode
* User-experience improvements on mobile
* Simplified chart legends without clickability
* Support for annotations/labels on charts (such as adding a line for "2030 target")
* Support for translation of contents and titles of custom pages
* Ability for footer menu to use different links per language
* Vertical "hover lines" on charts
* A "no data" message for when a chart/table has no data
* New layout available for goal pages: goal_by_target_vertical
* Faster performance on large datasets
* Tab for displaying a report on indicator disaggregation

## 1.1.0

29 July 2020

This release includes the following:

* New optional alternate homepage design which includes additional sections for more introductory content and resources
* New optional alternate goal layout, organised by target and displayed in a vertical indented list
* The title and/or description on the Reporting Status page is now configurable
* Increased font size for normal text
* More control over embedded iframes on indicator pages
* Fixes for Internet Exporer problems
* Style and functionality bug-fixes for mobile, maps, and charts

## 1.0.0

8 April 2020

Although Open SDG has been in use and production-ready throughout its evolution, the release of version 1.0.0 brings a stable base of documentation and functionality to the platform. Sites upgrading to version 1.0.0 can enjoy the latest batch of features and fixes, as well as the security of consistent and future-proof configuration.

This release includes the following:

* Link to Open SDG in footer
* Configurable footer menu
* Secondary heading on indicator pages to use `indicator_available` instead of `graph_title`
* Ability to report indicator status by custom criteria (such as tier, agency, etc.)
* Improved and redesigned site-wide search, including pages, goals, and indicators
* News/post functionality - show post excerpts on news page
* Set background to white for pages and footer
* Add shadows to goal tiles on front page for more depth
* Underline menu items when hovered
* Move search box above the top navigation
* Multilingual support extended to news/posts
* Bug-fix to extend color-striping functionality to bar charts
* Title-casing for navigation menu
* More whitespace and better alignment on homepage
* Redesign of indicator page tabs
* Change the styling of the top banner on goal and indicator pages
* Bug-fix: chart download button gets latest data
* Add an introduction banner to the frontpage
* Bulk download all data from the frontpage
* Min/max y-axis values per unit of measurement
* Stacked bar charts
* Redesign of reporting status page
* Remove goal line from indicator banner
* Allow for a different chart title per unit of measurement
* Allow the use of user-defined colors in charts
* Improved support for high-contrast mode
* More intuitive behavior with the disaggregation drop-downs
* Guide: automatic site builds when the data changes
* Redesign of the disclaimer, and new disclaimer-related configuration options
* Style updates on goal pages
* Move indicator available above indicator content
* Audit and cleanup of the use of headings throughout the platform
* Move colored bar to top of page
* More whitespace around search bar/logo
* Easier method of customising the colors in the platform ("Sass variables")
* Standardize styling of links (color and decoration) across the platform

## 0.10.0

25 November 2019

This release includes the following:

* More control over language-code abbreviations in URLs
* Footer field for "Copyright"
* More control over metadata tabs
* Ability to hide empty metadata fields

## 0.9.0

12 September 2019

This release includes the following:

* Visual fix for embedded indicator tabs
* Allow min/max values for the Y axis
* Improvements in support of indicator data without headlines

## 0.8.0

23 August 2019

This release includes the following:

* Improved multilingual support on map regions and disaggregation selects
* Visual fix for IE in search bar
* Improved screen reader support
* Better page titles for goal pages
* Ability to set "data notices" per indicator
* List of sources in chart footer, rather than just one
* Allow Markdown in all metadata fields
* Improved chart image download feature
* Optional alternative high-contrast button

## 0.7.0

19 July 2019

This release includes the following:

* Accessibility improvements with search and disaggregation selects
* Optional feature for social sharing buttons on each page
* Visual fixes in high-contrast mode
* Hide the disaggregation sidebar when it is not in use
* Improved support of multi-unit indicator data without headlines
* Better handling of "0" values in indicator data

## 0.6.0

7 June 2019

This release includes the following:

* Multilingual support extended to search results and status pages
* Configurable Facebook link
* Ability to more easily track on-page events in Google Analytics
* Better support for indicators without "headline" data
* Bug-fixes with map layers and yes/no charts
* Accessibility improvements in footer menu and disaggregation selectors
* Add "not applicable" as a supported option for indicator status
* Configurable frontpage headings

## 0.5.0

4 April 2019

This release includes the following:

* Allow control over the types of reporting status (complete, not started, etc.)
* Multilingual support extended to data columns, disaggregation, and other areas
* Optional 2-column goal layout
* More control of text of metadata tabs
* Bug-fixes with maps and search
* More control over Google Analytics integration
* Table accessibility improvement

## 0.4.0

8 March 2019

This release includes the following:

* Page title bug-fix
* Accessibility improvements in the high-contrast version of the platform
* Search functionality tweak to improve integration with Google Analytics
* Mulilingual support expanded to more parts of the platform
* Goal images moved to a separate project
* Additional mechanism for translating indicator metadata

## 0.3.0

14 January 2019

This release includes the following:

* Configurable navigation menu
* Revamped mapping functionality

## 0.2.0

7 January 2019

This release includes the following:

* Automated testing
* Documentation updates
* Configurable Twitter link
* Visual fix for the disclaimer component

## 0.1.0

4 December 2018

This is the initial release, consisting of code developed in collaboration between teams in the UK and the US. This release is production-ready, but further development and documentation will be done, leading up to a 1.0.0 release.
