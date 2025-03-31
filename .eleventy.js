module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./assets");

    // Create a 'docs' collection
    eleventyConfig.addCollection("docs", function(collectionApi) {
      return collectionApi.getFilteredByGlob("src/docs/*.njk");
    });

    return {
      dir: {
        input: "src",
        output: "_site"
      },
      htmlTemplateEngine: "njk"
    };
  };