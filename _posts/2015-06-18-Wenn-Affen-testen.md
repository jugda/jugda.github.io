---
layout: post
title: Wenn Affen Testen – Das Ende der Bananensoftware!
---

### Abstract

Wer hat den Teufelskreis aus Testing und Debugging noch nicht erlebt: In zwei Wochen ist Release-Date und die Tester finden täglich neue Fehler. Jeder Fehler führt zu einer Änderung im Programm. Und jede Änderung kann selbst wieder Fehler verursachen und muss deshalb getestet werden…

Testen macht derzeit ca. 20% der Kosten einer neuen Software aus, Tendenz steigen. Diese Kosten entstehen hauptsächlich durch manuelles Testen bzw. manuelle Testfallerstellung. GUI-Tests sind brüchig und bringen demzufolge einen hohen Pflegeaufwand mit sich – was die Amortisation verzögert. Deshalb werden heute 85% aller Oberflächentests noch manuell ausgeführt. Was wenn man automatisch Testen könnte? Und d.h. nicht manuell erstellte Tests (die will sowieso keiner erstellen und erst recht keiner pflegen) automatisch ablaufen lassen, sondern wirklich vollautomatisch Testen?

Monkey-Testing bezeichnet zufallsbasiertes Testen von Software über die Benutzeroberfläche, und findet vollautomatisch und kostengünstig Fehler. In diesem Vortrag zeige ich, wie jeder Anwesende mit ein paar Zeilen Code einen eigenen primitiven Affen zum automatischen Testen programmieren kann. Davon ausgehend zeige ich Ansätze und Konzepte, wie man diesen Affen (u.a. mit genetischen Algorithmen) immer weiter verbessern kann, bis er teilweise bessere Ergebnisse als menschliche Tester bringt. Dazu gibt es Demos und Erfahrungsberichte aus großen Projekten.

### Speaker

Dr. Jeremias Rößler ist Software Ingenieur und Experte für die Erstellung und Pflege großer, komplexer Softwaresysteme. Er besitzt über sechs Jahre Berufserfahrung in der Software-Entwicklung. 2013 hat er am Lehrstuhl für Softwaretechnik an der Universität des Saarlandes promoviert. Er ist Gründer von ReTest ([www.retest.de](http://www.retest.de)), einem IT-Dienstleistungsunternehmen das Software programmunterstützt testet.
