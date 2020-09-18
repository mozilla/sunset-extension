Sunset
======

This is a template extension you can use in case you no longer plan to maintain your add-on and
would like to offer users a way to export their data before it stops working. The add-on simply
opens a tab such as this one:

![Screenshot of a browser tab with a mountains and sunset background. Headline saying "it's time to go", some descriptive text, and suggested replacement add-ons](https://github.com/kewisch/sunset-extension/blob/assets/screenshot.png?raw=1)

Configuration
-------------

* Update the `manifest.json` with information from your add-on.
  * Don't copy your whole manifest, you don't need all the permissions for example.
  * If you previously had a browser action button uncomment those lines so users can click on the button they know.
* Edit the HTML page to match your add-on's style. A few recommendations on what to keep:
  * **Let users know what is happening**. Your add-on is being discontinued. Acknowledge users' frustration about this.
  * **Talk about the benefits**. More time to work on your core product? Not shipping the add-on more secure? There must be something positive in it.
  * **Give users an alternative**. Users liked your functionality. They might want a different add-on that does something similar, do you have a suggestion? This should be an add-on listed on AMO. We won't accept links to self-hosted add-ons or insisting to install a different browser.
* Adjust the copy in `_locales/en/messages.json`, and translate as necessary.
