---
title: Lumi Game Engine
released: TBD
weight: 6
cover: /projects/images/placeholder.png
description: A 2D game engine for the web.
draft: false
---

Lumi is a 2D game engine I'm working on. I'm using Haxe to write it and it uses WebGL for rendering. I tried to make it flexible so you can decide how to use it. It is a combination of the things I liked from the other game engines I have used over the years.

I based Lumi on my previous engine Aeons. I'm no longer using Kha as a base framework, so less dependencies but Lumi only has a web target for now.

Lumi has built-in ECS, but that is optional. You can also only use it with the built-in systems, and add your own logic to components. The Scene class has an **update** and **render** loop that you can use.  
Entities also have an **update** and **render** loop you can use if you don't want to use ECS.  

Components can also have **update** and **render** loops if you don't want to use systems.  

It is still a work in progress, but I'm working on a game that uses this engine at the moment.