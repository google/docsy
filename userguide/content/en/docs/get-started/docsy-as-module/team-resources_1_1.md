---

title: Pipeline Authoring Group Resources
description: "The goal of this page is to document resources and recommendations for development patterns in the pipeline authoring group."
---







## Overview

The goal of this page is to document resources and recommendations for development patterns in the pipeline authoring group.

### Frontend Architectural Planning

We use a lightweight architecture planning process for new features and significant refactors.

For more details see [the architecture section](/handbook/engineering/development/ops/verify/pipeline-authoring/frontend-architecture/).

### CI `camelCase` Capitalization

When using camelCase we usually abbreviate "continuous integration" as `Ci` and not `CI`, this makes our file naming consistent,
for example:

- `MyCiComponent` -> `my_ci_component.vue`
- `myCiFileMutation` -> `my_ci_file.mutation.graphql`

This matches the `Ci` in GraphQL types (e.g., CiJob, CiStatus) and other components.

### Frontend Testing

We follow the [Frontend development testing standards and style guidelines](https://docs.gitlab.com/ee/development/testing_guide/frontend_testing.html)
plus some recommendations to write tests.

#### Test fully rendered components

We use [Vue Test Utils](https://vue-test-utils.vuejs.org/) to test our Vue components implementation, and we prefer
to test our components rendering their entire DOM structure, this allows us to:

- Ensure our tests actually test the result our users see
- Test integration with components from other libraries (like `gitlab-ui`)
- Use our tests to confirm implementation changes behave as expected instead of needing to update tests when the implementation changes
- Test as far as possible real events, so they are sensitive to event changes but not implementation changes
  - See this example of our GitLab UI [Combobox Spec](https://gitlab.com/gitlab-org/gitlab-ui/-/blob/master/src/components/base/form/form_combobox/form_combobox.spec.js)

To support this while reaping the value of `shallowMount` where we can, we recommend the following approach:

1. Write tests using [`shallowMount`](https://vue-test-utils.vuejs.org/api/#shallowmount) while adhering to the "test rendered elements" guideline.
2. When `shallowMount` no longer renders the items that are to be tested, use [`mount`](https://vue-test-utils.vuejs.org/api/#mount)
3. When tests start to show performance issues (such as regularly failing the default timeout), consider restructuring the tests to use partially rendered components or to test actions lower down on the mounting stack
    - As `shallowMount` this will stub most internal components by default, we will want to explicitly list some internal
    components as [`stubs`](https://vue-test-utils.vuejs.org/api/options.html#stubs), so the test will run with the real
    implementation of those components by adding them to the `stubs` option.

When switching from `shallowMount` to `mount`, we recommend making the method an argument to the `createComponent` function with `shallowMount` as the default to be sure `mount` is only being used when needed.

```js
const createComponent = (options, mountMethod = shallowMount) => {
  wrapper = mountMethod(Component, {
    ...options
  })
}
```

**This is a simple example of the approach:**

```js
// my_form_container_spec.js

import { GlButton, GlForm } from '@gitlab/ui'
import { shallowMount } from '@vue/test-utils';
import MyFormContainer  from '~/pipeline_authoring/my_form_container.vue';

const createComponent = () => {
  wrapper = shallowMount(MyFormContainer, {
    // ...
    stubs: {
      GlForm,
      GlButton, // the button will be fully rendered
    },
  });
};

// ...

const findCommitBtn = () => wrapper.find('[type="submit"]');
const findCommitBtnLoadingIcon = () => findCommitBtn().find(GlLoadingIcon);

// ...

it('shows saving state', () => {
  expect(findCommitBtnLoadingIcon().exists()).toBe(true);
});
```
