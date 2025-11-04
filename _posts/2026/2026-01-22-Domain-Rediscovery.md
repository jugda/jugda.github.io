---
date: 2026-01-22 18:30
title: Domain Rediscovery Patterns für Legacy Code
speaker:
  - name: Richard Gross
    pic: richardgross.jpg
    linkedin: richargh
    bluesky: richargh.de
lastModified: 2025-11-02 21:32
hidePub: true
hybrid: true
seatLimit: 30
location: MaibornWolff GmbH, Mornewegstraße 32, 64293 Darmstadt
direction: https://maps.app.goo.gl/CaChAuG9TLJSRRXH9
---

## Abstract

Lange bevor das Programmieren losgeht stehen Legacy-Code-Projekte bereits vor großen Problemen. Es ist oft unklar welche Funktionen implementiert sind, wo sie sich befinden und welchen Reifegrad sie haben. Kurz gesagt, es besteht eine Lücke zwischen der Geschäftsdomäne und dem, was im Code implementiert ist.

In Projekten auf der grünen Wiese verwenden wir Tools und Patterns des Domain-Driven Design, damit diese Lücke nicht entsteht. Ein zusätzlicher Satz von Patterns wird jedoch benötigt, wenn wir mit Legacy-Code beginnen.

In diesem Vortrag werden wir die Kernmuster zur Wiederentdeckung der Domäne untersuchen. Diese Patterns gehen über das bloße Entschlüsseln der Funktionalität des Codes hinaus. Sie bieten Strategien, um die zugrunde liegenden Konzepte, Verhaltensweisen und Beziehungen in der Domäne zu verstehen.

<hr />
Nach einer Pause wird es noch einen Lightning Talk von Richard geben:

### Destructoring ist die Zukunft von Javas Encapsulation

Dekonstruktion – die Zerlegung eines Objekts in seine Bestandteile – ist der Schlüssel, damit Java Kapselung und Invarianten zuverlässig wahren kann. Dieses scheinbare Paradoxon lösen wir im Vortrag auf, indem wir uns vergangene und kommende Sprach- und Plattformfeatures im JDK ansehen.

Die klassische Java-Serialisierung bricht Kapselung: Sie greift direkt auf private Felder zu, umgeht damit Konstruktoren und die dort verankerten Prüfungen. Ursache ist, dass Dekonstruktion und Rekonstruktion bislang keine first-class Citizens im JDK waren.

Genau hier setzt aktuelle Arbeit im Rahmen von JDK Project Amber an – unter dem Arbeitstitel „Derived Record/Class Creation“. Der Ansatz erlaubt es, explizit festzulegen, wie Objekte de- und rekonstruiert werden. Damit lässt sich künftig nicht nur Serialisierung sicherer und robuster gestalten; wir gewinnen auch „Withers“ (zielgerichtete, unveränderliche Kopien mit einzelnen geänderten Komponenten) für Records sowie Pattern Matching, das über reine Record-Patterns hinaus auf normale Klassen erweitert wird.

Unter diesen Voraussetzungen lohnt sich ein genauer Blick: Was ist schon da, was kommt als Nächstes – und was bedeutet das für unsere tägliche Java-Praxis?

## Speakers

{% include speakerinfo.html index=0 %} ist IT-Archäologe bei MaibornWolff und verfügt über mehr als zehn Jahre Sanierungserfahrung. Sein Fokus liegt auf hexagonalen Architekturen, Hypermedia-APIs, TestDSLs und der ausdrucksstarken und eindeutigen Modellierung der Domäne als Code. Er beherrscht TDD, BDD, DDD, entkoppeltes Design und sogar Praktiken, die keine zwei D's beinhalten. Er hat auch das Open-Source-Projekt CodeCharta geformt, das es auch Nicht-Entwicklern ermöglicht, die Qualität ihrer Software zu greifen.

## Sponsors

[MaibornWolff](https://www.maibornwolff.de/) stellt uns die Räumlichkeiten zur Verfügung und sorgt für unser leibliches Wohl. Vielen Dank dafür.

[![logo](/images/sponsors/maibornwolff.svg){:width="200"}](https://www.maibornwolff.de/)
