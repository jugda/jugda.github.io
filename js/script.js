---
layout: null
---
const nl = "\r\n";
const tz = "BEGIN:VTIMEZONE" + nl +
    "TZID:Europe/Berlin" + nl +
    "X-LIC-LOCATION:Europe/Berlin" + nl +
    "BEGIN:DAYLIGHT" + nl +
    "TZOFFSETFROM:+0100" + nl +
    "TZOFFSETTO:+0200" + nl +
    "TZNAME:CES" + nl +
    "DTSTART:19700329T020000" + nl +
    "RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=3" + nl +
    "END:DAYLIGHT" + nl +
    "BEGIN:STANDARD" + nl +
    "TZOFFSETFROM:+0200" + nl +
    "TZOFFSETTO:+0100" + nl +
    "TZNAME:CET" + nl +
    "DTSTART:19701025T030000" + nl +
    "RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=10" + nl +
    "END:STANDARD" + nl +
    "END:VTIMEZONE" + nl;

function currentDateTime() {
    var dateNow = new Date().toISOString().replace(/[-:.]/g, '')
    return dateNow.substr(0,15);
}

function ical(summary, description, location, start, end, url, uid) {
  var calendar = "BEGIN:VCALENDAR" + nl +
  "VERSION:2.0" + nl +
  "METHOD:PUBLISH" + nl +
  tz +
  "CALSCALE:GREGORIAN" + nl +
  "PRODID:-//JUG DA//Veranstaltungskalender//DE" + nl +
  "BEGIN:VEVENT" + nl +
  "UID:" + uid + "@jug-da.de" + nl +
  "DTSTAMP:" + currentDateTime() + nl +
  "DTSTART;TZID={{ site.timezone }}:" + start + nl +
  "DTEND;TZID={{ site.timezone }}:" + end + nl +
  "SUMMARY:JUG DA: " + summary + nl +
  "LOCATION:" + location.replace(/\,/g, '\\,') + nl +
  "DESCRIPTION:{{ site.name }}\\n\\n" + summary + "\\n\\n" + description + nl +
  "URL:" + url + nl +
  "STATUS:CONFIRMED" + nl +
  "CLASS:PUBLIC" + nl +
  "ORGANIZER;CN=\"JUG Darmstadt\":MAILTO:no-reply@jug-da.de" + nl +
  "END:VEVENT" + nl +
  "END:VCALENDAR";
  var link = document.createElement('a');
  link.download = "jugda_" + uid + ".ics";
  link.href = "data:text/calendar;charset=utf-8," + calendar;
  link.click();
}
