module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src");
    return {
      dir: {
        input: ".",
        output: "_site"
      },
      htmlTemplateEngine: "njk"
    };
  };