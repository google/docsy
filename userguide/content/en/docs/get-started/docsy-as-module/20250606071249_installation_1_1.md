## Dependencies

These distributions will be installed automatically when installing python-twitter-v2.

- [Requests](https://2.python-requests.org/en/master/) is an elegant and simple HTTP library for Python, built for human beings.
- [Requests-OAuthlib](https://requests-oauthlib.readthedocs.io/en/latest/) uses the Python Requests and OAuthlib libraries to provide an easy-to-use Python interface for building OAuth1 and OAuth2 clients.

## Installation

#### From [`Pypi`](https://pypi.org/project/python-twitter-v2/)

``` shell
$ pip install python-twitter-v2
```

#### From source

use [`Poetry`](https://python-poetry.org/)

``` shell
$ git clone https://github.com/sns-sdks/python-twitter.git
$ cd python-twitter
$ make env
$ poetry build
```

```shell
make env
```

### Testing

Test the code, Run:

```shell
make test
```

See the coverage information:

```shell
make cov-term
```
