function ical(summary, description, location, start, end, url, uid) {
  var calendar = "BEGIN:VCALENDAR\nVERSION:2.0\nMETHOD:PUBLISH\nPRODID:-//JUG DA//DE\nBEGIN:VEVENT\nUID:" + uid + "@jug-da.de\nDTSTAMP:" + new Date().toISOString().replace(/[-:.]/g, '') + "\nDTSTART:" + start + "\nDTEND:" + end + "\nSUMMARY:JUG DA: " + summary + "\nLOCATION:" + location.replace(/\,/g, '\\,') + "\nDESCRIPTION:Java User Group Darmstadt\\n\\n" + summary + "\\n\\n" + description + "\nURL:" + url + "\nSTATUS:CONFIRMED\nCLASS:PUBLIC\nORGANIZER;CN=\"JUG Darmstadt\":MAILTO:no-reply@jug-da.de\nEND:VEVENT\nEND:VCALENDAR";
  var link = document.createElement('a');
  link.download = "jugda_" + uid + ".ics";
  link.href = "data:text/calendar;charset=utf-8," + escape(calendar);
  link.click();
}
