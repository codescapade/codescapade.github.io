const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = config => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy('src/blog/images');
  config.addPassthroughCopy('src/projects/images');
  config.addPassthroughCopy('src/static');

  config.addCollection('blog', collection => {
    return collection.getFilteredByGlob('./src/blog/*.md');
  });

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'docs'
    }
  };
};