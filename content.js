(() => {
  const root = document.documentElement;
  const api = typeof browser !== "undefined" ? browser : chrome;
  let settings = { ...TF_DEFAULTS };

  function apply() {
    for (const opt of TF_OPTIONS) {
      if (!opt.attr) continue;
      if (settings.enabled && settings[opt.key]) root.setAttribute(opt.attr, "");
      else root.removeAttribute(opt.attr);
    }
  }

  function maybeRedirectShorts() {
    if (!settings.enabled || !settings.redirectShorts) return;
    const m = location.pathname.match(/^\/shorts\/([\w-]{6,})/);
    if (m) location.replace(`/watch?v=${m[1]}`);
  }

  function update() {
    apply();
    maybeRedirectShorts();
  }

  // Apply defaults immediately so nothing flashes, then load saved settings.
  apply();
  api.storage.sync.get(TF_DEFAULTS).then(load);

  function load(items) {
    settings = { ...TF_DEFAULTS, ...items };
    update();
  }

  // Live updates from the popup, no reload needed.
  api.storage.onChanged.addListener((changes, area) => {
    if (area !== "sync") return;
    for (const k in changes) settings[k] = changes[k].newValue;
    update();
  });

  // YouTube navigates without reloading, so re-check on every navigation.
  document.addEventListener("yt-navigate-finish", maybeRedirectShorts);
  window.addEventListener("popstate", maybeRedirectShorts);
  let lastPath = location.pathname;
  setInterval(() => {
    if (location.pathname !== lastPath) {
      lastPath = location.pathname;
      maybeRedirectShorts();
    }
  }, 500);
})();
