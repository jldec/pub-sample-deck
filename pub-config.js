var opts = module.exports = {

  pkgs: ['pub-theme-shower-ribbon', 'pub-pkg-highlight'],

  sources: [
    {
      path:'./markdown',

      // descend directories looking for .md files
      glob:'**/*.md',

      // this is not required if fragments are separated with `---- #name ----`
      // fragmentDelim:'md-headings',

      // allow saving from the pub editor
      writable:true
    }
  ],

  // images live in ./static/images
  // extra.css lives in ./static/css
  staticPaths: [ './static' ],

  // path to extra stylesheet
  injectCss: '/css/extra.css',
}
