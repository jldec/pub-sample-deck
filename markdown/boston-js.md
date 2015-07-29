---- /boston-js ----
name: BostonJS

---- #cover ----

![](/images/water.jpg)
# pub-server demo
BostonJS meetup - July 30, 2015


---- #overview ----

# pub-server

- Static site generator (like Jekyll) with editor.
- Content lives in **markdown** fragments.
- Designs live in **handlebars** templates and CSS.
- Extensible - **npm** modules for designs and plugins.
- 100% javascript, MIT license, github.com/jldec.

---- #generator ----

## Generator

```js
var generator = u.extend(this,
{
  fragment$: {},    // map fragments by _href
  page$:     {}     // map pages by _href
})
generator.load = function load(cb) {
  require('./getsources')(opts, function(fragments) {
    generator.fragment$ = u.indexBy(fragments, '_href')
    var pages = require('./makepages')(...)
    generator.page$ = u.indexBy(pages, '_href')
  })
}
```

---- #generator-2 ----

## Generator contd.

```js
u.extend (generator, {
  redirect$:     {},
  template$:     {},
  findPage:      findPage,
  handlebars:    require('handlebars').create(),
} );
// generator mixins
require('./render' )(generator)
require('./helpers')(generator)
require('./update' )(generator)
require('./output' )(generator)
```

---- #server ----

## Server

```js
generator.load(function() {
  require('./server/watch-sources')(generator)
  require('express')()
  require('pub-serve-sockets')()
  require('pub-serve-sessions')()
  require('pub-serve-pages')()
  require('pub-serve-scripts')()
  require('pub-serve-statics')()
  require('pub-server-handle-errors')()
  server.http.listen(opts.port)
})
```

---- #editor ----

## Editor

```js
$.getJSON('/pub/_opts.json', function(opts) {
  var generator = require('pub-generator')(opts);
  var $edit = $('textarea.editor');
  ...
  $edit.on('keyup', function() {
    generator.updateFragmentText(
      editor.binding,
      $edit.val())
  })
})
```


---- #preview ----

## Preview

```js
generator.on('updatedText', function(href) {
  var fragment = generator.fragment$[href]
  var $html = $('[data-render-html="' + href + '"]')
  $html.html(generator.renderHtml(fragment))
})

generator.on('nav', function(href) {
  if (layoutChanged(oldpage, newpage))
    return updateLayout()  // uses data-render-layout
  updatePage()             // uses data-render-page
}
```
