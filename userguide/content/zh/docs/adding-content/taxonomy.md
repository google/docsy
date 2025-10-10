---
title: 分类法支持
weight: 10
tags: [标签, 结构化内容, 标注]
categories: [分类法]
topics: ["文档"]
description: >
    使用分类法（例如标签、类别、标注）构建内容。
cSpell:ignore: taxo
---

Docsy 在其文档和博客部分支持 Hugo [分类法]（Taxonomy）。
您可以查看默认布局，并在此页面上测试生成的链接的行为。

## 术语表

要理解分类法的用法，您应该了解以下术语：

- **分类法**：一种用于对内容进行分类的方式——例如：标签、类别、项目、人员

- **术语**：分类法中的一个关键词——例如：项目 A、项目 B

- **数值**：分配给术语的一部分内容——例如：您网站中属于特定项目的一个页面

Hugo 文档提供了一个 [电影网站示例][] 分类法。

[电影网站示例]:
  https://gohugo.io/content-management/taxonomies/#example-taxonomy-movie-website

## 参数

项目 [配置文件][] 中有各种参数可用于控制分类法的功能。
Hugo 中的`tags` （标签）和`categories`（类别）的分类功能是[默认启用][]。
要**禁用**分类功能，请在您的项目配置中添加以下内容：

<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
disableKinds = ["taxonomy"]
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
disableKinds: [taxonomy]
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "disableKinds": [ "taxonomy" ]
}
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->

然后Hugo 将生成`tags`和 `categories`的分类法页面。
如果您想使用其他分类法，则必须在[配置文件] 中定义它们。
如果您除了自己的分类法外，还想使用默认分类法 `tags` 和 `categories`，
则也必须在自己的分类法旁边定义它们。
您需要为每个分类法提供复数和单数标签。

以下示例在默认分类法`tags`和 `categories`之后定义了一个额外的分类法`projects`（项目）：

<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[taxonomies]
tag = "tags"
category = "categories"
project = "projects"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
taxonomies:
  tag: tags
  category: categories
  project: projects
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "taxonomies": {
    "tag": "tags",
    "category": "categories",
    "project": "projects"
  }
}
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->

您可以在项目配置中使用以下参数来控制每篇文章分配的分类术语的输出。
Docsy 中的文档页面和（或）博客部分，或 Docsy 右侧边栏中的“标签云”：

<!-- prettier-ignore-start -->
{{< tabpane >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[params.taxonomy]
taxonomyCloud = ["projects", "tags"] # 设置 taxonomyCloud = [] 可以隐藏分类云
taxonomyCloudTitle = ["Our Projects", "Tag Cloud"] # 如果使用，必须与 taxonomyCloud 长度相同
taxonomyPageHeader = ["tags", "categories"] # 设置 taxonomyPageHeader = [] 可以隐藏页面标题上的分类
[params.taxonomy.taxonomyCloudTitleMap] # 和 taxonomyCloudTitle 效果一样，字典格式，优先级更高
projects = "Our Projects"
tags = "Tag Cloud"
[params.taxonomy.taxonomyAliasMap] # 对i18n中没有的分类本地化
projects = "Projects"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  taxonomy:
    taxonomyCloud:
      - projects    # 移除所有条目
      - tags        # 隐藏分类云
    taxonomyCloudTitle:   # 如果使用，必须与 taxonomyCloud 的条目数相同
      - Our Projects      # 条目数
      - Tag Cloud
    taxonomyCloudTitleMap: # 和 taxonomyCloudTitle 效果一样，字典格式，优先级更高
      projects: Our Projects
      tags: Tag Cloud
    taxonomyPageHeader:
      - tags        # 移除所有条目
      - categories  # 隐藏分类云
    taxonomyAliasMap:
      projects: Projects # 对i18n中没有的分类本地化
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "params": {
    "taxonomy": {
      "taxonomyCloud": [
        "projects",
        "tags"
      ],
      "taxonomyCloudTitle": [
        "Our Projects",
        "Tag Cloud"
      ],
      "taxonomyCloudTitleMap": {
        "projects": "Our Projects",
        "tags": "Tag Cloud"
      },
      "taxonomyPageHeader": [
        "tags",
        "categories"
      ],
      "taxonomyAliasMap": {
        "projects": "Projects"
      }
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}
<!-- prettier-ignore-end -->

设置上述设置只会在 Docsy 的右侧边栏中显示`projects`和`tags`的分类云
（标题分别为“我们的项目”和“标签云”），
以及每个页面的`tags`和`categories`的指定术语。

要禁用任何分类云，您必须设置参数`taxonomyCloud = []`；
如果您不想显示指定的术语，则必须设置`taxonomyPageHeader = []`。

默认情况下，分类的复数标签用作分类云标题。您可以用`taxonomyCloudTitle`覆盖默认分类云标题。
但是，如果您这样做，您必须为每个启用的分类云定义一个手动标题，
（`taxonomyCloud` 和 `taxonomyCloudTitle` 的长度必须相同！）。

如果您不设置参数`taxonomyCloud` 和 `taxonomyPageHeader`
将生成分类云和所有已定义分类法的已分配术语。

## 部分模板

默认用于显示分类法的部分定义清晰，
以便您能够在自己的布局中轻松使用它们。

### taxonomy_terms_article

部分 `taxonomy_terms_article` 显示给定分类法（部分参数 `taxo`）的所有已分配术语，
文章和页面（部分参数 `context`，通常为当前页面或上下文 `.`）。

在 `layouts/docs/list.html` 中，每个页面的标题示例如下：

```go-html-template
{{ $context := . }}
{{ range $taxo, $taxo_map := .Site.Taxonomies }}
  {{ partial "taxonomy_terms_article.html" (dict "context" $context "taxo" $taxo ) }}
{{ end }}
```

这将为当前页面（分别对应上下文）中每个已定义的分类法提供所有已分配术语的列表：

```html
<div class="taxonomy taxonomy-terms-article taxo-categories">
  <h5 class="taxonomy-title">Categories:</h5>
  <ul class="taxonomy-terms">
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/categories/taxonomies/"
        data-taxonomy-term="taxonomies"
        ><span class="taxonomy-label">Taxonomies</span></a
      >
    </li>
  </ul>
</div>
<div class="taxonomy taxonomy-terms-article taxo-tags">
  <h5 class="taxonomy-title">Tags:</h5>
  <ul class="taxonomy-terms">
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/tags/tagging/"
        data-taxonomy-term="tagging"
        ><span class="taxonomy-label">Tagging</span></a
      >
    </li>
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/tags/structuring-content/"
        data-taxonomy-term="structuring-content"
        ><span class="taxonomy-label">Structuring Content</span></a
      >
    </li>
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/tags/labelling/"
        data-taxonomy-term="labelling"
        ><span class="taxonomy-label">Labelling</span></a
      >
    </li>
  </ul>
</div>
```

### taxonomy_terms_article_wrapper

部分 `taxonomy_terms_article_wrapper` 是部分 `taxonomy_terms_article` 的包装器，
它只带有一个参数 `context`（大多数情况下是当前页面或上下文 `.`），
并检查项目的 `hugo.toml`/`hugo.yaml`/`hugo.json` 中的分类法参数，
以循环遍历参数 `taxonomyPageHeader` 中列出的所有分类法，
以及页面中所有已定义的分类法（如果 `taxonomyPageHeader` 未设置）。

### taxonomy_terms_cloud

部分 `taxonomy_terms_cloud` 会显示您网站
（部分参数 `context`，通常为当前页面或上下文 `.`）
中指定分类法（部分参数 `taxo`）的所有已用术语，
并以参数 `title` 作为标题。

部分 `taxonomy_terms_clouds` 中显示所有已定义分类法及其术语的示例用法：

```go-html-template
{{ $context := . }}
{{ range $taxo, $taxo_map := .Site.Taxonomies }}
  {{ partial "taxonomy_terms_cloud.html" (dict "context" $context "taxo" $taxo "title" ( humanize $taxo ) ) }}
{{ end }}
```

这将为您提供分类法`categories`的以下 HTML 标记：

```html
<div class="taxonomy taxonomy-terms-cloud taxo-categories">
  <h5 class="taxonomy-title">Cloud of Categories</h5>
  <ul class="taxonomy-terms">
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/categories/category-1/"
        data-taxonomy-term="category-1"
        ><span class="taxonomy-label">category 1</span
        ><span class="taxonomy-count">3</span></a
      >
    </li>
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/categories/category-2/"
        data-taxonomy-term="category-2"
        ><span class="taxonomy-label">category 2</span
        ><span class="taxonomy-count">1</span></a
      >
    </li>
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/categories/category-3/"
        data-taxonomy-term="category-3"
        ><span class="taxonomy-label">category 3</span
        ><span class="taxonomy-count">2</span></a
      >
    </li>
    <li>
      <a
        class="taxonomy-term"
        href="//localhost:1313/categories/category-4/"
        data-taxonomy-term="category-4"
        ><span class="taxonomy-label">category 4</span
        ><span class="taxonomy-count">6</span></a
      >
    </li>
  </ul>
</div>
```

### taxonomy_terms_clouds

部分模板 `taxonomy_terms_clouds` 是部分模板 `taxonomy_terms_cloud` 的包装器，
它只包含一个参数 `context`（大多数情况下是当前页面或上下文 `.`），
并会检查项目配置中的分类法参数，以循环遍历参数 `taxonomyCloud` 中列出的所有分类法，
以及页面中所有已定义的分类法（如果 `taxonomyCloud` 未设置）。

## 分类法支持多语言

对于[多语言网站][]，分类术语仅在该语言网站内进行统计和链接。
分类配置参数可根据语言进行调整。

[配置文件]:
  https://gohugo.io/getting-started/configuration/#configuration-file
[默认启用]:
  https://gohugo.io/content-management/taxonomies/#default-destinations
[多语言网站]: https://gohugo.io/configuration/params/#multilingual-sites
[分类法]: https://gohugo.io/content-management/taxonomies/
