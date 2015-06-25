---
layout: post
title: Cloud Computing mit der Google App Engine
speaker: Lars Vogel
---

### Abstract

<a href="/images/talks/flyer_appengine.jpg"><img src="/images/talks/flyer_appengine.jpg" class="speakerpic"/></a>
Google bietet das Hosten von Java und Python basierten Applikationen auf der Google App Engine an.
Das schöne daran ist, daß das Hosting für kleinere Webapplikationen gratis ist, d.h. man kann leicht anfangen, ohne gleich seine Kreditkarte belasten zu müssen. Der Vortrag präsentierte die Einblicke in die Architektur der Google AppEngine und zeigt wie leicht es ist mit dem Eclipse basierten Tools von Google Webapplicationen zu erstellen. Noch nie war das Deployment von Java Webapps so leicht. Die Teilnehmer nutzten die Chance um gemeinsam mit Lars Vogel über die Vor- und Nachteile des Cloud-Computing zu diskutieren. Warum lohnt sich eine Cloud Anwendung? Welche Risiken verstecken sich bei der Nutzung? Welche Sicherheiten gewinne ich bei der Nutzung einer Cloud Anwendung? Nach einer Einführung in die grundsätzliche Arbeitsweise der Google-AppEngine (Wie erreicht Google die hohe Stabilität der Anwendungen?, Wie kann man technisch mehrere tausende Anwendungen auf einem Server zur Verfügung stellen?), ging Lars Vogel auf die einzelnen zur Verfügung gestellten APIs und die ausgeblendeten APIs (java whitelist) ein.

Im Rahmen der Präsentation wurden die Möglichkeiten Daten auf der AppEngine zu
speichern (JPA, JDO), das Email API und viele andere API’s gezeigt. Die Google AppEngine nutzt als Datenbank eine NoSQL Datenbank BigTable. Da die BigTable bestimmte Beschränkungen aufweist, bietet die AppEngine weitere Standard APIs an, mit deren Hilfe der Zugriff auf Daten beschleunigt werden kann. Das Debugging wird durch eine Administrationskonsole und Debugging-Tools wie AppStat unterstützt.

Als Demo wurden WebApps erstellt, die automatisch Updates zu Twitter schicken bzgl. ein Chat Roboter, der basierend auf dem XMPP Protocol erlaubt sich mit Ihm zu unterhalten. Lars Vogel konnte uns auch einen guten Einblick in die zukünftigen Trends der Google AppEngine Entwicklung geben.

### Speaker

<img src="/images/speaker/lars_vogel.png" class="speakerpic"/>
__Lars Vogel__ ist freiberuflich im Eclipse und Android Umfeld als Trainer
und Entwickler tätig und arbeitet als Produkt Manager bei der SAP AG. Er ist regelmässiger Sprecher auf Events, wie der EclipseCon, Java Forum Stuttgart und MobileTechCon und veröffentlicht unter [](http://www.vogella.de) Tutorials, welche täglich von ca 15 000 Besuchern gelesen werden. Kürzlich wurde Lars mit dem Eclipse Top Contributor Award 2010 ausgezeichnet.

### Weitere Informationen

- [Folien](/files/appengine_folien.pdf)
- Tutorial: [Google AppEngine with Java](http://www.vogella.de/articles/GoogleAppEngineJava/article.html)

[Blog-Beitrag von Jörn Hameister](http://www.hameister.org/Blog/?p=1426)

![](/images/talks/appengine.jpg)