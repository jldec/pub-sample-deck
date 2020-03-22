(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function(generator) {

  var u = generator.util;
  var opts = generator.opts;
  var sources = opts.sources;
  var hb = generator.handlebars;
  var renderImg = generator.renderer.image;

  // apply page-mutations to pages from non-package sources
  generator.on('pages-ready', function() {

    u.each(sources, function(source) {
      if (source._pkg) return;

      u.each(generator.sourcePage$[source.name], function(page) {

        // if no text below markdown heading use 'shout' class
        u.each(page._fragments, function(fragment) {
          if (fragment['background-image']) {
            fragment.class = (fragment.class || '') + ' background-image';
          }
          if (0 === u.trim(fragment._txt.replace(/^.*$/m,'')).length) {
            fragment.class = (fragment.class || '') + ' shout';
          }
        });

        // if first slide contains an image, use 'cover' class
        var first = page._fragments && page._fragments[0];
        if (first && /^\!\[/m.test(first._txt)) {
          page._fragments[0].class = (page._fragments[0].class || '') + ' cover';
        }

      });
    });
  });

  // re-initialize shower except when only html is updated - runs in editor
  generator.on('update-view', function(path, query, hash, window, $el) {
    if ($el.attr('data-render-html')) return;
    window.$('.live-region').remove();
    window.shower.slideList = [];
    window.shower.init();
    window.shower.run();
  });

  hb.registerHelper('background-image', function(frame) {
    var bgImg = this['background-image'];
    if (bgImg) return generator.renderImage(hb.renderOpts({ href:bgImg, title: 'full=1'}));
  });

  hb.registerHelper('menu', function(frame) {
    return this.menu || '=';
  });

}

},{}],2:[function(require,module,exports){
require("/Users/jleschner/pub/sample-deck/node_modules/pub-theme-shower-ribbon/plugins/generator-plugin.js")(generator);
require("/Users/jleschner/pub/server/node_modules/pub-pkg-seo/generator-plugin.js")(generator);

},{"/Users/jleschner/pub/sample-deck/node_modules/pub-theme-shower-ribbon/plugins/generator-plugin.js":1,"/Users/jleschner/pub/server/node_modules/pub-pkg-seo/generator-plugin.js":3}],3:[function(require,module,exports){
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "u", "argsIgnorePattern": "frame", }]*/

module.exports = function(generator) {
  var u = generator.util;
  var opts = generator.opts;
  var log = opts.log;
  var hb = generator.handlebars;

  if (!opts.appUrl || /\/\/localhost/.test(opts.appUrl)) {
    log('WARNING: pub-pkg-seo sitemap using appUrl "%s"', opts.appUrl);
  }

  hb.registerHelper('metaSeo', function(frame) {
    if (opts.noRobots) {
      return '<meta name="robots" content="noindex, nofollow">';
    }
  });

};

},{}]},{},[2]);
