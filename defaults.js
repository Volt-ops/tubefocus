// Shared by the content script and the popup.
// `key` is the storage key, `attr` is the attribute set on <html> that styles.css reacts to.
const TF_OPTIONS = [
  { key: "hideHome",     attr: "data-tf-home",     title: "Home feed",         desc: "Hide recommended videos and filter chips on the home page." },
  { key: "hideShorts",   attr: "data-tf-shorts",   title: "Shorts",            desc: "Remove Shorts from the feed, search, sidebar and channels." },
  { key: "hideRelated",  attr: "data-tf-related",  title: "Up next sidebar",   desc: "Hide suggested videos beside the one you're watching." },
  { key: "hideComments", attr: "data-tf-comments", title: "Comments",          desc: "Hide the comment section under videos." },
  { key: "hideEndCards", attr: "data-tf-endcards", title: "End screens",       desc: "Hide end cards and the suggestion grid after a video." },
  { key: "hideNotifications", attr: "data-tf-notifs", title: "Notification badge", desc: "Hide the red unread count on the bell icon." },
  { key: "hideExplore",  attr: "data-tf-explore",  title: "Explore and Trending", desc: "Remove Trending, Explore and similar links from the sidebar." },
  { key: "hideLiveChat", attr: "data-tf-livechat", title: "Live chat",         desc: "Hide live chat and chat replay beside streams." },
  { key: "grayscale",    attr: "data-tf-gray",     title: "Grayscale mode",    desc: "Show YouTube in black and white to make it less tempting." },
  { key: "redirectShorts", attr: null,             title: "Open Shorts as normal videos", desc: "Shorts links play in the regular player instead." }
];

const TF_DEFAULTS = {
  enabled: true,
  hideHome: true,
  hideShorts: true,
  hideRelated: true,
  hideComments: false,
  hideEndCards: true,
  hideNotifications: true,
  hideExplore: true,
  hideLiveChat: false,
  grayscale: false,
  redirectShorts: true
};
