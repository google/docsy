![](https://c1.staticflickr.com/1/822/26082076957_5ff0796a99_o.png) digiKam - Professional Photo Management with the Power of Open Source

[![Phabricator Build Status](https://build.kde.org/job/Extragear/job/digikam/job/kf5-qt5%20SUSEQt5.10/badge/icon)](https://build.kde.org/job/Extragear/job/digikam/job/kf5-qt5%20SUSEQt5.10/)

If you are reading this on Github, be aware that this is just a mirror. Our real code repository [is located here](https://invent.kde.org/kde/digikam)

Developers, if you want to contribute, see the online [API documentation here](https://www.digikam.org/api)

# About

digiKam is an advanced open-source digital photo management application that runs on Linux, Windows, and MacOS.
The application provides a comprehensive set of tools for importing, managing, editing, and sharing photos and RAW files.

[![](https://c1.staticflickr.com/5/4216/35354951072_a034561b5e_c.jpg "Albums View and Image Editor")](https://www.flickr.com/photos/digikam/35354951072/)

You can use digiKam's import capabilities to easily transfer photos, RAW files, and videos directly from your camera
and external storage devices (SD cards, USB disks, etc.). The application allows you to configure import settings
and rules that process and organize imported items on-the-fly.

[![](https://c1.staticflickr.com/1/703/32558229094_3d7ec01d3a_c.jpg "Map View displaying rated items and Batch Queue Manager in action")](https://www.flickr.com/photos/digikam/32558229094)

digiKam organizes photos, RAW files, and videos into albums. But the application also features powerful tagging
tools that allow you to assign tags, ratings, and labels to photos and raw files. You can then use filtering
functionality to quickly find items that match specific criteria.

[![](https://c2.staticflickr.com/4/3726/32557269024_ae870b0466_c.jpg "Search items by date rage and Geolocation editor")](https://www.flickr.com/photos/digikam/32557269024)

In addition to filtering functionality, digiKam features powerful searching capabilities that let you search
the photo library by a wide range of criteria. You can search photos by tags, labels, rating, data, location,
and even specific EXIF, IPTC, or XMP metadata.

[![](https://c1.staticflickr.com/1/306/32217007615_db6f9d116a_c.jpg "Search by Tags with preview mode and Metadata Editor in action")](https://www.flickr.com/photos/digikam/32217007615)

You can also combine several criteria for more advanced searches. digiKam rely on Exiv2 library to handle metadata
tag contents from files to populate the photo library.

[![](https://c1.staticflickr.com/5/4795/40743725771_0b69dca743_c.jpg "Advanced search tool and video file result played as preview")](https://www.flickr.com/photos/digikam/40743725771)

digiKam can handle RAW files, and the application uses the excellent LibRaw library for decoding raw files.
The library is actively maintained and regularly updated to include support for the latest camera models.

[![](https://c1.staticflickr.com/1/300/31407487553_a14abd0418_c.jpg "Find by items similarity and Light Table in cation to compare side by side")](https://www.flickr.com/photos/digikam/31407487553)

The application provides a comprehensive set of editing tools. This includes basic tools for adjusting colors,
cropping, and sharpening as well as advanced tools for, curves adjustment, panorama stitching, and much more.
A special tool based on Lensfun library permit to apply lens corrections automatically on images.

[![](https://c1.staticflickr.com/5/4649/40430534662_097b46a270_c.jpg "Panorama tool stiching photo")](https://www.flickr.com/photos/digikam/40474079731)

Extended functionality in digiKam is implemented via a set of tools, dedicated especially to import and export
contents to remote web-services.

digiKam is based in part on the work of the Independent JPEG Group.

# Authors

See [AUTHORS](AUTHORS) file for details.

# Related URLs

http://www.digikam.org

# Contact

If you have questions, comments, suggestions to make do email at :

digikam-users@kde.org

If you want contribute to digiKam developments do email at :

digikam-devel@kde.org

IRC channel from irc.freenode.org server: [#digikam](http://webchat.freenode.net/?channels=digikam)

# Bug reports

IMPORTANT : the bug reports and wishlist entries are hosted by the Bugzilla
system which can be reached from the standard Help menu of digiKam.
A mail will automatically be sent to the digiKam development mailing list.
There is no need to contact directly the digiKam mailing list for a bug report
or a devel wish.

The current bugs and devel wishes reported to the bugzilla servers can be seen at these urls :

* [digiKam](http://bugs.kde.org/buglist.cgi?product=digikam&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED)

Extra Bugzilla servers for shared libs used by digiKam :

* [LibRaw library](https://github.com/LibRaw/LibRaw/issues)
* [Lensfun library](https://github.com/lensfun/lensfun/issues)
* [GPhoto2 library](http://gphoto.org/bugs)
* [Exiv2 library](https://github.com/Exiv2/exiv2/issues)
* [QtAV library](https://github.com/wang-bin/QtAV/issues)

# External Dependencies

See the [online Dependencies list](https://www.digikam.org/api/index.html#externaldeps) for details.

# Cmake Configuration

See the [online Configuration rules](https://www.digikam.org/api/index.html#cmakeoptions) for details.

# Installation

In order to compile, just use something like that:

    export VERBOSE=1
    export QTDIR=/usr/lib/qt5
    export PATH=$QTDIR/bin:$PATH
    cmake .
    make
    sudo make install

Usual CMake options :

* `-DCMAKE_INSTALL_PREFIX` : decide where the program will be install on your computer.
* `-DCMAKE_BUILD_TYPE`     : decide which type of build you want. You can chose between:
  * `debugfull`.     : for hacking. Include all debug information.
  * `debug`.
  * `profile`.
  * `relwithdebinfo` : default. use gcc `-O2` `-g` options.
  * `release`        : generate stripped and optimized bin files. For packaging.

Compared to old autoconf options:

* `cmake . -DCMAKE_BUILD_TYPE=debugfull` is equivalent to `./configure --enable-debug=full`
* `cmake . -DCMAKE_INSTALL_PREFIX=/usr`  is equivalent to `./configure --prefix=/usr`

More details can be found [at this url](http://techbase.kde.org/Development/Tutorials/CMake#Environment_Variables)

Note: To know KDE install path on your computer, use `kf5-config --prefix` command line like this (with full debug object enabled):

* `cmake . -DCMAKE_BUILD_TYPE=debugfull -DCMAKE_INSTALL_PREFIX=$(kf5-config --prefix)`

# Donate Money

If you love digiKam, you can help developers to buy new photo devices to test
and implement new features. Thanks in advance for your generous donations.

For more information, look [at this url](https://www.digikam.org/donate/)
