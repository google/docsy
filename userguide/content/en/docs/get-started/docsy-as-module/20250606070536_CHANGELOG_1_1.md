# Changelog for TGM Plugin Activation library

## 2.6.1 (2016-05-19)

* Fix a string replacement issue in the plugin action links. Thanks [Nilambar Sharma] for reporting. [#587], [#588]

## 2.6.0 (2016-05-14)

Since mid-February we offer a _"Custom TGMPA Generator"_. From now on, that is the preferred way for downloading your copy of TGMPA for use in a theme or plugin.
If you download TGMPA using the _Custom TGMPA Generator_ and indicate that it is for a theme which will be published on wordpress.org, you will receive a copy which will pass the Theme Check review.

You can find the _Custom TGMPA Generator_ on the [download] page of the website. For more information, read the [related blog post].

* **Bug fixes**:
  - Fixed minor/low-impact security vulnerability. Thanks [Mohamed A. Baset] for reporting. If *you* find a security vulnerability, please disclose responsibly! [#487], [#505]
  - Fixed a bug where action links on the WP native plugins page would not be properly filtered. [#458], [#459]
  - Fixed a bug where TGMPA when included within a plugin would be recognized as the plugin instead of the *real* plugin. Thanks [weavertheme] and [Mika Epstein] for reporting. [#499], [#500], [#558]
  - Fixed an install error when trying to bulk-install an already installed plugin. Thanks [Ahmad Awais] for reporting. [#496], [#504]
  - Fixed an update error when trying to bulk-update a plugin which is not installed. Thanks [Gary Jones] for reporting. [#442], [#508]
  - Fixed admin notices display class. Props [Ninos Ego] and [Primoz Cigler]. [#478], [#495], [#509]
  - Fixed an issue resulting in notices about installed/updated plugins on the bulk install/update pages being displayed at the top of the page instead of inline. [#510], [#511]

* **Enhancements**:
  - The full admin notice is now only displayed to users who can install/update/activate plugins. A limited _"Contact the site admin."_ notice is shown to select users if it pertains to _required_ plugins. The selection of which users get to see this last message is based on the `publish_posts` (=Author) capability. This capability is however filterable using the new `tgmpa_show_admin_notice_capability` filter. Thanks [Stanislav Khromov], [Gary Jones], [Mickey Kay], [Ollie Treend] for suggesting. [#190], [#414], [#489], [#507]
  - The example file now shows examples of different ways for including TGMPA based on the context in which you are using it. Props [Emil Uzelac] for the suggestion. [#469], [#503]
  - Force deactivated plugins will now show in the 'recently active' plugins list. [#577]

* **I18N improvements**:
  - Improved some text strings and translator messages. Props [Rami]. [#516]
  - Added translator messages for all strings with variable replacement.[#563]
  - Added `load_textdomain()` calls. [#521]
  - Added translations for Brazilian Portuguese, Croatian, Czech, Dutch, French, German, Russian and Swedish [#450], [#574], [#570], [#465], [#524], [#528], [#543], [#561] with grateful thanks to [Elvis Henrique Pereira], [Denis Žoljom], [Karolína Vyskočilová], [geoclaps], [Hedi Chaibi], [Marciel Bartzik], [Vladislav Burlak] and [Lewis Porter].
    Additionally translations for Australian English, Canadian English, British English, Esperanto, Spanish, Hebrew, Italian, Romanian and Serbian were added based on existing translations available in GlotPress. [#564]

    Altogether, this means that for the first version of TGMPA which ships with translation files, we're covering 17 locales, which is awesome!
    More translations are of course welcome, so please send the .po file(s) in as a pull request.

    _Please note: If you download TGMPA using the custom generator and indicate it's for a theme to be hosted on wordpress.org, you will receive a version without the `load_textdomain()` calls or the translation files.
    Theme check rules dictate that you should only use one textdomain in your theme and the localization calls will be adjusted to use your theme's textdomain.
	As most TGMPA strings have a lot of translations available in GlotPress already, this should not cause any real issues._

* **Housekeeping**:
  - Various other minor improvements and keeping things in line with WP core. [#512], [#513], [#514], [#532] - thanks [Utkarsh Patel], [#562], [#571]
  - Updated the included example plugin to comply to the latest standards. [#557]
  - Regenerated .pot file.


## 2.5.2 (2015-07-15)
* Hot Fix: fixes potential `Fatal error: Call to protected TGM_Plugin_Activation::__construct()` error and other compatibility issues when both TGMPA 2.5+ as well as TGMPA 2.3.6- would be loaded by different themes and plugins. [#449]

Take note: We do **NOT** support 2.3.6 anymore and **_highly_** discourage its use. Any themes and plugins still using TGMPA 2.3.6 or less should upgrade as soon as possible. All the same, the end-user should not be confronted with white screens because of it, so this hot fix should prevent just that.

## 2.5.1 (2015-07-13)

* Hot Fix: fixes potential `Fatal error: Call to undefined method TGM_Utils::validate_bool()` errors caused by a conflict with the Soliloquy plugin. [#446]

## 2.5.0 (2015-07-03)

This is a major update which brings some interesting new features and fixes tons of bugs. This version of TGMPA is brought to you by [Thomas Griffin] with graceful thanks to [Gary Jones] and our new core-team member [Juliette Reinders Folmer] for the majority of the changes.

With this release the TGMPA library has moved to its own organisation on GitHub. From now on you can find it at [TGMPA/TGM-Plugin-Activation].

The website has also been given some love. You can now find detailed information about the configuration options, FAQs and more at: http://tgmpluginactivation.com/

TGMPA will start providing localized text strings soon. If you already have translations of our standard strings available, please help us make TGMPA even better by giving us access to these translations or by sending in a pull-request with .po file(s) with the translations. A [.pot file] to get you started is now available in the GitHub repository.

* Enhancement: **Full support for update work-flow**.
	- Updating of the registered plugins can now be done from the TGMPA screen, both on individual plugins as well as in bulk - this will take into account WP repo updates as well as updates for plugins which are bundled or come from external sources where a minimum version is set which is higher than the current version.
	- Users will be notified of available updates via the admin notice.
	- The TGMPA admin page now has four views: _all_, _to install_, _update available_ and _to activate_.
	- The TGMPA admin page now has - on selected views - an extra column showing relevant plugin version information.
	- The TGMPA admin page _status_ column will show both install/activate as well as update status (cumulative).
    - If a plugin requires a certain minimum version of a plugin and the currently installed version does not comply, activation will be blocked until the user has upgraded the plugin. If the plugin is already active, it will not be deactivated however.
		* If the required plugin version itself requires a higher WP version than the currently installed WP, upgrade to that version of the plugin will be blocked - this is of course provided TGMPA has access to that information -.
	- The plugin action links on the WP native plugins page will reflect this too - including disabling deactivation if _force_activation_ is `true` for a plugin.

	[#381], [#192], [#197] Props [Zauan/Hogash Studio], [Christian], [Franklin Gitonga], [Jason Xie], [swiderski] for their preliminary work on this which inspired this full-fledged implementation.

* Enhancement: **Better support for GitHub hosted plugins**.

  Previously using standard GitHub packaged zips as download source would not work as, even though the plugin would be installed, it would not be recognized as such by TGMPA because of the non-standard directory name which would be created for the plugin, i.e. `my-plugin-master` instead of `my-plugin`. A work-around for this has been implemented and you can now use GitHub-packaged `master` branch or release zips to install plugins. Have a look at the `example.php` file for a working example.

  One caveat: this presumes that the plugin is based in the root of the GitHub repo and not in a `/src` or other subdirectory.

  [#327], [#280], [#283] Thanks [Dan Fisher] and [Luis Martins] for reporting/requesting this enhancement.

* Enhancement: **New optional plugin parameter `is_callable`**.

  Some plugins may have a free and a premium version using different slugs. Using the `is_callable` plugin parameter allows for the premium version to be recognized, even though the slug is set to the free version slug. Have a look at the `example.php` file for a working example.

  For more information on what is considered a `callable`, please refer to the [Codex on callbacks].

  [#205] Props [Zack Katz].

* **Admin Page improvements**:
  - Plugins downloaded from an arbitrary external source are now labelled _"External Source"_. Previously they were labelled _"Private Repository"_ which could be confusing as the download URL did not have to point to a repository, let alone be private. [#372]
  - Leverage the CSS styling of the Core standard `WP_List_Table` [#227]. Props [Shiva Poudel].
  - Allow for moving the Admin Page to a different place in the menu. This is mainly to accommodate plugins using TGMPA as it is terribly illogical for the TGMPA page to be under the _"Appearance"_ menu in that case. This has been now been implemented in a way that Theme Check will not choke on it. [#310]

* **Admin notices improvements**:
  - For installs with both plugin(s) as well as theme(s) using TGMPA, notices will now be dismissable for each separately. This prevents a situation where a theme would have TGMPA included, the user has dismissed the notice about it, a plugin with TGMPA gets installed and the notice about it requiring certain other plugins is never shown. [#174] Thanks [Chris Howard] for reporting.
  - Fixed: The reset of dismissed notices on `switch_theme` was only applied for the current user, not for all users. [#246]
  - Fixed: Admin notices would show twice under certain circumstances. [#249], [#237] Thanks [manake] for reporting.

* **Bulk Installer**:
  - Fixed: If a bulk install was initiated using the bottom _"Bulk Actions"_ dropdown, the install page would display an outdated TGMPA plugin table at the bottom of the page after the bulk installation was finished. [#319]

* **Theme Check compatibility**:
  - Prevent _"The theme appears to use include or require"_ warning. [#262], [#258] Thanks [Tim Nicholson] for reporting.
  - Preempt the disallowing of the use of the `add_theme_page()` function. See [the theme review meeting notes](https://make.wordpress.org/themes/2015/04/21/this-weeks-meeting-important-information-regarding-theme-options/) for further information on this decision. [#315]

* **Miscellaneous fixes**:
  - Leaner loading: TGMPA actions will now only be hooked in and run on the back-end (`is_admin() returns true`).  [#357] Also most TGMPA actions will now only be hooked in if there's actually something to do for TGMPA. [#381]
  - Fixed: _"Undefined index: skin_update_failed_error"_ [#260], [#240] Thanks [Parhum Khoshbakht] and [Sandeep] for reporting.
  - Fixed: Installation of bundled plugins with uppercase letters in the plugin slug would fail. [#401], [#403] Thanks [steveboj] for reporting.
  - Made admin URLs environment aware by using `self_admin_url()` instead of `admin_url()` or `network_admin_url()`. [#255], [#171]
  - Fixed: the Adminbar would be loaded twice causing conflicts (with other plugins). [#208] Props [John Blackbourn].
  - All TGMPA generated pages will now show the version number on the page to assist in debugging. [#399], [#402]

* **I18N improvements**:
  - Make configurable message texts singular/plural context aware. [#173] Props [Yakir Sitbon].
  - Language strings which are being overridden should use the including plugin/theme language domain. [#217] Props [Christian Foellmann].
  - Language strings are loaded a bit later now to ensure that the translations are loaded beforehand. [#176], [#177] Props [Yakir Sitbon].

* **New action and filter hooks for TGMPA**:
  - `tgmpa_load` - _filter_ can be used to overrule whether TGMPA should load. Defaults to loading only when on the WP back-end when not `DOING_AJAX`. Typical use: `add_filter( 'tgmpa_load', '__return_true' );`.
  - `tgmpa_admin_menu_args` - _filter_ can be used to filter the arguments passed to the function call adding the TGMPA (sub) menu page.
  - `tgmpa_notice_rendered_action_links` - _filter_ can be used to filter the complete html output for the admin notice action links. This is in addition to the `tgmpa_notice_action_links` filter which already existed and allows for filtering of the individual action links.
  - `tgmpa_table_data_item` - _filter_ can be used to modify plugin data for a single plugin which is ready for the TGMPA table output.
  - `tgmpa_table_data_items` - _filter_ can be used to modify plugin data for all plugins which is ready for the TGMPA table output. Example use: changing the sort order of the plugins.
  - `tgmpa_table_columns` - _filter_ can be used to add/remove table columns from the TGMPA table view.
  - `tgmpa_{$prefix}plugin_action_links` - _filter_ mirrors the WP core [{$prefix}plugin_action_links] filter but for the TGMPA page.
  - `tgmpa_update_bulk_plugins_complete_actions` - _filter_ mirrors the WP core [update_bulk_plugins_complete_actions] filter but for TGMPA bulk actions.
  - `tgmpa_after_plugin_row_{$item['slug']}` - _action_ similar (but not the same) as the WP core [after_plugin_row_{$plugin_file}] action. Can be used to add information to a plugin row in the TGMPA table.

  [#188], [#226], [#300], [#357], [#362], [#381], [#388], [#389], [#390] Props [Zack Katz] and the TGMPA team.

* **Housekeeping**:
  - Applied a number of best practices and code simplifications.
     * [#284], [#281] - props [Ninos Ego],
     * [#286] - props [krishna19],
     * [#178], [#180], [#182], [#183] - thanks [Gregory Karpinsky] for reporting,
     * [#324], [#325], [#331], [#346], [#356], [#357], [#358], [#359], [#360], [#361], [#362], [#363], [#368], [#371], [#373], [#374], [#375], [#376], [#381], [#385], [#387], [#395], [#397], [#425], [#426], [#427], [#435]
  - Allow for extending of the TGMPA class and fixed issues with PHP 5.2 [#303] which were originally caused by this.
  - Tighten the file permissions on our files. [#322]
  - Cleaned up some of the documentation. [#179], [#384] Props [Gregory Karpinsky] and the TGMPA team.
  - Comply with the [WordPress Coding Standards](https://make.wordpress.org/core/handbook/coding-standards/)
  - Added Travis CI integration for coding standards and php-linting. [#304], [#329]
  - Added Scrutinizer CI integration for code quality. [#330]
  - Added editor config. [#339] Props [Shiva Poudel].
  - Improved integration with Packagist.
  - Added [Contributing guidelines](CONTRIBUTING.md).
  - While the library has always been licensed under GPL 2.0+, we now include the [License](LICENSE.md).


## 2.4.2 (2015-04-27)
* Fixed: Bundled/pre-packaged plugins would no longer install when using the Bulk installer. This was a regression introduced in v2.4.1. [#321], [#316] Props [Juliette Reinders Folmer]. Thanks [tanshcreative] for reporting.
* Fixed: Bulk installer did not honour a potentially set `default_path` for local prep-packaged plugins. [#203], [#332] Props [Juliette Reinders Folmer]. Thanks [pavot] and [djcowan] for reporting.
* Removed call to `screen_icon()` function which was deprecated in WP 3.8. [#244], [#224], [#234]. Props [Nate Wright]. Thanks [hamdan-mahran] and [Sandeep] for reporting.
* Fixed: _"PHP Fatal error: Class 'TGM_Bulk_Installer' not found"_ [#185] Thanks [Chris Talkington] for reporting.

## 2.4.1 (2015-04-22)

* Improve escaping for URLs and attributes.

## 2.4.0 (2014-03-17)

* All textdomain strings now made to `tgmpa` and remove all notices dealing with textdomain and translation issues.
* The `_get_plugin_basename_from_slug()` method now checks for exact slug matches to prevent issues with plugins that start with the same slug.
* Commenting style now adjusted so it is easier to comment large chunks of code if necessary.
* Plugins from an external source now properly say _"Private Repository"_ in the list table output.
* `add_submenu_page()` has been changed to `add_theme_page()` for better theme check compatibility.
* Removed the use for `parent_menu_slug` and `parent_menu_url` for `$config` options (see above).
* Nag messages can now be forced on via a new `dismissable` config property. When set to `false`, nag cannot be dismissed.
* New config `dismiss_msg` used in conjunction with `dismissable`. If `dismissable` is false, then if `dismiss_msg` is not empty, it will be output at the top of the nag message.
* Better contextual message for activating plugins - changed _"Activate installed plugin(s)"_ to _"Begin activating plugin(s)"_.
* Added cache flushing on theme switch to prevent stale entries from remaining in the list table if coming back to a theme with TGMPA.
* TGMPA is now a singleton to prevent extra settings overrides.
* Fixed bug with duplicating plugins if multiple themes/plugins that used TGMPA were active at the same time.
* Added contextual message updates depending on WordPress version.
* Better nag message handling. If the nag has been dismissed, don't even attempt to build message (performance enhancement).
* Ensure class can only be instantiated once (instantiation moved inside the `class_exists()` check for TGMPA).
* Change instances of `admin_url()` to `network_admin_url()` to add better support for MultiSite (falls back gracefully for non-MultiSite installs).
* Updated much of the code to match WP Coding Standards (braces, yoda conditionals, etc.).
* Myriads of other bug fixes and enhancements

## 2.3.6 (2012-04-23)

* Fixed API error when clicking on the plugin install row action link for an externally hosted plugin

## 2.3.5 (2012-04-16)

* Fixed nag message not working when `nag_type` string was not set (props [Jeff Sebring])

## 2.3.4 (2012-03-30)

* Fixed _"undefined index"_ notice when checking for required plugins (props [Jeff Sebring])
* Fixed bug where, during a bulk install, if the plugin was defined in the source as pre-packaged but also existed in the repo, it would erroneously pull the plugin from the repo instead (props [Travis Smith])
* Added ability to set nag type for the admin notice via `nag_type` string (props [Travis Smith])

## 2.3.3 (2012-02-03)

* Changed license to reflect GPL v2 or later (to be compatible with the WordPress repo)

## 2.3.2 (2012-02-03)

* Fixed bug (100%) with not loading class properly

## 2.3.1 (2012-02-03)

* Fixed bug with not finding class (reverted back to `Plugin_Upgrader`)

## 2.3.0 (2012-01-25)

* Improved sorting of plugins by sorting them by required/recommended (while still maintaining alphabetical order within each group)
* Improved output of strings in nag messages
* Added 2 new strings: `install_link` and `activate_link` to customize the text for the nag action links
* Added new class: `TGM_Plugin_Installer` to prepare for must-use plugin support

## 2.2.2 (2012-01-08)

* Fixed bug that allowed users to click on the Install Plugins page when all the plugin installations and activations were already complete

## 2.2.1 (2012-01-05)

* Fixed bug that caused WordPress core upgrades to fail (WordPress doesn't check for including `WP_Upgrader` on core upgrades)

## 2.2.0 (2012-01-02)

* Fixed erroneous links for plugins linked to the WordPress Repo
* Improved UI of plugins by listing them in WordPress' default table layout
* Improved support for installing plugins if security credentials require FTP information
* Improved support for MultiSite
* Added 3 new classes (all extensions of existing WordPress classes): `TGMPA_List_Table` for outputting required/recommended plugins in a familiar table format, `TGM_Bulk_Installer` for bulk installing plugins and `TGM_Bulk_Installer_Skin` for skinning the bulk install process
* Added extra defensive measures to prevent duplication of classes
* Added ability to bulk install and bulk activate plugins
* Added new config options: `parent_menu_slug`, `parent_menu_url`, `is_automatic`, and `message`
* Added new string: `complete` (displayed when all plugins have been successfully installed and activated)
* Added support for singular/plural strings throughout the library
* Added permission checks to action links
* Added new filter `tgmpa_default_screen_icon` to set the default icon for the plugin table page
* Added new optional plugin parameters: `version`, `force_activation`, `force_deactivation` and `external_url`
* Removed `button` string (deprecated with use of plugins table)

## 2.1.1 (2011-10-19)

* Fixed nag not re-appearing if user switched themes and then re-activated the previous theme (UX improvement)

## 2.1.0 (2011-10-18)

* Fixed duplicate nag message on admin options pages
* Fixed FTP nonce error when FTP credentials aren't defined in `wp-config.php`
* Improved handling of failed FTP connections with `WP_Filesystem`
* Improved string labeling for semantics
* Improved nag messages so that they are now consolidated into one message
* Improved plugin sorting by listing them alphabetically
* Improved plugin messages after installation and activation
* Added automatic activation of plugins after installation (users no longer need to click the _"Activate this plugin"_ link)
* Added links to repo plugins for their plugin details and information (done via thickbox)
* Added option to dismiss nag message
* Added `tgmpa_notice_action_links` filter hook to filter nag message action links
* Added new methods: `admin_init()`, `thickbox()`, `dismiss()`, `populate_file_path()`, `_get_plugin_data_from_name()` and `is_tgmpa_page()`

## 2.0.0 (2011-10-03)

* Improved nag messages by adding a strings argument to filter default messages
* Improved nag message output by using the Settings API
* Improved internals by adding API for developers to use (code in class no longer has to be touched)
* Improved API function name (now tgmpa) for semantics
* Improved `example.php` with instructions for setup
* Added internal style sheet for styling
* Added ability to define custom text domain for localization
* Added new properties `$default_path` and `$strings`
* Added new methods `register()`, `config()`, `_get_plugin_basename_from_slug()` and `actions()`
* Removed unnecessary `is_wp_error()` check

## 1.1.0 (2011-10-01)

* Improved property `$args` to accept arrays of arguments for each plugin needed
* Improved `add_submenu_page()` to `add_theme_page()`
* Improved admin notices to display different messages based on status of plugin (not installed, installed but not activated)
* Improved block-level documentation
* Improved handling of plugin installation and activation with `plugins_api`, `Plugin_Upgrader` and `Plugin_Skin_Installer`
* Added support for multiple plugins of each instance (pre-packaged and repo)
* Added new property `$domain` to hold textdomain for internationalization
* Added CSS for slight UI enhancements
* Added extra conditional checks `current_user_can( 'install_plugins' )` and `current_user_can( 'activate_plugins' )` for security
* Removed menu display if all included plugins were successfully installed and activated
* Removed unnecessary conditional check before class is defined

## 1.0.0 (2011-09-29)

* Initial release into the wild



[download]: http://tgmpluginactivation.com/download/
[related blog post]: http://tgmpluginactivation.com/2016/01/15/custom-tgmpa-generator/
[TGMPA/TGM-Plugin-Activation]: https://github.com/TGMPA/TGM-Plugin-Activation
[.pot file]: https://github.com/TGMPA/TGM-Plugin-Activation/blob/develop/languages/


[Ahmad Awais]: https://github.com/ahmadawais
[Chris Howard]: https://github.com/qwertydude
[Chris Talkington]: https://github.com/ctalkington
[Christian Foellmann]: https://github.com/cfoellmann
[Dan Fisher]: https://github.com/danfisher85
[Denis Žoljom]: https://github.com/dingo-d
[djcowan]: https://github.com/djcowan
[Elvis Henrique Pereira]: https://github.com/elvishp2006
[Emil Uzelac]: https://github.com/emiluzelac
[Franklin Gitonga]: https://github.com/FrankM1
[Gary Jones]: https://github.com/GaryJones
[geoclaps]: https://github.com/geoclaps
[Gregory Karpinsky]: https://github.com/tivnet
[hamdan-mahran]: https://github.com/hamdan-mahran
[Hedi Chaibi]: https://github.com/hedii
[Jason Xie]: https://github.com/duckzland
[Jeff Sebring]: https://github.com/jeffsebring
[John Blackbourn]: https://github.com/johnbillion
[Juliette Reinders Folmer]: https://github.com/jrfnl
[Karolína Vyskočilová]: https://github.com/vyskoczilova
[krishna19]: https://github.com/krishna19
[Lewis Porter]: https://github.com/lewisporter
[Luis Martins]: https://github.com/lmartins
[manake]: https://github.com/manake
[Mickey Kay]: https://github.com/MickeyKay
[Mika Epstein]: https://github.com/Ipstenu
[Mohamed A. Baset]: https://github.com/SymbianSyMoh
[Nate Wright]: https://github.com/NateWr
[Nilambar Sharma]: https://github.com/ernilambar
[Ninos Ego]: https://github.com/Ninos
[Ollie Treend]: https://github.com/ollietreend
[Parhum Khoshbakht]: https://github.com/parhumm
[pavot]: https://github.com/pavot
[Primoz Cigler]: https://github.com/primozcigler
[Rami]: https://github.com/ramiy
[Sandeep]: https://github.com/InsertCart
[Shiva Poudel]: https://github.com/shivapoudel
[Stanislav Khromov]: https://github.com/khromov
[steveboj]: https://github.com/steveboj
[swiderski]: https://github.com/swiderski
[tanshcreative]: https://github.com/tanshcreative
[Tim Nicholson]: https://github.com/timnicholson
[Travis Smith]: https://github.com/wpsmith
[Thomas Griffin]: https://github.com/thomasgriffin
[Utkarsh Patel]: https://github.com/PatelUtkarsh
[Vladislav Burlak]: https://github.com/vburlak
[weavertheme]: https://github.com/weavertheme
[Yakir Sitbon]: https://github.com/KingYes
[Zack Katz]: https://github.com/zackkatz

[Christian]: http://themeforest.net/user/artless
[Marciel Bartzik]: http://www.bartzik.net/
[Zauan/Hogash Studio]: http://pastebin.com/u/Zauan

[#588]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/588
[#587]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/587
[#577]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/577
[#574]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/574
[#571]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/571
[#570]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/570
[#564]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/564
[#563]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/563
[#562]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/562
[#561]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/561
[#558]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/558
[#557]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/557
[#543]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/543
[#532]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/532
[#528]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/528
[#524]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/524
[#521]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/521
[#516]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/516
[#514]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/514
[#513]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/513
[#512]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/512
[#511]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/511
[#510]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/510
[#509]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/509
[#508]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/508
[#507]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/507
[#505]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/505
[#504]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/504
[#503]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/503
[#500]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/500
[#499]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/499
[#496]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/496
[#495]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/495
[#489]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/489
[#487]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/487
[#478]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/478
[#469]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/469
[#465]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/465
[#460]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/460
[#459]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/459
[#458]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/458
[#450]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/450
[#449]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/449
[#446]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/446
[#442]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/442
[#435]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/435
[#427]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/427
[#426]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/426
[#425]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/425
[#414]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/414
[#403]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/403
[#402]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/402
[#401]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/401
[#399]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/399
[#397]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/397
[#395]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/395
[#390]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/390
[#389]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/389
[#388]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/388
[#387]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/387
[#386]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/386
[#385]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/385
[#384]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/384
[#381]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/381
[#376]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/376
[#375]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/375
[#374]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/374
[#373]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/373
[#372]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/372
[#371]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/371
[#368]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/368
[#363]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/363
[#362]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/362
[#361]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/361
[#360]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/360
[#359]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/359
[#358]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/358
[#357]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/357
[#356]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/356
[#346]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/346
[#339]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/339
[#332]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/332
[#331]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/331
[#330]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/330
[#329]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/329
[#327]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/327
[#326]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/326
[#325]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/325
[#324]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/324
[#322]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/322
[#321]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/321
[#319]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/319
[#316]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/316
[#315]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/315
[#310]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/310
[#304]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/304
[#303]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/303
[#300]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/300
[#286]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/286
[#284]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/284
[#283]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/283
[#281]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/281
[#280]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/280
[#262]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/262
[#260]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/260
[#258]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/258
[#255]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/255
[#249]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/249
[#246]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/246
[#244]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/244
[#240]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/240
[#237]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/237
[#234]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/234
[#227]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/227
[#226]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/226
[#224]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/224
[#217]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/217
[#208]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/208
[#205]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/205
[#203]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/203
[#197]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/197
[#192]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/192
[#190]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/190
[#188]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/188
[#185]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/185
[#183]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/183
[#182]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/182
[#180]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/180
[#179]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/179
[#178]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/178
[#177]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/177
[#176]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/176
[#174]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/174
[#173]: https://github.com/TGMPA/TGM-Plugin-Activation/pull/173
[#171]: https://github.com/TGMPA/TGM-Plugin-Activation/issues/171

[Codex on callbacks]: https://codex.wordpress.org/How_to_Pass_Tag_Parameters#Callable

[{$prefix}plugin_action_links]: https://developer.wordpress.org/reference/hooks/prefixplugin_action_links/
[after_plugin_row_{$plugin_file}]: https://developer.wordpress.org/reference/hooks/after_plugin_row_plugin_file/
[update_bulk_plugins_complete_actions]: https://developer.wordpress.org/reference/hooks/update_bulk_plugins_complete_actions/
