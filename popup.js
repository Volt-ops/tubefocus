const api = typeof browser !== "undefined" ? browser : chrome;
const list = document.getElementById("options");
const master = document.getElementById("enabled");
const status = document.getElementById("status");

function render(settings) {
  master.checked = settings.enabled;
  document.body.classList.toggle("paused", !settings.enabled);
  status.textContent = settings.enabled ? "Distractions hidden" : "Paused. YouTube looks normal";
  for (const opt of TF_OPTIONS) {
    const box = document.getElementById(opt.key);
    if (box) box.checked = !!settings[opt.key];
  }
}

function build() {
  for (const opt of TF_OPTIONS) {
    const row = document.createElement("label");
    row.className = "row";
    row.innerHTML = `
      <span class="text"><div class="title"></div><div class="desc"></div></span>
      <span class="switch"><input type="checkbox"><span class="track"></span></span>`;
    row.querySelector(".title").textContent = opt.title;
    row.querySelector(".desc").textContent = opt.desc;
    const input = row.querySelector("input");
    input.id = opt.key;
    input.addEventListener("change", () => api.storage.sync.set({ [opt.key]: input.checked }));
    list.appendChild(row);
  }
}

master.addEventListener("change", () => api.storage.sync.set({ enabled: master.checked }));
build();
api.storage.sync.get(TF_DEFAULTS).then(render);
api.storage.onChanged.addListener(() => api.storage.sync.get(TF_DEFAULTS).then(render));
