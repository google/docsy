---
title: Suport Team page
description: Support Operations documentation page for the Support team page
canonical_path: "/handbook/support/readiness/operations/docs/gitlab/support_team_page"
---

<sup>*Introduced via [support-team-meta#2159](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2159)*</sup>

## What is the Support Team Page

The [Support Team page](https://gitlab-com.gitlab.io/support/team/) is a page
generated from the content found within the
[Support Team repo](https://gitlab.com/gitlab-com/support/team). It contains
various useful functions and information, such as areas of focus, skill sets
within the team, who is oncall, a pairing counter, etc.

## How does the Support Team Page work

The Support Team Page is built via [Jekyll](https://jekyllrb.com/) and some
ruby scripts to generate the markdown files Jekyll uses. While a solid
understanding of Jekyll will help in understanding exactly how it all works,
this training material will go over the various folders and files to help you
understand the general layout of the repo and how it translates into the page
itself.

### _includes folder

The _includes folder within the repo is used to store partials (ie HTML files
that make up a part of a page instead of a whole page). What exactly one uses in
the `_includes` folder depends on the developer. For the Support Team Page, we
use it to contain the HTML head DOM, any Javascript blocks we might use, and the
navigation bar.

### _layouts folder

The _layouts folder is used for creating HTML template files you can utilize in
the various pages of your site. You can have as many as you want and can use
these in the site generation files as you see fit, but for the Support Team
Page, we use one single template file: default.html

### _sass folder

The _sass folder is used to store SCSS files. SCSS, or Syntactically Awesome
Style Sheet (where SAAS comes from), files are more advanced versions of CSS
(Cascading Style Sheet) files. It allows for more dynamically built CSS files
that can use things such as variables. We use a single `main.scss` file for the
Support Team Page.

### assets folder

The assets folder is used to store static content, such as CSS files, images,
Javascript files, fonts, etc. While the exact method to use this can vary based
on programmaing style, for the Support Team Page, we use subfolders within the
assets folder to store static files:

- css - Stores CSS files
- images - Stores image files
- js - Stores javascript files

### collection folders

Collection folders as used to store files relating to a collection, which is a
Jekyll way of grouping related content. Collections are defined in the
[_config.yml file](#_configyml). For the Support Team Page, we have the following collection
folders:

- _members
- _skills
- _modules
- _module-catalog
- _oncall
- _pairings

As we generate these dynamically via the CI/CD (see
[file generation](#file-generation)), the folders do not contain any
data normally.

#### collection file

A collection file is simply a file within a collection folder than contains
information/content about said collection item. The exact contents of the file
can vary from collection to collection (and developer to developer), but the
biggest usefulness of these files is the ability to make metadata variables for
the collection item.

As an example, one collection file we make is the `jcolyer.yaml` file. This is
made under the members collection, and contains a large amount of information
about Jason Colyer:

```yaml
---
name: Jason Colyer
email: jcolyer@gitlab.com
title: Support Operations Manager
reports_to: Tom Cooney
region: AMER-C
```

Using this example, we have 5 variables associated to this member:

- member.name
- member.email
- member.title
- member.reports_to
- member.region

This is quite useful, especially in working with the dynamic nature of site
generation Jekyll provides.

This example was a YAML file, but you can use other files, such as markdown. If
using markdown, the variables are set within the metadata block, which starts
and ends with three hyphens (`---`). As an example:

```yaml
---
module-name: "vagrant"
area: "Troubleshooting & Diagnostics"
gitlab-group: "Enablement:Distribution Group"
maintainers:
- [astrachan]
---
```

Using this example, we have 4 variables associated to this member:

- module_catalog.module-name
- module_catalog.area
- module_catalog.gitlab-group
- module_catalog.maintainers

### _config.yml

This is the file that Jekyll uses to determine how to setup and build the site.
The contents within can also be used as variables in the site files themselves.
The exact contents of a _config.yml file can vary from site to site, but ours
has the following:

| Item        | What it does |
|-------------|--------------|
| title       | The title for the project |
| email       | The author email |
| description | The description for the project |
| baseurl     | The subpath of your site |
| url         | The base hostname & protocol for the site |
| theme       | What theme to use |
| plugins     | Any plugins to include into the site |
| collections | Defines the collections for the site |
| saas        | Configuration options for SAAS rendering |

#### site page files

These are files that will determine what pages exist for the site by default (ie
not dynamically generated via collections, groups, etc.). These will vary from
site to site, but for the Support Team Page we have the following:

| File                 | What it is for |
|----------------------|----------------|
| ar_helper.md         | The AR Helper page, which displays AR lines for each person |
| areas-of-focus.md    | The Areas of Focus page, which displays where each person's focus is based |
| index.md             | The home page |
| oncall.md            | The Oncall page, which displays who is oncall currently and the following week |
| pairings.md          | The Pairings page, which displays the number of pairings each person has completed |
| personal.md          | The Personal Info page, which displays information about each person |
| skills-by-person.md  | The Skills by Person page, which displays each person and their skill set |
| skills-by-subject.md | The Skills by Subject page, which displays each skill set and the persons who have them |
| skills-catalog.md    | The Skills Catalog page, which displays various modules Support has |

Normally, a site page file like the ones we use will be in the format of:

```html
---
metadata block
---
page content
```

The exact contents of each file can vary from site to site, but to help get a
general feel for what they can do, we'll dig into two of them a bit deeper.

##### index.md

At the time of writing this training document, the index.md file contains the
following:

```html
---
layout: default
title: Home
---
Welcome to this site - it's a work in progress!

Click the links on the left to get an idea of what content will live here.

Generated via:

- [Support Team Project](https://gitlab.com/gitlab-com/support/team)
- [support-team.yaml](https://gitlab.com/gitlab-com/support/team/-/blob/master/data/support-team.yaml)
```

You can see how it starts with three hyphens (`---`). This is used to start the
metadata block, which Jekyll will use in the page generation. The next line then
specifies the layout for the page to use (default in this case). The following
line then specifies the page's title (Home in this case). After that, three
hyphens are used once more to specify the end of the metadata block.

After that, the actual content you want for the page is put into place. In the
case of the index.md file, it is static content.

##### skills-by-person.md

At the time of writing this training document, the skills-by-person.md file
contains the following:

```html
---
layout: default
title: Skills by Person
---
<table class='table table-striped table-hover dataTable'>
  <thead class='thead thead-dark'>
    <tr>
      <th>Name</th>
      <th>Region</th>
      <th>Modules</th>
      <th>Knowledge Areas</th>
    </tr>
  </thead>
  <tbody>
    {% for m in site.members %}
    {% if m.modules.size > 0 or m.knowledge_areas.size > 0 %}
    <tr>
      <td class='align-middle'>{{ m.name }}</td>
      <td class='align-middle'>{{ m.region }}</td>
      <td>
        <ul>
          {% for b in m.modules %}
          <li>{{ b }} Module</li>
          {% endfor %}
        </ul>
      </td>
      <td>
        <ul>
          {% for k in m.knowledge_areas %}
          <li>{{ k }}</li>
          {% endfor %}
        </ul>
      </td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
```

You can see how it starts with three hyphens (`---`). This is used to start the
metadata block, which Jekyll will use in the page generation. The next line then
specifies the layout for the page to use (default in this case). The following
line then specifies the page's title (Skills by Person in this case). After
that, three hyphens are used once more to specify the end of the metadata block.

After that, the actual content you want for the page is put into place. In the
case of the skills-by-person.md file, it is a mix of static and dynamic content.

The static content is a HTML table, using some bootstrap classes for stylistic
choices. The line right after `<tbody>` is where dynamic content comes into
play.

In Jekyll (and several other renderers, such as liquid), `{%` is used to start
a code block (with `%}` being used to end said code block).

In the case of line 15, `{% for m in site.members %}` is being used to start a
for loop. This specifically it stating to loop on `site.members`, where `site`
is the main variable for the site itself (a default from Jekyll) and `members`
is a collection we have defined (see [file generation](#file-generation) for how
that is done). For each iteration of the loop, the variable `m` will be used to
refer to the item within the iteration.

The next line (`{% if m.modules.size > 0 or m.knowledge_areas.size > 0 %}`), is
declaring an if statement that checks if the member's modules count is greater
than zero or the member's knowledge_areas count is greater than zero. If they
are, it will then render the next lines. If not, Jekyll will jump to the
corresponding `{% endif %}` block and continue rendering from there (line 35 in
this case).

In the if block:

- line 17 is simply static content starting a table row.
- line 18 creates a table cell that contains the member's name.
- line 19 creates a table cell that contains the member's region.
- line 20 is simply static content starting a table cell.
- line 21 is simply static content starting an unordered list.
- line 22 is starting a for loop on the member's modules.
- line 23 creates a list item contain the module.
- line 24 ends the for loop started on line 22.
- line 25 is simply static content ending an unordered list.
- line 26 is simply static content ending a table cell.
- line 27 is simply static content starting a table cell.
- line 28 is simply static content starting an unordered list.
- line 29 is starting a for loop on the member's knowledge areas.
- line 30 creates a list item contain the knowledge area.
- line 31 ends the loop started on line 29
- line 32 is simply static content ending an unordered list.
- line 33 is simply static content ending a table cell.
- line 34 is simply static content ending a table row.

The remaining lines in the file close out the table body and the table itself.

---

You can see how the file will be dynamically generated at the time of building
the site, but the end result is a static site file.

#### file generation

To generate the files for the collections, we utilize ruby scripts, housed
within the `bin` folder. These scripts are used with GitLab CI/CD (see
[site generation](#site-generation)). The two main file generation files are
`build_skills_catalog.rb` and `convert_for_jekyll.rb`.

##### build_skills_catalog.rb

This script grabs all issue templates from the
[support-training repo](https://gitlab.com/gitlab-com/support/support-training)
via the GitLab API and then iterates on them. During each iteration, a file is
generated in the `_module-catalog` folder to create a module-catalog collection
file. The contents of the files generated will be the raw output from the API
request.

##### convert_for_jekyll.rb

This script is responsible for obtaining much of the collection data the Support
Team Page currently uses. A solid understanding of ruby will help in
understanding what all this does, but the basic gist is that it obtains the
needed data from various sources and creates collection files from it.

##### data folder

The data folder is a folder we store data files in, used in conjunction with the
file generation scripts (and many other projects, due to the sheer usefulness of
the files themselves). There are currently three files within the data folder:

- static_data.yaml - used to store static_data, such as oncall schedule IDs,
  skill sets, etc.
- support-team.yaml - used to store information about each member of the support
  team
- template.yaml - a template for adding new support team members

#### site generation

All the above is used in the site's actual generation. This is done using Jekyll
and GitLab Pages together. Via CI/CD, we [generate the files](#file-generation),
have Jekyll build the site into a `public` folder, and then store this folder as
an artifact (but only for the master branch). GitLab Pages will then use this
`public` folder to create a website, ie the
[Support Team page](https://gitlab-com.gitlab.io/support/team/).

## Change management

Any merge requests made to the corresponding repos produce changes in real time.
As such, these are "on demand" style changes and all "scheduling" should occur
via the parent issue of the changes themselves.
