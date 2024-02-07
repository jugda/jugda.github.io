---
date: 2024-02-29 18:30
title: "Hexagonale Architektur: Robuste Software dank Schnittstellen statt Schichten"
shortTitle: "Hexagonale Architektur"
speaker: Sven Woltmann
speakerpic: svenwoltmann.jpg
twitter: svenwoltmann
linkedin: sven-woltmann
hideVideoRecording: true
hidePub: true
seatLimit: 40
location: folgt in Kürze
direction: /
hybrid: true
---

## Zusammenfassung

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


## Sprecher

{% include speakerpic-name.html %} ist Java-Entwickler der ersten Stunde. Er arbeitet als unabhängiger Entwickler, Coach und Kursleiter mit Schwerpunkt auf skalierbaren Unternehmensanwendungen, Optimierung von Algorithmen, Clean Code und Clean Architecture. Er teilt sein Wissen über Java, Architektur, Algorithmen und Datenstrukturen in Videos, seinem Newsletter und seinem Blog [happycoders.eu](https://www.happycoders.eu/).
