---
title: "Lebendige Architekturdokumentation mit den jMolecules"
speaker:
  - name: Oliver Drotbohm
    pic: oliverdrotbohm.jpg
    twitter: odrotbohm
  - name: Henning Schwentner
    pic: henning-schwentner.jpg
    twitter: hschwentner
date: 2021-12-09 18:30
youtube: QdbqQ9ypZD4
---

### Zusammenfassung

Gute Architektur enthält Muster. Aber welchem Muster folgt eine gegebene Klasse? Das explizit auszudrücken ist die Aufgabe der jMolecules. jMolecules ist eine Framework-unabhängige Bibliothek die folgendes erlaubt:

- Darstellen verbreiteter architektonischer Konzepte (wie Schichten oder DDD-Building-Blocks) direkt in Code. So wird es für den menschlichen Leser leichter zu verstehen, welchem Muster ein Stück Code folgt.
- Überprüfen, ob Regeln bezüglich der Implementierung dieser eingehalten werden, z. B. mit JQAssistant und ArchUnit.
- die nötige technische Integration, sowie entsprechende Dokumentation abzuleiten. Damit können Code-Generatoren die Infos nutzen um Boilerplate-Code zu reduzieren.

Nicht nur für Java, sondern auch für .net und PHP wird die Möglichkeit gegeben, Code entsprechend zu annotieren. In diesem Talk wird die brandneue Bibliothek von zweien ihrer Macher präsentiert.

### Sprecher

{% include speakerpic-name.html %} ist Senior Principal Software Engineer bei Pivotal. Seit über 12 Jahren widmet er sich dem Entwickeln von Java-Enterprise-Applikationen, Open-Source-Projekten und ist Mitglied der JPA Expert Group. Seine Arbeitsschwerpunkte liegen im Bereich Softwarearchitektur, Domain-driven Design, REST, Spring und Persistenztechnologien. Er ist regelmäßiger Sprecher auf deutschen und internationalen Konferenzen sowie Autor von Fachartikeln und des ersten Spring Data Buches.

{% assign speaker2 = page.speaker[1] %}
{% include speakerpic-name.html speaker=speaker2 %} liebt Programmieren in hoher Qualität. Diese Leidenschaft lebt er als Coder, Coach und Consultant bei der WPS – Workplace Solutions aus. Dort hilft er Teams dabei, ihre gewachsenen Monolithen zu strukturieren oder neue Systeme von Anfang an mit einer tragfähigen Architektur zu errichten. Häufig kommen dann Microservices oder Self-Contained Systems heraus. Henning ist Autor von „Domain Storytelling – A Collaborative Modelling Method“ und dem www.LeasingNinja.io sowie Übersetzer von „Domain-Driven Design kompakt“.
