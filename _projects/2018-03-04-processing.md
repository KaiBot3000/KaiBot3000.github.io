---
hidden: false
layout: project
thumbnail: https://user-images.githubusercontent.com/11284580/36994519-5fe3d896-207f-11e8-8bbc-5fe62c317eda.png
title: Multiplication Tables with Processing
timeframe: February 2018
description: What does math have to do with visualizations? I experimented with visual multiplication tables using Processing, a language similar to Java and used for browser rendering and writing code for LEDs.
tags: art code recurse
customScripts:
  - processing.min.js
---

<span class='txt-code'>[Processing](https://processing.org/)</span> is a visual arts language based on Java. Here I've combined it with <span class='txt-code'>[processing.js](http://processingjs.org/)</span> to produce a browser-based exploration of multiplication tables. The concept is explained in <span class='txt-underline'>[this "Times Tables, Mandelbrot and the Heart of Mathematics" video](https://www.youtube.com/watch?v=qhbuKbxJsk8&t=149s)</span>, but essentially we're using multiplication to draw lines between points on a circle. I made this demo in control which number we use as our base multiplier, and the number of points along the circle. Some neat patterns emerge!

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