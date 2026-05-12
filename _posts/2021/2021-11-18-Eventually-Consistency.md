---
title: Eventual Consistency – Du musst keine Angst haben
speaker: Susanne Braun
speakerpic: susanne_braun.jpg
twitter: susannebraun
date: 2021-11-18 18:30
---

### Zusammenfassung

Der Trend zu hochskalierenden Cloud-Anwendungen, die stark auf datengetriebene Features setzen, ist ungebrochen. Dadurch laufen immer mehr Anwendungen nur noch unter Eventual Consistency. Nebenläufige Änderungsoperationen auf inkonsistenten, replizierten Datenbeständen können allerdings zu schweren Replikations-Anomalien wie Lost Updates führen. Das Implementieren korrekter Merge-Logik im Fall von Schreibkonflikten ist eine große Fehlerquelle und selbst für sehr erfahrene Software-Architektinnen eine Herausforderung. Basierend auf unseren Erfahrungen aus verschiedenen Kunden- und Forschungsprojekten entwickeln wir Architektur-Empfehlungen und Entwurfsmuster für das Design von Anwendungen, die unter Eventual Consistency laufen. Parallel treiben wir die Entwicklung eines Open-Source-Replikations-Frameworks, welches unsere Methoden unterstützt, voran. Der Vortrag gibt konkrete Hilfestellungen für Architektinnen und beinhaltet eine Demo-Session.

### Sprecher

{% include speakerpic-name.html %} ist Entwicklerin, Software-Architektin und Forscherin am Fraunhofer IESE. Sie hat mehr als 10 Jahre professionelle Erfahrung und war lange Zeit für Capgemini, sd&m und die Accso GmbH tätig, bevor sie zu Fraunhofer wechselte. In ihrer PhD erforscht sie, wie man zu besseren Software-Architektur-Konzepten für verteilte Systeme kommt. Sie spricht regelmäßig auf Konferenzen, ist aktives Mitglied der Java User Group Community, Mitglied im Programm-Komitee der JavaLand sowie Co-Organisatorin der CyberLand Events.
