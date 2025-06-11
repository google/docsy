# Data Lab 2.20.0 release notes [20211201]

Tagging this as a release, with most changes made such that clients
call services at the noirlab.edu domain. The old noao.edu domain
expired on Nov 29, 2021.

Also contains all enhancements, bugfixes, and package updates
accumulated since the last tagged release.

# Data Lab 2.17.1 release notes [20190701]

The following changes have been implemented:

## queryManager / queryClient:

- docstring updates

- `services()` function to list available services, e.g.

   ```python
   # List the available SIA services
   queryClient.services(svc_type="sia")

   # List the available USNO services, note the '%' matching metacharacter
   queryClient.services(name="usno%")
   ```

- New `resolve` mode for `services()` call, e.g.

   ```python
   # Get the serviceURL of the USNO-A2 table
   queryClient.services(name="usno/a2", mode="resolve")

   ```

- Async SQL changes, use of mydb tables

- Run queries written in SQL asynchronously, just like for ADQL queries, e.g.

   ```python
   #query = 'SELECT TOP 10 ra,dec,gmag,rmag,imag FROM smash_dr1.object' # AS BEFORE: ADQL
   query = 'SELECT ra,dec,gmag,rmag,imag FROM smash_dr1.object LIMIT 10' # NEW: SQL
   jobid = queryClient.query(query,async=True)
   queryClient.status(jobid)
   'COMPLETED'
   results = queryClient.results(jobid)
   ```

- disallow numeric table names in mydb

- New `mydb_index()` method, e.g.

   ```python
   # Index the table's "id" column
   queryClient.mydb_index('foo1', 'id')

   # Index and cluster the table by position
   queryClient.mydb_index('foo1', q3c='ra,dec', cluster=True)
   ```

- Bug fixes to dropping mydb tables

- Added non-default profile to `status()` call

- Sync timeout default changed to 300 sec

- remove trailing `/` from `set_svc_url()`

- Removed astropy dependency import

- Fixed POST calls to /queries call

## DALserver:

- Allow q3c/htm/healpix functions in adql

## storeManager / storeClient:

- various bugfixes with get/put from/to vospace

## authManager / authClient:

- docstring updates

- improved login error msgs, removed debug print

- made token optional for `logout()`

- remove trailing `/` from `set_svc_url()`

## datalab command line client

- all of the above updates (where they apply)
