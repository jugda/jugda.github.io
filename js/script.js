---
layout: null
---
function ical(summary, description, location, start, end, url, uid) {
  var calendar = "BEGIN:VCALENDAR\n" +
  "VERSION:2.0\n" +
  "METHOD:PUBLISH\n" +
  "CALSCALE:GREGORIAN\n" +
  "PRODID:-//JUG DA//Veranstaltungskalender//DE\n" +
  "BEGIN:VEVENT\n" +
  "UID:" + uid + "@jug-da.de\n" +
  "DTSTAMP:" + new Date().toISOString().replace(/[-:.]/g, '') + "\n" +
  "DTSTART;TZID={{ site.timezone }}:" + start + "\n" +
  "DTEND;TZID={{ site.timezone }}:" + end + "\n" +
  "SUMMARY:JUG DA: " + summary + "\n" +
  "LOCATION:" + location.replace(/\,/g, '\\,') + "\n" +
  "DESCRIPTION:{{ site.name }}\\n\\n" + summary + "\\n\\n" + description + "\n" +
  "URL:" + url + "\n" +
  "STATUS:CONFIRMED\n" +
  "CLASS:PUBLIC\n" +
  "ORGANIZER;CN=\"JUG Darmstadt\":MAILTO:no-reply@jug-da.de\n" +
  "END:VEVENT\n" +
  "END:VCALENDAR";
  var link = document.createElement('a');
  link.download = "jugda_" + uid + ".ics";
  link.href = "data:text/calendar;charset=utf-8," + calendar;
  link.click();
}
