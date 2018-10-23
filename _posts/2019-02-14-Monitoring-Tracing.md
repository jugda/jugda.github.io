---
title: "Doppelvortrag: Monitoring mit Prometheus/Grafana und Tracing in der Cloud"
shortTitle: Monitoring und Tracing
speaker: Antje Landschulz
speaker2: Björn Kasteleiner
speakerpic: antjelandschulz.png
speakerpic2: bjoernkasteleiner.png
twitter2: bjkastel
date: 2019-02-14 18:30
---

### Monitoring mit Prometheus und Grafana bei Systemen unter Last

Für die frühzeitige Erkennung und Behebung systemkritischer Probleme, insbesondere bei Systemen unter Last, ist ein gutes Monitoring unerlässlich. Prometheus ist als Zeitreihendatenbank ideal geeignet für das Speichern von für das Monitoring relevanten Metrikdaten, wie CPU-Auslastung, JVM Heap Size und Anzahl an Fehlermeldungen. Die gespeicherten Daten lassen sich mit der von Prometheus zur Verfügung gestellten Abfragesprache PromQL auslesen. Dies ermöglicht dem Team, frühzeitig zu erkennen, wann ein für das System kritischer Schwellenwert überschritten worden ist, und proaktiv zu handeln.

Besonders komfortabel und zeitsparend ist für Entwickler und Administratoren die Visualisierung der relevanten Daten in Form von Dashboards. Hierzu bietet sich Grafana mit seiner Schnittstelle zu Prometheus an. Um alle Interessierten über das Überschreiten eines definierten Schwellenwertes zu informieren, können mit Hilfe von Grafana Alert Notifications beispielsweise an eine E-Mail-Adresse oder einen Chatraum versendet werden.

Dieser Vortrag führt in das Monitoring mit Prometheus und Grafana ein und zeigt konkrete Einsatzszenarien für eure Vorhaben.

### Fährtenlesen für Microservices: Tracing in der Cloud

In verteilten Microservices ist es mitunter schwer, einen Überblick zu erhalten. Wie viel Zeit benötigen die einzelnen Teilschritte eines Aufrufs? An welcher Stelle tritt ein Fehler auf? Warum dauern einzelne Aufrufe länger als andere?

In unseren Projekten nutzen wir Tracing als Ergänzung zu Logging und Metriken, um diese Fragen zu beantworten. Tracing hilft, die Laufzeit von Teilschritten im Zusammenhang zu ermitteln, wiederholte Aufrufe zu identifizieren und unsinnige Reihenfolgen aufzudecken. Auch asynchrone Verarbeitung kann visualisiert werden. Insbesondere bei komplexen Zusammenhängen zwischen einzelnen Applikationen unterstützt es bei der Fehlersuche und spart damit Zeit.

Der Vortrag zeigt, wie mit OpenTracing und Jaeger vorhandene Spring-Boot-Anwendungen um Tracing erweitert werden. Für HTTP/REST, Datenbanken und Queues existieren bereits vorgefertigte Standard-Instrumentierungen. An anderen Stellen können Aufrufe von Hand instrumentiert werden. Der Vortrag gibt zusätzlich einen Überblick, welche Infrastruktur-Komponenten notwendig sind.
	
### Sprecher

{% include speakerpic-name.html %} arbeitet als Software-Entwicklerin im Smart Home-Umfeld bei der Deutschen Telekom AG. Zuvor war sie als Java-Entwicklerin für IT-Consultingunternehmen in Deutschland und in der Schweiz in Projekten für die Automobil- und Flugzeugindustrie, die Finanzindustrie sowie den Bereich öffentlicher Verkehr und Transport (Bahnwesen) tätig.
 
{% include speakerpic-name.html speaker=page.speaker2 speakerpic=page.speakerpic2 twitter=page.twitter2 %} arbeitet bei der msg systems ag als Senior IT Consultant. Beruflich beschäftigen ihn Themen wie der Aufbau von Cloud-Infrastrukturen oder Softwareentwicklung mit Java. Er tüftelt gerne an Problemen und lernt mit Vergnügen neue Technologien kennen.