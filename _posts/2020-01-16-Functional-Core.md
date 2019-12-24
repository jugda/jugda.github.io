---
title: "Functional Core für einen seiteneffektfreien Anwendungskern"
shortTitle: "Functional Core"
speaker: Kai Schmidt
speaker2: Thomas Ruhroth
speakerpic: kaischmidt.jpg
speakerpic2: thomasruhroth.png
twitter: electronickai
date: 2020-01-16 18:30
---

### Zusammenfassung

Erfreust du dich an den Vorteilen funktionaler Programmierung? Der Code ist verständlicher, da Funktionen keine Seiteneffekte haben. Immutable Objects vereinfachen das Debugging. Auch das Testen ist einfacher, weil Ergebnisse bei gleichen Eingabeparametern immer gleich sind. Solltest du deshalb auf rein funktionale Programmiersprachen umsteigen?

Das muss nicht sein. Die Vorzüge lassen sich auch in JVM Sprachen wie Java oder Kotlin nutzen. Wie ist das möglich? Durch die strikte Trennung von Funktionen mit und ohne Seiteneffekten (pure/impure Functions). Leider scheint das hierfür aus der Ruby-Welt bekannte Architekturmuster "Functional Core / Imperative Shell" in der Java-Welt kaum bekannt zu sein. Dies möchten wir mit diesem Vortrag ändern.

In dieser Architektur ist der Kern einer Anwendung ("Functional Core") funktional beschreibbar, Objekte sind immutable und Funktionen sind pure. Eingepackt wird der Kern in eine Seiteneffekt-behaftete Hülle ("imperative Shell") - schließlich müssen wir irgendwo Daten persistieren oder mit anderen Services sprechen. Wir möchten die Vor- und Nachteile dieses Musters aus Erfahrungen zusammenstellen, die von der Entwicklung bis zur Livesetzung von ES/CQRS-Microservices mit diesem Architekturprinzip entstanden sind.

### Sprecher

{% include speakerpic-name.html %} ist freiberuflicher Software-Entwickler und -Architekt. Zuvor war bei den IT-Beratungsunternehmen .msg systems ag und Capgemini angestellt. In seiner über 10-jährigen Projekterfahrung war er größtenteils in Java und C#-Projekten in den Bereichen Logistik, Flugzeugbau sowie Handel tätig. Bereits in seiner Kindheit hat er mit einem C64 erste Programmiererfahrungen gemacht. Heute berät und beteiligt er sich gerne an betrieblichen Anwendungssystemen und ist in der JUG sowie für Kids4IT aktiv.

{% include speakerpic-name.html speaker=page.speaker2 speakerpic=page.speakerpic2 twitter=page.twitter2 %}, Lead IT Consultant bei .msg systems ag, In seiner industriellen Arbeitserfahrung arbeitete er als Entwickler, Software-Architekt und Business-Analyst in verschieden Bereichen wie Geographische Informationssysteme und Logistik. In der Forschung liegt sein Fachgebiet in der Softwarespezifikation und in der Entwicklung langlebiger Informationssysteme. Der Wissenstransfer aus der Kombination von Forschungsarbeiten mit industrieller Anwendung ist in vielen seiner Projekte eine treibende Kraft.