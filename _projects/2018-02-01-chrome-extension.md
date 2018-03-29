---
hidden: false
layout: project
thumbnail: https://user-images.githubusercontent.com/11284580/38106769-149487b8-335e-11e8-86dc-93755d741963.png
title: KaiWeb Chrome Extension
timeframe: February 2018
description: Rewriting the web, Kai style.
tags: code recurse
pictures:
customScripts:
related:
  - processing
  - beeopencv
---

![Noooooo](https://user-images.githubusercontent.com/11284580/38106769-149487b8-335e-11e8-86dc-93755d741963.png)

<br>

<span class='txt-em'>For when the internet is both an amazing tool and an amazing distraction.</span>


<br>

<span class='txt-h3'>Premise</span>

<br>

I'm a software engineer. That means I sometimes get stuck on code problems, and when I'm stuck and frustrated I'm particularly vulnerable to distraction. Enter: StackOverflow's "Hot Network Questions." They have nothing to do with my current problem, and *other peoples' problems are so much more fun to think about than that thing that still isn't frickin' working!* But luckily, I'm a software engineer and get to experience the internet the way I want to. So I deleted the "Hot Network Questions".

<br>

Then I thought, what else can I delete or change to make the internet exactly how I want it?

<br>

<span class='txt-h3'>Results</span>

<br>

Much of this can be accomplished using a built-in feature in adblocking extensions like uBlock, but most of the reason I did this was to learn how to write my own extensions.

<br>

I started out with a popup script, since that allowed me to configure or trigger the script manually. Unfortunately that also meant I had to click the extension, then click another button, for every tab I wanted to modify. By then I'd already seen the dreaded, _extremely interesting_ divs. I instead switched to much a simpler, automatically running, content script.

<br>

This is very much a `[WIP]` but here's what I'm doing so far:

<div class='txt-ul'>
  <div class='txt-li'>Hide the above-mentioned "Hot Network Questions."</div>
  <div class='txt-li'>Hide the GitHub `notfications` bell/indicator, since I'm an inbox-zero kind of person but I'm also on vacation, dangit.</div>
</div>

<br>

<span class='txt-h3'>Future Development</span>

<br>

I'd like to add an `EXTREEEM MODE` which is activated using the popup, that will allow me to delete things like the twitter timeline, news sites content, hacker news comment threads, and other things which are so so tempting when looking at the internet is part of my job. Ideally each of the features would come with a checkbox, so I can turn things like Github notifications on when I need them.

<br>

[Check out the full write-up and code on `github`](https://github.com/KaiBot3000/kaiWeb)!
