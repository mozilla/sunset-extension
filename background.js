/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// If your add-on used to have a browser action button, it makes sense to keep it and open the page
// when doing so.
//
// browser.browserAction.onClicked.addListener(async () => {
//  browser.tabs.create({ url: "/goodbye/sunset.html" });
// });

// Either way it makes sense to have the sunset page open on startup/update. This way users see the
// page often enough that they'd export their data and uninstall.
browser.tabs.create({ url: "/goodbye/sunset.html" });
