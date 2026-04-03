---
layout: page
title: Über uns
permalink: /about/
excerpt: Die Organisator:innen der JUG DA stellen sich vor.
---

Wir – die JUG DA – sind eine offene Non-Profit-Community mit dem Ziel, uns über aktuelle Themen zur Anwendung von Java-Technologie auszutauschen – und darüber hinaus einen Blick auf andere VM-Sprachen und -Technologien zu werfen.

Wenn du über kommende Vorträge und Themen auf dem Laufenden zu bleiben möchtest, melde dich auf der [JUG DA Mailingliste](https://groups.google.com/group/jug-da) an oder [folge uns auf Mastodon.](https://darmstadt.social/@JUG_DA).
Wenn du direkt mit uns, dem Orga-Team, in Kontakt treten möchtest, [schick uns eine E-Mail.](mailto:info@jug-da.de)

<a href="https://www.ijug.eu" target="_blank">
  <img src="/images/ijug_banner.jpg" alt="Mitglied im iJUG e.V."/>
</a>

### Die JUG DA wird organisiert von:

_(in alphabetischer Reihenfolge)_

{% for orga in site.data.orga %}
{% unless orga.retired == true or orga.passedAway == true %}
{% include orga.html orga=orga %}
{% endunless %}
{% endfor %}

---

### Ehemalige

{% for orga in site.data.orga %}
{% if orga.retired == true or orga.passedAway == true %}
{% include orga.html orga=orga %}
{% endif %}
{% endfor %}
