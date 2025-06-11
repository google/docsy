---
title: Debugging LDAP
category: Self-managed
description: "Support Engineering workflow describing how to debug LDAP problems"
---

##### Notes

This assumes an omnibus installation.

---

See LDAP troubleshooting in docs - [View Docs](https://docs.gitlab.com/administration/auth/ldap/ldap-troubleshooting/)

**Testing the LDAP server**

1. Install `ldapsearch`

```bash
# Ubuntu
apt-get install ldap-utils
# CentOS
yum install openldap-clients
```

1. Check LDAP settings

Edit the following values to match the LDAP configuration in `gitlab.rb`

**Example LDAP configuration**

```bash
# cat /etc/gitlab/gitlab.rb | grep -A 24 ldap_servers
gitlab_rails['ldap_servers'] = YAML.load <<-'EOS' # remember to close this block with 'EOS' below
   main: # 'main' is the GitLab 'provider ID' of this LDAP server
     label: 'LDAP'
     host: '127.0.0.1'
     port: 389
     uid: 'uid'
     method: 'plain' # "tls" or "ssl" or "plain"
     bind_dn: 'cn=admin,dc=ldap-testing,dc=mrchris,dc=me'
     password: 'Password1'
     active_directory: true
     allow_username_or_email_login: false
     block_auto_created_users: false
     base: 'dc=ldap-testing,dc=mrchris,dc=me'
     user_filter: ''
     attributes:
       username: ['uid', 'userid', 'sAMAccountName']
       email:    ['mail', 'email', 'userPrincipalName']
       name:       'cn'
       first_name: 'givenName'
       last_name:  'sn'
     group_base: 'ou=groups,dc=ldap-testing,dc=mrchris,dc=me'
     admin_group: 'gitlab_admin'
EOS
```

**LDAP search switches**

- **-D** = Bind DN
  - GitLab config value: `bind_dn: 'cn=admin,dc=ldap-testing,dc=mrchris,dc=me'`

- **-b** = Search base
  - GitLab config value: `base: 'dc=ldap-testing,dc=mrchris,dc=me'`

- **-w** = Password
  - GitLab config value: `password: 'Password1'`

- **-w** = Port & **-h** = Host
  - GitLab config value: `port: 389`
  - GitLab config value: `host: 127.0.0.1`

- **-s** = Search scope
  - GitLab config value: None
  - Default is **sub**
  - Using `sub "(objectclass=*)` will return "all" objects

**Get all LDAP objects for baseDN**

```bash
ldapsearch -D "cn=admin,dc=ldap-testing,dc=mrchris,dc=me" \
-w Password -p 389 -h 127.0.0.1 \
-b "dc=ldap-testing,dc=mrchris,dc=me" -s sub "(objectclass=*)"
```

#### LDAP Error messages (`production.log`)

##### Could not find member DNs for LDAP group

```text
Could not find member DNs for LDAP group #<Net::LDAP::Entry:0x00000007220388
```

This usually indicates an issue with the `uid` configuration value in `gitlab.rb`

When running `ldapsearch` you can see what attribute is used for the LDAP username. In the below case the username attribute is `uid`. Ensure `uid: 'uid'` in the configuration. The default Microsoft Active Directory username value is `sAMAccountName`

```text
dn: cn=user test,ou=people,dc=ldap-testing,dc=mrchris,dc=me
sn: test
givenName: user
uid: test
cn: user test
```

##### Cannot find LDAP group with CN 'GROUP_NAME'. Skipping

This indicates the admin_group name was not found `admin_group: 'gitlab_admin'`. Ensure the group exists in AD and is under the `group_base`

##### LDAP search error: Invalid DN Syntax

This indicates a syntax error with one of the configured DNs. Check the following values, ensure they're the full DN.

- `group_base`
- `bind_dn`
- `base`

**Testing LDAP** - valid for 8.10 >

1. Launch the rails console

    ```ruby
    gitlab-rails c
    ```

1. Update the logger level

    ```ruby
    Rails.logger.level = 0
    ```

1. Perform a group sync

    ```ruby
    LdapGroupSyncWorker.new.perform
    ```

1. Perform a user sync

    ```ruby
    LdapSyncWorker.new.perform
    ```

1. All commands:

    ```ruby
    gitlab-rails c
    Rails.logger.level = 0
    LdapGroupSyncWorker.new.perform
    LdapSyncWorker.new.perform
    ```

1. Check the console for sync output

**Removing exclusive lease** - Testing (valid for 8.6 to 8.9)

This is used to force an instant sync of LDAP for testing purposes.

1. Edit any LDAP settings required
1. Edit `vi /opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/ldap/group_sync.rb`
1. Comment out the exclusive lease section *(lines may differ in releases)* - [View code](https://gitlab.com/gitlab-org/gitlab-ee/blob/5c8b211c7b8746ec6d5697e495ddb68f2ac08dd7/lib/gitlab/ldap/group_sync.rb#L70-73)
1. Run a reconfigure `sudo gitlab-ctl reconfigure` **This will restart GitLab**
1. Launch GitLab Rails console `gitlab-rails console`
1. Execute `Gitlab::LDAP::GroupSync.execute`
1. LDAP sync will now run
1. **Revert changes to the `group_sync.rb` file when finished**
 `/opt/gitlab/embedded/service/gitlab-rails/lib/gitlab/ldap/group_sync.rb`

**Additional testing**

1. Start the rails console

    ```sh
    sudo gitlab-rails console
    ```

1. Create a new adapter instance

    ```ruby
    adapter = ::Gitlab::Auth::LDAP::Adapter.new('ldapmain')
    ```

1. Find a group by common name. Replace **UsersLDAPGroup** with the common name to search.

   1. **GitLab 8.11 >**

        ```ruby
        group =  EE::Gitlab::Auth:Ldap::Group.find_by_cn('UsersLDAPGroup', adapter)
        ```

   1. **GitLab < 8.10**

        ```ruby
        group =  Gitlab::LDAP::Group.find_by_cn('UsersLDAPGroup', adapter)
        ```

1. Check `member_dns`

    ```ruby
    group.member_dns
    ```
