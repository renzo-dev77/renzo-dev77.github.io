---
layout: archive
title: "Example Page"
permalink: /examplePage/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.examplePage reversed %}
  {% include archive-single.html %}
{% endfor %}

{% for post in site.pages reversed %}
  {% include markdown.html %}
{% endfor %}
