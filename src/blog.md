---
title: Blog
layout: layouts/blog.html
pagination:
  data: collections.blog
  size: 10
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: Newer posts
paginationNextText: Older posts
paginationAnchor: '#post-list'
---

This is the blog. I post updates here and maybe tutorials.