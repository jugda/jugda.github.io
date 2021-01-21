---
layout: post
eventType: report
title: The Ultimate Tic Tac Toe Challenge - ein Erfahrungsbericht
---

Am 15.02.2014 fanden sich knapp 30 Interessierte zur ersten [“Ultimate Tic Tac Toe Challenge”](https://github.com/ascheman/tictactoe/wiki/The-Ultimate-Tic-Tac-Toe-Challenge) der Java User Groups Darmstadt, Frankfurt und Mannheim ein. Es wurde den ganzen Tag fachgesimpelt und programmiert. Nach über 11 Stunden gingen alle wie geplant mit zufriedenen Gesichtern nach Hause und diskutierten noch, wann und wo es weitergehen soll. Das Event war aus Sicht der Veranstalter und Teilnehmer ein rundum voller Erfolg.

#### Worum ging es?

Die Idee bei der Veranstaltung war, eine Reihe von begeisterten Entwicklern, Architekten oder anderweitig an Software-Erstellung Interessierten für einen Tag zusammenzuholen: Kleine Teams würden ein gemeinsames Thema aus verschiedenen Blickwinkeln betrachten, z.B., Client- vs. Server-Entwicklung, Automatische Tests, Software-Design und -Architektur. Als Leitlinie sollte ein einfaches Spiel, also Tic Tac Toe dienen, zu dem es auch schon eine primitive Implementierung gab. Den Teilnehmern war es freigestellt, das gemeinsame Thema zu verfolgen oder sich mit anderen Ideen an die Arbeit zu machen. Es gab natürlich die Hoffnung, dass die verschiedenen Teams sich an der gemeinsamen Linie orientieren und im Laufe des Tages auch ihre Ansätze miteinander integrieren.

#### Wo hat es stattgefunden?

Das [CoWo21](http://cowo21.de/), ein Coworking-Space  im Herzen von Darmstadt hat uns freundlicherweise seine Räumlichkeiten für den ganzen Tag überlassen. So stand uns ein großer Gemeinschaftsraum zur Verfügung, und fünf kleinere Räume mit Büro-Einrichtung, Flipcharts/White Boards, natürlich LAN/WLAN und genügend Ecken, um mal ein wenig abseits von den Gruppen zu plaudern. Wie bei einer guten Party haben sich die interessantesten Gespräche vermutlich rund ums Buffet ergeben, für das wir die Firma msg systems als Sponsor gewinnen konnten: Ein lokaler Caterer hat ständig belegte Brote, Kuchen und natürlich diverse Getränke nachgefüllt.

#### Wie lief es ab?

#### Erstes Kennenlernen bei Kaffee und Brötchen

Etwa ab viertel nach Acht trudelten die ersten ein, malten sich ein Namensschild, schnappten sich ein oder zwei Brötchen und einen Kaffee und begannen sich gegenseitig zu beschnuppern oder auch nur, ein wenig wach(er) zu werden. Einige waren schon in kleinen Gruppen gekommen oder kannten sich anderweitig, andere konnten in der ungezwungenen Atmosphäre aber schnell mit in die Gespräche einsteigen.

Erfreut stellten wir fest, dass wir Gäste aus Saarbrücken, Koblenz und Kaiserslautern zur Fahrt nach Darmstadt motiviert hatten.

#### Vorstellung von Leuten, Ideen und Themen

Um Neun ging es mit einer kleinen Vorstellung des Events und Ablaufes und einer kurzen Vorstellungsrunde los: Jeder durfte nur kurz seinen Namen und ein wenig zu seinem persönlichen Hintergrund sagen, insbesondere seine größte Stärke und seine größte Schwäche, was beim einen oder anderen schon zu einem ersten Schmunzeln der restlichen Mannschaft führte.

Dann konnten die Teilnehmer ihre Ideen und Wünsche vorstellen, was zum Teil kurze mündliche Vorträge waren, oder auch eine vorbereitete Präsentation oder eine Demo des Draw-Bots des Hacker-Space Frankfurt.

Es ergaben sich etwa 11 Vorschläge, die zum Teil auch schon kurz diskutiert und miteinander verglichen wurden, z.B., die Definition einer REST-basierten API, verschiedene Clients, z.B. mit Android oder DARTs, ein Spiele-Server auf Basis von Web-Sockets und Node-JS usw.

#### Auswahl der Themen

Anschließend wurde einfach abgefragt, wer an welchem Thema teilnehmen wollte, wobei jeder 3 Stimmen hatte, die er beliebig verteilen konnte. Schön ist es, dass in so einer übersichtlichen Gruppe keine große Kontrolle oder Koordnation nötig ist, sondern am Ende tatsächlich eine nach Stimmen priorisierte Liste der am meisten gewünschten Themen vom Flipchart abzulesen ist. Nun mussten wir nur noch feststellen, wer denn in welchem Team starten will: Die Anzahl der Stimmen lässt ja keinen Rückschluss auf die tatsächlichen Teilnehmer zu. Hier gab es noch kleinere Verschiebungen, aber nach kurzer Zeit, war klar, welche Themen am Start sind und sich auf die verschiedenen Räume verteilen sollten:

- Android-Client
- Lego Mindstorms/DrawBot
- DART-Client
- API/REST
- Spring Data
- Node.js/Websockets

Eine Gruppe hat dann doch nie so mit ihrem Thema angefangen, sondern am Rande anderer Teams ihre Interessen gesucht, aber im Großen und Ganzen konnte man nach kurzer Zeit in allen Räumen und Ecken geschäftige Diskussionen beobachten.

#### Der Tagesablauf

Die Leute, die die jeweiligen Themen vorgeschlagen hatten, sind dann auch als Moderator des Themas mit in die jeweilige Gruppe gegangen und haben versucht, die Gruppenarbeit zu starten und am Laufen zu halten – was kaum ein Problem war, alle waren mit so viel Begeisterung und Enthusiasmus dabei, dass die Gruppen fast von selbst liefen.

Je nach Thema bauten die Gruppen dann erst mal ihr Equipment auf, die einen ein Flipchart zur großen API-Diskussion, die nächsten die mitgebrachten Lego-Mindstorm-Sets und wieder andere hängten sich per Switch ans LAN und richteten IDEs und andere Tools her. Jede Gruppe war damit beschäftigt, arbeitsfähig zu werden, sich auf eine gemeinsame Kommunikationsplattform zu einigen, Accounts einzurichten oder wieder hervorzusuchen und erste Tipps- und Tricks auszutauschen, z.B., über benötigte Eclipse- oder Maven-Plugins. Hier zeigte sich, dass Google mit Tools wie Drive oder Hangouts eine gute gemeinsame Basis bietet, um sich schnell und unkompliziert zusammenzufinden. Dank Github war die gemeinsame Arbeit am Code auch kein Problem. Ebenso wurde das bereits vorbereitete Equipment (Jenkins als Build-Server, Nexus als Artefakt-Server, Linux-KVMs als Runtime-Container) einbezogen.

#### Arbeit innerhalb der Teams

Die Teilnehmer sind natürlich mit unterschiedlichen Vorkenntnissen und Interessen gekommen, manche kannten sich sehr gut aus und wollten ihre Erfahrungen gerne mit anderen teilen, andere wollten sich einfach mal mit einem neuen Thema beschäftigen. Dementsprechend ging es innerhalb der Teams manchmal um einfache Fragen oder auch mal um sehr spezifische technische Feinheiten. Einige der Teams haben im folgenden Ihre Erfahrungen beschrieben.

##### DART

Nach dem sich die Gruppe versichert hatte, das niemand in der Gruppe schon echte Erfahrungen mit DART hatte, ging es los mit Herunterladen der nötigen Binaries. Die Entwicklungsumgebung inkl. allem was nötig ist (jdk vorausgesetzt) ist ein leichtgewichtiges und optimiertes Eclipse mit der Möglichkeit, die DART-Anwendung zu starten (installierter Chrome Browser vorausgesetzt).

Nächster Schritt war das Aufsetzen eines github-Projekts ([https://github.com/derjust/tictactoe](https://github.com/derjust/tictactoe)) und das gemeinsame Coding konnte beginnen. Jeder hat sich erst einmal mit ein paar Beispielen beschäftigt, um die grundsätzlichen Eigenschaften der Sprache kennenzulernen.

Als Grundlage für den TicTacToe-UseCase wurde nun die Anwendung grob entworfen. Ein Teil der Gruppe hat sich die Anbindung des Servers vorgenommen und ein anderer Teil mit dem Frontend beschäftigt.

Die Serveranbindung wurde rasch vorangetrieben, es konnte aber noch kein Backend integriert werden, da sich die API/REST Truppe noch nicht zu einer Veröffentlichung der Schnittstelle durchringen konnte.

Im Frontend gab es verschiedene Optionen auszuprobieren. Da gab es den Canvas und SVG als Grundlage für Spielfeld und UI. Der Canvas wurde ausgewählt und soweit ausgebaut, das ein TicTacToe Spiel möglich war.

Parallel begann die Gesamtintegration. Eine Einstiegsmaske sollte es ermöglichen, Spielernamen einzugeben. Auf einer weiteren Maske sollte es möglich sein, Spiele anzulegen und existierenden Spielen beizutreten. Die eigentliche Spielmaske wurde aufgerufen, sobald ein Spiel eröffnet oder einem Spiel beigetreten wurde. Für die Integration und den Ablauf über die verschiedenen Masken wurden verschiedene DART-Frameworks ausprobiert mit denen die Teilnehmer leider nicht erfolgreich zum Ziel gelangten. Letztendlich ist die Integration dann ohne Framework umgesetzt worden.

Inzwischen hatte es auch die Schnittstelle inkl. laufender Instanz für das Backend gegeben. Nachdem die Anbindung erfolgreich programmiert war, begann das Testen. Bis zum Schluss wurden Probleme behoben und versucht das Gesamtwerk abzuschließen.

Ingesamt hat es großen Spass gemacht, zu experimentieren und ohne den Projektalltagsüblichen Druck zu programmieren und sich auszutauschen. (Bericht von Sebastian R. aus der DART-Gruppe).

##### API/REST

Genaugenommen waren wir nicht nur das Team API/REST-Schnittstelle, sondern auch ein bißchen DDD und Planen von User Stories. Aufgrund der vielen Themen-Vorschläge wurden wir zu einer Gruppe mit knapp 8 Leuten zusammengefasst. Und am Anfang war es dadurch auch gar nicht so leicht, weil wir relativ unterschiedliche Ideen hatten, was wir an dem einen Tag tun wollten. Das eigentliche Ziel (TicTacToe-Backend mit REST-API für die verschiedenen Client-Teams) war zwar klar, aber auf dem Weg dorthin zog unser großes Team in verschiedene Richtungen. Nachdem die erste Stunde mehr mit Diskussion über mögliche User Stories und das Definieren von Domain-Objekten schnell ins Land gegangen war, setzten sich die Hacker dann doch irgendwann durch. Wir wollten eigentlich nur gemeinsam den neuen JBoss Application Server Wildfly ausprobieren und mit JAX-RS 2.0 ein einfaches Backend zur Verfügung stellen. Leider war auch die zweite Stunde noch nicht so produktiv, da wir dann erstmal unsere Entwicklungsumgebungen einrichten und den Server herunterladen mußten. Das Erstellen eines Java EE 7 Maven Projekts hatte dann auch noch einige Tücken.

Aber irgendwann lief es auf vier Rechnern und wir konnten uns prima in die Arbeit reinteilen. Das Spezifikations-Sub-Team hatte derweil vorgearbeitet und immerhin schonmal die wichtigsten REST-Ressourcen analysiert und vor allem dokumentiert. Das konnte dann relativ schnell von zwei Leuten implementiert werden. Zwei weitere von uns haben sich um das Buildmanagement und die Infrastruktur gekümmert, also auf einem Linux-Server einen Wildfly installiert, eine Jenkins-Projekt angelegt, welche jedes erfolgreiche Build gleich auf dem Server deployed hat. Mittlerweile war der Tag aber doch schon weit fortgeschritten und die Client-Teams standen immer öfters auf der Matte, wann denn unser Beispiel-REST-Service endlich laufen würde. Rudimentär bekamen wir das zum Schluß auch hin, es konnten sogar noch erste Änderungswünsche und Bugfixes ausgeführt werden. Außerdem hatten zwei Hacker wieder freien Spielraum, um gleich noch ein einfaches Webfrontend oben drauf zu setzen.

Alles in allem war es trotzdem ein sehr spannendes Projekt, wo wir alle wieder etwas gelernt haben. Am Anfang haben wir zuviel Zeit mit Diskussionen und dem Einrichten verplempert. Das war etwas schade, hat uns so am Ende einfach ein Stündchen gefehlt, um unsere REST-Schnittstelle und das Backend-System noch rund zu bekommen. Aber schließlich war der Weg das Ziel und möglicherweise bekommen wir bei einer Folgeveranstaltung nochmal die Möglichkeit, an unsere Arbeit anzuknüpfen.

#### Kommunikation zwischen den Teams

Die unterschiedlichen Teams behandelten ihre Themen und haben sich im Laufe des Tages unterschiedlich stark miteinander ausgetauscht. Da wir alle an einem Ort waren, konnte man einfach mal zu den anderen hinübergehen und offene Fragen klären, oder sich mal eine Viertelstunde in eine Diskussion reinhängen. Das ging natürlich nicht ohne die eine oder andere Frotzelei: “Wenn Ihr mal Eure Anforderungen klar spezifiziert hättet, hätten wir das natürlich so oder so implementieren können”, oder “Das Protokoll ist natürlich völlig unabhängig davon, welcher Spieler mit x oder o spielt, das überlassen wir der Präsentationsschicht”.

#### Wie sind wir die hochbegeisterte Meute wieder los geworden?

Leider mussten uns einige Teilnehmer schon vor dem geplanten Ende des Events verlassen, aber die meisten konnten wir um ca. viertel nach sechs zu einer Abschlussbesprechung zusammenholen. Zum einen hat jedes Team nochmal kurz seine Arbeit vorgestellt, teilweise sogar mit kurzen Demos. Zum anderen konnte jeder Teilnehmer nochmal seine Meinung sagen. Die große Mehrzahl der Beiträge hatte eine sehr positive Grundstimmung: Der Tag hatte offensichtlich allen viel Spaß gemacht, Ablauf und Ergebnisse wurden gelobt. Es gab aber auch ein paar sehr konstruktive Kritiken, wir wollten ja lernen, was wir in Zukunft besser machen können – denn dass es eine Zukunft des Events geben sollte, wurde von fast allen einhellig nahezu gefordert: Wann können wir weitermachen?!

Um kurz nach sieben war dann Schluss, einige Leute haben beim Aufräumen geholfen und die meisten sind wohl wirklich _todmüde aber glücklich_ nach Hause gefahren – ganz so, wie wir uns das gewünscht hatten.

#### Lessons learned

Danke an alle, die uns anschließend nochmal ihre Verbesserungsvorschläge zukommen ließen, u.a.:

- Das gemeinsame Thema sollte evtl. noch schärfer umrissen werden. Selbst bei einem vermeintlich so einfachen Spiel wie TicTacToe gibt es noch sehr viele Freiräume, die zum Teil in langen Diskussionen geklärt werden müssen und am Ende von den unterschiedlichen Teams doch unterschiedlich oder gar nicht berücksichtigt werden. Eine klare Spezifikation/API/Protokoll etc. hätte es den Teams ermöglicht, sich auf ihre Technik zu konzentrieren.
- Bereits im Vorfeld sollten alle Teilnehmer ihre Github-/Twitter-/Google(+)-/Skype-Koordinaten zur Verfügung stellen, damit das initiale Setup schneller geht.
- Die Themenvorschläge sollten vorher bereits genauer beschrieben werden, damit man z.B. weiteres Equipment wie Lego-Mindstorms mitbringen kann.
- Es sollte bei den Themen auch vorher schon definiert werden, welche Infrastruktur oder Hilfsmittel ggf. gebraucht wird, damit man diese im Vorfeld bereits zusammenstellen kann.
- Es sollten regelmäßig (z.B. alle zwei Stunden oder mindestens einmal zwischendurch) kleine Meetings wie bei Daily Scrums abgehalten werden, um alle über den Verlauf in den einzelnen Teams zu informieren und den Austausch zu fördern.
- Während des Events sollte es eine gemeinsame Webseite, evtl. eine Twitter-Wall und andere Hilfsmittel zum Austausch von Informationen geben.

Zum einen ist dazu natürlich zu sagen, dass wir das schon zum Teil versucht haben (z.B. gemeinsames Twitter-Tag, zentrales Google-Doc), es zum anderen aber auch an der Idee einer Unkonferenz vorbeigeht …

In jedem Fall werden wir die Verbesserungsvorschläge aufgreifen und uns demnächst überlegen, wie ein Folge-Event aussehen und wann und wo es stattfinden könnte.

#### Format: Barcamp oder Open Space oder was?

Das Event sollte im Format eines [Barcamps](http://en.wikipedia.org/wiki/BarCamp) stattfinden, also als “Unkonferenz” ohne festes Programm, das die Wünsche und Ideen der Teilnehmer aufgreift und behandelt. Schon im Vorfeld mussten wir lernen, dass “Barcamp” den Charakter der Veranstaltung wohl nicht ganz korrekt beschreibt, sondern es sich eher um einen [“Open Space”](http://de.wikipedia.org/wiki/Open_Space) handelt. Wir freuen uns auch hier auf eine begriffliche Klärung und weitere Diskussionen.
