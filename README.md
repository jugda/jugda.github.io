# jugda.github.io

Webseiten der [JUG Darmstadt](https://www.jug-da.de)

## Info-Folien vor unseren Vorträgen
- liegen mittlerweile in einem eigenen Repository: https://github.com/jugda/slides/tree/gh-pages
- Github-Pages: https://jugda.github.io/slides/

## Lokaler Test

`jekyll server` (Weil Gerd es immer wieder vergisst!)

oder mit Docker, weil das zwar einen Moment dauert, aber unabhängig von Brew, MacPorts oder anderen Package-Managern ist:

`docker-compose up`

oder (mit Bundler, näher am Github-Pages Mechanismus dran)

`bundle exec jekyll serve`

Wenn Jekyll läuft, sollte man die generierten Seiten unter http://localhost:4000 finden.


## Steuerung der Registrierung

- Die `eventId` errechnet sich automatisch aus dem Event-Datum im Format `yyyy-mm-dd` (`ISO_DATE`)
- Das default `seatLimit` steht auf `60`, kann aber im Header jeder Veranstaltung überschrieben werden.
- Die default `registrationDeadline` ist am Veranstaltungstag auf 18:00 Uhr gelegt, kann aber bei Bedarf im Header jeder Veranstaltung überschrieben werden.

### Übersicht der Anmeldungen

URL: https://registration.jug-da.de/list?eventId= + `eventId`

JSON-Output: https://registration.jug-da.de/list?type=json&eventId= + `eventId`

