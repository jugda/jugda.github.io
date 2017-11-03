---
title: Die Magie hinter Spring-Boot-Startern
speaker: Michael Simons
twitter: rotnroll666
speakerpic: michaelsimons.jpg
date: 2017-10-19 18:30
---

### Abstract

Zusammen mit Spring Boot wird fast immer der Spring Initializr auf [start.spring.io](https://start.spring.io) erwähnt: Eine komfortable REST-Anwendung, mit deren Hilfe sich Entwicklerinnen die Abhängigkeiten einer neuen Anwendung einfach zusammenklicken können.

Diese Abhängigkeiten sind in der Regel sogenannte Starter. Starter deklarieren zum einen transitive Abhängigkeiten und bringen eine automatische Konfiguration für das Thema des Starters mit.

Die Deklaration des `spring-boot-starter-web` reicht zum Beispiel vollkommen aus, um nicht nur Spring Web MVC vollständig zu konfigurieren, sondern schließt weiterhin einen eingebetteten Servlet-Container mit ein.

In diesem Vortrag wird gezeigt, wie der Mechanismus eines Starters funktioniert: Ist es wirklich Magie ist oder wurden vielmehr vorhandene Spring Konzepte intelligent genutzt, um eine möglichst widerstandsfähige und leicht erweiterbare Schnittstelle zur internen und externen Konfiguration einer Spring-Anwendung zu schaffen. Während der Demo wird ein individueller Dialekt für die Templatesprache Thymeleaf entwickelt, der mit einem Spring-Boot-Starter-Modul zur Verfügung gestellt wird.

### Speaker

{% include speakerpic-name.html %} arbeit als Senior Consultant bei [innoQ Deutschland](https://www.innoq.com/de/). Er ist Mitglied des _NetBeans Dream Team_ und Gründer der [Euregio JUG](http://www.euregjug.eu). Michael schreibt in seinem Blog [info.michael-simons.eu](http://info.michael-simons.eu) über Java, Spring und Softwarearchitektur. Seine Freizeit verbringt er aktuell mit dem [Spring Boot Buch](http://springbootbuch.de).

Auf Twitter unterwegs als [@rotnroll666](https://twitter.com/rotnroll666), unter anderem mit Java, Music und den kleineren und größeren Problemen als Ehemann und Vater von 2 Kindern.

### Weitere Informationen

[Blog-Beitrag von Jörn Hameister](http://www.hameister.org/Blog/?p=5317)

<iframe width="560" height="315" src="https://www.youtube.com/embed/z8LEgR7WyLs" frameborder="0" allowfullscreen></iframe>