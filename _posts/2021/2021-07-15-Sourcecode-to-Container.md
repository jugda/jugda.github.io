---
shortTitle: Vom Source Code zum Container
title: Viele Wege führen vom Source Code bis zur Containerlaufzeit
speaker: Matthias Häußler
speakerpic: matthiashaeussler.jpg
twitter: maeddes
date: 2021-07-15 18:30
---

### Zusammenfassung

Ein typischer Workflow in moderner Software Entwicklung beinhaltet oft folgende Schritte: Den Code in eine git Repo, kompilieren, ein Container Image bauen, das Image in eine Registry und Deployment auf einen Kubernetes Cluster. Jeder Schritt hat seine eigenen Anforderungen und Herausforderungen. Das große gemeinsame Ziel ist es zumeist diese Schritte in eine wiederholbare Pipeline zu bekommen und so den Grad der Automation zu erhöhen. Gerade in dem Bereich der Container Images scheinen Dockerfiles die Option mit der größten Akzeptanz zu sein. Es gibt jedoch mittlerweile einige Alternativen, die ein paat Stolperfallen vermeiden und diesen Teil des Prozesses noch mehr standardisieren können.

Dieser Vortrag gibt tiefere Einblicke in diese Optionen und vergleicht (multi-stage) Dockerfiles mit Cloud-Native Buildpacks, Paketo und Google’s JIB anhand der Kriterien Geschwindigkeit, Größe des Image, Standardisierung, Robustheit und Sicherheit. Die Beispiele und live Demo haben einen gewissen Fokus auf Java-basierte Frameworks (Spring Boot, Quarkus, Micronaut), aber auch andere Programmiersprachen werden behandelt.

Das gewünschte „take-away“ dieses Vortrags ist ein besserer Übernlick über den Container Build Mechanismus und die verschiedenen Optionen hierbei sowie ein Verständnis der Anforderungen, Vorteile und Nachteile dieser Varianten.

### Sprecher

{% include speakerpic-name.html %} ist Cheftechnologe bei der Novatec Consulting, Cloud Foundry Ambassador, sowie Organisator des Meetups Stuttgart. Er berät Kunden zu deren Cloud Strategie und unterstützt aktiv Architektur, Design, Implementierungen und Migrationen. Davor war er über 15 Jahre bei der IBM Forschung & Entwicklung. Er hat vielseitige Erfahrung im Education Bereich durch verschiedene Vorlesungen an Hochschulen (DHBW, HSE, HfT) und seiner Rolle als Instructor für Docker, Kubernetes und Cloud Foundry Schulungen. Daneben ist er oft Speaker bei sowohl lokalen Usergroups als auch internationalen Konferenzen. (z.B. Spring One Platform, KubeCon, Cloud Foundry Summit, Spring IO, IBM InterConnect, WJAX).
