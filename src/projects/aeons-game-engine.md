---
title: Aeons Game Engine
released: (archived)
weight: 5
cover: /projects/images/aeons-game-engine/cover.png
description: A cross-platform 2D game engine.
draft: false
---

![aeons-logo](/projects/images/aeons-game-engine/logo.png)  
[Aeons](https://github.com/codescapade/aeons) is a cross-platform 2D game engine I'm working on. I tried to make it flexible so you can decide how to use it. It is a combination of the things I liked from the other game engines I have used over the years.  

There are ECS elements in it that you can use and a lot of the systems that are built in use that, but you don't have to use it if you don't want to. The Scene class has an `update` and `render` loop that you can use.  
Entities also have an update and render loop so you can just have entities in an array and update and render them in the scene.  
Components can also have update and render loops if you don't want to use systems.  
It is still a work in progress and it will be a while until I reach version 1.0 but it is useable at the moment. Need to work on documentation and examples.

I have stopped working on Aeons and am working on a new game engine called [Lumi](/projects/lumi-game-engine).