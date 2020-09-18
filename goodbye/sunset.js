/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

let manifest = browser.runtime.getManifest();

// Localization
document.getElementById("discontinue-text").textContent = browser.i18n.getMessage("discontinue-text", manifest.name);
document.getElementById("discontinue-header").textContent = browser.i18n.getMessage("discontinue-header", manifest.name);
document.getElementById("replacement-text").textContent = browser.i18n.getMessage("replacement-text");
document.getElementById("export").textContent = browser.i18n.getMessage("export-button");
document.getElementById("uninstall").textContent = browser.i18n.getMessage("uninstall-button", manifest.name);
document.title = browser.i18n.getMessage("title", manifest.name);

// Fill the replacement extensions with links from AMO. Please note that AMO policy will only allow
// linking to add-ons listed on addons.mozilla.org.
let template = document.getElementById("addon");
document.querySelectorAll("#replacements li[data-slug]").forEach(async (node) => {
  let response = await fetch("https://addons.mozilla.org/api/v4/addons/addon/" + node.dataset.slug);
  let addon = await response.json();
  let name = addon.name[navigator.language] || addon.name[addon.default_locale];

  let clone = template.content.cloneNode(true);
  clone.querySelector("img").src = addon.icon_url;
  clone.querySelector("span").textContent = name;
  clone.querySelector("a").href = addon.url;
  node.parentNode.replaceChild(clone, node);
});

// When the user clicks uninstall, prompt them to confirm and uninstall the add-on.
document.getElementById("uninstall").addEventListener("click", () => {
  let name = browser.runtime.getManifest().name;
  browser.management.uninstallSelf({
    showConfirmDialog: true,
    dialogMessage: `You are about to uninstall ${name}. Please make sure you export your data before uninstalling.\n`
  });
});

// Set up export. You'll likely want to replace this with your own product specific export function.
// This code will simply export everything from browser.storage.local to a json file and offer that
// to be downloaded.
let exportbutton = document.getElementById("export");
let filename = manifest.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_").replace(/_{2,}/g, "_") + ".json";
exportbutton.setAttribute("download", filename);
browser.storage.local.get(null).then(value => {
  let blob = new Blob([JSON.stringify(value, null, 2)], { type: "application/json" });
  exportbutton.setAttribute("href", URL.createObjectURL(blob));
});

// Optionally set an uninstall URL if you'd like to do a survey or point them to your website.
// Preferably though you can just show them all the info they need from within this last version.
//
// browser.runtime.setUninstallURL("https://example.com");
