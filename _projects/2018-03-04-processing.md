---
layout: project
timeframe: February 2018
title: Processing Multiplication Tables
thumbnail: 
description: What does math have to do with visualizations? I experimented with visual multiplication tables using Processing, a language similar to Java and used for browser rendering and writing code for LEDs.
customScripts:
  - processing.min.js
tags: art code processing math
hidden: false
---

processing!

<!-- <canvas width="200px" height="200px" data-processing-sources="/assets/basic-example.pde"></canvas> -->


<script type='text/javascript'>
function updateMultiplier(multiplier) {
  sketch = Processing.getInstanceById('sketchCanvas');
  sketch.updateMultiplier(multiplier);
}
</script>


<canvas id='sketchCanvas' data-processing-sources='/assets/multiplier.pde'></canvas>
slider for points
<div class='range range--black w300'><input type='range' min='2' max='10' onInput='updateMultiplier(this.value)'></div>

