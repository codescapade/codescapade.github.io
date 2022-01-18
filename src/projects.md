---
title: 'Projects'
layout: 'layouts/blog.html'
pagination:
  data: collections.projects
  size: 12
permalink: 'projects{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer projects'
paginationNextText: 'Older projects'
paginationAnchor: '#post-list'
---

This is the projects page. Here I post projects I have completed or am working on.
