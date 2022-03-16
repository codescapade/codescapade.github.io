---
title: Dr. Snake
released: 2018-04-24
weight: 2
cover: /projects/images//dr-snake/cover.png
description: A small puzzle game for Ludum Dare 41.
draft: false
---

I created Dr. Snake for Ludum Dare 41 in 48 hours. The theme was **Combine 2 Incompatible Genres**. I decided to combine snake, a topdown game with Dr. Mario, a game you look at from the side with gravity. The goal of the game is to remove all circles from the level by matching 3 or more snake body parts of the same color horizontally or vertically with the circle of that color.

While the snake moves it works as a top down game, you can go in any direction. As soon as you hit something the snake keeps it shape and falls down like in Dr. Mario and stops when any of the parts hit something. If you match 4 or more of the same color those parts get removed. If this breaks the snake it breaks into separate parts that fall independently. You can play it [here](https://codescapade.github.io/LD41/).

![screenshot-1](/projects/images/dr-snake/screenshot-1.png)


### Development
I used [Phaser CE](https://phaser.io/download/phaserce) with TypeScript as framework for this game. Phaser is very easy to use and fast to prototype with. I use TypeScript at work so this was very useful to create a game in a small amount of time. Since it is a web framework it is easy to make your game available for people to play and judge. 

I might create a full game out of this at a later point. Seems it could be a fun mobile game. I would probably switch to a different framework then because WebGL is not a great option for mobile.

![screenshot-2](/projects/images/dr-snake/screenshot-2.png)