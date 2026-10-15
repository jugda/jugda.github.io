---
date: 2026-12-10 18:30
title: "Eine Architektur, viele Sichten - Mit Bausteinsicht vom Modell zum Diagramm und wieder zurück"
shortTitle: "Eine Architektur, viele Sichten"
speaker:
  - name: Gerd Aschemann
    pic: gerdaschemann.png
    mastodon: mastodon.social/@ascheman
    linkedin: aschemann
    github: ascheman
    web: https://aschemann.net/
  - name: Falk Sippach
    pic: falksippach.jpg
    mastodon: ijug.social/@sippsack
    linkedin: falk-sippach
    github: sippsack
    web: https://www.sippsack.de/
seatLimit: 30
location: tbd
direction: #
---

## Zusammenfassung

Softwarearchitektur lässt sich selten mit einem einzigen Diagramm erklären. Je nach Fragestellung brauchen wir unterschiedliche Sichten auf Kontext, Bausteine, Laufzeit oder Verteilung. Werden diese Diagramme getrennt gepflegt, widersprechen sie sich irgendwann – und verlieren ihren Wert für Entwurf, Kommunikation und Reviews. Nachdem wir geklärt haben, welche Fragen die Sichten beantworten, wie sie sich in arc42 einordnen und wie sie z. B. mit C4 zusammenpassen, betrachten wir verschiedene Wege zur Umsetzung: klassische draw.io-Diagramme, Mermaid und PlantUML sowie modellbasierte Ansätze wie Structurizr und LikeC4.

An einem Beispiel zeigen wir schließlich, welchen Weg Bausteinsicht einschlägt: Ein versionierbares Architekturmodell liefert mehrere Diagrammsichten; Änderungen am Modell und in draw.io werden in beide Richtungen synchronisiert. Das strukturierte Modell kann auch KI-Assistenten als Kontext dienen. Wir diskutieren, wo dieser Ansatz die Pflege der Architektur erleichtert – und warum die Erstellung der Sichten weiterhin eine Aufgabe des Teams bleiben sollte.

## Sprecher

{% include speakerinfo.html index=0 %} ist freiberuflicher Softwarearchitekt mit langjähriger Erfahrung und einem starken Entwicklungs- und Betriebshintergrund (DevOps). Seine besondere Stärke liegt darin, Teams und Kundenorganisationen an neue Technologien und Vorgehensweisen heranzuführen und langfristig neue Methoden zu etablieren. Zu seinen Schwerpunkten gehören Softwarearchitektur, Domain Driven Design, CI/CD, DevOps und Site Reliability Engineering sowie der Einsatz kundenspezifischer KI-Agenten für Architekturdokumentation und Analyse, Entwicklung und Betrieb.

{% include speakerinfo.html index=1 %} ist bei der embarc Software Consulting GmbH als Softwarearchitekt, Berater und Trainer stets auf der Suche nach dem Funken Leidenschaft, den er bei seinen Teilnehmern, Kunden und Kollegen entfachen kann. Bereits seit 20 Jahren unterstützt er in meist agilen Softwareentwicklungsprojekten im Java-Umfeld. Als aktiver Bestandteil der Community (Mitorganisator der JUG Darmstadt und Mitglied der Java Champions) teilt er zudem sein Wissen gern in Artikeln, Blog-Beiträgen, sowie bei Vorträgen auf Konferenzen oder User Group Treffen und unterstützt bei der Organisation diverser Fachveranstaltungen.
