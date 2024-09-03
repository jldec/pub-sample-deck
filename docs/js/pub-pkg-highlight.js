/*
 * pub-pkg-highlight.js
 *
 * browserify entry point - mainly to initialize highlight.js
 * also supports pub-generator 'update-view' events
 *
 * Copyright (c) 2015-2024 Jürgen Leschner - github.com/jldec - MIT license
 *
 * for highlight.js please see included static/js/LICENSE-HIGHLIGHT
 * or visit https://github.com/highlightjs/highlight.js
 */

hljs.highlightAll();

window.onGenerator = function(generator) {
  generator.on('update-view', hljs.highlightAll);
};
