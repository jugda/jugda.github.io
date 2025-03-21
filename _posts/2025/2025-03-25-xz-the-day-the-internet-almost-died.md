---
date: 2025-03-25 18:30
lastModified: 2025-02-10 21:00
title: "XZ: The day the Internet (almost) died"
speaker:
- name: Reinier Zwitserloot
- name: Roel Spilker
speakerpic: RoelReinier.jpg
hidePub: true
seatLimit: 25
location: QAware @ Coworking Space SleevesUp!, Am Kavalleriesand 5, 64295 Darmstadt
direction: https://maps.app.goo.gl/CZqAZLKYVT813ezg9
hybrid: false
hideVideoRecording: true
important: Wir sind zu Gast bei QAware im Coworking Space SleevesUp.
---

## Abstract

A curious blip in a timing test made Andres Freund (a PostgreSQL developer) raise an eyebrow and investigate. Little did he know he would uncover one of the most elaborate hacking attempts known to date using an open source project.

A team of Russian hackers had been working for over a year on infiltrating an open source project called XZ utils (also known as LZMA utils). They came eerily close to having a compromised version shipped as part of the ‘stable’ releases of various linux distributions, including debian. You know: The stuff that 90% of the internet runs on. It would have allowed the hackers to log in as root to virtually all machines running linux and having ssh open, anywhere on the planet.

This talk is for the programmers. We’ll show you exactly how the hackers compromised XZ, and which James Bond-like shenanigans they used to mislead the maintainer. Can you spot the error in a pull request that was put there intentionally to disable a security feature? Do you know how one sneaks a binary executable into a project build, when linux maintainers ordinarily demand all can be built from source?

As maintainers of Lombok, we'll also give some advice to those who maintain or rely on open source software.

WARNING: You will leave the room in awe of the games the attackers played. You will be scared witless too; how close we came to disaster and how none of the current safety measures that aim to prevent supply side attacks would have been able to stop this attack.

## Speakers

{% include speakerpic.html %}

_Reinier Zwitserloot_ is co-founder and development lead at Zorg op Orde,
helping general practitioners, bridging the gap between medical researchers and the waiting room. 
Together with Roel Spilker he is the inventor of Project Lombok, 
a compiler/IDE plugin to bring the java programming language into the next decennial.

_Roel Spilker_ is a technology evangelist at TOPdesk.
He's been a professional java programmer and teacher since 1999. 
Roel has been a fan of compile-time checking.
Together with Reinier Zwitserloot he is the inventor of Project Lombok, 
a compiler/IDE plugin to bring the java programming language into the next decennial.

## Sponsor

Die Firma [QAware](https://www.qaware.de/) stellt uns die Räumlichkeiten zur Verfügung und sorgt für unser leibliches Wohl. Vielen Dank dafür. Der übliche Abstecher in den Hotzenplotz nach dem Vortrag entfällt somit - wir bleiben einfach vor Ort!

[![QAware Logo](/images/sponsors/qaware.png)](https://www.qaware.de/)
