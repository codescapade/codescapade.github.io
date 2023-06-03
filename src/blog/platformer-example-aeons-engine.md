---
title: 'A platformer example for Aeons Engine'
date: '2022-05-22'
tags: ['gamedev', 'haxe', 'aeons']
draft: false
---

I have been working on my own 2d game engine for a while. About 3 years at this point. I have started over 
multiple times during that time and tried different languages and base frameworks. The latest attempt is called [Aeons](https://github.com/codescapade/aeons).  
The language a chose is [Haxe](https://haxe.org) and the framework is called [Kha](https://github.com/Kode/Kha). I think 
this is the most complete attempt yet. I will make a separate blog post about the engine itself at a later time. 
The engine is now complete enough to actually make small games so I decided to make a little platformer game with it.  

<!-- read-more -->

I used the [LDtk](https://ldtk.io) level editor to create the levels and added support to load them into the engine. I have added 
some basic mechanics like wall jumping, collecting coins and jumping on enemies and there is an intro screen and 3 levels.  

![screenshot1](/blog/images/platformer-example-aeons-engine/screenshot1.png)


### Engine updates
While creating the game I fixed a lot of bugs in the engine and changes the way entities, components, systems and scenes work. Some of the design decisions I made early on in the engine development weren't great to work with when actually working on a game so it was very useful to create this demo game.  

### Aeons Examples
I have created a website that will host examples of the features that are available in Aeons. This platformer is one of the examples. There will be a lot more in the future so it is easier to get started with the engine. Aeons examples is using GitHub pages to host it which can be found [here](https://codescapade.github.io/aeons-examples).