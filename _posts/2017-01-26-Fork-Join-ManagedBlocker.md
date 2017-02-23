---
title: Turbo Charge CPU Utilization in Fork/Join Using the ManagedBlocker
speaker: Dr. Heinz Kabutz
twitter: kabutz
speakerpic: heinzkabutz.jpg
date: 2017-01-26 18:00
location: Deutsche Telekom (Raum 0CK27), T-Online-Allee 1, Darmstadt
direction: https://www.google.de/maps/place/T-Online-Allee+1,+64295+Darmstadt/@49.86471,8.6232713,17z/data=!3m1!4b1!4m5!3m4!1s0x47bd709dcdebef67:0x5b0032c42cc77a93!8m2!3d49.86471!4d8.62546
---

### Abstract

Fork/Join is a framework for parallelizing calculations using recursive decomposition, also called divide and conquer.  These algorithms occasionally end up duplicating work, especially at the beginning of the run.  We can reduce wasted CPU cycles by implementing a reserved caching scheme.  Before a task starts its calculation, it tries to reserve an entry in the shared map.  If it is successful, it immediately begins.  If not, it blocks until the other thread has finished its calculation.  Unfortunately this might result in a significant number of blocked threads, decreasing CPU utilization.  In this talk we will demonstrate this issue and offer a solution in the form of the ManagedBlocker.  Combined with the Fork/Join, it can keep parallelism at the desired level.

Der Vortrag kann sowohl in Deutsch als auch in Englisch gehalten werden!

### Speaker

{% include speakerpic-name.html %} writes the popular "The Java Specialists' Newsletter" read by tens of thousands of enthusiastic fans in over 138 countries.  To sign up, visit [http://www.javaspecialists.eu](http://www.javaspecialists.eu)
