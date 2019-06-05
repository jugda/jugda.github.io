---
title: 'Live-Coding zu Java 11 Migration und Local Variable Type Inference'
shortTitle: 'Live-Coding Java 11 Migration und var'
speaker: Nicolai Parlog
twitter: nipafx
speakerpic: nicolaiparlog.jpg
date: 2019-07-10 18:30

---

### Zusammenfassung

#### To JAR Hell And Back - A Live Migration to Java 11

I'm sure you've heard about compatibility issues with upgrading to
Java 9 and beyond, but did you try it yourself yet? This live coding
session starts with a typical Java 8 application and runs up against
and eventually overcomes the common hurdles:

* build system configuration
* dependency analysis with `jdeps`
* dependencies on internal APIs and Java EE modules
* split packages

To get the most out of this talk, you should have a good understanding
of the module system basics - afterwards you will know how to approach
*your* application's migration to Java 9 and the module system.


#### Fun with `var`

Since Java 10 you can use `var` to let the compiler infer a local
variable's type:

`var users = new ArrayList<User>()`

And that's pretty much it, right? Surprisingly, no! There are a lot of
details to consider...

* is this JavaScript?!
* how exactly is the type inferred?
* where can I use `var` and what should I look out for?
* won't this lead to unreadable code?

After this live-coding deep dive into `var`, you'll know all about
Java 10's flagship feature.


### Sprecher

{% include speakerpic-name.html %} is Java developer, [blogger](http://codefx.org/), [author](http://tiny.cc/jms), [YouTuber](http://tiny.cc/fx-yt) and [trainer](http://tiny.cc/nipafx).
