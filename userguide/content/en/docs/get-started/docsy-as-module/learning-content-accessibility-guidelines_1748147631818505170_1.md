---
title: "Learning Content Accessibility Guidelines"
---

## Overview

GitLab is committed to compliance with all applicable laws and regulations, including, the Americans with Disabilities Act of 1990. We believe that our [Diversity, Inclusion, and Belonging](/handbook/company/culture/inclusion/#what-we-are-doing-with-diversity-inclusion--belonging) value provides the foundation for our commitment to create an environment that [enables everyone to contribute to and co-create the software that powers our world](/handbook/company/mission/#:~:text=GitLab%20has%20a%20contributor%20code,members%20strive%20to%20conduct%20themselves). To support these beliefs and commitments, GitLab encourages team members to make learning and development experiences as accessible as possible to the entire GitLab community. In order to facilitate this, GitLab aims to conform to level AA of the World Wide Web Consortium (“W3C”) [Web Content Accessibility Guidelines (“WCAG”) 2.2](https://www.w3.org/TR/WCAG22/), which is the most widely accepted set of recommendations for making web content more accessible.

GitLab’s Ethics and Compliance Program and the Accessibility Working Group have collaborated to  create the following guidelines to help GitLab team members create accessible web learning experiences (whether internal or external) training platforms used by GitLab, in keeping with the WCAG recommendations. To do this, the guidelines outline the different types of content you are likely to use or design, the potential challenges that each can create for your user, and what you can do to prevent or mitigate those challenges.

These guidelines are meant to be a starting point but throughout the guidelines links are provided to additional resources so that you can explore the WCAG recommendations in more detail and achieve a deeper understanding of what compliance may entail. Any questions about these guidelines or the compliance that it promotes may be directed to The Ethics and Compliance team via the #ethics_compliance Slack channel. Separately, please refer to the [GitLab Content Style Guide](https://docs.gitlab.com/ee/development/documentation/styleguide/) for guidance on brand voice, tone, grammar, and punctuation. Any questions about the Content Style Guide may be directed to the Marketing team via the #brand Slack channel.

## An accessible experience

What does it mean to provide a more accessible learning experience? Simply put, this means that no user’s access to content and functionality is limited in any consequential way. This may involve making content available in multiple forms and may involve considering the different ways that users consume and interact with course content.

## Platform

Before we discuss content, let’s talk about learning and development platforms. A learning and development platform is the delivery method for course materials and contains the functionality to navigate, read, watch, and interact with the content. A platform that isn’t accessible or lacks certain features is going to create a barrier to some users and may prevent them from fully engaging with the course or absorbing the information that it is meant to convey.

GitLab’s primary learning management system, [LevelUp](https://levelup.gitlab.com/learn/dashboard) (referred to as “GitLab University” externally), is from [Thought Industries](https://www.thoughtindustries.com). Before you consider using a different learning and development platform, do some research to understand whether that platform provides an accessible learning experience. Many companies will also provide an accessibility statement of compliance that outlines their intentions and ways to remedy issues. Some even go further by providing a [Voluntary Product Accessibility Template (VPAT®)](https://www.section508.gov/sell/vpat/) that explains how the related technology satisfies accessibility requirements.

## Plain language

Communicating, in written or verbal form, in plain language, can be an important element of an accessible experience. Consistent use of plain language benefits every form of media and all users.

From [plainlanguage.gov](https://www.plainlanguage.gov/about/definitions/):

> Plain language (also called plain writing or plain English) is communication your audience can understand the first time they read or hear it.

### Considerations

People absorb information differently, so we must recognize that language that is plain to one set of readers may not be plain to others. We can, however, consider the following themes and attributes that are common to plain language:

- The language is familiar to all users and written at an appropriate comprehension level;
- Explanations or definitions are provided for technical terms, unusual words, or abbreviations;
- Content is edited to address grammar and spelling errors;
- Headings follow a logical order (using heading levels 1–6) to create a scannable and structured outline for sighted and screen reader users;
- Headings clearly communicate what users can expect in the section that proceeds; and
- Calls to action are clear and unambiguous. For example, “Discover more about pipelines“ instead of “Read more“.

Written material is in plain language if your audience can:

- Find what they need;
- Understand what they find; and
- Use what they find to meet their needs.

### Guidelines

While much of the success criteria from WCAG 2.2 applies to content in some form, the following are most related to the concept of plain language and the presentation of text:

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/TR/WCAG22/#info-and-relationships): Information, [structure](https://www.w3.org/TR/WCAG22/#dfn-structure), and [relationships](https://www.w3.org/TR/WCAG22/#dfn-relationships) conveyed through [presentation](https://www.w3.org/TR/WCAG22/#dfn-presentation) can be [programmatically determined](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable) or are available in text.
- [1.3.2 Meaningful Sequence (Level A)](https://www.w3.org/TR/WCAG22/#meaningful-sequence): When the sequence in which content is presented affects its meaning, a [correct reading sequence](https://www.w3.org/TR/WCAG22/#dfn-correct-reading-sequence) can be programmatically determined.
- [1.3.3 Sensory Characteristics (Level A)](https://www.w3.org/TR/WCAG22/#sensory-characteristics): Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, color, size, visual location, orientation, or sound.
- [1.3.5 Identify Input Purpose (Level AA)](https://www.w3.org/TR/WCAG22/#identify-input-purpose): The purpose of each input field collecting information about the user can be programmatically determined under the appropriate circumstances.
- [1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/TR/WCAG22/#contrast-minimum): The visual presentation of [text](https://www.w3.org/TR/WCAG22/#dfn-text) and [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text) has a [contrast ratio](https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio) of at least 4.5:1., unless an exception described in the criterion applies.
- [1.4.4 Resize Text (Level AA)](https://www.w3.org/TR/WCAG22/#resize-text): Except for [captions](https://www.w3.org/TR/WCAG22/#dfn-captions) and [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text), [text](https://www.w3.org/TR/WCAG22/#dfn-text) can be resized without [assistive technology](https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies) up to 200 percent without loss of content or functionality.
- [1.4.10 Reflow (Level AA)](https://www.w3.org/TR/WCAG22/#reflow): Content can be presented without loss of information or functionality, and without requiring scrolling, within the dimensions/pixelation described in the criterion. [1.4.12 Text Spacing (Level AA)](https://www.w3.org/TR/WCAG22/#text-spacing): No loss of content or functionality occurs by setting the appropriate text style properties.
- [2.4.4 Link Purpose (In Context) (Level A)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context): The [purpose of each link](https://www.w3.org/TR/WCAG22/#dfn-purpose-of-each-link) can be determined from the link text alone or from the link text together with its programmatically determined link context, except where the purpose of the link would be [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general).
- [2.4.6 Headings and Labels (Level AA)](https://www.w3.org/TR/WCAG22/#headings-and-labels): Headings and [labels](https://www.w3.org/TR/WCAG22/#dfn-labels) describe their topic or purpose.
- [3.1.1 Language of Page (Level A)](https://www.w3.org/TR/WCAG22/#language-of-page): The default [human language](https://www.w3.org/TR/WCAG22/#dfn-human-language-s) of each [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) can be programmatically determined.
- [3.1.2 Language of Parts (Level AA)](https://www.w3.org/TR/WCAG22/#language-of-parts): The [human language](https://www.w3.org/TR/WCAG22/#dfn-human-language-s) of each passage or phrase in the content can be programmatically determined.

## Images

A text alternative for images is important for conveying non-text content to a user who may not be able to see or understand the image for any variety of reasons. There are three types of images; simple, complex, and decorative.

### Simple Images

A simple image is one that can be described in a few words or a short sentence. Examples might include a product screenshot or a photograph of people having a conversation. Simple images are most commonly described with “alt text,” which gets its name from the alt image attribute in code. Alt text looks like this: <img alt=“text alternative”>. The “text alternative” describes the image in a text-based format that screen readers can read out loud, which helps the user understand what the image is meant to convey. Writing the text alternative can be challenging and sometimes subjective. Compare the following examples to understand how to make alt text more descriptive:

- Poorly-written alt text: `<img src="/images/legal/ethics-compliance-program/team.jpg" alt="image">`
- Well-written alt text: `<img src="/images/legal/ethics-compliance-program/team.jpg" alt="Four team members discussing a project around a conference table.">`

In both examples, the alt text alerts the user to the use of an image but the first does not describe the image, while the second describes what the image is meant to convey (“four team members discussing a project … “). Here is another example:

- Poorly-written alt text: `<img src=”dog.jpg” alt=”dog”>`
- Well-written alt text: `<img src=”dog.jpg” alt=”My golden retriever dog, Scully, posing for a photo in the living room”>`

Both examples mention a “dog” but the poorly-written alt text does not describe the dog in any way, while the well-written alt text describes the dog in enough detail to provide the user helpful context. Read this [Alternate Text](https://webaim.org/techniques/alttext/) guide from WebAIM to learn more about how to craft meaningful alt text.

### Complex images

A complex image is a visual that is more informational in nature and requires more than just a simple explanation. Examples might include a flow chart or data visualization. Similar to a simple image, a complex image requires alt text, which serves as a brief description, but also a long description that explains, in more detail and using more text (aka “long text”), the essential information contained in the image. If the complex image consists of data, consider using a text table of the data rather than long-form text. [Learn more about the W3C's long description methods here](https://www.w3.org/WAI/tutorials/images/complex/).

Data visualization, which is the graphical representation of information and data, should use colors with sufficient contrast and labels within the chart, so that the user does not have to rely solely on color to understand what is being conveyed. Look at the [data visualization color palette](https://design.gitlab.com/data-visualization/color/) documented in the Pajamas Design System for GitLab or read [An Accessibility-First Approach To Chart Visual Design](https://www.smashingmagazine.com/2022/07/accessibility-first-approach-chart-visual-design/), by Kent Eisenhuth and Kai Chang, to understand other ways to consider data visualization while creating accessible learning experiences.

### Decorative images

A decorative image has no meaningful content value and doesn’t need to be announced by a screen reader. Examples might include background patterns or an icon that is used as a visual anchor. Use an empty `alt` attribute for decorative images so that they are not unnecessarily announced.

### Considerations

- All images should have an `alt` attribute, even if the alt attribute is empty (alt=””).
- Use longer text and/or tables to describe complex images.
- Leverage high-contrast colors, labels, and other data visualization techniques, when visualizing data.
- Try to avoid text within an image, but if present, make sure it’s also available in plain text, which is text consisting of characters without special formatting.
- Avoid using animated GIFs since a user can’t control the playback.

### Guidelines

The following success criteria from WCAG 2.2 apply to images:

- [1.1.1 Non-text Content (Level A)](https://www.w3.org/TR/WCAG22/#non-text-content): All [non-text content](https://www.w3.org/TR/WCAG22/#dfn-non-text-content) that is presented to the user has a [text alternative](https://www.w3.org/TR/WCAG22/#dfn-text-alternative) that serves the equivalent purpose, unless otherwise noted in the criterion.
- [1.4.5 Images of Text (Level AA)](https://www.w3.org/TR/WCAG22/#images-of-text)): If the technologies being used can achieve the visual presentation, [text](https://www.w3.org/TR/WCAG22/#dfn-text) is used to convey information rather than [images of text](https://www.w3.org/TR/WCAG22/#dfn-images-of-text), unless otherwise noted in this criterion.

## Video and audio

Video and audio recordings should have an alternate way to obtain the content. This allows a user who is hard of hearing or deaf to read the content using captions or text transcript while a user who is visually impaired may use a screen reader or other assistive technology.

### Captions

Captions are the text version of spoken audio and sounds and should be provided for all videos, when possible. Closed captions can be turned on and off by the user, where open captions are always present. There is no size requirement for captions (sometimes they will scale with the player), but they must be readable and have sufficient contrast. A caption benefits someone who can see the video, but either by impairment or choice can’t use the audio. If using automated captioning, review them to ensure they accurately reflect the spoken content; especially for technical terms like ‘DevSecOps’ or Kubernetes.’

### Audio descriptions

Audio descriptions provide information about visual elements in a video. For example, describing the scene, actions and gestures, or expressions. They are announced between dialogue. [Watch an example](https://www.youtube.com/watch?v=O7j4_aP8dWA). An audio description benefits someone who can listen to the video audio, but either by impairment or choice can’t use the video.

### Transcripts

A text transcript should be provided for audio-only media and prerecorded video. The transcript can be included on the same page, linked to, or available as an accessible document. A transcript benefits a variety of users, from those who prefer to read, to those who obtain the text content through a screen reader or other assistive technology.

### Text and data visualization

Since both text and data visualization (charts) are essentially embedded in a video with no way for a user to control their appearance, ensuring they are clear and discernable at the outset is key. Discernable means text or data visualization that can be seen, perceived, and understood by users.

Text should have sufficient contrast against the background. If it’s meaningful content, the text content should also be included in the audio track.

Charts in videos should utilize patterns and textures ( such as lines, dots, or crosshatching) instead of relying solely on color. Here, as an example, is a chart that uses patterns and textures:

![Data-Visualization-Example](/images/legal/ethics-compliance-program/data-visualization-example.png)

This helps viewers distinguish different segments or lines in a chart, even if they cannot differentiate the colors. During the video, consider highlighting or enlarging specific areas of the chart when discussing them to focus attention and help all viewers, particularly those who might struggle with smaller, detailed graphics. Provide a verbal description of the key elements of the chart as they appear in the video. This description should accompany the visual display, explaining what is being shown, including any patterns or textures used.

### Considerations

- A text alternative should always be provided for audio and video media.
- Do not autoplay video or audio content. Doing so can be confusing if a screen reader is also making announcements.
- Captions and transcripts should accurately reflect the original content.
- Use tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure sufficient contrasting colors for text and graphics in video.
- When using charts, use patterns and labels along with colors to convey information.
- Avoid flashing content, which is content that flashes or blinks rapidly.

### Guidelines

The following success criteria from WCAG 2.2 apply to images:

- [1.1.1 Non-text Content (Level A)](https://www.w3.org/TR/WCAG22/#non-text-content): All [non-text content](https://www.w3.org/TR/WCAG22/#dfn-non-text-content) that is presented to the user has a [text alternative](https://www.w3.org/TR/WCAG22/#dfn-text-alternative) that serves the equivalent purpose, unless otherwise noted in the criterion.
- [1.2.1 Audio-only and Video-only (Prerecorded) (Level A)](https://www.w3.org/TR/WCAG22/#non-text-content): All [non-text content](https://www.w3.org/TR/WCAG22/#dfn-non-text-content)): For [prerecorded audio-only](https://www.w3.org/TR/WCAG22/#dfn-audio-only) and prerecorded [video-only](https://www.w3.org/TR/WCAG22/#dfn-video-only) media, an [alternative for time-based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media) is provided that presents equivalent information for prerecorded audio-only content and/or an alternative for time-based media or an audio track is provided that presents equivalent information for prerecorded video-only content.
- [1.2.2 Captions (Prerecorded) (Level A)](https://www.w3.org/TR/WCAG22/#captions-prerecorded): [Captions](https://www.w3.org/TR/WCAG22/#dfn-captions) are provided for all [prerecorded audio](https://www.w3.org/TR/WCAG22/#dfn-prerecorded) content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text) and is clearly labeled as such.
- [1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)](https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded): An [alternative for time-based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media) or [audio description](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions) of the [prerecorded video](https://www.w3.org/TR/WCAG22/#dfn-video) content is provided for [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media), except when the media is a [media alternative for text](https://www.w3.org/TR/WCAG22/#dfn-media-alternative-for-text) and is clearly labeled as such.
- [1.2.5 Audio Description (Prerecorded) (Level AA)](https://www.w3.org/TR/WCAG22/#audio-description-prerecorded): [Audio description](https://www.w3.org/TR/WCAG22/#dfn-audio-descriptions) is provided for all [prerecorded video](https://www.w3.org/TR/WCAG22/#dfn-prerecorded) content in [synchronized media](https://www.w3.org/TR/WCAG22/#dfn-synchronized-media).
- [1.4.2 Audio Control (Level A)](https://www.w3.org/TR/WCAG22/#audio-control): If any audio on a Web page plays automatically for more than 3 seconds, either a [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) is available to pause or stop the audio, or a mechanism is available to control audio volume independently from the overall system volume level.
- [2.2.2 Pause, Stop, Hide (Level A)](https://www.w3.org/TR/WCAG22/#pause-stop-hide): There is a mechanism for the user to pause, hide, or stop blinking, scrolling, or continuously updating activity, under the right circumstances.
- [2.3.1 Three Flashes or Below Threshold (Level A)](https://www.w3.org/TR/WCAG22/#three-flashes-or-below-threshold): [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) do not contain anything that flashes more than three times in any one second period, or the [flash](https://www.w3.org/TR/WCAG22/#dfn-flashes) is below the [general flash and red flash thresholds](https://www.w3.org/TR/WCAG22/#dfn-general-flash-and-red-flash-thresholds).

## Interactive content

If content is interactive (separately from the learning management system controls), ensure that all actions and content can be accomplished using a keyboard alone. Examples might include elements that flip to reveal information or that open embedded windows with more content. Many assistive technologies emulate keyboard behavior, so ensuring that all interactions can be done with a keyboard is critical for a wide variety of users who take advantage of a wide variety of input methods.

### Considerations

- All content and interaction should be able to be done with only a keyboard.
- There should be no keyboard traps that a user can’t get out of, which happens when a keyboard user can’t move focus away from an interactive element.
- Focus order (the order that a keyboard traverses interactive elements) should match visible reading order.
- When an element has focus, there must be a visible focus indicator, which is a visual marker that shows which interactive element on a web page is currently focused and ready for user input.
- Elements that can receive focus can’t be obscured by other elements.

### Guidelines

- [1.4.13 Content on Hover or Focus (Level AA)](https://www.w3.org/TR/WCAG22/#content-on-hover-or-focus): Where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the additional content remains visible until the additional content is dismissed or the pointer is moved.
- [2.2.1 Keyboard (Level A)](https://www.w3.org/TR/WCAG22/#keyboard): All [functionality](https://www.w3.org/TR/WCAG22/#dfn-functionality) of the content is operable through a [keyboard interface](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface) without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.
- [2.1.2 No Keyboard Trap (Level A)](https://www.w3.org/TR/WCAG22/#no-keyboard-trap): If keyboard focus can be moved to a component of the page using a [keyboard interface](https://www.w3.org/TR/WCAG22/#dfn-keyboard-interface), then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away.
- [2.4.7 Focus Visible (Level AA)](https://www.w3.org/TR/WCAG22/#focus-visible): Any keyboard operable user interface has a mode of operation where the keyboard focus indicator is visible.
- [2.4.11 Focus Not Obscured (Minimum) (Level AA)](https://www.w3.org/TR/WCAG22/#focus-visible): When a [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components) receives keyboard focus, the component is not entirely hidden due to author-created content.

## Summary

Web accessibility is becoming increasingly important as more and more business, learning, and communication takes place online. Accessibility is especially important for GitLab and its [mission](/handbook/company/mission/#:~:text=GitLab%20has%20a%20contributor%20code,members%20strive%20to%20conduct%20themselves.), as universal access to information (especially learning content) helps ensure that everyone can contribute. When we start by considering accessibility, we are also more likely to deliver a more inclusive and engaging experience for all users.

By doing a bit of learning ourselves, we hope that GitLab and its team members will be better prepared to consider the various ways that people consume the information we provide, and whether or not we’re creating the best experience possible. In addition to these guidelines, which should be used by team members to create more accessible learning experiences, we also encourage team members to explore the links provided throughout this document in order to better understand and comply with the underlying WCAG guidelines.
