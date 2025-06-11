# Error Reporting Explained

## What's going on?

The Lighthouse team is constantly trying to improve the reliability of our tools, so we've added error tracking functionality to the CLI. Given your consent, we would like to anonymously report runtime exceptions using [Sentry](https://sentry.io/welcome/). We will use this information to detect new bugs and avoid regressions.

Only CLI users are currently impacted. DevTools, extension, and node module users will not have errors reported.

## What will happen if I opt-in?
Runtime exceptions will be reported to the team along with information on your environment such as the URL you tested, your OS, and Chrome version. See [what data gets reported](#what-data-gets-reported).

## What will happen if I do not opt-in?
Runtime exceptions will not be reported to the team. Your ability to use Lighthouse will not be affected in any way.

## What data gets reported?

* The URL you tested
* The runtime settings used (throttling enabled/disabled, emulation, etc)
* The message, stack trace, and associated data of the error
* The file path of Lighthouse node module on your machine
* Your Lighthouse version
* Your Chrome version
* Your operating system

[This code search](https://github.com/GoogleChrome/lighthouse/search?l=JavaScript&q=Sentry.&type=&utf8=%E2%9C%93) reveals where Sentry methods are used.

## How do I opt-in?
The first time you run the CLI you will be prompted with a message asking you if Lighthouse can anonymously report runtime exceptions. You can give a direct response of `yes` or `no` (`y`, `n`, and pressing enter which defaults to `no` are also acceptable responses), and you will not be prompted again. If no response is given within 20 seconds, a `no` response will be assumed and you will not be prompted again.

Running Lighthouse with `--enable-error-reporting` will report errors regardless of the saved preference.

## How do I keep error reporting disabled?
As mentioned, if you do not respond to the CLI prompt within 20 seconds, a `no` response will be assumed and you will not be prompted again.

Non-interactive terminal sessions (`process.stdout.isTTY === false`) and invocations with the `CI` environment variable (`process.env.CI === true`), common on CI providers like Travis and AppVeyor, will not be prompted and error reporting will remain disabled.

Running Lighthouse with `--no-enable-error-reporting` will keep error reporting disabled regardless of the saved preference.

## How do I change my opt-in preference?
Your response to the prompt will be saved to your home directory `~/.config/configstore/lighthouse.json` and used on future runs. To trigger a re-prompt, simply delete this file and Lighthouse will ask again on the next run. You can also edit this json file directly.

As mentioned above, any explicit `--[no-]enable-error-reporting` flags will override the saved preference.
