const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = config => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy('src/blog/images');
  config.addPassthroughCopy('src/projects/images');
  config.addPassthroughCopy('src/static');
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- read-more -->'
  });

  config.addCollection('blog', collection => {
    return collection.getFilteredByGlob('./src/blog/*.md');
  });

  config.addCollection('projects', collection => {
    return collection.getFilteredByGlob('./src/projects/*.md');
  });

  config.addNunjucksFilter('date', require('./src/filters/nunjucks-date'));

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