---
title: Testen von und mit Infrastruktur - Integration Testing done right
shortTitle: Testen von und mit Infrastruktur
speaker: Sandra Parsick
speakerpic: sandraparsick.jpg
twitter: SandraParsick
date: 2019-12-11 18:30
---

### Zusammenfassung

Heutzutage läuft eine Software nicht für sich alleine, sondern agiert mit Anderen. Die Kommunikation erfolgt meist über verschiedene Protokolle, sprich über verschiedene Infrastruktur-Komponenten. Gerade beim Testen stellt sich die Frage, wie kann der Entwickler Tests so schreiben, dass sie von einem bestimmten Infrastruktur-Setup unabhängig sind. Meistens gelingt es nicht und dann wird dieser Teil der Software erst spät bei den End-2-End-Tests geprüft. 

Doch gerade mit Microservices und dem Paradigma 'Wenn etwas schief läuft, dann so schnell wie möglich' möchte der Entwickler schon zu einem früheren Testzeitpunkt, z.B. bei den Entwicklertests, erfahren, wenn bei diesem Teil der Software etwas schief läuft. Zudem macht die Infrastruktur nicht beim Anwendungscode halt. Mittlerweile wird die Infrastruktur immer mehr mit Hilfe von Code (Provisionierungsskripte, Dockerfiles, (Shell-) Skripte etc. ) beschrieben und automatisiert. Auch bei diesem Code möchte der Entwickler sicher gehen können, dass er so funktioniert wie erwartet. 

Dieser Vortrag zeigt anhand einer Java-Anwendung, wie man mit Hilfe von 3rd-Party-Libraries die Infrastruktur in den Tests der Anwendung einbinden kann ohne sich gleich von einer bestimmten Infrastruktur abhängig zu machen. Darüber hinaus, wird darauf eingegangen wie die Qualität des Infrastruktur-Codes gesichert werden kann, angefangen bei klassischen Provisionierungswerkzeugen bis hinzu Containern.

### Sprecher

{% include speakerpic-name.html %} ist als freiberufliche Softwareentwicklerin und Consultant im Java-Umfeld tätig. Seit 2008 beschäftigt sie sich mit agiler Softwareentwicklung in verschiedenen Rollen. Ihre Schwerpunkte liegen im Bereich der Java Enterprise Anwendungen, agilen Methoden, Software Craftsmanship und in der Automatisierung von Softwareentwicklungsprozessen. Darüber schreibt sie gerne Artikel und  spricht auf Konferenzen.

In ihrer Freizeit engagiert sich Sandra Parsick in der Softwerkskammer Ruhrgebiet, einer Regionalgruppe der Software Craftmanship Community im deutschsprachigen Raum. Seit 2019 ist sie Mitglied im Oracle Groundbreaker Ambassador Programm.
