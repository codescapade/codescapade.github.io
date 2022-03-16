const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const dateFilter = require('./src/filters/nunjucks-date');
const slugFilter = require('./src/filters/slugify');
const markdownIt = require('markdown-it');

const MARKDOWN_OPTIONS = {
    html: true,
    breaks: false,
    linkify: true
};

let markdownLibrary = markdownIt(MARKDOWN_OPTIONS);
module.exports = config => {
  config.addPlugin(syntaxHighlight);
  config.addPassthroughCopy('src/blog/images');
  config.addPassthroughCopy('src/projects/images');
  config.addPassthroughCopy('src/static');
  config.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- read-more -->'
  });

  config.setLibrary("md", markdownLibrary);

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

  config.addNunjucksFilter('date', dateFilter);
  config.addFilter("slugify", slugFilter);

  config.addFilter("toHTML", (str) => {
    return new markdownIt(MARKDOWN_OPTIONS).renderInline(str);
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