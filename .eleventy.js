module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/admin");
  // eleventyConfig.addPassthroughCopy("./src/img");

  /* Collections */
  eleventyConfig.addCollection('posts', collection => {
    return [...collection.getFilteredByGlob('./src/blog/*.md')];
  });

  eleventyConfig.addCollection('projects', collection => {
    return [...collection.getFilteredByGlob('./src/project/*.md')];
  });


  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
