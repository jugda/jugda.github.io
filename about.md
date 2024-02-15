---
layout: page
title: Über uns
permalink: /about/
---

Wir - die JUG DA - sind eine offene Non-Profit-Community mit dem Ziel uns über aktuelle Themen zur Anwendung von Java Technologie auszutauschen – und darüber hinaus einen Blick auf andere VM-Sprachen und -Technologien zu werfen.

Wenn du über kommende Vorträge und Themen auf dem laufenden zu bleiben möchtest, melde dich auf der [JUG DA Mailingliste](https://groups.google.com/group/jug-da) an oder [folge uns auf Twitter.](https://twitter.com/JUG_DA).
Wenn du direkt mit uns, dem Orga-Team, in Kontakt treten möchtest, [schick uns eine Email.](mailto:info@jug-da.de)

{% include ijug.html %}

### Die JUG DA wird organisiert von:

_(in alphabetischer Reihenfolge)_

{% for orga in site.data.orga %}
<div>
    <h4>{{ orga.name }}</h4>
    <p>
        {% assign externImage = orga.image | slice: 0, 4 %}
        <img src="{% if externImage != 'http' %}/images/orga/{% endif %}{{ orga.image }}" class="orgapic"/>
        {{ orga.bio }}
    </p>
    <p>
        <i class="bi bi-envelope"></i>: <a href="mailto:{{ orga.email }}">{{ orga.email }}</a><br/>
        {% if orga.website %}<i class="bi bi-globe2"></i>: <a href="{{ orga.website }}" target="_blank" rel="noopener noreferrer external">{{ orga.website }}</a><br/>{% endif %}
        {% if orga.linkedin %}<i class="bi bi-linkedin"></i>: <a href="https://www.linkedin.com/in/{{ orga.linkedin }}/" target="_blank" rel="noopener noreferrer external">in/{{ orga.linkedin }}</a><br/>{% endif %}
        {% if orga.mastodon %}<i class="bi bi-mastodon"></i>: <a href="https://{{ orga.mastodon }}" target="_blank" rel="noopener noreferrer external">{{ orga.mastodon }}</a><br/>{% endif %}
        {% if orga.twitter %}<i class="bi bi-twitter-x"></i>: <a href="https://twitter.com/{{ orga.twitter }}" target="_blank" rel="noopener noreferrer external">@{{ orga.twitter }}</a><br/>{% endif %}
        {% if orga.youtube %}<i class="bi bi-youtube"></i>: <a href="https://www.youtube.com/{{ orga.youtube }}" target="_blank" rel="noopener noreferrer external">{{ orga.youtube }}</a><br/>{% endif %}
    </p>
    <hr style="clear: both;"/>
</div>
{% endfor %}
