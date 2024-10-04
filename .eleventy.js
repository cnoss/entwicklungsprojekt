const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const yaml = require("js-yaml");
const fg = require('fast-glob');
const fs = require("fs");

const shortcodeModuls = {
  "images": require('./src/_layouts/shortcodes/images.11ty.js'),
  "textblock": require('./src/_layouts/shortcodes/textblock.11ty.js'),
};

const pathPrefixMap = {
  "development": "",
  "production": "entwicklungsprojekt"
};

const pathPrefix = pathPrefixMap[process.env.ELEVENTY_ENV] || "";


const md = new markdownIt({
  html: true,
});

const allImages = fg.sync(['src/images/**/*', '!**/_site']);

const clearRequireCache = () => {
  Object.keys(require.cache).forEach(function (key) {
    if (require.cache[key].filename.match(/11ty\.js/)) {
      delete require.cache[key];
    }
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.setWatchThrottleWaitTime(100);
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setWatchJavaScriptDependencies(true);
  eleventyConfig.setBrowserSyncConfig({
    snippet: true,
    https: true
  });

  eleventyConfig.addGlobalData("eleventyComputed.permalink", function () {
    return (data) => {
      // Always skip during non-watch/serve builds
      if (data.type === 'arf-data') {
        console.log("skipping draft");
        return false;
      }
      return data.permalink;
    }
  });

  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: false,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: true,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    /*https: {
      key: "../localhost.key",
      cert: "../localhost.cert",
    },*/

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",
  });

  /* Compilation
   ########################################################################## */

  // Watch our js for changes
  eleventyConfig.addWatchTarget('./src/assets/scripts/main.js');
  eleventyConfig.addWatchTarget('./src/_layouts/components');

  // Copy _data
  eleventyConfig.addPassthroughCopy({ 'src/_data': 'assets/data' });
  eleventyConfig.addWatchTarget("./src/_data");

  // Watch our compiled assets for changes
  eleventyConfig.addPassthroughCopy('src/compiled-assets');
  eleventyConfig.addPassthroughCopy('./compiled-content');

  // Copy all fonts
  eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });

  // Copy asset images
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });

  // Copy Downloads
  eleventyConfig.addPassthroughCopy({ 'src/downloads': 'downloads' });

  // Copy CSS (libs)
  eleventyConfig.addPassthroughCopy({ 'src/assets/styles/libs': 'assets/styles/libs' });

  // Copy images
  eleventyConfig.addPassthroughCopy("src/**/*.jpg");
  eleventyConfig.addPassthroughCopy("src/**/*.jpeg");
  eleventyConfig.addPassthroughCopy("src/**/*.webp");
  eleventyConfig.addPassthroughCopy("src/**/*.fset");
  eleventyConfig.addPassthroughCopy("src/**/*.fset3");
  eleventyConfig.addPassthroughCopy("src/**/*.iset");
  eleventyConfig.addPassthroughCopy("src/**/*.png");

  // Copy Media
  eleventyConfig.addPassthroughCopy("src/**/*.mp4");
  eleventyConfig.addPassthroughCopy("src/**/*.glb");
  eleventyConfig.addPassthroughCopy("src/**/*.obj");
  eleventyConfig.addPassthroughCopy("src/**/*.mtl");
  eleventyConfig.addPassthroughCopy("src/**/*.pdf");

  // Copy Downloads
  eleventyConfig.addPassthroughCopy({ 'src/downloads': 'downloads' });

  // Copy Scripts
  eleventyConfig.addPassthroughCopy({ 'src/assets/scripts': 'assets/scripts' });
  eleventyConfig.addWatchTarget("./src/assets/scripts");

  // Copy CNAME
  eleventyConfig.addPassthroughCopy({ 'src/CNAME': '' });

  // Copy Decap Stuff
  eleventyConfig.addPassthroughCopy({ 'src/admin': 'admin' });

  // Copy API Data
  eleventyConfig.addPassthroughCopy({ 'src/api/*.json': 'api/' });

  /* BaseUrl
 ########################################################################## */
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  /* Functions
 ########################################################################## */


  /* Filter
 ########################################################################## */

  eleventyConfig.addFilter("bust", (url) => {
    const [urlPart, paramPart] = url.split("?");
    const time = Date.now();
    return `${urlPart}?${time}`;
  });

  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  /* Collections
 ########################################################################## */

  eleventyConfig.addCollection("all", function (collection) {
    clearRequireCache();
    return collection.getAll();
  });

  eleventyConfig.addCollection("pagesInToc", function (collection) {
    clearRequireCache();
    return collection.getAll().filter(item => item.data.inToc).sort((a, b) => {

      if (a.data.title > b.data.title) return 1;
      else if (a.data.title < b.data.title) return -1;
      else return 0;
    });
  });


  /* Shortcodes
 ########################################################################## */

  eleventyConfig.addShortcode("image", function (src, caption) {
    return shortcodeModuls.images.getImageBlock(src, caption);
  });

  eleventyConfig.addShortcode("screenshot", function (src, caption) {
    return shortcodeModuls.images.getScreenshotBlock(src, caption);
  });

  eleventyConfig.addShortcode("textblock", function (content, cssClass) {
    return shortcodeModuls.textblock.getTextblock(content, cssClass);
  });

  eleventyConfig.addShortcode("gallery", function (src, classname, caption) {
    caption = caption || '';
    classname = classname || '';
    if (!src) return console.error('No src given for gallery shortcode');
    const attributes = {
      src: src,
      id: 'gallery-' + src.replace(/\//g, '-').replace(/\./g, '-').replace(/_/g, '-').replace(/ /g, '-').toLowerCase(),
      class: classname
    };
    return shortcodeModuls.images.getGallery(this.ctx, this.ctx, attributes);
  });

  /* Data Extension
  ########################################################################## */
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));


  /* Environment
 ########################################################################## */

  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
      /*if (outputPath.endsWith('.html')) {
        return minified = htmlmin.minify(content, {
          collapseInlineTagWhitespace: false,
          collapseWhitespace: true,
          removeComments: true,
          sortClassName: true,
          useShortDoctype: true,
        });
      }*/

      return content;
    });
  }

  return {
    dir: {
      includes: '_components',
      input: 'src',
      layouts: '_layouts',
      output: 'docs',
    },
    pathPrefix: pathPrefix,
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: [
      'md',
      'html',
      'njk',
      '11ty.js',
      'json'
    ],
  };
};
