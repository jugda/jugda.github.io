# jugda.github.io

Webseiten der [JUG Darmstadt](https://www.jug-da.de)

## Info-Folien vor unseren Vorträgen
- liegen in einem eigenen Repository: https://github.com/jugda/slides/tree/gh-pages
- Github-Pages: https://jugda.github.io/slides/

## Lokale Umgebung

### Docker

Präferierte Variante

    docker compose up

### Bundler

Alternativ, Python und Bundler müssen lokal installiert sein.

    bundle exec jekyll serve

Wenn Jekyll läuft, sind die generierten Seiten unter http://localhost:4000 finden.


## Steuerung der Registrierung

- Die `eventId` errechnet sich automatisch aus dem Event-Datum im Format `yyyy-mm-dd` (`ISO_DATE`)

Weitere Details, siehe 👉 https://github.com/jugda/registration

### Übersicht der Anmeldungen

URL: https://registration.jug-da.de/list?eventId= + `eventId`

JSON-Output: https://registration.jug-da.de/list?type=json&eventId= + `eventId`
