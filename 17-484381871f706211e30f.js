(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{iCt8:function(e,n,a){"use strict";function t(e){var n=360;e.preload=function(){},e.setup=function(){e.createCanvas(800,800),e.noStroke()},e.draw=function(){e.colorMode(e.HSB,360,e.width,e.height),e.background(360,0,e.height);var a=360/n;e.beginShape(e.TRIANGLE_FAN),e.vertex(e.width/2,e.height/2);for(var t=0;t<=360;t+=a){var s=e.width/2+300*e.cos(e.radians(t)),i=e.height/2+300*e.sin(e.radians(t));e.vertex(s,i),e.fill(t,e.mouseX,e.mouseY)}e.endShape()},e.mousePressed=function(){},e.keyPressed=function(){switch("s"!=e.key&&"S"!=e.key||e.saveCanvas(Date.now().toString(),"png"),e.key){case"1":n=360;break;case"2":n=45;break;case"3":n=24;break;case"4":n=12;break;case"5":n=6}},e.keyReleased=function(){}}a.r(n),a.d(n,"default",(function(){return t}))}}]);
//# sourceMappingURL=17-484381871f706211e30f.js.map