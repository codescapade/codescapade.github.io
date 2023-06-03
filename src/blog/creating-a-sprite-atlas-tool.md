---
title: 'Creating a Sprite Atlas Tool'
date: '2022-04-01'
tags: ['gamedev', 'haxe', 'tools']
---

I create 2d games and a way to optimize draw calls is to put images in a sprite atlas so they can be drawn without 
changing the texture. Texture change means a new draw call. I have been using 
[TexturePacker](https://www.codeandweb.com/texturepacker) for years and it is really good, but I wanted to learn how to
do this myself. The result is [Aeons Atlas](/projects/aeons-atlas).  
<!-- read-more -->
<br/>
<br/>

## Why create a sprite atlas tool
I have been using sprite atlases to store the images for my games to make drawing more efficient. There are a lot of good tools out there to generate them like TexturePacker I mentioned above. What I don't like about them is that I always have to open that tool if I add, remove or edit an image. Not that it is a lot of work, but it is another tool on the stack.  
I'm creating a game engine called [Aeons](https://github.com/codescapade/aeons) that uses sprite atlases to display images with the built-in components and animation system. If other people end up using this engine I don't want to force another tool on them, so I thought this would be a good opportunity to create one myself. I'm using [Haxe](https://haxe.org) a lot so I used that to build it and compile it for multiple operating systems.
<br/>
<br/>

## Idea and design
I wanted to have a tool that would create one or more sprite atlases automatically with minimal configuration. I don't need a user interface to drag sprites around so I decided to have a configuration file per project where you can define your atlases and then use the command line to generate them.  
Exporting a game in Aeons also uses the command line so I can just add a step before that to generate the atlas every time I export a game.  


A config can take one or more folders or a list of image files, a folder to save the file to and some options for packing. There can be multiple configs inside the file if you need to export more than one atlas. The minimal configuration looks like this:  
``` json
{
  "configs": [
    {
      "name": "spriteAtlas",
      "saveFolder": "build/assets",
      "folders": [
        "images"
      ]
    }
  ]
}
```  
<br/>

## Packing methods
There are two packing methods and some packing options available.

### Basic packing
This sorts the images by name and adds the images next to each other until the max width and then continues on the next available place below. This method is the fastest but wastes a lot of space.

### Optimal packing
This sorts the images by height from largest to smallest. Then makes the canvas the height of the largest image and place it in the left-most available spot. When all the images are placed take the empty space on the right + 1 pixel and try again. Every time this is complete, compare the area of the canvas with the smallest area found so far and keep it if it is smaller. Continue until the canvas is smaller than the widest image. A full explanation of how this works is in the source [here](https://github.com/codescapade/aeons-atlas/blob/main/source/atlas/Packer.hx).  
This is a bit slower but much more space can be saved. I have tried this with about 150 sprites and it takes about 1 second to pack so still pretty fast.

### Trim and extrude
There is a trim option if you want to trim off fully transparent pixels to make the image rectangle smaller. This can save a lot of space.  
There is also an extrude option. This will extrude the edges of the image by a set amount of pixels of the same color. When rendering from an atlas, the renderer sometimes picks some pixels from the next image in the atlas. This can be particularly visible in tilemaps. This option extrudes the image so if this happens it will still show the same kind of pixels.

### Some examples
All images have transparent pixels around them to make it easier to show what happens when using trim.  
<br/>
![basic](/blog/images/aeons-atlas/basic.png)  
Basic packing, no trim or extrude.  
<br/>
![basic_trimmed](/blog/images/aeons-atlas/basic_trimmed.png)  
Basic packing, trimmed, no extrude.  
<br/>
![optimal](/blog/images/aeons-atlas/optimal.png)  
Optimal packing, no trim or extrude.  
<br/>
![optimal_trimmed](/blog/images/aeons-atlas/optimal_trimmed.png)  
Optimal packing, trimmed, no extrude.  
<br/>
![optimal_trimmed_extruded](/blog/images/aeons-atlas/optimal_trimmed_extruded.png)  
Optimal packing, trimmed and extruded.
<br/>
<br/>

## Image data format
The exported atlas comes with a json data file that has the positions and sizes of each image in the atlas. It also has the original size of the image for when you use the trim option. The rotated option is always false but is used in other popular sprite atlas tools. I added it to make using the exported files easier to use in other engines.

This is an example of the output file:

``` json
{
  "frames": [
    {
      "rotated": false,
      "sourceSize": {
        "h": 46,
        "w": 48
      },
      "filename": "blue_box",
      "spriteSourceSize": {
        "h": 46,
        "w": 48,
        "x": 0,
        "y": 0
      },
      "frame": {
        "h": 46,
        "w": 48,
        "x": 0,
        "y": 0
      },
      "trimmed": false
    }
  ]
}
```
<br/>

## Conclusion
I'm happy with how the Aeons Atlas turned out. It does what I need for my goal and I have learned quite a few things. I thought it would be pretty difficult to make a tool like this but I found some good resources on how to do it like [this](https://www.codeproject.com/Articles/210979/Fast-optimizing-rectangle-packing-algorithm-for-bu) post on optimizing rectangle packing algorithms.  
This is also the first project where I got Github Actions set up to automatically test and build artifacts so I learned how to do that as well. Overall a good project.