---
title: 'Lumi engine update'
date: '2023-05-22'
tags: ['gamedev', 'engine', 'lumi', 'haxe']
draft: false
---

End of last year I started on a new iteration of my the game engine. I decided to build it using TypeScript. I generally make small web games and wanted to less dependencies so WebGL is a good fit. After a few months of working on it I decided to switched back to [Haxe](https://haxe.org), but still compiling to JavaScript. Here are some of the reasons why.
<!-- read-more -->
<br>
<br>

### The node ecosystem.
Most libraries in Node have a lot of dependencies that you have to keep up to date. Even though my game engine has few dependencies itself, the tooling does have a lot of them. TypeScript, the bundler, eslint, etc. I'm not a fan of that you have to update the libraries very often. You can automate some of it, but it is not ideal. 
<br>
<br>

### Bundlers and TypeScript
To use TypeScript you need a compiler that turns it into JavaScript so the browser can run it. After that you want to bundle the JavaScript. There are quite a few bundlers to choose from. I started with [Vite](https://vitejs.dev). It worked okay at the start, but when I wanted to use [TypeScript 5 decorators](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-0.html#decorators) that no longer worked. Esbuild does not support those yet and I could no longer compile the library. 

I have also tried [Parcel](https://parceljs.org) and [Rollup](https://rollupjs.org), but I needed a two step build process to make it kinda work with source maps. Each bundler had their own issues. TypeScript cause quite a few issues with bundlers still and I could not get it to work to way I wanted it to.
<br>
<br>

### Haxe Macros
Haxe has a pretty powerful [macro](https://haxe.org/manual/macro.html) system. In my previous engine I used macros to generate event constructors and collections of components for my systems. In TypeScript I had to write all those by hand for each new one I created. Writing that code became a bit tedious and I was thinking more about returning to Haxe.
<br>
<br>

### Native backends
Haxe can compile to different programming languages. JavaScript is the one I'm using now, but there is also C++. In the future I want to add native backends. Maybe using SDL, they are working on 3.0 and that looks promising. I can keep all my engine logic and have to create a native backend if I use Haxe.
<br>
<br>

### Conclusion
About a month and a half ago I ported my TypeScript engine to Haxe. The languages are similar so it didn't take too much time. I'm far enough along now that I'm working on my first game using this engine. It will be a physics golfing game for mobile and web. Using [Capacitor](https://capacitorjs.com) I can create a native app and so far the performance has been good.

I also renamed the engine to "Lumi".