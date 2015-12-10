---
layout: poster
title: Programm Plakat
permalink: /plakat/
---
<ul class="poster-list">
{% assign counter = 0 %}
{% for post in site.posts reversed %}
  {% if post.date > site.time and counter < 5 %}
      {% assign showUrlAndQrCode = true %}
      {% include talk.html %}
      <hr />
      {% assign counter=counter | plus:1 %}
  {% endif %}
{% endfor %}
</ul>
