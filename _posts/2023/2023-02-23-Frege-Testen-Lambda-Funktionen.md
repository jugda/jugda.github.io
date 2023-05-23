---
title: "Doppelvortrag: 'Java ohne Seiteneffekte: Mit Frege ist Haskell toolmässig auf der JVM angekommen' und 'Lokales Testen von AWS Serverless Lambda-Funktionen'"
shortTitle: "Doppelvortrag: Frege Tooling auf der JVM und Testen von Lambda-Funktionen"
speaker:
  - name: Thibault Gagnaux
    pic: thibaultgagnaux.jpg
    twitter: trocktrick
  - name: Jens Knipper
    pic: jensknipper.jpg
date: 2023-02-23 18:30
attachments:
  "Frege-LSP-Server": https://github.com/tricktron/frege-lsp-server
  "Demo-Projekt zu Testen von AWS-Lambdas": https://github.com/JensKnipper/testing-aws-lambdas
youtube:
  - nIlffZeRzJc
  - 7ZYCd8_n6hs
---

### Java ohne Seiteneffekte: Mit Frege ist Haskell toolmässig auf der JVM angekommen

Was haben die Programmiersprachen Kotlin, Groovy, Scala, Clojure und selbst schlichtes Java gemeinsam? Alle bieten verschiedene funktionale Sprachfeatures für die Java Plattform an. Trotzdem kann in jeder dieser Sprachen ein unbemerkter Seiteneffekt auftreten. Das kann Euch mit Frege nicht passieren, weil jeder Seiteneffekt (z. B. Filezugriff, API-Request, ...) im Typsystem sichtbar ist.

Frege bringt dabei nicht nur alle bekannten Features von Haskell (pure Funktionen, starkes Typsystem, Laziness, ...) auf die JVM, sondern erlaubt auch die direkte Interaktion mit Java. Einerseits kann Frege direkt Java Code aufrufen und damit von bewährten Bibliotheken profitieren. Anderseits kann auch Java Frege Code ausführen, sodass eine bestehende Java Code Basis leicht erweitert werden kann.

In diesem Vortrag lernt Ihr, wie Ihr dank des neuen Toolings leicht den Sprung von Java nach Frege schafft, damit Fehler schneller erkennt und die Integration meistert.

Ich stelle Euch dazu eine Language Server Implementierung vor, die auch das Gradle Build-Management unterstützt. In einer Demo präsentiere ich, wie Ihr diese in Eurer Entwicklungsumgebung (IDE) nutzen und somit gleich mit Frege loslegen könnt. Mit verschiedenen Code-Beispielen zeige ich, wie Ihr eine modulare und funktionale Architektur aufbauen könnt.

### Lokales Testen von AWS Serverless Lambda-Funktionen

Das Testen von Microservices wird mittlerweile hinreichend praktiziert.
Bei Serverless-Functions wie AWS Lambdas, wird meist nur manuell nach einem Deployment getestet, speziell wenn es um die Logik geht, welche durch AWS bereitgestellt wird. Dabei ist es auch möglich, die Anwendung automatisiert lokal hochzufahren und zu testen. Aber wie geht das in einem (relativ) geschlossenen System wie der AWS-Cloud?
Durch den geschickten Einsatz von LocalStack, TestContainers und dem AWS-SDK ist es möglich, Component-Tests automatisiert auszuführen und etwaige Fehler in der Benutzung der Lambda-Funktion aufzudecken.

### Sprecher

{% include speakerpic-name.html %} arbeitet bei der INTEGON GmbH.

{% assign speaker2 = page.speaker[1] %}
{% include speakerpic-name.html speaker=speaker2 %} ist Software Engineer bei OpenValue in Düsseldorf. Er arbeitet gerne in verschiedenen Umgebungen, Architekturen und mit unterschiedlichen Technologien. Die Erkenntnisse die er dadurch gewinnt, versucht er durch Vorträge und Blog Artikel mit anderen zu teilen.

