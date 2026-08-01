---
title: "Testing Layout and Formatting Elements"
date: 2026-08-01
tags: [test, layout, markdown]
draft: false
summary: "This is a test page showcasing various HTML and Markdown layout elements, formatting options, and image alignments."
---

This is a test page created to verify layout rendering, typography, and structural elements. Below you will find various formatting components used to test the styling and responsiveness of the page.

## 1. Imagery and Visual Layouts

When evaluating layout structures, it is important to check how images of different sizes and formats render alongside text blocks.

<img src="../../assets/images/0/sample.jpeg" alt="Sample Image" width="400" height="250">

*Figure 1. Standard center-aligned image container with explicit dimensions.*

> «Good technical design provides clear context and establishes visual hierarchy before the reader even processes the finer details of the content.»

---

## 2. Images in a Row and in a Stack

Here we test multi-image arrangements using HTML formatting for precise width and height control:

### Images in a Row (Side by Side)
<div style="display: flex; gap: 15px; flex-wrap: wrap;">
  <img src="../../assets/images/0/sample.jpeg" alt="Row Image 1" width="300" height="180">
  <img src="../../assets/images/0/sample.jpeg" alt="Row Image 2" width="300" height="180">
</div>

### Images in a Stack (Vertical)
<div style="display: flex; flex-direction: column; gap: 15px;">
  <img src="../../assets/images/0/sample.jpeg" alt="Stack Image 1" width="350" height="200">
  <img src="../../assets/images/0/sample.jpeg" alt="Stack Image 2" width="250" height="150">
</div>

---

## 3. Tables and Structured Content

Testing how tabular data aligns alongside media elements:

| Component | Status | Description |
| :--- | :---: | :--- |
| **Grid System** | Active | Responsive layout scaling |
| **Typography** | Verified | Base font weight and spacing |
| **Media Assets** | Loaded | Correct relative path resolution |

### Key Features to Verify:
* **Element Spacing:** Consistent margins between headings, paragraphs, and lists.
* **Tactile Feedback:** Clear visual states for interactive items.
* **Contrast Ratios:** Legibility under various viewing conditions.

---

## 4. Code Blocks and Technical Details

Here is a quick sample of code formatting to ensure syntax highlighting and block elements render cleanly:

```css
/* Layout tokens and variables */
--content-max-width: 800px;
--spacing-unit: 1.5rem;
--border-radius: 4px;
```