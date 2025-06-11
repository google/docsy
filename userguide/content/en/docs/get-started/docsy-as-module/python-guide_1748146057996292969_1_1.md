---
title: "Python Guide"
description: "It is our collective responsibility to enforce this Python Style Guide since our chosen linter does not catch everything."
---

## Python Guide

### Motivation

It is the Data team's collective responsibility to promote, respect, and improve our Python Style Guide since not all the things can be caught up by the tools we are using. This deliberate attention makes a difference and does a lot to ensure high-quality code.
The main motivation to have comprehensive and useful Python guidelines is to ensure a high standard of code quality is maintained in our work. As we use this guideline as a support in that daily work, which is always changing, this guide is likewise always subject to [iteration](/handbook/values/#iteration). In the long run this guide will help us to have a world-class code quality we should be proud of. All the changes are driven by our [**values**](/handbook/values/).

### Values

**Campsite rule:** As these guidelines are themselves in a constantly Work in Progress (`WIP`) status -  if you work with any code style, hint, or guideline which does not currently adhere to the style guide - please submit a merge request with the relevant changes and tag the Data Platform team to update the guide.

### Technology Standardisation

**Starting in Jan 2022** all new custom python extracts should adhere to the [**Singer standard**](https://www.singer.io/).

### High-level guidelines

This section brings details on a high level of how to follow the best practices regarding `Python` code. Following recommendations, will ensure we are able to fully understand the advantage of high code quality and leverage our code base.

#### Zen of Python

It is difficult to resist writing a python guide without mentioning the `Zen of Python`, a cornerstone for ensuring the code quality on a high level.
It is a helpful mental exercise when you want to write outstanding Python without overlooking basic ideas.

```bash
╰─$ python3
Python 3.8.6 (v3.8.6:db455296be, Sep 23 2020, 13:31:39)
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

#### PEP 8

`PEP` stands for Python Enhancement Proposal, and there are several of them. A `PEP` is a document that describes new features proposed for Python and documents aspects of Python, like design and style, for the community.
As per definition:
> `PEP 8`, sometimes spelled `PEP8` or `PEP-8`, is a document that provides guidelines and best practices on how to write Python code.
> It was written in 2001 by `Guido van Rossum`, `Barry Warsaw`, and `Nick Coghlan`.
> The primary focus of `PEP 8` is to improve the readability and consistency of Python code.

**Why We Need PEP 8?**
> Readability counts.
>
> *— The Zen of Python*
>
> Code is much more often read than it is written.
>
> *— Guido van Rossum*

Among many other things, it is vital to underscore the need to have a clean, clear and consistent code in order to be able to maintain and scale the codebase.

#### GitLab Zen of Python

As a supplement of the `Zen of Python`, we had an intention to underscore a couple of more viewpoints to ensure and keep our code base in a good shape. This is half a joke, half a truth, but provides good general overview for the high standards we want to leverage.
Here is our `GitLab Zen of Python` proposal:

- `G`ratitude and respect for `PEP 8`
- `I`nsist on writing well-structured code
- `T`rust `Pythonic` way of thinking and coding, and introduce a good habit of using it on a daily basis
- `L`everage and promote proper comments and documentation
- `A`lways have `Zen of Python` on the top of your mind
- `B`oost usage of a modular code style over script-like approach

Probably a couple more of them are count:

- Advocate for proper naming of variables, classes, functions and modules
- Favor a modular code style over script-like approach
- Prefer using a virtual environment over existing interpreter

### Specific guidelines

With a good framework definition on the high level of using the proper architectural approach for designing and structuring the `Python` code, now it is time to do a deep dive and leverage details should make the difference between good and the outstanding code.

### Project setup - Poetry

For project setup, we are using [poetry](https://python-poetry.org/).

`Poetry` is a python dependency management tool to manage dependencies, packages, and libraries in your python project. It will help you to make your project more simple by resolving dependency complexities in your project and managing to install and update for you.

Here is the set of command we are using to initiate and install `Python` (in our case it is `3.10.3`), refer to the file [onboarding_script.zsh](https://gitlab.com/gitlab-data/analytics/-/blob/master/admin/onboarding_script.zsh).

One good example of how we define `pyproject.toml` file to run and execute the `poetry` setting is exposed 👇 below:

```bash
[tool.poetry]
name = "app"
version = "0.1.0"
description = "Automated Service Ping Metrics Check"
authors = ["{}"]
readme = "README.md"
homepage = "https://gitlab.com/gitlab-data/service-ping-metrics-check/README.md"
repository = "https://gitlab.com/gitlab-data/service-ping-metrics-check"

[tool.poetry.dependencies]
python = "^3.10"
fastapi = "^0.85.0"
uvicorn = "^0.18.3"
black = "^22.8.0"
pylint = "^2.15.3"
flake8 = "^5.0.4"
mypy = "^0.971"
vulture = "^2.6"
pytest = "^7.1.3"
python-decouple = "^3.6"
flatten-dict = "^0.4.2"
sqlparse = "^0.4.3"
snowflake-connector-python = "^2.7.12"

[tool.poetry.dev-dependencies]

[build-system]
requires = ["poetry-core>=1.0.0"]
build-backend = "poetry.core.masonry.api"

[tool.poetry.scripts]
start = "app.sharehouse.main:start"
```

The full file is exposed in the file [service-ping-metrics-check/pyproject.toml](https://gitlab.com/gitlab-data/service-ping-metrics-check/-/blob/main/pyproject.toml) as a part of [**Service ping metrics check**](https://gitlab.com/gitlab-data/service-ping-metrics-check) project.

#### Idioms

A programming idiom, put simply, is nothing else but a way to write code. Idiomatic Python code is often referred to as being `Pythonic`. Although there is usually one — and preferably not only one — obvious way to do it. The way to write idiomatic Python code can be non-obvious to Python beginners.
So, good idioms must be consciously acquired.

#### Explicit code

While *(almost)* any kind of magic is possible with Python, the most explicit and straightforward manner is preferred. Keep it simple and smart.

```python
## Bad
def foo(*args):
    x, y = args
    return dict(**locals())

## Good
def bar(x, y):
    return {'x': x, 'y': y}
```

#### Function arguments

Arguments can be passed to routines in four different ways:

1. `Positional arguments` - for instance, `foo(message, recipient)`
2. `Keyword arguments` - for instance, `foo(message, to, cc=None, bcc=None)`. Here `cc` and `bcc` are optional, and evaluate to `None` when they are not passed another value.
3. `Arbitrary argument list` (`*args`)
4. `Arbitrary keyword argument dictionary` (`**kwargs`)

It is up to the engineer writing the function to determine which arguments are positional arguments and which are optional keyword arguments, and to decide whether to use the advanced techniques of arbitrary argument passing. If the advice above is followed wisely, it is possible and enjoyable to write `Python` functions that are:

- easy to read (the name and arguments need no explanations)
- easy to change (adding a new keyword argument does not break other parts of the code)

#### Returning values

When a function grows in complexity, it is not uncommon to use multiple return statements inside the function's body.
However, in order to keep a clear intent and sustainable readability, it is preferable to avoid returning meaningful values from many output points in the body.
When a function has multiple main exit points for its normal course, it becomes difficult to debug the returned result, so it may be preferable to keep a single exit point

```python
## Bad! Probably too complex and difficult to read
def foo(a, b, c):
    if not a:
        return None  # Raising an exception might be better
    if not b:
        return None  # Raising an exception might be better
    # Some complex code trying to compute x from a, b and c
    # Resist temptation to return x if succeeded
    if not x:
        # Some Plan-B computation of x
    return x  # One single exit point for the returned value x will help
              # when maintaining the code.

## Good
def bar(a, b, c):
    res = None
    if not a:
        res = None
    if not b:
        res = None
    # Some complex code trying to compute x from a, b and c
    # Resist temptation to return x if succeeded
    if not x:
        # Some Plan-B computation of x
        res = 42
    return res
```

#### Unpacking

If you know the length of a list or tuple, you can assign names to its elements with unpacking. For example, since `enumerate()` will provide a tuple of two elements for each item in list:

```python
## Bad! - can be difficult to read and maintain
for index in range(0:len(foo_list)):
    # do something with foo_list[index]

## Good! - this is optimized way to use for loop
for index, item in enumerate(foo_list):
    # do something with index and item
```

You can use this to swap variables as well:

```python
## Good
a, b = b, a
```

Nested unpacking works fine as well:

```python
## Good
a, (b, c) = 1, (2, 3)
```

New method of extended unpacking was introduced by `PEP 3132`:

```python
## Good
a, *rest = [1, 2, 3]
## a = 1, rest = [2, 3]
a, *middle, c = [1, 2, 3, 4]
## a = 1, middle = [2, 3], c = 4
```

Ignored variable `_` can be part of unpacking as well:

```python
## Bad
a, _ , c = [1, 2, 3, 4] # This will raise an error

## Good! This will work (* is going before _)
a, *_ , c = [1, 2, 3, 4]

## Good
_, *rest = [1, 2, 3]
## rest = [2, 3]
```

> **Note:** bad praxis is to unpack more than 3 values. Yes, it is allowed to do that, but will rapidly decrease code readability.

```Python
## Bad! (if you have more than 3 values)
a, b, c, d = 1, 2, 3, 4

## Good
a, b, c = 1, 2, 3
d = 4

## Better
a = 1
b = 2
c = 3
d = 4
```

#### Conventions

This section should expose effective techniques to deal with conventions and how to integrate them into your toolbox.

##### Check if a variable equals a constant

It is not needed to explicitly compare a value to True, or None, or 0 – you can just add it to the if statement. See Truth Value Testing for a list of what is considered false.

```python
## Bad
if attr == True:
    print('True!')

if attr == None:
    print('attr is None!')

## Good
## Just check the value
if attr:
    print('attr is truthy!')

## or check for the opposite
if not attr:
    print('attr is falsey!')

## or, since None is considered false, explicitly check for it
if attr is None:
    print('attr is None!')

## same goes for dict, list sets
check_list = []
if check_list:
    print('This is not empty list.')
else:
    print('The list is empty.')
```

##### String concatenation

There are many ways to do string concatenation. Here is just a short exercise on how to do that in an efficient way.

```python
string1 = 'Python'
string2 = 'Guideline'

## Bad
print(string1 + " " + string2)
## Python Guideline

## Good
print('{} {}'.format(string1, string2))
## Python Guideline

## Better
print(f"{string1} {string2}")
## Python Guideline
```

As you noticed here, the result is the same, but details make a difference. In the example above, we dealt with strings, but what will gonna happen when we introduce more data types within the same code.

```python

string1 = 'Python'
int1 = 2 # now, this is int

## Bad
## print(string1 + " " + int1)
## TypeError: can only concatenate str (not "int") to str

## Good
print('{} {}'.format(string1, int1))
## Python 2

## Better
print(f"{string1} {int1}")
## Python 2
```

See why it is better to use placeholders instead of simple string concatenation (ie. `a + b`).

##### Short Ways to Manipulate Lists

- `List comprehensions` provides a powerful, concise way to work with lists.
- `Generator expressions` follows almost the same syntax as list comprehensions but returns a generator instead of a list. This is crucial to remember: performance and memory matter, and it is a great consideration to understand the leverage of using generators where it is appropriate.

```python
## Bad
## will return a list first and then do the max calculation, the trick is as [] stands for the list
foo = max([(student.id, student.name) for student in graduates])

## Good
## will return a generator object first and then do the max calculation till the generator exhausted, the trick is as () stands for the generator object
bar = max((student.id, student.name) for student in graduates)
```

> **Note:** performance and memory resources matter!

##### Comprehensions

Comprehensions in Python provide us with a short and concise way to construct new sequences *(such as lists, set, dictionary etc.)* using sequences which have been already defined. Python supports the following 4 types of comprehensions:

- `List` Comprehensions
- `Dictionary` Comprehensions
- `Set` Comprehensions
- `Generator` Comprehensions - Kindly suggest spending some time to understand generators and how they are implemented in `Python` as they are memory optimized and should be an efficient choice for processing a massive set of data.

In other words, any iterable can be part of comprehensions.

Comprehensions are the great example of `Pythonic` way of thinking, as provides clean and neat coding standards.

```python
output_list = [output_exp for var in input_list if (var satisfies this condition)]
```

> **Note:** nested comprehensions are allowed as well, but it is not best practice to have more than 2 comprehensions in one statement.

##### Filtering an iterables

There are plenty of ways to filter an iterables. Let see some of them and how they fit in a high coding standards.

```python
## Bad
## Never remove items from a list while you are iterating through it

## Filter elements greater than 4
foo = [3, 4, 5]
for i in foo:
    if i > 4:
        foo.remove(i)

## Bad
## Don't make multiple passes through the list

while i in foo:
    foo.remove(i)

## Good
## Use a list comprehension or generator expression

## comprehensions create a new list object
filtered_values = [value for value in sequence if value != x]

## generators don't create another list
filtered_values = (value for value in sequence if value != x)

## Good
## you can use function as a filter
sequence= [1, 2, 3]

def dummy_filter(member: int) -> bool:
 return member != 2

filtered_values = [value for value in sequence if dummy_filter(value)]
## [1, 3]
```

As an alternative, `map` | `filter` | `reduce` functions can be used for this purpose. Handy link is [**Map, Filter and Reduce**](https://book.pythontips.com/en/latest/map_filter.html)

##### Modifying the values in a list

Remember that assignment never creates a new object. If two or more variables refer to the same list, changing one of them changes them all.

```python
## Add three to all list members
list_a = [3, 4, 5]
list_b = list_a  # list_a and list_b refer to the same list object

for i in range(len(list_a)):
    list_a[i] += 3 # list_b[i] also changes

## for copying a list, use .copy() method
list_a = [1, 2, 3]

list_b = list_a.copy()
## extend list_b as list_a will stay in a original shape
list_b.extend(list_b)

print(F"list_a: {list_a}")
print(F"list_b: {list_b}")
## list_a: [1, 2, 3]
## list_b: [1, 2, 3, 1, 2, 3]
```

It's safer to create a new list object and leave the original alone.

```python
list_a = [3, 4, 5]
list_b = list_a

## assign the variable "list_a" to a new list without changing "list_b"
list_a = [i + 3 for i in list_a]
```

Use `enumerate()` keep a count of your place in the list.

```Python
## Good
foo = [3, 4, 5]
for i, item in enumerate(foo):
    print(i, item)
## prints
## 0 3
## 1 4
## 2 5
```

> **Note:** The `enumerate()` function has better readability than handling a counter manually. Moreover, it is better optimized for iterators.

##### Read From a File

Always good advice is to use `context manager` over value assigning when loading data from a file. This approach will automatically close a file for you.

```python
## Bad
f = open('file.txt')
a = f.read()
print(a)
f.close() # we always forgot something like this.

## Good
with open('file.txt') as f:
    for line in f:
        print(line)
## This approach will close a file for you
```

##### Line Continuations/Line Length

When a logical line of code is longer than the accepted limit, you need to split it over multiple physical lines. The Python interpreter will join consecutive lines if the last character of the line is a backslash. This is helpful in some cases, but should usually be avoided because of its fragility: a white space added to the end of the line, after the backslash, will break the code and may have unexpected results

```python
## Bad
my_very_big_string = """When a logical line of code is longer than the accepted limit, \
    you need to split it over multiple physical lines. \
    The Python interpreter will join consecutive lines if the last character of the line is a backslash.""""

from some.deep.module.inside.a.module import a_nice_function, another_nice_function, \
    yet_another_nice_function

## Good
my_very_big_string = (
    "When a logical line of code is longer than the accepted limit, "
    "you need to split it over multiple physical lines. "
    "The Python interpreter will join consecutive lines if the last character of the line is a backslash.""
)

from some.deep.module.inside.a.module import (
    a_nice_function, another_nice_function, yet_another_nice_function)
```

##### Spacing

Following [PEP8](https://peps.python.org/pep-0008/#blank-lines) we recommend you put blank lines around logical sections of code.
When starting a `for` loop or `if/else` block, add a new line above the section to give the code some breathing room. Newlines are cheap - [brain time is expensive](https://www.getdbt.com/blog/write-better-sql-a-defense-of-group-by-1).

```python
## Bad
def foo(input_number:int) -> int:
    """
    Do some simple comparing
    """
    res = input_number
    if res == 2:
         return res
    else:
         return res ** 2

## Good
def bar(input_number:int) -> int:
    """
    Do some simple comparing
    """

    res = input_number

    if res == 2:
         return res
    else:
         return res ** 2
```

##### Type Hints

All function signatures should contain type hints, including for the return type, even if it is `None`.
This is good documentation and can also be used with [`mypy`](https://mypy-lang.org/) for type checking and error checking.

```python
## Bad
def foo(x, y):
    """
    Add two numbers together and return.
    """

    return x + y

## Good
def foo(x: int, y: int) -> int:
    """
    Add two numbers together and return.
    """

    return x + y

## Good! (for None as return type)
def bar(some_str: str) -> None:
    """
    Print a string.
    """

    print(some_str)
    return
```

##### Import Order

Imports should follow the [PEP8](https://peps.python.org/pep-0008/#imports) rules and furthermore should be ordered with any `import ...` statements coming before `from .... import ...`

```python
## Bad
from os import environ
import logging

import some_local_module

from requests import get
import pandas as pd
from another_local_module import something
import sys
```

```python
## Good
import logging
import sys
from os import environ

import pandas as pd
from requests import get

import some_local_module
from another_local_module import something
```

Also, linters should help you with this issue: `isort`, `mypy`, `flake8`, `pylint`.

###### isort

[isort](https://pycqa.github.io/isort/) is a Python utility / library to sort imports alphabetically, and automatically separated into sections and by type. It provides a command line utility, Python library and plugins for various editors to quickly sort all your imports.

Installation:

```bash
pip install isort
```

Usage:

```bash
isort file_name.py
# or isort .
```

and it will automatically order imports with the best practices.

##### Docstrings

- Docstrings should be used in every single file.
- Docstrings should be used in every single function. Since we are using type hints in the function signature there is no requirement to describe each parameter.
- Docstrings should use triple double-quotes and use complete sentences with punctuation.

```python
## Good
def foo(x: int, y: int) -> int:
    """
    Add two numbers together and return the result.
    """

    return x + y

## Good! (for None as return type)
def bar(some_str: str) -> None:
    """
    Print a string.

    This is another proper sentence.
    """
    print(some_str)
    return

## Better! Have Docstring on a module level
"""
This is a Docstrings on a module level.
Should be handy to describe a purpose of your module
"""

def bar(some_str: str) -> None:
    """
    Print a string.

    This is another proper sentence.
    """

    print(some_str)
    return
```

#### How to integrate Environment Variables

To make functions as reusable as possible, it is highly discouraged *(unless there is a **"very"** good reason)* from using environment variables directly in functions *(there is an example of this below)*.
Instead, the best practice is to either pass in the variable you want to use specifically or pass all of the environment variables in as a dictionary.
This allows you to pass in any dictionary and have it be compatible while also not requiring the variables to being defined at the environment level.

```python
import os
from typing import Dict

## Bad
def foo(x: int) -> int:
    """
    Add two numbers together and return.
    """

    return x + os.environ["y"]
foo(1)

## Good
env_vars = os.environ.copy() # The copy method returns a normal dict of the env vars.
def bar(some_str: str, another_string: str) -> None:
    """
    Print two strings concatenated together.
    """
    print(f"{some_str} {another_string}")
    return

bar("foo", env_vars["bar"])

## Better
def bar(some_str: str, env_vars: Dict[str, str]) -> None:
    """
    Print two strings concatenated together.
    """
    print({some_str} + {env_vars["another_string"]})
    return

bar("foo", env_vars)

```

#### Parsing Dates

Ideally, never hardcode the date format using datetime.strptime unless absolutely necessary in cases where the format is very unusual. A better solution is to use the generic date parser in the dateutil library, as it handles a large variety of formats very reliably:

```python
## Bad
datevar = datetime.strptime(tstamp, timestamp_format = "%Y-%m-%dT%H:%M:%S%z")

## Good
from dateutil import parser as date_parser
 ...
datevar = date_parser.parse(tstamp)
```

#### Package Aliases

We use a few standard aliases for common third-party packages. They are as follows:

- `import pandas as pd`
- `import numpy as np`

#### Variable Naming Conventions

Adding the type to the name is good self-documenting code.
When possible, always use descriptive naming for variables, especially with regards to data type. Here are some examples:

- `data_df` is a dataframe
- `params_dict` is a dictionary
- `retries_int` is an int
- `bash_command_str` is a string

If passing a constant through to a function, name each variable that is being passed so that it is clear what each thing is.

Lastly, try and avoid redundant variable naming.

```python

def bar(some_str: str, another_string: str) -> None:
    """
    Print two strings concatenated together.
    """
    print(some_str + another_string)
    return

## Good
bar(some_str="foo", another_string="bar")

## Better
some_str = "foo"
another_string = "bar"
bar(some_str, another_string)

## But Bad
bar(some_str=some_str, another_string=another_string)
```

#### Making your script executable

If your script is not able to be run even though you've just made it, it most likely needs to be executable. Run the following:

```bash
chmod 755 yourscript.py
```

For an explanation of chmod 755 read this [askubuntu page](https://askubuntu.com/questions/932713/what-is-the-difference-between-chmod-x-and-chmod-755).

#### Mutable default function arguments

Using mutable data structures as default arguments in functions can introduce bugs into your code. This is because a new mutable data structure is created once when the function is defined, and the data structure is used in each successive call.

```python
def append_to(element, to=[]):
    to.append(element)
    return to

my_list = append_to(12)
print(my_list)

my_other_list = append_to(42)
print(my_other_list)
```

Output:

```console
[12]
[12, 42]
```

> **Note:** Handy link for this topic: [Python gotchas](https://docs.python-guide.org/writing/gotchas/)

#### Exception handling

When writing a python class to extract data from an API it is the responsibility of that class to highlight any errors in the API process. Data modelling, source freshness and formatting issues should be highlighted using `dbt tests`.
Avoid use of general `try/except` blocks as it is too broad, and will be difficult to find the real error:

```python
## Bad
try:
   print("Do something")
except:
   print("Caught every type of exception")

## Good
while maximum_backoff_sec > (2 ** n):
    try:
        print("Do something")
    except APIError as gspread_error:
        if gspread_error.response.status_code in (429, 500, 502, 503):
            self.wait_exponential_backoff(n)
            n = n + 1
        else:
            raise
else:
    error(f"Max retries exceeded, giving up on {file_name}")

## Better! fine error granulation
while maximum_backoff_sec > (2 ** n):
    try:
        print("Do something")
    except APIError as gspread_error:
        if gspread_error.response.status_code in (429, 500, 502, 503):
            self.wait_exponential_backoff(n)
            n = n + 1
        else:
            raise
    except AttributeError as attribute_error:
        raise
    except KeyError as key_error:
        print('Caught this error: ' + repr(key_error))
```

#### Folder structure for new extracts

- All client specific logic should be stored in `/extract` folder, any API Clients which may be reused should be stored in `/orchestration` folder under the `/analytics` repo
- Pipeline specific operations should be stored in /extract.
- The folder structure in extract should include a file called `extract_{source}_{dataset_name}` like `extract_qualtrics_mailingsends` or `extract_qualtrics` if the script extracts multiple datasets. This script can be considered the main function of the extract, and is the file which gets run as the starting point of the extract DAG.

#### Unit Testing with `pytest`

[**Pytest**](https://docs.pytest.org/en/7.2.x/index.html) is used to run unit tests in the `/analytics` project. The tests are executed from the root directory of the project with the `python_pytest` CI pipeline job. The job produces a `JUnit` report of test results which is then processed by `GitLab` and displayed on merge requests.

Most functional tests frameworks, and `pytest` as well, follow the `Arrange-Act-Assert` model:

- `Arrange` - or set up, the conditions for the test
- `Act` - by calling some function or method
- `Assert` - that some end condition is `True` (a test will pass) or `False` (a test will fail)

`pytest` simplifies testing workflow by allowing you to use Python's assert keyword directly without any boilerplate code.

##### Writing New Tests

New testing file names should follow the pattern `test_*.py` so they are found by `pytest` and easily recognizable in the repository.
New testing files should be placed in a directory named `test`, usually under the current working folder. The test directory should share the same parent directory as the file that is being tested. For instance, you are working on integration `xyz`, probably you should have folder structure like following:

```bash
## a typical folder structure for xyz integration
|-- xyz
    |-- src
        | -- __init__.py
        | -- execute.py
    |-- test              # here you should put your test files
        | -- test_xyz.py
```

A testing file should contain one or more tests.
Test functions should have `test_*` naming pattern in their name.
An individual test is created by defining a function that has one or many plain Python `assert` statements.

- If the asserts are all `True`, the test passes.
- If any asserts are `Fals`e, then the test will fail.

> **Note:** When writing imports, it is important to remember that tests are executed from the root directory.

In the future, additional directories may be added to the `PythonPath` for ease of testing as need allows.

##### Basic Pytest Usage

When create a test case, keep it simple and clear. The main point is to have small test cases be able to keep it consistent and easy to maintain..

```python
## example when test passed
import pytest

def test_example_pass():
    assert 1 == 1
## test.py::test_example_pass PASSED

## example when test failed
import pytest

def test_example_failed():
    assert 1 == 2

## test.py::test_example_failed FAILED
```

##### Using Pytest Fixtures

`pytest` fixtures are a way of providing data, configs or state setup to tests. Fixtures are functions that can return a wide range of values, especially for repeatable tasks and config items. Each test functions that depend on a fixture must explicitly accept that fixture as an argument along with decorator `@pytest.fixture`.

```python
import pytest

@pytest.fixture()
def myfixture():
    # define some boring repeatable task needed for test cases
    return "This is my fixture"

## this will pass
def test_example(myfixture):
    assert myfixture == "This is my fixture"
## test.py::test_example PASSED

## this will also pass as myfixture is reused
def test_example_additional(myfixture):
    assert type(myfixture) == str
## test.py::test_example_additional PASSED
```

##### Parametrized Test Functions

A great way to avoid code duplication is to use [Parametrizing tests](https://doc.pytest.org/en/latest/example/parametrize.html) and for that purpose, the magic happens behind the `@pytest.mark.parametrize` decorator.

The builtin [`pytest.mark.parametrize`](https://doc.pytest.org/en/latest/how-to/parametrize.html#pytest-mark-parametrize-parametrizing-test-functions) decorator enables parametrization of arguments for a test function.
This enables us to test different scenarios, all in one function. We make use of the `@pytest.mark.parametrize` decorator, where we are able to specify the names of the arguments that will be passed to the test function, and a list of arguments corresponding to the names.

```python
import pytest

## here is the magic word to parametrize more than one scenario
import pytest

@pytest.mark.parametrize("test_value, expected_value", [("1+1", 2), ("2+3", 5), ("6*9", 54)])
def test_eval(test_value, expected_value):
    assert eval(test_value) == expected_value
## test.py::test_eval[1+1-2] PASSED                                         [ 33%]
## test.py::test_eval[2+3-5] PASSED                                         [ 66%]
## test.py::test_eval[6*9-54] PASSED                                        [100%]
```

In other words, you can think of this decorator behaving as a `zip*` function and returning a tuple for the 2 list for more scenarios.

> **Note:** for the decorator `@pytest.mark.parametrize` the first argument to parametrize() is a comma-delimited string of parameter names. The second argument is a list of either tuples or single values that represent the parameter value(s).

##### Categorizing Tests using marks

In any large test suite, some of the tests will inevitably be slow. They might test timeout behavior, for example, or they might exercise a broad area of the code. Whatever the reason, it would be nice to avoid running all the slow tests when you're trying to iterate quickly on a new feature.
pytest enables you to define categories for your tests and provides options for including or excluding categories when you run your suite. You can mark a test with any number of categories.

Marking tests is useful for categorizing tests by subsystem or dependencies. If some of your tests require access to a network, for example, then you could create a `@pytest.mark.network_access` mark for them.

- First, need to define markers in `pytest.ini` file:

```ini
[pytest]
markers =
    network_access: requires network access
    local_test: can run locally
```

- Create a test file

```python
import pytest

@pytest.mark.network_access
def test_network():
    assert 1 == 2

@pytest.mark.local_test
def test_local():
    assert 1 == 1
```

- run just `network_access` test(s):

```bash
## will fail, just to recognize what we run
╰─$ pytest test.py -m network_access
...
collected 2 items / 1 deselected / 1 selected

test.py F
```

- run just `local_test` test(s):

```bash
## this will pass
╰─$ pytest test.py -m local_test                                                                                                                                                                                                                                                    1 ↵
...
collected 2 items / 1 deselected / 1 selected

test.py .
```

##### Duration Report

If you plan to improve the speed of your tests, then it's useful to know which tests might offer the biggest improvements. `pytest` can automatically record test durations for you and report the top offenders.
Use the `--durations` option to the pytest command to include a duration report in your test results. `--durations` expects an integer value n and will report the slowest n number of tests.

```python
import pytest
from time import sleep

def test_slow():
    sleep(1)  # make it sleep 1s
    assert 1 == 1

def test_slower():
    sleep(2)  # make it sleep 2s
    assert 1 == 1

def test_slowest():
    sleep(3)  # make it sleep 3s
    assert 1 == 1
```

- Calling `pytest`:

```bash
╰─$ pytest test.py --durations=1
= test session starts =
...
collected 3 items

test.py ...                                                                                                                                                                                                                                                                      [100%]

= slowest 1 durations =
3.00s call     test.py::test_slowest
= 3 passed in 6.03s =
```

##### Using pytest with exceptions

Sometimes, there is a use case you want to force expectations in `pytest` module. The solution is fairly simple, here is an example:

```python
def test_namespace_file_error(usage_ping):
    """
    Test file loading
    """
    with pytest.raises(FileNotFoundError):
        get_meta_data_from_file(file_name="THIS_DOES_NOT_EXITS.json")

## in case this file doesn't exist, the function will raise an exception, and test will pass

## Also, the handy option is to enrich pytest.raises with match statement
    with pytest.raises(ValueError, match="Raising error to.*"):
        run_metric_checks()
```

##### Using pytest with fake RESTful API

Use the [`unitest.mock`](https://docs.python.org/3/library/unittest.mock.html) library when you need to test your code against a RESTful API. `unitest.mock` allows you define API calls and responses, enabling you to test such behaviors within a test environment.
Usage is pretty simple:

```python
from unittest import mock

import pytest
import requests
import responses

## define fake response, use fixture mechanism
@pytest.fixture(name="fake_response")
def mocked_responses():
    """
    Mock routine to create fake response
    """
    with responses.RequestsMock() as rsps:
    yield rsps


## test fake response
def test_convert_response_to_json(fake_response):
    """
    Test function: convert_response_to_json
    """

    expected = {"test1": "pro", "test2": "1"}
    fake_response.get(
    "https://some_gitlab_api_url/test",
    body='{"test1": "pro", "test2": "1"}',
    status=200,
    content_type="application/json",
    )

    resp = requests.get("https://some_gitlab_api_url/test")

    assert resp == expected

## Let's combine unitest.mock and pytest.raises
def test_get_response(utils):
    """
    Force fake url and raise a Connection Error
    """
    with pytest.raises(ConnectionError):
        _ = utils.get_response("https://fake_url/test")
```

##### Pytest with simulating environment variables

If you need to add environment variables in the pytest code, you should do it with fixtures.

- Option 1: Using `environ`

```python
from os import environ

@pytest.fixture(name="env_var")
def fixture_data_classification():
    """
    Create env variables and initialize
    DataClassification object
    """
    environ["SNOWFLAKE_PREP_DATABASE"] = "PREP"
    environ["SNOWFLAKE_PROD_DATABASE"] = "PROD"
    environ["SNOWFLAKE_LOAD_DATABASE"] = "RAW"

# usage
# def test_initialization(env_var)
# ...
```

- Option 2: Using `mock.patch`

```python
from unittest.mock import patch

@pytest.fixture(autouse=True, name="set_env_variables")
def mock_settings_env_vars():
    """
    Simulate OS env. variables
    """
    with mock.patch.dict(os.environ, {"START_TIME": "2023-01-01T00:00:00Z"}):
        yield

# usage is automatically started, as autouse was set to True
```

##### Skip long running test

If you have a scenario where you want to skip a specific test in the CI/CD pipeline (ie. it si too large or taking too long), but want to run it locally on demand, you can use `skipif` command.

```python
# if you type command:
# export RUNALL=YES
# test will run, otherwise will skip

@pytest.mark.skipif(
    "RUNALL" not in environ,
    reason="Takes too long if run in the pipeline, want to run locally only",
)
def test_long_running_job():
    ...
```

##### Beyond pytest: Useful pytest Plugins

When `pytest` is not able to answer your needs is more complicated scenarios, handy plugins should be found. By now, didn't find any usage outside of `pytest` in `/analytics` repo, and it is good to know there are some useful tools can help you do your work.

- [pytest-randomly](https://github.com/pytest-dev/pytest-randomly) - Pytest plugin to randomly order tests and control `random.seed`.
- [pytest-cov](https://pytest-cov.readthedocs.io/en/latest/) - This plugin produces coverage reports. Compared to just using coverage run this plugin does some extras: `Subprocess support`, `Xdist support`, `Consistent pytest behavior`
- [Full plugin list](https://docs.pytest.org/en/latest/reference/plugin_list.html) - list of `pytest` plugins.

#### Tools for supporting coding quality

Python community provides a comprehensive set of tools to ensure code quality and high standards for the codebase.
The idea is to list a couple of tools from our toolbox for the code quality and expose some interesting items worth considering as a potential option for future use.

##### Black

Our main linter is [**Black**](https://pypi.org/project/black/). We use the default configuration of it.

There is a manual CI job in the `review` stage (`Python` section) that will lint the entire repo and return a non-zero exit code if files need to be formatted. It is up to both the MR author and the reviewer to make sure that this job passes before the MR is merged. To lint the entire repo, run the command:

```bash
jump analytics
black .
```

If you want to check all files *(without formatting)* in the entire repo or any particular folder of rile using `black`, run:

```bash
## for the entire repo, run
$ jump analytics
$ run black --check .

## for particular folder, run
$ run black --check extract/

## for particular folder, run
$ run black --check extract/saas_usage_ping/usage_ping.py
```

##### mypy

- [`mypy`](https://mypy-lang.org/)

> Mypy is an optional static type checker for `Python` that aims to combine the benefits of dynamic *(or `duck`)* typing and static typing. Mypy combines the expressive power and convenience of Python with a powerful type system and compile-time type checking. Mypy type checks standard Python programs.

```bash
## Run mypy for extract/ folder
mypy extract/ --ignore-missing-imports
```

##### flake8

Your tool for style guide enforcement:
[**Flake8**](https://flake8.pycqa.org/en/latest/) is a popular lint wrapper for python. Under the hood, it runs three other tools and combines their results: pep8 for checking style. pyflakes for checking syntax. mccabe for checking complexity.

```bash
flake8 . --ignore=E203,E501,W503,W605
```

##### pylint

[**Pylint**](https://pylint.org/) is a static code analyser for Python.

> Pylint analyses your code without actually running it. It checks for errors, enforces a coding standard, looks for code smells, and can make suggestions about how the code could be refactored. Pylint can infer actual values from your code using its internal code representation (astroid). If your code is import logging as argparse, Pylint will know that argparse.error(...) is in fact a logging call and not an argparse call.

`Pylint` is highly configurable and permits to write plugins in order to add your own checks *(for example, for internal libraries or an internal rule)*. Pylint also has an ecosystem of existing plugins for popular frameworks and third party libraries.

```bash
## we use pylint and exclude some of check to reduce the noise (ie. line-too-long)
pylint extract/ --ignore=analytics/dags --disable=line-too-long,E0401,E0611,W1203,W1202,C0103,R0801,R0902,W0212
```

##### xenon

[**Xenon**](https://pypi.org/project/xenon/) is a monitoring tool based on Radon. It monitors your code's complexity. Ideally, Xenon is run every time you commit code. Through command line options, you can set various thresholds for the complexity of your code. It will fail *(i.e. it will exit with a non-zero exit code)* when any of these requirements is not met.

```bash
run xenon --max-absolute B --max-modules B --max-average A . -i transform,shared_modules
```

##### vulture

[**Vulture**](https://pypi.org/project/vulture/) finds unused code in Python programs. This is useful for cleaning up and finding errors in large code bases. If you run Vulture on both your library and test suite you can find untested code.

Due to 🐍Python's dynamic nature, static code analyzers like Vulture are likely to miss some dead code. Also, code that is only called implicitly may be reported as unused. Nonetheless, Vulture can be a very helpful tool for higher code quality.

```bash
run vulture . --min-confidence 100
```

##### Few more handy libraries

For more elements on how we automated linter to keep code quality on the elevated level, refer to [🐍 Python CI jobs](/handbook/enterprise-data/platform/ci-jobs/#-python). All of these linters can be tested automatically and for that purpose, we created a comprehensive set of commands using [Makefile](https://gitlab.com/gitlab-data/analytics/-/blob/master/Makefile).

In addition, recommendation to check, explore and considering:

- [`pycodestyle`](https://github.com/PyCQA/pycodestyle)
- [`yapf`](https://github.com/google/yapf)
- [`autopep8`](https://pypi.org/project/autopep8/)
- [`HowDOI`](https://github.com/gleitz/howdoi) - good tool for a quick search.
- [`iSort`](https://pycqa.github.io/isort/) - isort is a Python utility / library to sort imports alphabetically, and automatically separated into sections and by type.

#### Tools for automating our coding quality standards

For automating code quality and testing, we are using our own product [GitLab CI/CD pipeline](https://docs.gitlab.com/ee/ci/pipelines/).
Details of pipelines we use for python should be found on the page [CI jobs (Python)](/handbook/enterprise-data/platform/ci-jobs/#-python).

#### When not to use Python

Since this style guide is for the entire data team, it is important to remember that there is a time and place for using `Python` and it is usually outside of the data modeling phase.
Stick to `SQL` for data manipulation tasks where possible.

### SQLAlchemy Upgrade - Codebase Changes

As of 2025-02-04, the `analytics/` repo has been updated to use the latest `data_image`, as detailed in [Analytics MR!11537](https://gitlab.com/gitlab-data/analytics/-/merge_requests/11537). This update includes upgrading several Python libraries, most notably `sqlalchemy`. The specific version installed is `snowflake-sqlalchemy==1.6.1`, which relies on `sqlalchemy==2.0`.

#### Changes in SQLAlchemy Query Patterns

The new version of SQLAlchemy enforces stricter rules on how queries can be passed. Below are examples of how Python statements should be updated to adhere to the updated SQLAlchemy library:

1. **execute**:
    - Old: `connection.execute(query)`
    - New: `gitlabdata.execute_query_str(connection, query)`

2. **read_sql**:
    - Old: `pd.read_sql(query)`
    - New: `pd.read_sql(text(query))`

3. **has_table**:
    - Old: `engine.has_table(table)`
    - New: `gitlabdata.has_table(engine, table)`

4. **Creating a new engine**:
    - The `autocommit` parameter needs to be set explicitly when creating a new engine. The correct setting depends on the database being used.
    - The `gitlabdata` library provides preset engines that can be used for convenience, i.e `snowflake_engine_factory` and `postgres_engine_factory`
