---
title: Neo4j und jQAssistant
speaker: Dirk Mahler
speakerpic: dirk_mahler.jpg
date: 2015-11-19 18:30:00+01:00
formid: 15Ggbgwjt3tWVDvnnPYAORQbfDSAfDiaFVP10PpGg5Dw
---

### Abstract

NOSQL und Big Data sind zur Zeit in aller Munde - große Datenmengen sind aber nur eine Seite der Medaille. Im gleichen Maße steigt die Komplexität der Daten mit denen wir tagtäglich zu tun haben. Graphendatenbanken wurden dafür entwickelt, Datenmodelle mit großen Mengen an interessanten Verknüpfungen effizient zu speichern, verarbeiten und schnell zu navigieren.

Seit 10 Jahren hilft die Graphdatenbank Neo4j Nutzern, ihre vernetzten Daten leichter zu modellieren und die Antworten auf herausfordernde Fragen zu finden. Neo4j ist in Java implementiert, und bietet in der JVM besondere Vorteile, kann aber von jeder Programmiersprache aus genutzt werden.

Als einen Teil von Neo4j wurde die deklarative Abfragesprache Cypher entwickelt, die darauf ausgerichtet ist, komplexe Graphenstrukturen leicht verständlich darzustellen.

Im ersten Teil des Abends gibt es eine Einführung in Graphen als Datenmodell, die Einordnung von Graphendatenbanken in NoSQL und Infos über Neo4j und wie man mit (Java), Neo4j und Cypher schnell zu ersten Ergebnissen kommt.

Im zweiten Teil wird dieses Wissen praktisch angewendet.
Das open-source Softwareanalyse Werkzeug jQAssistant nutzt Neo4j um vorher gescannte Informationen über Softwareprojekte (Code, Konfiguration, DBMS-Metainformationen, Build-Dependency, Test- und Analyseergebnisse und vieles mehr) in einem flexiblen Neo4j Datenmodell zu speichern.
Für die Deklaration von Konzepten zur Anreicherung des Graphen aber auch für Constraints die bestimmte Softwareentwicklungs- und Architekturregeln verifizieren werden Cypher Statements genutzt. Die Regeln von jQAssistant können in den Buildprozess integriert werden um dann z.b. den Build abzubrechen. Aus den vorhandenen Informationen im Graphen können auch Reports und Visualsierungen für Metriken, Abhängikeiten und Regelverletzungen generiert werden.

### Speaker

{% include speakerpic.html %}
__Dirk Mahler__ ist Senior-Consultant bei der buschmais GbR, einem Beratungshaus mit Sitz in Dresden. Der Schwerpunkt seiner mittlerweile mehr als 10-jährigen Tätigkeit liegt im Bereich Architektur für Java-Applikationen im Unternehmensumfeld. Den Fokus setzt er dabei auf Erarbeitung und Umsetzung ausgewogener Lösungen im Spannungsfeld zwischen Pragmatismus, Innovation und Nachhaltigkeit. Vor diesem Hintergrund engagiert er sich für die Themen Softwareanalysen und Qualitätssicherung auf der Basis des Open-Source-Projektes jQAssistant.
