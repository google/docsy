# How to Contribute

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Contributor License Agreement

Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to <https://cla.developers.google.com/> to see
your current agreements on file or to sign a new one.

You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

## Community Guidelines

This project follows [Google's Open Source Community
Guidelines](https://opensource.google.com/conduct/).

## Code Style

All Python samples should follow the best practices defined in the [PEP 8 style
guide](https://www.python.org/dev/peps/pep-0008/) and the [Google Python Style
Guide](http://google.github.io/styleguide/pyguide.html). The automated linting
process for Python samples uses [flake8](http://flake8.pycqa.org/en/latest/) to
verify conformance to common Python coding standards, so the use of flake8 is
recommended.

If you prefer to use [pylint](https://www.pylint.org/), note that Python samples
for this repo are not required to conform to pylint’s default settings outside
the scope of PEP 8, such as the “too many arguments” or “too many local
variables” warnings.

The use of [Black](https://pypi.org/project/black/) to standardize code
formatting and simplify diffs is recommended.

The default noxfile defines a `blacken` session for convenience. If you have
pyenv configured, you can check and format all files in `google-analytics-admin`
or `google-analytics-data` using the following command:

```sh
nox -s lint blacken
```

## Running the tests

1.  Configure your environment and credentials as described in the
    [README](README.md).
2.  Change into the directory of the project you want to test (either
    `google-analytics-admin` or `google-analytics-data`).
3.  Configure environment variables required by tests using the following
    commands:

    ```sh
    # These values are required by Admin and Data API samples tests.
    export GOOGLE_CLOUD_PROJECT=
    export GA_TEST_PROPERTY_ID=
    # These values are only required by Admin API samples tests.
    export GA_TEST_ACCOUNT_ID=
    export GA_TEST_WEB_DATA_STREAM_ID=
    export GA_TEST_WEB_DATA_SECRET_ID=
    export GA_TEST_KEY_EVENT_ID=
    export GA_TEST_ACCOUNT_ACCESS_BINDING_ID=
    export GA_TEST_PROPERTY_ACCESS_BINDING_ID=
    ```

4.  Execute tests from the `google-analytics-admin` or `google-analytics-data`
    directory, using either `nox` or `pytest`. Using `nox` provides the
    additional benefit of formatting all files, and also automatically creates a
    virtual environment to test samples using different versions of Python.

    *   Using `nox`:

        ```sh
        nox
        ```

    *   Using `pytest`:

        ```sh
        pytest
        ```
