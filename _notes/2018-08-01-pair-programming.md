---
layout: note
date: 2018-8-1
title: How I like to Pair Program
description: An intro to pairing, with helpful communication tips
tags: code communication
hidden: false

---

Pair programming has a ton of benefits, but it’s also a skill that takes some practice to do well. At Mapbox, [Aarthy](https://twitter.com/aarthykaycee) and I worked together to refactor a gnarly part of our core codebase. We started the project by each taking chunks and working separately, but both of us got stuck in different areas and ended up working in circles. We had an on-site sprint lined up, so we used that opportunity to try out pair programming, with great success! Once we started working together instead of solo, we settled on a solution quickly and made steady progress. I’d learned pair programming in a teaching context, but using it to write production code had many of the same benefits. It does take some patience and thoughtfulness to do well, and a little prep goes a long way. With that in mind, here’s some of the things I’ve learned about pairing!



### Pair Programming, What's That?!
So, you may ask, what exactly is pair programming? Pair programming is two developers working together on one computer. Each developer plays a role:

**“Driver”**
  - (Moves the wheel, presses the pedals)
  - Types code
  - Helps figure out syntax
  - Asks clarifying questions

**“Navigator”**
  - (Checks map, tells the driver where to turn)
  - Provides plan of action
  - Tells driver what to type, and checks for understanding
  - Helps pair stay on course

Switch roles often, so that each person gets a chance to put their hands on the keyboard. Find the timing that works for your pair, but lean towards shorter intervals where possible. That’s a great way to make sure everyone stays on the same page, because each person needs to understand the work in order to accomplish both roles. 


### But Why?!

>"If you want to go fast, go alone. If you want to go far, go together." 
>
>[Fake African Proverb](http://jezebel.com/on-the-origin-of-certain-quotable-african-proverbs-1766664089)

If two developers are working on one thing, we're only getting half as much work done, right? Not at all! Pair programming has a ton of benefits:

**Stronger Codebase/Team**
- **Produce Fewer Bugs:** With another set of eyes to think things through and watch for typos, you'll save a lot of debugging time.

- **Spread Knowledge:** Pairing is a great way to ramp each other up on particular parts of the team's codebase. Having someone around to confirm your understanding and give more context means you can grasp code much more quickly than just reading it.

- **More Effective than Code Reviews Alone:** It's easy to skim during code reviews, and most people only look at the diff. That means it's easy to miss code that didn't get changed but should have, or pass over something that had unintended consequences. Two people are more likely to remember to update everything and check each others' assumptions, and working together means you both have enough context to understand changes completely.

**You’ll Learn a Lot, Fast**
- **Having a buddy helps get you unstuck:** Sometimes it's hard to hold a whole problem in your head. Having a buddy to bounce ideas off of or talk things through means you can keep moving forward even when you get confused.

- **You see, hear, speak, and type:** Pairing is a constant cycle of different ways of processing information. That combination helps you retain knowledge. In particular, explaining your ideas and code to others helps you deepen your own understanding.

- **You'll learn new ways to do things:** Both of us learned shortcuts, debugging tactics, and new ways to do things from each other. For example, at the time I had very little vim experience, but having Aarthy around to bail me out gave me the confidence to use it when we worked on remote servers.

**It’s Great Practice**
- **You get used to explaining your thinking & your code:** Communicating about code doesn't always come naturally; it's a skill we should all develop.

- **You feel more comfortable with your code & ideas:** Practice talking through ideas helps folks develop confidence about their work.

- **You plan before you type:** It's easy to say "[YOLO](https://en.oxforddictionaries.com/definition/yolo)" and make a mess when you're working alone. Working with another person means you need to justify the steps you're taking, and can help prevent messy or non-functional code from happening in the first place.

### But How?!

**In-person Pairing**

If you’re in the same location as your pair, you don’t need much extra equipment. An external monitor makes it much easier to read the same screen without invading each other’s space. Bonus points if you also have an extra keyboard and mouse, to make switching back and forth even easier!

**Remote Pairing**

If you work on a distributed team, pairing can be a little harder. Luckily, there’s plenty of tools to help! Slack, Zoom, and Hangouts all have built-in screenshare options. You do lose some of the non-verbal feedback you’d get from being in the same room. Here’s some tips to help with that:

- **Be explicit:** Be extra careful to express your thoughts out loud and talk through each part of what you’re doing. 

- **Leave space:** Make sure you’re not programming with a silent screen buddy instead of actually pairing- it’s easy to take over the keyboard when you’re on your own computer. Keep the driver/navigator roles in mind and make sure you’re both participating.

- **Watch:** Keep your pair’s face on your screen, so you can both keep track of how the other person is doing. Some folks are more expressive than others, and that extra signal is valuable.

- **Get a feel for lag:** Working with video over a bad connection makes it extra difficult to keep up, so check in with your pair often and make sure they got everything. You can do things like pause after changes / typing out commands, to make sure your pair got a chance to see it before switching screens or hitting enter. 

- **Be sensitive to time differences:** You might be peppy and excited after your second morning coffee, but your pair might be settling down for the evening and in a different headspace.
Protips

**Explicit Communication Goes a Long Way**

For those of us used to working solo, pair programming can feel very different. Here's a couple tricks to keep everything working smoothly:

- **Set the scene:** Questions like, “What’s your pairing style?”, “How often would you like to switch roles?”, and “Can you let me know if you want to slow down/speed up?” help make collaboration easier.

- **Develop a game plan:** Before you start, talk about the problem together to get on the same page. This might include things like a tour through the existing code, or jotting down some user stories.

- **Set a timer:** Pick a length of time for switching between roles, and set a timer to help you remember. I like to keep the interval almost uncomfortably short, and be super strict about switching, to make it really difficult to get out of sync with my pair. When pairing in person, try to switch every 5-10 minutes. When working with a remote pair, try switching every half hour, since changing screens takes a little longer. Feel free to stop when you reach a natural stopping point or when one of you feels like a change, too, as long as roles are shared.

- **Take breaks:** For folks who are used to working alone, silently, collaborating intensely can be tiring. It's ok to take breaks, but take them together! Don't be tempted to keep working while your pair is doing something else.

- **Step Up / Step Back:** If you're more experienced than your pair or tend to be more assertive, take this opportunity to step back a little; make sure your pair is heard and has the opportunity to lead. If you're less experienced or a little quieter, push yourself to step up more than usual. To get the benefits of pairing, both people need to participate as fully as they can.

- **Ask lots of questions:** "Can we try...?", "What do you think of...?", "Do you think that will affect...?", "I was thinking [ ], can you think of a different way?"

- **Give and receive feedback:** “Thanks for pairing!”, “Could I have done anything better?”, “I liked the way you ...”, “I would have liked more ..."

![giphy](https://user-images.githubusercontent.com/11284580/29140147-4a5d6552-7cfe-11e7-9f0a-d4e8597efd9b.gif)

### TL;DR
Pair programming is one more tool in our box, and it's worth trying out if you haven't done it before. It's a great way to learn from each other, build solid code, and develop strong communication skills.
