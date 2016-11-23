---
layout: page
title: Test
date: 2017-01-02
startTime: "16:30"
duration: 1
permalink: /test/
---

{% include getDateWithStartAndEndTimeFromEvent.html event=page %}
1. {{ page.date | date: "%H:%M:%S" }}
1. {{ page.date }}
2. {{dateWithStartTime}}
2. {{dateWithEndTime}}
4. {{ dateWithStartTime | date: "%H:%M" }} bis {{ dateWithEndTime | date: "%H:%M" }} Uhr
