---
date: 2024-02-29 18:00
title: "Doppelvortrag: Hexagonale Architektur - Robuste Software dank Schnittstellen statt Schichten & Web-Frontends automatisch testen - kann auch Spaß machen!"
shortTitle: "Doppelvortrag: Hexagonale Architektur + Web-Frontends automatisch testen"
speaker:
  - name: Sven Woltmann
    pic: svenwoltmann.jpg
    twitter: svenwoltmann
    linkedin: sven-woltmann
  - name: Nils Knappmeier
    pic: nilsknappmeier.jpg
    twitter: knappi79
    linkedin: nknapp-1979
hideVideoRecording: true
hidePub: true
seatLimit: 40
location: cosee GmbH, Mina-Rees-Straße 8, 64293 Darmstadt
direction: https://goo.gl/maps/fX1AfbSmFv82
hybrid: true
important: Wir starten diesmal schon um 18 Uhr. 
---

## Zusammenfassung

### Hexagonale Architektur - Robuste Software dank Schnittstellen statt Schichten

Wir alle kennen diese Situation: Je älter und größer eine Anwendung wird, desto aufwendiger und teurer wird es, sie zu erweitern und zu warten. Die verbreitete Schichtenarchitektur ist als Lösungsansatz unzureichend: Direkte und indirekte Abhängigkeiten aller Schichten zur Datenbank und anderen Infrastrukturkomponenten führen oft zu einer Aufweichung der Schichtengrenzen und einer Verflechtung von technischem und fachlichem Code.

Hexagonale Architektur rückt die Geschäftslogik ins Zentrum, und technische Details werden als Adapter hinter Schnittstellen (Ports) isoliert. Fachlicher und technischer Code kann so unabhängig voneinander entwickelt und getestet werden.

Ausgehend von den Zielen einer Softwarearchitektur und einem kritischen Blick auf die Schichtenarchitektur, schauen wir uns die hexagonale Architektur im Detail an. Ihr erfahrt, wie die Dependency Rule sicherstellt, dass es keine Abhängigkeiten von fachlichem zu technischem Code gibt und wie der Anwendungskern trotzdem auf die Infrastruktur zugreifen kann. Erfüllt die hexagonale Architektur die Ziele einer Softwarearchitektur? Welche Herausforderungen bringt sie mit sich? Wie unterscheidet sie sich von Onion und Clean Architecture, und welche Synergien ergeben sich im Zusammenspiel mit Microservices und Domain-Driven Design?

Mit neuem Wissen gerüstet, könnt ihr die Qualität und Lebensdauer eurer Softwareprojekte steigern und in Zukunft schneller auf neue Anforderungen reagieren.

*Lernziele*

Die Zuschauer erfahren als Einstieg, was überhaupt das Ziel einer Softwarearchitektur ist. Sie lernen, was die hexagonale Architektur ist, und was ihre Vor-/Nachteile gegenüber einer klassischen Schichtenarchitektur sind.

Sie erfahren, was primäre/sekundäre Ports/Adapter sind, wie man Entities zwischen den Schichten mappt und wie sich eine hexagonale Anwendung testen lässt.

Sie lernen die Unterschiede zur Clean/Onion Architecture kennen und erfahren, wie Microservices und DDD ins Spiel kommen.

*Vorkenntnisse*

Es sind keine speziellen Vorkenntnisse erforderlich. Erste Erfahrungen mit mehrschichtigen Anwendungsarchitekturen (Presentation Layer, Business Layer, Data Access Layer) könnten jedoch helfen, die Nachteile der Schichtenarchitektur und die Vorteile der hexagonalen Architektur zu verstehen.

### Web-Frontends automatisch testen - kann auch Spaß machen!

Automatische Tests lassen uns nachts besser schlafen und ermöglichen sorgenfreie Refactorings. In der Backend-Entwicklung ist es völlig normal, Tests zu schreiben. Bei Frontend-Entwicklern wird das Thema oft noch stiefmütterlich behandelt. Es ist viel einfacher, einen Live-Server mit Hot-Reload zu starten und seine Änderungen gleich auszuprobieren, als einen Test zu schreiben, der die gleichen Eingaben simuliert. Das kann unheimlich frustrierend und aufwendig sein – muss es aber nicht!

Es gibt Tools und Strategien, um schnelle, stabile und aussagekräftige Tests zu schreiben. Mit dem richtigen Projekt-Setup wird das Schreiben von Tests viel einfacher – und kann sogar Spaß machen.

Welche Testing-Frameworks gibt es aktuell?
Was sind die Unterschiede und welches Framework nehme ich für welche Art von Test?
Worauf muss ich achten, damit meine Frontend-Tests relevante Dinge testen?

In der Session geht Nils auf diese Fragen ein, erläutert häufige Fehler und gibt Erfahrungen aus der Praxis weiter.

## Sprecher

{% include speakerpic-name.html %} ist Java-Entwickler der ersten Stunde. Er arbeitet als unabhängiger Entwickler, Coach und Kursleiter mit Schwerpunkt auf skalierbaren Unternehmensanwendungen, Optimierung von Algorithmen, Clean Code und Clean Architecture. Er teilt sein Wissen über Java, Architektur, Algorithmen und Datenstrukturen in Videos, seinem Newsletter und seinem Blog [happycoders.eu](https://www.happycoders.eu/).

{% assign speaker2 = page.speaker[1] %}
{% include speakerpic-name.html speaker=speaker2 %} arbeitet als Fullstack-Engineer bei der cosee GmbH in Darmstadt und ist seit 14 Jahren in der Webentwicklung tätig. Er beschäftigt sich seit 2017 mit TypeScript und will nie wieder Web-Frontends in reinem JavaScript schreiben.

## Sponsors

[Cosee](http://www.cosee.biz) stellt uns die Räumlichkeiten zur Verfügung und sorgt für unser leibliches Wohl. Vielen Dank dafür. Der übliche Abstecher in den Hotzenplotz nach dem Vortrag entfällt somit - wir bleiben einfach vor Ort!

[![logo](/images/sponsors/cosee.png)](http://www.cosee.biz) 
