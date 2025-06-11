---
title: "Sublime Text"
---

Website: <https://www.sublimetext.com/>

Best for: entry level developers, editing markdown.

Strengths:

- simple interface
- cross-platform
- many extensions, including one for integration with GitLab (`GitlabIntegrate`).
- powerful visual git-client integrated (`sublime-merge`)

A powerful text editor, sublime text is an excellent choice for editing plain text documents, but scales
up to full code-editing. Installing extensions is simple.

### Configuration

Putting the following in Preferences.sublime-settings - User will among other things ensure that if you open the www-gitlab-com website you're not opening the output files by accident:

```css
{
  "font_size": 18,
  "spell_check": true,
  "translate_tabs_to_spaces": true,
  "trim_trailing_white_space_on_save": true,
  "folder_exclude_patterns": ["public"]
}
```
