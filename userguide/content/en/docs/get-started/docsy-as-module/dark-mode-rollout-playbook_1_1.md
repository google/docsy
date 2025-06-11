---
title: "Dark Mode Rollout Playbook"
description: "A step-by-step plan for product teams to directly support the rollout and implementation of dark mode in their areas of responsibility."
---

This playbook is a step-by-step plan for product teams to directly support the rollout and implementation of dark mode in their areas of responsibility. While dark mode has been integrated into the design system, there are potential gaps and custom implementations that need to be reviewed before we can transition dark mode from Experimental (alpha) to Beta status.

Once dark mode reaches Beta, it will require formal support in line with our [feature maturity guidelines](https://docs.gitlab.com/policy/development_stages_support/). Product teams will ultimately be responsible for ensuring their areas deliver a consistent and cohesive dark mode experience aligned with the design system.

By following this playbook, teams will not only contribute to a high-quality dark mode experience today but also build the expertise needed to maintain and enhance it and other modes in the future.

## Getting started

Begin by familiarizing yourself with the following definitions and concepts. Dark mode will be the most successful when the implementation is based on a correct and consistent use of color design tokens, Pajamas design system components, and concepts like [design principles](https://design.gitlab.com/product-foundations/color#design-principles) for color use. The goal is not only to be able to spot when something is incorrect or missing, but also to know how and when to design and implement bespoke solutions in your own product area.

### Dark mode

Dark mode has become an essential user interface (UI) design feature, providing a darker background with lighter content to reduce eye strain, enhance readability, and maintain continuity with system-wide settings. Read our [blog post](https://about.gitlab.com/blog/2024/10/15/gitlab-dark-mode-is-getting-a-new-look/) that introduces our dark mode vision.

### Design tokens

[Design tokens](https://design.gitlab.com/product-foundations/design-tokens/) are a methodology to pair design decisions with options from the design system. For the dark mode rollout, the focus is on [semantic design tokens](https://design.gitlab.com/product-foundations/design-tokens/#semantic-design-tokens). Specifically, semantic color design tokens that reference constant color design tokens to express design decisions. This makes them particularly valuable because they:

- Reference constant design tokens to define global design decisions for elements like text, icons, borders, and surfaces.
- Use a naming strategy that communicates design intent and proper usage, rather than specific values, creating an abstraction layer between raw values and their implementation.
- Contain values for both light and dark mode, so they maintain consistent meaning when adapting properties across different contexts.

This semantic approach helps ensure design decisions are applied consistently in any mode while preserving their intended purpose, regardless of the specific visual values being used.

### Pajamas design system

[Pajamas](https://design.gitlab.com/) is GitLab's design system that provides standardized components (with mode-changing capabilities included), patterns, and guidelines for building consistent user interfaces across the GitLab product. It includes detailed specifications for elements like typography, color, spacing, and interactive components, enabling designers and developers to create cohesive product experiences while reducing design complexity.

### Dark mode preference in GitLab

After authenticating, turn on the dark mode experience by navigating to https://gitlab.com/-/profile/preferences. Under the **Appearance** heading choose either **Dark (Experiment)** or **Auto (Experiment)** if you’re using dark mode as your system setting.

## Getting help

The [Design System Group](/handbook/product/categories/features/#design-system) is available to help and can be reached by mention in the product, or in the [#g_pajamas-design-system](https://gitlab.slack.com/channels/g_pajamas-design-system) Slack channel.

## Evaluation

The core objective of evaluating product pages is twofold:

**Primary goal:** Ensure your most-used pages are properly configured for dark mode and can smoothly adapt to future theme changes with minimal intervention. This requires examining both the visual design choices and their technical implementation.

**Secondary goal:** Build your understanding of theming concepts, enabling you to make informed design and implementation decisions that align with our design system.

When we achieve these goals, we'll see several benefits:

- A more cohesive, consistent product experience.  
- Seamless propagation of design system updates.  
- Confidence to move dark mode beyond beta to general availability.

During your evaluation, you'll likely discover additional opportunities for improvement beyond what impacts dark mode. While some changes may not be immediately visible to users, they can enhance accessibility, improve component and design system compliance, and help us identify areas where the design system needs expansion or where guidance is needed for custom solutions.

### Tools

In addition to your day-to-day tools like Chrome, Figma, GDK, GitLab Duo, and others, the following will be especially helpful and are featured predominantly in the steps below. Note that at any point you can use tools or methods that you or your team are more familiar with, however the outcome should be the same.

- [Hot pink bookmarklet](https://gitlab.com/-/snippets/3756317#note_2240454256): A browser bookmarklet that finds all color-related CSS variables defined at the root level (except those starting with "`--gl`") and changes them to hotpink to easily visualize elements that aren't using design tokens.  
- [Highlighter Chrome extension](https://gitlab.com/gitlab-org/foundations/design-system/highlighter): A Chrome extension that highlights UI elements matching a specified CSS class, class prefix, or class suffix. When activated, it outlines matching elements in red (color can be customized) to make them easily visible on the page.  
- [Claude AI](https://claude.ai): An AI assistant that is used to help inspect code by using different prompts.  
- [Vue.js devtools browser extension](https://chromewebstore.google.com/detail/vuejs-devtools/iaajmlceplecbljialhhkmedjlpdblhp): Easily inspect Vue components and open them directly in your favorite IDE (e.g. VSCode) with a single click on a button to speed up finding the corresponding files.

### Steps

As a prerequisite, create an epic that includes a description with a list of the most-used or important pages and their alternate UI states in your area of the product (examples in the reference section below). This list will be used for all steps by all roles. Include links, instructions, and configuration requirements needed to access the pages and UI in the product or GDK. Starting with an epic will be helpful so you can track individual issues for your findings later.

There are templates for both [Figma](https://www.figma.com/design/B9mNC34Kh8PavW9TMJlVNI/Dark-mode-%3E-Evaluation-%5BDUPLICATE-ME%5D?node-id=0-1&p=f&t=x7G5uVBQYpYjw4VT-0) and [FigJam](https://www.figma.com/board/SxzD9yCWDc9AjQg8ueakFW/Dark-mode-%3E-Evaluation-%5BDUPLICATE-ME%5D?node-id=0-1&t=KCwD2TTaeNBzZKFv-1) that you can duplicate and use to annotate screenshots. If you don't have access to Figma, use the [Design Management](https://docs.gitlab.com/user/project/issues/design_management/) feature in GitLab to upload and annotate screenshots.

#### 1. Visual review

**Who:** Product designers and frontend engineers  
**Outcome:** Identify parts of the UI that visibly aren't using design tokens for color and when applicable, suggest remedies.

1. With the [hot pink bookmarklet](https://gitlab.com/-/snippets/3756317#note_2240454256) enabled in your browser, view a page from your list. You'll need to refresh any open pages for the bookmarklet to take effect, but you won't have to for future page loads.  
2. Take screenshots of the page. Be sure to expose hidden elements like dropdowns, tooltips, collapsed containers, and error states. Depending on the page, you may also need to test a variety of conditions, like empty vs. populated regions and responsive layout changes. It can be helpful to capture a screenshot both with and without the hot pink highlights to compare the actual appearance with the findings.<br><br>![UI without and with hot pink highlights](/images/product/ux/ux-resources/dark-mode-rollout-playbook/hot-pink.png)*UI without and with hot pink highlights*<br><br>
3. Annotate your screenshots in Figma, FigJam, or a GitLab issue by marking elements as related to one of the following categories (examples can be seen in the Figma and FigJam files):  
   1. **Ideas for existing Pajamas solutions that specifically relate to dark mode.** These annotations should suggest using a semantic color design token instead of hard-coded colors or constants, or they can suggest using a different design token than the one currently applied to better align semantics and intent.  
   2. **Discussions to have about bespoke dark mode or design system solutions.** This includes parts of the UI where none of the existing design tokens are a good fit and something new may be needed. It could also include discussions about replacing a custom solution with an existing Pajamas component.  
   3. **Notes for others, for example, candidate for design system team solution or a paper cut to fix.** Make a note of items you encounter that can be fixed upstream in the design system or where minor refactoring could make the dark mode implementation more seamless.<br><br>![Annotated screenshot in Figma](/images/product/ux/ux-resources/dark-mode-rollout-playbook/annotations.png)*Annotated screenshot in Figma*<br><br>
4. Under the epic, create an issue for each finding.

Common findings:

- Icons that are using text design tokens instead of ones specifically for icons.  
- Elements that are using hard-coded or color constants instead of a semantic design token.  
- Custom elements that don't fit into any of the current semantic design token categories like status, feedback, or action.  
- Elements with style overrides that impact the visual presentation.  
- Color contrast issues where the contrast is lower than 4.5:1 for text or 3:1 for graphic elements.

#### 2. Element inspection

**Who:** Product designers and frontend engineers  
**Outcome:** Identify common elements (for example, text, icons, and borders) that aren't using design tokens correctly in code and provide remedies.

1. Familiarize yourself with the different elements on the page along with how they're being used. Using developer tools, inspect elements to make sure that the visual presentation matches the purpose and intent. For example:  
   1. If an icon is present, is it being used for status, help, feedback, a static visual element, or something else? The design token used should match the [design intent](https://design.gitlab.com/product-foundations/design-tokens#semantic-design-tokens).  
   2. Is a border being used as a divider or to surround a container? Does it match [expected combinations](https://gitlab-org.gitlab.io/gitlab-ui/?path=/story/tokens-examples--borders)? (See this [merge request](https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/-/merge_requests/4232) that adds more clarity for border and background use.)  
   3. Something looks like a component, but is it? If so, is it being used correctly? If not, could it be migrated to one?  
2. With the Highlighter extension enabled, enter a class name, prefix, or suffix to highlight matching elements.<br><br>![Highlighter extension and highlighted element](/images/product/ux/ux-resources/dark-mode-rollout-playbook/highlighted.png)*Highlighter extension and highlighted element*<br><br> Keep in mind that what *isn't* highlighted can be just as important as what is and can indicate things that appear as one thing, but are really something else. It's likely that elements like this won't respond as expected to mode changes or adhere to future design changes. Because of the *cascading* part of CSS, not everything will be highlighted as expected and developer tools will still be helpful to determine computed styles. Example queries:  
   1. Enter "gl-link" to highlight all links.  
   2. Enter "gl-form-*" to ensure that all elements that appear to be a form element really are.  
   3. Enter "gl-text-*" to see if any icons happen to be using text styles.  
3. Copy and paste the page source into Claude and run prompts against it. Example prompts:  
   1. *List out all elements that use a CSS class that doesn't include ".gl-".*  
   2. *Are there any SVGs elements nested under elements with a class beginning with "gl-text-"?*  
4. Add annotations to the screenshots from the visual review for items not previously noted.  
5. Under the epic, create an issue for each new finding.

Common findings:

- Icons that are using text design tokens instead of ones specifically for icons.  
- Background and border design token pairing that doesn't match expected combinations.  
- Headings that aren't using a heading design token or non-heading text that does.  
- Elements that appear to be a component, but aren't.  
- Elements that are a component, but have overrides that cause them to not appear as expected.

#### 3. Code review

**Who:** Engineers  
**Outcome:** Identify components that need migration, things that aren't a component but should be, and things that use a component incorrectly or have unsustainable overrides.

1. Review the codebase structure and component usage for the page:  
   1. Check if components are imported from the Pajamas design system (@gitlab/ui) or if they're custom implementations.  
   2. Identify any legacy components that have Pajamas equivalents and should be migrated.  
2. Use developer tools and automated analysis to inspect component implementation:  
   1. Check for components with extensive CSS overrides that might indicate a misuse or gap in the design system.  
   2. Look for nested components that could cause theme inheritance issues.  
   3. Verify that components are receiving proper props and using the design system's theme context correctly.  
3. Use Claude or GitLab Duo to analyze the codebase with prompts like:  
   1. *Find components with more than 3 levels of CSS class overrides*.  
   2. *Find components or SVGs using direct color values (hex codes, rgb, etc.) instead of design tokens that support dark mode.*  
   3. *Find instances where components are nested inside other components in ways that could break dark mode inheritance.*  
4. Add annotations to the screenshots from the visual review for items not previously noted.  
5. Under the epic, create an issue for each new finding.

Common findings:

- Legacy components with direct Pajamas equivalents that haven't been migrated.  
- Components with extensive overrides that should be reconsidered.  
- Nested components causing unexpected theme inheritance.  
- Components using hard-coded color values instead of design tokens.

### Additional findings

As mentioned before, while going through this process, you're likely to uncover other opportunities to improve accessibility, design system compliance, and identify gaps where the design system needs to expand or provide more guidance. These findings can also be captured with the rest of the annotations. The [UX Paper Cuts Group](/handbook/product/categories/features/#ux-paper-cuts) is a great resource to help resolve these items too. Here are some additional things to look for along with related AI prompts:

- Find headings that are out of order or missing: *List headings in order and include their level.*  
- Identify inaccessible form elements: *List form elements that have missing or problematic labels.*  
- Find instances to use Pajamas components: *List custom components that implement similar functionality to existing Pajamas components.*  
- Look for opportunities to abstract patterns: *Identify repeated style patterns that could be abstracted into a shared component.*

## Addressing findings

If you've familiarized yourself with the the [getting started](#getting-started) content and references, prioritized your pages, and have completed creating issues for each finding, you're well on your way to addressing those findings.

- Use existing Pajamas solutions when they're available. Refer to our [Design token documentation in Pajamas](https://design.gitlab.com/product-foundations/design-tokens) for guidance on choosing the right tokens.
- Engage in discussions when you have custom parts of the UI that existing solutions don't apply to or when you're not sure how or if you can migrate to an existing design system solution.
- Help with upstream fixes in the design system or simple paper cut fixes that unblock dark mode from taking effect in your product area.

If at any point you get stuck or need a second opinion or review, reach out to the Design System or UX Paper Cuts groups.

## Reference

- [Dark mode > Rollout by stage group](https://gitlab.com/groups/gitlab-org/-/epics/15660#note_2208363151)  
- Example evaluations: [Knowledge](https://gitlab.com/groups/gitlab-org/-/epics/15768), [Source Code](https://gitlab.com/groups/gitlab-org/-/epics/15915), [Pipeline Execution](https://gitlab.com/groups/gitlab-org/-/epics/15914), [Import & Integrate](https://gitlab.com/groups/gitlab-org/-/epics/16184)
