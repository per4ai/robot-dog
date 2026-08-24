## Site Overview

The **RoboDog** web site is a modern, responsive marketing‑type application that showcases the digital companion product for senior care. It consists of several sections:

| Section | Purpose |
|---|---|
| **Hero** | Large hero image with the RoboDog mascot, headline, and primary call‑to‑actions. |
| **Pillars** | Infographic grid explaining the four core value pillars (Form & Presence, Social Bridge, Dignity & Independence, Safety & Support). |
| **Challenges** | Cards describing user pain points and RoboDog’s solutions. |
| **Ecosystem** | Overview of the product suite (Suite, Knowledge Assistant, Semantic Memory, Headless Server, Companion). |
| **Explorer** | Interactive catalogue of use‑cases with filter chips (industry, problem, content type, component). |
| **Pilot / Value‑Proposition** | Summary of user‑study findings and pricing rationale. |
| **Footer** | Branding, copyright and navigation links. |

Key UI features include:

- Theme toggle (light/dark) with smooth CSS transitions.
- Language toggle (Swedish / English) for the `lang` attribute on the `<html>` element.
- Glass‑morphism / backdrop‑filter cards for a premium look.
- Accessible navigation: skip‑link, ARIA labels, focus styles.
- Responsive grid layouts using CSS Grid and media queries for mobile, tablet and desktop.
- Analytics via Plausible.

## Technical Stack

| Layer | Technology | Details |
|---|---|---|
| **Build / Dev Server** | **Vite** (see `vite.config.js`) | Fast dev server, ES module bundling, HMR. |
| **Package Management** | **npm** (see `package.json`) | Minimal dependencies – primarily Vite and development tools. |
| **Markup** | **HTML5** (see `index.html`) | Semantic structure, language attributes, meta tags for SEO. |
| **Styling** | **Vanilla CSS** (see `css/*.css`) | Custom design system using CSS variables (`--text`, `--muted`, `--cyan`, etc.), dark‑mode variables, glass‑morphism, media queries, component‑specific files. |
| **Interactivity** | **Plain JavaScript (ES2022 modules)** (see `js/main.js`) | Handles theme & language toggles, navigation menu, filter‑chip interactions, and dynamic catalogue rendering. |
| **Assets** | PNG images (`assets/robodog_hero.png`, `assets/robodog_small_white.png`), icons, and Google Fonts imported in CSS. |
| **Analytics** | Plausible (`<script async src="https://plausible.io/js/...">`). |
| **Hosting / Serving** | Simple static server (`python3 -m http.server 3000`) for local preview; can be deployed to any static‑file host (e.g., Firebase Hosting, Netlify, Vercel). |
| **SEO** | Proper `<title>`, `<meta name="description">`, Open Graph/Twitter cards, language‑specific `hreflang` links, and structured data (`<script type="application/ld+json">`). |

### Important Files

- HTML entry point: [index.html](file:///Users/per/Projects/robot-dog/index.html)
- Main stylesheet: [css/style.css](file:///Users/per/Projects/robot-dog/css/style.css)
- Visual system & component CSS: [css/visual-system.css](file:///Users/per/Projects/robot-dog/css/visual-system.css)
- Use‑cases page CSS: [css/use-cases.css](file:///Users/per/Projects/robot-dog/css/use-cases.css)
- JavaScript module: [js/main.js](file:///Users/per/Projects/robot-dog/js/main.js)
- Vite configuration: [vite.config.js](file:///Users/per/Projects/robot-dog/vite.config.js)
- Package definition: [package.json](file:///Users/per/Projects/robot-dog/package.json)

## Summary

The RoboDog site is a **static, SEO‑friendly, premium‑design web page** built with **Vite**, **plain HTML/CSS**, and **vanilla JavaScript**. It follows modern best practices (responsive layout, dark‑mode, accessibility, performance‑oriented CSS) while keeping the stack lightweight and easy to deploy.
