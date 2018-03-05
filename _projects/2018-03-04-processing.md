---
layout: project
timeframe: February 2018
title: Multiplication Tables with Processing
thumbnail: 
description: What does math have to do with visualizations? I experimented with visual multiplication tables using Processing, a language similar to Java and used for browser rendering and writing code for LEDs.
customScripts:
  - processing.min.js
tags: art code processing math recurse
hidden: false
---

Processing is a visual arts language based on Java. Here I've combined it with 'processing.js' to produce a browser-based exploration of multiplication tables. The concept is explained in [this youtube video](https://www.youtube.com/watch?v=qhbuKbxJsk8&t=149s) called "Times Tables, Mandelbrot and the Heart of Mathematics", but essentially we're using multiplication to draw lines between points on a circle. I made this demo in Processing to let users control which number we use as our base multiplier, and the number of points along the circle. Some neat patterns emerge!

<!-- processing demo -->
<script type='text/javascript'>
function updateMultiplier(multiplier) {
  sketch = Processing.getInstanceById('sketchCanvas');
  sketch.updateMultiplier(multiplier);
}

function updatePoints(points) {
  sketch = Processing.getInstanceById('sketchCanvas');
  sketch.updatePoints(points);
}
</script>
<div class='grid grid--gut12 my36'>
  <div class='col col--12 txt-bold'>Change Multiplier:
    <div class='range range--black w300'>
      <input type='range' min='2' max='100' onInput='updateMultiplier(this.value)'>
    </div>
  </div>
  <br>
  <div class='col col--12 txt-bold'>Change Points:
    <div class='range range--black w300'>
      <input type='range' min='2' max='300' onInput='updatePoints(this.value)'>
    </div>
  </div>
  <div class='col col--12 align-center'>
    <canvas id='sketchCanvas' class='align-center' data-processing-sources='/assets/multiplier.pde'></canvas>
  </div>
</div>