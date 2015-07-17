# pub-server sample deck

The repo provides a quick way to start writing your own presentations using the [pub-theme-shower-ribbon](https://github.com/jldec/pub-theme-shower-ribbon) presentation theme.

### installation

```sh
git clone git@github.com:jldec/pub-sample-deck.git
cd pub-sample-deck
npm install
```

### to preview or show a presentation

```sh
npm run develop
```

Now point your browser to http://localhost:3001/


### generating static HTML
This is only necessary if you want to publish the HTML to a server.

```sh
npm run generate
```

To preview the generated static output:

```sh
npm run static
```
