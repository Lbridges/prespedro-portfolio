module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");
  //eleventyConfig.addPassthroughCopy("./assets");

  // Create a 'docs' collection
  eleventyConfig.addCollection("docs", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/docs/*.njk").filter(item => {
      return item.fileSlug !== "index";
    });
  });

  // Create a 'blog' collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.njk").filter(item => {
      return item.fileSlug !== "index";
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    htmlTemplateEngine: "njk"
  };
};