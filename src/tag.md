---
eleventyComputed:
  title: Posts with "#{{ tag }}"
layout: layouts/blog.html
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag | slug }}/
---