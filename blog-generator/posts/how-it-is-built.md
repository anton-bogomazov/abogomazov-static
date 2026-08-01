---
title: "DIY static blog generator"
date: 2026-08-01
tags: [diy, web]
draft: false
summary: "A short story about me trying not to use ready-made solutions."
---
First post - and I want to share how I actually put that page on the internet.

A blog is a problem that’s been solved a thousand times over, yet most of these solutions just don't work for me. 
If you google “how to start a blog”, you'll stumble upon the following options:

* Platforms: They cost money and require learning. Total overkill. While solving one problem, they create several new ones imo.
* Static Site Generators + Jekyll / Hugo / Astro: Much better, but still packed with way too many features.
* Client + server / WordPress: Requires setting up and maintaining a server. Hard pass.

I already have a static website with a delivery pipeline set up. It’s just pure HTML and some CSS—something I’m honestly quite proud of, and I really wouldn't want to overcomplicate it. I want to write my posts in Markdown; it’s a familiar, comfortable, and portable format. So, out of all the variety, only static site generators really fit.

However, even this solution isn't perfect: I have to learn the specific generator, figure out how to stick it next to the rest of the site, or even migrate the entire site to a new stack, which is exactly what I wanted to avoid.

Given that all I really needed was to render Markdown into HTML, I decided to look for standalone tools that do exactly that. And I found them right away - `Markdown` library does precisely this. I also found a neat little lib called `frontmatter`, which lets you work with metadata added directly inside the file.

At this point, I decided to envision my ideal workflow for publishing posts:
1. Write Markdown
2. Do `git push`
3. The post is in the internet!

Step 3 is handled by GitHub, and Step 1 is a necessity. Which means that all I have to do is to build the machinery hidden behind Step 2.

Triggering on a push hints that a `pre-push` hook will be part of this machinery. This hook would call a script to generate the pages from Markdown and commit them.

Next up: the generator itself. I prepared a couple of template pages—one for the blog index, and one for the actual post. Inside them, I left placeholders for the values to be injected during the generation process.

I finished up a script that loads these templates, injects the rendered Markdown pieces into them, and boom! - 
now I have a convenient blog platform which I already know, powered by a couple of scripts totaling less than 200 lines.

The moral of the story: Sometimes reaching for a ready solution seems like the rational choice. But there is a whole class of everyday tasks that can be perfectly solved with some duct tape, and they might even lead to better results.

[Check it on the GitHub](https://github.com/anton-bogomazov/abogomazov-static)