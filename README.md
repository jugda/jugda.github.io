# jugda.github.io

Webseiten der [JUG Darmstadt](http://www.jug-da.de)

* [![Build Status](https://travis-ci.org/jugda/jugda.github.io.svg?branch=master)](https://travis-ci.org/jugda/jugda.github.io)

## Info-Folien vor unseren Vorträgen
- liegen mittlerweile in einem eigenen Repository: https://github.com/jugda/slides/tree/gh-pages
- Github-Pages: http://jugda.github.io/slides

## Lokaler Test

`jekyll server` (Weil Gerd es immer wieder vergisst!)

oder (mit Bundler, näher am Github-Pages Mechanismus dran)

`bundle exec jekyll serve`


## Steuerung der Registrierung

- Die `eventId` errechnet sich automatisch aus dem Event-Datum im Format `yyyy-mm-dd` (`ISO_DATE`)
- Das default `seatLimit` steht auf `60`, kann aber im Header jeder Veranstaltung überschrieben werden.
- Die default `registrationDeadline` ist am Veranstaltungstag auf 18:00 Uhr gelegt, kann aber bei Bedarf im Header jeder Veranstaltung überschrieben werden.

### Übersicht der Anmeldungen

URL: https://gxsqj77rg0.execute-api.eu-central-1.amazonaws.com/prod/list?eventId= + `eventId`
JSON-Output: https://gxsqj77rg0.execute-api.eu-central-1.amazonaws.com/prod/list?type=json&eventId= + `eventId`
