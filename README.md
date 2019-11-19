# What this repo does

This repo allows us to rebrand Discovery without booting into the Discovery environment. It works by:

- Setting up a local server on your machine, hosting our Discovery rebrand CSS file
- Appending the rebrand CSS, and Roboto Mono files to the bottom of the `<head>` on every page that matches `test.discovery.nationalarchives.gov.uk`

### To setup the sass compiler/css server

- Run `npm i -g http-server` as this will host the CSS file
- Run `npm i -g grunt` as this will watch for changes and build your SASS
- Run `npm i -g sass`
- Run `npm i` in this project
- Run `http-server -p 3000 --cors` in this project
- In another terminal run `grunt watch` in this project

### To setup the tampermonkey script which injects the CSS

- Install [tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
- Click on tampermonkey at the top right of Chrome then click new user script
- Paste this as the script:

```
// ==UserScript==
// @name         TNA Discovery Rebrand Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://cdev-discovery.nationalarchives.gov.uk/
// @match        https://cdev-discovery.nationalarchives.gov.uk/*
// @match        https://test-discovery.nationalarchives.gov.uk
// @match        https://test-discovery.nationalarchives.gov.uk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('Rebrand');

    let script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = 'http://127.0.0.1:3000/classAdder.js';
    document.body.appendChild(script);

        let head = document.getElementsByTagName('HEAD')[0];

        let css = document.createElement('link');

        css.rel = 'stylesheet';

        css.type = 'text/css';

        css.href = 'http://127.0.0.1:3000/rebrand.css';

        let font = document.createElement('link');

        font.rel = 'stylesheet'
        font.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap'

        head.appendChild(css);
        head.appendChild(font);
        
})();
```

- Hit save
- You only need to do this once


## If a view isn't namespaced

If there is a page without a unique class and you need to target something specific, we will add a namespaced class to it when we implement this CSS into the Discovery Environment. To mimic adding a namespaced class to a page, see the classAdder.js file to temporarily add a namespaced class to the pages.

## Working remotely

If you are working remotely, you can edit the tampermonkey script so the `@match` lines point to live discovery instead of TEST. However, you will not be able to make test orders.
