const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const slugify = require("slugify");

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
    return collection
      .getFilteredByGlob('./src/blog/*.md')
      .filter((post) => {
        return !post.data.draft;
      });
  });

  config.addCollection('projects', collection => {
    return collection.getFilteredByGlob('./src/projects/*.md')
      .filter((project) => {
        return !project.data.draft;
      })
      .sort((a, b) => {
        return b.data.weight - a.data.weight;
      });
  });

  config.addNunjucksFilter('date', require('./src/filters/nunjucks-date'));

  config.addFilter("slugify", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true
    };
    console.log('this is running');
    console.log(slugify(input, options));
    return slugify(input, options);
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