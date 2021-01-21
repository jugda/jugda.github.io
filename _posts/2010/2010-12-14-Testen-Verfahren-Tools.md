---
layout: post
title: Testest Du schon? Verfahren und Tools zum Testen von Software.
speaker: Martin Kompf
---

### Abstract

<a href="/images/talks/flyer_testen_kompf.jpg"><img src="/images/talks/flyer_testen_kompf.jpg" class="speakerpic"></a>
Falls Sie in der nächsten Zeit eine JEE6 Webapplikation aufbauen, gibt Martin Kompf’s Beitrag einen guten Überblick, was Sie dabei im Bezug auf das Testen beachten müssen.

Die Liste möglicher Strategien und Tools dafür ist lang: Black-, White- und Grey-Box Testing, Code-Reviews, JUnit, Mockobjekte, Embeddable EE containers (Arquillian und ShrinkWrap) ...

In den Präsentationsfolien finden Sie hierzu jeweils Vor- und Nachteile zu Black- oder White-Box-Tests aufgeführt. Neben diesen grundlegenden Erfahrungen aus der Praxis gibt Martin Kompf einen Überblick über die Tools, die dabei je nach Projektphase am besten eingesetzt werden. Neben allgemein verwendbaren Tools für zum Beispiel statische Reviews wie Cobertura (Coverage), Fitness oder Sonar, spielen aber bei der Entwicklung von JEE6 Web-Anwendungen weitere Werkzeuge eine wichtige Rolle.

Der erste Teil der praktischen Beispiele zeigt Methoden des White-Box-Testens. Die verlinkten zip-Files enthalten die Eclipse-Projekte mit den Beispielen zum Praxisteil.

Zwei Demo Projekte zeigen, wie Arquillian (embedded und weld) eingesetzt wird (Alpha Stadium) und automatisch Mock-Objekte mit Mockito erstellt werden.
Der zweite Teil der praktischen Beispiele fokussiert sich auf das Black-Box-Testing einer komplexen Webanwendung mittels Selenium. Thema sind hierbei insbesondere die Herausforderungen, die durch die Verwendung diverser JSF und Ajax Frameworks auftreten, wie dynamische IDs und versteckte Hyperlinks. Zum Test von Webanwendungen wurde Selenium eingesetzt. Zum Nachspielen der Demo benötigen Sie die unten angegebene Software.

1. Selenium Plugin installieren: Firefox->Add-Ons->Add-Ons-Suchen: Selenium
2. Selenium IDE installieren (http://seleniumhq.org/download/); auch zum Export der aufgezeichneten Testfälle in verschiedene Sprachen (zum Beispiel JUnit-Tests).
 
Weitere Infos zu Fallstricken, die beim Test mit Selenium auftreten können, werden in der Präsentation (siehe oben) erläutert.

Die Plugins Firebug (für Firefox) und Firepath (für Firebug) finden Sie auch über: Firefox->Add-Ons->Add-Ons-Suchen

### Speaker

<img src="/images/speaker/martin_kompf.jpg" class="speakerpic"/>
__Martin Kompf__ arbeitet als Autor, Consultant und Softwareentwickler. Seine Schwerpunkte sind Verteilte Systeme, Java und C++.

### Kontakt

- [http://www.kompf.de](http://www.kompf.de)

### Weitere Informationen

Downloads

- [PDF der Präsentation](/files/testestduschon.pdf)
- [Eclipse Projekt zu arquillian-weld-testing](/files/arquillian-weld-testing.zip)
- [Eclipse Projekt zu arquillian-embedded-openejb-testing](/files/arquillian-embedded-openejb-testing.zip)
- [Eclipse Projekt zu mockito-testing](/files/mockito-testing.zip)

![](/images/talks/testen_kompf1.jpg)
![](/images/talks/testen_kompf2.jpg)