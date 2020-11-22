var opts = module.exports = {

  pkgs: ['pub-theme-shower', 'pub-pkg-highlight', 'pub-pkg-seo'],

  // set appUrl to publish fully qualified URLs in sitemap.xml
  appUrl: "https://jldec.github.io/pub-sample-deck",

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
  // bring in ../.gitignore for gh-pages branch
  staticPaths: [ './static', '.gitignore', '.nojekyll' ],

  // path to extra stylesheet
  injectCss: '/css/extra.css',

  outputs: [
    {
      path:'./docs',
      relPaths:true
    }
  ],

  // ask search engines not to crawl this site (depends on pub-pkg-seo)
  noRobots: 1
}
