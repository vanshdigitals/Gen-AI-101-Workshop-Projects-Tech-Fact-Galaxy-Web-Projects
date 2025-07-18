# 📑 TechFact Galaxy – Developer Documentation

## Project Overview

TechFact Galaxy is a modern, single-page web app built as a capstone project for the **GenAI 101 with Pieces** workshop.  
It demonstrates prompt engineering, AI-assisted dataset creation, and frontend development using only HTML, CSS, and JavaScript.

---

## Table of Contents

- [Prompt Used](#prompt-used)
- [App Structure](#app-structure)
- [UI & UX Design Choices](#ui--ux-design-choices)
- [Fact Dataset & Generation](#fact-dataset--generation)
- [Color Theming & Icons](#color-theming--icons)
- [Accessibility](#accessibility)
- [Sharing Features](#sharing-features)
- [How to Deploy](#how-to-deploy)
- [Future Improvements](#future-improvements)

---

## Prompt Used

> Generate 100 unique, surprising, and educational fun facts about technology, computing, digital history, and the internet. Assign each fact to a specific category (at least 30 meaningful categories). For every fact, include an appropriate emoji/icon. Output as a JavaScript array of objects:  
> `[{ fact: "...", category: "...", emoji: "..." }, ...]`

- **Prompting Strategy:**  
  - Specified variety (30+ categories)
  - Required emoji or SVG for each category
  - Explicit data format for easy code integration

---

## App Structure

/
├── index.html # HTML skeleton (semantic, accessible)
├── style.css # Responsive, adaptive CSS (modern UI, variables, animations)
├── script.js # Fact logic, color theming, copy/share logic, accessibility
├── README.md # Project overview, features, credits
├── docs.md # Developer notes (this file)

yaml
Copy
Edit

- **No frameworks or build steps** – works instantly in any browser.

---

## UI & UX Design Choices

- **Glassmorphism** fact card with adaptive colors
- Modern **Google Fonts** (`Poppins`, `Inter`, `Montserrat`)
- Large, readable font sizes for mobile/desktop
- **Smooth transitions**: Card color and fact change animations
- High-contrast, accessible color palette for categories
- **Responsive:** Fluid layout for all screen sizes
- SVG/emoji for instant category recognition

---

## Fact Dataset & Generation

- 100 facts, 30+ categories (e.g. Programming, Hardware, Gadgets, AI, Robotics, Cybersecurity, Women in Tech, Tech History, Startups, Blockchain, Digital Culture, etc.)
- Each fact:  
  - `fact`: Fun, accurate, non-repetitive  
  - `category`: One of the distinct categories  
  - `emoji`: Context-appropriate icon/emoji
- Generated and filtered using [GenAI](https://chat.openai.com/) and [Pieces Copilot](https://pieces.app/).

---

## Color Theming & Icons

- Each category is mapped to a visually distinct, accessible color (`categoryColors` in `script.js`).
- Fact card and badge background update automatically based on category.
- **SVG icon option:**  
  You can extend the fact dataset to use SVG icons for even richer visuals—see comments in `script.js`.

---

## Accessibility

- **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<footer>`, and proper `<button>` elements
- **ARIA attributes** for badges, live region for fact card
- **Keyboard navigation**: All buttons are accessible via `Tab`, `Enter`, and `Space`
- **Focus indicators** for interactive elements
- High-contrast colors and scalable text

---

## Sharing Features

- **Copy Fact**: Instantly copy any fact (with category) to clipboard
- **Share to X (Twitter)**: Opens a pre-filled tweet with the fact
- **Share to LinkedIn** _(optional enhancement)_:  
  See `script.js` for adding a LinkedIn share link with pre-filled message

---

## How to Deploy

1. **Push all files to your GitHub repository**
2. **Enable GitHub Pages** (Settings > Pages > Source: main branch, root)
3. **Share your live demo link!**  
   (e.g. `https://yourusername.github.io/Gen-AI-101-Workshop-Pr/`)

---

## Future Improvements

- Add SVG icon support for sharper visuals on all devices
- Fact search or filter by category
- Save/share favorite facts
- Custom fact submission by users
- Light/Dark mode toggle
- Multi-language support

---

## Credits

**Developed for:**  
[GenAI 101 with Pieces Workshop](https://github.com/pieces-app/genai-101/)  
**By:** [Vansh Gupta](https://www.linkedin.com/in/vanshdigitals/)

---

> _This documentation shows not just code, but thought process, design choices, and how AI-powered workflows supercharge frontend projects!_