---
date: 2025-10-23 18:30
title: What the CRaC - Superfast JVM startup
speaker:
  - name: Gerrit Grunwald
    pic: gerritgrunwald.jpg
    web: http://www.harmonic-code.org
    mastodon: mastodon.social/@hansolo_
    linkedin: gerritgrunwald
    twitter: hansolo_
lastModified: 2025-03-18 11:40
hidePub: true
seatLimit: 30
location: andrena objects, Corporate Coworking Space, Europapl. 2, 64293 Darmstadt
direction: https://goo.gl/maps/H5fx6Q7qAWj8EYKYA
---

## Abstract

In a world where microservices are more and more a standard architecture for Java based applications running in the cloud, the JVM warmup time can become a limitation. Especially when you look at spinning up new instances of an app as response to changes in load, the warmup time can be a problem. Native images are one solution to solve these problems because their statically ahead of time compiled code simply doesn’t have to warmup and so has short startup time. But even with the shorter startup time and smaller footprint it doesn’t come without a drawback. The overall performance might be slower because of the missing JIT optimisations at runtime. There is a new OpenJDK project called CRaC (Coordinated Restore at Checkpoint) which goal it is to address the JVM warmup problem with a different approach. The idea is to take a snapshot of the running JVM, store it in files and restore the JVM at a later point in time (or even on another machine).

This session will give you a short overview of the CRaC project and shows some results from a proof of concept implementation.

⚠️ Der Vortrag ist auf Deutsch geplant. 

⚠️ The lecture is planned in German. However, it can also be held in English if there is interest.


## Speakers

{% include speakerinfo.html index=0 %} is a software engineer that loves coding for around 40 years already. He is a true believer in open source and has participated in popular projects like JFXtras.org as well as his own projects (TilesFX, Medusa, Enzo, SteelSeries Swing, SteelSeries Canvas, JDKMon).
Gerrit blogs regularly at http://harmonic-code.org, he is an active member of the Java community, where he founded and leads the Java User Group Münster (Germany), he is a JavaOne rockstar and a Java Champion. He is a speaker at conferences and user groups internationally and writes for several magazines.

## Sponsors

[Andrena](https://www.andrena.de/) stellt uns die Räumlichkeiten zur Verfügung und sorgt für unser leibliches Wohl. Vielen Dank dafür. 

[![logo](/images/sponsors/andrena.png)](https://www.andrena.de/) 
