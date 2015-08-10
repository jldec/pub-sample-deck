---- / ----
name: Sample Deck #1

# Sample Deck #1
Byline

---- ----

## Title
![](/images/ice.jpg)
Use the nav menu to switch between presentations


---- ----
background-image: /images/water.jpg

## Quote with background image

> The overwhelming majority of theories are rejected
because they contain bad explanations, not because they
fail experimental tests.

David Deutsch


---- ----

## Just a title - No text


---- ----

## Lists

Text followed by a list.

1. with with with with with with with
  - **bold words words**
  - _italic words words_
  - words words
  - words words
- nice nice nice nice nice nice


---- ----

## Table

| col1   | col2   |     col3 header |
| ------ | ------ | --------------: |
| abc    | def    |   right aligned |
| abc    | def    |   right aligned |
| abc    | def    |   right aligned |


---- ----

## Code

```js
$.getJSON('/pub/_opts.json', function(opts) {
  var generator = require('pub-generator')(opts)
  generator.load(function(err) {
    var $edit = $('textarea.editor')
    $edit.on('keyup', function() {
      generator.updateFragmentText(
        editor.binding,
        $edit.val())
    })
  })
})
```

---- ----

# Heading Level 1
## Level 2
### Level 3
#### Level 4
##### Level 5

---- ----

## Credits
[Vadim Makeev](https://github.com/pepelsbey):
[Shower HTML presentation engine ](https://github.com/shower/shower)
