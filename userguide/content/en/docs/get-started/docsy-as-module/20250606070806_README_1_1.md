# Datalab

[![Tests and Checks](https://github.com/astro-datalab//datalab/actions/workflows/test.yml/badge.svg)](https://github.com/astro-datalab/datalab/actions/workflows/test.yml)
[![Documentation](https://github.com/astro-datalab//datalab/actions/workflows/generate_docs.yml/badge.svg)](https://datalab.noirlab.edu/docs/api/index.html)
[![Release](https://github.com/astro-datalab//datalab/actions/workflows/release_pip.yml/badge.svg)](https://github.com/astro-datalab/datalab/actions/workflows/test.yml)
[![pip](https://img.shields.io/pypi/v/astro-datalab.svg)](https://pypi.org/project/astro-datalab/#history)

``datalab`` is command-line Python client for NSF NOIRLab's [Astro Data Lab](https://datalab.noirlab.edu).

It provides easy access to various Astro Data Lab functionalities including:

* synchronous and asynchronous database queries (TAP)
* your remote file storage (VOSpace)
* your remote database tables (MyDB)

## Basic Usage
```python
>>> from dl import queryClient as qc
>>> result = qc.query(sql='SELECT TOP 5 ra,dec from smash_dr1.object')
>>> print(result)
ra,dec
296.0702105660565,-75.58008799398345
296.0689079309987,-75.57850708319104
296.0695746063349,-75.5771115243687
296.0734998386567,-75.57729189836104
296.074467291614,-75.57941799334213
```

## System requirements

* An Astro Data Lab user account (You can request an account on the [Astro Data Lab website](https://datalab.noirlab.edu/)).
* Python 3 (Python 3.11 recommended. Python >=3.9 required.)
* fuse or OSX-FUSE (only if you want to mount the remote storage as a local filesystem)

## Installation

The ``astro-datalab`` package installs the ``datalab`` command line
client, and various additional Data Lab Python libraries that allow you to use
Astro Data Lab functionality locally on your computer (for instance in Ipython
etc.)

### Install via pip

The easiest way to install the ``datalab`` client is via pip:

```bash
pip install --upgrade astro-datalab
```

**Note:** You should periodically update your client via the command above to ensure you are using the latest version. Older
versions of the client may not be supported.

### Install from sources

You can also install the `datalab` client from source on
[GitHub](https://github.com/astro-datalab/datalab.git) via the steps below:

1. Clone the repository and enter the directory:

   ```bash
   git clone git@github.com:astro-datalab/datalab.git && \
   cd datalab
   ```

2. Ensure you have the latest version of pip and setuptools:

   ```bash
   python -m pip install --upgrade pip setuptools
   ```

3. Build the package:

   ```bash
   python -m pip install build
   ```
   ```bash
   python -m build
   ```

4. Install the package:

   ```bash
   pip install dist/astro_datalab-<version>-py3-none-any.whl
   ```

   If you want it installed in your private Python repository (because you
  maintain multiple Python instances on your machine), you can use the
`--user` flag:

   ```bash
   pip install --user dist/astro_datalab-<version>-py3-none-any.whl
   ```

   **Note:** Replace `<version>` in the `pip install` command with the actual version
number of the `astro_datalab` package, such as `2.23.0`.  

### Additional Installation Steps

If you intend to mount the virtual storage as a local filesystem,
you will need to touch a file in your home directory:

```bash
touch ~/.netrc
```

## Troubleshooting / Common Issues

### `pip install` fails on Ubuntu

* If the pip installation instructions below fail for you complaining about a missing library `libcurl4-openssl-dev`, please install it using your software/package manager.

### Note for macOS ARM (M1/M2) Users

Users with macOS ARM architecture (M1/M2) may encounter issues when running or importing the datalab package.
This is often due to a mismatch between the version of libcurl available at runtime and the version that pycurl
was compiled against.

Common error message:

```bash
ImportError: pycurl: libcurl link-time version (7.77.0) is older than compile-time version (8.4.0)
```

To check if this issue exists, you can run:

```bash
python -c "import dl; print(dl.__version__)"
```

If you encounter the above error, follow these steps to resolve it:

1. **Update your macOS and Xcode Tools**

2. **Update your conda, if you have one**

3. **Update Homebrew and `curl`**:

    ```bash
    brew update
    brew upgrade curl
    ```

4. **Uninstall and Reinstall `pycurl`**:

    ```bash
    pip uninstall pycurl
    pip install --no-cache-dir pycurl
    ```

5. **If the above steps do not work, use `conda` to install `pycurl`**:

    ```bash
    conda install -c conda-forge pycurl
    ```

### Configuration update required (when upgrading from a version prior to v2.20.0)

With version `2.20.0`, the `datalab` package changed internal service
URLs to point to our new noirlab.edu domain. If you have an older version of
`datalab` installed, your local configuration file will need to be reinitialized
in order to use our new domain name (`datalab.noirlab.edu`).

To refresh the config, simply remove the old configuration file. The next time you
run a `datalab` command , a new configuration file will be generated:

```bash
rm $HOME/.datalab/dl.conf
```

Any datalab command will create a new config file eg.

```bash
datalab version
```

In some cases you might need to go through the login process eg.

```bash
datalab login
```

## Documentation

### ``datalab`` command line client

To check the currently installed version of `datalab`:

```bash
datalab --version

Task Version:  2.20.1
```

To get a list of available datalab commands (tasks):

```bash
datalab --help

Usage:

    % datalab <task> [task_options]

where <task> is one of:

                 cp - copy a file in Data Lab
             dropdb - Drop a user MyDB table
                get - get a file from Data Lab
             listdb - List the user MyDB tables
                 ln - link a file in Data Lab
              login - Login to the Data Lab
             logout - Logout of the Data Lab
                 ls - list a location in Data Lab
              mkdir - create a directory in Data Lab
                 mv - move a file in Data Lab
          mydb_copy - Rename a user MyDB table
        mydb_create - Create a user MyDB table
          mydb_drop - Drop a user MyDB table
        mydb_import - Import data into a user MyDB table
         mydb_index - Index data in a MyDB table
        mydb_insert - Insert data into a user MyDB table
          mydb_list - List the user MyDB tables
        mydb_rename - Rename a user MyDB table
      mydb_truncate - Truncate a user MyDB table
           profiles - List the available Query Manager profiles
                put - Put a file into Data Lab
           qresults - Get the async query results
            qstatus - Get an async query job status
              query - Query a remote data service in the Data Lab
                 rm - delete a file in Data Lab
              rmdir - delete a directory in Data Lab
             schema - Print data service schema info
           services - Print available data services
             status - Report on the user status
           svc_urls - Print service URLs in use
                tag - tag a file in Data Lab
            version - Print task version
             whoami - Print the current active user
```

You can get summaries of the arguments to a task with the ``help``
option:

```bash
datalab login help

The 'login' task takes the following parameters:

          user - Username of account in Data Lab [required]
      password - Password for account in Data Lab [required]
         mount - Mountpoint of remote Virtual Storage [optional]
  
       verbose - print verbose level log messages [optional]
         debug - print debug log level messages [optional]
       warning - print warning level log messages [optional]
```

The ``datalab`` command will prompt you for required arguments if you do not
provide them on the command line, e.g.:

```bash
datalab login

user (default: None): foousername
password (default: None): foouserpassword
Welcome to the Data Lab, foousername
```

Documentation for the ``datalab`` commands can be also found in the
[``docs/``](github.com/astro-datalab/datalab/tree/master/docs)
directory:

### ``dl`` Data Lab Python module

Once the client is installed, some Data Lab Python modules can be
imported and used in your Python programs locally, e.g.

```python
ipython
In [1]: from dl import queryClient as qc
In [2]: result = qc.query(sql='SELECT ra,dec from smash_dr1.object LIMIT 10')
In [3]: print(result)
ra,dec
175.215070742307,-38.4897863179213
175.241595469141,-38.4163769993698
175.25128999751,-38.4393292753547
175.265049366394,-38.424371697545
175.265160854504,-38.4915114547051
175.277267094536,-38.431267581266
175.302055158646,-38.4674421358985
175.328056295831,-38.4350989294865
175.334968899953,-38.4547709884234
175.34222308206,-38.4433633662239
```

A comprehensive [user manual](https://datalab.noirlab.edu/docs/manual/)
explains the many features of Data Lab.
