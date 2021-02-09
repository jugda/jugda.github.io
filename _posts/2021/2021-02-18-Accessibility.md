---
title: "Doppelvortrag: 'Building truely accessible software' und 'Technische Gründe für schlechte Entwicklungsperformance'"
shortTitle: "Doppelvortrag: 'Barrierefreiheit' und 'Metaprogrammierung in Java'"
speaker:
  - name: Anna Maier
    pic: annamaier.jpg
    twitter: a_n_n_a_m
  - name: Thorben Kuck
    pic: thorbenkuck.jpg
    twitter: thorbenku
date: 2021-02-18 18:30
---

### Zusammenfassung

Wie schon in den letzten Jahren haben wir uns wieder zwei JavaLand-Newcomer eingeladen, die bei uns die Generalprobe ihres JavaLand-Vortrags halten. Wir wünschen uns für die beiden möglichst viel Feedback, welches sie bis zur Konferenz in ihre Vorträge einarbeiten können.

### Building truely accessible software

Barrierefreiheit rückt bei modernen Softwareprodukten immer stärker in den Fokus. 
Leider ist sie oft nur oberflächlich am Ende der Entwicklung auf das Produkt aufgepfropft.
Noch dazu fehlt oft das Gespür dafür, wie die Hindernisse aussehen, auf die Benutzer stoßen können.
Am Ende hat man dann oft ein Produkt, dass stellenweise barrierefrei für einige Benutzer ist.

Mit diesem Vortrag möchte ich einen Einstiegspunkt in das komplexe Thema bieten. Ich erkläre, 
was Barrierefreiheit wirklich ausmacht, wem sie nützt und warum man sich bei der Entwicklung 
einer barrierefreien Anwendung nicht nur auf Tools verlassen sollte.


### Der Hase und der Igel: Technische Gründe für schlechte Entwicklungsperformance

Der Startup-Prozess klassischer Java Enterprise Applikationen verhält sich wie der Hase. Er läuft und läuft und läuft und braucht trotzdem sehr lange um das Ziel zu erreichen. Egal ob Spring oder JEE. Der Grund dafür ist eine spezielle Art der Metaprogrammierung, die von den meisten Frameworks verwendet wird. Aber warum eigentlich? Was können wir da besser machen? Was ist eigentlich Metaprogrammierung? Was hat Quarkus damit zu tun? Und wäre es nicht möglich, wie der Igel, den Hasen am Ziel mit einem „Ich bin schon da“ zu begrüßen? In diesem Talk möchte bei "null" anfangen, grundlegend erläutern was Metaprogrammierung eigentlich ist und den aktuellen Stand der Industrie in Bezug auf Metaprogrammierung in Java erläutern, alternativen aufzeigen und vergleichen.

### Sprecher

{% include speakerpic-name.html %} ist Softwareentwickler bei TOPdesk und Mitgründerin der JUG Kaiserslautern. 
Sie ist im Backend und Frontend unterwegs und setzt sich bei TOPdesk für Barrierefreiheit ein.

{% assign speaker2 = page.speaker[1] %}
{% include speakerpic-name.html speaker=speaker2 %} ist Enterprise Developer bei der OPEN KNOWLEDGE GmbH in Oldenburg. Er arbeitet an Mikroservice Architekturen. Sein aktuelles Projekt baut dabei auf Kafka auf. Zu seinen Interessen gehören verteilte Systeme sowie Metaprogrammierung.