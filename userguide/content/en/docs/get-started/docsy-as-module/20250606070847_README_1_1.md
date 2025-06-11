
# DOCUMENTATION

A VOSpace capability is an arbitrary piece of a code that can be run when a file is put into a directory. For example, it could parse the file and ingest its contents into a database or run some data reduction software, such as sextractor, to produce a catalog.

## ACTIVATING/DEACTIVATING A CAPABILITY

Capabilities are "turned on" for a VOSpace directory by placing a
capability configuration file in the directory. The datalab command
"addcapability" manages this. The capability can be turned off by
removing the configuration file.

The datalab command only knows about the capabilities whose
configuration files are in the caps subdirectory as part of the
datalab installation.

## CONFIGURATION FILE

A VOSpace capability configuration file consists of a number of keyword-value parameters. The two that are required are:

 * name: the name of the capability which is used to identify it to the datalab command
 * version: a version number for the capability

The name of the configuration file must be <name>_cap.conf where
<name> is the value of the 'name' parameter in the configuration file.

There is also a special capability which will execute an arbitrary
code snippet defined in the capability configuration file. The name of
the capability must be set to "runner" for this. The file must contain
a third parameter:

* cmd: a command line statement to be executed as the capability

The 'cmd' parameter is a templated string enclosed by braces. Variables are identified by "$" signs and are replaced by the declared values for those variables in the configuration file.

    1. Example Usage.
    A capability to write a log entry when a file is placed in a directory could be achieved with the following configuration file:

    name=runner
    version=1
    cmd={echo `date` $message >> logfile}
    message="New file added"
    
