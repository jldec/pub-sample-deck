# pub-server sample deck

This repo provides a quick way to start writing your own presentations using the [pub-theme-shower-ribbon](https://github.com/jldec/pub-theme-shower-ribbon) presentation theme.

See published samples at [http://jldec.github.io/pub-sample-deck](http://jldec.github.io/pub-sample-deck)

### installation

```sh
git clone https://github.com/jldec/pub-sample-deck
cd pub-sample-deck
npm install
```

This will install pub-server and pub-theme-shower-ribbon as dependencies. [package.json](package.json) also includes a few convenience scripts for running pub-server.

### markdown, images

[pub-config.js](pub-config.js) is configured to generate presentations from `.md` markdown files under `./markdown`. You can create sub-directories to organize your presentations, or change the config to point to different directories entirely.

Images are configured to live in `./static/images`, and referenced from markdown using a path `/images/...`

Check out the sample presentations in `./markdown`.

In this sample, markdown fragments for each slide are separated with a standard pub markdown delimiter (remember to leave a blank line before starting your markdown)

The delimiter can also be used to indicate the URL path and fragment name. E.g.

```md
---- /sample2 ----
name: Sample Deck #2


---- #cover ----

## Different Title
![](/images/ice.jpg)
Use the nav menu to switch between presentations


---- #1 ----

## This presentation is shorter
```

### Background images
By specifying `background-image: path` in the fragment header, you can easily style the slide with a background image and white text E.g.

```md
---- #fragment-with-background-image ----
background-image: /images/water.jpg

## Heading
markdown text
```





### CSS customization

A stylesheet for customizaton lives in `./static/css/extra.css`.


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
