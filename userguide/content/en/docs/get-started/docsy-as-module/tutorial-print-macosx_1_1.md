# How to directly print to your ReMarkable on Mac

This tuorial wil show you how to leverage [rmapi](https://github.com/juruen/rmapi) and `Automator` to print
 to your ReMarkable tablet from your Mac using the Cloud API.

This way you won't need to take the extra step of using the desktop app.

You can see a demo of it [here](https://youtu.be/gOGTYI15VxY).

*Warning*: If you installed _rmapi_ before (October 1, 2018), you will need to install the latest version,
otherwise _rmapi_ will fail to authenticate after the changes in the server API that were introduced in September 28, 2018.

# Steps

## Open a terminal to download `rmapi`

Use `terminal` or `iterm` to get a terminal to run commands from it.

Download `rmapi` with the following command:

```bash
curl -L  https://github.com/juruen/rmapi/releases/download/v0.0.25/rmapi-macosx.zip -o rmapi.zip
```

Alternatively, you can build it from sources.

## Unzip `rmapi.zip`

Unzip the downloaded file:

```bash
unzip rmapi.zip
```

## Run `rmapi` for first time

You need to run `rmapi` once to create the device and user token.

Run it with:

```bash
./rmapi
```

The first time you run it, it will ask you to go to `https://my.remarkable.com/` to enter a new activation code.

You will see a prompt like this where you just need to introduce the activation code.

```bash
Enter one-time code (go to https://my.remarkable.com/device/desktop/connect):
```

If everything goes OK, you wil have access to the shell:

```bash
ReMarkable Cloud API Shell
[/]>
```

You don't need to interact with it, if you don't need to, you can type `exit` and press return to leave it.

```bash
ReMarkable Cloud API Shell
[/]>exit
```

If you are curious about the shell functionality, you can type `help` to see the available commands.

## Write down where `rmapi` is installed

If you haven't moved the file anywhere else, it will be in `/Users/YOUR_USER_NAME/rmapi`.

It is good practice to have it copied in other directory, but for simplicity, we don't do that here.


## Create `Automator` script

Run the `Automator` app and create a   new `Print Plugin` document as shown below:

![Automator I](create-print-plugin.png)

Select a `Run Shell Script` action:

![Automator II](run-shell-script-1.png)

Change `Pass input` from `to stdin` to `as arguments` and type in the following content:

```
for f in "$@"
do
	/Users/javier/rmapi put "$f" 
done
```

Please, note that you will have to adjust your `/Users/javier/rmapi` path to match your user or whatever path you have choosen.


![Automator III](run-shell-script-2.png)

Go to file and save your plugin as `Print to ReMarkable`.

## Use it

Go to any application that supports printing and open the print dialog. Note that `Chrome` is slightly different because it has its own print dialog. From `Chrome` system print dialog can be triggered with ⌘+option+P.

In the bottom-left corner there's a `PDF` menu that you can click, and one of the options you should see is `Print to ReMarkable`. If you click it, you should see your document uploaded to your tablet in  a few seconds.

![Print Dialog](print-dialog.png)
