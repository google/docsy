---
title: "Making GIFs"
---

Animated GIFs are an awesome way of showing of features that need a little more than just an image, either for marketing purposes or explaining a feature in more detail. This page holds all information on the entire process of creating a GIF.

## General

> The GIF format is popular because it works everywhere and has a no-fuss UI. – [Kornel](https://kornel.ski/efficient-gifs#sec44)

GIFs are used everywhere for a reason, but as you can read in the referenced article above, they are also expensive. Expensive in that a GIF can quickly become a big file, which takes longer to load. To create great looking GIFs that walk the line between file size and quality, some steps need be considered.

## Quick and Easy

The "quick and easy" process is for your everyday usage, where performance is not that important. It's the most efficient way of creating a GIF.

### Step 1

Show only what you need to. Not everything needs to be in there, its a glimpse at a single bug/feature. Keep the recorded area small and dedicated.

### Step 2

Use a dedicated app that instantly outputs a GIF, see [Tools - All in one](#all-in-one).

## Expert

The "expert" process is for those cases where performance is important. It takes a little longer, but can pay off for situations such as important blog posts, extremely big GIFs, and incredibly detailed GIFs.

### Step 1

Show only what you need to. Not everything needs to be in there, its a glimpse at a single bug/feature. Keep the recorded area small and dedicated.

### Step 2

> All my GIFs start as videos – [Andy Orsow](https://web.archive.org/web/20241224005349/https://www.invisionapp.com/inside-design/7-tips-for-designing-awesome-gifs/)

If you want to create professional GIFs, you want to start from a video file. This can give you expert control over the output if you need it (e.g. motion blur can add additional professionalism). Video files will in most cases be created from a screen recording software, details can be found in the [Tools Section](#tools)

### Step 3

Reduce the amount of colors visible. You can do this either be thinking beforehand what exactly you will capture or by limiting the amount of output colors exported in the resulting GIF (see options [gifify](#gifify-cli) ). Check your result to see if it fits your needs.

Another step could be to drop duplicate frames by manually searching through all frames. For more information on this, look [here](https://web.archive.org/web/20241224005349/https://www.invisionapp.com/inside-design/7-tips-for-designing-awesome-gifs/). This additional step can take a lot of time. As with anything: "Only use it if you need to".

### Step 4

Try to go for a minimum of 15 fps and see if the result is good enough with your "compress", "speed", and "resolution" settings.

## Tools

There are many different tools to record your screen or to create GIFs. Use whichever tool you are comfortable with, but remember: "In order to create great looking GIFs that walk the line between file size and quality a certain control over each step of [the expert process](#expert) is preferred".

### All in one

A few things are important in this section:

- Screen region support (ability to create a GIF off a small portion of the screen)
- Cursor support (ability to include your cursor in the gif)
- FPS support (ability to control the amount of frames per second of the outputted GIF, important if you want to show some interaction detail)
- Local saving of GIF (uploading to a server should only be an option)

#### Gifox (macOS)

[Gifox](https://gifox.app/) is the absolute best option here, although a paid app, its reasonably priced ($14.99). It has support for all of the features, shortcuts, and then some.

Worthy of mentioning:

- [Kap](https://getkap.co/) (free and open source!)
- [Giphy capture](https://apps.apple.com/us/app/giphy-capture-the-gif-maker/id668208984?mt=12) (free and a great option!)
- [Licecap](https://www.cockos.com/licecap/) (free, but limited options for output, results can have bad colors)
- [ScreenToGif](https://www.screentogif.com/) (Windows, free and open source with powerful editor)

#### FFCast + FFmpeg (Linux)

[FFCast](https://github.com/ropery/FFcast) is a command line tool that wraps around ffmpeg to capture screen regions in order to record it or capture it. Optionally this could be piped into gifify.

### Screen Recording

#### Shift-Command-5 (macOS)

On macOS Mojave and up, press [Shift-Command (⌘)-5](https://support.apple.com/en-us/102618) to bring up controls to record
the entire screen or a portion of the screen.

#### QuickTime (macOS)

On every Mac, QuickTime has already been installed. It features a nice screen record option and even has basic trim and splitting functions in the *edit* menu! Perfect for creating those [video files](#step-1).

Worthy of mentioning:

- [Screeny](https://apps.apple.com/us/app/screeny/id440991524?mt=12) (free for now)
- [Gif Brewery](https://gifdb.com/blog/gifbrewery.html) (not free)
- [ffscreencast](https://github.com/cytopia/ffscreencast) (CLI tool, only capture the whole screen)
- [CloudApp](https://zight.com/) (free with a paid option)

#### Camstudio (Windows)

[Camstudio](https://camstudio.org/) is a free tool. Not yet tested...

#### FFCast + FFmpeg (Linux)

[FFCast](https://github.com/ropery/FFcast) is a command line tool that wraps around ffmpeg to capture screen regions in order to record it or capture it. Optionally this could be piped into gifify.

### Converting video to Gif

#### Gifify (CLI)

[Gifify](https://github.com/vvo/gifify) is a command line tool and gives you the most complete set of options in order to convert your video files to GIFs. It is probably the best free tool available, with the most control.

Example command:

`gifify input.mov -o output.gif --resize 960:-1 --compress 0 --colors 50 --speed 1.05 --fps 15`

Worthy of mentioning:

- [Drop to Gif](https://mortenjust.github.io/droptogif/) (Great free open source option to just convert on macOS with a GUI!)
- [Screengif](https://github.com/dergachev/screengif) (CLI similar to gifify)
- [Gif Brewery](https://gifdb.com/blog/gifbrewery.html) (macOS, not free)

#### Convert video to GIF online

- [EZGif](https://ezgif.com/video-to-gif) (Pretty good results and provides some settings)
- [Giphy Gifmaker](https://giphy.com/create/gifmaker) (You can keep your GIFs private if you have an account. Otherwise: "all of your GIF are belong to GIPHY")
- [imgur Video to GIF](https://imgur.com/gallery/how-to-use-imgur-video-to-gif-tool-N1j3YAD) (Create a GIF from hundreds of popular video sites. Use Download to get a GIF or link for .gifv format)

### Converting screenshots to Gif

When you have a series of screenshots as png files, you can use [ImageMagick](/handbook/tools-and-tips/#imagemagick) to convert them to a Gif file. ImageMagick also allows to [resize images](/handbook/tools-and-tips/#resizing-images).

```console
convert -delay 50 -loop 0 *.png output.gif
```

When you upload the Gif file to social media, ensure that the source image resolution is smaller than 2048x2048.

### Resizing Gifs

The Gif resolution or file size may need resizing for social media uploads, or blog post integrations. Gifsicle supports resizing Gifs in one step. The following example changes the Gif width to 2000px:

```console
gifsicle --resize 2000x original.gif > original_resized.gif
```

## Relevant links

- [Product Handbook](/handbook/product/)
