# TubeFocus

A tiny browser extension that removes the parts of YouTube designed to keep you scrolling, and leaves the parts you actually use: search, subscriptions, and the video you came to watch.

- **Home feed**: hidden, so opening YouTube doesn't pull you into a rabbit hole
- **Shorts**: removed from the feed, search, sidebar and channel pages; Shorts links open as normal videos
- **Up next sidebar**: hidden while you watch
- **End screens**: no end cards or suggestion grid after a video
- **Comments**: optional
- **Notification badge**: hides the red unread count on the bell
- **Explore and Trending**: removed from the sidebar
- **Live chat**: optional
- **Grayscale mode**: makes YouTube black and white
- Every feature has its own switch. Changes apply instantly with no reload.
- No tracking, no network requests, no data collected. Settings sync through your browser account.

Works on Chrome, Edge, Brave, and Firefox (121+).

## Install

**Chrome / Edge / Brave**
1. Download `tubefocus.zip` from the [latest release](../../releases/latest) and unzip it (or clone this repo).
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the folder.

**Firefox**
1. Download `tubefocus.zip` from the latest release.
2. Open `about:debugging#/runtime/this-firefox` and click **Load Temporary Add-on**.
3. Select `manifest.json` from the unzipped folder.

Temporary add-ons are removed when Firefox restarts. For a permanent install, publish to [addons.mozilla.org](https://addons.mozilla.org) (see below).

## Use it

Click the TubeFocus icon in your toolbar. Flip the switch at the top to pause everything, or toggle each feature on its own.

## How it works

`content.js` sets attributes on the `<html>` element based on your settings. `styles.css` hides elements only when those attributes are present. There's no scraping and no polling of the page, which keeps it fast and stops content from flashing before it's hidden.

## When YouTube changes its layout

YouTube changes its markup from time to time, which can make a selector stop matching. Every selector lives in [`styles.css`](styles.css), grouped by feature. If something reappears, [open an issue](../../issues) with a screenshot and the page URL, or send a pull request.

## Develop

No build step or dependencies. Edit the files, then click the reload icon on `chrome://extensions`.

To make a release zip:

```bash
./scripts/build.sh
```

To publish a release on GitHub, bump `version` in `manifest.json`, then:

```bash
git tag v1.1.0 && git push origin v1.1.0
```

The included GitHub Action builds `tubefocus.zip` and attaches it to a new release.

## Publish to the stores

- **Chrome Web Store**: upload `tubefocus.zip` in the [developer dashboard](https://chrome.google.com/webstore/devconsole) (one-time $5 fee).
- **Firefox Add-ons**: upload `tubefocus.zip` at [addons.mozilla.org/developers](https://addons.mozilla.org/developers/). Free.

## License

[MIT](LICENSE)
