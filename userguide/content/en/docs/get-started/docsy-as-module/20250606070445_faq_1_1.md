## FAQ

__How do I allow specific IPs to not be blocked?__

Say you are using AWS to replay your traffic using log analytics. When you have the block clouds feature enabled, all the requests from your AWS would be blocked. However, you can specifically allow your own IPs to be allowed and not blocked by editing your `config/config.ini.php` file and configuring a list of allowed IP ranges like this:

```
[TrackingSpamPrevention]
iprange_allowlist[] = "127.0.0.1/32"
iprange_allowlist[] = "192.168.0.0/21"
```

Make sure to enter a valid IP range. 

__What happens when it fails to synchronise public IPs from cloud providers?__

Any error is currently ignored and if it does not synchronise successfully, then the IP for the provider that failed are not synced.

To be aware when such an error happens you can enable the following setting:

```
[TrackingSpamPrevention]
block_cloud_sync_throw_exception_on_error = 1
```

It is disabled by default as it could stop other scheduled tasks from being executed.

__How can I block specific organisations from being tracked?__

This can be useful if you are receiving spam requests from a provider that isn't automatically detected yet by this plugin.

For this to work the "Block cloud provider" setting must be enabled and a geolocation provider must be enabled.

You can block any organisation (if the geolocation database you are using includes this information) like this:

```
[TrackingSpamPrevention]
block_geoip_organisations[] = "ExampleOrg"
block_geoip_organisations[] = "another example"
```

Alternatively, you can execute a command to block a new organisation like this:

```bash
./console trackingspamprevention:block-geo-ip-organisation --organisation-name="Example"
```

Each organisation will be compared lower case and the organisation only needs to contain the configured value, it does not need to match it exactly.

You can find out the organisation name for an IP address by visiting the website of your geolocation database and using their demo tool.
