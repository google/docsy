Use this folder to put any local translations. These translations will override/extend any that are pulled in via the `translations` option in `config_data.yml`. They should follow the same folder structure and format of [this repository](https://github.com/open-sdg/sdg-translations).

For example, perhaps you want to change the English wording of the `header.alpha` translation. Create an `en` folder here, with a `header.yml` file inside it. The contents of that file could be:

```
alpha: Some different wording
```

Feel free to ignore this folder, and instead store your translations in a separate repository, if you prefer. In this case, you would need to add your repository URL under the `translations` option in `config_data.yml`.
