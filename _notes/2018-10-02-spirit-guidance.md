---
layout: note
date: 2018-10-02
title: Spirit Guidance
description: Ramping up the people around you
tags: communication code teaching
hidden: false
---

There's nothing quite like the feeling of starting a new job, working on a new codebase, or learning a new skill, and realizing you have no fucking clue what's going on. I've never met anyone who enjoys that feeling, but it's hard to avoid both as the learner and the more experience teammate/manager/teacher. Spirit guiding is a way to help people through that learner phase, so they can ramp up quickly and comfortably. A spirit guide is someone who helps someone else along on their quest, whether that quest is getting up to speed in a new codebase, learning a new technology, or growing into any other area or role that they haven't done before.

To illustrate this concept, let's bake a cake with someone who has never baked before.

Kendra, an experienced pastry chef, tells the new chef, Pico, to "go bake tomorrow's cakes." She knows, as someone with experience in this restaurant and in this role, that we'll need 5 chocolate cakes and 3 ginger cakes for the night. She knows where the recipes are (or maybe even has them memorized). She knows where to find the ingredients, and about how long the process will take. She knows if the oven catches on fire, something has gone very very wrong.

Pico might not know any of things. Kendra said cakes, plural, but didn't say how many there should be. Do we have a typical kind of cake? Do we have a set of recipes? Maybe the first step is figuring out how many people we expect, then doing a survey to see what kind of cakes are popular. Pico-the-new-chef doesn't even know where to start, and might spend a lot of time spinning their wheels on tasks that don't need to be done (like researching the best cake recipe).

Enter, *spirit guidance.*

If Kendra was being a good spirit guide, she would think about the problem with a beginners' mindset, and realize she’s making some assumptions about what Pico already knows. Sure, Kendra makes some assumptions that are probably safe for a commercial kitchen- she assumes that Pico would know they already have cake recipes, and already have the tools they'd need to bake. There are layers of assumptions, though, that are only revealed by thinking through the steps as a beginner. Is it safe to assume that the first type of cocoa powder they find on the shelf is the one mentioned in the recipe? What if there's special raw cocoa powder that we've been trying out? For a real-world example, maybe every engineer on your team knows that the "lint.py" script in the root directory hasn't worked in years, but a new engineer might safely assume that that's how folks lint their code (this is an actual example).

## Key Tips For Success

### Levelling
"Bake a cake" can be a large, overwhelming task for someone who has never set foot in a kitchen. It can also be a lot to learn for someone who worked for years as a line cook at a burger joint, but never baked! Just because someone has experience doesn't mean they have the same knowledge that you do.
A good spirit guide will meet their learner at their current level, and that takes practice. If the learner is an experienced engineer that is learning a new codebase, it might be enough to say "we use php 7." If they're a new engineer, instructions about how to check whether php is installed on their computer and which version it is might come in handy. The point of spirit guidance isn't to write down every possible step, it's to meet people where they're at and make sure that they're able to make progress and learn in a way that feels productive for everyone.

### Think About Potential Blockers
You don't need to explicitly make sure everything is perfect and prepared. If everything is perfect, the person you're spirit guiding might miss out on some valuable debugging experience. That said, do call out potential traps. Let folks know about potential challenges to keep them from wasting time or getting completely blocked.

**For example:**
- If I'm baking and can't find an ingredient, I don't know if: 
    - We're out.
    - I'm looking in the wrong place.
    - We normally substitute something else because a teammate has an allergy.
    - It's in some "totally obvious" place and if I ask where it is I will feel like an idiot, oh no!

If you think of something that might be a problem, don't feel like you *have* to fix it in advance. Ask yourself, will this block the person in a way they can't eventually resolve? Will working through this problem teach them something? Will it be demoralizing? If it's something you think they can handle, give them the tools and let them do the work.

> "we might be out of cocoa powder; it usually lives in the spice cupboard, but if there isn't any there, reach out to @shopping to get help on a trip to the store."

**In that sentence, we:**

- let them know about a potential problem: you might not find any cocoa powder, and that's okay.
- tell them how they'd know it was a problem: it should be in the spice cupboard, and if they checked there already they don't need to look anywhere else.
- tell them what to do if they run into the problem: reach out to a *specific* someone else for help on the next step. 

This last one is important. You don't need or want to have a whole choose-your-own-adventure flow chart of potential problems, because you'll end up writing an overwhelming amount of instructions, most of which won't be used. Instead, tell folks explicitly when to ask for help. If they hit that point, you can guide them through it by pairing, sending them resources to read through, or writing up next steps.

### Break up Tasks into Phases or Steps
An experienced baker might intuitively know there will be some stages to baking a cake- gathering ingredients, mixing dry and wet separately, mixing together, and baking in the oven. Do the work of making those phases explicit. Even if the learner already knows those phases, having them broken down into separate sections with their own checklists and goals makes it easier for everyone to keep an eye on progress, and have a feeling of accomplishment when each phase is complete. It also takes away that sense of overwhelm, allowing folks to think "I'm not sure of all the steps, but I know what to do in this phase. I can focus on the rest later."

Each phase should have its own brief overview, steps to follow, and a way to tell when the phase is done. For code projects, the end of each phase is a great time to have the learner submit a pull request and ask for review.

**To stick with our cake example, a phase might look like this:**

> Phase 3: Combining Dry and Wet Ingredients
>
> You already have a bowl of dry ingredients and a bowl of wet ingredients from Phase 2. Let's mix them together to finish our cake batter!
> 
> - Preheat the oven to 300f; we'll need it hot for Phase 4: Baking
> - Gather your tools: a baking pan and a spatula
- Add the dry ingredients to the wet ingredients slowly while mixing. Stop when everything is combined and the lumps are less than 1cm wide; if we over-mix it the cake will be too chewy.
> - After mixing, pour batter into the baking pan
> - Ask for a review before moving on to Phase 4: Baking

**In the instructions for this phase, we:**
- make sure they have all the prerequisites they need (results of earlier phases, tools)
- explain the task, including the desired result
- are explicit about what to do when they're done

Phases also give you, the spirit guide, an opportunity to adjust your approach. If the learner zooms through the first couple phases, or seems to be getting stuck every few minutes, you can adjust the level of detail in future phases.

### Phase 0: Setup
Don't forget about set up! There's nothing more frustrating than spending time debugging errors that are actually just missing libraries or misconfigured tools. Go through the project and think about the requirements beforehand, so that you can do all the setup in a discrete phase. If you've written all the instructions for a specific environment/IDE/language, make sure that you're explicit about that so that the learner can follow along without having to translate.

This is also a great place to drop links to outside resources and docs for the learner to refer back to.

**Here's a general tech checklist to get you started:**

- access to any internal systems, like AWS accounts or github organizations
- required tools, like `homebrew`
- the correct version of things like languages/package managers/databases, if it matters for your work
- extensions and addons, like postgis or gnu utilities
- links to resources that will be helpful along the way

### Debugging Tips
Sometimes folks follow the steps exactly, and things still don't work, because following the steps isn't always enough. As engineers we learn to watch for error messages after each command that other folks might miss. As people experienced in a particular problem space, we know how to check if each step worked. Learners don't have that advantage, so be sure to share. A great way to do this is to be explicit about what success and/or failure looks like for each step. If there's 10 installation steps and then you run a script that requires all of them, it might be tough to track down the one dependency that didn't get installed correctly. Instead, let's explicitly check that everything worked as we complete each step. 

To use our cake example, we don't want to wait until we're pulling the cake out of the oven to find out we accidentally used blue cornmeal instead of flour. Instead, we might say, "Mix the dry ingredients together. When you're done, it should be an even, pale brown color."

If we're having the learner install something like npm, we can say:

> - Install `npm`. `npm` is a tool to manage our project's dependencies; we'll need it to install helper libraries as we go along. To install, run `brew install npm` from your terminal. After it completes, you should be able to run `npm -v` and see the version number output.

**In this line, we:**

- explain what we want and why we want it
- tell them how, with the exact command
- explain how to tell whether it worked

If we're having the learner work on a specific piece of code, we can point out which tests to run and how to run them to see if their changes worked. If there aren't tests for that function or chunk of code, start out by writing some! Writing a test is a great way to get familiar with the problem, especially for folks inexperienced in a particular codebase.

One of the fantastic things about pairing with learners on a codebase is finding all the gaps in understanding and instruction, because if something can go wrong, it probably will! Use this as an opportunity to spruce up your docs with that missing info.

### Stay Engaged
Once you've written up some instructions and gotten them started, don't disappear! You don't want to find out about oven problems by coming back to a kitchen burned down to the ground. Building reviews into each phase is an easy way to keep an eye on things, but you should also be checking in every now and then to make sure everything is on track. Try to predict how long each step phase will take, and check in with the learner one or two times while they're working. You don't need to contrive a reason; all you need is a quick "How are things going?" to start a conversation about their progress.

## Sound Like a Lot?
Following every suggestion here takes an investment of time. Sometimes it feels worth it, like when you're onboarding a new engineer and need to introduce them to a bunch of topics at once. Other times, it makes more sense to do only some of these things. The most important thing is to pause, and remember to use your beginners' mindset to think about things as they arise. That helps you give good directions, and keeps the people you're working with from feeling frustrated or having negative thoughts about themselves (or you!)

## Give it a Shot!
Many of us have a voice in our heads telling us we're not good enough to do something for some reason or another, whether it's our background, our gender, our race, or any number of things. Every time we hear something like "oh, you haven't installed xyz yet?" or "you've never heard of *this obvious thing*?!" that voice gets a little louder. Good spirit guidance keeps people moving quickly enough to escape that voice. Partnering with folks non-judgmentally to help them accomplish tasks allows them to feel more confident in their skills, and empowers them to keep learning and progressing. The cake example might feel a little contrived, but I've used this teaching method for plenty of things besides software projects, including construction, martial arts, and sewing. I'm still iterating on spirit guidance and learning ways to improve, so please give it a shot, and let me know what you think!

Also, huge shoutout to the folks at Mapbox, where I was introduced to the concept of spirit guidance while working as an engineer on the geocoding team. I learned so much working with the folks there, and some of the most important takeaways were around learning and teaching. If this post resonated with you, you might also enjoy Emily McAfee's great post on [how to work with someone that is learning](https://blog.mapbox.com/how-i-work-with-someone-who-is-learning-d6c53e460625), with lots of tips that complement spirit guidance.
