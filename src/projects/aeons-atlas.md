---
title: Aeons Atlas
released: 2022-03-31
weight: 4
cover: /projects/images/aeons-atlas/cover.png
description: A command line sprite atlas creator tool for my Aeons game engine.
draft: false
---

[Aeons Atlas](https://github.com/codescapade/aeons-atlas) is a sprite atlas creator tool that I built to make it easy to create one or multiple sprite atlases automatically when I export a game using my game engine [Aeons Engine](https://github.com/codescapade/aeons). It is a command line tool so I can run it before the game build process.  

The tool is built using [Haxe](https://haxe.org) so it can be easily compiled for different operating systems.  

Using a config file you can set which sprites or folders you want in your atlas and options like packing method and transparent space trimming.  

Some examples of a packed atlas:  
![basic untrimmed](/projects/images/aeons-atlas/basic.png)  
This is a basic packed untrimmed atlas. All source images in this example have transparent pixels around them.  
<br/>
![optimal trimmed](/projects/images/aeons-atlas/optimal_trimmed.png)  
This is an optimally packed trimmed atlas. Packed in the smallest image with transparent pixels trimmed off where possible.  

### Data file
This packed image comes with a JSON file that has the position of each of the source images and their current size and original size before trimming. It is in the same format as some other popular sprite atlas tools so it can be integrated in other engines too.  