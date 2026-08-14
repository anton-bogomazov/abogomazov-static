---
title: "Text stylisation"
date: 2026-08-13
tags: [design, web]
draft: false
ai-used: false
summary: "Playing around with block shadowing and parallax"
---

Earlier, I got the idea of placing the letter D inside a bigger letter D centred vertically. It was so visually appealing in my head, so I decided to play around it.

<img src="../../assets/images/2/1.jpeg" alt="Graphic design preview showing three variations of text layering on the word DRUCK">

First, I didn't like how the letters of different weights overlapped; the angles became inconsistent, and that's annoying.

Second, I remembered that I wanted the 'letters' in the background to rather be polygons with contours outlining the letter in the foreground instead (3).

<img src="../../assets/images/2/2.jpeg" alt="Graphic design preview showing another three variations of text layering on the word DRUCK">

I kept looking and discovered that the effect I was after was achieved by varying the spacing between the front and back texts. I feel that text like “poster-like” and three-dimensional -- likely because the text behind is perceived as a shadow.

<img src="../../assets/images/2/3.jpeg" alt="Final designs having a label consisting of 2 different layers of text with a different line spacing">

I tried to make it a bit wider -- cool. I became curious: is it possible to bring it to the web?

The first (bad) thing I've found is the fact that browsers/CSS cannot 'polygonise' the letters. But a very similar effect is possible to reach with massive outlines.

Lastly, I took some time to animate it; the result is below:
<img src="../../assets/images/2/animation.gif" alt="Animation of the word DRUCK - the front text is changing the spacing and becoming more sparse">
