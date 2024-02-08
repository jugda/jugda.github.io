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
#### {{ orga.name }}

<p class="orgaperson">
{% assign externImage = orga.image | slice: 0, 4 %}
{{ externImage }}
<img src="{% if externImage != 'http' %}/images/orga/{% endif %}{{ orga.image }}" class="orgapic"/>
{{ orga.bio }}
</p>

Kontakt: [{{ orga.email }}](mailto:{{ orga.email }})<br/>
{% if orga.website %}Website: [{{ orga.website }}]({{ orga.website }}){:target="_blank"}{:rel="noopener noreferrer external"}<br/>{% endif %}{% if orga.mastodon %}Mastodon: [{{ orga.mastodon }}](https://{{ orga.mastodon }}){:target="_blank"}{:rel="noopener noreferrer external"}<br/>{% endif %}{% if orga.twitter %}Twitter: [@{{ orga.twitter }}](https://twitter.com/{{ orga.twitter }}){:target="_blank"}{:rel="noopener noreferrer external"}<br/>{% endif %}
{% if orga.video %}Video-Channel: [{{ orga.video }}]({{ orga.video }}){:target="_blank"}{:rel="noopener noreferrer external"}{% endif %}

{% endfor %}
